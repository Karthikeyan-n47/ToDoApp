import Image from "next/image";

const TaskModal = () => {
  return (
    <div className="w-[670px] ">
      <div className="mt-[16px] w-full">
        <div className="mx-[24px] mb-[84px]">
          <div className="w-full h-[40px] flex justify-between">
            <div className="w-16 h-6 flex my-[8px] justify-between">
              <Image src="close.svg" height={24} width={24} alt="close" />
              <Image src="expand.svg" height={24} width={24} alt="close" />
            </div>
            <div className="w-[230px] h-[40px] flex justify-between">
              {/* <div className="w-[98px] h-[40px] flex justify-between p-[8px] bg-[#F4F4F4]"></div> */}
              <Image src="share-modal.svg" height={40} width={98} alt="share" />
              <Image
                src="favourite-modal.svg"
                height={40}
                width={116}
                alt="favourite"
              />
            </div>
          </div>
          <div className="w-full mt-[27px]">
            <div className="w-full">
              <p className="h-[58px] font-barlow font-semibold text-5xl/[57.6px] text-[#CCCCCC]">
                Title
              </p>
              <div className="w-full mt-8 ">
                <div className="w-full flex">
                  <div className="w-[136px]">
                    <div className="w-[97px] flex items-center justify-between">
                      <Image
                        src="status-modal.svg"
                        height={24}
                        width={24}
                        alt="status"
                      />
                      <p className="font-inter my-[2.5px] text-base/[19px] font-normal text-[#666666]">
                        Status
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    <p className="font-inter text-base font-normal text-[#000000]">
                      To do
                    </p>
                  </div>
                </div>
                <div className="w-full flex mt-8">
                  <div className="w-[136px]">
                    <div className="w-[100px] flex items-center justify-between">
                      <Image
                        src="priority-modal.svg"
                        height={24}
                        width={24}
                        alt="priority"
                      />
                      <p className="my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                        Priority
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    <p className="font-inter text-base font-normal text-[#C1BDBD]">
                      Not selected
                    </p>
                  </div>
                </div>
                <div className="w-full flex mt-8">
                  <div className="w-[136px]">
                    <div className="w-[136px] flex items-center ">
                      <Image
                        src="deadline-modal.svg"
                        height={24}
                        width={24}
                        alt="deadline"
                      />
                      <p className="ml-[25px] my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                        Deadline
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    <input
                      type="text"
                      placeholder="Not selected"
                      className="font-inter text-base font-normal text-[#C1BDBD]"
                    />
                  </div>
                </div>
                <div className="w-full flex mt-8">
                  <div className="w-[136px]">
                    <div className="w-[136px] flex items-center justify-between">
                      <Image
                        src="description-modal.svg"
                        height={24}
                        width={24}
                        alt="description"
                      />
                      <p className="w-[87px] my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                        Description
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    <input
                      type="text"
                      placeholder="Not selected"
                      className="font-inter text-base font-normal text-[#C1BDBD]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[38px] w-[208px] flex items-center justify-between">
              <Image src="plus-modal.svg" height={24} width={24} alt="plus" />
              <p className="w-[161px]  my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                Add custom property
              </p>
            </div>
          </div>
        </div>
        <div className="mx-[24px] border border-[#DEDEDE]" />
        <p className="mx-[24px] mt-[32px] font-inter font-normal text-base/[19.36px] text-[#C0BDBD]">
          Start writing, or drag your own files here.
        </p>
      </div>
    </div>
  );
};

export default TaskModal;
