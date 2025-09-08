import { useState, useEffect } from 'react';
import clsx from 'clsx';
import * as lucid from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as style from 'react-syntax-highlighter/dist/esm/styles/prism';


const Export = ({ onClick, form, colors, labelStyle }) => {
  const [showLinks, setshowLinks] = useState(false);
  const [lang, setLang] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const resolveColor = (key) => {
    const color = colors.find(c => Object.keys(c)[0] === key);
    return color ? color[key] : '';
  };

  const StackNotFound = () => {
    setshowLinks(true);
    navigator.clipboard.writeText(languages[lang]["codeString"])

  }

  const languages = [
    {language: "Reactjs",
        name: "jsx",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "codeString": `
  <main style={{ backgroundColor: "${resolveColor(form.heroBg)}" }}>
    <header
      style={{ backgroundColor: "${resolveColor(form.headerBg)}" }}
      className="hidden w-full md:flex flex-row justify-between items-center px-3 py-1"
    >
      ${form.titlePosition === 'left' || form.titlePosition === '' ? `
        <Link to="/" className='flex gap-2'>
          ${form.logo ? `<img src="${form.logoPreview}" style={{ width: "${form.logoSize}px", height: "${form.logoSize}px" }} alt="Logo" className="${form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'}" />` : ''}
          <h1 style={{ color: "${resolveColor(form.titleColor)}" }} className='font-semibold leading-tight text-3xl'>
            ${form.title}
          </h1>
        </Link>` : `
        <Link to="/">
          ${form.logo ? `<img src="${form.logoPreview}" style={{ width: "${form.logoSize}px", height: "${form.logoSize}px" }} alt="Logo" className="${form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'}" />` : ''}
        </Link>`
      }

      ${form.titlePosition === 'center' ? `<h1 style={{ color: "${resolveColor(form.titleColor)}" }} className='font-semibold leading-tight text-3xl'>${form.title}</h1>` : ''}

      <div className='flex justify-center gap-5 items-center'>
        <nav className="flex justify-center gap-x-5 text-md">
          ${form.navbar.map(link => `<Link to="${link}" style={{ color: "${resolveColor(form.navbarColor)}" }}>${link}</Link>`).join('\n')}
        </nav>
        ${form.icons.map((label, idx) => `
          <div key="icon-${idx}" style={{ color: "${resolveColor(form.iconsColor)}" }}" className="text-center">
            {/* Icon logic goes here */}
            <${label} size={32} />
          </div>`).join('\n')}
      </div>
    </header>

    <header
      style={{ backgroundColor: "${resolveColor(form.headerBg)}" }}
      className="rounded-t-2xl md:hidden flex flex-col justify-center px-3 py-1"
    >
      <div className='flex justify-between items-center'>
        <Link to="/" className='flex'>
          ${form.logo ? `<img src="${form.logoPreview}" style={{ width: "${form.logoSize}px", height: "${form.logoSize}px" }} alt="Logo" className="${form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'}" />` : ''}
          <h1 style={{ color: "${resolveColor(form.titleColor)}" }} className='font-semibold leading-tight text-3xl'>
            ${form.title}
          </h1>
        </Link>
        <button
          className="md:hidden"
          style={{ color: "${resolveColor(form.navbarColor)}" }}
        >
          ${isOpen ? '<X size={28} />' : '<Menu size={28} />'}
        </button>
      </div>

      ${isOpen ? `
        <ul className="gap-5 text-center flex flex-col items-center">
          <hr />
          ${form.navbar.map(link => `<Link to="${link}" style={{ color: "${resolveColor(form.navbarColor)}" }}>${link}</Link>`).join('\n')}
          <hr />
          <div className="flex flex-col justify-center items-center gap-3 mb-2">
            <button
              style={{
                backgroundColor: "${resolveColor(form.buttonBgColors[0])}",
                color: "${resolveColor(form.buttonColors[0])}"
              }}
              className="md:px-6 md:py-3 p-2 rounded font-medium"
            >
              ${form.buttons[0]}
            </button>
            <button
              style={{
                backgroundColor: "${resolveColor(form.buttonBgColors[1])}",
                color: "${resolveColor(form.buttonColors[1])}"
              }}
              className="md:px-6 md:py-3 p-2 rounded font-medium"
            >
              ${form.buttons[1]}
            </button>
          </div>
        </ul>` : ''}
    </header>

    <div className="flex justify-center max-w-5xl mx-auto break-words">
      <section className="${form.layout === 'left' ? 'w-[65%]' : 'w-full justify-center items-center text-center'} relative">
        <div className="${form.layout === 'left' ? '' : 'mx-auto'} mb-3">
          <h1 style={{ color: "${resolveColor(form.heroTextColor)}" }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            ${form.heroText}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-80 mb-10 max-w-xl mx-auto"
             style={{ color: "${resolveColor(form.heroTextColor)}" }}>
            ${form.heroDescription}
          </p>
          <div className="flex flex-row justify-center items-center gap-3">
            <button
              style={{
                backgroundColor: "${resolveColor(form.buttonBgColors[0])}",
                color: "${resolveColor(form.buttonColors[0])}"
              }}
              className="md:px-6 md:py-3 p-2 rounded font-medium"
            >
              ${form.buttons[0]}
            </button>
            <button
              style={{
                backgroundColor: "${resolveColor(form.buttonBgColors[1])}",
                color: "${resolveColor(form.buttonColors[1])}"
              }}
              className="md:px-6 md:py-3 p-2 rounded font-medium"
            >
              ${form.buttons[1]}
            </button>
          </div>
        </div>
      </section>

      ${form.layout === "left" && form.heroImage ? `
        <div className='md:w-35% w-full'>
          <img src="${form.heroImagePreview}" />
        </div>` : ''}
    </div>
  </main>
`.trim()
    },
    {language: "Angularjs",
        name: "Angularjs",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
        "codeString": `<main [ngStyle]="{ backgroundColor: resolveColor(form.heroBg) }">
  <header
    [ngStyle]="{ backgroundColor: resolveColor(form.headerBg) }"
    class="hidden w-full md:flex flex-row justify-between items-center px-3 py-1"
  >
    <ng-container *ngIf="form.titlePosition === 'left' || form.titlePosition === ''">
      <a [routerLink]="'/'" class="flex gap-2">
        <img *ngIf="form.logo"
             [src]="form.logoPreview"
             [ngStyle]="{ width: form.logoSize + 'px', height: form.logoSize + 'px' }"
             [ngClass]="form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'"
             alt="Logo"
        />
        <h1 [ngStyle]="{ color: resolveColor(form.titleColor) }" class="font-semibold leading-tight text-3xl">
          {{ form.title }}
        </h1>
      </a>
    </ng-container>
    <ng-container *ngIf="form.titlePosition !== 'left' && form.titlePosition !== ''">
      <a [routerLink]="'/'">
        <img *ngIf="form.logo"
             [src]="form.logoPreview"
             [ngStyle]="{ width: form.logoSize + 'px', height: form.logoSize + 'px' }"
             [ngClass]="form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'"
             alt="Logo"
        />
      </a>
    </ng-container>

    <h1 *ngIf="form.titlePosition === 'center'"
        [ngStyle]="{ color: resolveColor(form.titleColor) }"
        class="font-semibold leading-tight text-3xl">
      {{ form.title }}
    </h1>

    <div class="flex justify-center gap-5 items-center">
      <nav class="flex justify-center gap-x-5 text-md">
        <a *ngFor="let link of form.navbar"
           [routerLink]="link"
           [ngStyle]="{ color: resolveColor(form.navbarColor) }">
          {{ link }}
        </a>
      </nav>
      <div *ngFor="let label of form.icons; let idx = index"
           [ngStyle]="{ color: resolveColor(form.iconsColor) }"
           class="text-center">
        <!-- Icon component should be used here -->
        <app-icon [name]="label" [size]="32"></app-icon>
      </div>
    </div>
  </header>

  <!-- MOBILE NAV -->
  <header
    [ngStyle]="{ backgroundColor: resolveColor(form.headerBg) }"
    class="rounded-t-2xl md:hidden flex flex-col justify-center px-3 py-1"
  >
    <div class="flex justify-between items-center">
      <a [routerLink]="'/'" class="flex">
        <img *ngIf="form.logo"
             [src]="form.logoPreview"
             [ngStyle]="{ width: form.logoSize + 'px', height: form.logoSize + 'px' }"
             [ngClass]="form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'"
             alt="Logo"
        />
        <h1 [ngStyle]="{ color: resolveColor(form.titleColor) }" class="font-semibold leading-tight text-3xl">
          {{ form.title }}
        </h1>
      </a>
      <button class="md:hidden"
              [ngStyle]="{ color: resolveColor(form.navbarColor) }"
              (click)="isOpen = !isOpen">
        <ng-container *ngIf="isOpen; else menuIcon">
          <app-icon name="X" [size]="28"></app-icon>
        </ng-container>
        <ng-template #menuIcon>
          <app-icon name="Menu" [size]="28"></app-icon>
        </ng-template>
      </button>
    </div>

    <ul *ngIf="isOpen" class="gap-5 text-center flex flex-col items-center">
      <hr />
      <a *ngFor="let link of form.navbar"
         [routerLink]="link"
         [ngStyle]="{ color: resolveColor(form.navbarColor) }">
        {{ link }}
      </a>
      <hr />
      <div class="flex flex-col justify-center items-center gap-3 mb-2">
        <button
          [ngStyle]="{
            backgroundColor: resolveColor(form.buttonBgColors[0]),
            color: resolveColor(form.buttonColors[0])
          }"
          class="md:px-6 md:py-3 p-2 rounded font-medium">
          {{ form.buttons[0] }}
        </button>
        <button
          [ngStyle]="{
            backgroundColor: resolveColor(form.buttonBgColors[1]),
            color: resolveColor(form.buttonColors[1])
          }"
          class="md:px-6 md:py-3 p-2 rounded font-medium">
          {{ form.buttons[1] }}
        </button>
      </div>
    </ul>
  </header>

  <div class="flex justify-center max-w-5xl mx-auto break-words">
    <section [ngClass]="form.layout === 'left' ? 'w-[65%]' : 'w-full justify-center items-center text-center'" class="relative">
      <div [ngClass]="form.layout === 'left' ? '' : 'mx-auto'" class="mb-3">
        <h1 [ngStyle]="{ color: resolveColor(form.heroTextColor) }"
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          {{ form.heroText }}
        </h1>
        <p [ngStyle]="{ color: resolveColor(form.heroTextColor) }"
           class="text-base sm:text-lg lg:text-xl opacity-80 mb-10 max-w-xl mx-auto">
          {{ form.heroDescription }}
        </p>
        <div class="flex flex-row justify-center items-center gap-3">
          <button
            [ngStyle]="{
              backgroundColor: resolveColor(form.buttonBgColors[0]),
              color: resolveColor(form.buttonColors[0])
            }"
            class="md:px-6 md:py-3 p-2 rounded font-medium">
            {{ form.buttons[0] }}
          </button>
          <button
            [ngStyle]="{
              backgroundColor: resolveColor(form.buttonBgColors[1]),
              color: resolveColor(form.buttonColors[1])
            }"
            class="md:px-6 md:py-3 p-2 rounded font-medium">
            {{ form.buttons[1] }}
          </button>
        </div>
      </div>
    </section>

    <div *ngIf="form.layout === 'left' && form.heroImage" class="md:w-35% w-full">
      <img [src]="form.heroImagePreview" />
    </div>
  </div>
</main>
`.trim()
    },
    {language: "Vuejs",
        name: "Vuejs",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        "codeString": `<template>
  <main :style="{ backgroundColor: resolveColor(form.heroBg) }">
    <header
      :style="{ backgroundColor: resolveColor(form.headerBg) }"
      class="hidden w-full md:flex flex-row justify-between items-center px-3 py-1"
    >
      <router-link
        v-if="form.titlePosition === 'left' || form.titlePosition === ''"
        to="/"
        class="flex gap-2"
      >
        <img
          v-if="form.logo"
          :src="form.logoPreview"
          :style="{ width: form.logoSize + 'px', height: form.logoSize + 'px' }"
          :class="form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'"
          alt="Logo"
        />
        <h1
          :style="{ color: resolveColor(form.titleColor) }"
          class="font-semibold leading-tight text-3xl"
        >
          {{ form.title }}
        </h1>
      </router-link>

      <router-link v-else to="/">
        <img
          v-if="form.logo"
          :src="form.logoPreview"
          :style="{ width: form.logoSize + 'px', height: form.logoSize + 'px' }"
          :class="form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'"
          alt="Logo"
        />
      </router-link>

      <h1
        v-if="form.titlePosition === 'center'"
        :style="{ color: resolveColor(form.titleColor) }"
        class="font-semibold leading-tight text-3xl"
      >
        {{ form.title }}
      </h1>

      <div class="flex justify-center gap-5 items-center">
        <nav class="flex justify-center gap-x-5 text-md">
          <router-link
            v-for="(link, index) in form.navbar"
            :key="index"
            :to="link"
            :style="{ color: resolveColor(form.navbarColor) }"
          >
            {{ link }}
          </router-link>
        </nav>
        <div
          v-for="(label, idx) in form.icons"
          :key="'icon-' + idx"
          :style="{ color: resolveColor(form.iconsColor) }"
          class="text-center"
        >
          <!-- Replace this with your icon component -->
          <component :is="label" :size="32" />
        </div>
      </div>
    </header>

    <!-- MOBILE NAV -->
    <header
      :style="{ backgroundColor: resolveColor(form.headerBg) }"
      class="rounded-t-2xl md:hidden flex flex-col justify-center px-3 py-1"
    >
      <div class="flex justify-between items-center">
        <router-link to="/" class="flex">
          <img
            v-if="form.logo"
            :src="form.logoPreview"
            :style="{ width: form.logoSize + 'px', height: form.logoSize + 'px' }"
            :class="form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'"
            alt="Logo"
          />
          <h1
            :style="{ color: resolveColor(form.titleColor) }"
            class="font-semibold leading-tight text-3xl"
          >
            {{ form.title }}
          </h1>
        </router-link>
        <button
          class="md:hidden"
          :style="{ color: resolveColor(form.navbarColor) }"
          @click="isOpen = !isOpen"
        >
          <component :is="isOpen ? 'X' : 'Menu'" :size="28" />
        </button>
      </div>

      <ul v-if="isOpen" class="gap-5 text-center flex flex-col items-center">
        <hr />
        <router-link
          v-for="(link, index) in form.navbar"
          :key="index"
          :to="link"
          :style="{ color: resolveColor(form.navbarColor) }"
        >
          {{ link }}
        </router-link>
        <hr />
        <div class="flex flex-col justify-center items-center gap-3 mb-2">
          <button
            :style="{
              backgroundColor: resolveColor(form.buttonBgColors[0]),
              color: resolveColor(form.buttonColors[0])
            }"
            class="md:px-6 md:py-3 p-2 rounded font-medium"
          >
            {{ form.buttons[0] }}
          </button>
          <button
            :style="{
              backgroundColor: resolveColor(form.buttonBgColors[1]),
              color: resolveColor(form.buttonColors[1])
            }"
            class="md:px-6 md:py-3 p-2 rounded font-medium"
          >
            {{ form.buttons[1] }}
          </button>
        </div>
      </ul>
    </header>

    <div class="flex justify-center max-w-5xl mx-auto break-words">
      <section
        :class="form.layout === 'left' ? 'w-[65%]' : 'w-full justify-center items-center text-center'"
        class="relative"
      >
        <div :class="form.layout === 'left' ? '' : 'mx-auto'" class="mb-3">
          <h1
            :style="{ color: resolveColor(form.heroTextColor) }"
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          >
            {{ form.heroText }}
          </h1>
          <p
            :style="{ color: resolveColor(form.heroTextColor) }"
            class="text-base sm:text-lg lg:text-xl opacity-80 mb-10 max-w-xl mx-auto"
          >
            {{ form.heroDescription }}
          </p>
          <div class="flex flex-row justify-center items-center gap-3">
            <button
              :style="{
                backgroundColor: resolveColor(form.buttonBgColors[0]),
                color: resolveColor(form.buttonColors[0])
              }"
              class="md:px-6 md:py-3 p-2 rounded font-medium"
            >
              {{ form.buttons[0] }}
            </button>
            <button
              :style="{
                backgroundColor: resolveColor(form.buttonBgColors[1]),
                color: resolveColor(form.buttonColors[1])
              }"
              class="md:px-6 md:py-3 p-2 rounded font-medium"
            >
              {{ form.buttons[1] }}
            </button>
          </div>
        </div>
      </section>

      <div
        v-if="form.layout === 'left' && form.heroImage"
        class="md:w-35% w-full"
      >
        <img :src="form.heroImagePreview" />
      </div>
    </div>
  </main>
</template>
`.trim()
    },
    {language: "Sveltejs",
        name: "Sveltejs",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        "codeString": `<script>
  export let form;
  export let isOpen;
  export let resolveColor;

  // You'll need to define these if not passed as props:
  // import X from 'lucide-svelte/icons/X';
  // import Menu from 'lucide-svelte/icons/Menu';
  // import YourIconComponent from './YourIconComponent.svelte';
</script>

<main style="background-color: {resolveColor(form.heroBg)}">
  <header
    style="background-color: {resolveColor(form.headerBg)}"
    class="hidden w-full md:flex flex-row justify-between items-center px-3 py-1"
  >
    {#if form.titlePosition === 'left' || form.titlePosition === ''}
      <a href="/" class="flex gap-2">
        {#if form.logo}
          <img
            src="{form.logoPreview}"
            style="width: {form.logoSize}px; height: {form.logoSize}px;"
            class="{form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'}"
            alt="Logo"
          />
        {/if}
        <h1
          style="color: {resolveColor(form.titleColor)}"
          class="font-semibold leading-tight text-3xl"
        >
          {form.title}
        </h1>
      </a>
    {:else}
      <a href="/">
        {#if form.logo}
          <img
            src="{form.logoPreview}"
            style="width: {form.logoSize}px; height: {form.logoSize}px;"
            class="{form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'}"
            alt="Logo"
          />
        {/if}
      </a>
    {/if}

    {#if form.titlePosition === 'center'}
      <h1
        style="color: {resolveColor(form.titleColor)}"
        class="font-semibold leading-tight text-3xl"
      >
        {form.title}
      </h1>
    {/if}

    <div class="flex justify-center gap-5 items-center">
      <nav class="flex justify-center gap-x-5 text-md">
        {#each form.navbar as link}
          <a href="{link}" style="color: {resolveColor(form.navbarColor)}">{link}</a>
        {/each}
      </nav>

      {#each form.icons as label, idx}
        <div
          style="color: {resolveColor(form.iconsColor)}"
          class="text-center"
        >
          <svelte:component this={label} size={32} />
        </div>
      {/each}
    </div>
  </header>

  <!-- MOBILE NAV -->
  <header
    style="background-color: {resolveColor(form.headerBg)}"
    class="rounded-t-2xl md:hidden flex flex-col justify-center px-3 py-1"
  >
    <div class="flex justify-between items-center">
      <a href="/" class="flex">
        {#if form.logo}
          <img
            src="{form.logoPreview}"
            style="width: {form.logoSize}px; height: {form.logoSize}px;"
            class="{form.logoStyle === 'rounded' ? 'rounded-full' : 'rounded-0'}"
            alt="Logo"
          />
        {/if}
        <h1
          style="color: {resolveColor(form.titleColor)}"
          class="font-semibold leading-tight text-3xl"
        >
          {form.title}
        </h1>
      </a>
      <button
        class="md:hidden"
        style="color: {resolveColor(form.navbarColor)}"
        on:click={() => (isOpen = !isOpen)}
      >
        <svelte:component this={isOpen ? 'X' : 'Menu'} size={28} />
      </button>
    </div>

    {#if isOpen}
      <ul class="gap-5 text-center flex flex-col items-center">
        <hr />
        {#each form.navbar as link}
          <a href="{link}" style="color: {resolveColor(form.navbarColor)}">{link}</a>
        {/each}
        <hr />
        <div class="flex flex-col justify-center items-center gap-3 mb-2">
          <button
            style="background-color: {resolveColor(form.buttonBgColors[0])}; color: {resolveColor(form.buttonColors[0])}"
            class="md:px-6 md:py-3 p-2 rounded font-medium"
          >
            {form.buttons[0]}
          </button>
          <button
            style="background-color: {resolveColor(form.buttonBgColors[1])}; color: {resolveColor(form.buttonColors[1])}"
            class="md:px-6 md:py-3 p-2 rounded font-medium"
          >
            {form.buttons[1]}
          </button>
        </div>
      </ul>
    {/if}
  </header>

  <div class="flex justify-center max-w-5xl mx-auto break-words">
    <section
      class="relative {form.layout === 'left' ? 'w-[65%]' : 'w-full justify-center items-center text-center'}"
    >
      <div class="{form.layout === 'left' ? '' : 'mx-auto'} mb-3">
        <h1
          style="color: {resolveColor(form.heroTextColor)}"
          class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          {form.heroText}
        </h1>
        <p
          style="color: {resolveColor(form.heroTextColor)}"
          class="text-base sm:text-lg lg:text-xl opacity-80 mb-10 max-w-xl mx-auto"
        >
          {form.heroDescription}
        </p>

        <div class="flex flex-row justify-center items-center gap-3">
          <button
            style="background-color: {resolveColor(form.buttonBgColors[0])}; color: {resolveColor(form.buttonColors[0])}"
            class="md:px-6 md:py-3 p-2 rounded font-medium"
          >
            {form.buttons[0]}
          </button>
          <button
            style="background-color: {resolveColor(form.buttonBgColors[1])}; color: {resolveColor(form.buttonColors[1])}"
            class="md:px-6 md:py-3 p-2 rounded font-medium"
          >
            {form.buttons[1]}
          </button>
        </div>
      </div>
    </section>

    {#if form.layout === 'left' && form.heroImage}
      <div class="md:w-35% w-full">
        <img src="{form.heroImagePreview}" />
      </div>
    {/if}
  </div>
</main>
`.trim()
    }
]

  return (
    <div className="fixed md:top-12 inset-0 z-[1000] flex items-center justify-center font-inter">
      <div className="fixed inset-0 bg-opacity-50" onClick={onClick} />
 
      <div className="relative z-[1001] bg-dark rounded-xl w-[90%] max-w-[1000px] h-[400px] flex shadow-lg border-2 border-secondary">
        <aside className={clsx('overflow-auto md:block hidden w-64 border-r rounded-l-xl border-secondary p-3', darkMode ? 'bg-muted text-dark' : 'bg-dark text-muted')}>
          <div className="flex items-center justify-between mb-5">
            <Logo />
            <lucid.X size={24} className="cursor-pointer" onClick={onClick} />
          </div>

          <div className="space-y-4">
            {languages.map((language, index) => (
              <>
                <div key={index} onClick={() => setLang(index)} className={`gap-x-5 flex items-center cursor-pointer border-2  ${darkMode && lang === index ? "text-muted bg-dark" : !darkMode && lang === index ? "text-dark bg-muted" : darkMode ? " border-dark bg-muted text-dark hover:text-muted hover:bg-dark" : !darkMode ? "border-muted bg-dark text-muted hover:text-dark hover:bg-muted" : ""}  p-2  rounded-xl`}>
                      <img src={language.src} alt={`${language.language}-logo`} className='size-5'/>
                      <h2>{language.language}</h2>
                </div>
              </>
            ))}
          </div>

        <div className={`space-y-3 mt-3 ${!darkMode ? '*:text-muted' : '*:text-dark'}`}>
          <div className='text-md'>
              {!showLinks && <h2 className='text-lg underline' onClick={StackNotFound}>Can't find your stack?</h2>}
              {showLinks && <> 
              <h2 className='text-lg'>Jsx code copied</h2>
              <h2 className='text-lg'>Try one of these:</h2>
              <a href="https://codingfleet.com/code-converter" target="_blank" className='underline hover:text-secondary'>Coding fleet</a> <br />
              <a href="https://syntha.ai/converters" target="_blank" className='underline hover:text-secondary'>Syntha.ai</a> <br />
              <a href="https://www.gitloop.com/tool/react-to-vue?form=MG0AV3" target="_blank" className='underline hover:text-secondary'>Gitloop</a></>}
          </div>
              <hr className={`${!darkMode ? '*:text-muted' : '*:text-dark'} m-3`} />
              <h3>© Heroship {new Date().getFullYear()}</h3>
              <p>Developed by <a className=' underline hover:text-secondary' href="https://devseiko.vercel.app" target="_blank" rel="noopener">MECHSEIKO</a></p>
        </div>
        </aside>

        <main className={clsx('flex-1 p-5  overflow-auto md:rounded-r-xl rounded-xl', darkMode ? 'bg-dark text-muted' : 'bg-muted text-dark')}>
          <header className={clsx('flex justify-between -mb-2 items-center px-3 py-2 rounded-t-lg shadow-sm', darkMode ? 'bg-muted text-dark' : 'bg-dark text-muted')}>
            <h1 className="text-lg">{languages[lang].name}</h1>
            <div className="flex items-center gap-3 *:cursor-pointer">
              {/* Mobile toggle sidebar button */}
              <span className="md:hidden" title="Menu" onClick={() => setSidebarOpen(true)}>
                <lucid.Menu size={20} />
              </span>
              <span title={`${!darkMode ? "Light Mode" : "Dark Mode"}`} onClick={() => setDarkMode(!darkMode)}>{darkMode ? <lucid.Moon  /> : <lucid.Sun />}</span>
              <span title="Copy" className="cursor-pointer" onClick={() => navigator.clipboard.writeText(languages[lang]["codeString"])}><lucid.Copy  /></span>
            </div>
          </header>
          <SyntaxHighlighter language="tsx" style={!darkMode ? style.materialDark : style.materialLight}>
            {languages[lang]["codeString"]}
          </SyntaxHighlighter>
        </main>

        {/* Mobile Sidebar (only visible when toggled) */}
        {sidebarOpen && (
          <>
            {/* Overlay inside Modal */}
            <div
              className="md:hidden oveflow-auto absolute inset-0 bg-opacity-30 z-20"
              onClick={() => setSidebarOpen(false)}
            />
            <aside
              className={clsx(
                'md:hidden absolute overflow-auto rounded-l-xl top-0 left-0 h-full w-[75%] sm:w-80 p-5 shadow-md z-30 transition-transform duration-300 ease-in-out',
                darkMode ? 'bg-muted text-dark' : 'bg-dark text-muted'
              )}
            >
              <div className="flex justify-between items-center mb-5">
                <Logo />
                <lucid.X size={24} className="cursor-pointer" onClick={() => setSidebarOpen(false)} />
              </div>

              <div className="space-y-4">
                {languages.map((language, index) => (
                  <>
                    <div key={index} onClick={() => setLang(index)} className={`gap-x-5 flex items-center cursor-pointer border-2  ${darkMode && lang === index ? "text-muted bg-dark" : !darkMode && lang === index ? "text-dark bg-muted" : darkMode ? " border-dark bg-muted text-dark hover:text-muted hover:bg-dark" : !darkMode ? "border-muted bg-dark text-muted hover:text-dark hover:bg-muted" : ""}  p-2  rounded-xl`}>
                          <img src={language.src} alt={`${language.language}-logo`} className='size-5'/>
                          <h2>{language.language}</h2>
                    </div>
                  </>
                ))}
              </div>

              <div className={`space-y-3 mt-3 ${!darkMode ? '*:text-muted' : '*:text-dark'}`}>
                <div className='text-md'>
                    {!showLinks && <h2 className='text-lg underline' onClick={StackNotFound}>Can't find your stack?</h2>}
                    {showLinks && <> 
                    <h2 className='text-lg'>Jsx code copied</h2>
                    <h2 className='text-lg'>Try one of these:</h2>
                    <a href="https://codingfleet.com/code-converter" target="_blank" className='underline hover:text-secondary'>Coding fleet</a> <br />
                    <a href="https://syntha.ai/converters" target="_blank" className='underline hover:text-secondary'>Syntha.ai</a> <br />
                    <a href="https://www.gitloop.com/tool/react-to-vue?form=MG0AV3" target="_blank" className='underline hover:text-secondary'>Gitloop</a></>}
                </div>
                    <hr className={`${!darkMode ? '*:text-muted' : '*:text-dark'} m-3`} />
                    <h3>© Heroship {new Date().getFullYear()}</h3>
                    <p>Developed by <a className=' underline hover:text-secondary' href="https://devseiko.vercel.app" target="_blank" rel="noopener">MECHSEIKO</a></p>
              </div>
                
            </aside>
          </>
        )}
      </div>
    </div>
  );
};

export default Export;
