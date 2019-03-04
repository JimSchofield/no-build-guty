(function () {

    const { 
        MediaUpload,
        RichText
    } = wp.editor;

    const blockConfig = {
        title: 'Bio Vanilla Javascript',
        icon: 'smiley',
        category: 'common',
        attributes: {
            imgUrl: {
                type: 'string',
                default: 'http://placehold.it/200'
            },
            bodyText: {
                type: 'string',
            },
            headingText: {
                type: 'string',
            },
        },
        edit(props) {

            function selectImage(value) {
                console.log(value);
                props.setAttributes({
                    imgUrl: value.sizes.full.url,
                })
            }

            return wp.element.createElement(
                'div',
                {
                    className: props.className
                },
                [
                    wp.element.createElement(
                        MediaUpload,
                        {
                            onSelect: selectImage,
                            render(renderProps) {
                                return wp.element.createElement(
                                    'button',
                                    {
                                        onClick: renderProps.open,
                                    },
                                    wp.element.createElement(
                                        'img',
                                        {
                                            src: props.attributes.imgUrl,
                                        },
                                        null
                                    ),
                                )
                            }
                        },
                        null
                    ),
                    wp.element.createElement(
                        RichText,
                        {
                            tag: 'div',
                            className: 'heading',
                            value: props.attributes.headingText,
                            onChange: function(value) {
                                props.setAttributes({
                                    headingText: value,
                                })
                            },
                            placeholder: 'Heading Goes here'
                        },
                        null
                    ),
                    wp.element.createElement(
                        RichText,
                        {
                            tag: 'p',
                            value: props.attributes.bodyText,
                            onChange: function(value) {
                                props.setAttributes({
                                    bodyText: value
                                })
                            },
                            placeholder: 'Body text goes here'
                        },
                        null,
                    ),
                ]
            );
        },
        save(props) {
            return wp.element.createElement(
                'div',
                null,
                [
                    wp.element.createElement(
                        'img',
                        {
                            src: props.attributes.imgUrl,
                        },
                        null
                    ),
                    wp.element.createElement(
                        'div',
                        {
                            className: 'heading',
                        },
                        props.attributes.headingText
                    ),
                    wp.element.createElement(
                        'p',
                        null,
                        props.attributes.bodyText
                    ),
                ]
            );
        }
    };

    wp.blocks.registerBlockType('no-build-blocks/bio-vanilla', blockConfig);

})();