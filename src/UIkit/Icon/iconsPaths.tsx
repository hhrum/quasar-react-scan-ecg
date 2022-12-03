/* eslint-disable max-len */
import colors from '@Assets/styles/colors'

const iconsPaths = {
  check: (
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heartActive: (
    <path
      d="M12 22.9999C12.1289 22.9999 12.276 22.9656 12.4412 22.8969C12.6063 22.8281 12.7533 22.7533 12.8822 22.6726C15.1541 21.2176 17.1219 19.6919 18.7855 18.0955C20.4492 16.4992 21.7342 14.8584 22.6405 13.173C23.5468 11.4878 24 9.78432 24 8.06263C24 6.98761 23.8288 6.00351 23.4865 5.11034C23.144 4.21718 22.6687 3.44324 22.0605 2.78852C21.4522 2.1338 20.7392 1.62862 19.9215 1.27298C19.1038 0.917327 18.2196 0.739502 17.2689 0.739502C16.0927 0.739502 15.0575 1.04059 14.1632 1.64277C13.2689 2.24495 12.5479 3.04718 12 4.04946C11.4603 3.05526 10.7432 2.25505 9.84896 1.64883C8.9547 1.04261 7.91542 0.739502 6.73112 0.739502C5.78047 0.739502 4.8983 0.917327 4.0846 1.27298C3.2709 1.62862 2.55791 2.1338 1.94562 2.78852C1.33334 3.44324 0.855994 4.21718 0.513596 5.11034C0.171199 6.00351 0 6.98761 0 8.06263C0 9.78432 0.453173 11.4878 1.35952 13.173C2.26587 14.8584 3.55288 16.4992 5.22055 18.0955C6.88823 19.6919 8.85803 21.2176 11.13 22.6726C11.2589 22.7533 11.4059 22.8281 11.571 22.8969C11.7361 22.9656 11.8791 22.9999 12 22.9999Z"
      fill="currentColor"
    />
  ),
  heartDefault: (
    <path
      d="M0 8.06263C0 9.78432 0.453173 11.4878 1.35952 13.173C2.26587 14.8584 3.55288 16.4992 5.22055 18.0955C6.88823 19.6919 8.85803 21.2176 11.13 22.6726C11.2589 22.7533 11.4059 22.8281 11.571 22.8969C11.7361 22.9656 11.8791 22.9999 12 22.9999C12.1289 22.9999 12.276 22.9656 12.4412 22.8969C12.6063 22.8281 12.7533 22.7533 12.8822 22.6726C15.1541 21.2176 17.1219 19.6919 18.7855 18.0955C20.4492 16.4992 21.7342 14.8584 22.6405 13.173C23.5468 11.4878 24 9.78432 24 8.06263C24 6.98761 23.8288 6.00351 23.4865 5.11034C23.144 4.21718 22.6647 3.44324 22.0484 2.78852C21.4321 2.1338 20.707 1.62862 19.8732 1.27298C19.0393 0.917327 18.1309 0.739502 17.1481 0.739502C16.0282 0.739502 15.0272 0.986032 14.145 1.47909C13.2629 1.97215 12.5479 2.62686 12 3.44324C11.4603 2.62686 10.7473 1.97215 9.86104 1.47909C8.97484 0.986032 7.97182 0.739502 6.85197 0.739502C5.87715 0.739502 4.97282 0.917327 4.13898 1.27298C3.30514 1.62862 2.57805 2.1338 1.95771 2.78852C1.33736 3.44324 0.855994 4.21718 0.513596 5.11034C0.171199 6.00351 0 6.98761 0 8.06263ZM1.94562 8.06263C1.94562 6.98761 2.1571 6.04797 2.58006 5.24371C3.00303 4.43946 3.58309 3.81303 4.32025 3.36443C5.05741 2.91583 5.89326 2.69153 6.8278 2.69153C7.58511 2.69153 8.24171 2.82692 8.7976 3.09769C9.35349 3.36847 9.82479 3.70594 10.2115 4.11009C10.5982 4.51423 10.9204 4.91837 11.1782 5.32252C11.3474 5.56501 11.4904 5.72869 11.6073 5.81356C11.7241 5.89843 11.855 5.94087 12 5.94087C12.1451 5.94087 12.274 5.89641 12.3867 5.8075C12.4995 5.71859 12.6445 5.55693 12.8218 5.32252C13.0957 4.92646 13.428 4.52433 13.8188 4.11615C14.2095 3.70796 14.6768 3.36847 15.2206 3.09769C15.7644 2.82692 16.4149 2.69153 17.1722 2.69153C18.1067 2.69153 18.9426 2.91583 19.6798 3.36443C20.4169 3.81303 20.997 4.43946 21.42 5.24371C21.8429 6.04797 22.0544 6.98761 22.0544 8.06263C22.0544 9.18616 21.7845 10.3238 21.2448 11.4757C20.705 12.6275 19.9738 13.757 19.0514 14.8644C18.1289 15.9718 17.0816 17.0286 15.9094 18.0349C14.7372 19.0412 13.5187 19.9647 12.2538 20.8054C12.1168 20.9024 12.0322 20.9509 12 20.9509C11.9678 20.9509 11.8872 20.9024 11.7583 20.8054C10.4935 19.9647 9.27494 19.0412 8.10273 18.0349C6.93052 17.0286 5.88118 15.9718 4.95469 14.8644C4.0282 13.757 3.29507 12.6275 2.7553 11.4757C2.21551 10.3238 1.94562 9.18616 1.94562 8.06263Z"
      fill="currentColor"
    />
  ),
  notificationActive: (
    <>
      <path
        d="M0 18.3802C0 18.806 0.155449 19.1465 0.466348 19.402C0.777247 19.6575 1.20862 19.7852 1.76046 19.7852H6.68044C6.71153 20.536 6.91556 21.2288 7.29252 21.8635C7.66949 22.4982 8.17664 23.011 8.81399 23.402C9.45133 23.7929 10.1781 23.9883 10.9942 23.9883C11.8181 23.9883 12.5487 23.7948 13.186 23.4078C13.8233 23.0208 14.3305 22.508 14.7075 21.8694C15.0844 21.2308 15.2885 20.536 15.3195 19.7852H20.2396C20.7914 19.7852 21.2227 19.6575 21.5336 19.402C21.8445 19.1465 22 18.806 22 18.3802C22 17.9932 21.8873 17.6178 21.6618 17.254C21.4365 16.8902 21.1547 16.5341 20.8166 16.1857C20.4785 15.8374 20.1424 15.4891 19.8082 15.1407C19.5516 14.8775 19.3515 14.5331 19.2077 14.1074C19.0639 13.6817 18.957 13.2288 18.8871 12.7489C18.8172 12.269 18.7666 11.8045 18.7355 11.3555C18.7122 9.83064 18.551 8.48958 18.2517 7.33235C17.9524 6.17512 17.488 5.20947 16.8585 4.4354C16.2289 3.66134 15.3973 3.08853 14.3635 2.71698C14.1692 1.95839 13.7747 1.31591 13.1801 0.789549C12.5856 0.263183 11.8569 0 10.9942 0C10.1392 0 9.41441 0.263183 8.81981 0.789549C8.22522 1.31591 7.83076 1.95839 7.63645 2.71698C6.60272 3.08853 5.76912 3.66134 5.13566 4.4354C4.5022 5.20947 4.0378 6.17512 3.74245 7.33235C3.44709 8.48958 3.28776 9.83064 3.26444 11.3555C3.23335 11.8045 3.18283 12.269 3.11288 12.7489C3.04293 13.2288 2.93605 13.6817 2.79226 14.1074C2.64847 14.5331 2.44832 14.8775 2.19183 15.1407C1.85762 15.4891 1.52146 15.8374 1.18336 16.1857C0.845256 16.5341 0.563505 16.8902 0.338103 17.254C0.112701 17.6178 0 17.9932 0 18.3802ZM2.26179 18.0319V17.8926C2.33174 17.7842 2.44833 17.639 2.61155 17.4571C2.77477 17.2753 2.95937 17.076 3.16534 16.8592C3.37131 16.6424 3.57534 16.4219 3.77743 16.1974C3.98728 15.9652 4.16993 15.6962 4.32538 15.3904C4.48083 15.0846 4.61296 14.7382 4.72177 14.3512C4.83059 13.9642 4.91609 13.5345 4.97827 13.0624C5.04045 12.5902 5.08708 12.0716 5.11817 11.5065C5.14926 9.81905 5.32415 8.4799 5.64282 7.4891C5.96148 6.49829 6.38703 5.76099 6.91945 5.2772C7.45186 4.79341 8.05228 4.45863 8.72071 4.27285C8.86839 4.24189 8.98109 4.18577 9.05882 4.10449C9.13654 4.02321 9.17929 3.90904 9.18707 3.76197C9.21038 3.15819 9.38332 2.66472 9.70588 2.28156C10.0284 1.8984 10.4579 1.70682 10.9942 1.70682C11.5382 1.70682 11.9715 1.8984 12.2941 2.28156C12.6167 2.66472 12.7896 3.15819 12.8129 3.76197C12.8129 3.90904 12.8537 4.02321 12.9354 4.10449C13.017 4.18577 13.1277 4.24189 13.2676 4.27285C13.9361 4.45863 14.5365 4.79341 15.0689 5.2772C15.6013 5.76099 16.0288 6.49829 16.3513 7.4891C16.6739 8.4799 16.8508 9.81905 16.8819 11.5065C16.9051 12.0716 16.9498 12.5902 17.0159 13.0624C17.0819 13.5345 17.1674 13.9642 17.2723 14.3512C17.3773 14.7382 17.5075 15.0846 17.6629 15.3904C17.8184 15.6962 18.0011 15.9652 18.2109 16.1974C18.4208 16.4219 18.6287 16.6424 18.8346 16.8592C19.0406 17.076 19.2233 17.2753 19.3826 17.4571C19.542 17.639 19.6566 17.7842 19.7265 17.8926V18.0319H2.26179ZM8.4992 19.7852H13.5008C13.4541 20.5748 13.2015 21.1998 12.743 21.6603C12.2844 22.1209 11.7015 22.3512 10.9942 22.3512C10.2946 22.3512 9.71364 22.1209 9.25119 21.6603C8.78872 21.1998 8.53806 20.5748 8.4992 19.7852Z"
        fill="currentColor"
      />
      <circle
        cx="16"
        cy="4"
        r="4"
        fill={colors.primary}
      />
    </>
  ),
  notificationDefault: (
    <path
      d="M0 18.3802C0 18.806 0.155449 19.1465 0.466348 19.402C0.777247 19.6575 1.20862 19.7852 1.76046 19.7852H6.68044C6.71153 20.536 6.91556 21.2288 7.29252 21.8635C7.66949 22.4982 8.17664 23.011 8.81399 23.402C9.45133 23.7929 10.1781 23.9883 10.9942 23.9883C11.8181 23.9883 12.5487 23.7948 13.186 23.4078C13.8233 23.0208 14.3305 22.508 14.7075 21.8694C15.0844 21.2308 15.2885 20.536 15.3195 19.7852H20.2396C20.7914 19.7852 21.2227 19.6575 21.5336 19.402C21.8445 19.1465 22 18.806 22 18.3802C22 17.9932 21.8873 17.6178 21.6618 17.254C21.4365 16.8902 21.1547 16.5341 20.8166 16.1857C20.4785 15.8374 20.1424 15.4891 19.8082 15.1407C19.5516 14.8775 19.3515 14.5331 19.2077 14.1074C19.0639 13.6817 18.957 13.2288 18.8871 12.7489C18.8172 12.269 18.7666 11.8045 18.7355 11.3555C18.7122 9.83064 18.551 8.48958 18.2517 7.33235C17.9524 6.17512 17.488 5.20947 16.8585 4.4354C16.2289 3.66134 15.3973 3.08853 14.3635 2.71698C14.1692 1.95839 13.7747 1.31591 13.1801 0.789549C12.5856 0.263183 11.8569 0 10.9942 0C10.1392 0 9.41441 0.263183 8.81981 0.789549C8.22522 1.31591 7.83076 1.95839 7.63645 2.71698C6.60272 3.08853 5.76912 3.66134 5.13566 4.4354C4.5022 5.20947 4.0378 6.17512 3.74245 7.33235C3.44709 8.48958 3.28776 9.83064 3.26444 11.3555C3.23335 11.8045 3.18283 12.269 3.11288 12.7489C3.04293 13.2288 2.93605 13.6817 2.79226 14.1074C2.64847 14.5331 2.44832 14.8775 2.19183 15.1407C1.85762 15.4891 1.52146 15.8374 1.18336 16.1857C0.845256 16.5341 0.563505 16.8902 0.338103 17.254C0.112701 17.6178 0 17.9932 0 18.3802ZM2.26179 18.0319V17.8926C2.33174 17.7842 2.44833 17.639 2.61155 17.4571C2.77477 17.2753 2.95937 17.076 3.16534 16.8592C3.37131 16.6424 3.57534 16.4219 3.77743 16.1974C3.98728 15.9652 4.16993 15.6962 4.32538 15.3904C4.48083 15.0846 4.61296 14.7382 4.72177 14.3512C4.83059 13.9642 4.91609 13.5345 4.97827 13.0624C5.04045 12.5902 5.08708 12.0716 5.11817 11.5065C5.14926 9.81905 5.32415 8.4799 5.64282 7.4891C5.96148 6.49829 6.38703 5.76099 6.91945 5.2772C7.45186 4.79341 8.05228 4.45863 8.72071 4.27285C8.86839 4.24189 8.98109 4.18577 9.05882 4.10449C9.13654 4.02321 9.17929 3.90904 9.18707 3.76197C9.21038 3.15819 9.38332 2.66472 9.70588 2.28156C10.0284 1.8984 10.4579 1.70682 10.9942 1.70682C11.5382 1.70682 11.9715 1.8984 12.2941 2.28156C12.6167 2.66472 12.7896 3.15819 12.8129 3.76197C12.8129 3.90904 12.8537 4.02321 12.9354 4.10449C13.017 4.18577 13.1277 4.24189 13.2676 4.27285C13.9361 4.45863 14.5365 4.79341 15.0689 5.2772C15.6013 5.76099 16.0288 6.49829 16.3513 7.4891C16.6739 8.4799 16.8508 9.81905 16.8819 11.5065C16.9051 12.0716 16.9498 12.5902 17.0159 13.0624C17.0819 13.5345 17.1674 13.9642 17.2723 14.3512C17.3773 14.7382 17.5075 15.0846 17.6629 15.3904C17.8184 15.6962 18.0011 15.9652 18.2109 16.1974C18.4208 16.4219 18.6287 16.6424 18.8346 16.8592C19.0406 17.076 19.2233 17.2753 19.3826 17.4571C19.542 17.639 19.6566 17.7842 19.7265 17.8926V18.0319H2.26179ZM8.4992 19.7852H13.5008C13.4541 20.5748 13.2015 21.1998 12.743 21.6603C12.2844 22.1209 11.7015 22.3512 10.9942 22.3512C10.2946 22.3512 9.71364 22.1209 9.25119 21.6603C8.78872 21.1998 8.53806 20.5748 8.4992 19.7852Z"
      fill="currentColor"
    />
  ),
  camera: (
    <path
      d="M2.94056 17.4155H20.0595C21.0334 17.4155 21.767 17.1796 22.2602 16.7078C22.7534 16.2359 23 15.5281 23 14.5844V5.02282C23 4.08522 22.7534 3.38051 22.2602 2.90867C21.767 2.43683 21.0334 2.20091 20.0595 2.20091H17.3811C17.1314 2.20091 16.9316 2.18265 16.7818 2.14612C16.632 2.10958 16.4993 2.04718 16.3838 1.9589C16.2683 1.87062 16.1388 1.75038 15.9951 1.59817L15.2459 0.776254C15.0149 0.526635 14.759 0.334855 14.478 0.200912C14.1971 0.0669708 13.8162 0 13.3355 0H9.59894C9.11824 0 8.73897 0.0669708 8.46114 0.200912C8.18331 0.334855 7.92577 0.526635 7.68853 0.776254L6.93934 1.59817C6.73332 1.82344 6.5429 1.98021 6.36809 2.06849C6.19328 2.15677 5.9217 2.20091 5.55335 2.20091H2.94056C1.96037 2.20091 1.22523 2.43683 0.73514 2.90867C0.245047 3.38051 0 4.08522 0 5.02282V14.5844C0 15.5281 0.245047 16.2359 0.73514 16.7078C1.22523 17.1796 1.96037 17.4155 2.94056 17.4155ZM2.95928 15.9451C2.49729 15.9451 2.13987 15.8249 1.88702 15.5844C1.63417 15.344 1.50774 14.9863 1.50774 14.5114V5.10501C1.50774 4.63013 1.63417 4.27244 1.88702 4.03196C2.13987 3.79147 2.49729 3.67123 2.95928 3.67123H5.92794C6.35248 3.67123 6.6943 3.62404 6.95339 3.52968C7.21248 3.43531 7.46065 3.26027 7.69789 3.00456L8.42837 2.20091C8.69683 1.90867 8.93406 1.71385 9.14008 1.61644C9.3461 1.51902 9.65515 1.47032 10.0672 1.47032H12.8673C13.2793 1.47032 13.5884 1.51902 13.7944 1.61644C14.0004 1.71385 14.2376 1.90867 14.5061 2.20091L15.2366 3.00456C15.4738 3.26027 15.722 3.43531 15.9811 3.52968C16.2402 3.62404 16.582 3.67123 17.0065 3.67123H20.0314C20.4934 3.67123 20.8524 3.79147 21.1084 4.03196C21.3643 4.27244 21.4923 4.63013 21.4923 5.10501V14.5114C21.4923 14.9863 21.3643 15.344 21.1084 15.5844C20.8524 15.8249 20.4934 15.9451 20.0314 15.9451H2.95928ZM11.5 14.6301C12.2055 14.6301 12.8673 14.5022 13.4854 14.2465C14.1035 13.9908 14.6466 13.6347 15.1149 13.1781C15.5831 12.7214 15.9483 12.1917 16.2106 11.589C16.4727 10.9863 16.6038 10.3348 16.6038 9.6347C16.6038 8.70926 16.376 7.86907 15.9202 7.11414C15.4645 6.3592 14.8495 5.7595 14.0754 5.31506C13.3012 4.87061 12.4428 4.64839 11.5 4.64839C10.7883 4.64839 10.1234 4.77624 9.50528 5.03195C8.88723 5.28766 8.34564 5.64382 7.88051 6.10044C7.41539 6.55706 7.05016 7.08674 6.78482 7.68948C6.51949 8.2922 6.38682 8.9406 6.38682 9.6347C6.38682 10.3348 6.51949 10.9863 6.78482 11.589C7.05016 12.1917 7.41539 12.7214 7.88051 13.1781C8.34564 13.6347 8.88723 13.9908 9.50528 14.2465C10.1234 14.5022 10.7883 14.6301 11.5 14.6301ZM11.5 13.242C10.8195 13.242 10.1999 13.0807 9.64114 12.758C9.08233 12.4353 8.63593 12.0015 8.30195 11.4566C7.96792 10.9117 7.80091 10.3044 7.80091 9.6347C7.80091 8.97105 7.96792 8.36678 8.30195 7.8219C8.63593 7.277 9.08233 6.84169 9.64114 6.51597C10.1999 6.19025 10.8195 6.02739 11.5 6.02739C12.1805 6.02739 12.8002 6.19025 13.3589 6.51597C13.9177 6.84169 14.3625 7.277 14.6934 7.8219C15.0243 8.36678 15.1898 8.97105 15.1898 9.6347C15.1898 10.3044 15.0243 10.9117 14.6934 11.4566C14.3625 12.0015 13.9177 12.4353 13.3589 12.758C12.8002 13.0807 12.1805 13.242 11.5 13.242Z"
      fill="currentColor"
    />
  ),
  play: (
    <path
      d="M1.37301 11.9995C1.51851 11.9995 1.65674 11.9747 1.7877 11.9251C1.91865 11.8756 2.05687 11.8083 2.20238 11.7234L10.6851 6.95171C10.9907 6.77708 11.2029 6.6225 11.3217 6.48798C11.4406 6.35346 11.5 6.19182 11.5 6.00305C11.5 5.81426 11.4406 5.65261 11.3217 5.51809C11.2029 5.38358 10.9907 5.23137 10.6851 5.06146L2.20238 0.282698C2.05687 0.202462 1.91865 0.137565 1.7877 0.0880079C1.65674 0.0384505 1.51851 0.0136719 1.37301 0.0136719C1.10626 0.0136719 0.894069 0.105707 0.736441 0.289778C0.578814 0.473848 0.5 0.719276 0.5 1.02606V10.98C0.5 11.2868 0.578814 11.5334 0.736441 11.7199C0.894069 11.9063 1.10626 11.9995 1.37301 11.9995Z"
      fill="currentColor"
    />
  ),
  share: (
    <path
      d="M3.53803 26.2769H16.462C17.6413 26.2769 18.5258 25.9742 19.1155 25.3689C19.7052 24.7634 20 23.8631 20 22.6678V11.0487C20 9.85336 19.7052 8.95301 19.1155 8.3476C18.5258 7.7422 17.6413 7.4395 16.462 7.4395H13.3183V9.31393H16.4281C16.984 9.31393 17.4159 9.46916 17.7239 9.77962C18.0319 10.0901 18.1859 10.548 18.1859 11.1535V22.563C18.1859 23.1684 18.0319 23.6263 17.7239 23.9368C17.4159 24.2473 16.984 24.4025 16.4281 24.4025H3.56056C2.99718 24.4025 2.56526 24.2473 2.26479 23.9368C1.96432 23.6263 1.81408 23.1684 1.81408 22.563V11.1535C1.81408 10.548 1.96432 10.0901 2.26479 9.77962C2.56526 9.46916 2.99718 9.31393 3.56056 9.31393H6.68169V7.4395H3.53803C2.35868 7.4395 1.47417 7.74026 0.884506 8.34178C0.294835 8.94331 0 9.8456 0 11.0487V22.6678C0 23.8708 0.294835 24.7731 0.884506 25.3746C1.47417 25.9761 2.35868 26.2769 3.53803 26.2769ZM9.99433 17.1609C10.2422 17.1609 10.4544 17.0716 10.6309 16.8931C10.8075 16.7146 10.8957 16.5012 10.8957 16.2528V4.29605L10.8281 2.54969L11.5831 3.3763L13.2957 5.26237C13.4535 5.44865 13.6563 5.54178 13.9042 5.54178C14.1371 5.54178 14.3324 5.46417 14.4901 5.30894C14.6479 5.15371 14.7267 4.95579 14.7267 4.71517C14.7267 4.49785 14.6366 4.29605 14.4564 4.10977L10.6479 0.314345C10.5352 0.197921 10.4281 0.116424 10.3267 0.0698545C10.2253 0.0232848 10.1145 0 9.99433 0C9.8817 0 9.77466 0.0232848 9.67319 0.0698545C9.57181 0.116424 9.46102 0.197921 9.34083 0.314345L5.53239 4.10977C5.35962 4.29605 5.27324 4.49785 5.27324 4.71517C5.27324 4.95579 5.34836 5.15371 5.49859 5.30894C5.64882 5.46417 5.84412 5.54178 6.0845 5.54178C6.3399 5.54178 6.54647 5.44865 6.70422 5.26237L8.40563 3.3763L9.17182 2.54969L9.10422 4.29605V16.2528C9.10422 16.5012 9.19248 16.7146 9.369 16.8931C9.54551 17.0716 9.75395 17.1609 9.99433 17.1609Z"
      fill="currentColor"
    />
  ),
  xmark: (
    <path
      d="M0.296537 17.7031C0.432718 17.8316 0.587812 17.9186 0.76182 17.9639C0.935831 18.0093 1.10984 18.0093 1.28385 17.9639C1.45785 17.9186 1.60917 17.8316 1.73778 17.7031L9.00073 10.4453L16.2637 17.7031C16.3923 17.8316 16.5436 17.9186 16.7176 17.9639C16.8916 18.0093 17.0675 18.0112 17.2453 17.9696C17.4231 17.928 17.5763 17.8392 17.7049 17.7031C17.8335 17.5746 17.9187 17.4234 17.9603 17.2495C18.0019 17.0756 18.0019 16.9017 17.9603 16.7279C17.9187 16.554 17.8335 16.4028 17.7049 16.2742L10.442 9.00511L17.7049 1.74732C17.8335 1.61879 17.9205 1.46759 17.9659 1.2937C18.0113 1.11981 18.0113 0.945928 17.9659 0.772047C17.9205 0.598162 17.8335 0.446958 17.7049 0.318435C17.5687 0.182351 17.4136 0.0935188 17.2396 0.0519378C17.0656 0.0103567 16.8916 0.0103567 16.7176 0.0519378C16.5436 0.0935188 16.3923 0.182351 16.2637 0.318435L9.00073 7.57622L1.73778 0.318435C1.60917 0.182351 1.45596 0.0935188 1.27817 0.0519378C1.10038 0.0103567 0.924481 0.0103567 0.750472 0.0519378C0.576464 0.0935188 0.425152 0.182351 0.296537 0.318435C0.167923 0.446958 0.0828099 0.598162 0.0411995 0.772047C-0.000411188 0.945928 -0.000411188 1.11981 0.0411995 1.2937C0.0828099 1.46759 0.167923 1.61879 0.296537 1.74732L7.55949 9.00511L0.296537 16.2742C0.167923 16.4028 0.0809185 16.554 0.0355253 16.7279C-0.00986813 16.9017 -0.0117595 17.0756 0.0298511 17.2495C0.0714617 17.4234 0.160357 17.5746 0.296537 17.7031Z"
      fill="currentColor"
    />
  ),
  googleIcon: (
    <>
      <path
        d="M20 10.2249C20 9.56659 19.9404 8.94159 19.8383 8.33325H10.2172V12.0916H15.7259C15.479 13.3249 14.7553 14.3666 13.6825 15.0749V17.5749H16.969C18.8932 15.8333 20 13.2666 20 10.2249Z"
        fill="#4285F4"
      />
      <path
        d="M10.217 20.0001C12.9757 20.0001 15.283 19.1001 16.9689 17.5751L13.6823 15.0751C12.7628 15.6751 11.5964 16.0418 10.217 16.0418C7.55208 16.0418 5.2958 14.2834 4.48694 11.9084H1.09827V14.4834C2.77558 17.7501 6.22385 20.0001 10.217 20.0001Z"
        fill="#16A750"
      />
      <path
        d="M4.48702 11.9083C4.27416 11.3083 4.16347 10.6666 4.16347 9.99993C4.16347 9.33327 4.28267 8.6916 4.48702 8.0916V5.5166H1.09834C0.400169 6.8666 0 8.38327 0 9.99993C0 11.6166 0.400169 13.1333 1.09834 14.4833L4.48702 11.9083Z"
        fill="#FBBC05"
      />
      <path
        d="M10.217 3.95833C11.7241 3.95833 13.0693 4.46667 14.1336 5.45834L17.0455 2.60833C15.283 0.991668 12.9757 0 10.217 0C6.22385 0 2.77558 2.25 1.09827 5.51667L4.48694 8.09167C5.2958 5.71667 7.55208 3.95833 10.217 3.95833Z"
        fill="#EA4335"
      />
    </>
  ),
  vkIcon: (
    <path
      d="M13.0718 15C4.87188 15 0.194878 9.36937 0 0H4.10743C4.24235 6.87688 7.27038 9.78979 9.66888 10.3904V0H13.5366V5.93093C15.9051 5.67568 18.3933 2.97297 19.2328 0H23.1004C22.4558 3.66366 19.7575 6.36637 17.8387 7.47748C19.7575 8.37838 22.8307 10.7357 24 15H19.7425C18.8281 12.1471 16.5497 9.93994 13.5366 9.63964V15H13.0718Z"
      fill="white"
    />
  ),
  appleIcon: (
    <path
      d="M15.0209 6.47775C14.9141 6.56326 13.0273 7.65967 13.0273 10.0976C13.0273 12.9175 15.4281 13.9151 15.5 13.9398C15.4889 14.0006 15.1186 15.306 14.2342 16.6362C13.4456 17.8067 12.622 18.9753 11.3691 18.9753C10.1161 18.9753 9.7937 18.2247 8.34732 18.2247C6.93778 18.2247 6.43662 19 5.29057 19C4.14452 19 3.34486 17.9169 2.42544 16.5868C1.36046 15.0248 0.5 12.5983 0.5 10.2952C0.5 6.60126 2.82895 4.64216 5.12105 4.64216C6.33896 4.64216 7.3542 5.46685 8.11884 5.46685C8.84664 5.46685 9.98164 4.59276 11.3672 4.59276C11.8923 4.59276 13.7791 4.64216 15.0209 6.47775ZM10.7094 3.0289C11.2825 2.32773 11.6878 1.35484 11.6878 0.381938C11.6878 0.247025 11.6768 0.110211 11.6528 0C10.7205 0.0361036 9.61129 0.640364 8.94245 1.44034C8.41733 2.05601 7.92722 3.0289 7.92722 4.0151C7.92722 4.16332 7.95117 4.31153 7.96223 4.35904C8.02119 4.37044 8.117 4.38374 8.21281 4.38374C9.04932 4.38374 10.1014 3.80608 10.7094 3.0289Z"
      fill="#333333"
    />
  ),
  chevronLeft: (
    <path
      d="M0.80127 10.8916C0.80127 11.2734 0.947266 11.5991 1.25049 11.8911L10.0103 20.46C10.2461 20.707 10.5605 20.8306 10.9199 20.8306C11.6499 20.8306 12.2227 20.269 12.2227 19.5278C12.2227 19.1685 12.0767 18.8428 11.8296 18.5957L3.93457 10.8916L11.8296 3.1875C12.0767 2.9292 12.2227 2.60352 12.2227 2.24414C12.2227 1.51416 11.6499 0.952637 10.9199 0.952637C10.5605 0.952637 10.2461 1.07617 10.0103 1.32324L1.25049 9.89209C0.947266 10.1841 0.8125 10.5098 0.80127 10.8916Z"
      fill="#D66589"
    />
  ),
  subscribeCheck: (
    <path
      d="M8 15.9921C9.0928 15.9921 10.1216 15.7831 11.0863 15.365C12.051 14.9469 12.902 14.3694 13.6392 13.6325C14.3765 12.8956 14.9543 12.0451 15.3726 11.0809C15.7909 10.1166 16 9.08832 16 7.99605C16 6.90379 15.7909 5.87555 15.3726 4.91131C14.9543 3.94708 14.3765 3.09652 13.6392 2.35962C12.902 1.62273 12.0497 1.04524 11.0824 0.627143C10.115 0.209048 9.08497 0 7.99217 0C6.89936 0 5.8706 0.209048 4.90589 0.627143C3.94119 1.04524 3.09151 1.62273 2.35686 2.35962C1.62222 3.09652 1.04575 3.94708 0.627452 4.91131C0.209151 5.87555 0 6.90379 0 7.99605C0 9.08832 0.209151 10.1166 0.627452 11.0809C1.04575 12.0451 1.62353 12.8956 2.36079 13.6325C3.09805 14.3694 3.94903 14.9469 4.91374 15.365C5.87845 15.7831 6.9072 15.9921 8 15.9921ZM7.12157 11.8217C6.98561 11.8217 6.86273 11.7929 6.75293 11.7354C6.64314 11.6779 6.53596 11.5813 6.43139 11.4454L4.46276 9.03086C4.40524 8.95245 4.35949 8.87015 4.3255 8.78395C4.29151 8.6977 4.27452 8.61015 4.27452 8.52132C4.27452 8.3436 4.33465 8.19072 4.45491 8.06268C4.57517 7.93464 4.72419 7.87063 4.90197 7.87063C5.017 7.87063 5.12027 7.89415 5.21178 7.9412C5.30328 7.98825 5.3987 8.07709 5.49805 8.20771L7.09024 10.2616L10.4393 4.88387C10.5857 4.64347 10.7739 4.52327 11.0039 4.52327C11.1713 4.52327 11.3229 4.57684 11.4589 4.68397C11.5948 4.79111 11.6628 4.93614 11.6628 5.11905C11.6628 5.2079 11.6419 5.29674 11.6 5.38559C11.5582 5.47443 11.5138 5.55805 11.4667 5.63645L7.78041 11.4454C7.69675 11.5708 7.60001 11.6648 7.49021 11.7275C7.3804 11.7903 7.25752 11.8217 7.12157 11.8217Z"
      fill="#D66589"
    />
  ),
} as const

export type IconPathType = typeof iconsPaths

export default iconsPaths
