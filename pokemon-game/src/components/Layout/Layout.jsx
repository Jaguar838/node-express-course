import s from './layout.module.css'

const Layout = ({ id, title, urlBg, colorBg, children }) => {
     const rootStyles = (urlBg) ? { backgroundImage: `url(${urlBg})` } : { background: { colorBg } };
    // const sectionStyle = {};
    // if (urlBg) {
    //     sectionStyle.backgroundImage = `url(${urlBg})`;
    // }

    // if (colorBg) {
    //     sectionStyle.backgroundColor = colorBg;
    // }
     
 return   (
        <section className={s.root} style={rootStyles} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                    {children}
                    </div>
                </article>
            </div>
        </section>
        )
}

export default Layout;