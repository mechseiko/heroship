import Input from '../components/Input';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Container from '../components/Container';
import * as lucid from 'lucide-react'
import clsx from 'clsx'
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarCount, setNavbarCount] = useState(0);
  const [colorsCount, setColorsCount] = useState(0);
  const [iconsCount, setIconsCount] = useState(0);
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [buttonsCount, setButtonsCount] = useState(0);

  const iconOptions = [
    { label: "Github", icon: lucid.Github },
    { label: "Facebook", icon: lucid.Facebook },
    { label: "Linkedin", icon: lucid.Linkedin },
    { label: "Languages", icon: lucid.Languages },
    { label: "Twitter", icon: lucid.Twitter },
    { label: "MSquare", icon: lucid.MSquare },
    { label: "Instagram", icon: lucid.Instagram },
    { label: "Twitch", icon: lucid.Twitch },
    { label: "Youtube", icon: lucid.Youtube },
    { label: "Moon", icon: lucid.Moon },
  ];
  useEffect(() => {
    adjustFormArrayLength("navbar", parseInt(navbarCount) || 0);
  }, [navbarCount]);

  useEffect(() => {
    adjustFormArrayLength("colors", parseInt(colorsCount) || 0);
  }, [colorsCount]);

  useEffect(() => {
    adjustFormArrayLength("icons", parseInt(iconsCount) || 0);
  }, [iconsCount]);

  useEffect(() => {
    adjustFormArrayLength("buttons", parseInt(buttonsCount) || 0);
  }, [buttonsCount]);

  const handleCountChange = (e) => {
    const count = Math.min(3, parseInt(e.target.value) || 0);
    setIconsCount(count);

    const newSelected = [...selectedIcons];
    while (newSelected.length < count) newSelected.push("");
    while (newSelected.length > count) newSelected.pop();
    setSelectedIcons(newSelected);

    setForm((prevForm) => ({
      ...prevForm,
      icons: newSelected,
    }));
  };

  useEffect(() => {
    if (form.icons && form.icons.length > 0) {
      setSelectedIcons(form.icons);
      setIconsCount(form.icons.length);
    }
  }, []);

  const handleIconChange = (index, value) => {
    const updated = [...selectedIcons];
    updated[index] = value;
    setSelectedIcons(updated);

    setForm((prevForm) => ({
      ...prevForm,
      icons: updated,
    }));
  };


  const getAvailableOptions = (currentIndex) => {
    return iconOptions.filter((opt) =>
      selectedIcons[currentIndex] === opt.label || !selectedIcons.includes(opt.label)
    );
  };
  
  const adjustFormArrayLength = (arrayName, targetLength) => {
    setForm((prevForm) => {
        const currentArray = prevForm[arrayName] || [];
        const newArray = currentArray.slice(0, targetLength);

        while (newArray.length < targetLength) {
          newArray.push("");
        }

        return {
          ...prevForm,
          [arrayName]: newArray,
        };
      });
    };

  const closeAlert = () => {
    setAlert(false);
    setSidebarOpen(true);
  }

  const date = new Date();
  const hours = date.getHours();
  
  const getHours = () => {
      if(hours >= 5 && hours < 12)
          return "Good morning"
      else if(hours >=12 && hours < 17)
          return "Good afternoon"
      else if(hours >=17 && hours < 20)
          return "Good evening"
      return "Good night"
  }

  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const [heroImage, setHeroImage] = useState(null);
  const [heroImagePreview, setHeroImagePreview] = useState(null);

  const palette = ["Light", "Dark", "Primary", "Secondary", "Accent"]

  const [form, setForm] = useState({
    colors: [],
    logo: File,
    title: "",
    titlePosition: "",
    navbar: [],
    icons: [],
    layout: "",
    heroImage: File,
    heroText: "",
    heroDescription: "",
    buttons: [],
	});
  // --color-primary: #3D1F94;       /* Deep Indigo – bold and creative */
  // --color-secondary: #F9A826;     /* Warm Amber – energetic and inviting */
  // --color-accent: #00C2A8;        /* Aqua Mint – fresh and modern */
  // --color-muted: #E5E7EB;         /* Soft Gray – clean background */
  // --color-dark: #1F2937;          /* Charcoal – for text and contrast */
  const light = form.colors[0] == "" ? form.colors[0] : 0xE5E7EB
  const dark = form.colors[1] == "" ? form.colors[1] : 0x1F2937
  const primary = form.colors[2] == "" ? form.colors[2] : 0x3D1F94
  const secondary = form.colors[3] == "" ? form.colors[3] : 0xF9A826
  const accent = form.colors[4] == "" ? form.colors[4] : 0x00C2A8
  // const accent = form.colors[4] == "" || form.colors[4] == undefined || form.colors[4] == null ? form.colors[4] : 0x00C2A8

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (arrayName, index, value) => {
    setForm((prevForm) => {
      const updatedArray = [...(prevForm[arrayName] || [])];
      updatedArray[index] = value;
      return {
        ...prevForm,
        [arrayName]: updatedArray,
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const inputName = e.target.name;

    if (!file) return;

    const previewURL = URL.createObjectURL(file);

    if (inputName === 'logo') {
      setLogo(file);
      setLogoPreview(previewURL);
    } else if (inputName === 'heroImage') {
      setHeroImage(file);
      setHeroImagePreview(previewURL);
    }

    setForm((prevForm) => ({
    ...prevForm,
    [inputName]: file,
    [`${inputName}Preview`]: previewURL,
  }));
  };

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", form);
	};

  const headerStyle = "font-bold text-xl text-dark md:mb-3 mb-5"
  const formStyle = "space-y-5 md:space-y-3 mb-5"
  const labelStyle = "flex text-primary items-center gap-3 hover:text-secondary transition"
  const subInputStyle = "pl-1 p-1 w-full rounded-sm mb-3 border-primary border-2"
  const inputStyle = "pl-1 p-1.5 w-full outline-none rounded-sm mb-3 border-primary border-2"
  const subSectionStyle = "flex text-dark items-center"

  const Button = ({
      children,
      onClick,
      type = "button",
      variant = "primary",
      to,
      lucid
    }) => {
      const base = "md:px-6 md:py-3 p-2 rounded font-medium transition duration-300";
      const variants = {
        primary: "bg-primary text-white hover:bg-indigo-800 hover:scale-105 hover:shadow-lg",
        secondary: "bg-secondary text-dark hover:bg-yellow-500 hover:text-muted hover:scale-105 hover:shadow-lg",
        accent: "bg-accent text-muted hover:bg-teal-600 hover:scale-105 hover:shadow-lg",
      };

      const className = `${base} ${variants[variant] || variants.primary}`;
      const lucidClassName = `${base} ${variants[variant] || variants.primary} flex flex-row justify-between items-center`;

      const content = (
        <button type={type} onClick={onClick} className={lucid ? lucidClassName : className}>
          {children}
        </button>
      );

      return to ? <Link to={to}>{content}</Link> : content;
  };

  return(
    <>
      <Header />
        <section className="bg-muted min-h-[80vh]">

        {/* HEADER */}
        <header className={`bg-muted flex-row shadow-md justify-between items-center md:px-15 px-3 py-2 sticky top-0 z-9992 text-dark flex ${sidebarOpen ? "blur-sm" : ""}`}>
          <div>
            <h1 className='text-semibold md:text-2xl text-lg'>{getHours()}, <span className='text-secondary'>Abdulqoyum</span></h1>
          </div>
          <input type="text" autoFocus className='visible-none outline-none size-0 max-h-0 h-0' readOnly />
          <div className='flex justify-around md:gap-5 gap-2 items-center'>
            <span title="Profile"><img className='rounded-full size-10 border-1 border-secondary' src="https://xsgames.co/randomusers/assets/avatars/male/60.jpg" alt="" /></span>
            <span title="Export"><lucid.ExternalLink size={25}/></span>
            <span title="Edit">{window.innerWidth > 768 ? <lucid.Menu size={25} onClick={() => setSidebarOpen(true)} /> : <lucid.MenuSquare size={25} onClick={() => setSidebarOpen(true)}/>}</span>
          </div>
        </header>

        {/* MAIN */}
        {/* <Container> */}
          <div className="flex flex-1 flex-col md:flex-row">


            {/* ASIDE */}
            <div
              className={clsx(
                'fixed inset-0 bg-opacity-50 z-30 transition-opacity duration-400',
                {
                  'opacity-100 pointer-events-auto': sidebarOpen,
                  'opacity-0 pointer-events-none': !sidebarOpen,
                }
              )}
              onClick={() => setSidebarOpen(false)}
            ></div>

            <aside
              className={clsx(
                'fixed overflow-auto top-0 left-0 h-full w-[75%] sm:w-80 bg-muted text-dark p-7 md:p-5 shadow-md z-9997 transform transition-transform duration-300',
                {
                  '-translate-x-full': !sidebarOpen,
                  'translate-x-0': sidebarOpen,
                }
              )}
            >
              <div className="flex flex-row justify-between gap-x-10 items-center mb-5">
                <Logo />
                <lucid.X size={30} onClick={() => setSidebarOpen(false)} />
              </div>

              <main className="space-y-3">
                {/* HEADER */}
                  <h1 className={headerStyle}>
                    HEADER SECTION
                  </h1>

                  {/* COLORS */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="">
                      <lucid.Palette size={20} />
                      Color Palette
                    </label>
                    <input onChange={(e) => setColorsCount(e.target.value)} value={colorsCount} placeholder='Number of colors' className={inputStyle} type="number" min={2} max={5} id="color" />
                    {Array.from({ length: parseInt(colorsCount) || 0 }, (_, index) => (
                      <>
                        <label className={subSectionStyle} htmlFor="">{palette[index]}</label>
                        <input
                          key={`color-${index}`}
                          type="color"
                          className={subInputStyle}
                          placeholder={`Color ${index + 1}`}
                          value={form.colors[index] || ""}
                          onChange={(e) => handleArrayChange("colors", index, e.target.value)}
                        />
                      </>
                    ))}
                  </form>

                  {/* LOGO */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="logo">
                      <lucid.Image size={20} />
                      Website Logo
                    </label>
                    <input type="file" accept="image/*" onChange={handleImageChange} name="logo" className={inputStyle}/>
                  </form>

                  {/* TITLE */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="title">
                      <lucid.Type size={20} />
                      Website Title
                    </label>
                    <input name="title" id="title" onChange={handleInputChange} value={form.title} type="text" className={inputStyle} placeholder='Website Title'/>
                  </form>

                  {/* TITLE POSITION */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="titlePosition">
                      <lucid.FileTypeIcon size={20} />
                      Title Position
                    </label>
                    <select value={form.titlePosition} className={inputStyle} onChange={handleInputChange} name="titlePosition" id="titlePosition">
                      <option value="">---</option>
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                    </select>
                  </form>

                  {/* NAVBAR */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="">
                      <lucid.Link size={20} />
                        Navbar Contents
                    </label>
                    <input onChange={(e) => setNavbarCount(e.target.value)} value={navbarCount} placeholder='Number of navbar contents' className={inputStyle} type="number" min={2} max={6} id="navbar" />
                    {Array.from({ length: parseInt(navbarCount) || 0 }, (_, index) => (
                      <input
                        key={`navbar-${index}`}
                        type="text"
                        className={subInputStyle}
                        placeholder={`Navbar ${index + 1}`}
                        value={form.navbar[index] || ""}
                        onChange={(e) => handleArrayChange("navbar", index, e.target.value)}
                      />
                    ))}
                  </form>

                  {/* ICONS */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="">
                      <lucid.Sparkles size={20} />
                        Icons
                    </label>
                    <input onChange={handleCountChange} value={iconsCount} placeholder='Number of icons' className={inputStyle} type="number" min={1} max={3} id="icon" />
                    {Array.from({ length: parseInt(iconsCount) || 0 }, (_, index) => (
                      <select
                        key={`icon-select-${index}`}
                        className="block border px-2 py-1 rounded w-full"
                        value={selectedIcons[index] || ""}
                        onChange={(e) => handleIconChange(index, e.target.value)}
                      >
                        <option value="">-- Select Icon {index + 1} --</option>
                        {getAvailableOptions(index).map((option) => (
                          <option key={option.label} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ))}
                  </form>


                {/* HERO */}
                  <h1 className={headerStyle}>
                    HERO SECTION
                  </h1>

                  {/* LAYOUT */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="">
                      <lucid.Layout size={20} />
                      Hero Layout
                    </label>
                    <select value={form.layout} className={inputStyle} onChange={handleInputChange} name="layout" id="layout">
                      <option value="">---</option>
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                    </select>
                  </form>

                  {/* HERO IMAGE */}
                  {
                    form.layout === "left" && 
                    <>
                      <form className={formStyle}>
                        <label className={labelStyle} htmlFor="">
                          <lucid.Image size={20} />
                          Hero Image
                        </label>
                        <input type="file" accept="image/*" onChange={handleImageChange} name="heroImage" className={inputStyle}/>
                      </form>
                    </>
                  }

                  {/* HERO TEXT */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="">
                      <lucid.Type size={20} />
                      Hero Text
                    </label>
                    <input name="heroText" type="text" onChange={handleInputChange} value={form.heroText} className={inputStyle} placeholder='Website Hero Text'/>
                  </form>

                  {/* HERO DESCRIPTION */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="">
                      <lucid.Subtitles size={20} />
                      Hero Description
                    </label>
                    <input type="text" name="heroDescription" onChange={handleInputChange} value={form.heroDescription} className={inputStyle} placeholder='Website Hero Description'/>
                  </form>

                  {/* HERO BUTTONS */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="">
                      <lucid.RectangleEllipsis size={20} />
                      Call to action Buttons
                    </label>
                    <input value={buttonsCount} onChange={(e) => setButtonsCount(e.target.value)} placeholder='Number of Buttons' className={inputStyle} type="number" min={1} max={2} id="button" />
                    {Array.from({ length: parseInt(buttonsCount) || 0 }, (_, index) => (
                      <input
                        key={`button-${index}`}
                        type="text"
                        className={subInputStyle}
                        placeholder={`Button ${index + 1}`}
                        value={form.buttons[index] || ""}
                        onChange={(e) => handleArrayChange("buttons", index, e.target.value)}
                      />
                    ))}
                  </form>

                <Button onClick={handleSubmit} variant="secondary" lucid>
                    <span className='text-xl w-[200px] flex flex-row justify-center items-center'>
                      <span>Publish</span>
                      <span><lucid.Send /></span>
                    </span>
                </Button>

                <hr className="m-3" />
                <label className={labelStyle}>
                  <lucid.Settings size={20} />
                  Settings
                </label>

                <Link className={labelStyle} to={"/"}>
                  <lucid.LogOut size={20} />
                  Logout
                </Link>
                <h3>© Heroship {new Date().getFullYear()}</h3>
                <p>Developed by <a className='hover:text-primary underline' href="https://devseiko.vercel.app" target="_blank" rel="noopener">MECHSEIKO</a></p>
              </main>

            </aside>
          </div>

            















{/* PREVIEW */}
            {alert && <Alert message={"Start Editing😉"} closeAlertBox={closeAlert}/>}
            <Container>
              <main className='justify-center items-center flex flex-col'>
                {/* GENERATED DESKTOP NAV */}
                <header className="hidden w-full md:flex flex-row justify-between items-center px-3 py-1 border-b-muted border-b-1 opacity-90 sticky top-0 zz text-white bg-dark shadow-md">
                    {form.titlePosition === "left" ? 
                    <Link to="/" className='flex text-center'>
                        {form.logo && (
                            <img src={form.logoPreview} className="size-12 mx-2" />
                        )}
                        <h1 className='font-semibold leading-tight text-secondary text-3xl'>{form.title}</h1>
                    </Link>
                    :
                    <div className='flex-row flex '>
                      <Link to="/">
                        {form.logo && (
                          <img src={form.logoPreview} className="size-12 mx-2" />
                        )}
                      </Link>
                      <h1 className='font-semibold leading-tight text-secondary text-3xl'>{form.title}</h1>
                    </div>
                    }
                  
                    <div className='text-white flex justify-center gap-5'>
                      <nav className="flex gap-5 text-md font-medium ">
                        {form.navbar.map((link) => (
                          <Link className='hover:overline hover:text-secondary' key={link} to={link}>{link}</Link>
                        ))}
                      </nav>

                        {form.icons.map((label, idx) => {
                          const iconData = iconOptions.find((i) => i.label === label);
                          if (!iconData) return null;
                          const IconComponent = iconData.icon;
                          return (
                            <div key={`icon-${idx}`} className="text-center">
                              <IconComponent size={32} />
                            </div>
                          );
                        })}
                    </div>
                </header>

                {/* GENERATED MOBILE NAV*/}
                  <header className="md:hidden xl:hidden 2xl:hidden flex flex-col justify-center px-3 py-1 border-b-muted border-b-1 sticky top-0 z-9990 text-white bg-dark shadow-md">
                    <div className='flex justify-between text-center items-center'>
                      <Link to="/" className='flex text-center'>
                          {form.logo && (
                              <img src={form.logoPreview} className="size-12 mx-2" />
                          )}
                          <h1 className='font-semibold leading-tight text-secondary text-3xl'>{form.title}</h1>
                      </Link>
                      <div className='flex gap-x-3'>
                        <button
                          className="md:hidden"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {isOpen ? <lucid.X size={28} />: <lucid.Menu size={28} />}
                        </button>
                      </div>
                    </div>
                    {isOpen && (            
                        <ul className="*:mb-6 *:mt-4 justify-center text-center items-center">
                          <hr />
                          {form.navbar.map((link) => (
                            <Link className='hover:overline hover:text-secondary' key={link} to={link}>{link}</Link>
                          ))}
                          <hr />
                          <div className={`flex flex-col justify-center items-center gap-3`}>
                            <button className='md:px-6 md:py-3 p-2 rounded font-medium transition duration-300 bg-primary text-white hover:bg-indigo-800 hover:scale-105 hover:shadow-lg'>{form.buttons[0]}</button>
                            <button className='md:px-6 md:py-3 p-2 rounded font-medium transition duration-300 bg-secondary text-dark hover:bg-yellow-500 hover:text-muted hover:scale-105 hover:shadow-lg'>{form.buttons[1]}</button>
                          </div>
                        </ul>
                    )}
                  </header>
                  <div className='flex justify-center'>
                    <section className={`${form.layout === "left" ? "w-[65%]" : "w-full justify-center items-center text-center"} relative text-dark`}>
                        <div className={`${form.layout === "left" ? "" : "mx-auto"} max-w-4xl z-10 mb-3`}>
                            <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold text-dark mb-6 leading-tight">
                                {form.heroText}
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl opacity-80 mb-10 max-w-xl mx-auto">
                                {form.heroDescription}
                            </p>
                            
                            <div className={`flex flex-row justify-center items-center gap-3`}>
                              <button className={`md:px-6 md:py-3 p-2 rounded font-medium transition duration-300 bg-primary text-white hover:bg-indigo-800 hover:scale-105 hover:shadow-lg`}>{form.buttons[0]}</button>
                              <button className='md:px-6 md:py-3 p-2 rounded font-medium transition duration-300 bg-secondary text-dark hover:bg-yellow-500 hover:text-muted hover:scale-105 hover:shadow-lg'>{form.buttons[1]}</button>
                            </div>
                        </div>
                    </section>
                    {form.layout === "left" &&
                      <div className='md:w-35% w-full'>
                        {/* HERO IMAGE PREVIEW */}
                          {form.heroImage && (
                            <img src={form.heroImagePreview} />
                          )}
                      </div>
                    }
                  </div>

              </main>
            </Container>
        </section>
      <Footer />
    </>
  )
};

export default Hero;