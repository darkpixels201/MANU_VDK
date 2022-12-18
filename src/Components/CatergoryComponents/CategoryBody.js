// import React from 'react'
// import { Grid } from "@mui/material";
// import DiscountBanner from '../CartComponents/DiscountBanner';
// import CustomText from '../CustomText';
// import { MuiDrawer } from '../Drawer';

// const CategoryBody = () => {
//   return (
//     <div>
//     <DiscountBanner />
//     <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
//       <Grid item xs={12} sm={12} md={12}>
//         <Grid
//           container
//           rowSpacing={{ xs: 5, sm: 2, md: 3 }}
//           columnSpacing={{}}
//           style={{
//             paddingLeft: 40,
//             paddingRight: 100,
//             paddingTop: 20,
//           }}
//         >
//           <Grid item xs={12} sm={12} md={3}>
//             <div style={row}>
//               <CustomText
//                 fontSize={18}
//                 title="MANU"
//                 textAlign={"left"}
//                 fontFamily={"ClashDisplay-SemiBold"}
//               />
//               <Spacer width={5} />
//               <CustomText fontSize={18} title="VDK" />
//             </div>
//             <CustomText
//               fontSize={18}
//               title="STORE"
//               textAlign={"left"}
//               fontFamily={"ClashDisplay-SemiBold"}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={9}>
//             <div style={{ ...row, justifyContent: "space-between" }}>
//               <div style={{ ...row, padding: 5, ...center }}>
//                 <Search fontSize="small" />
//                 <input type="text" style={{ borderWidth: 0 }} />
//               </div>
//               <div
//                 style={{
//                   ...center,
//                 }}
//               >
//                 <Link to="/cart">
//                   <ShoppingCartOutlinedIcon />
//                 </Link>
//                 <Spacer width={50} />
//                 <img
//                   onClick={() => props.setIsDrawerOpen(true)}
//                   src={images.twoLines}
//                   alt=""
//                   style={{ width: 24, height: 10 }}
//                 />
//                 <MuiDrawer
//                   isDrawerOpen={props.isDrawerOpen}
//                   setIsDrawerOpen={props.setIsDrawerOpen}
//                 />
//               </div>
//             </div>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//     <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
//       <Grid item xs={12} sm={12} md={2.3} style={{}}>
//         <div style={{}}>
//           <CatList />
//         </div>
//       </Grid>
//       <Grid item xs={12} sm={12} md={9.7} style={{ paddingRight: 90 }}>
//         <div>
//           <Banner />
//         </div>
//         <Spacer height={60} />
//         <Grid
//           container
//           rowSpacing={{ xs: 5, sm: 2, md: 3 }}
//           columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//         >
//           {[1, 2, 3, 4].map(() => (
//             <Grid item xs={6} sm={4} md={3}>
//               <CardImage />
//               <Spacer height={10} />
//               <CardFooter />
//             </Grid>
//           ))}
//         </Grid>
//         <Spacer height={60} />
//         <Grid
//           container
//           rowSpacing={{ xs: 5, sm: 2, md: 3 }}
//           columnSpacing={{ xs: 1, sm: 2, md: 6 }}
//         >
//           {["up", "down"].map((item) => (
//             <Grid item xs={12} sm={12} md={6}>
//               <Card footer={item} />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//     <Spacer height={100} />
//     <Footer />
//   </div>
//   )
// }

// export default CategoryBody