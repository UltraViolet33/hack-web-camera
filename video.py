import os
from os import listdir
import cv2

frameSize = (500, 500)
out = cv2.VideoWriter('output_video.avi',
                      cv2.VideoWriter_fourcc(*'DIVX'), 60, frameSize)

frame_array = []
folder_dir = "E:/MasterProgrammer/hacking/Hack-Web-Camera/images"
# folder_dir = "C:/Users/RIJUSHREE/Desktop/Gfg images"


def show_video():
    for image in os.listdir(folder_dir):
        print(image)

        img = cv2.imread(image)
        print(img)
        cv2.imshow('image', img)
        # height, width, layers = img.shape
        # size = (width,height)
        # frame_array.append(img)

    # out = cv2.VideoWriter('output_video.avi',cv2.VideoWriter_fourcc(*'DIVX'), 25, size)

    # for i in range(len(frame_array)):
    #     # writing to a image array
    #     out.write(frame_array[i])
    # out.release()


show_video()
