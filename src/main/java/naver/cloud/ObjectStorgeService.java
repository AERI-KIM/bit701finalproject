package naver.cloud;

import org.springframework.web.multipart.MultipartFile;

public interface ObjectStorgeService {

	public String uploadFile(String bucketName, String directoryPath,MultipartFile file);
	public void deleteFile(String bucketName, String directoryPath,String FileName);
	
}
