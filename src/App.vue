<template>
  <div class="page-root">
    <header class="site-header">
      <div class="container">
        <a href="#" class="brand">
          <span class="sr-only">SolidProof</span>
          <img src="/logo_horizontal_white.svg" alt="SolidProof" class="brand-logo brand-logo--dark" />
          <img src="/logo_horizontal_black.svg" alt="SolidProof" class="brand-logo brand-logo--light" />
        </a>
        <button
          class="nav-toggle"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-controls="primary-nav"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-nav" class="primary-nav" :class="{ open: isOpen }">
          <ul class="nav-list">
            <li><a href="#">Home</a></li>
            <li class="dropdown-container" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
              <a href="#" class="dropdown-trigger" @click.prevent.stop="toggleDropdown" :aria-expanded="showDropdown ? 'true' : 'false'">
                Services
                <svg class="trigger-caret" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645L8 9.29289L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L8.35355 10.3536C8.15829 10.5488 7.84171 10.5488 7.64645 10.3536L4.64645 7.35355C4.45118 7.15829 4.45118 6.84171 4.64645 6.64645Z" fill="currentColor"/>
                </svg>
              </a>
              <div class="services-dropdown" v-show="showDropdown">
                <div class="dropdown-header">
                  <svg class="dropdown-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_services)">
                      <path d="M5.01682 0.00680543H2.0002C1.46676 0.0138242 0.957596 0.230896 0.583183 0.610926C0.208769 0.990956 -0.000698592 1.50329 0.000225027 2.03678V3.93008C-0.00375273 4.19524 0.0450407 4.45853 0.143766 4.70466C0.242492 4.95078 0.389178 5.17481 0.57529 5.36371C0.761402 5.55261 0.983224 5.70262 1.22785 5.805C1.47247 5.90738 1.73501 5.96008 2.0002 5.96006H5.01682C5.282 5.96008 5.54455 5.90738 5.78917 5.805C6.03379 5.70262 6.25562 5.55261 6.44173 5.36371C6.62784 5.17481 6.77453 4.95078 6.87325 4.70466C6.97198 4.45853 7.02077 4.19524 7.01679 3.93008V2.03678C7.02077 1.77162 6.97198 1.50833 6.87325 1.2622C6.77453 1.01608 6.62784 0.792054 6.44173 0.60315C6.25562 0.414246 6.03379 0.264241 5.78917 0.161862C5.54455 0.0594835 5.282 0.0067756 5.01682 0.00680543ZM3.93017 4.34008H3.10018C2.74126 4.34008 2.39704 4.1975 2.14324 3.9437C1.88945 3.68991 1.74687 3.34568 1.74687 2.98676C1.74687 2.62784 1.88945 2.28362 2.14324 2.02983C2.39704 1.77603 2.74126 1.63345 3.10018 1.63345H3.93017C4.28909 1.63345 4.63331 1.77603 4.88711 2.02983C5.1409 2.28362 5.28348 2.62784 5.28348 2.98676C5.28348 3.34568 5.1409 3.68991 4.88711 3.9437C4.63331 4.1975 4.28909 4.34008 3.93017 4.34008Z" fill="white"/>
                      <path d="M10.8068 5.96006H13.8068C14.072 5.96008 14.3345 5.90738 14.5791 5.805C14.8238 5.70262 15.0456 5.55261 15.2317 5.36371C15.4178 5.17481 15.5645 4.95078 15.6632 4.70466C15.762 4.45853 15.8107 4.19524 15.8068 3.93008V2.03678C15.8107 1.77162 15.762 1.50833 15.6632 1.2622C15.5645 1.01608 15.4178 0.792054 15.2317 0.60315C15.0456 0.414246 14.8238 0.264241 14.5791 0.161862C14.3345 0.0594835 14.072 0.0067756 13.8068 0.00680543H10.8068C10.5417 0.0067756 10.2791 0.0594835 10.0345 0.161862C9.78986 0.264241 9.56804 0.414246 9.38193 0.60315C9.19582 0.792054 9.04913 1.01608 8.95041 1.2622C8.85168 1.50833 8.80289 1.77162 8.80687 2.03678V3.93008C8.80289 4.19524 8.85168 4.45853 8.95041 4.70466C9.04913 4.95078 9.19582 5.17481 9.38193 5.36371C9.56804 5.55261 9.78986 5.70262 10.0345 5.805C10.2791 5.90738 10.5417 5.96008 10.8068 5.96006ZM11.8902 1.62678H12.7201C13.0791 1.62678 13.4233 1.76936 13.6771 2.02316C13.9309 2.27695 14.0735 2.62118 14.0735 2.9801C14.0735 3.33902 13.9309 3.68324 13.6771 3.93703C13.4233 4.19083 13.0791 4.33341 12.7201 4.33341H11.8902C11.5312 4.33341 11.187 4.19083 10.9332 3.93703C10.6794 3.68324 10.5368 3.33902 10.5368 2.9801C10.5368 2.62118 10.6794 2.27695 10.9332 2.02316C11.187 1.76936 11.5312 1.62678 11.8902 1.62678Z" fill="white"/>
                      <path d="M5.01661 7.58337H1.99998C1.46654 7.59039 0.957383 7.80746 0.582969 8.18749C0.208555 8.56752 -0.000912273 9.07986 1.13456e-05 9.61335V11.51C-0.0017753 12.0434 0.207516 12.5559 0.582208 12.9356C0.956901 13.3153 1.46657 13.5313 1.99998 13.5366H5.01661C5.55002 13.5313 6.05969 13.3153 6.43438 12.9356C6.80907 12.5559 7.01837 12.0434 7.01658 11.51V9.61335C7.02056 9.34819 6.97176 9.08489 6.87304 8.83877C6.77431 8.59265 6.62763 8.36862 6.44151 8.17972C6.2554 7.99081 6.03358 7.84081 5.78896 7.73843C5.54433 7.63605 5.28179 7.58334 5.01661 7.58337ZM3.92996 11.9166H3.09997C2.74105 11.9166 2.39683 11.7741 2.14303 11.5203C1.88923 11.2665 1.74665 10.9223 1.74665 10.5633C1.74665 10.2044 1.88923 9.86019 2.14303 9.60639C2.39683 9.3526 2.74105 9.21002 3.09997 9.21002H3.92996C4.28888 9.21002 4.6331 9.3526 4.88689 9.60639C5.14069 9.86019 5.28327 10.2044 5.28327 10.5633C5.28327 10.9223 5.14069 11.2665 4.88689 11.5203C4.6331 11.7741 4.28888 11.9166 3.92996 11.9166Z" fill="white"/>
                      <path d="M12.3933 7.58337C10.3933 7.58337 8.79004 9.07335 8.79004 10.9333C8.79004 13.2466 11.37 15.3666 12.1667 15.9333C12.2346 15.9852 12.3178 16.0133 12.4033 16.0133C12.4888 16.0133 12.572 15.9852 12.64 15.9333C13.4366 15.3399 15.9999 13.2466 15.9999 10.9333C15.9999 9.07335 14.3866 7.58337 12.3933 7.58337ZM12.3933 12.3166C12.0065 12.3302 11.63 12.1903 11.3459 11.9274C11.0618 11.6645 10.8932 11.3 10.8767 10.9133C10.9077 10.5319 11.081 10.1761 11.3624 9.91675C11.6437 9.65735 12.0123 9.51334 12.395 9.51334C12.7776 9.51334 13.1463 9.65735 13.4276 9.91675C13.7089 10.1761 13.8823 10.5319 13.9133 10.9133C13.8968 11.3006 13.7277 11.6657 13.4429 11.9286C13.1581 12.1916 12.7807 12.3311 12.3933 12.3166Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_services">
                        <rect width="16" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span class="dropdown-title">Services</span>
                </div>

                <div class="dropdown-divider"></div>

                <div class="dropdown-items">
                  <a href="#" class="dropdown-item">
                    <svg class="item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_kyc)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8541 5.14601C15.9007 5.19245 15.9376 5.24763 15.9629 5.30837C15.9881 5.36912 16.001 5.43424 16.001 5.50001C16.001 5.56578 15.9881 5.6309 15.9629 5.69164C15.9376 5.75239 15.9007 5.80756 15.8541 5.85401L12.8541 8.85401C12.8077 8.90057 12.7525 8.93751 12.6918 8.96272C12.631 8.98793 12.5659 9.0009 12.5001 9.0009C12.4344 9.0009 12.3693 8.98793 12.3085 8.96272C12.2478 8.93751 12.1926 8.90057 12.1461 8.85401L10.6461 7.35401C10.5523 7.26012 10.4995 7.13278 10.4995 7.00001C10.4995 6.86723 10.5523 6.7399 10.6461 6.64601C10.74 6.55212 10.8674 6.49938 11.0001 6.49938C11.1329 6.49938 11.2603 6.55212 11.3541 6.64601L12.5001 7.79301L15.1461 5.14601C15.1926 5.09945 15.2478 5.0625 15.3085 5.0373C15.3693 5.01209 15.4344 4.99911 15.5001 4.99911C15.5659 4.99911 15.631 5.01209 15.6918 5.0373C15.7525 5.0625 15.8077 5.09945 15.8541 5.14601Z" fill="white"/>
                        <path d="M1 14C1 14 0 14 0 13C0 12 1 9 6 9C11 9 12 12 12 13C12 14 11 14 11 14H1ZM6 8C6.79565 8 7.55871 7.68393 8.12132 7.12132C8.68393 6.55871 9 5.79565 9 5C9 4.20435 8.68393 3.44129 8.12132 2.87868C7.55871 2.31607 6.79565 2 6 2C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5C3 5.79565 3.31607 6.55871 3.87868 7.12132C4.44129 7.68393 5.20435 8 6 8Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_kyc">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div class="item-content">
                      <div class="item-title">KYC</div>
                      <div class="item-description">KYC means more trust. We can help!</div>
                    </div>
                  </a>

                  <a href="#" class="dropdown-item">
                    <svg class="item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 0C7.31001 0 6.15701 0.265 5.07201 0.56C3.96201 0.86 2.84301 1.215 2.18501 1.43C1.9099 1.52085 1.666 1.68747 1.48132 1.9107C1.29665 2.13394 1.17869 2.40474 1.14101 2.692C0.545005 7.169 1.92801 10.487 3.60601 12.682C4.31785 13.6207 5.16626 14.4476 6.12301 15.135C6.50901 15.408 6.86701 15.617 7.17101 15.76C7.45101 15.892 7.75201 16 8.00001 16C8.24801 16 8.54801 15.892 8.82901 15.76C9.19587 15.5826 9.54653 15.3734 9.87701 15.135C10.8338 14.4476 11.6822 13.6207 12.394 12.682C14.072 10.487 15.455 7.169 14.859 2.692C14.8215 2.40456 14.7036 2.13354 14.5189 1.91012C14.3342 1.68669 14.0903 1.51993 13.815 1.429C12.8598 1.11601 11.8971 0.825926 10.928 0.559C9.84301 0.266 8.69001 0 8.00001 0ZM10.146 5.146C10.2399 5.05211 10.3672 4.99937 10.5 4.99937C10.6328 4.99937 10.7601 5.05211 10.854 5.146C10.9479 5.23989 11.0006 5.36722 11.0006 5.5C11.0006 5.63278 10.9479 5.76011 10.854 5.854L7.85401 8.854C7.80756 8.90056 7.75238 8.93751 7.69164 8.96271C7.63089 8.98792 7.56577 9.00089 7.50001 9.00089C7.43424 9.00089 7.36912 8.98792 7.30837 8.96271C7.24763 8.93751 7.19245 8.90056 7.14601 8.854L5.64601 7.354C5.59952 7.30751 5.56264 7.25232 5.53748 7.19158C5.51232 7.13084 5.49937 7.06574 5.49937 7C5.49937 6.93426 5.51232 6.86916 5.53748 6.80842C5.56264 6.74768 5.59952 6.69249 5.64601 6.646C5.69249 6.59951 5.74768 6.56264 5.80842 6.53748C5.86916 6.51232 5.93426 6.49937 6.00001 6.49937C6.06575 6.49937 6.13085 6.51232 6.19159 6.53748C6.25233 6.56264 6.30752 6.59951 6.35401 6.646L7.50001 7.793L10.146 5.146Z" fill="white"/>
                    </svg>
                    <div class="item-content">
                      <div class="item-title">Audit</div>
                      <div class="item-description">Looking for more security for your project?</div>
                    </div>
                  </a>

                  <a href="#" class="dropdown-item">
                    <svg class="item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.4779 1.64697C10.4972 1.5842 10.504 1.51824 10.4978 1.45286C10.4916 1.38748 10.4726 1.32396 10.4419 1.26592C10.4111 1.20788 10.3693 1.15647 10.3187 1.11461C10.268 1.07275 10.2097 1.04128 10.1469 1.02197C10.0841 1.00267 10.0182 0.995915 9.9528 1.0021C9.88742 1.00829 9.8239 1.02729 9.76586 1.05803C9.70783 1.08877 9.65641 1.13063 9.61456 1.18124C9.5727 1.23184 9.54122 1.2902 9.52192 1.35297L5.52192 14.353C5.48293 14.4797 5.4959 14.6168 5.55798 14.734C5.62005 14.8512 5.72614 14.939 5.85292 14.978C5.97969 15.017 6.11676 15.004 6.23397 14.9419C6.35118 14.8798 6.43893 14.7737 6.47792 14.647L10.4779 1.64697ZM4.85392 4.14597C4.90048 4.19242 4.93742 4.24759 4.96263 4.30834C4.98784 4.36908 5.00081 4.4342 5.00081 4.49997C5.00081 4.56574 4.98784 4.63086 4.96263 4.6916C4.93742 4.75235 4.90048 4.80753 4.85392 4.85397L1.70692 7.99997L4.85392 11.146C4.9478 11.2399 5.00055 11.3672 5.00055 11.5C5.00055 11.6327 4.9478 11.7601 4.85392 11.854C4.76003 11.9479 4.63269 12.0006 4.49992 12.0006C4.36714 12.0006 4.2398 11.9479 4.14592 11.854L0.645917 8.35397C0.599354 8.30753 0.562411 8.25235 0.537205 8.1916C0.511998 8.13086 0.499023 8.06574 0.499023 7.99997C0.499023 7.9342 0.511998 7.86908 0.537205 7.80834C0.562411 7.74759 0.599354 7.69242 0.645917 7.64597L4.14592 4.14597C4.19236 4.09941 4.24754 4.06246 4.30828 4.03726C4.36903 4.01205 4.43415 3.99908 4.49992 3.99908C4.56568 3.99908 4.63081 4.01205 4.69155 4.03726C4.7523 4.06246 4.80747 4.09941 4.85392 4.14597ZM11.1459 4.14597C11.0994 4.19242 11.0624 4.24759 11.0372 4.30834C11.012 4.36908 10.999 4.4342 10.999 4.49997C10.999 4.56574 11.012 4.63086 11.0372 4.6916C11.0624 4.75235 11.0994 4.80753 11.1459 4.85397L14.2929 7.99997L11.1459 11.146C11.0994 11.1925 11.0626 11.2476 11.0374 11.3084C11.0122 11.3691 10.9993 11.4342 10.9993 11.5C10.9993 11.5657 11.0122 11.6308 11.0374 11.6916C11.0626 11.7523 11.0994 11.8075 11.1459 11.854C11.1924 11.9005 11.2476 11.9373 11.3083 11.9625C11.3691 11.9877 11.4342 12.0006 11.4999 12.0006C11.5657 12.0006 11.6308 11.9877 11.6915 11.9625C11.7522 11.9373 11.8074 11.9005 11.8539 11.854L15.3539 8.35397C15.4005 8.30753 15.4374 8.25235 15.4626 8.1916C15.4878 8.13086 15.5008 8.06574 15.5008 7.99997C15.5008 7.9342 15.4878 7.86908 15.4626 7.80834C15.4374 7.74759 15.4005 7.69242 15.3539 7.64597L11.8539 4.14597C11.8075 4.09941 11.7523 4.06246 11.6916 4.03726C11.6308 4.01205 11.5657 3.99908 11.4999 3.99908C11.4341 3.99908 11.369 4.01205 11.3083 4.03726C11.2475 4.06246 11.1924 4.09941 11.1459 4.14597Z" fill="white"/>
                    </svg>
                    <div class="item-content">
                      <div class="item-title">Development</div>
                      <div class="item-description">Developing new contracts</div>
                    </div>
                  </a>

                  <a href="#" class="dropdown-item">
                    <svg class="item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_marketing)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1V15H16V16H0V0ZM10 3.5C10 3.36739 10.0527 3.24021 10.1464 3.14645C10.2402 3.05268 10.3674 3 10.5 3H14.5C14.6326 3 14.7598 3.05268 14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5V7.5C15 7.63261 14.9473 7.75979 14.8536 7.85355C14.7598 7.94732 14.6326 8 14.5 8C14.3674 8 14.2402 7.94732 14.1464 7.85355C14.0527 7.75979 14 7.63261 14 7.5V4.9L10.387 9.317C10.3428 9.37099 10.2877 9.41511 10.2254 9.44655C10.1631 9.47798 10.0949 9.49602 10.0252 9.4995C9.9555 9.50299 9.88584 9.49184 9.8207 9.46678C9.75556 9.44172 9.69639 9.4033 9.647 9.354L7.06 6.767L3.404 11.794C3.32402 11.8957 3.20774 11.9624 3.07958 11.9802C2.95143 11.9979 2.82138 11.9653 2.71677 11.8892C2.61216 11.8131 2.54113 11.6994 2.51861 11.572C2.49609 11.4446 2.52383 11.3134 2.596 11.206L6.596 5.706C6.63846 5.64751 6.69309 5.59893 6.75613 5.56359C6.81917 5.52825 6.88912 5.50699 6.96117 5.50129C7.03322 5.49559 7.10564 5.50557 7.17346 5.53055C7.24128 5.55554 7.30287 5.59492 7.354 5.646L9.963 8.256L13.445 4H10.5C10.3674 4 10.2402 3.94732 10.1464 3.85355C10.0527 3.75979 10 3.63261 10 3.5Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_marketing">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div class="item-content">
                      <div class="item-title">Marketing</div>
                      <div class="item-description">Do you need help for project marketing? Here is the right place</div>
                    </div>
                  </a>

                  <a href="#" class="dropdown-item">
                    <svg class="item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_consulting)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.999917 11.5C0.999917 11.6326 1.0526 11.7598 1.14636 11.8536C1.24013 11.9473 1.36731 12 1.49992 12H13.2929L10.1459 15.146C10.052 15.2399 9.99929 15.3672 9.99929 15.5C9.99929 15.6328 10.052 15.7601 10.1459 15.854C10.2398 15.9479 10.3671 16.0007 10.4999 16.0007C10.6327 16.0007 10.76 15.9479 10.8539 15.854L14.8539 11.854C14.9005 11.8076 14.9374 11.7524 14.9626 11.6917C14.9878 11.6309 15.0008 11.5658 15.0008 11.5C15.0008 11.4343 14.9878 11.3691 14.9626 11.3084C14.9374 11.2476 14.9005 11.1925 14.8539 11.146L10.8539 7.14602C10.76 7.05213 10.6327 6.99939 10.4999 6.99939C10.3671 6.99939 10.2398 7.05213 10.1459 7.14602C10.052 7.23991 9.99929 7.36725 9.99929 7.50002C9.99929 7.6328 10.052 7.76013 10.1459 7.85402L13.2929 11H1.49992C1.36731 11 1.24013 11.0527 1.14636 11.1465C1.0526 11.2402 0.999917 11.3674 0.999917 11.5ZM14.9999 4.50002C14.9999 4.63263 14.9472 4.75981 14.8535 4.85357C14.7597 4.94734 14.6325 5.00002 14.4999 5.00002H2.70692L5.85392 8.14602C5.90041 8.19251 5.93728 8.2477 5.96244 8.30844C5.9876 8.36918 6.00055 8.43428 6.00055 8.50002C6.00055 8.56576 5.9876 8.63087 5.96244 8.6916C5.93728 8.75234 5.90041 8.80753 5.85392 8.85402C5.80743 8.90051 5.75224 8.93739 5.6915 8.96254C5.63076 8.9877 5.56566 9.00065 5.49992 9.00065C5.43417 9.00065 5.36907 8.9877 5.30833 8.96254C5.24759 8.93739 5.1924 8.90051 5.14592 8.85402L1.14592 4.85402C1.09935 4.80758 1.06241 4.7524 1.0372 4.69166C1.012 4.63091 0.999023 4.56579 0.999023 4.50002C0.999023 4.43425 1.012 4.36913 1.0372 4.30839C1.06241 4.24764 1.09935 4.19247 1.14592 4.14602L5.14592 0.146021C5.2398 0.0521346 5.36714 -0.000610352 5.49992 -0.000610352C5.63269 -0.000610352 5.76003 0.0521346 5.85392 0.146021C5.9478 0.239908 6.00055 0.367246 6.00055 0.500021C6.00055 0.632797 5.9478 0.760135 5.85392 0.854021L2.70692 4.00002H14.4999C14.6325 4.00002 14.7597 4.0527 14.8535 4.14647C14.9472 4.24024 14.9999 4.36741 14.9999 4.50002Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_consulting">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div class="item-content">
                      <div class="item-title">Consulting</div>
                      <div class="item-description">Get support for your project</div>
                    </div>
                  </a>

                  <a href="#" class="dropdown-item">
                    <svg class="item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_security)">
                        <path d="M11.4282 1.65875V2.93123H4.6416V1.65875L11.4282 1.65875Z" fill="url(#paint0_linear_security)"/>
                        <path d="M12.9946 14.6906L14.0553 12.3002C14.1574 12.0678 14.1216 11.7974 13.9616 11.6009L12.1212 9.33927C12.0991 9.31291 12.0665 9.29703 12.0318 9.29703H11.9602C11.9518 9.29492 11.9434 9.2939 11.9349 9.2939H6.7503C6.704 9.29492 6.66296 9.32238 6.64402 9.36468L5.98528 10.8868L5.08663 10.0248L5.90636 8.09076C5.92425 8.04846 5.96529 8.02102 6.01159 8.01996L12.5 8.00517C12.5316 8.00517 12.5632 8.01785 12.5842 8.04214L14.1532 9.75124C14.4804 10.1073 15.0624 10.0111 15.2581 9.56961L16.3188 7.17913C16.4219 6.94674 16.3851 6.67632 16.2251 6.47984L14.3858 4.21933C14.3636 4.19186 14.331 4.17602 14.2963 4.17602H8.59286C8.59286 4.17602 8.58761 4.17602 8.58441 4.17602H4.61415H3.3998C3.3535 4.17602 3.31246 4.20242 3.29352 4.24468L2.63479 5.76683L1.73612 4.90487L2.55481 3.0019C2.57375 2.95859 2.61479 2.93113 2.66109 2.93113L5.77167 2.92162C5.82323 2.92162 5.86532 2.87936 5.86532 2.82761V1.74202C5.86532 1.69026 5.82323 1.64801 5.77167 1.64801L1.84662 1.65857C1.80032 1.65857 1.75928 1.68709 1.74139 1.72935L0.453382 4.78023C0.343943 5.03691 0.40603 5.33585 0.607018 5.52916L2.3654 7.2161C2.70213 7.53933 3.25669 7.42631 3.44295 6.99744L4.10063 5.47951C4.11852 5.43726 4.16061 5.4098 4.20586 5.4098H5.06137C5.06453 5.41085 5.06874 5.41085 5.07189 5.41085H13.7133C13.747 5.41085 13.7806 5.4267 13.8017 5.4531L15.055 6.99322L14.4815 8.28718L13.123 6.80625C13.1009 6.78301 13.0704 6.76928 13.0377 6.76928L10.6048 6.77561L9.6399 6.77773L5.19712 6.78829C5.15081 6.78829 5.10978 6.81575 5.09189 6.85801L3.80388 9.89915C3.69444 10.1569 3.75653 10.4558 3.95752 10.6492L5.71589 12.335C6.05263 12.6582 6.60718 12.5463 6.79344 12.1174L7.4511 10.5984C7.46902 10.5562 7.51004 10.5298 7.55638 10.5298H8.48764V10.5319H11.4488C11.4835 10.5319 11.5161 10.5467 11.5382 10.5742L12.7915 12.1142L12.7631 12.1797L12.218 13.4083L10.8585 11.9273C10.8374 11.9041 10.8059 11.8903 10.7742 11.8903L9.27369 11.8966C9.2232 11.8977 9.18108 11.9379 9.18006 11.9896L9.16003 13.0364C9.159 13.0892 9.20112 13.1315 9.25372 13.1315L10.2355 13.1251C10.2681 13.1251 10.2987 13.1389 10.3207 13.1632L11.8897 14.8723C12.2159 15.2283 12.7989 15.1322 12.9946 14.6906Z" fill="url(#paint1_linear_security)"/>
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_security" x1="11.4282" y1="2.295" x2="4.6416" y2="2.29499" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#8F63EB" stop-opacity="0"/>
                          <stop offset="0.821742" stop-color="#8E60EE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_security" x1="21.2626" y1="16.751" x2="0.122962" y2="7.61636" gradientUnits="userSpaceOnUse">
                          <stop offset="0.0746968" stop-color="#F2E3A6"/>
                          <stop offset="0.545511" stop-color="#6AFFB3"/>
                          <stop offset="0.878609" stop-color="#8E60EE"/>
                        </linearGradient>
                        <clipPath id="clip0_security">
                          <rect width="16" height="16" fill="white" transform="translate(0.399902 0.400024)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div class="item-content">
                      <div class="item-title">Proactive Web3 Security</div>
                      <div class="item-description">Real-time detection and prevention of crypto attacks</div>
                    </div>
                  </a>

                  <a href="#" class="dropdown-item">
                    <svg class="item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_lossless)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2864 11.1879L12.1095 10.013L7.57938 14.5357L-0.210449 6.7585L2.29276 4.25935L3.46965 5.43433L7.99972 0.911621L15.7896 8.68879L13.2864 11.1879ZM4.64652 10.1155L1.28401 6.7585L2.29276 5.75137L3.46965 6.92633L7.99972 2.40364L10.1854 4.58573L9.17659 5.59287L7.99972 4.41789L4.47838 7.93346L5.65528 9.10842L4.64652 10.1155ZM5.39375 10.8615L7.57938 13.0436L12.1095 8.52096L13.2864 9.69592L14.2951 8.68879L10.9326 5.33174L9.92382 6.33887L11.1007 7.51383L7.57938 11.0294L6.40248 9.85445L5.39375 10.8615ZM7.57938 9.53738L5.97284 7.93346L7.99972 5.90991L9.60626 7.51383L7.57938 9.53738Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_lossless">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div class="item-content">
                      <div class="item-title">Lossless</div>
                      <div class="item-description">Reinforce token security framework</div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="content">
      <Hero />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>Test Footer</p>
        <small>© 2024 SolidProof</small>
      </div>
    </footer>

    <button
      class="back-to-top"
      v-show="showTop"
      @click="scrollToTop"
      aria-label="Back to top"
    >↑</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Hero from './components/Hero.vue'

const isOpen = ref(false)
const showTop = ref(false)
const showDropdown = ref(false)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function handleResize() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    isOpen.value = false
  }
}
function handleScroll() {
  showTop.value = window.scrollY > 200
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
* { box-sizing: border-box; }
html, body, #app, .page-root { height: 100%; }
body { margin: 0; }

.page-root { display: flex; flex-direction: column; min-height: 100%; }
.container { max-width: 960px; margin: 0 auto; padding: 0 16px; }

.site-header { position: fixed; top: 40px; left: 0; right: 0; z-index: 20; background: transparent; border-bottom: none; }
.site-header .container { position: relative; display: flex; align-items: center; justify-content: space-between; padding: 12px 30px; height: 80px; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.08); border-radius: 100px; }
.brand { font-weight: 600; color: #fff; text-decoration: none; }

.nav-toggle { display: inline-flex; flex-direction: column; gap: 4px; padding: 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; background: transparent; }
.nav-toggle .bar { width: 20px; height: 2px; background: #fff; border-radius: 1px; }

.primary-nav { position: absolute; top: 56px; left: 0; right: 0; background: rgba(0,0,0,0.7); border-bottom: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); display: none; }
.primary-nav.open { display: block; }
.nav-list { list-style: none; margin: 0; padding: 8px; }
.nav-list li { margin: 4px 0; }
.nav-list a { display: block; padding: 8px 12px; border-radius: 6px; color: #fff; text-decoration: none; }
.nav-list a:hover { background: rgba(255,255,255,0.08); }

.content { flex: 1; padding: 0 0 24px; }

.site-footer { background: #000; }
.site-footer .container { display: flex; align-items: center; justify-content: space-between; padding: 16px; }

.back-to-top { position: fixed; right: 20px; bottom: 24px; width: 44px; height: 44px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); color: #fff; cursor: pointer; }

@media (min-width: 768px) {
  .nav-toggle { display: none; }
  .primary-nav { all: unset; }
  .primary-nav { display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
  .primary-nav .nav-list { display: flex; gap: 16px; align-items: center; justify-content: center; }
  .nav-list li { margin: 0; }
  .nav-list a { padding: 8px 10px; }
  .site-header .container { max-width: 1240px; }
}

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.brand { display: inline-flex; align-items: center; gap: 8px; }
.brand-logo { height: 24px; width: auto; display: block; }
@media (min-width: 768px) { .brand-logo { height: 28px; } }
.brand-logo--light { display: none; }
@media (prefers-color-scheme: light) {
  .brand-logo--dark { display: none; }
  .brand-logo--light { display: block; }
}

/* Services Dropdown */
.dropdown-container { position: relative; }
.dropdown-trigger { display: inline-flex; align-items: center; gap: 6px; color: #fff; }
.trigger-caret { transition: transform 0.2s ease; }
.dropdown-trigger[aria-expanded="true"] .trigger-caret { transform: rotate(180deg); }
.services-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 290px;
  padding: 10px 0;
  background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33;
  border: 1px solid #606061;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.dropdown-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 5px 19px 5px 13px;
}
.dropdown-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.dropdown-title {
  color: #fff;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
}
.dropdown-divider {
  width: 100%;
  height: 1px;
  background: #464649;
  margin: 4px 0;
  filter: drop-shadow(0 -1px 0 #2B2C2F);
}
.dropdown-items {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.dropdown-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  padding: 2px 13px;
  min-height: 45px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.15s ease;
}
.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
}
.item-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}
.item-content {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  padding: 0;
}
.item-title {
  color: #fff;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
}
.item-description {
  color: #898A8B;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 100%;
}

@media (max-width: 767px) {
  .services-dropdown { display: none !important; }
}
</style>
