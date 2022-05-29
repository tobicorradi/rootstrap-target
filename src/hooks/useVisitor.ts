const useVisitor = () => {
  const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
  return !!hasVisitedBefore;
};

export default useVisitor;
