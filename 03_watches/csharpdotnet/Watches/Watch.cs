#region

using System;

#endregion

namespace Watches
{
    public class Watch
    {
        private readonly DateTime time;

        public Watch()
        {
            time = TimeProvider.Now();
        }

        private Watch(DateTime time)
        {
            this.time = time;
        }

        public static Watch operator +(Watch w1, Watch w2)
        {
            if (w1 == null) return new Watch(w2.time);
            if (w2 == null) return new Watch(w1.time);
            return
                new Watch(
                    new DateTime(w1.time.Ticks).AddHours(w2.time.Hour)
                        .AddMinutes(w2.time.Minute)
                        .AddSeconds(w2.time.Second));
        }

        private static void Main(string[] args)
        {
        }

        public DateTime WhatTimeIsIt()
        {
            return time;
        }

        public override string ToString()
        {
            // http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx
            return String.Format("It's {0} and {1} {2}, at {3}", time.ToString("hh:mm"), time.ToString("%s"),
                SecondLbl(), time.ToString("d"));
        }

        private string SecondLbl()
        {
            return time.Second == 1 ? "second" : "seconds";
        }
    }
}