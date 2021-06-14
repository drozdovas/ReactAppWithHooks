import { useState } from 'react';

const useModal = () => {
  const [isShowingLoading, setIsShowingLoading] = useState(false);
  const [isShowingDeleteAllReports, setIsDeleteAllReports] = useState(false);
  const [isShowingDeleteOneReport, setIsDeleteOneReport] = useState(false);

  const toggleLoading = () => {
    setIsShowingLoading(true);
    setTimeout(() => {
      setIsShowingLoading(false);
    }, 2000);
  };

  const toggleDeleteAllReports = () => setIsDeleteAllReports(!isShowingDeleteAllReports);
  const toggleDeleteOneReport = () => setIsDeleteOneReport(!isShowingDeleteOneReport);

  return {
    isShowingLoading,
    toggleLoading,
    isShowingDeleteAllReports,
    toggleDeleteAllReports,
    isShowingDeleteOneReport,
    toggleDeleteOneReport,
  };
};

export default useModal;
