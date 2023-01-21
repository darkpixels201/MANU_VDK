import { Close } from '@mui/icons-material';
import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { images } from '../../Assets/Images';
import { colors } from '../../utils/Colors';
import { noUnderline, row } from '../../utils/CommonStyles';
import CustomText from '../CustomText';
import PlusMinusCom from '../PlusMinusCom';
import Spacer from '../Spacer';

export const MobileCartItem = ({onPressClose}) => (
    <SwiperSlide style={{ height: 150, backgroundColor:colors.lightGreen }}>
      <div style={{ ...row }}>
        <div style={{ height: 120, width: 120 }}>
          <a
            onClick={onPressClose}
            style={{
              backgroundColor: colors.purple ,
              color: "#fff",
              height: 20,
              width: 20,
              borderRadius: 10,
              position: "absolute",
              marginLeft: 5,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Close style={{height:12}} />
          </a>
          <img
            src={images.slide12}
            alt=""
            style={{ height: "100%", width: 120,objectFit:"contain" }}
          />
        </div>
        <Spacer width={50} />
        <div>
          <div style={{ ...row, }}>
            <CustomText
              title="PRoducto "
              fontSize={16}
              textAlign={"left"}
              color={colors.purple}
              fontFamily={"ClashDisplay-SemiBold"}
            />
            <Spacer width={5} />
            <CustomText title="nombre " fontSize={16} />
          </div>
          <Spacer height={5} />
          <CustomText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  "
            fontSize={16}
            textAlign={"left"}
          />
          <Spacer height={10} />
          <div
            style={{
              ...row,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomText title="$95.00" fontSize={16} color={colors.purple} />
            <Spacer width={5} />
            <PlusMinusCom/>
            {/* <div style={{ ...row, alignItems: "center" }}>
              <a href="" style={{ ...noUnderline }}>
                <CustomText title="-" fontSize={20} />
              </a>
              <Spacer width={20} />
              <CustomText title="1" fontSize={20} />

              <Spacer width={20} />
              <a href="" style={{ ...noUnderline }}>
                <CustomText title="+" fontSize={20} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
