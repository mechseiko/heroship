import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Container from '../components/Container';
import * as lucid from 'lucide-react'
import clsx from 'clsx'
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import Color from '../components/Color';
import Export from './Export';



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

const Hero = () => {
  const [showExport, setShowExport] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarCount, setNavbarCount] = useState(0);
  const [colorsCount, setColorsCount] = useState(0);
  const [iconsCount, setIconsCount] = useState(0);
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [buttonsBB, setButtonsBB] = useState([]);
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
    adjustFormArrayLength("colors", parseInt(colorsCount) || 0);
    adjustFormArrayLength("icons", parseInt(iconsCount) || 0);
    adjustFormArrayLength("buttons", parseInt(buttonsCount) || 0);
  }, []);

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

  const handleButtonChange = (index, value) => {
    const updatedB = [...buttons];
    updatedB[index] = value;
    setButtons(updatedB);
    setForm((prevForm) => ({
      ...prevForm,
      buttonColors: updatedB
    }));
  }

  const handleButtonBgChange = (index, value) => {
    const updatedBB = [...buttonsBB];
    updatedBB[index] = value;
    setButtonsBB(updatedBB);
    setForm((prevForm) => ({
      ...prevForm,
      buttonBgColors: updatedBB
    }));
  }
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


  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [heroImage, setHeroImage] = useState(null);
  const [heroImagePreview, setHeroImagePreview] = useState(null);
  const palette = ["Light", "Dark", "Primary", "Secondary", "Accent"]

  const [form, setForm] = useState({
    colors: [],
    headerBg : "",
    logo: File,
    logoSize: "",
    logoStyle: "",
    title: "",
    titleColor: "",
    titlePosition: "",
    navbar: [],
    navbarColor: "",
    icons: [],
    iconsColor: "",

    layout: "",
    heroImage: File,
    heroBg : "",
    heroText: "",
    heroTextColor: "",
    heroDescription: "",
    buttons: [],
    buttonColors: [],
    buttonBgColors: []
	});
  console.log(form)

  const light = form.colors[0] == "" || form.colors[0] == undefined || form.colors[0] == null ? "" :  form.colors[0]
  const dark = form.colors[1] == "" || form.colors[1] == undefined || form.colors[1] == null ? "" : form.colors[1]
  const primary = form.colors[2] == "" || form.colors[2] == undefined || form.colors[2] == null ? "" : form.colors[2]
  const secondary = form.colors[3] == "" || form.colors[3] == undefined || form.colors[3] == null ? "" : form.colors[3]
  const accent = form.colors[4] == "" || form.colors[4] == undefined || form.colors[4] == null ? "" : form.colors[4]

  const colors = [{"Light": light}, {"Dark": dark}, {"Primary": primary}, {"Secondary": secondary}, {"Accent": accent}];

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


  const openSideBar = () => {
    setSidebarOpen(true);
    setShowExport(false);
  }

	const handleExport = () => {
		setShowExport(true);
    setSidebarOpen(false);
	};
  
  const headerStyle = "font-bold text-xl text-dark md:mb-3 mb-5"
  const formStyle = "space-y-5 md:space-y-3 mb-5"
  const labelStyle = "flex text-primary items-center gap-3 hover:text-secondary transition"
  const subInputStyle = "pl-1 p-1 w-full rounded-sm mb-3 border-primary border-2"
  const inputStyle = "pl-1 p-1.5 w-full outline-none rounded-sm mb-3 border-primary border-2"
  const subSectionStyle = "flex text-dark items-center -mb-[0.5px]"

  return(
    <>
      <Header />
        <section className="bg-muted min-h-[80vh]">

        {/* HEADER */}
        <header className={`bg-muted flex-row shadow-md justify-between items-center md:px-15 px-3 py-3 sticky top-0 z-9992 text-dark flex `} onClick={() => sidebarOpen && setSidebarOpen(false)}>
          <div>
            <h1 className='text-semibold md:text-2xl text-lg'>{getHours()}</h1>
          </div>
          <input type="text" autoFocus className='visible-none outline-none size-0 max-h-0 h-0' readOnly />
          <div className='flex justify-around md:gap-5 gap-2 items-center'>
            <span title="Export" className='cursor-pointer' onClick={handleExport}><lucid.ExternalLink size={25}/></span>
            <span title="Edit"  className='cursor-pointer'>{window.innerWidth > 768 ? <lucid.Menu size={25} onClick={openSideBar} /> : <lucid.MenuSquare size={25} onClick={openSideBar}/>}</span>
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
              className={clsx('fixed overflow-auto top-0 left-0 h-full w-[75%] sm:w-80 bg-muted text-dark p-7 md:p-5 shadow-md z-9997 transform transition-transform duration-300',{'-translate-x-full': !sidebarOpen,'translate-x-0': sidebarOpen,})}>
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
                    <label className={labelStyle} htmlFor="color">
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

                  {/* HEADER BACKGROUND */}
                  <form className={formStyle}>
                    <label className={subSectionStyle} htmlFor="headerBg">
                      Header Background
                    </label>
                    <Color palette={palette} colors={colors} value={form.headerBg} onChange={handleInputChange} name="headerBg" id="headerBg"/>
                  </form>

                  {/* LOGO */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="logo">
                      <lucid.Image size={20} />
                      Website Logo
                    </label>
                    <input type="file" accept="image/*" onChange={handleImageChange} name="logo" className={inputStyle}/>
                  </form>

                  {/* LOGO SIZE */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="logoSize">
                      <lucid.Image size={20} />
                      Logo Size
                    </label>
                    <input placeholder='Logo size' type="number" name="logoSize" onChange={handleInputChange} value={form.logoSize} className={inputStyle}/>
                    <label htmlFor="logoStyle">
                      Logo Style
                    </label> <br />
                    <select className='border-1 rounded-sm border-dark' value={form.logoStyle} onChange={handleInputChange} name="logoStyle" id="logoStyle">
                      <option value="normal">Normal</option>
                      <option value="rounded">Rounded</option>
                    </select>
                  </form>

                  {/* TITLE */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="title">
                      <lucid.Type size={20} />
                      Website Title
                    </label>
                    <input name="title" id="title" onChange={handleInputChange} value={form.title} type="text" className={inputStyle} placeholder='Website Title'/>
                    <Color palette={palette} colors={colors} value={form.titleColor} onChange={handleInputChange} name="titleColor" id="titleColor"/>
                  </form>

                  {/* TITLE POSITION */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="titlePosition">
                      <lucid.FileTypeIcon size={20} />
                      Title Position
                    </label>
                    <select value={form.titlePosition} className={inputStyle} onChange={handleInputChange} name="titlePosition" id="titlePosition">
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                    </select>
                  </form>

                  {/* NAVBAR */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="navbar">
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
                    <Color palette={palette} colors={colors} value={form.navbarColor} onChange={handleInputChange} name="navbarColor" id="navbarColor"/>
                  </form>

                  {/* ICONS */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="icon">
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
                    <Color palette={palette} colors={colors} value={form.iconsColor} onChange={handleInputChange} name="iconsColor" id="iconsColor"/>
                  </form>


                {/* HERO */}
                  <h1 className={headerStyle}>
                    HERO SECTION
                  </h1>

                  {/* LAYOUT */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="layout">
                      <lucid.Layout size={20} />
                      Hero Layout
                    </label>
                    <select value={form.layout} className={inputStyle} onChange={handleInputChange} name="layout" id="layout">
                      <option value="center">Center</option>
                      <option value="left">Left</option>
                    </select>
                  </form>

                  {/* HERO IMAGE */}
                  {
                    form.layout === "left" && 
                    <>
                      <form className={formStyle}>
                        <label className={labelStyle} htmlFor="heroImage">
                          <lucid.Image size={20} />
                          Hero Image
                        </label>
                        <input id="heroImage" type="file" accept="image/*" onChange={handleImageChange} name="heroImage" className={inputStyle}/>
                      </form>
                    </>
                  }

                  {/* HERO BACKGROUND */}
                  <form className={formStyle}>
                    <label className={subSectionStyle} htmlFor="heroBg">
                      Hero Background
                    </label>
                    <Color palette={palette} colors={colors} value={form.heroBg} onChange={handleInputChange} name="heroBg" id="heroBg"/>
                  </form>

                  {/* HERO TEXT */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="heroTextColor">
                      <lucid.Type size={20} />
                      Hero Text
                    </label>
                    <input name="heroText" id="heroText" type="text" onChange={handleInputChange} value={form.heroText} className={inputStyle} placeholder='Website Hero Text'/>
                    <Color palette={palette} colors={colors} value={form.heroTextColor} onChange={handleInputChange} name="heroTextColor" id="heroTextColor"/>
                  </form>

                  {/* HERO DESCRIPTION */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="heroDescription">
                      <lucid.Subtitles size={20} />
                      Hero Description
                    </label>
                    <input id="heroDescription" type="text" name="heroDescription" onChange={handleInputChange} value={form.heroDescription} className={inputStyle} placeholder='Website Hero Description'/>
                  </form>

                  {/* HERO BUTTONS */}
                  <form className={formStyle}>
                    <label className={labelStyle} htmlFor="button">
                      <lucid.RectangleEllipsis size={20} />
                      Call to action Buttons
                    </label>
                    <input value={buttonsCount} onChange={(e) => setButtonsCount(e.target.value)} placeholder='Number of Buttons' className={inputStyle} type="number" min={1} max={2} id="button" />
                    {Array.from({ length: parseInt(buttonsCount) || 0 }, (_, index) => (
                      <>
                        <input
                          key={`button-${index}`}
                          type="text"
                          className={subInputStyle}
                          placeholder={`Button ${index + 1}`}
                          value={form.buttons[index] || ""}
                          onChange={(e) => handleArrayChange("buttons", index, e.target.value)}
                        />
                        <label className={subSectionStyle} htmlFor={`buttonColor-${index+1}`}>
                          Text
                        </label>
                        <Color palette={palette} colors={colors} value={buttons[index] || ""}
                        onChange={(e) => handleButtonChange(index, e.target.value)} name={`buttonColor-${index+1}`} id={`buttonColor-${index+1}`}/>
                        <label className={subSectionStyle} htmlFor={`buttonBgColor-${index+1}`}>
                          Background
                        </label>
                        <Color palette={palette} colors={colors} value={buttonsBB[index] || ""}
                        onChange={(e) => handleButtonBgChange(index, e.target.value)} name={`buttonBgColor-${index+1}`} id={`buttonBgColor-${index+1}`}/>
                      </>
                    ))}
                  </form>

                <button onClick={handleExport} className='cursor-pointer bg-secondary text-dark hover:bg-yellow-500 hover:text-muted hover:scale-105 hover:shadow-lg md:px-6 md:py-3 p-2 rounded font-medium transition duration-300 text-xl w-full flex flex-row gap-1 justify-center items-center'>
                      <span>Ship</span>
                      <span><lucid.Sailboat /></span>
                </button>

                <hr className="m-3" />
                <h3>© Heroship {new Date().getFullYear()}</h3>
                <p>Developed by <a className='hover:text-secondary underline' href="https://devseiko.vercel.app" target="_blank" rel="noopener">MECHSEIKO</a></p>
              </main>

            </aside>
          </div>




---
{/* PREVIEW */}
            {showExport && <Export form={form} colors={colors} onClick={() => setShowExport(false)} labelStyle={labelStyle}/>}
            {alert && <Alert message={"Start Editing😉"} closeAlertBox={closeAlert}/>}
            <Container>
              <main style={{backgroundColor: colors.find(color => Object.keys(color)[0] === form.heroBg)?.[form.heroBg]}}>
                {/* GENERATED DESKTOP NAV */}
                <header
                  style={{ backgroundColor: colors.find(color => Object.keys(color)[0] === form.headerBg)?.[form.headerBg],}}
                  className="hidden w-full md:flex flex-row justify-between items-center px-3 py-1"
                >
                  {form.titlePosition === "left" || form.titlePosition == "" ? (
                    <Link to="/" className='flex gap-2'>
                      {form.logo && (
                        <img
                          src={form.logoPreview}
                          style={{
                            width: `${form.logoSize}px`,
                            height: `${form.logoSize}px`,
                          }}
                          alt="Logo"
                          className={`${form.logoStyle === "rounded" ? "rounded-full" : "rounded-0"}`}
                        />
                      )}
                      <h1 style={{ color: colors.find(color => Object.keys(color)[0] === form.titleColor)?.[form.titleColor] }} className='font-semibold leading-tight text-3xl'>
                        {form.title}
                      </h1>
                    </Link>
                  ) : (
                      <Link to="/">
                        {form.logo && (
                          <img
                            src={form.logoPreview}
                            style={{
                              width: `${form.logoSize}px`,
                              height: `${form.logoSize}px`,
                            }}
                            alt="Logo"
                            className={`${form.logoStyle === "rounded" ? "rounded-full" : "rounded-0"}`}
                          />
                        )}
                      </Link>
                  )}
                  {form.titlePosition === "center" && <h1 style={{ color: colors.find(color => Object.keys(color)[0] === form.titleColor)?.[form.titleColor] }} className='font-semibold leading-tight text-3xl'>{form.title}</h1>}

                  <div className='flex justify-center gap-5 items-center'>
                    <nav className="flex justify-center gap-x-5 text-md">
                      {form.navbar.map((link) => (
                        <Link style={{ color: colors.find(color => Object.keys(color)[0] === form.navbarColor)?.[form.navbarColor] }} key={link} to={link}>
                          {link}
                        </Link>
                      ))}
                    </nav>

                    {form.icons.map((label, idx) => {
                      const iconData = iconOptions.find((i) => i.label === label);
                      if (!iconData) return null;
                      const IconComponent = iconData.icon;
                      return (
                        <div style={{ color: colors.find(color => Object.keys(color)[0] === form.iconsColor)?.[form.iconsColor] }}  key={`icon-${idx}`} className="text-center">
                          <IconComponent size={32} />
                        </div>
                      );
                    })}
                  </div>
                </header>

                {/* GENERATED MOBILE NAV */}
                <header
                  style={{ backgroundColor: colors.find(color => Object.keys(color)[0] === form.headerBg)?.[form.headerBg] }}
                  className="rounded-t-2xl md:hidden xl:hidden 2xl:hidden flex flex-col justify-center px-3 py-1"
                >
                  <div className='flex justify-between text-center items-center'>
                    <Link to="/" className='flex text-center'>
                      {form.logo && (
                        <img
                          src={form.logoPreview}
                          style={{
                            width: `${form.logoSize}px`,
                            height: `${form.logoSize}px`,
                          }}
                          alt="Logo"
                          className={`${form.logoStyle === "rounded" ? "rounded-full" : "rounded-0"}`}
                        />
                      )}
                      <h1 style={{ color: colors.find(color => Object.keys(color)[0] === form.titleColor)?.[form.titleColor] }} className='font-semibold leading-tight text-3xl'>
                        {form.title}
                      </h1>
                    </Link>
                    <button className="md:hidden" style={{ color: colors.find(color => Object.keys(color)[0] === form.navbarColor)?.[form.navbarColor] }} onClick={() => setIsOpen(!isOpen)}>
                      {isOpen ? <lucid.X size={28} /> : <lucid.Menu size={28} />}
                    </button>
                  </div>
                  {isOpen && (
                    <ul className="gap-5 text-center flex flex-col items-center">
                      <hr />
                      {form.navbar.map((link) => (
                        <Link style={{ color: colors.find(color => Object.keys(color)[0] === form.navbarColor)?.[form.navbarColor] }} key={link} to={link}>
                          {link}
                        </Link>
                      ))}
                      <hr />
                      <div className={`flex flex-col justify-center items-center gap-3 mb-2`}>
                        <button
                          style={{ backgroundColor: colors.find(color => Object.keys(color)[0] === form.buttonBgColors[0])?.[form.buttonBgColors[0]], color: colors.find(color => Object.keys(color)[0] === form.buttonColors[0])?.[form.buttonColors[0]] }}
                          className='md:px-6 md:py-3 p-2 rounded font-medium'
                        >
                          {form.buttons[0]}
                        </button>
                        <button
                          style={{ backgroundColor: colors.find(color => Object.keys(color)[0] === form.buttonBgColors[1])?.[form.buttonBgColors[1]], color: colors.find(color => Object.keys(color)[0] === form.buttonColors[1])?.[form.buttonColors[1]] }}
                          className='md:px-6 md:py-3 p-2 rounded font-medium'
                        >
                          {form.buttons[1]}
                        </button>
                      </div>
                    </ul>
                  )}
                </header>

                <div className='flex justify-center max-w-5xl mx-auto break-words'>
                  <section
                    className={`${form.layout === "left" ? "w-[65%]" : "w-full justify-center items-center text-center"} relative`}
                  >
                    <div className={`${form.layout === "left" ? "" : "mx-auto"} mb-3`}>
                      <h1
                        style={{ color: colors.find(color => Object.keys(color)[0] === form.heroTextColor)?.[form.heroTextColor]}}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                      >
                        {form.heroText}
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl opacity-80 mb-10 max-w-xl mx-auto"
                        style={{ color: colors.find(color => Object.keys(color)[0] === form.heroTextColor)?.[form.heroTextColor]}}
                      >
                        {form.heroDescription}
                      </p>

                      <div className={`flex flex-row justify-center items-center gap-3`}>
                        <button
                          style={{ backgroundColor: colors.find(color => Object.keys(color)[0] === form.buttonBgColors[0])?.[form.buttonBgColors[0]], color: colors.find(color => Object.keys(color)[0] === form.buttonColors[0])?.[form.buttonColors[0]] }}
                          className='md:px-6 md:py-3 p-2 rounded font-medium'
                        >
                          {form.buttons[0]}
                        </button>
                        <button
                          style={{ backgroundColor: colors.find(color => Object.keys(color)[0] === form.buttonBgColors[1])?.[form.buttonBgColors[1]], color: colors.find(color => Object.keys(color)[0] === form.buttonColors[1])?.[form.buttonColors[1]] }}
                          className='md:px-6 md:py-3 p-2 rounded font-medium'
                        >
                          {form.buttons[1]}
                        </button>
                      </div>
                    </div>
                  </section>

                  {form.layout === "left" && (
                    <div className='md:w-35% w-full'>
                      {/* HERO IMAGE PREVIEW */}
                      {form.heroImage && <img src={form.heroImagePreview} />}
                    </div>
                  )}
                </div>
              </main>
            </Container>
        </section>
      <Footer />
    </>
  )
};

export default Hero;