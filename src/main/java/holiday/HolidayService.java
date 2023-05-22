package holiday;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HolidayService {

	public HolidayService() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	private HolidayRepository holidayRepository; 

}
