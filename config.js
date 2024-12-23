var config = {
    style: 'mapbox://styles/jovidai/cm4bvm4vp01dh01rdb0mae3o0',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoiam92aWRhaSIsImEiOiJjbHhraHIyeGUwMW9yMmpvZjl2NjB5ZDU1In0.40trva_cvnBUORpY1dgkSg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    // attributionControl: false,
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#f2b221'
    },
    // insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    // title: 'Home insurance non-renewals by county',
    // subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    // byline: 'By a I.M. Amapper',
    // footer: 'Map by Jovi Dai - Bay Area News Group',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'hidden-identifier',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-119.32214, 37.41801],
                zoom: 4.65,
                pitch: 0.00,
                bearing: 0.00
            },
            mobileLocation: {
                center: [-119.32214, 37.41801],
                zoom: 4.65, // Adjusted zoom level for mobile
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'ca-county-boundaries',
                //     opacity: 20,
                //     duration: 1000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'ca-county-boundaries',
                //     opacity: 0,
                //     // duration: 2000
                // },
                // {
                //     layer: 'ca-housing-insurance',
                //     opacity: 0,
                //     // duration: 2000
                // },
            ]
        },
        {
            id: 'zero-identifier',
            alignment: 'left',
            hidden: true,
            // description: 'Say something about situation of insurance in California.',
            location: {
                center: [-119.32214, 37.41801],
                zoom: 4.65,
                pitch: 0.00,
                bearing: 0.00
            },
            mobileLocation: {
                center: [-119.32214, 37.41801],
                zoom: 4.65, // Adjusted zoom level for mobile
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'ca-county-boundaries',
                //     opacity: .8,
                //     duration: 2000
                // },
                // {
                //     layer: 'ca-housing_insurance',
                //     opacity: .71,
                //     duration: 2000
                // },
            ],
            onChapterExit: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: 0,
                    duration: 1000
                },
            ]
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            description: 'As several insurance companies cease accepting new property insurance applications or withdraw from the California market due to climate-related factors like wildfires, thousands of homeowners increasingly face the challenge of losing their home insurance.',
            location: {
                center: [-119.32214, 37.41801],
                zoom: 4.65,
                pitch: 0.00,
                bearing: 0.00
            },
            mobileLocation: {
                center: [-119.32214, 37.41801],
                zoom: 4.65, // Adjusted zoom level for mobile
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
            ],
            onChapterExit: []
        },

        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles County',
            // image: './assets/san-fran.jpeg',
            description: 'According to the California Department of Insurance, Los Angeles County has the highest number of non-renewals among all California counties from 2015 to 2024, with approximately 1,431,500 non-renewed policies and a non-renewal rate of 8.80 per 100 policies.',
            location: {
                center: [-118.38606, 33.99058],
                zoom: 9,
                pitch: 35,
                bearing: 0
            },
            mobileLocation: {
                center: [-118.38606, 33.99058],
                zoom: 9, // Adjusted zoom level for mobile
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'la-county-boundary',
                    opacity: .9,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'la-county-boundary',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Riverside County',
            // image: './assets/washington-dc.jpg',
            description: 'Riverside County is second in the state, with around 693,400 non-renewed policies and a non-renewal rate of 12.39 per 100 policies.',
            location: {
                center: [-117.396156, 33.953350],
                zoom: 9,
                pitch: 35,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                // curve: 1, // change the speed at which it zooms out
            },
            mobileLocation: {
                center: [-117.40135, 33.91203],
                zoom: 8, // Adjusted zoom level for mobile
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'riverside-county-boundary',
                    opacity: .9,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'riverside-county-boundary',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'four-identifier',
            alignment: 'left',
            hidden: false,
            title: 'San Diego County',
            // image: './assets/geneva.jpg',
            description: 'San Diego County ranks third in California, with about 612,100 non-renewed policies and a non-renewal rate of 9.98 per 100 policies.',
            location: {
                center: [-117.06722, 32.80364],
                zoom: 9,
                pitch: 35,
                bearing: 0.00
            },
            mobileLocation: {
                center: [-117.06722, 32.80364],
                zoom: 9, // Adjusted zoom level for mobile
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'san-diego-county-boundary',
                    opacity: .9,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'san-diego-county-boundary',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Santa Clara County',
            // image: './assets/buenos-aires.jpg',
            description: 'Meanwhile, in the Bay Area, three major counties have the highest non-renewals from 2015 to 2024. Santa Clara County has about 301,900 non-renewed policies, with a non-renewal rate of 8.55 per 100.',
            location: {
                center: [-121.96721, 37.37098],
                zoom: 9,
                pitch: 35,
                bearing: 0
            },
            mobileLocation: {
                center: [-121.96721, 37.37098],
                zoom: 9, // Adjusted zoom level for mobile
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'santa-clara-county-boundary',
                    opacity: .9,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'santa-clara-county-boundary',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Alameda County',
            // image: './assets/buenos-aires.jpg',
            description: 'Alameda Clara County has about 278,800 non-renewed policies, with a non-renewal rate of 8.79 per 100 policies.',
            location: {
                center: [-121.7885, 37.7940],
                // [-121.7195, 37.6017]
                zoom: 9,
                pitch: 35,
                bearing: 0
            },
            mobileLocation: {
                center: [-121.7885, 37.7940],
                zoom: 9, // Adjusted zoom level for mobile
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'alameda-county-boundary',
                    opacity: .9,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'alameda-county-boundary',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'seventh-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Contra Costa County',
            // image: './assets/buenos-aires.jpg',
            description: 'Contra Costa County has about 250,335 non-renewed policies, with a non-renewal rate of 9.38 per 100 policies.',
            location: {
                center: [-121.99497, 37.91063],
                zoom: 9,
                pitch: 35,
                bearing: 0
            },
            mobileLocation: {
                center: [-121.99497, 37.91063],
                zoom: 9, // Adjusted zoom level for mobile
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'contra-costa-county-boundary',
                    opacity: .9,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'contra-costa-county-boundary',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: 'lasttwo-identifier',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-119.32214, 37.41801],
                zoom: 4.65,
                pitch: 0.00,
                bearing: 0.00
            },
            mobileLocation: {
                center: [-119.32214, 37.41801],
                zoom: 4.65, // Adjusted zoom level for mobile
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: '',
                //     opacity: .0,
                //     duration: 1000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'ca-county-boundaries',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'ca-housing-insurance',
                    opacity: 0,
                    duration: 1000
                },
            ]
        },
        {
            id: 'last-identifier',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-119.32214, 37.41801],
                zoom: 4.65,
                pitch: 0.00,
                bearing: 0.00
            },
            mobileLocation: {
                center: [-119.32214, 37.41801],
                zoom: 4.65, // Adjusted zoom level for mobile
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: '',
                //     opacity: .0,
                //     duration: 1000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'ca-county-boundaries',
                //     opacity: 0,
                //     duration: 1000
                // },
                // {
                //     layer: 'ca-housing-insurance',
                //     opacity: 0,
                //     duration: 1000
                // },
            ]
        },

    ]
};