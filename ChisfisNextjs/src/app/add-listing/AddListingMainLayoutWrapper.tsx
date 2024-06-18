



export default function AddListingMainLayoutWrapper(
    {children,
    hideBackBtn,
    onNext,
    onBack,
    isFirstStep,
    isLastStep,
    currentStep,
    submitBtnText,
    totalSteps,
    data
    }:{
      children:React.ReactNode,
      hideBackBtn?:boolean,
      onNext:()=>void,
      onBack:()=>void,
      isFirstStep:boolean,
      isLastStep:boolean,
      currentStep:number
      submitBtnText:string,
      data?:Partial<RentableItem>,
      totalSteps?:number
    }) {
      const route = useRouter();
      const {getSession} = useSession();
      const {userId} = getSession();
      const mutate = useMutateData<typeof data>({endpoint:'/property/add',queryKey:['publishProperty'],body:{
        data: {...data,owner:userId,status:'published'}
      }});
      const [steps, setSteps] = useState<Array<number>>([]);

      useEffect(() => {
        if(totalSteps){
          const steps:Array<number> = [];
          for (let i = 0; i < totalSteps; i++) {
            if(!steps.includes(i)){
              steps.push(i);
            };
          }
          setSteps(steps);
        }
      }, [totalSteps])

      // hadnle next or submit button click
      async function handleNext(){
        if(submitBtnText?.toLowerCase()?.trim() == 'publish'){
          // const _data = {...data,owner:userId,}
           // handle submit
          // console.log("submit : ",_data);
           mutate.mutateAsync().then((res)=>{
            console.log("response : ",res);
            onNext();
          }).catch((error)=>{
            console.log("error : ",error);
          } );
          return;
        }
        if(isLastStep){
          route.replace('/add-listing')
        }
        if(submitBtnText?.toLowerCase()?.trim() == 'next'){
          onNext();
          return;
        }
      }

export default function AddListingMainLayoutWrapper({
  children,
  hideBackBtn,
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
  currentStep,
  submitBtnText,
}: {
  children: React.ReactNode;
  hideBackBtn?: boolean;
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStep: number;
  submitBtnText: string;
}) {
  return (

    <div className="">
            {children}

      <div className="w-full rounded-lg fixed mt-4 p-2 right-0 left-0 md:right-24 md:left-auto bottom-0 md:bottom-2">
            <div className="flex flex-wrap justify-between md:justify-end  bg-white md:bg-inherit gap-4 items-center p-2 md:p-1 ">
                <div className="flex items-center justify-between gap-2 md:hidden w-full">
                    { 
                      steps?.map((_,index)=>{
                        return (
                          <div key={index} className={`w-8 h-1 ${currentStep >= index ? 'bg-primary-700':'bg-neutral-300'}`}></div>
                        )
                      })
                    }
                </div>
                <button onClick={onBack} disabled={isFirstStep} className={`${hideBackBtn ? 'block md:hidden':''} bg-primary-100 text-black py-2 md:py-3 px-8 min-w-fit md:min-w-40 rounded-md disabled:opacity-40 disabled:cursor-not-allowed`}>Back</button>
                <button onClick={handleNext} disabled={mutate.isLoading} className="bg-primary-700 text-white py-2 md:py-3 px-4 min-w-fit md:min-w-40 rounded-md">
                    {mutate.isLoading ? 'Please wait...': submitBtnText}
                </button>
          </div>
      </div>
</div>)
    }
    // <div className="flex h-ful">
      {/* <div className="w-60 h-full hidden md:block">
        <div className=" h-full fixed bg-white">
          <div className=" h-full top-0">
              <div className="flex items-center justify-center">
                <Logo  className="w-40 h-20 mt-6"/>
              </div>
              <Sidebar options={options} />
          </div>
        </div>
      </div> */}
        // <div className="flex-1 flex-col py-4 px-1 md:px-8 h-screen">
            
        //     <div className="w-full h-fit pb-24 md:pb-0">
        //         <main className="h-fit container py-0 mt-20">
        //           {children}
        //         </main>
        //     </div>

        //     <div className="w-full rounded-lg mt-4 p-4">
        //           <div className="flex flex-wrap justify-between md:justify-end bg-white md:bg-inherit w-full right-0 left-0 md:right-24 md:left-auto fixed bottom-0 md:bottom-2 gap-4 items-center p-2 md:p-1 ">
        //               {/* display steps - - - on mobile */}
        //               <div className="flex items-center justify-between gap-2 md:hidden w-full">
        //                   { 
        //                     steps?.map((_,index)=>{
        //                       return (
        //                         <div key={index} className={`w-8 h-1 ${currentStep >= index ? 'bg-primary-700':'bg-neutral-300'}`}></div>
        //                       )
        //                     })
        //                   }
        //               </div>
        //               <button onClick={onBack} disabled={isFirstStep} className={`${hideBackBtn ? 'block md:hidden':''} bg-primary-100 text-black py-2 md:py-3 px-8 min-w-40 rounded-md disabled:opacity-40 disabled:cursor-not-allowed`}>Back</button>
        //               <button onClick={handleNext} disabled={mutate.isLoading} className="bg-primary-700 text-white py-2 md:py-3 px-4  min-w-40 rounded-md">
        //                   {mutate.isLoading ? 'Please wait...': submitBtnText}
        //               </button>
        //         </div>
        //     </div>
        // </div>
    // </div>
//   );
// }
