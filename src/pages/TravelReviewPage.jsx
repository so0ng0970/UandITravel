import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { motion } from "framer-motion";
const TravelReviewPage = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 30 }}
        >
            <Background>
                <Header />
                <Div>
                    <Textarea>
                        <textarea
                            className="textarea is-info"
                            placeholder="후기를 남겨 주세요!"
                            style={{ backgroundColor: "#e2f0ff" }}
                        ></textarea>
                    </Textarea>
                </Div>
            </Background>
        </motion.div>
    );
};

const DetailContainer = styled.div``;
const Background = styled.div`
    overflow: auto;
    height: 100vh;
    background-size: cover;
    background-image: url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif); ;
`;

const Div = styled.div`
    overflow: auto;
    height: 82vh;
    margin: 10px 170px;

    background-image: url(https://t1.daumcdn.net/cfile/blog/1245F5274B1882015E);

    background-color: #ffffffd0;
    border-radius: 10px;
`;
const Textarea = styled.div`
    /* overflow: auto;
  height: 82vh; */
    margin: 20px 50px;
`;

export default TravelReviewPage;
