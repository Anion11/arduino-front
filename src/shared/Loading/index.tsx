import style from './loading.module.scss';

const Loading = () => {
  console.log(style.loaderWrapper);

  return (
    <div className={style.loaderWrapper}>
      <span className={style.loader} />
    </div>
  );
};
export default Loading;
