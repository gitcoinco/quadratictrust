import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GameMenu() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="font-raleway mt-2  bg-white">
            <div className="flex justify-between px-4 py-3">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <svg
                        className="block sm:hidden mt-1"
                        width="150"
                        height="40"
                        viewBox="0 0 240 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M37.6021 0.518389L33.1652 32.3461L28.5278 32.3461L36.4653 0.291364L37.6021 0.518389Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M33.1653 32.3462L24.7612 64.6279L23.6243 64.4009L28.528 32.3462L33.1653 32.3462Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M29.1073 34.7957L9.92699 20.0796L10.5675 19.1147L30.5446 31.1791L29.1073 34.7957Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32.5851 32.4797L60.9466 50.1824L60.3673 51.1851L30.2664 35.9525L32.5851 32.4797Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.3974 35.1078L0.644598 43.2427L0.298503 42.1379L29.1072 31.3228L30.3974 35.1078Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.3801 30.7435L55.1543 25.872L55.465 26.9872L30.8466 35.3739L30.3801 30.7435Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M89.8292 27.4848C88.0516 27.4848 86.4316 27.1526 84.969 26.4883C83.529 25.8019 82.2802 24.8941 81.2227 23.7648C80.1652 22.6355 79.3551 21.3623 78.7926 19.9451C78.2301 18.5059 77.9489 17.0223 77.9489 15.4944C77.9489 13.9444 78.2414 12.4609 78.8264 11.0437C79.4339 9.60443 80.2664 8.33122 81.3239 7.22408C82.404 6.09479 83.6753 5.20908 85.1378 4.56694C86.6003 3.90265 88.1979 3.57051 89.9304 3.57051C91.708 3.57051 93.3168 3.91372 94.7568 4.60015C96.2193 5.28658 97.4681 6.20551 98.5031 7.35694C99.5607 8.50836 100.371 9.80372 100.933 11.243C101.496 12.6601 101.777 14.1105 101.777 15.5941C101.777 17.0776 101.507 18.5059 100.967 19.8787C100.427 21.2516 99.6619 22.4805 98.6719 23.5655L102.114 27.3187H96.9168L95.6681 25.9901C94.8355 26.4551 93.9243 26.8205 92.9342 27.0862C91.9442 27.3519 90.9092 27.4848 89.8292 27.4848ZM89.8629 22.6355C90.7179 22.6355 91.5055 22.4916 92.2255 22.2037L88.3779 18.0187H93.5755L95.0943 19.6462C95.4318 19.0484 95.6906 18.3951 95.8706 17.6866C96.0506 16.9559 96.1406 16.2251 96.1406 15.4944C96.1406 14.2766 95.8931 13.1362 95.3981 12.0734C94.9255 10.9884 94.2168 10.1137 93.2718 9.44943C92.3492 8.76301 91.2129 8.41979 89.8629 8.41979C88.4679 8.41979 87.2978 8.77408 86.3528 9.48265C85.4303 10.1691 84.7328 11.0659 84.2603 12.173C83.8103 13.258 83.5852 14.3873 83.5852 15.5609C83.5852 16.7787 83.8215 17.9301 84.294 19.0151C84.7665 20.078 85.4753 20.9526 86.4203 21.6391C87.3653 22.3034 88.5129 22.6355 89.8629 22.6355Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M104.335 21.0412V9.88122H109.735V19.8787C109.735 22.0709 110.556 23.1669 112.199 23.1669C112.919 23.1669 113.616 22.9787 114.291 22.6023C114.966 22.2037 115.563 21.5505 116.08 20.6426V9.88122H121.48V21.4066C121.48 21.938 121.559 22.3144 121.717 22.5359C121.897 22.7573 122.2 22.8791 122.628 22.9012V27.3187C122.11 27.4073 121.672 27.4737 121.312 27.518C120.952 27.5623 120.625 27.5844 120.333 27.5844C118.398 27.5844 117.295 26.8426 117.025 25.3591L116.924 24.2962C116.114 25.4476 115.101 26.3001 113.886 26.8537C112.694 27.3851 111.355 27.6508 109.87 27.6508C108.07 27.6508 106.697 27.0862 105.752 25.9569C104.807 24.8276 104.335 23.1891 104.335 21.0412Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M124.55 22.1041C124.55 20.9526 124.876 19.9451 125.529 19.0816C126.181 18.218 127.081 17.5426 128.229 17.0555C129.376 16.5462 130.693 16.2916 132.178 16.2916C132.898 16.2916 133.607 16.358 134.304 16.4909C135.002 16.6016 135.609 16.7676 136.127 16.9891V16.2251C136.127 14.2544 134.945 13.2691 132.583 13.2691C131.593 13.2691 130.659 13.4351 129.782 13.7673C128.926 14.0994 128.015 14.5755 127.048 15.1955L125.428 11.8076C127.768 10.3019 130.333 9.54908 133.123 9.54908C135.778 9.54908 137.837 10.1801 139.299 11.4423C140.784 12.6823 141.527 14.4869 141.527 16.8562V21.4066C141.527 21.938 141.606 22.3144 141.763 22.5359C141.943 22.7573 142.247 22.8791 142.674 22.9012V27.3187C142.202 27.4073 141.774 27.4737 141.392 27.518C141.009 27.5623 140.672 27.5844 140.379 27.5844C139.367 27.5844 138.59 27.3851 138.05 26.9866C137.533 26.588 137.207 26.0455 137.072 25.3591L136.97 24.5951C136.183 25.5916 135.238 26.3555 134.135 26.8869C133.033 27.3962 131.897 27.6508 130.727 27.6508C129.556 27.6508 128.499 27.4073 127.554 26.9201C126.631 26.433 125.9 25.7798 125.36 24.9605C124.82 24.1191 124.55 23.1669 124.55 22.1041ZM135.283 22.7684C135.845 22.3255 136.127 21.8716 136.127 21.4066V19.8455C135.654 19.6684 135.137 19.5355 134.574 19.4469C134.034 19.3362 133.539 19.2809 133.089 19.2809C132.077 19.2809 131.244 19.5023 130.592 19.9451C129.962 20.388 129.646 20.9526 129.646 21.6391C129.646 22.2369 129.883 22.7573 130.355 23.2001C130.85 23.6209 131.503 23.8312 132.313 23.8312C132.853 23.8312 133.393 23.7316 133.933 23.5323C134.473 23.333 134.923 23.0784 135.283 22.7684Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M144.427 18.5834C144.427 16.9005 144.754 15.3837 145.406 14.033C146.081 12.6601 147.004 11.5751 148.174 10.778C149.366 9.95872 150.727 9.54908 152.257 9.54908C153.495 9.54908 154.609 9.848 155.599 10.4459C156.611 11.0216 157.388 11.7855 157.928 12.7376V3.0723H163.328V21.4066C163.328 21.938 163.407 22.3144 163.564 22.5359C163.744 22.7573 164.048 22.8791 164.475 22.9012V27.3187C163.53 27.4958 162.765 27.5844 162.18 27.5844C161.258 27.5844 160.504 27.3851 159.919 26.9866C159.334 26.588 158.985 26.0344 158.873 25.3258L158.771 24.4291C158.141 25.5141 157.286 26.3223 156.206 26.8537C155.126 27.3851 153.99 27.6508 152.797 27.6508C151.177 27.6508 149.737 27.2633 148.477 26.4883C147.217 25.6912 146.227 24.6062 145.507 23.2334C144.787 21.8605 144.427 20.3105 144.427 18.5834ZM157.961 20.7423V17.0887C157.624 16.203 157.073 15.4834 156.308 14.9298C155.565 14.3541 154.789 14.0662 153.979 14.0662C153.214 14.0662 152.527 14.2766 151.92 14.6973C151.312 15.118 150.84 15.6826 150.502 16.3912C150.165 17.0998 149.996 17.8637 149.996 18.683C149.996 19.9673 150.39 21.0412 151.177 21.9048C151.987 22.7462 153.011 23.1669 154.249 23.1669C154.991 23.1669 155.7 22.9566 156.375 22.5359C157.073 22.093 157.601 21.4951 157.961 20.7423Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M178.762 14.4316C177.457 14.4537 176.276 14.6641 175.218 15.0626C174.161 15.4612 173.396 16.0591 172.923 16.8562V27.3187H167.523V9.88122H172.484V13.4019C173.092 12.2284 173.879 11.3094 174.847 10.6451C175.814 9.98086 176.827 9.63765 177.884 9.6155C178.334 9.6155 178.627 9.62658 178.762 9.64872V14.4316Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M179.791 22.1041C179.791 20.9526 180.117 19.9451 180.77 19.0816C181.422 18.218 182.322 17.5426 183.47 17.0555C184.617 16.5462 185.933 16.2916 187.419 16.2916C188.139 16.2916 188.847 16.358 189.545 16.4909C190.242 16.6016 190.85 16.7676 191.367 16.9891V16.2251C191.367 14.2544 190.186 13.2691 187.824 13.2691C186.833 13.2691 185.9 13.4351 185.022 13.7673C184.167 14.0994 183.256 14.5755 182.288 15.1955L180.668 11.8076C183.008 10.3019 185.573 9.54908 188.364 9.54908C191.019 9.54908 193.077 10.1801 194.54 11.4423C196.025 12.6823 196.767 14.4869 196.767 16.8562V21.4066C196.767 21.938 196.846 22.3144 197.004 22.5359C197.184 22.7573 197.488 22.8791 197.915 22.9012V27.3187C197.443 27.4073 197.015 27.4737 196.632 27.518C196.25 27.5623 195.912 27.5844 195.62 27.5844C194.607 27.5844 193.831 27.3851 193.291 26.9866C192.774 26.588 192.447 26.0455 192.312 25.3591L192.211 24.5951C191.424 25.5916 190.479 26.3555 189.376 26.8869C188.274 27.3962 187.137 27.6508 185.967 27.6508C184.797 27.6508 183.74 27.4073 182.795 26.9201C181.872 26.433 181.141 25.7798 180.601 24.9605C180.061 24.1191 179.791 23.1669 179.791 22.1041ZM190.524 22.7684C191.086 22.3255 191.367 21.8716 191.367 21.4066V19.8455C190.895 19.6684 190.377 19.5355 189.815 19.4469C189.275 19.3362 188.78 19.2809 188.33 19.2809C187.317 19.2809 186.485 19.5023 185.832 19.9451C185.202 20.388 184.887 20.9526 184.887 21.6391C184.887 22.2369 185.123 22.7573 185.596 23.2001C186.091 23.6209 186.743 23.8312 187.554 23.8312C188.094 23.8312 188.634 23.7316 189.174 23.5323C189.714 23.333 190.164 23.0784 190.524 22.7684Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M211.991 26.3887C211.248 26.6987 210.393 26.9866 209.426 27.2523C208.481 27.518 207.525 27.6508 206.557 27.6508C205.657 27.6508 204.836 27.5069 204.093 27.2191C203.351 26.9091 202.755 26.4108 202.304 25.7244C201.854 25.038 201.629 24.1301 201.629 23.0009V13.9001H199.368V9.88122H201.629V4.33444H207.03V9.88122H210.641V13.9001H207.03V21.1741C207.03 21.7498 207.176 22.1705 207.468 22.4362C207.761 22.6798 208.132 22.8016 208.582 22.8016C208.987 22.8016 209.403 22.7351 209.831 22.6023C210.258 22.4694 210.63 22.3255 210.945 22.1705L211.991 26.3887Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M214.095 7.88836V3.0723H219.495V7.88836H214.095ZM214.095 27.3187V9.88122H219.495V27.3187H214.095Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M231.664 27.6508C229.683 27.6508 227.973 27.2301 226.533 26.3887C225.116 25.5473 224.025 24.4401 223.26 23.0673C222.517 21.6944 222.146 20.1998 222.146 18.5834C222.146 16.9891 222.517 15.5055 223.26 14.1326C224.025 12.7598 225.116 11.6526 226.533 10.8112C227.951 9.96979 229.661 9.54908 231.664 9.54908C233.689 9.54908 235.399 9.98086 236.794 10.8444C238.211 11.6859 239.269 12.793 239.966 14.1659L234.701 15.7269C234.004 14.6198 232.98 14.0662 231.63 14.0662C230.527 14.0662 229.593 14.4759 228.828 15.2951C228.063 16.1144 227.681 17.2105 227.681 18.5834C227.681 19.9562 228.063 21.0634 228.828 21.9048C229.593 22.7462 230.527 23.1669 231.63 23.1669C232.305 23.1669 232.924 23.0119 233.486 22.7019C234.049 22.3698 234.465 21.9491 234.735 21.4398L240 23.0341C239.347 24.3848 238.301 25.4919 236.861 26.3555C235.444 27.2191 233.711 27.6508 231.664 27.6508Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M98.2577 45.402H90.9098V64.1868H85.3308V45.402H77.9489V40.6229H98.2577V45.402Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M110.772 51.3096C109.457 51.3318 108.266 51.5419 107.2 51.9402C106.134 52.3385 105.363 52.9359 104.887 53.7324V64.1868H99.4439V46.7628H104.445V50.2808C105.057 49.1081 105.851 48.1899 106.826 47.5261C107.801 46.8623 108.822 46.5194 109.887 46.4973C110.341 46.4973 110.636 46.5083 110.772 46.5305V51.3096Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M112.894 57.9142V46.7628H118.337V56.7526C118.337 58.943 119.165 60.0382 120.821 60.0382C121.546 60.0382 122.249 59.8502 122.93 59.474C123.61 59.0758 124.211 58.4231 124.733 57.5159V46.7628H130.176V58.2792C130.176 58.8103 130.255 59.1864 130.414 59.4077C130.595 59.6289 130.901 59.7506 131.332 59.7727V64.1868C130.811 64.2753 130.368 64.3417 130.006 64.3859C129.643 64.4302 129.314 64.4523 129.019 64.4523C127.069 64.4523 125.957 63.7111 125.685 62.2287L125.583 61.1666C124.767 62.3172 123.746 63.169 122.522 63.7222C121.32 64.2532 119.97 64.5187 118.473 64.5187C116.659 64.5187 115.276 63.9545 114.323 62.8261C113.371 61.6977 112.894 60.0604 112.894 57.9142Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M141.23 64.5187C139.688 64.5187 138.191 64.2753 136.74 63.7885C135.311 63.2797 134.097 62.5606 133.1 61.6313L134.971 58.2792C137.17 59.8502 139.2 60.6356 141.06 60.6356C141.763 60.6356 142.307 60.525 142.693 60.3037C143.078 60.0825 143.271 59.7395 143.271 59.2749C143.271 58.7881 143.01 58.4452 142.489 58.246C141.967 58.0248 141.196 57.7703 140.175 57.4827C138.815 57.0402 137.681 56.6087 136.774 56.1884C135.866 55.768 135.186 55.2591 134.732 54.6617C134.279 54.0643 134.052 53.2678 134.052 52.2721C134.052 50.5242 134.721 49.1192 136.059 48.0571C137.397 46.973 139.212 46.4309 141.502 46.4309C142.727 46.4309 143.917 46.619 145.074 46.9951C146.253 47.3712 147.353 48.0018 148.374 48.8869L146.265 52.2057C145.244 51.5198 144.337 51.022 143.543 50.7122C142.749 50.4025 141.978 50.2476 141.23 50.2476C140.64 50.2476 140.141 50.3582 139.733 50.5795C139.325 50.7786 139.121 51.1326 139.121 51.6415C139.121 52.1283 139.348 52.4934 139.801 52.7367C140.255 52.958 140.958 53.2014 141.91 53.4669C143.362 53.8873 144.575 54.3187 145.55 54.7612C146.548 55.1816 147.285 55.7127 147.761 56.3543C148.26 56.9738 148.51 57.8035 148.51 58.8434C148.51 60.6135 147.852 62.0074 146.537 63.0252C145.221 64.0209 143.452 64.5187 141.23 64.5187Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M162.735 63.2575C161.987 63.5673 161.125 63.8549 160.15 64.1204C159.197 64.3859 158.233 64.5187 157.258 64.5187C156.351 64.5187 155.523 64.3749 154.775 64.0872C154.026 63.7775 153.425 63.2797 152.972 62.5938C152.518 61.9079 152.291 61.0007 152.291 59.8723V50.7786H150.012V46.7628H152.291V41.2203H157.734V46.7628H161.374V50.7786H157.734V58.0469C157.734 58.6222 157.882 59.0426 158.177 59.3081C158.471 59.5515 158.846 59.6732 159.299 59.6732C159.707 59.6732 160.127 59.6068 160.558 59.474C160.989 59.3413 161.363 59.1975 161.681 59.0426L162.735 63.2575Z"
                          fill="#0F00B7"
                        />
                      </svg>
                      <svg
                        className="hidden sm:block ml-4"
                        width="240"
                        height="65"
                        viewBox="0 0 480 130"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M75.2042 1.03678L66.3304 64.6922L57.0557 64.6922L72.9306 0.582732L75.2042 1.03678Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M66.3307 64.6923L49.5223 129.256L47.2487 128.802L57.056 64.6923L66.3307 64.6923Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.2145 69.5915L19.854 40.1591L21.135 38.2293L61.0892 62.3581L58.2145 69.5915Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M65.1702 64.9595L121.893 100.365L120.735 102.37L60.5329 71.9051L65.1702 64.9595Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M60.7947 70.2156L1.2892 86.4853L0.597006 84.2757L58.2144 62.6456L60.7947 70.2156Z"
                          fill="#0F00B7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M60.7601 61.4869L110.309 51.7439L110.93 53.9744L61.6933 70.7477L60.7601 61.4869Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M179.658 54.9696C176.103 54.9696 172.863 54.3053 169.938 52.9767C167.058 51.6039 164.56 49.7881 162.445 47.5296C160.33 45.271 158.71 42.7246 157.585 39.8903C156.46 37.0117 155.898 34.0446 155.898 30.9889C155.898 27.8889 156.483 24.9217 157.653 22.0874C158.868 19.2089 160.533 16.6624 162.648 14.4482C164.808 12.1896 167.351 10.4182 170.276 9.13388C173.201 7.80531 176.396 7.14103 179.861 7.14103C183.416 7.14103 186.634 7.82746 189.514 9.20031C192.439 10.5732 194.936 12.411 197.006 14.7139C199.121 17.0167 200.741 19.6074 201.866 22.486C202.991 25.3203 203.554 28.221 203.554 31.1882C203.554 34.1553 203.014 37.0117 201.934 39.7574C200.854 42.5031 199.324 44.961 197.344 47.131L204.229 54.6374H193.834L191.336 51.9803C189.671 52.9103 187.849 53.641 185.868 54.1724C183.888 54.7038 181.818 54.9696 179.658 54.9696ZM179.726 45.271C181.436 45.271 183.011 44.9831 184.451 44.4074L176.756 36.0374H187.151L190.189 39.2924C190.864 38.0967 191.381 36.7903 191.741 35.3731C192.101 33.9117 192.281 32.4503 192.281 30.9889C192.281 28.5532 191.786 26.2724 190.796 24.1467C189.851 21.9767 188.434 20.2274 186.544 18.8989C184.698 17.526 182.426 16.8396 179.726 16.8396C176.936 16.8396 174.596 17.5482 172.706 18.9653C170.861 20.3382 169.466 22.1317 168.521 24.346C167.621 26.516 167.17 28.7746 167.17 31.1217C167.17 33.5574 167.643 35.8603 168.588 38.0303C169.533 40.156 170.951 41.9053 172.841 43.2781C174.731 44.6067 177.026 45.271 179.726 45.271Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M208.67 42.0824V19.7624H219.47V39.7574C219.47 44.1417 221.113 46.3339 224.398 46.3339C225.838 46.3339 227.233 45.9574 228.583 45.2046C229.933 44.4074 231.125 43.101 232.16 41.2853V19.7624H242.961V42.8131C242.961 43.876 243.118 44.6289 243.433 45.0717C243.793 45.5146 244.401 45.7581 245.256 45.8024V54.6374C244.221 54.8146 243.343 54.9474 242.623 55.036C241.903 55.1246 241.251 55.1688 240.666 55.1688C236.796 55.1688 234.591 53.6853 234.05 50.7181L233.848 48.5924C232.228 50.8953 230.203 52.6003 227.773 53.7074C225.388 54.7703 222.71 55.3017 219.74 55.3017C216.14 55.3017 213.395 54.1724 211.505 51.9139C209.615 49.6553 208.67 46.3781 208.67 42.0824Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M249.1 44.2081C249.1 41.9053 249.753 39.8903 251.058 38.1631C252.363 36.436 254.163 35.0853 256.458 34.111C258.753 33.0924 261.386 32.5832 264.356 32.5832C265.796 32.5832 267.213 32.716 268.608 32.9817C270.003 33.2031 271.218 33.5353 272.253 33.9781V32.4503C272.253 28.5089 269.891 26.5382 265.166 26.5382C263.186 26.5382 261.318 26.8703 259.563 27.5346C257.853 28.1989 256.03 29.151 254.095 30.391L250.855 23.6153C255.535 20.6039 260.666 19.0982 266.246 19.0982C271.556 19.0982 275.673 20.3603 278.598 22.8846C281.569 25.3646 283.054 28.9739 283.054 33.7124V42.8131C283.054 43.876 283.211 44.6289 283.526 45.0717C283.886 45.5146 284.494 45.7581 285.349 45.8024V54.6374C284.404 54.8146 283.549 54.9474 282.784 55.036C282.019 55.1246 281.344 55.1688 280.759 55.1688C278.734 55.1688 277.181 54.7703 276.101 53.9731C275.066 53.176 274.413 52.091 274.143 50.7181L273.941 49.1903C272.366 51.1831 270.476 52.711 268.271 53.7738C266.066 54.7924 263.793 55.3017 261.453 55.3017C259.113 55.3017 256.998 54.8146 255.108 53.8403C253.263 52.866 251.8 51.5596 250.72 49.921C249.64 48.2381 249.1 46.3339 249.1 44.2081ZM270.566 45.5367C271.691 44.651 272.253 43.7431 272.253 42.8131V39.691C271.308 39.3367 270.273 39.071 269.148 38.8939C268.068 38.6724 267.078 38.5617 266.178 38.5617C264.153 38.5617 262.488 39.0046 261.183 39.8903C259.923 40.776 259.293 41.9053 259.293 43.2781C259.293 44.4739 259.766 45.5146 260.711 46.4003C261.701 47.2417 263.006 47.6624 264.626 47.6624C265.706 47.6624 266.786 47.4631 267.866 47.0646C268.946 46.666 269.846 46.1567 270.566 45.5367Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M288.855 37.1667C288.855 33.801 289.507 30.7674 290.812 28.066C292.162 25.3203 294.007 23.1503 296.347 21.556C298.732 19.9174 301.455 19.0982 304.515 19.0982C306.99 19.0982 309.218 19.696 311.198 20.8917C313.223 22.0432 314.775 23.571 315.855 25.4753V6.1446H326.656V42.8131C326.656 43.876 326.813 44.6289 327.128 45.0717C327.488 45.5146 328.096 45.7581 328.951 45.8024V54.6374C327.061 54.9917 325.531 55.1688 324.36 55.1688C322.515 55.1688 321.008 54.7703 319.838 53.9731C318.668 53.176 317.97 52.0688 317.745 50.6517L317.543 48.8581C316.283 51.0281 314.573 52.6446 312.413 53.7074C310.253 54.7703 307.98 55.3017 305.595 55.3017C302.355 55.3017 299.475 54.5267 296.955 52.9767C294.435 51.3824 292.455 49.2124 291.015 46.4667C289.575 43.721 288.855 40.621 288.855 37.1667ZM315.923 41.4846V34.1774C315.248 32.406 314.145 30.9667 312.615 29.8596C311.13 28.7082 309.578 28.1324 307.958 28.1324C306.428 28.1324 305.055 28.5532 303.84 29.3946C302.625 30.236 301.68 31.3653 301.005 32.7824C300.33 34.1996 299.992 35.7274 299.992 37.366C299.992 39.9346 300.78 42.0824 302.355 43.8096C303.975 45.4924 306.022 46.3339 308.498 46.3339C309.983 46.3339 311.4 45.9131 312.75 45.0717C314.145 44.186 315.203 42.9903 315.923 41.4846Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M357.524 28.8632C354.914 28.9074 352.551 29.3282 350.436 30.1253C348.321 30.9224 346.791 32.1182 345.846 33.7124V54.6374H335.046V19.7624H344.969V26.8039C346.184 24.4567 347.759 22.6189 349.694 21.2903C351.629 19.9617 353.654 19.2753 355.769 19.231C356.669 19.231 357.254 19.2532 357.524 19.2974V28.8632Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M359.582 44.2081C359.582 41.9053 360.234 39.8903 361.539 38.1631C362.844 36.436 364.644 35.0853 366.939 34.111C369.234 33.0924 371.867 32.5832 374.837 32.5832C376.277 32.5832 377.695 32.716 379.09 32.9817C380.485 33.2031 381.7 33.5353 382.735 33.9781V32.4503C382.735 28.5089 380.372 26.5382 375.647 26.5382C373.667 26.5382 371.799 26.8703 370.044 27.5346C368.334 28.1989 366.512 29.151 364.577 30.391L361.337 23.6153C366.017 20.6039 371.147 19.0982 376.727 19.0982C382.037 19.0982 386.155 20.3603 389.08 22.8846C392.05 25.3646 393.535 28.9739 393.535 33.7124V42.8131C393.535 43.876 393.692 44.6289 394.008 45.0717C394.368 45.5146 394.975 45.7581 395.83 45.8024V54.6374C394.885 54.8146 394.03 54.9474 393.265 55.036C392.5 55.1246 391.825 55.1688 391.24 55.1688C389.215 55.1688 387.662 54.7703 386.582 53.9731C385.547 53.176 384.895 52.091 384.625 50.7181L384.422 49.1903C382.847 51.1831 380.957 52.711 378.752 53.7738C376.547 54.7924 374.274 55.3017 371.934 55.3017C369.594 55.3017 367.479 54.8146 365.589 53.8403C363.744 52.866 362.282 51.5596 361.202 49.921C360.122 48.2381 359.582 46.3339 359.582 44.2081ZM381.047 45.5367C382.172 44.651 382.735 43.7431 382.735 42.8131V39.691C381.79 39.3367 380.755 39.071 379.63 38.8939C378.55 38.6724 377.56 38.5617 376.66 38.5617C374.635 38.5617 372.969 39.0046 371.664 39.8903C370.404 40.776 369.774 41.9053 369.774 43.2781C369.774 44.4739 370.247 45.5146 371.192 46.4003C372.182 47.2417 373.487 47.6624 375.107 47.6624C376.187 47.6624 377.267 47.4631 378.347 47.0646C379.427 46.666 380.327 46.1567 381.047 45.5367Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M423.982 52.7774C422.497 53.3974 420.787 53.9731 418.852 54.5046C416.962 55.036 415.049 55.3017 413.114 55.3017C411.314 55.3017 409.672 55.0138 408.187 54.4381C406.702 53.8181 405.509 52.8217 404.609 51.4488C403.709 50.076 403.259 48.2603 403.259 46.0017V27.8003H398.736V19.7624H403.259V8.66888H414.059V19.7624H421.282V27.8003H414.059V42.3481C414.059 43.4996 414.352 44.341 414.937 44.8724C415.522 45.3596 416.264 45.6031 417.164 45.6031C417.974 45.6031 418.807 45.4703 419.662 45.2046C420.517 44.9389 421.259 44.651 421.889 44.341L423.982 52.7774Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M428.19 15.7767V6.1446H438.991V15.7767H428.19ZM428.19 54.6374V19.7624H438.991V54.6374H428.19Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M463.327 55.3017C459.367 55.3017 455.947 54.4603 453.067 52.7774C450.232 51.0946 448.049 48.8803 446.519 46.1346C445.034 43.3889 444.292 40.3996 444.292 37.1667C444.292 33.9781 445.034 31.011 446.519 28.2653C448.049 25.5196 450.232 23.3053 453.067 21.6224C455.902 19.9396 459.322 19.0982 463.327 19.0982C467.377 19.0982 470.797 19.9617 473.587 21.6889C476.422 23.3717 478.537 25.586 479.932 28.3317L469.402 31.4539C468.007 29.2396 465.96 28.1324 463.26 28.1324C461.055 28.1324 459.187 28.9517 457.657 30.5903C456.127 32.2289 455.362 34.421 455.362 37.1667C455.362 39.9124 456.127 42.1267 457.657 43.8096C459.187 45.4924 461.055 46.3339 463.26 46.3339C464.61 46.3339 465.847 46.0239 466.972 45.4039C468.097 44.7396 468.93 43.8981 469.47 42.8796L480 46.0681C478.695 48.7696 476.602 50.9839 473.722 52.711C470.887 54.4381 467.422 55.3017 463.327 55.3017Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M196.515 90.8041H181.82V128.374H170.662V90.8041H155.898V81.2458H196.515V90.8041Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M221.544 102.619C218.913 102.664 216.532 103.084 214.4 103.88C212.268 104.677 210.726 105.872 209.774 107.465V128.374H198.888V93.5256H208.889V100.562C210.114 98.2162 211.701 96.3798 213.652 95.0522C215.602 93.7247 217.643 93.0388 219.775 92.9946C220.682 92.9946 221.272 93.0167 221.544 93.0609V102.619Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M225.789 115.828V93.5256H236.675V113.505C236.675 117.886 238.33 120.076 241.641 120.076C243.093 120.076 244.499 119.7 245.859 118.948C247.22 118.152 248.422 116.846 249.465 115.032V93.5256H260.351V116.558C260.351 117.621 260.51 118.373 260.828 118.815C261.19 119.258 261.803 119.501 262.665 119.545V128.374C261.621 128.551 260.737 128.683 260.011 128.772C259.285 128.86 258.628 128.905 258.038 128.905C254.137 128.905 251.915 127.422 251.37 124.457L251.166 122.333C249.533 124.634 247.492 126.338 245.043 127.444C242.639 128.506 239.94 129.037 236.947 129.037C233.318 129.037 230.551 127.909 228.646 125.652C226.741 123.395 225.789 120.121 225.789 115.828Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M282.46 129.037C279.376 129.037 276.382 128.551 273.479 127.577C270.622 126.559 268.195 125.121 266.199 123.263L269.941 116.558C274.341 119.7 278.4 121.271 282.12 121.271C283.526 121.271 284.614 121.05 285.386 120.607C286.157 120.165 286.542 119.479 286.542 118.55C286.542 117.576 286.021 116.89 284.977 116.492C283.934 116.05 282.392 115.541 280.351 114.965C277.629 114.08 275.361 113.217 273.547 112.377C271.733 111.536 270.372 110.518 269.465 109.323C268.558 108.129 268.104 106.536 268.104 104.544C268.104 101.048 269.442 98.2384 272.118 96.1143C274.795 93.946 278.423 92.8618 283.004 92.8618C285.454 92.8618 287.835 93.2379 290.148 93.9902C292.507 94.7425 294.707 96.0037 296.748 97.7737L292.529 104.411C290.488 103.04 288.674 102.044 287.086 101.424C285.499 100.805 283.957 100.495 282.46 100.495C281.281 100.495 280.283 100.716 279.466 101.159C278.65 101.557 278.242 102.265 278.242 103.283C278.242 104.257 278.695 104.987 279.602 105.473C280.51 105.916 281.916 106.403 283.821 106.934C286.724 107.775 289.15 108.637 291.101 109.522C293.096 110.363 294.57 111.425 295.523 112.709C296.521 113.948 297.02 115.607 297.02 117.687C297.02 121.227 295.704 124.015 293.074 126.05C290.443 128.042 286.905 129.037 282.46 129.037Z"
                          fill="#0F00B7"
                        />
                        <path
                          d="M325.47 126.515C323.973 127.135 322.25 127.71 320.299 128.241C318.394 128.772 316.467 129.037 314.516 129.037C312.702 129.037 311.046 128.75 309.55 128.174C308.053 127.555 306.851 126.559 305.944 125.188C305.037 123.816 304.583 122.001 304.583 119.745V101.557H300.025V93.5256H304.583V82.4406H315.469V93.5256H322.749V101.557H315.469V116.094C315.469 117.244 315.764 118.085 316.353 118.616C316.943 119.103 317.691 119.346 318.598 119.346C319.415 119.346 320.254 119.214 321.116 118.948C321.978 118.683 322.726 118.395 323.361 118.085L325.47 126.515Z"
                          fill="#0F00B7"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="sm:flex items-center">
                <div className="px-2 pt-2 pb-5 sm:flex sm:py-0 sm:px-0">
                  <Link href="/about">
                    <a className="hidden sm:block md:-mt-4 mr-6 sm:-mr-2 md:-mr-16 lg:-mr-12 -mt-3 px-3 py-0 md:py-1 font-semibold text-xl text-trust-blue leading-6 tracking-widest focus:underline">
                      ABOUT
                    </a>
                  </Link>
                  <Link href="/login">
                    <a className="flex ml-4 md:ml-20 lg:ml-16 mr-2">
                      <button className="hidden sm:block sm:-mt-6 sm:bg-transparent sm:hover:bg-trust-yellow sm:font-semibold sm:tracking-widest sm:hover:text-trust-blue sm:text-xl sm:py-1.5 sm:px-4 sm:border-2 sm:hover:border-trust-blue sm:rounded sm:mr-4 sm:items-end sm:text-trust-blue sm:border-trust-blue">
                        LOG IN
                      </button>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-trust-blue">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block text-trust-blue h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block text-trust-blue h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/login"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <a className="flex justify-center ml-4 md:ml-20 lg:ml-16 mr-2">
                  <button className="mt-10 mb-10 bg-transparent hover:bg-trust-yellow font-semibold tracking-widest hover:text-trust-blue text-xl py-2 px-4 border-2 hover:border-trust-blue rounded text-trust-blue border-trust-blue">
                    LOG IN
                  </button>
                </a>
              </Link>
              <Link href="/about">
                <a className="flex justify-center md:-mt-4 -mt-3 px-4 py-0 md:py-1 font-semibold text-xl text-trust-blue leading-6 tracking-widest focus:underline">
                  ABOUT
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}