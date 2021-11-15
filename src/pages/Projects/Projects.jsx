import React from "react";
import ImageItem from "../../components/ImageItem";
import * as S from "./style";

const Projects = () => {
    console.log("projects");
    return (
        <S.Projects>
            <ImageItem
                imagesToIgnore={["https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/mergestories/splash.40.03.jpeg"]}
                itemSet={[
                    {
                        mainTitle: "Merge Stories",
                        subTitle: "Casual Mobile Game",
                        hoverSubtitle: "Casual Mobile Game",
                        images: [
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/mergestories/splash.40.03.jpeg",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/mergestories/StyleGuide.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/mergestories/Untitled-1.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/mergestories/Untitled-2.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/mergestories/Untitled-3.png",
                        ],
                        description: (
                            <div>
                                <p
                                    style={{ margin: "1em 0" }}
                                >{`Merge Stories is a casual mobile game which I worked on from its early development stages. This included everything from the design language, to UI/UX, as well as the animations.`}</p>
                                <p
                                    style={{ margin: "1em 0" }}
                                >{`As a part of my role, I worked directly with the product team, as well as both the R&D and Monetization teams which worked on the game.`}</p>
                                <p
                                    style={{ margin: "1em 0" }}
                                >{`The game was developed in Unity, and was released on both the Android and the iOS App Stores.`}</p>
                            </div>
                        ),
                    },
                ]}
            />
            <ImageItem
                itemSet={[
                    {
                        mainTitle: "Refundit",
                        subTitle: "A cash-back app for taxes while traveling abroad",
                        hoverSubtitle: "A cash-back app",
                        images: [
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/refundit/a1.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/refundit/a2.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/refundit/a3.png",
                        ],
                        description: (
                            <div>
                                <p style={{ margin: "1em 0" }}>{`Refundit is an app that helps you  recieve tax refunds while traveling abroad.
                                    While working on this app, I created the app’s visual language as well as its UX,
                                    with the goal of displaying raw data while obtaining a vacation-like feel.`}</p>
                                <p style={{ margin: "1em 0" }}>{`
                                    The app manages the user’s receipts, evaluates the amount of money that will
                                    potentially be refunded and guides the user through the steps that are to be
                                    taken in order to complete the process.`}</p>
                            </div>
                        ),
                    },
                ]}
            />
            <ImageItem
                withPassword
                imagesToIgnore={["https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/locked.jpeg"]}
                itemSet={[
                    {
                        mainTitle: "Cycognito",
                        subTitle: "Cyber Defense Desktop App",
                        images: [
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/locked.jpeg",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/b1.gif",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/b2.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/b3.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/b4.png",
                        ],
                    },
                    {
                        hoverSubtitle: "",
                        images: [
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/cyco_drildown_4.gif",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/3.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/cycognito/4.png",
                        ],
                        description: (
                            <div>
                                <p
                                    style={{ margin: "1em 0" }}
                                >{`A system which is used to detect security breaches within an organization’s servers.`}</p>
                                <p style={{ margin: "1em 0" }}>{`
                                During my time at Pumika, I took part in designing the system’s UI, while focusing
                                on a Sci-Fi theme. This consisted of emphasizing important alerts, while creating a
                                relevant status report that fits the theme.`}</p>
                            </div>
                        ),
                    },
                ]}
            />
            <ImageItem
                imagesToIgnore={["https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/pokerheat.jpeg"]}
                itemSet={[
                    {
                        mainTitle: "Poker Heat",
                        subTitle: "Inbar Even Zur for Pumika",
                        hoverSubtitle: "Poker Game for Mobile Devices & Facebook",
                        images: [
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/pokerheat.jpeg",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/Ring_info_02.mp4",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/Ptk_pokerheat_Profile_05.mp4",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/League_info_cards.mp4",
                        ],
                    },
                    {
                        hoverSubtitle: "",
                        images: [
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/image.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202018%E2%80%8F.12%E2%80%8F.08%20%D7%91%E2%80%8F.17.21.32.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/RINGS_Phonix_milestons_03.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/image%20%282%29.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/pokerheat/image%20%281%29.png",
                        ],
                        description: (
                            <div>
                                <p style={{ margin: "1em 0" }}>
                                    {`While working on Poker Heat, Playtika’s award winning poker game, I was responsible
                                for designing the game’s animations as well as its UI & UX.`}
                                </p>
                                <p style={{ margin: "1em 0" }}>
                                    {`At a certain point, I became
                                in charge of the Poker Heat project. This consisted of working directly with Playtika’s
                                representatives on a daily basis which included participating in meetings both in Playtika’s
                                HQ and the Pumika studios. I worked on this project for a total of a year and a half.`}
                                </p>
                            </div>
                        ),
                    },
                ]}
            />
            <ImageItem
                imagesToIgnore={["https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/hygglish/x.gif"]}
                itemSet={[
                    {
                        mainTitle: "Hygglish",
                        subTitle: "Isometric Typeface",
                        hoverSubtitle: "Isometric Typeface",
                        images: [
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/hygglish/x.gif",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/hygglish/1.png",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/hygglish/hygg.gif",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/hygglish/x%20-%20Copy.gif",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/hygglish/Julelo.gif",
                            "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/hygglish/Chef.gif",
                        ],
                        description: (
                            <div>
                                <p style={{ margin: "1em 0" }}>
                                    We created an isometric typeface to explore the unique aspects of the Danish language. The font is inspired by
                                    modularity, which is an integral part of Denmark: from Lego, which is a Danish invention, to the land itself which
                                    is “made” of hundreds of islands. We decided to make modularity our top value, alongside functionality and
                                    playfulness.
                                </p>
                                <p style={{ margin: "1em 0" }}>
                                    The website presents Danish words on the screen which are triggered by a keystroke on a specific letter, meaning
                                    that for each letter pressed, a corresponding Danish word shows up. In addition, the word's translation is also
                                    shown on screen.
                                </p>
                                <p style={{ margin: "1em 0" }}>This project was made for Shenkar College.</p>
                            </div>
                        ),
                    },
                ]}
            />
            <div style={{ display: "block", width: "100%", background: "#fafafb", borderRadius: "8px" }}></div>
        </S.Projects>
    );
};

export default Projects;
