import React from "react";
import Text from "../../components/Text";
import Chip from "../../components/Chip";
import * as S from "./style";

const About = () => {
    return (
        <S.About>
            <S.Top>
                <S.Biography>
                    <S.BiographyHeader>
                        <Text size="16px" bold>
                            Biography
                        </Text>
                    </S.BiographyHeader>
                    <S.BiographyContent>
                        <Text size="16px">
                            I'm a product designer based in Tel Aviv, Israel with experience in delivering end-to-end UX/UI design for software
                            products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things
                            everyday.
                        </Text>
                    </S.BiographyContent>
                </S.Biography>
                <S.Info>
                    <S.InfoItem>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"
                            viewBox="0 0 24 24"
                            role="img"
                            class="icon fill-current icon-16"
                            style={{ width: "16px", height: "16px", marginBlockStart: "-2px", marginInlineEnd: "10px", color: "#3d3d4e" }}
                        >
                            <path d="m12.001 0c-6.001 0-9.001 4.5-9.001 9s9.001 15 9.001 15 8.999-10.5 8.999-15-3-9-8.999-9zm-.001 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                        </svg>
                        <Text size="14px">Tel Aviv, Israel</Text>
                    </S.InfoItem>
                    <S.InfoItem>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            role="img"
                            class="icon fill-current icon-16"
                            style={{ width: "16px", height: "16px", marginBlockStart: "-2px", marginInlineEnd: "10px", color: "#3d3d4e" }}
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.33333 1.33333H6.66667C6.29867 1.33333 6 1.03467 6 0.666667C6 0.298667 6.29867 0 6.66667 0H9.33333C9.70133 0 10 0.298667 10 0.666667C10 1.03467 9.70133 1.33333 9.33333 1.33333ZM1.33333 2.66667H14.6667C15.4027 2.66667 16 3.264 16 4V13.3333C16 14.0693 15.4027 14.6667 14.6667 14.6667H1.33333C0.597333 14.6667 0 14.0693 0 13.3333V4C0 3.264 0.597333 2.66667 1.33333 2.66667ZM4.99997 5.33333C5.91863 5.33333 6.66663 6.08067 6.66663 7C6.66663 7.91867 5.91863 8.66667 4.99997 8.66667C4.0813 8.66667 3.3333 7.91867 3.3333 7C3.3333 6.08067 4.0813 5.33333 4.99997 5.33333ZM2.6667 11.496V12H7.33337V11.496C7.33337 10.3033 6.2867 9.33333 5.00003 9.33333C3.71337 9.33333 2.6667 10.3033 2.6667 11.496ZM12.6666 10H9.99997C9.6333 10 9.3333 9.7 9.3333 9.33333C9.3333 8.96667 9.6333 8.66667 9.99997 8.66667H12.6666C13.0333 8.66667 13.3333 8.96667 13.3333 9.33333C13.3333 9.7 13.0333 10 12.6666 10ZM9.99997 7.33333H12.6666C13.0333 7.33333 13.3333 7.03333 13.3333 6.66667C13.3333 6.3 13.0333 6 12.6666 6H9.99997C9.6333 6 9.3333 6.3 9.3333 6.66667C9.3333 7.03333 9.6333 7.33333 9.99997 7.33333Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <Text size="14px">Playtika, Jelly Button</Text>
                    </S.InfoItem>
                </S.Info>
            </S.Top>
            <S.Bottom>
                <S.Skills>
                    <S.SkillsHeader>
                        <Text size="16px" bold>
                            Skills
                        </Text>
                    </S.SkillsHeader>
                    <S.Chips>
                        <Chip text="sketch" />
                        <Chip text="invision" />
                        <Chip text="adobe illustrator" />
                        <Chip text="adobe photoshop" />
                        <Chip text="agile methodology" />
                        <Chip text="unity" />
                        <Chip text="adobe after effects" />
                    </S.Chips>
                </S.Skills>
            </S.Bottom>
        </S.About>
    );
};

export default About;
