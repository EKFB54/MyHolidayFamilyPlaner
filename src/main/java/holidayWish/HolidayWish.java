package holidayWish;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import holiday.Holiday;

@Entity
public class HolidayWish {

	@Id
	private long iDHolidayWisch; 
	private String ort;
	private String land; 
	private double preis;
	private Date ab; 
	private Date bis;
	private Holiday holiday; 




	public HolidayWish() {
		// TODO Auto-generated constructor stub
	}


	public HolidayWish(long iDHolidayWisch, String ort, String land, double preis, Date ab, Date bis, 
			Holiday holiday) {
		super();
		this.iDHolidayWisch = iDHolidayWisch;
		this.ort = ort;
		this.land = land;
		this.preis = preis;
		this.ab = ab;
		this.bis = bis;
		this.holiday=holiday;
	}
	
	/**
	 * @return the holiday
	 */
	public Holiday getHoliday() {
		return holiday;
	}

	/**
	 * @param holiday the holiday to set
	 */
	public void setHoliday(Holiday holiday) {
		this.holiday = holiday;
	}

	/**
	 * @return the iDHolidayWisch
	 */
	public long getiDHolidayWisch() {
		return iDHolidayWisch;
	}


	/**
	 * @param iDHolidayWisch the iDHolidayWisch to set
	 */
	public void setiDHolidayWisch(long iDHolidayWisch) {
		this.iDHolidayWisch = iDHolidayWisch;
	}


	/**
	 * @return the ort
	 */
	public String getOrt() {
		return ort;
	}


	/**
	 * @param ort the ort to set
	 */
	public void setOrt(String ort) {
		this.ort = ort;
	}


	/**
	 * @return the land
	 */
	public String getLand() {
		return land;
	}


	/**
	 * @param land the land to set
	 */
	public void setLand(String land) {
		this.land = land;
	}


	/**
	 * @return the preis
	 */
	public double getPreis() {
		return preis;
	}


	/**
	 * @param preis the preis to set
	 */
	public void setPreis(double preis) {
		this.preis = preis;
	}


	/**
	 * @return the ab
	 */
	public Date getAb() {
		return ab;
	}


	/**
	 * @param ab the ab to set
	 */
	public void setAb(Date ab) {
		this.ab = ab;
	}


	/**
	 * @return the bis
	 */
	public Date getBis() {
		return bis;
	}


	/**
	 * @param bis the bis to set
	 */
	public void setBis(Date bis) {
		this.bis = bis;
	}





}
