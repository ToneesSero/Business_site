import Footer from './components/Footer';
import Header from './components/Header';
import './styles/css/App.css';
import './styles/scss/main.scss'

import logoImg from './image/logo.svg'
import infoImg from './image/hero/info_img.svg'
import descriptionImg from './image/description/lock.jpg'
import cardImg from './image/features/img_card.svg'

import Button from './UI/Button/Button';
import ButtonToUrl from './UI/ButtonToUrl/ButtonToUrl';
import Card from './UI/Card/Card';
import Input from './UI/Input/Input';
import { useFormik } from 'formik';
import { defaultSchemas } from './schemas/defaultSchemas';
import { useRef } from 'react';

function App() {
  

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm()
  }

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subjects: '',
      companyName: '',
      message: '',
    },
    validationSchema: defaultSchemas,
    onSubmit,

  })
  
  const mainRef = useRef(null)

  return (
    <div className="App" ref={mainRef}>
      <Header mainRef={mainRef} />

      <section className="hero" >
        <div className="hero_bg_img"></div>
        <div className="hero_bg_color"></div>
        <div className="container container_flex">
          <div className="info info_flex">
            <div className="info__text">
              <h1 className="info__text__h1 info__text__h1_color_white">Certified digital
                signatures accounts
                in collaborative
                management</h1>
              <p className="info__text__p info__text__p_color_white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
              <ButtonToUrl withArrow={true} bgColor={'green'} url={'https://www.google.com/'}>  See Our Services </ButtonToUrl>
            </div>
            <div className="info__img">
              <img src={infoImg} alt="info" />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about" >
        <div className="container">
          <div className="about__title gap_25">
            <h1 className="info__text__h1 info__text__h1_color_black">Facts and Figures</h1>
            <p className="info__text__p info__text__p_color_black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus.</p>
          </div>
          <div className="container__card">
            <Card
              title={'Members'}
              textAfterTitle={'1200+'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit'}
              bgCard={'blue'}
            />

            <Card
              title={'Committed capital'}
              textAfterTitle={'$50m'}
              description={'Certification and interoperability Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              bgCard={'blue'}
            />

            <Card
              title={'Countries'}
              textAfterTitle={'20'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit'}
              bgCard={'blue'}
            />

            <Card
              title={'Years'}
              textAfterTitle={'20'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit e'}
              bgCard={'blue'}
            />

          </div>
          <div className="about__companies">
            <p className="about__companies__title">Worked with 100+ Companies</p>
            <div className="about__companies__img about__card_flex">
              <img src={logoImg} alt="logo 1" />
              <img src={logoImg} alt="logo 2" />
              <img src={logoImg} alt="logo 3" />
              <img src={logoImg} alt="logo 4" />
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="features__title">
            <h2 className="info__text__h2 info__text__h2_color_white">We are building software solution that solves your business challenges</h2>
            <p className="info__text__p info__text__p_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          </div>
          <div className="container__card container__card_flex container__card_gap_60">

            <Card
              img={cardImg}
              title={'Invoicing'}
              description={'Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value'}
              bgCard={'white'}
            />

            <Card
              img={cardImg}
              title={'Support'}
              description={'Reduce businesses operational risk while maintaining smooth operations and seamless document workflows.'}
              bgCard={'white'}
            />

            <Card
              img={cardImg}
              title={'Surveying'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,'}
              bgCard={'white'}
            />

          </div>
        </div>
      </section>

      <section className="description" >
        <div className="container container_flex">
          <div className="decription__info">
            <h1 className="info__text__h1 info__text__h1_color_black">InvestSeed and ist’s partners have a set of unique skills and experiences:</h1>

            <div className="container__card">
              <Card
                title={"22+ years"}
                text={'Expirience'}
                description={'Strong business experience (Lorem, Ispum, Lorem...)'}
                bgCard={'white'}
                bgTitle={'blue'}
              />

              <Card
                title={"15 countries"}
                text={'Expirience'}
                description={'A proven technical expertise in paperless applications and integration.'}
                bgCard={'white'}
                bgTitle={'blue'}
              />

            </div>
          </div>
          <div className="decription__img">
            <img src={descriptionImg} alt="lock" />
          </div>
        </div>
      </section>

      <section className="benefits" id="benefits" >
        <div className="hero_bg_img"></div>
        <div className="hero_bg_color"></div>
        <div className="container">
          <div className="benefits__tittle gap_25">
            <h1 className="info__text__h1 info__text__h1_color_white">Explore our Investseed
              investing services.</h1>
            <p className="info__text__p info__text__p_color_white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          </div>

          <Card
            img={cardImg}
            title={'Invoicing'}
            description={'Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value'}
            bgCard={'black'}
          />

          <Card
            img={cardImg}
            title={'Invoicing'}
            description={'Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value'}
            bgCard={'black'}
          />

          <Card
            img={cardImg}
            title={'Invoicing'}
            description={'Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value'}
            bgCard={'black'}
          />

          <Card
            img={cardImg}
            title={'Invoicing'}
            description={'Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value'}
            bgCard={'black'}
          />

          <Card
            img={cardImg}
            title={'Invoicing'}
            description={'Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value'}
            bgCard={'black'}
          />

          <Card
            img={cardImg}
            title={'Invoicing'}
            description={'Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value'}
            bgCard={'black'}
          />

        </div>
      </section>

      <section className="video" id="video">
        <div className="container">
          <div className="video__text">
            <h1 className="info__text__h1 info__text__h1_color_black">What our investors tell about InvestSeed</h1>
            <p className="info__text__p info__text__p_color_black">Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
            <div className="video__person">
              <div className="video__person__img"></div>
              <div className="video__person__info">
                <p className="video__person__info__name">Emma Williks</p>
                <p className="video__person__info__desc">CEO at MazeAI</p>
              </div>
            </div>
          </div>
          <div className="video__player">
            <iframe src="https://www.youtube.com/embed/14SzfLg37Uk?si=_jyCo7iXlRb00KVa" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__img"></div>
        <div className="cta__container__text">
          <div className="cta__text">
            <h1 className="info__text__h1 info__text__h1_color_white">InvestSeed can <span className="info__text__h1_color_blue">transform</span> your digital document management.</h1>
            <ButtonToUrl withArrow={true} bgColor={'green'} url={"https://www.google.com/"}> Book A Demo </ButtonToUrl>
          </div>
        </div>
      </section>

      <section className="contactUs" id="contactUs">
        <div className="container">
          <h1 className="info__text__h1 info__text__h1_color_black">Contact us</h1>
          <p className="info__text__p info__text__p_color_black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          <div className="contactUs__form">
            <div className="contactUs__form__desc">

              <div className="contactUs__form__desc_container">
                <h2 className="info__text__h2 info__text__h2_color_white">Get in touch</h2>
                <div className="contactUs__form__desc__item">
                  <div className="contactUs__form__desc__img email__img"></div>
                  <div className="contactUs__form__desc__text email__text">
                    <p className="info__text__p info__text__p_color_dark-grey">For products information:</p>
                    <p className="info__text__p info__text__p_color_white"> <a href="mailto:contact@Investseed.com">contact@Investseed.com</a> </p>
                    <p className="info__text__p info__text__p_color_dark-grey">For products information:</p>
                    <p className="info__text__p info__text__p_color_white"><a href="mailto:commercial@Investseed.com">commercial@Investseed.com</a></p>
                  </div>
                </div>
                <div className="contactUs__form__desc__item">
                  <div className="contactUs__form__desc__img phone__img"></div>
                  <div className="contactUs__form__desc__text phone__text">
                    <p className="info__text__p info__text__p_color_dark-grey">Phone number</p>
                    <p className="info__text__p info__text__p_color_white"><a href="tel:+330911000000">+33 (0)9 11 00 00 00</a></p>
                    <p className="info__text__p info__text__p_color_white"><a href="tel:+330911000000">+33 (0)9 11 00 00 00</a></p>
                  </div>
                </div>
                <div className="contactUs__form__desc__item">
                  <div className="contactUs__form__desc__img office__img">

                  </div>
                  <div className="contactUs__form__desc__text office__text">
                    <p className="info__text__p info__text__p_color_dark-grey">BRANCH OFFICE</p>
                    <p className="info__text__p info__text__p_color_white">19 avenue Franklin Willings
                      19901 Boston</p>

                    <p className="info__text__p info__text__p_color_dark-grey">HEAD OFFICE</p>
                    <p className="info__text__p info__text__p_color_white">19 avenue Franklin Willings
                      19901 Boston</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="contactUs__form__inputs">
              <form id="contactUs__submit" onSubmit={handleSubmit}>
                <div className="form__item form__item_width_half">
                  <label htmlFor="contactUs_Name">Name</label>
                  <Input name="name" type={'text'} placeholder={"Full name"} maxLength={"15"} className={"input input-name " + (errors.name ? "error-input" : "")} value={values.name} onBlur={handleBlur} onChange={handleChange} />
                  {errors.name ? <p className='error-label'>{errors.name}</p> : ''}
                </div>

                <div className="form__item form__item_width_half">
                  <label htmlFor="contactUs_Email">Email</label>
                  <Input name="email" type={'text'} placeholder={"Gmail"} className={"input input-email " + (errors.email ? "error-input" : "")} value={values.email} onBlur={handleBlur} onChange={handleChange} />
                  {errors.email ? <p className='error-label'>{errors.email}</p> : ''}
                </div>


                <div className="form__item form__item_width_full">
                  <label htmlFor="contactUs_Subjects">Subjects</label>
                  <Input name="subjects" type={'text'} placeholder={"Subject"} maxLength={"65"} className={"input input-subject " + (errors.subjects ? "error-input" : "")} value={values.subjects} onBlur={handleBlur} onChange={handleChange} />
                  {errors.subjects ? <p className='error-label'>{errors.subjects}</p> : ''}
                </div>

                <div className="form__item form__item_width_full">
                  <label htmlFor="contactUs_Company-Name">Company Name</label>
                  <Input name="companyName" type={'text'} placeholder={"Brand/Company/Product Name"} className={"input input-company-name " + (errors.companyName ? "error-input" : "")} value={values.companyName} onBlur={handleBlur} onChange={handleChange} />
                  
                </div>

                <div className="form__item form__item_width_full">
                  <label htmlFor="contactUs_Message">Message</label>
                  <Input name="message" type={'text'} placeholder={"Tell us about your project..."} className={"input input-message " + (errors.message ? 'error-input' : '')} value={values.message} onBlur={handleBlur} onChange={handleChange} />
                  {errors.message? <p className='error-label'>{errors.message}</p> : ''}
                </div>

                <div className="form__item">
                  <Button withArrow={true} bgColor={'green'} type={'submit'}>Send Message</Button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

      <Footer mainRef={mainRef} />
    </div>
  );
}

export default App;
