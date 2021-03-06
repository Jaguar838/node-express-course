import s from './layout.module.css'

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
    const rootStyles = (urlBg) ? {backgroundImage:`url(${urlBg})`}:{background:{colorBg}};
 return   (
        <section className={s.root} style={rootStyles} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
        )
}

export default Layout;