import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import { Link } from 'gatsby'
import logo from "../../assets/images/logo.png"

const NavbarTwo = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="tarn-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link
                                to="/"
                                onClick={() => setCollapsed(true)}
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Home <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    O Que Fazemos
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Proposta de Valor
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Testemunhos
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Parceiros
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Videos
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Consultoria <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="#"
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    Transformação Organizacional <i className='bx bx-chevron-down'></i>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Diagnóstico RH
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Diagnóstico SAC
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Diagnóstico Processos
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Diagnóstico Logística
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/blogs/concepcao-e-implementacao"
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    Concepção e Implementação <i className='bx bx-chevron-down'></i>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link
                                                            to="/blogs/plano-carreira"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            PDI
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Plano Carreiras
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Avaliação de Desempenho
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Compensação e Benefícios
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Formação e Desenvolvimento
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/blogs/processos"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Processos
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Gestão Administrativa
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link
                                                            to="/"
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Sistema de Gestão
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Atuação <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Recursos Humanos
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/blogs/servico-ao-cliente"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    SAC
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Finanças
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Logística
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Actividades <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Coaching
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Workshops
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Executive Search
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Recrutamento <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Anúncios
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/blog/"
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Eventos

                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/contact"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Contactos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavbarTwo
