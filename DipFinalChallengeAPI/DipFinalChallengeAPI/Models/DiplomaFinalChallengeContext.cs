using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DipFinalChallengeAPI.Models
{
    public partial class DiplomaFinalChallengeContext : DbContext
    {
        public DiplomaFinalChallengeContext()
        {
        }

        public DiplomaFinalChallengeContext(DbContextOptions<DiplomaFinalChallengeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BasketballGame> BasketballGames { get; set; }
        public virtual DbSet<Member> Members { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=tcp:dip-prac-challenge.database.windows.net;Database=Diploma-Final-Challenge;User ID=Mitch;Password=GemmaH13;Trusted_Connection=False;Encrypt=False;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BasketballGame>(entity =>
            {
                entity.ToTable("BasketballGame");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Booker)
                    .IsRequired()
                    .HasColumnName("booker");

                entity.Property(e => e.Cost)
                    .HasColumnType("money")
                    .HasColumnName("cost");

                entity.Property(e => e.Date)
                    .HasColumnType("datetime")
                    .HasColumnName("date");

                entity.Property(e => e.Shouter).HasColumnName("shouter");

                entity.Property(e => e.Venue)
                    .IsRequired()
                    .HasColumnName("venue");
            });

            modelBuilder.Entity<Member>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password");

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasColumnName("role");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
