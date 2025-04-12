// components/ProtectedRoute.tsx
// import { useAccountStore } from "../store/useAccountStore";
// import { Navigate } from "react-router-dom";
// import { ReactNode } from "react";

// const ProtectedRoute = ({ children }: { children: ReactNode }) => {
//   const account = useAccountStore((state) => state.account);

//   if (!account) {
//     return <Navigate to="/connect-wallet" replace />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;
