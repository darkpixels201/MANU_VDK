import React from 'react'
import { images } from '../../../Assets/Images';
import { colors } from '../../../utils/Colors';
import { row } from '../../../utils/CommonStyles';
import CustomText from '../../CustomText';
import Spacer from '../../Spacer';

export const Banner = () => (
    <div style={{ height: "36vw" }}>
      <img
        src={images.catBanner}
        alt=""
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div style={{ position: "absolute", marginLeft: 30, marginTop: -100 }}>
        <div style={row}>
          <CustomText
            fontSize={30}
            title=" DIANE"
            textAlign={"left"}
            fontFamily={"ClashDisplay-SemiBold"}
            color={colors.white}
          />
          <Spacer width={10} />
          <CustomText
            fontSize={30}
            title="&"
            textAlign={"left"}
            fontFamily={"ClashDisplay-SemiBold"}
            color={colors.white}
          />
        </div>
        <CustomText
          fontSize={30}
          title="GEORDI"
          textAlign={"left"}
          fontFamily={"ClashDisplay-SemiBold"}
          color={colors.white}
        />
      </div>
    </div>
  );
