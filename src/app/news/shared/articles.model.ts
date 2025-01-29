export class Article {
    constructor(

        public id: number,
        public type: number,
        public subtype: number,
        public category: string,
        public title: string,
        public overview: string,
        public permalink: {
            slug: string,
            link: string
        },
        public images: {
            share: {
                desktop: {
                    link: string,
                    width: number,
                    height: number
                },
                mobile: {
                    link: string,
                    width: number,
                    height: number
                }
            },
            thumb: {
                desktop: {
                    link: string,
                    width: number,
                    height: number
                },
                mobile: {
                    link: string,
                    width: number,
                    height: number
                }
            },
            feature: {
                desktop: {
                    link: string
                },
                mobile: {
                    link: string,
                    width: number,
                    height: number
                }
            }
        }
    ){}
}