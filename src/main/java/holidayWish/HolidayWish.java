package holidayWish;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;
import prio.Prio;
import holiday.Holiday;

@Entity
public class HolidayWish {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	private long iDHolidayWish; 
	private String ort;
	private String land; 
	private double preis;
	private Date ab; 
	private Date bis;
	private Holiday holiday; 
	
	@OneToMany(mappedBy = "holidayWish")
	@JsonIgnore
	private List<Prio> priorities;

	@Transient
	private int sumPriority;




	public HolidayWish() {
		// TODO Auto-generated constructor stub
	}


	public HolidayWish(long iDHolidayWish, String ort, String land, double preis, Date ab, Date bis, 
			Holiday holiday) {
		super();
		this.iDHolidayWish = iDHolidayWish;
		this.ort = ort;
		this.land = land;
		this.preis = preis;
		this.ab = ab;
		this.bis = bis;
		this.holiday=holiday;
	}
	public List<Prio> getPriorities() {
		return priorities;
	}

	public void setPriorities(List<Prio> priorities) {
		this.priorities = priorities;
	}
	
	/**
	 * @return the holiday
	 */
	public Holiday getHoliday() {
		return holiday;
	}

	public void setSumPriority(int sumPriority) {
		this.sumPriority = sumPriority;
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
	public long getiDHolidayWish() {
		return iDHolidayWish;
	}


	/**
	 * @param iDHolidayWish the iDHolidayWish to set
	 */
	public void setiDHolidayWish(long iDHolidayWisch) {
		this.iDHolidayWish = iDHolidayWisch;
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
