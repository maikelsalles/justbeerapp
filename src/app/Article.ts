export interface Article {
    id: number,
    type: number,
    subtype: number,
    category: string,
    title: string,
    overview: string,
    permalink: {
        slug: string,
        link: string
    },
    images: {
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
}