import React, { Fragment } from "react";
import { Container, TertiaryButton } from "../../utilities/GlobalStyles";
import { FaUserTie, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { BucketsWrapper, Bucket, BucketIcon, BucketHeader, BucketText } from "./Buckets.elements";

function Buckets () {
    return(
            <Container>
                <BucketsWrapper>
                    <Bucket>
                        <BucketIcon><FaUserGraduate /></BucketIcon>
                        <BucketHeader>For Students</BucketHeader>
                        <BucketText>Learn with us! We are confident that we can achieve our dreams together.</BucketText>
                        <TertiaryButton>Submit Inquiry</TertiaryButton>
                    </Bucket>
                    <Bucket>
                        <BucketIcon><FaUserTie /></BucketIcon>
                        <BucketHeader>For Companies</BucketHeader>
                        <BucketText>Partner with us! We are confident that we can grow together.</BucketText>
                        <TertiaryButton>Submit Inquiry</TertiaryButton>
                    </Bucket>
                    <Bucket>
                        <BucketIcon><FaChalkboardTeacher /></BucketIcon>
                        <BucketHeader>For Teachers</BucketHeader>
                        <BucketText>Work with us! We are confident that we can achieve our dreams together.</BucketText>
                        <TertiaryButton>Submit Inquiry</TertiaryButton>
                    </Bucket>
                </BucketsWrapper>
            </Container>
    )
}

export default Buckets;
