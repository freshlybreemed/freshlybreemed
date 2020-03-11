import { styles } from '../constants/styles';
import React from 'react';
// import SignUpForm from '../components/SignUpForm';
import Wrapper from '../components/Wrapper';

const data = {
  description: 'Fist Up Afros Out',
  header: `Blachaz3`,
};

const Home = () => (
  <div>
    <Wrapper data={data}>
      <article class="helvetica pb5">
        <header class="vh-100 dt w-100">
          <div class="dtc pt5 v-mid cover ph3 ph4-m ph5-l">
            <h1 class="f2 f-subheadline-l f-subheadline-ns  measure lh-title fw9">
              Freshly Breemed
            </h1>
            <h2 class="f4 f2-ns  measure lh-title fw7">
              Hello, my name is Ebrima. I am a software engineer, DJ and
              creative director. Most of my work focuses on building things,
              solving problems and pushing boundaries to bridge the gap between
              technology, music and cultural connections.
            </h2>
            <div class="pb5">
              <a
                href="https://www.facebook.com/"
                class="link dim dib mr3 black-70"
                title="Impossible Labs on Facebook"
              >
                <svg
                  class="db w2 h2"
                  data-icon="facebook"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <title>facebook icon</title>
                  <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/blachaz3"
                class="link dim dib mr3 black-70"
              >
                <svg
                  class="db w2 h2"
                  data-icon="twitter"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <title>twitter icon</title>
                  <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
                </svg>
              </a>
              <a
                class="link hover-silver black-70 dib h2 w2 mr3"
                href="https://instagram.com/blachaz3"
                title="Instagram"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="1.414"
                >
                  <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
                </svg>
              </a>
              <a
                class="link hover-silver black-70 dib h2 w2 mr3"
                href="https://www.youtube.com/channel/UCzgzz03SJGXcFR3D5WRqRJw"
                title="Youtube"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-9.333v24h-24v-24h24zm-4 12c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
                </svg>
              </a>
            </div>
            <img class="w-50" src="/static/img/youtube.jpg" />
          </div>
        </header>
        <header class="vh-100 dt w-100">
          <div class="dtc v-mid cover ph3 ph4-m ph5-l">
            <h1 class="f2 f-subheadline-l f-subheadline-ns  measure lh-title fw9">
              Projects
            </h1>
            <h2 class="f4 f2-ns  measure lh-title fw7">Freshly Breemed</h2>
            <h2 class="f4 f2-ns  measure lh-title fw7">
              Chicken & Mumbo Sauce
            </h2>
            <h2 class="f4 f2-ns  measure lh-title fw7">Crank Karaoke</h2>
            <h2 class="f4 f2-ns  measure lh-title fw7">Clouty</h2>
            <h2 class="f4 f2-ns  measure lh-title fw7">BlacHaz3</h2>
          </div>
        </header>
      </article>
    </Wrapper>
  </div>
);

export default Home;
