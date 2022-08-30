const BtnIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 -6.5 158 158"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M138.654 38.2764C137.708 38.0752 136.741 37.9852 135.774 38.0085C134.013 38.0485 132.23 38.1209 130.507 38.1911C129.628 38.2261 128.749 38.2601 127.871 38.2933H127.777L127.664 36.4984C127.559 34.784 127.449 33.0106 127.312 31.2621C127.244 30.5105 127.032 29.7788 126.688 29.1071C126.373 28.5334 125.888 28.0704 125.302 27.7804C124.714 27.4905 124.053 27.3877 123.405 27.4859C122.758 27.584 122.156 27.8784 121.681 28.3294C121.206 28.7804 120.881 29.3661 120.749 30.0077C120.621 30.7723 120.55 31.5454 120.537 32.3206C120.516 33.5617 120.509 34.8031 120.502 36.0442C120.498 36.8725 120.491 37.7002 120.483 38.5276L120.34 38.5356C119.544 38.5755 118.747 38.6132 117.95 38.6491C116.341 38.7226 114.676 38.798 113.033 38.9115C111.533 38.9959 110.04 39.1714 108.562 39.4368C107.74 39.5581 106.996 39.9892 106.482 40.6418C105.968 41.2944 105.723 42.1188 105.798 42.946C105.846 43.7172 106.163 44.447 106.694 45.0083C107.225 45.5696 107.936 45.927 108.703 46.0178C109.638 46.151 110.583 46.1951 111.526 46.1492C113.626 46.0777 115.721 45.991 117.819 45.9043L120.201 45.8066C120.161 46.3942 120.12 46.9817 120.079 47.5689C119.928 49.75 119.771 52.0049 119.672 54.2352C119.636 55.3376 119.816 56.4365 120.202 57.4697C120.455 58.1557 120.917 58.7451 121.522 59.1558C122.127 59.5665 122.846 59.7779 123.577 59.7602C123.68 59.7602 123.785 59.7562 123.89 59.7477C124.643 59.7126 125.365 59.4433 125.957 58.9776C126.549 58.5119 126.981 57.8729 127.192 57.1499C127.391 56.5367 127.506 55.8994 127.533 55.2553C127.605 53.1839 127.664 51.1103 127.729 49.0383C127.762 47.9274 127.795 46.8159 127.829 45.7041H129.78C131.276 45.7041 132.816 45.7042 134.341 45.674C136.001 45.7027 137.651 45.3949 139.189 44.7689C139.877 44.5108 140.467 44.0433 140.876 43.4325C141.285 42.8217 141.492 42.0984 141.468 41.3639C141.417 40.607 141.11 39.8897 140.599 39.3292C140.088 38.7685 139.402 38.3975 138.654 38.2764Z" />
      <path d="M44.1204 52.4036L90.5888 49.6542C90.8428 47.7981 91.1099 45.9506 91.3475 44.0997C93.4327 27.858 107.541 16.2659 119.873 14.4911C133.401 12.5444 149.922 17.1819 155.167 33.6454C156.698 38.2444 156.994 43.1651 156.024 47.9143C154.995 52.8776 153.504 57.7011 150.749 62.0099C147.097 67.72 142.064 71.6961 135.391 73.2332C133.543 73.6592 132.793 74.5059 132.388 76.2294C131.005 82.1181 129.645 88.0192 127.991 93.835C127.039 97.0386 125.811 100.154 124.32 103.145C123.29 105.271 121.026 105.734 118.826 105.771C116.695 105.805 114.56 105.633 112.428 105.589C94.8018 105.224 77.1746 104.865 59.5476 104.512C59.0022 104.501 58.4552 104.558 57.369 104.608C58.727 109.569 60.0136 114.267 61.4221 119.413C62.673 119.413 63.9855 119.422 65.2989 119.413C83.0442 119.282 100.79 119.12 118.536 119.065C120.65 119.088 122.751 119.407 124.776 120.012C125.664 120.225 126.455 120.728 127.025 121.441C127.596 122.155 127.911 123.037 127.925 123.95C127.937 124.863 127.646 125.754 127.095 126.483C126.545 127.212 125.768 127.736 124.886 127.974C122.661 128.594 120.404 129.098 118.126 129.484C121.068 135.607 120.731 139.714 117.025 142.354C113.839 144.624 109.365 144.52 106.721 142.111C103.366 139.055 103.432 134.687 107.058 129.143H78.8312C80.6689 131.989 82.6944 134.499 81.4322 137.665C80.8455 139.218 79.8898 140.605 78.6474 141.706C77.1398 142.91 75.2535 143.541 73.3245 143.487C71.3955 143.433 69.5486 142.695 68.1112 141.408C64.8035 138.492 64.7417 134.959 67.9064 128.973C65.0187 128.692 62.1244 128.501 59.2594 128.105C56.726 127.754 55.2262 126.389 54.3815 123.736C52.6238 118.213 49.9841 112.952 48.4549 107.378C43.3112 88.581 38.4875 69.6969 33.5604 50.841C31.1254 41.521 28.6661 32.2056 26.3814 22.8482C26.2653 22.1429 25.9742 21.4778 25.5346 20.9141C25.0952 20.3505 24.5213 19.9062 23.8656 19.6217C19.6008 17.6281 15.3427 15.621 11.0914 13.6008C8.66623 12.443 6.19788 11.3479 3.89282 9.98071C2.75795 9.2819 1.82627 8.29733 1.19119 7.12559C0.898795 6.57991 0.7411 5.97234 0.730987 5.35334C0.720876 4.73434 0.858771 4.12194 1.13319 3.567C1.40761 3.01207 1.81034 2.5307 2.30838 2.16299C2.80642 1.79527 3.3852 1.55169 3.99633 1.45281C5.20631 1.24297 6.45056 1.36061 7.59981 1.79348C14.7565 4.70894 21.8802 7.7044 28.9708 10.78C32.1934 12.1826 34.4184 14.3755 33.6491 18.3621C33.6266 18.9215 33.7317 19.4786 33.9568 19.9912C37.1374 30.2615 40.3261 40.5294 43.5224 50.7945C43.655 51.2106 43.8283 51.6173 44.1204 52.4036ZM123.568 74.1088C122.361 73.8896 121.271 73.7091 120.184 73.4912C116.674 72.785 113.091 72.3196 109.674 71.2964C103.181 69.351 97.4968 66.0082 93.9046 60.0191C92.7889 58.1623 91.5083 57.7527 89.5518 57.8059C78.2214 58.1144 66.8885 58.3172 55.557 58.585C52.3619 58.6611 49.169 58.8372 45.544 58.9849C48.8825 71.6744 52.1143 83.9565 55.2394 95.8316H117.106C119.311 88.4163 121.383 81.4532 123.568 74.1088ZM126.671 65.3355C135.965 65.3355 141.893 61.5729 145.357 53.0516C146.016 51.3874 146.563 49.6806 146.993 47.9432C149.713 37.3407 144.883 27.7738 134.502 24.4416C129.665 22.8881 124.44 22.3553 119.341 21.8913C117.113 21.7719 114.906 22.3791 113.052 23.6218C104.338 29.6601 99.1468 37.7083 99.5478 48.7755C99.6975 52.9058 101.184 56.2978 104.494 58.5766C106.937 60.3399 109.653 61.6896 112.533 62.5717C117.149 63.8437 121.949 64.4488 126.671 65.3355Z" />
    </svg>
  );
};

export default BtnIcon;