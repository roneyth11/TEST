import React from "react";

import { Button, Img, Line, List, Text } from "components";

const FramePage = () => {
  return (
    <>
      <div className="bg-white_A700 font-roboto h-[5046px] mx-auto relative w-full">
        <Line className="absolute bg-blue_gray_50 h-px inset-x-[0] mx-auto top-[1%] w-full" />
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-5 h-full items-center justify-end mx-auto p-2.5 w-full">
          <Img src="images/img_trash.svg" className="h-[13px]" alt="trash" />
          <Img
            src="images/img_airplane.svg"
            className="h-4 ml-9 md:ml-[0]"
            alt="airplane"
          />
          <Img
            src="images/img_frame.svg"
            className="h-6 ml-8 md:ml-[0] w-6"
            alt="frame"
          />
          <div className="bg-green_600 h-3.5 ml-0.5 md:ml-[0] md:mt-0 my-[13px] md:px-5 rounded-[3px] w-[3%]"></div>
          <Img
            src="images/img_user.svg"
            className="h-3 md:ml-[0] ml-[26px]"
            alt="user"
          />
          <Img
            src="images/img_grid.svg"
            className="h-[15px] ml-9 md:ml-[0] w-4"
            alt="grid"
          />
          <Img
            src="images/img_frame_black_900.svg"
            className="h-[18px] md:ml-[0] ml-[411px] w-[18px]"
            alt="frame_One"
          />
          <div className="bg-green_600 h-10 ml-2 md:ml-[0] md:px-5 shadow-bs1 w-[13%]"></div>
          <div className="border border-black_900 border-solid h-10 ml-2.5 md:ml-[0] mr-1 md:px-5 shadow-bs1 w-[13%]"></div>
        </div>
        <div className="absolute bg-blue_gray_50 sm:h-[4403px] md:h-[4669px] h-[5046px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute flex flex-col items-center justify-start left-[2%] top-[3%] w-[78%]">
            <div className="flex flex-col gap-[47px] items-center justify-start w-full">
              <Img
                src="images/img_frame_black_900_17x18.svg"
                className="h-[17px] w-[18px]"
                alt="frame_Two"
              />
              <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-start justify-start p-4 w-full">
                    <div className="md:h-[180px] h-[194px] relative w-[93%]">
                      <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                        <Img
                          src="images/img_image.png"
                          className="h-[180px] m-auto object-cover w-full"
                          alt="image"
                        />
                        <Button
                          className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA7004c"
                        >
                          <Img
                            src="images/img_frame_black_900_64x64.svg"
                            className="h-8"
                            alt="frame"
                          />
                        </Button>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                        size="sm"
                        variant="FillGreen600"
                      >
                        NEW
                      </Button>
                      <Text
                        className="absolute bg-blue_gray_500 h-6 justify-center left-[23%] pl-2 sm:pr-5 pr-[22px] py-1 text-white_A700 top-[0] w-[88px]"
                        as="h6"
                        variant="h6"
                      >
                        FEATURED
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      Minimalistic Logo
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
                      as="h6"
                      variant="h6"
                    >
                      Streetwear
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[62px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                      size="sm"
                      variant="FillBluegray50"
                    >
                      $126.72
                    </Button>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start p-4 w-full">
                    <div className="md:h-[180px] h-[194px] relative w-[93%]">
                      <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                        <Img
                          src="images/img_image_180x225.png"
                          className="h-[180px] m-auto object-cover w-full"
                          alt="image"
                        />
                        <Button
                          className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA7004c"
                        >
                          <Img
                            src="images/img_frame_black_900_64x64.svg"
                            className="h-8"
                            alt="frame"
                          />
                        </Button>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                        size="sm"
                        variant="FillGreen600"
                      >
                        NEW
                      </Button>
                      <Text
                        className="absolute bg-blue_gray_500 h-6 justify-center left-[23%] pl-[9px] sm:pr-5 pr-[21px] py-1 text-white_A700 top-[0] w-[88px]"
                        as="h6"
                        variant="h6"
                      >
                        FEATURED
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      Campus or Gazelle
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
                      as="h6"
                      variant="h6"
                    >
                      Sneakers
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                      size="sm"
                      variant="FillBluegray50"
                    >
                      $57.17
                    </Button>
                  </div>
                </List>
                <div className="h-[1018px] md:h-[222px] sm:h-[475px] relative w-[32%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <List
                        className="flex-col gap-5 grid items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start my-0 p-0.5 w-full">
                          <div className="md:h-[180px] h-[219px] ml-3.5 md:ml-[0] relative w-[91%]">
                            <div className="absolute md:h-[180px] h-[194px] inset-y-[0] left-[0] my-auto w-[93%]">
                              <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                                <Img
                                  src="images/img_image_1.png"
                                  className="h-[180px] m-auto object-cover w-full"
                                  alt="image"
                                />
                                <Button
                                  className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                                  size="mdIcn"
                                  variant="icbFillWhiteA7004c"
                                >
                                  <Img
                                    src="images/img_frame_black_900_64x64.svg"
                                    className="h-8"
                                    alt="frame"
                                  />
                                </Button>
                              </div>
                              <Button
                                className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                                size="sm"
                                variant="FillGreen600"
                              >
                                NEW
                              </Button>
                              <div className="absolute bg-blue_gray_500 flex flex-col items-start justify-start left-[23%] p-1 top-[0]">
                                <Text
                                  className="ml-1 md:ml-[0] text-white_A700"
                                  as="h6"
                                  variant="h6"
                                >
                                  FEATURED
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_image_91x126.png"
                              className="absolute h-[91px] object-cover right-[0] top-[0] w-[48%]"
                              alt="image_One"
                            />
                            <Img
                              src="images/img_image_91x126.png"
                              className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[48%]"
                              alt="image_Two"
                            />
                          </div>
                          <Text
                            className="md:ml-[0] ml-[18px] mt-[13px] text-black_900 uppercase"
                            as="h4"
                            variant="h4"
                          >
                            Photosynthesis
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[18px] mt-[5px] text-blue_gray_400"
                            as="h6"
                            variant="h6"
                          >
                            Streetwear, Mix
                          </Text>
                          <Button
                            className="cursor-pointer font-normal mb-[18px] min-w-[55px] md:ml-[0] ml-[18px] mt-[5px] text-black_900 text-center text-xs"
                            size="sm"
                            variant="FillBluegray50"
                          >
                            $44.70
                          </Button>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[7px] items-start justify-start my-0 p-4 w-full">
                          <div className="h-64 md:h-[180px] relative w-full">
                            <div className="absolute h-[180px] inset-x-[0] mx-auto top-[5%] w-[86%]">
                              <Img
                                src="images/img_image_2.png"
                                className="h-[180px] m-auto object-cover w-full"
                                alt="image"
                              />
                              <Button
                                className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                                size="mdIcn"
                                variant="icbFillWhiteA7004c"
                              >
                                <Img
                                  src="images/img_frame_black_900_64x64.svg"
                                  className="h-8"
                                  alt="frame"
                                />
                              </Button>
                            </div>
                            <Button
                              className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                              size="sm"
                              variant="FillGreen600"
                            >
                              NEW
                            </Button>
                            <div className="absolute bg-blue_gray_500 flex flex-col items-start justify-start left-[21%] p-1 top-[0]">
                              <Text
                                className="ml-1 md:ml-[0] text-white_A700"
                                as="h6"
                                variant="h6"
                              >
                                FEATURED
                              </Text>
                            </div>
                            <Img
                              src="images/img_image_3.png"
                              className="absolute h-[91px] object-cover right-[0] top-[9%] w-[48%]"
                              alt="image_One"
                            />
                            <Img
                              src="images/img_image_4.png"
                              className="absolute bottom-[5%] h-[91px] object-cover right-[0] w-[48%]"
                              alt="image_Two"
                            />
                            <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[2%]">
                              <Text
                                className="text-black_900 uppercase"
                                as="h4"
                                variant="h4"
                              >
                                Audiophile
                              </Text>
                              <Text
                                className="mt-1 text-blue_gray_400"
                                as="h6"
                                variant="h6"
                              >
                                Tech
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-normal mb-1 min-w-[55px] ml-1 md:ml-[0] text-black_900 text-center text-xs"
                            size="sm"
                            variant="FillBluegray50"
                          >
                            $24.10
                          </Button>
                        </div>
                      </List>
                      <div className="bg-white_A700 md:h-[180px] h-[326px] p-4 relative w-full">
                        <div className="absolute h-[180px] inset-x-[0] mx-auto top-[9%] w-[77%]">
                          <Img
                            src="images/img_image_5.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image_Three"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame_Three"
                            />
                          </Button>
                        </div>
                        <Text
                          className="absolute bg-green_600 h-6 justify-center left-[5%] pl-2 pr-[19px] py-1 text-white_A700 top-[5%] w-20"
                          as="h6"
                          variant="h6"
                        >
                          UPDATED
                        </Text>
                        <div className="absolute bottom-[6%] flex flex-col gap-[5px] items-start justify-start left-[7%] w-[35%]">
                          <Text
                            className="text-black_900 uppercase"
                            as="h4"
                            variant="h4"
                          >
                            Stone Island
                          </Text>
                          <Text
                            className="text-blue_gray_400"
                            as="h6"
                            variant="h6"
                          >
                            Streetwear
                          </Text>
                          <Button
                            className="cursor-pointer font-normal min-w-[62px] text-black_900 text-center text-xs"
                            size="sm"
                            variant="FillBluegray50"
                          >
                            $192.86
                          </Button>
                        </div>
                        <Img
                          src="images/img_image_6.png"
                          className="absolute h-[91px] object-cover right-[5%] top-[24%] w-[43%]"
                          alt="image_Four"
                        />
                        <Img
                          src="images/img_image_6.png"
                          className="absolute bottom-[9%] h-[91px] object-cover right-[5%] w-[43%]"
                          alt="image_Five"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col md:gap-10 gap-[293px] h-max inset-y-[0] items-center justify-start my-auto right-[5%] w-[43%]">
                    <Img
                      src="images/img_image_91x126.png"
                      className="h-[91px] md:h-auto object-cover w-full"
                      alt="image_Six"
                    />
                    <Img
                      src="images/img_image_6.png"
                      className="h-[91px] md:h-auto object-cover w-full"
                      alt="image_Seven"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white_A700 flex flex-col items-start justify-start left-[2%] p-4 top-[11%] w-1/4">
            <div className="md:h-[180px] h-[194px] relative w-[93%]">
              <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                <Img
                  src="images/img_image_7.png"
                  className="h-[180px] m-auto object-cover w-full"
                  alt="image_Eight"
                />
                <Button
                  className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                  size="mdIcn"
                  variant="icbFillWhiteA7004c"
                >
                  <Img
                    src="images/img_frame_black_900_64x64.svg"
                    className="h-8"
                    alt="frame_Four"
                  />
                </Button>
              </div>
              <Button
                className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                size="sm"
                variant="FillGreen600"
              >
                NEW
              </Button>
              <Text
                className="absolute bg-blue_gray_500 h-6 justify-center left-[23%] pl-2 sm:pr-5 pr-[22px] py-1 text-white_A700 top-[0] w-[88px]"
                as="h6"
                variant="h6"
              >
                FEATURED
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
              as="h4"
              variant="h4"
            >
              Plush Addict
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
              as="h6"
              variant="h6"
            >
              Mix
            </Text>
            <Button
              className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
              size="sm"
              variant="FillBluegray50"
            >
              $33.85
            </Button>
          </div>
          <div className="absolute bg-white_A700 flex flex-col items-start justify-start left-[28%] p-4 top-[11%] w-1/4">
            <div className="md:h-[180px] h-[194px] relative w-[93%]">
              <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                <Img
                  src="images/img_image_8.png"
                  className="h-[180px] m-auto object-cover w-full"
                  alt="image_Nine"
                />
                <Button
                  className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                  size="mdIcn"
                  variant="icbFillWhiteA7004c"
                >
                  <Img
                    src="images/img_frame_black_900_64x64.svg"
                    className="h-8"
                    alt="frame_Five"
                  />
                </Button>
              </div>
              <Button
                className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                size="sm"
                variant="FillGreen600"
              >
                NEW
              </Button>
              <Text
                className="absolute bg-blue_gray_500 h-6 justify-center left-[23%] pl-[9px] sm:pr-5 pr-[21px] py-1 text-white_A700 top-[0] w-[88px]"
                as="h6"
                variant="h6"
              >
                FEATURED
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
              as="h4"
              variant="h4"
            >
              Apple Fanboy
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
              as="h6"
              variant="h6"
            >
              Tech
            </Text>
            <Button
              className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
              size="sm"
              variant="FillBluegray50"
            >
              $29.27
            </Button>
          </div>
          <div className="absolute bg-white_A700 flex flex-col items-start justify-start left-[2%] p-4 top-[18%] w-1/4">
            <div className="md:h-[180px] h-[194px] relative w-[93%]">
              <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                <Img
                  src="images/img_image_9.png"
                  className="h-[180px] m-auto object-cover w-full"
                  alt="image_Ten"
                />
                <Button
                  className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                  size="mdIcn"
                  variant="icbFillWhiteA7004c"
                >
                  <Img
                    src="images/img_frame_black_900_64x64.svg"
                    className="h-8"
                    alt="frame_Six"
                  />
                </Button>
              </div>
              <Button
                className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                size="sm"
                variant="FillGreen600"
              >
                NEW
              </Button>
              <Text
                className="absolute bg-blue_gray_500 h-6 justify-center left-[23%] pl-2 sm:pr-5 pr-[22px] py-1 text-white_A700 top-[0] w-[88px]"
                as="h6"
                variant="h6"
              >
                FEATURED
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[23px] text-black_900 uppercase"
              as="h4"
              variant="h4"
            >
              Blue Skies
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[5px] text-blue_gray_400"
              as="h6"
              variant="h6"
            >
              Streetwear
            </Text>
            <Button
              className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
              size="sm"
              variant="FillBluegray50"
            >
              $14.57
            </Button>
          </div>
          <div className="absolute bg-white_A700 flex flex-col items-start justify-start left-[28%] p-4 top-[18%] w-1/4">
            <div className="md:h-[180px] h-[194px] relative w-[93%]">
              <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                <Img
                  src="images/img_image_10.png"
                  className="h-[180px] m-auto object-cover w-full"
                  alt="image_Eleven"
                />
                <Button
                  className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                  size="mdIcn"
                  variant="icbFillWhiteA7004c"
                >
                  <Img
                    src="images/img_frame_black_900_64x64.svg"
                    className="h-8"
                    alt="frame_Seven"
                  />
                </Button>
              </div>
              <Button
                className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                size="sm"
                variant="FillGreen600"
              >
                NEW
              </Button>
              <Text
                className="absolute bg-blue_gray_500 h-6 justify-center left-[23%] pl-[9px] sm:pr-5 pr-[21px] py-1 text-white_A700 top-[0] w-[88px]"
                as="h6"
                variant="h6"
              >
                FEATURED
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[23px] text-black_900 uppercase"
              as="h4"
              variant="h4"
            >
              Handyman
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[5px] text-blue_gray_400"
              as="h6"
              variant="h6"
            >
              Mix
            </Text>
            <Button
              className="cursor-pointer font-normal min-w-[48px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
              size="sm"
              variant="FillBluegray50"
            >
              $5.41
            </Button>
          </div>
          <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-20 items-center justify-start left-[0] w-[82%]">
            <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[21px] items-end justify-between w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 md:mt-0 mt-[31px] w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-start justify-start p-4 w-full">
                    <div className="md:h-[180px] h-[194px] relative w-[93%]">
                      <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                        <Img
                          src="images/img_image_11.png"
                          className="h-[180px] m-auto object-cover w-full"
                          alt="image"
                        />
                        <Button
                          className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA7004c"
                        >
                          <Img
                            src="images/img_frame_black_900_64x64.svg"
                            className="h-8"
                            alt="frame"
                          />
                        </Button>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                        size="sm"
                        variant="FillRed700"
                      >
                        HOT
                      </Button>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      Majestic
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-[5px] text-blue_gray_400"
                      as="h6"
                      variant="h6"
                    >
                      Streetwear, Watches
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[73px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                      size="sm"
                      variant="FillBluegray50"
                    >
                      $1,943.61
                    </Button>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start p-4 w-full">
                    <div className="md:h-[180px] h-[194px] relative w-[93%]">
                      <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                        <Img
                          src="images/img_image_12.png"
                          className="h-[180px] m-auto object-cover w-full"
                          alt="image"
                        />
                        <Button
                          className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA7004c"
                        >
                          <Img
                            src="images/img_frame_black_900_64x64.svg"
                            className="h-8"
                            alt="frame"
                          />
                        </Button>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                        size="sm"
                        variant="FillRed700"
                      >
                        HOT
                      </Button>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      Snowball
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
                      as="h6"
                      variant="h6"
                    >
                      Mix
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                      size="sm"
                      variant="FillBluegray50"
                    >
                      $21.53
                    </Button>
                  </div>
                </List>
                <div className="md:h-[312px] h-[357px] relative w-[32%] md:w-full">
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-2.5 w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start mt-1.5 w-[96%] md:w-full">
                      <div className="md:h-[180px] h-[194px] relative w-full">
                        <div className="absolute bottom-[0] h-[180px] inset-x-[0] mx-auto w-[86%]">
                          <Img
                            src="images/img_image_13.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image_Twelve"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame_Eight"
                            />
                          </Button>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                          size="sm"
                          variant="FillRed700"
                        >
                          HOT
                        </Button>
                        <Img
                          src="images/img_image_14.png"
                          className="absolute bottom-[11%] h-[91px] object-cover right-[0] w-[48%]"
                          alt="image_Thirteen"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black_900 uppercase"
                            as="h4"
                            variant="h4"
                          >
                            Rolex
                          </Text>
                          <Text
                            className="mt-1 text-blue_gray_400"
                            as="h6"
                            variant="h6"
                          >
                            Watches
                          </Text>
                          <Button
                            className="cursor-pointer font-normal min-w-[73px] mt-1.5 text-black_900 text-center text-xs"
                            size="sm"
                            variant="FillBluegray50"
                          >
                            $7,914.80
                          </Button>
                        </div>
                        <Img
                          src="images/img_image_14.png"
                          className="h-[91px] md:h-auto object-cover"
                          alt="image_Fourteen"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_image_6.png"
                    className="absolute h-[91px] object-cover right-[5%] top-[0] w-[43%]"
                    alt="image_Fifteen"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between mt-5 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                  <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-4 w-full">
                      <div className="md:h-[180px] h-[194px] relative w-[93%]">
                        <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                          <Img
                            src="images/img_image_15.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame"
                            />
                          </Button>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                          size="sm"
                          variant="FillRed700"
                        >
                          HOT
                        </Button>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                        as="h4"
                        variant="h4"
                      >
                        Frosty Flakes
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
                        as="h6"
                        variant="h6"
                      >
                        Mix
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                        size="sm"
                        variant="FillBluegray50"
                      >
                        $99.38
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-4 w-full">
                      <div className="md:h-[180px] h-[194px] relative w-[93%]">
                        <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                          <Img
                            src="images/img_image_16.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame"
                            />
                          </Button>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                          size="sm"
                          variant="FillRed700"
                        >
                          HOT
                        </Button>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                        as="h4"
                        variant="h4"
                      >
                        DMEC
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-[5px] text-blue_gray_400"
                        as="h6"
                        variant="h6"
                      >
                        Mix, Cars
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-1 text-black_900 text-center text-xs"
                        size="sm"
                        variant="FillBluegray50"
                      >
                        $76.21
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-4 w-full">
                      <div className="md:h-[180px] h-[194px] relative w-[93%]">
                        <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                          <Img
                            src="images/img_image_17.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame"
                            />
                          </Button>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                          size="sm"
                          variant="FillRed700"
                        >
                          HOT
                        </Button>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                        as="h4"
                        variant="h4"
                      >
                        Matching
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-[5px] text-blue_gray_400"
                        as="h6"
                        variant="h6"
                      >
                        Watches, Mix, Jewellery
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[62px] ml-1 md:ml-[0] my-1 text-black_900 text-center text-xs"
                        size="sm"
                        variant="FillBluegray50"
                      >
                        $289.83
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-4 w-full">
                      <div className="md:h-[180px] h-[194px] relative w-[93%]">
                        <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                          <Img
                            src="images/img_image_18.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame"
                            />
                          </Button>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                          size="sm"
                          variant="FillRed700"
                        >
                          HOT
                        </Button>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                        as="h4"
                        variant="h4"
                      >
                        10% Watch
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
                        as="h6"
                        variant="h6"
                      >
                        Watches
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                        size="sm"
                        variant="FillBluegray50"
                      >
                        $30.64
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-4 w-full">
                      <div className="md:h-[180px] h-[194px] relative w-[93%]">
                        <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                          <Img
                            src="images/img_image_19.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame"
                            />
                          </Button>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                          size="sm"
                          variant="FillRed700"
                        >
                          HOT
                        </Button>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                        as="h4"
                        variant="h4"
                      >
                        Supreme - LV
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
                        as="h6"
                        variant="h6"
                      >
                        Streetwear
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[62px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                        size="sm"
                        variant="FillBluegray50"
                      >
                        $682.98
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-4 w-full">
                      <div className="md:h-[180px] h-[194px] relative w-[93%]">
                        <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                          <Img
                            src="images/img_image_20.png"
                            className="h-[180px] m-auto object-cover w-full"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                            size="mdIcn"
                            variant="icbFillWhiteA7004c"
                          >
                            <Img
                              src="images/img_frame_black_900_64x64.svg"
                              className="h-8"
                              alt="frame"
                            />
                          </Button>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                          size="sm"
                          variant="FillGreen600"
                        >
                          NEW
                        </Button>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                        as="h4"
                        variant="h4"
                      >
                        Accessories
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-[5px] text-blue_gray_400"
                        as="h6"
                        variant="h6"
                      >
                        Jewellery
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[62px] ml-1 md:ml-[0] my-1 text-black_900 text-center text-xs"
                        size="sm"
                        variant="FillBluegray50"
                      >
                        $188.87
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[1018px] md:h-[222px] sm:h-[475px] relative w-[32%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <List
                      className="flex-col gap-5 grid items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start my-0 p-[7px] w-full">
                        <div className="md:h-[180px] h-[219px] md:ml-[0] ml-[9px] relative w-[94%]">
                          <div className="absolute h-[180px] inset-[0] justify-center m-auto w-[86%]">
                            <Img
                              src="images/img_image_21.png"
                              className="h-[180px] m-auto object-cover w-full"
                              alt="image"
                            />
                            <Button
                              className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                              size="mdIcn"
                              variant="icbFillWhiteA7004c"
                            >
                              <Img
                                src="images/img_frame_black_900_64x64.svg"
                                className="h-8"
                                alt="frame"
                              />
                            </Button>
                          </div>
                          <Button
                            className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[4%]"
                            size="sm"
                            variant="FillRed700"
                          >
                            HOT
                          </Button>
                          <Img
                            src="images/img_image_14.png"
                            className="absolute h-[91px] object-cover right-[0] top-[0] w-[48%]"
                            alt="image_One"
                          />
                          <Img
                            src="images/img_image_14.png"
                            className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[48%]"
                            alt="image_Two"
                          />
                        </div>
                        <Text
                          className="md:ml-[0] ml-[13px] mt-2 text-black_900 uppercase"
                          as="h4"
                          variant="h4"
                        >
                          Whiteout
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[13px] mt-[5px] text-blue_gray_400"
                          as="h6"
                          variant="h6"
                        >
                          Watches, Mix, Jewellery
                        </Text>
                        <Button
                          className="cursor-pointer font-normal mb-[13px] min-w-[73px] md:ml-[0] ml-[13px] mt-[5px] text-black_900 text-center text-xs"
                          size="sm"
                          variant="FillBluegray50"
                        >
                          $4,099.94
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[7px] items-start justify-start my-0 p-4 w-full">
                        <div className="flex flex-col relative w-full">
                          <div className="md:h-[180px] h-[248px] m-auto w-full">
                            <div className="absolute h-[180px] inset-x-[0] mx-auto top-[6%] w-[86%]">
                              <Img
                                src="images/img_image_22.png"
                                className="h-[180px] m-auto object-cover w-full"
                                alt="image"
                              />
                              <Button
                                className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                                size="mdIcn"
                                variant="icbFillWhiteA7004c"
                              >
                                <Img
                                  src="images/img_frame_black_900_64x64.svg"
                                  className="h-8"
                                  alt="frame"
                                />
                              </Button>
                            </div>
                            <Button
                              className="absolute cursor-pointer font-normal left-[0] min-w-[46px] text-center text-white_A700 text-xs top-[0]"
                              size="sm"
                              variant="FillRed700"
                            >
                              HOT
                            </Button>
                            <Img
                              src="images/img_image_23.png"
                              className="absolute h-[91px] object-cover right-[0] top-[12%] w-[48%]"
                              alt="image_One"
                            />
                            <Img
                              src="images/img_image_23.png"
                              className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[48%]"
                              alt="image_Two"
                            />
                          </div>
                          <Text
                            className="mb-[19px] ml-1 mt-[-NaNpx] text-black_900 uppercase z-[1]"
                            as="h4"
                            variant="h4"
                          >
                            Battle for Jordans
                          </Text>
                          <Text
                            className="ml-1 mt-[-6.94px] text-blue_gray_400 z-[1]"
                            as="h6"
                            variant="h6"
                          >
                            Sneakers
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-normal mb-1 min-w-[55px] ml-1 md:ml-[0] text-black_900 text-center text-xs"
                          size="sm"
                          variant="FillBluegray50"
                        >
                          $28.47
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-4 w-full">
                        <div className="flex flex-col items-center justify-start mb-1 w-full">
                          <div className="md:h-[180px] h-[194px] relative w-full">
                            <div className="absolute bottom-[0] h-[180px] inset-x-[0] mx-auto w-[86%]">
                              <Img
                                src="images/img_image_24.png"
                                className="h-[180px] m-auto object-cover w-full"
                                alt="image"
                              />
                              <Button
                                className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                                size="mdIcn"
                                variant="icbFillWhiteA7004c"
                              >
                                <Img
                                  src="images/img_frame_black_900_64x64.svg"
                                  className="h-8"
                                  alt="frame"
                                />
                              </Button>
                            </div>
                            <Button
                              className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                              size="sm"
                              variant="FillGreen600"
                            >
                              NEW
                            </Button>
                            <Img
                              src="images/img_image_3.png"
                              className="absolute bottom-[19%] h-[91px] object-cover right-[0] w-[48%]"
                              alt="image_One"
                            />
                          </div>
                          <div className="flex flex-row gap-[25px] items-end justify-between w-[99%] md:w-full">
                            <div className="flex flex-col items-start justify-start mt-[23px]">
                              <Text
                                className="text-black_900 uppercase"
                                as="h4"
                                variant="h4"
                              >
                                Oddly Orange
                              </Text>
                              <Text
                                className="mt-1 text-blue_gray_400"
                                as="h6"
                                variant="h6"
                              >
                                Mix
                              </Text>
                              <Button
                                className="cursor-pointer font-normal min-w-[55px] mt-1.5 text-black_900 text-center text-xs"
                                size="sm"
                                variant="FillBluegray50"
                              >
                                $45.00
                              </Button>
                            </div>
                            <Img
                              src="images/img_image_25.png"
                              className="h-[91px] md:h-auto mb-1 object-cover"
                              alt="image_Two"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="absolute flex flex-col md:gap-10 gap-[293px] h-max inset-y-[0] items-center justify-start my-auto right-[5%] w-[43%]">
                    <Img
                      src="images/img_image_3.png"
                      className="h-[91px] md:h-auto object-cover w-full"
                      alt="image_Sixteen"
                    />
                    <Img
                      src="images/img_image_4.png"
                      className="h-[91px] md:h-auto object-cover w-full"
                      alt="image_Seventeen"
                    />
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[19px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-4 w-full">
                  <div className="md:h-[180px] h-[194px] relative w-[93%]">
                    <div className="absolute bottom-[0] h-[180px] right-[0] w-[93%]">
                      <Img
                        src="images/img_image_26.png"
                        className="h-[180px] m-auto object-cover w-full"
                        alt="image"
                      />
                      <Button
                        className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                        size="mdIcn"
                        variant="icbFillWhiteA7004c"
                      >
                        <Img
                          src="images/img_frame_black_900_64x64.svg"
                          className="h-8"
                          alt="frame"
                        />
                      </Button>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-normal left-[0] min-w-[48px] text-center text-white_A700 text-xs top-[0]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      NEW
                    </Button>
                  </div>
                  <Text
                    className="ml-1 md:ml-[0] mt-6 text-black_900 uppercase"
                    as="h4"
                    variant="h4"
                  >
                    Durable
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-1 text-blue_gray_400"
                    as="h6"
                    variant="h6"
                  >
                    Mix
                  </Text>
                  <Button
                    className="cursor-pointer font-normal min-w-[55px] ml-1 md:ml-[0] my-[5px] text-black_900 text-center text-xs"
                    size="sm"
                    variant="FillBluegray50"
                  >
                    $49.33
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-6 justify-end p-5 w-full">
                  <div className="h-[180px] md:h-[190px] mt-2.5 mx-auto relative w-[89%]">
                    <Img
                      src="images/img_image_27.png"
                      className="h-[180px] m-auto object-cover w-full"
                      alt="image"
                    />
                    <Button
                      className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                      size="mdIcn"
                      variant="icbFillWhiteA7004c"
                    >
                      <Img
                        src="images/img_frame_black_900_64x64.svg"
                        className="h-8"
                        alt="frame"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start mr-[152px] w-2/5 md:w-full">
                    <Text
                      className="text-black_900 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      Cartier
                    </Text>
                    <Text className="text-blue_gray_400" as="h6" variant="h6">
                      Watches, Jewellery
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[80px] text-black_900 text-center text-xs"
                      size="sm"
                      variant="FillBluegray50"
                    >
                      $12,542.98
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-6 justify-end p-5 w-full">
                  <div className="h-[180px] md:h-[190px] mt-2.5 mx-auto relative w-[89%]">
                    <Img
                      src="images/img_image_28.png"
                      className="h-[180px] m-auto object-cover w-full"
                      alt="image"
                    />
                    <Button
                      className="absolute flex h-16 inset-[0] items-center justify-center m-auto w-16"
                      size="mdIcn"
                      variant="icbFillWhiteA7004c"
                    >
                      <Img
                        src="images/img_frame_black_900_64x64.svg"
                        className="h-8"
                        alt="frame"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start mr-[145px] w-[43%] md:w-full">
                    <Text
                      className="text-black_900 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      Couch Potato
                    </Text>
                    <Text
                      className="mt-1 text-blue_gray_400"
                      as="h6"
                      variant="h6"
                    >
                      Mix
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[55px] mt-1.5 text-black_900 text-center text-xs"
                      size="sm"
                      variant="FillBluegray50"
                    >
                      $24.24
                    </Button>
                  </div>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[76px] w-[51%] md:w-full">
                <Text className="text-black_900" as="h2" variant="h2">
                  LATEST BATTLES
                </Text>
                <a
                  href="javascript:"
                  className="sm:ml-[0] ml-[46px] text-blue_gray_500"
                >
                  <Text as="h4" variant="h4">
                    VIEW ALL
                  </Text>
                </a>
                <Text
                  className="ml-2.5 sm:ml-[0] text-blue_gray_500"
                  as="h4"
                  variant="h4"
                >
                  BATTLES
                </Text>
                <Img
                  src="images/img_frame_black_900_17x18.svg"
                  className="h-[17px] ml-3.5 sm:ml-[0] w-[18px]"
                  alt="frame_Nine"
                />
              </div>
              <List
                className="flex-col gap-6 grid items-center mt-[21px] w-full"
                orientation="vertical"
              >
                <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-2 w-full">
                  <div className="md:h-9 h-[38px] relative w-[38px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 right-[0] top-[0] w-9"
                      style={{
                        backgroundImage: "url('images/img_group223.svg')",
                      }}
                    >
                      <Img
                        src="images/img_image_32x32.png"
                        className="h-8 md:h-auto object-cover w-8"
                        alt="image"
                      />
                    </div>
                    <Text
                      className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                      as="h1"
                      variant="h1"
                    >
                      64
                    </Text>
                  </div>
                  <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[37px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-9 inset-x-[0] items-center justify-start mx-auto p-0.5 top-[0] w-9"
                      style={{
                        backgroundImage: "url('images/img_group223.svg')",
                      }}
                    >
                      <Img
                        src="images/img_image_29.png"
                        className="h-8 md:h-auto object-cover w-8"
                        alt="image_One"
                      />
                    </div>
                    <Text
                      className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                      as="h1"
                      variant="h1"
                    >
                      120
                    </Text>
                  </div>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-[15px] md:ml-[0] ml-[9px]"
                    alt="airplane"
                  />
                  <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[38px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 right-[0] top-[0] w-9"
                      style={{
                        backgroundImage: "url('images/img_group223.svg')",
                      }}
                    >
                      <Img
                        src="images/img_image_29.png"
                        className="h-8 md:h-auto object-cover w-8"
                        alt="image_Two"
                      />
                    </div>
                    <Text
                      className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                      as="h1"
                      variant="h1"
                    >
                      120
                    </Text>
                  </div>
                  <div className="h-[37px] ml-2 md:ml-[0] relative w-[37px]">
                    <div className="bg-gray_100 h-[25px] m-auto w-full"></div>
                    <Img
                      src="images/img_frame_black_900_37x37.svg"
                      className="absolute h-[37px] inset-[0] justify-center m-auto w-[37px]"
                      alt="frame"
                    />
                  </div>
                  <div className="bg-gray_200 flex md:flex-1 flex-row items-center justify-start md:ml-[0] ml-[29px] p-1 w-[46%] md:w-full">
                    <div className="bg-gray_100 flex flex-col items-center justify-start my-1 px-1 w-1/5">
                      <Img
                        src="images/img_image_72x72.png"
                        className="h-[72px] md:h-auto object-cover w-[72px]"
                        alt="image_Four"
                      />
                    </div>
                    <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                      <Img
                        src="images/img_image_30.png"
                        className="h-[72px] md:h-auto object-cover w-[72px]"
                        alt="image_Five"
                      />
                    </div>
                    <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                      <Img
                        src="images/img_image_31.png"
                        className="h-[72px] md:h-auto object-cover w-[72px]"
                        alt="image_Six"
                      />
                    </div>
                    <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                      <Img
                        src="images/img_image_32.png"
                        className="h-[72px] md:h-auto object-cover w-[72px]"
                        alt="image_Seven"
                      />
                    </div>
                  </div>
                  <div className="bg-green_600 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] mr-4 md:mt-0 my-[19px] p-[3px] shadow-bs1 w-1/5 md:w-full">
                    <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Img
                          src="images/img_airplane.svg"
                          className="h-[13px] mt-0.5"
                          alt="airplane_One"
                        />
                        <Text
                          className="text-center text-white_A700 uppercase"
                          as="h5"
                          variant="h5"
                        >
                          Join for
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center mt-1 w-[78%] md:w-full">
                        <Text
                          className="text-center text-white_A700 uppercase"
                          as="h5"
                          variant="h5"
                        >
                          $89.44
                        </Text>
                        <Img
                          src="images/img_frame_black_900_20x20.svg"
                          className="h-5 ml-1 w-5"
                          alt="frame_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-2 w-full">
                  <div className="md:h-9 h-[38px] relative w-[38px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 right-[0] top-[0] w-9"
                      style={{
                        backgroundImage: "url('images/img_group223.svg')",
                      }}
                    >
                      <Img
                        src="images/img_image_33.png"
                        className="h-8 md:h-auto object-cover w-8"
                        alt="image"
                      />
                    </div>
                    <Text
                      className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                      as="h1"
                      variant="h1"
                    >
                      33
                    </Text>
                  </div>
                  <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[37px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-9 inset-x-[0] items-center justify-start mx-auto p-0.5 top-[0] w-9"
                      style={{
                        backgroundImage: "url('images/img_group223.svg')",
                      }}
                    >
                      <Img
                        src="images/img_image_29.png"
                        className="h-8 md:h-auto object-cover w-8"
                        alt="image_One"
                      />
                    </div>
                    <Text
                      className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                      as="h1"
                      variant="h1"
                    >
                      120
                    </Text>
                  </div>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-[15px] md:ml-[0] ml-[9px]"
                    alt="airplane"
                  />
                  <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[38px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 right-[0] top-[0] w-9"
                      style={{
                        backgroundImage: "url('images/img_group223.svg')",
                      }}
                    >
                      <Img
                        src="images/img_image_29.png"
                        className="h-8 md:h-auto object-cover w-8"
                        alt="image_Two"
                      />
                    </div>
                    <Text
                      className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                      as="h1"
                      variant="h1"
                    >
                      120
                    </Text>
                  </div>
                  <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[37px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-9 inset-x-[0] items-center justify-start mx-auto p-0.5 top-[0] w-9"
                      style={{
                        backgroundImage: "url('images/img_group223.svg')",
                      }}
                    >
                      <Img
                        src="images/img_image_29.png"
                        className="h-8 md:h-auto object-cover w-8"
                        alt="image_Three"
                      />
                    </div>
                    <Text
                      className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                      as="h1"
                      variant="h1"
                    >
                      120
                    </Text>
                  </div>
                  <div className="h-[88px] md:ml-[0] ml-[30px] relative w-[47%] md:w-full">
                    <div className="absolute bg-gray_200 flex flex-row h-full inset-[0] items-center justify-center m-auto p-1 w-[99%]">
                      <div className="bg-gray_100 flex flex-col items-center justify-start my-1 px-1 w-1/5">
                        <Img
                          src="images/img_image_34.png"
                          className="h-[72px] md:h-auto object-cover w-[72px]"
                          alt="image_Four"
                        />
                      </div>
                      <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                        <Img
                          src="images/img_image_34.png"
                          className="h-[72px] md:h-auto object-cover w-[72px]"
                          alt="image_Five"
                        />
                      </div>
                      <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                        <Img
                          src="images/img_image_34.png"
                          className="h-[72px] md:h-auto object-cover w-[72px]"
                          alt="image_Six"
                        />
                      </div>
                      <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                        <Img
                          src="images/img_image_34.png"
                          className="h-[72px] md:h-auto object-cover w-[72px]"
                          alt="image_Seven"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-gray_100 flex flex-col h-max inset-y-[0] items-center justify-start my-auto px-1 right-[0] w-1/5">
                      <Img
                        src="images/img_image_35.png"
                        className="h-[72px] md:h-auto object-cover w-[72px]"
                        alt="image_Eight"
                      />
                    </div>
                  </div>
                  <div className="md:h-[72px] h-[78px] ml-1 md:ml-[0] mr-4 relative w-[22%] md:w-full">
                    <div className="absolute bg-gray_100 flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto px-1 w-[41%]">
                      <Img
                        src="images/img_image_35.png"
                        className="h-[72px] md:h-auto object-cover w-[72px]"
                        alt="image_Nine"
                      />
                    </div>
                    <Button
                      className="absolute cursor-pointer font-normal min-w-[180px] right-[0] text-black_900 text-center text-sm top-[0] uppercase"
                      size="md"
                      variant="OutlineBlack90033"
                    >
                      Watch Battle
                    </Button>
                    <Text
                      className="absolute bottom-[0] left-[27%] text-blue_gray_400 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      Unboxed:
                    </Text>
                    <Text
                      className="absolute bottom-[0] right-[10%] text-black_900"
                      as="h4"
                      variant="h4"
                    >
                      $0.00
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-end justify-start p-2 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end mr-4 w-[89%] md:w-full">
                    <div className="md:h-9 h-[38px] relative w-[37px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-9 inset-x-[0] items-center justify-start mx-auto p-0.5 top-[0] w-9"
                        style={{
                          backgroundImage: "url('images/img_group223.svg')",
                        }}
                      >
                        <Img
                          src="images/img_image_36.png"
                          className="h-8 md:h-auto object-cover w-8"
                          alt="image"
                        />
                      </div>
                      <Text
                        className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                        as="h1"
                        variant="h1"
                      >
                        55
                      </Text>
                    </div>
                    <Img
                      src="images/img_airplane.svg"
                      className="h-[15px] md:ml-[0] ml-[9px]"
                      alt="airplane"
                    />
                    <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[38px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 right-[0] top-[0] w-9"
                        style={{
                          backgroundImage: "url('images/img_group223.svg')",
                        }}
                      >
                        <Img
                          src="images/img_image_37.png"
                          className="h-8 md:h-auto object-cover w-8"
                          alt="image_One"
                        />
                      </div>
                      <Text
                        className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                        as="h1"
                        variant="h1"
                      >
                        39
                      </Text>
                    </div>
                    <div className="h-[88px] md:ml-[0] ml-[74px] relative w-[53%] md:w-full">
                      <div className="absolute bg-gray_200 flex flex-row h-full inset-[0] items-center justify-center m-auto p-1 w-[99%]">
                        <div className="bg-gray_100 flex flex-col items-center justify-start my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_38.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Two"
                          />
                        </div>
                        <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_38.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Three"
                          />
                        </div>
                        <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_39.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Four"
                          />
                        </div>
                        <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_39.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Five"
                          />
                        </div>
                      </div>
                      <div className="absolute bg-gray_100 flex flex-col h-max inset-y-[0] items-center justify-start my-auto px-1 right-[0] w-1/5">
                        <Img
                          src="images/img_image_39.png"
                          className="h-[72px] md:h-auto object-cover w-[72px]"
                          alt="image_Six"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 justify-start md:ml-[0] ml-[22px] w-[23%] md:w-full">
                      <Button
                        className="cursor-pointer font-normal min-w-[180px] text-black_900 text-center text-sm uppercase"
                        size="md"
                        variant="OutlineBlack90033"
                      >
                        Watch Battle
                      </Button>
                      <div className="flex flex-row gap-[15px] items-center justify-end ml-9 md:ml-[0] w-[69%] md:w-full">
                        <Text
                          className="text-blue_gray_400 uppercase"
                          as="h4"
                          variant="h4"
                        >
                          Unboxed:
                        </Text>
                        <Text className="text-black_900" as="h4" variant="h4">
                          $0.26
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-2 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                    <div className="md:h-9 h-[38px] relative w-[37px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-9 inset-x-[0] items-center justify-start mx-auto p-0.5 top-[0] w-9"
                        style={{
                          backgroundImage: "url('images/img_group223.svg')",
                        }}
                      >
                        <Img
                          src="images/img_image_40.png"
                          className="h-8 md:h-auto object-cover w-8"
                          alt="image"
                        />
                      </div>
                      <Button
                        className="absolute bottom-[0] cursor-pointer font-normal h-[18px] left-[0] text-[8px] text-center text-white_A700 w-[18px]"
                        size="sm"
                        variant="OutlineWhiteA700"
                      >
                        8
                      </Button>
                    </div>
                    <Img
                      src="images/img_airplane.svg"
                      className="h-[15px] md:ml-[0] ml-[9px]"
                      alt="airplane"
                    />
                    <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[37px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-9 inset-x-[0] items-center justify-start mx-auto p-0.5 top-[0] w-9"
                        style={{
                          backgroundImage: "url('images/img_group223.svg')",
                        }}
                      >
                        <Img
                          src="images/img_image_29.png"
                          className="h-8 md:h-auto object-cover w-8"
                          alt="image_One"
                        />
                      </div>
                      <Text
                        className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                        as="h1"
                        variant="h1"
                      >
                        120
                      </Text>
                    </div>
                    <Img
                      src="images/img_airplane.svg"
                      className="h-[15px] md:ml-[0] ml-[9px]"
                      alt="airplane_One"
                    />
                    <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[38px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 right-[0] top-[0] w-9"
                        style={{
                          backgroundImage: "url('images/img_group223.svg')",
                        }}
                      >
                        <Img
                          src="images/img_image_29.png"
                          className="h-8 md:h-auto object-cover w-8"
                          alt="image_Two"
                        />
                      </div>
                      <Text
                        className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                        as="h1"
                        variant="h1"
                      >
                        120
                      </Text>
                    </div>
                    <Img
                      src="images/img_airplane.svg"
                      className="h-[15px] ml-2 md:ml-[0]"
                      alt="airplane_Two"
                    />
                    <div className="md:h-9 h-[38px] md:ml-[0] ml-[7px] relative w-[38px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 right-[0] top-[0] w-9"
                        style={{
                          backgroundImage: "url('images/img_group223.svg')",
                        }}
                      >
                        <Img
                          src="images/img_image_29.png"
                          className="h-8 md:h-auto object-cover w-8"
                          alt="image_Three"
                        />
                      </div>
                      <Text
                        className="absolute bg-green_600 border border-solid border-white_A700 bottom-[0] flex h-[18px] items-center justify-center left-[0] text-center text-white_A700 w-[18px]"
                        as="h1"
                        variant="h1"
                      >
                        120
                      </Text>
                    </div>
                    <div className="h-[88px] md:ml-[0] ml-[3px] relative w-[48%] md:w-full">
                      <div className="absolute bg-gray_200 flex flex-row h-full inset-[0] items-center justify-center m-auto p-1 w-[99%]">
                        <div className="bg-gray_100 flex flex-col items-center justify-start my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_38.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Four"
                          />
                        </div>
                        <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_38.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Five"
                          />
                        </div>
                        <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_38.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Six"
                          />
                        </div>
                        <div className="bg-gray_100 flex flex-col items-center justify-start ml-1 my-1 px-1 w-1/5">
                          <Img
                            src="images/img_image_38.png"
                            className="h-[72px] md:h-auto object-cover w-[72px]"
                            alt="image_Seven"
                          />
                        </div>
                      </div>
                      <div className="absolute bg-gray_100 flex flex-col h-max inset-y-[0] items-center justify-start my-auto px-1 right-[0] w-1/5">
                        <Img
                          src="images/img_image_38.png"
                          className="h-[72px] md:h-auto object-cover w-[72px]"
                          alt="image_Eight"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 justify-start md:ml-[0] ml-[22px] w-[21%] md:w-full">
                      <Button
                        className="cursor-pointer font-normal min-w-[180px] text-black_900 text-center text-sm uppercase"
                        size="md"
                        variant="OutlineBlack90033"
                      >
                        Watch Battle
                      </Button>
                      <div className="flex flex-row gap-[15px] items-center justify-end ml-9 md:ml-[0] w-[70%] md:w-full">
                        <Text
                          className="text-blue_gray_400 uppercase"
                          as="h4"
                          variant="h4"
                        >
                          Unboxed:
                        </Text>
                        <Text className="text-black_900" as="h4" variant="h4">
                          $0.52
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col justify-start w-full">
              <div className="bg-gray_100 flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mb-[11px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                    <Img
                      src="images/img_image_160x257.png"
                      className="h-40 md:h-auto object-cover"
                      alt="image_Nineteen"
                    />
                    <Img
                      src="images/img_image_160x256.png"
                      className="h-40 md:h-auto object-cover"
                      alt="image_Twenty"
                    />
                    <Img
                      src="images/img_image_41.png"
                      className="h-40 md:h-auto object-cover"
                      alt="image_TwentyOne"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-6 w-[81%] md:w-full">
                    <Text
                      className="text-black_900 text-center"
                      as="h4"
                      variant="h4"
                    >
                      Variety Of Boxes
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[204px] text-black_900 text-center"
                      as="h4"
                      variant="h4"
                    >
                      Fast Shipping
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[180px] text-black_900 text-center"
                      as="h4"
                      variant="h4"
                    >
                      Guaranteed Value
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[11px] w-[98%] md:w-full">
                    <Text
                      className="leading-[22.00px] text-blue_gray_400 text-center w-[37%] sm:w-full"
                      as="h4"
                      variant="h4"
                    >
                      From sneakers to streetwear, technology and beyond, your
                      ideal box is only a click away.
                    </Text>
                    <Text
                      className="leading-[22.00px] ml-2.5 md:ml-[0] text-blue_gray_400 text-center w-[34%] sm:w-full"
                      as="h4"
                      variant="h4"
                    >
                      At the hands of our speedy shipping team, your package
                      will arrive before you know it.
                    </Text>
                    <Text
                      className="leading-[22.00px] md:ml-[0] ml-[37px] text-blue_gray_400 text-center w-[26%] sm:w-full"
                      as="h4"
                      variant="h4"
                    >
                      From verified partners, your premium item is brand
                      authenticated every time.
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="ml-6 md:ml-[0] mt-11 text-black_900"
                as="h2"
                variant="h2"
              >
                FRESH DELIVERIES
              </Text>
              <Text
                className="ml-6 md:ml-[0] mt-2 text-black_900"
                as="h4"
                variant="h4"
              >
                Check out some of the hottest unboxings from our community! To
                appear on our page,
              </Text>
              <div className="flex flex-row items-start justify-start ml-6 md:ml-[0] mt-0.5 w-[38%] md:w-full">
                <Text className="text-black_900" as="h4" variant="h4">
                  tag us on
                </Text>
                <Text
                  className="ml-[5px] text-blue_gray_500"
                  as="h4"
                  variant="h4"
                >
                  Instagram
                </Text>
                <Text className="ml-2 text-black_900" as="h4" variant="h4">
                  or
                </Text>
                <Text
                  className="ml-[3px] text-blue_gray_500"
                  as="h4"
                  variant="h4"
                >
                  Twitter
                </Text>
                <Text className="ml-[7px] text-black_900" as="h4" variant="h4">
                  when your item arrives.
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start ml-6 md:ml-[0] mt-[33px] w-1/4 md:w-full">
                <Img
                  src="images/img_frame_black_900_14x18.svg"
                  className="h-3.5"
                  alt="frame_Ten"
                />
                <Text
                  className="ml-[11px] text-blue_gray_500"
                  as="h4"
                  variant="h4"
                >
                  TWITTER
                </Text>
                <Img
                  src="images/img_frame_black_900_18x18.svg"
                  className="h-[18px] ml-[39px] w-[18px]"
                  alt="frame_Eleven"
                />
                <Text
                  className="ml-[11px] text-blue_gray_400"
                  as="h4"
                  variant="h4"
                >
                  INSTAGRAM
                </Text>
              </div>
              <div className="bg-gray_100 flex flex-col items-center justify-end mt-[65px] p-[29px] sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mt-[135px] w-[70%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-3/5 md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        size="smIcn"
                        variant="icbFillBlueA400"
                      >
                        <Img
                          src="images/img_frame_black_900_40x40.svg"
                          className="h-6"
                          alt="frame_Twelve"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        size="smIcn"
                        variant="icbFillBlue500"
                      >
                        <Img
                          src="images/img_frame_40x40.svg"
                          className="h-6"
                          alt="frame_Thirteen"
                        />
                      </Button>
                      <Img
                        src="images/img_frame_black_900_24x24.svg"
                        className="h-6 w-6"
                        alt="frame_Fourteen"
                      />
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        size="smIcn"
                        variant="icbFillIndigo300"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="h-6"
                          alt="frame_Fifteen"
                        />
                      </Button>
                      <Img
                        src="images/img_layer1.svg"
                        className="h-10 w-10"
                        alt="layerOne"
                      />
                      <Img
                        src="images/img_youtube.svg"
                        className="h-10 w-10"
                        alt="youtube"
                      />
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        size="smIcn"
                        variant="icbFillDeeppurple600"
                      >
                        <Img
                          src="images/img_group44.svg"
                          className="h-6"
                          alt="groupFortyFour"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-12 w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-16 w-16"
                        alt="settings"
                      />
                      <Img
                        src="images/img_frame_red_a700.svg"
                        className="h-[50px]"
                        alt="frame_Sixteen"
                      />
                      <Img
                        src="images/img_capa1.svg"
                        className="h-16 w-16"
                        alt="capaOne"
                      />
                      <Img
                        src="images/img_capa1_black_900.svg"
                        className="h-[42px] w-[42px]"
                        alt="capaOne_One"
                      />
                    </div>
                    <Img
                      src="images/img_image_129x129.png"
                      className="h-[129px] md:h-auto mt-11 object-cover w-[129px]"
                      alt="image_TwentySix"
                    />
                    <Text
                      className="mt-[15px] text-black_900 uppercase"
                      as="h3"
                      variant="h3"
                    >
                      Official partner
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[58px] w-[88%] md:w-full">
                    <Img
                      src="images/img_frame_black_900_12x12.svg"
                      className="h-3 mb-0.5 w-3"
                      alt="frame_Seventeen"
                    />
                    <Text className="text-gray_600 uppercase" variant="body1">
                      CONTACT
                    </Text>
                    <div className="bg-blue_gray_400 h-[3px] ml-5 sm:ml-[0] sm:mt-0 my-[5px] w-[3px]"></div>
                    <Text
                      className="sm:ml-[0] ml-[9px] text-gray_600 uppercase"
                      variant="body1"
                    >
                      BLOG
                    </Text>
                    <div className="bg-blue_gray_400 h-[3px] sm:ml-[0] ml-[15px] sm:mt-0 my-[5px] w-[3px]"></div>
                    <Text
                      className="ml-2.5 sm:ml-[0] sm:mt-0 mt-0.5 text-gray_600 uppercase"
                      variant="body1"
                    >
                      FAQ
                    </Text>
                    <div className="bg-blue_gray_400 h-[3px] ml-3.5 sm:ml-[0] sm:mt-0 my-[5px] w-[3px]"></div>
                    <a
                      href="javascript:"
                      className="ml-2.5 sm:ml-[0] text-gray_600 uppercase"
                    >
                      <Text variant="body1">TERMS OF SERVICE</Text>
                    </a>
                    <div className="bg-blue_gray_400 h-[3px] sm:ml-[0] ml-[17px] sm:mt-0 my-[5px] w-[3px]"></div>
                    <Text
                      className="ml-2.5 sm:ml-[0] text-gray_600 uppercase"
                      variant="body1"
                    >
                      PRIVACY STATEMENT
                    </Text>
                    <div className="bg-blue_gray_400 h-[3px] sm:ml-[0] ml-[29px] sm:mt-0 my-[5px] w-[3px]"></div>
                    <Text
                      className="sm:ml-[0] ml-[9px] text-gray_600 uppercase"
                      variant="body1"
                    >
                      PROVABLY FAIR
                    </Text>
                    <div className="bg-blue_gray_400 h-[3px] sm:ml-[0] ml-[26px] sm:mt-0 my-[5px] w-[3px]"></div>
                  </div>
                  <div className="flex flex-row items-start justify-center mt-[15px] w-[30%] md:w-full">
                    <Text className="text-gray_600 uppercase" variant="body1">
                      COOKIE POLICY
                    </Text>
                    <div className="bg-blue_gray_400 h-[3px] ml-[21px] my-1 w-[3px]"></div>
                    <Text
                      className="ml-[9px] text-gray_600 uppercase"
                      variant="body1"
                    >
                      AML POLICY
                    </Text>
                    <div className="bg-blue_gray_400 h-[3px] ml-[18px] my-1 w-[3px]"></div>
                  </div>
                  <Text
                    className="leading-[18.00px] mt-7 text-center text-gray_600 w-full"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      HypeDrop is a brand name of Omnifarious Services Limited,
                      Reg No: HE 389117, Having it&#39;s registered address at
                      1, Avlonos, Maria House, Nicosia, 1075 Cyprus
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[282px] h-[854px] right-[0] top-[0] w-[33%] sm:w-full">
            <div className="absolute bg-white_A700 flex flex-col gap-[9px] justify-end pt-[21px] right-[0] top-[0] w-[58%]">
              <a
                href="javascript:"
                className="md:ml-[0] ml-[119px] mr-[66px] text-black_900 text-center uppercase"
              >
                <Text as="h5" variant="h5">
                  LOGIN
                </Text>
              </a>
              <div className="md:h-[235px] h-[751px] relative w-full">
                <div className="absolute bg-white_A700 flex flex-col gap-2 h-max inset-[0] justify-center m-auto p-2 w-full">
                  <Text
                    className="md:ml-[0] ml-[15px] mr-[129px] mt-0.5 text-black_900 uppercase"
                    as="h6"
                    variant="h6"
                  >
                    Live drops
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mb-[66px] w-full">
                    <List
                      className="flex-col gap-2 grid items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-green_100 flex flex-1 flex-col items-center justify-end my-0 p-1 w-full">
                        <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                          <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                            <Img
                              src="images/img_image_75x126.png"
                              className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                              alt="image"
                            />
                            <Img
                              src="images/img_frame_black_900_15x15.svg"
                              className="h-[15px] w-[15px]"
                              alt="frame"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Img
                              src="images/img_frame_24x24.svg"
                              className="h-6 w-6"
                              alt="frame_One"
                            />
                            <Button
                              className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                              size="sm"
                              variant="FillWhiteA700"
                            >
                              $9.00
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green_100 flex flex-1 flex-col items-center justify-end my-0 p-1 w-full">
                        <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                          <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                            <Img
                              src="images/img_image_75x126.png"
                              className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                              alt="image"
                            />
                            <Img
                              src="images/img_frame_black_900_15x15.svg"
                              className="h-[15px] w-[15px]"
                              alt="frame"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Img
                              src="images/img_frame_24x24.svg"
                              className="h-6 w-6"
                              alt="frame_One"
                            />
                            <Button
                              className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                              size="sm"
                              variant="FillWhiteA700"
                            >
                              $9.00
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green_100 flex flex-1 flex-col items-center justify-end my-0 p-1 w-full">
                        <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                          <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                            <Img
                              src="images/img_image_75x126.png"
                              className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                              alt="image"
                            />
                            <Img
                              src="images/img_frame_black_900_15x15.svg"
                              className="h-[15px] w-[15px]"
                              alt="frame"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Img
                              src="images/img_frame_24x24.svg"
                              className="h-6 w-6"
                              alt="frame_One"
                            />
                            <Button
                              className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                              size="sm"
                              variant="FillWhiteA700"
                            >
                              $9.00
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue_gray_100 flex flex-1 flex-col items-center justify-end my-0 p-1 w-full">
                        <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                          <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                            <Img
                              src="images/img_image_42.png"
                              className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                              alt="image"
                            />
                            <Img
                              src="images/img_frame_black_900_15x15.svg"
                              className="h-[15px] w-[15px]"
                              alt="frame"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Img
                              src="images/img_frame_24x24.svg"
                              className="h-6 w-6"
                              alt="frame_One"
                            />
                            <Button
                              className="cursor-pointer font-normal min-w-[45px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                              size="sm"
                              variant="FillWhiteA700"
                            >
                              $75.00
                            </Button>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-gray_300 flex flex-row gap-2 items-end justify-evenly p-0.5 w-full">
                      <Img
                        src="images/img_frame_24x24.svg"
                        className="h-6 mb-0.5 mt-[90px] w-6"
                        alt="frame_Eighteen"
                      />
                      <div className="md:h-[111px] h-[114px] mb-0.5 relative w-[83%]">
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-col items-end justify-start w-full">
                            <div className="flex flex-row gap-[25px] items-start justify-between mr-1 w-[98%] md:w-full">
                              <Img
                                src="images/img_image_43.png"
                                className="h-[75px] md:h-auto mt-[9px] object-cover"
                                alt="image_TwentyNine"
                              />
                              <Img
                                src="images/img_frame_black_900_15x15.svg"
                                className="h-[15px] w-[15px]"
                                alt="frame_Nineteen"
                              />
                            </div>
                            <div className="bg-white_A700 h-[21px] mt-1 w-[23%]"></div>
                          </div>
                        </div>
                        <Button
                          className="absolute flex h-12 items-center justify-center right-[2%] top-[0] w-12"
                          size="smIcn"
                          variant="icbOutlineBlack90026"
                        >
                          <Img
                            src="images/img_frame_black_900_48x48.svg"
                            className="h-8"
                            alt="frame_Twenty"
                          />
                        </Button>
                        <div className="absolute bg-white_A700 bottom-[2%] h-12 md:h-8 p-0.5 right-[2%] shadow-bs w-12">
                          <Img
                            src="images/img_frame_black_900_32x32.svg"
                            className="absolute h-8 inset-[0] justify-center m-auto w-8"
                            alt="frame_TwentyOne"
                          />
                          <Text
                            className="absolute bottom-[4%] right-[4%] text-black_900 text-center uppercase"
                            variant="body1"
                          >
                            €1.50
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute left-[4%] text-red_A200 top-[0] uppercase"
                  as="h2"
                  variant="h2"
                >
                  •
                </Text>
              </div>
            </div>
            <Img
              src="images/img_image_91x126.png"
              className="absolute h-[91px] left-[0] object-cover top-[11%] w-[33%]"
              alt="image_ThirtyTwo"
            />
            <div className="absolute bg-gray_300 bottom-[0] flex flex-col items-center justify-end p-1 right-[2%] w-[54%]">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_44.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image_ThirtyThree"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame_TwentyTwo"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_TwentyThree"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €1.00
                  </Button>
                </div>
              </div>
            </div>
            <a
              href="javascript:"
              className="absolute left-[31%] text-center text-white_A700 top-[2%] uppercase"
            >
              <Text as="h5" variant="h5">
                SIGN UP
              </Text>
            </a>
          </div>
          <List
            className="absolute flex-col gap-2 grid right-[1%] top-[17%] w-[18%]"
            orientation="vertical"
          >
            <div className="bg-green_100 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_45.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    $6.00
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-green_100 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_45.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    $6.00
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-green_100 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_45.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    $6.00
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-green_100 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_46.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    $6.00
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-green_100 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_47.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €3.00
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_44.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €0.50
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-green_100 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_47.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €3.00
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_44.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €0.50
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_48.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €0.90
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_44.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €0.50
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_49.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €0.05
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_44.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €1.00
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_49.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €0.05
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 flex flex-col items-center justify-end p-1 w-full">
              <div className="flex flex-col items-end justify-start mt-[3px] w-full">
                <div className="flex flex-row gap-[25px] items-start justify-end w-[83%] md:w-full">
                  <Img
                    src="images/img_image_49.png"
                    className="h-[75px] md:h-auto mt-[9px] object-cover w-[76%]"
                    alt="image"
                  />
                  <Img
                    src="images/img_frame_black_900_15x15.svg"
                    className="h-[15px] w-[15px]"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_frame_24x24.svg"
                    className="h-6 w-6"
                    alt="frame_One"
                  />
                  <Button
                    className="cursor-pointer font-normal min-w-[39px] mt-[3px] text-[10px] text-black_900 text-center uppercase"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    €0.01
                  </Button>
                </div>
              </div>
            </div>
          </List>
          <Text
            className="absolute left-[27%] text-white_A700 top-[0] uppercase"
            variant="body1"
          >
            NEW
          </Text>
          <Text
            className="absolute left-[2%] text-black_900 top-[3%]"
            as="h2"
            variant="h2"
          >
            FEATURED BOXES
          </Text>
          <a
            href="javascript:"
            className="absolute left-[28%] text-blue_gray_500 top-[3%]"
          >
            <Text as="h4" variant="h4">
              VIEW ALL
            </Text>
          </a>
          <Text
            className="absolute left-[35%] text-blue_gray_500 top-[3%]"
            as="h4"
            variant="h4"
          >
            BOXES
          </Text>
        </div>
      </div>
    </>
  );
};

export default FramePage;
