import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { GiHeartPlus } from "react-icons/gi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsTelephone, BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

import img from "./assets/cat-1.png";
import img2 from "./assets/dog-1.png";
import step from "./assets/step.png";
import sub1 from "./assets/sub-1.png";
import sub2 from "./assets/sub-2.png";
import bg from "./assets/bg.png";
import dog2 from "./assets/dog-2.png";
import services1 from "./assets/services-1.png";
import services2 from "./assets/service-2.png";
import services3 from "./assets/service-3.png";
import services4 from "./assets/service-4.png";
import services5 from "./assets/service-5.png";
import services6 from "./assets/service-6.png";

const data = [
  {
    id: 1,
    title: "OPD Consultation",
    desc: "Our experienced veterinary doctors provide nose-to-tail consultations to make sure your pet is happy and healthy.",
    img: services1,
  },
  {
    id: 2,
    title: "Pet Grooming",
    desc: "Professional pet groomers with magical hands for your pets. We provide bathing, cleaning, haircuts, nail trimming and medicated bath to make your pet look smart and healthy.",
    img: services2,
  },
  {
    id: 3,
    title: "Surgeries",
    desc: "We perform soft tissue surgeries like Neutering and spaying, orthopaedic, and other speciality surgeries right here in our clinic.",
    img: services3,
  },
  {
    id: 4,
    title: "Pet Food",
    desc: "Every pet is unique and has different taste buds, and we’ll help you zero in on the foods that works best for their growth and health.",
    img: services4,
  },
  {
    id: 5,
    title: "Emergency Care",
    desc: "If your pet has urgent medical need like a serious injury, or a life-threatening illness, we’ll be there for his needs.",
    img: services5,
  },
  {
    id: 6,
    title: "Vaccinations",
    desc: "We’ll keep your pet safe from parvo, distemper, leptospirosis, rabies, corona, kennel cough and more — and send reminders when they’re due for a vaccine.",
    img: services6,
  },
];

const App = () => {
  return (
    <>
      <div className="container mx-auto" id="Home">
        <nav>
          <div className="flex items-center justify-between ">
            <div className="logo">
              <h1 className="text-4xl font-bold">PetCare</h1>
            </div>
            <div className="menu">
              <ul className="flex gap-5 font-bold ">
                <li className="mr-4">
                  <a href="/">Home</a>
                </li>
                <li className="mr-4">
                  <a href="#Services">Services</a>
                </li>
                <li className="mr-4">
                  <a href="#cta">About Us</a>
                </li>
              </ul>
            </div>
            <div className="account ">
              <button className="px-5 py-2 rounded-md hover:text-white hover:bg-primary bg-secondary text-primary">
                Login
              </button>
            </div>
          </div>
        </nav>
        <section id="Jumbotron" className="flex items-center justify-between">
          <img src={img} alt="" />
          <div className="text-4xl text-center">
            <h1 className="font-bold text-primary">
              INGIN PELIHARAAN ANDA SEHAT?
            </h1>
            <p className="text-sm">
              Membantu anda mendapatkan pelayanan perawatan hewan, penitipan
              hewan, dan pembersihan hewan Selain itu juga berfungsi sebagai
              pusat informasi, tempat rekreasi, penyedia kebutuhan hewan
              peliharaan, dan juga sebagai tempat berinteraksi antara sesama
              pecinta hewan.
            </p>
            <div className="flex justify-center py-5 ">
              <a
                href="#Services"
                className="flex items-center px-5 py-2 rounded-lg hover:bg-tertiary bg-primary"
              >
                <img
                  src={step}
                  alt=""
                  className="step"
                  style={{ height: 20, width: 20 }}
                />{" "}
                <span className="text-sm font-bold text-white">
                  Our Services
                </span>
              </a>
            </div>
            <div className="flex justify-between">
              <div className="relative flex items-center justify-between border-4 rounded-xl border-secondary">
                <VscGithubAlt
                  height={50}
                  width={50}
                  className="absolute p-1 rounded-full left-1/3 bottom-2/3 bg-secondary"
                />
                <div className="text-sm">
                  <h1 className="p-3 font-bold text-primary">Our Services</h1>
                </div>
              </div>
              <div className="relative flex items-center justify-between border-4 rounded-xl border-secondary">
                <GiHeartPlus
                  height={50}
                  width={50}
                  className="absolute p-1 rounded-full left-1/3 bottom-2/3 bg-secondary"
                />
                <div className="text-sm">
                  <h1 className="p-3 font-bold text-primary">Special care</h1>
                </div>
              </div>
              <div className="relative flex items-center justify-between border-4 rounded-xl border-secondary">
                <HiOutlineShieldCheck
                  height={50}
                  width={50}
                  className="absolute p-1 rounded-full left-1/3 bottom-2/3 bg-secondary"
                />
                <div className="text-sm">
                  <h1 className="p-3 font-bold text-primary">High quality</h1>
                </div>
              </div>
            </div>
          </div>
          <img src={img2} alt="" />
        </section>

        <section id="Services" className="mb-40">
          <div className="mx-5 text-center">
            <h1 className="text-sm font-bold text-primary">OUR SERVICES</h1>
            <h1 className="text-4xl font-bold text-slate-800">
              All Pet Care Services
            </h1>
          </div>
          <div className="container grid grid-cols-1 mx-auto md:grid-cols-3 ">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="p-5 border rounded-lg hover:bg-primary hover:text-white text-primary min-h-[240px]">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.img}
                        alt=""
                        style={{ width: 50, height: 50 }}
                      />
                      <h2 className="text-xl font-bold hover:text-white">
                        {item.title}
                      </h2>
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="text-sm hover:text-white">{item.desc}</p>
                      <a href="#cta">
                        <span className="block py-2 font-extrabold ms-0 hover:text-tertiary">
                          Get Services
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div id="cta" className="my-20">
          <img src={bg} alt="" className="absolute right-0" />
          <div className="container relative flex items-center gap-5 mx-auto">
            <img src={dog2} alt="" style={{ width: 500, height: 500 }} />
            <div
              className="flex flex-col col-span-1 gap-5 text-start"
              style={{ width: 400 }}
            >
              <h1 className="items-center text-4xl font-bold text-primary">
                Konsultasi dapat dilakukan dari rumah
              </h1>
              <p>
                Membantu anda mendapatkan pelayanan kesehatan dari rumah dengan
                dokter dan perawat yang berpengalaman
              </p>
              <a
                className="p-2 text-center rounded-lg bg-primary"
                style={{ width: 170 }}
                href="whatsapp://send?text=Hello&phone=+6281226465547"
              >
                <span className="text-sm font-bold text-white">
                  Our Services
                </span>
              </a>
            </div>
            <img
              src={sub1}
              alt=""
              className="absolute rounded-lg -bottom-20 left-2/3 "
              style={{ width: 200 }}
            />
            <img
              src={sub2}
              alt=""
              className="absolute -top-20 right-36"
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>

        <footer className="flex justify-between mt-52">
          <div className="w-[250px] flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold">PetCare</h1>
            <p>
              petCare membantu pemilik hewan peliharaan memberikan perawatan
              terbaik dan menjaga kesehatan hewan peliharaan mereka.
            </p>
            <div className="flex">
              <BsTelephone size={25} />

              <a
                href="whatsapp://send?text=Hello&phone=+6281226465547"
                className="text-xl font-bold"
              >
                (+62) 81226465547
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-extrabold text-center">
              Working Hours
            </h1>
            <div className="flex justify-between p-3 bg-footer">
              <div className="">
                <p>Mon - Fri: </p>
                <p>Saturday:</p>
                <p>Sunday:</p>
              </div>
              <div className="">
                <p>7am – 6pm</p>
                <p>7am – 6pm</p>
                <p>7am – 9pm</p>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-extrabold text-center">Useful Links</h1>
            <ul className="flex flex-col">
              <li>
                <a href="#Jumbotron">Home</a>
              </li>
              <li>
                <a href="#cta">About</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="whatsapp://send?text=Hello&phone=+6281226465547">
                  Shop
                </a>
              </li>
              <li>
                <a href="whatsapp://send?text=Hello&phone=+6281226465547">
                  FAQ
                </a>
              </li>
              <li>
                <a href="whatsapp://send?text=Hello&phone=+6281226465547">
                  Delivery
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-xl font-extrabold text-start">Newsletter</h1>
            <p>
              Be first in the queue! Get our latest news straight to your inbox.
            </p>
            <form action="" className="flex items-center">
              <input
                type="email"
                style={{ width: 250 }}
                placeholder="Email"
                className="w-full px-2 py-1 mr-3 text-gray-700 border rounded-lg focus:outline-none"
              />
              <button>
                <SiMinutemailer size={25} />
              </button>
            </form>
            <div className="flex mt-4">
              <FaFacebookF size={25} />
              <AiOutlineInstagram size={25} />
              <BsTwitter size={25} />
              <FaWhatsapp size={25} />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
