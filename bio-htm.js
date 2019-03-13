(function() {

    const html = htm.bind(wp.element.createElement);

    const {
        MediaUpload, 
        RichText
    } = wp.editor;

    const blockConfig = {
        title: 'Bio block with htm',
        icon: 'smiley',
        category: 'common',

        attributes: {
            imgUrl: {
                type: 'string',
                default: 'http://placehold.it/300'
            },
            heading: {
                type: 'string',
            }
        },

        edit(props) {

            return html`
            <div class="bio">
                <${MediaUpload}
                    onSelect=${({url}) => props.setAttributes({ imgUrl: url })}
                    render=${({open}) => (
                        html`
                            <button onClick=${open}>
                                <img src=${props.attributes.imgUrl} />
                            </button>
                        `)
                    }
                />
                <${RichText}
                    tagName="div"
                    className="heading"
                    value=${props.attributes.heading}
                    onChange=${heading => props.setAttributes({heading})}
                    placeholder="Heading text"
                />
                <${RichText}
                    tagName="p"
                    value=${props.attributes.bodyText}
                    onChange=${bodyText => props.setAttributes({bodyText})}
                    placeholder="Body text"
                />
            </div>
        `},
        save(props) {
            return html`
            <div class="bio">
                <img src=${props.attributes.imgUrl} />
                <${RichText.Content}
                    tagName="div"
                    className="heading"
                    value=${props.attributes.heading}
                />
                <${RichText.Content}
                    tagName="p"
                    value=${props.attributes.bodyText}
                />
            </div>
        `},
    }

    wp.blocks.registerBlockType('no-build-guy/bio-block-with-htm', blockConfig);

})();