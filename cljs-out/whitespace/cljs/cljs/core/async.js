// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34793 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34793 = (function (f,fn_handler,meta34794){
this.f = f;
this.fn_handler = fn_handler;
this.meta34794 = meta34794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34793.cljs$lang$type = true;
cljs.core.async.t34793.cljs$lang$ctorStr = "cljs.core.async/t34793";
cljs.core.async.t34793.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34793");
});
cljs.core.async.t34793.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34795){var self__ = this;
var _34795__$1 = this;return self__.meta34794;
});
cljs.core.async.t34793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34795,meta34794__$1){var self__ = this;
var _34795__$1 = this;return (new cljs.core.async.t34793(self__.f,self__.fn_handler,meta34794__$1));
});
cljs.core.async.__GT_t34793 = (function __GT_t34793(f__$1,fn_handler__$1,meta34794){return (new cljs.core.async.t34793(f__$1,fn_handler__$1,meta34794));
});
}
return (new cljs.core.async.t34793(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34797 = buff;if(G__34797)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34797.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34797.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34797);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34797);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_34798 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34798);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34798);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34799 = n;var x_34800 = 0;while(true){
if((x_34800 < n__4248__auto___34799))
{(a[x_34800] = 0);
{
var G__34801 = (x_34800 + 1);
x_34800 = G__34801;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__34802 = (i + 1);
i = G__34802;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34806 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34806 = (function (flag,alt_flag,meta34807){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34807 = meta34807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34806.cljs$lang$type = true;
cljs.core.async.t34806.cljs$lang$ctorStr = "cljs.core.async/t34806";
cljs.core.async.t34806.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34806");
});
cljs.core.async.t34806.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34808){var self__ = this;
var _34808__$1 = this;return self__.meta34807;
});
cljs.core.async.t34806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34808,meta34807__$1){var self__ = this;
var _34808__$1 = this;return (new cljs.core.async.t34806(self__.flag,self__.alt_flag,meta34807__$1));
});
cljs.core.async.__GT_t34806 = (function __GT_t34806(flag__$1,alt_flag__$1,meta34807){return (new cljs.core.async.t34806(flag__$1,alt_flag__$1,meta34807));
});
}
return (new cljs.core.async.t34806(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34812 = (function (cb,flag,alt_handler,meta34813){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34813 = meta34813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34812.cljs$lang$type = true;
cljs.core.async.t34812.cljs$lang$ctorStr = "cljs.core.async/t34812";
cljs.core.async.t34812.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34812");
});
cljs.core.async.t34812.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34814){var self__ = this;
var _34814__$1 = this;return self__.meta34813;
});
cljs.core.async.t34812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34814,meta34813__$1){var self__ = this;
var _34814__$1 = this;return (new cljs.core.async.t34812(self__.cb,self__.flag,self__.alt_handler,meta34813__$1));
});
cljs.core.async.__GT_t34812 = (function __GT_t34812(cb__$1,flag__$1,alt_handler__$1,meta34813){return (new cljs.core.async.t34812(cb__$1,flag__$1,alt_handler__$1,meta34813));
});
}
return (new cljs.core.async.t34812(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34815_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34815_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__34816 = (i + 1);
i = G__34816;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__34817){var map__34819 = p__34817;var map__34819__$1 = ((cljs.core.seq_QMARK_.call(null,map__34819))?cljs.core.apply.call(null,cljs.core.hash_map,map__34819):map__34819);var opts = map__34819__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34817 = null;if (arguments.length > 1) {
  p__34817 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34817);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34820){
var ports = cljs.core.first(arglist__34820);
var p__34817 = cljs.core.rest(arglist__34820);
return alts_BANG___delegate(ports,p__34817);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34828 = (function (ch,f,map_LT_,meta34829){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34829 = meta34829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34828.cljs$lang$type = true;
cljs.core.async.t34828.cljs$lang$ctorStr = "cljs.core.async/t34828";
cljs.core.async.t34828.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34828");
});
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34831 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34831 = (function (fn1,_,meta34829,ch,f,map_LT_,meta34832){
this.fn1 = fn1;
this._ = _;
this.meta34829 = meta34829;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34832 = meta34832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34831.cljs$lang$type = true;
cljs.core.async.t34831.cljs$lang$ctorStr = "cljs.core.async/t34831";
cljs.core.async.t34831.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34831");
});
cljs.core.async.t34831.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34831.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34821_SHARP_){return f1.call(null,(((p1__34821_SHARP_ == null))?null:self__.f.call(null,p1__34821_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34833){var self__ = this;
var _34833__$1 = this;return self__.meta34832;
});
cljs.core.async.t34831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34833,meta34832__$1){var self__ = this;
var _34833__$1 = this;return (new cljs.core.async.t34831(self__.fn1,self__._,self__.meta34829,self__.ch,self__.f,self__.map_LT_,meta34832__$1));
});
cljs.core.async.__GT_t34831 = (function __GT_t34831(fn1__$1,___$2,meta34829__$1,ch__$2,f__$2,map_LT___$2,meta34832){return (new cljs.core.async.t34831(fn1__$1,___$2,meta34829__$1,ch__$2,f__$2,map_LT___$2,meta34832));
});
}
return (new cljs.core.async.t34831(fn1,___$1,self__.meta34829,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34830){var self__ = this;
var _34830__$1 = this;return self__.meta34829;
});
cljs.core.async.t34828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34830,meta34829__$1){var self__ = this;
var _34830__$1 = this;return (new cljs.core.async.t34828(self__.ch,self__.f,self__.map_LT_,meta34829__$1));
});
cljs.core.async.__GT_t34828 = (function __GT_t34828(ch__$1,f__$1,map_LT___$1,meta34829){return (new cljs.core.async.t34828(ch__$1,f__$1,map_LT___$1,meta34829));
});
}
return (new cljs.core.async.t34828(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34837 = (function (ch,f,map_GT_,meta34838){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34838 = meta34838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34837.cljs$lang$type = true;
cljs.core.async.t34837.cljs$lang$ctorStr = "cljs.core.async/t34837";
cljs.core.async.t34837.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34837");
});
cljs.core.async.t34837.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34837.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34837.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34839){var self__ = this;
var _34839__$1 = this;return self__.meta34838;
});
cljs.core.async.t34837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34839,meta34838__$1){var self__ = this;
var _34839__$1 = this;return (new cljs.core.async.t34837(self__.ch,self__.f,self__.map_GT_,meta34838__$1));
});
cljs.core.async.__GT_t34837 = (function __GT_t34837(ch__$1,f__$1,map_GT___$1,meta34838){return (new cljs.core.async.t34837(ch__$1,f__$1,map_GT___$1,meta34838));
});
}
return (new cljs.core.async.t34837(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34843 = (function (ch,p,filter_GT_,meta34844){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34844 = meta34844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34843.cljs$lang$type = true;
cljs.core.async.t34843.cljs$lang$ctorStr = "cljs.core.async/t34843";
cljs.core.async.t34843.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34843");
});
cljs.core.async.t34843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34843.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34845){var self__ = this;
var _34845__$1 = this;return self__.meta34844;
});
cljs.core.async.t34843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34845,meta34844__$1){var self__ = this;
var _34845__$1 = this;return (new cljs.core.async.t34843(self__.ch,self__.p,self__.filter_GT_,meta34844__$1));
});
cljs.core.async.__GT_t34843 = (function __GT_t34843(ch__$1,p__$1,filter_GT___$1,meta34844){return (new cljs.core.async.t34843(ch__$1,p__$1,filter_GT___$1,meta34844));
});
}
return (new cljs.core.async.t34843(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34907){var state_val_34908 = (state_34907[1]);if((state_val_34908 === 1))
{var state_34907__$1 = state_34907;var statearr_34909_34929 = state_34907__$1;(statearr_34909_34929[2] = null);
(statearr_34909_34929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34908 === 2))
{var state_34907__$1 = state_34907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34907__$1,4,ch);
} else
{if((state_val_34908 === 3))
{var inst_34905 = (state_34907[2]);var state_34907__$1 = state_34907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34907__$1,inst_34905);
} else
{if((state_val_34908 === 4))
{var inst_34889 = (state_34907[7]);var inst_34889__$1 = (state_34907[2]);var inst_34890 = (inst_34889__$1 == null);var state_34907__$1 = (function (){var statearr_34910 = state_34907;(statearr_34910[7] = inst_34889__$1);
return statearr_34910;
})();if(cljs.core.truth_(inst_34890))
{var statearr_34911_34930 = state_34907__$1;(statearr_34911_34930[1] = 5);
} else
{var statearr_34912_34931 = state_34907__$1;(statearr_34912_34931[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34908 === 5))
{var inst_34892 = cljs.core.async.close_BANG_.call(null,out);var state_34907__$1 = state_34907;var statearr_34913_34932 = state_34907__$1;(statearr_34913_34932[2] = inst_34892);
(statearr_34913_34932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34908 === 6))
{var inst_34889 = (state_34907[7]);var inst_34894 = p.call(null,inst_34889);var state_34907__$1 = state_34907;if(cljs.core.truth_(inst_34894))
{var statearr_34914_34933 = state_34907__$1;(statearr_34914_34933[1] = 8);
} else
{var statearr_34915_34934 = state_34907__$1;(statearr_34915_34934[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34908 === 7))
{var inst_34903 = (state_34907[2]);var state_34907__$1 = state_34907;var statearr_34916_34935 = state_34907__$1;(statearr_34916_34935[2] = inst_34903);
(statearr_34916_34935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34908 === 8))
{var inst_34889 = (state_34907[7]);var state_34907__$1 = state_34907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34907__$1,11,out,inst_34889);
} else
{if((state_val_34908 === 9))
{var state_34907__$1 = state_34907;var statearr_34917_34936 = state_34907__$1;(statearr_34917_34936[2] = null);
(statearr_34917_34936[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34908 === 10))
{var inst_34900 = (state_34907[2]);var state_34907__$1 = (function (){var statearr_34918 = state_34907;(statearr_34918[8] = inst_34900);
return statearr_34918;
})();var statearr_34919_34937 = state_34907__$1;(statearr_34919_34937[2] = null);
(statearr_34919_34937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34908 === 11))
{var inst_34897 = (state_34907[2]);var state_34907__$1 = state_34907;var statearr_34920_34938 = state_34907__$1;(statearr_34920_34938[2] = inst_34897);
(statearr_34920_34938[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34924 = [null,null,null,null,null,null,null,null,null];(statearr_34924[0] = state_machine__5507__auto__);
(statearr_34924[1] = 1);
return statearr_34924;
});
var state_machine__5507__auto____1 = (function (state_34907){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34907);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34925){if((e34925 instanceof Object))
{var ex__5510__auto__ = e34925;var statearr_34926_34939 = state_34907;(statearr_34926_34939[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34940 = state_34907;
state_34907 = G__34940;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34907){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34927 = f__5522__auto__.call(null);(statearr_34927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34928);
return statearr_34927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35092){var state_val_35093 = (state_35092[1]);if((state_val_35093 === 1))
{var state_35092__$1 = state_35092;var statearr_35094_35131 = state_35092__$1;(statearr_35094_35131[2] = null);
(statearr_35094_35131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 2))
{var state_35092__$1 = state_35092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35092__$1,4,in$);
} else
{if((state_val_35093 === 3))
{var inst_35090 = (state_35092[2]);var state_35092__$1 = state_35092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35092__$1,inst_35090);
} else
{if((state_val_35093 === 4))
{var inst_35038 = (state_35092[7]);var inst_35038__$1 = (state_35092[2]);var inst_35039 = (inst_35038__$1 == null);var state_35092__$1 = (function (){var statearr_35095 = state_35092;(statearr_35095[7] = inst_35038__$1);
return statearr_35095;
})();if(cljs.core.truth_(inst_35039))
{var statearr_35096_35132 = state_35092__$1;(statearr_35096_35132[1] = 5);
} else
{var statearr_35097_35133 = state_35092__$1;(statearr_35097_35133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 5))
{var inst_35041 = cljs.core.async.close_BANG_.call(null,out);var state_35092__$1 = state_35092;var statearr_35098_35134 = state_35092__$1;(statearr_35098_35134[2] = inst_35041);
(statearr_35098_35134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 6))
{var inst_35038 = (state_35092[7]);var inst_35043 = f.call(null,inst_35038);var inst_35048 = cljs.core.seq.call(null,inst_35043);var inst_35049 = inst_35048;var inst_35050 = null;var inst_35051 = 0;var inst_35052 = 0;var state_35092__$1 = (function (){var statearr_35099 = state_35092;(statearr_35099[8] = inst_35051);
(statearr_35099[9] = inst_35050);
(statearr_35099[10] = inst_35052);
(statearr_35099[11] = inst_35049);
return statearr_35099;
})();var statearr_35100_35135 = state_35092__$1;(statearr_35100_35135[2] = null);
(statearr_35100_35135[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 7))
{var inst_35088 = (state_35092[2]);var state_35092__$1 = state_35092;var statearr_35101_35136 = state_35092__$1;(statearr_35101_35136[2] = inst_35088);
(statearr_35101_35136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 8))
{var inst_35051 = (state_35092[8]);var inst_35052 = (state_35092[10]);var inst_35054 = (inst_35052 < inst_35051);var inst_35055 = inst_35054;var state_35092__$1 = state_35092;if(cljs.core.truth_(inst_35055))
{var statearr_35102_35137 = state_35092__$1;(statearr_35102_35137[1] = 10);
} else
{var statearr_35103_35138 = state_35092__$1;(statearr_35103_35138[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 9))
{var inst_35085 = (state_35092[2]);var state_35092__$1 = (function (){var statearr_35104 = state_35092;(statearr_35104[12] = inst_35085);
return statearr_35104;
})();var statearr_35105_35139 = state_35092__$1;(statearr_35105_35139[2] = null);
(statearr_35105_35139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 10))
{var inst_35050 = (state_35092[9]);var inst_35052 = (state_35092[10]);var inst_35057 = cljs.core._nth.call(null,inst_35050,inst_35052);var state_35092__$1 = state_35092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35092__$1,13,out,inst_35057);
} else
{if((state_val_35093 === 11))
{var inst_35063 = (state_35092[13]);var inst_35049 = (state_35092[11]);var inst_35063__$1 = cljs.core.seq.call(null,inst_35049);var state_35092__$1 = (function (){var statearr_35109 = state_35092;(statearr_35109[13] = inst_35063__$1);
return statearr_35109;
})();if(inst_35063__$1)
{var statearr_35110_35140 = state_35092__$1;(statearr_35110_35140[1] = 14);
} else
{var statearr_35111_35141 = state_35092__$1;(statearr_35111_35141[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 12))
{var inst_35083 = (state_35092[2]);var state_35092__$1 = state_35092;var statearr_35112_35142 = state_35092__$1;(statearr_35112_35142[2] = inst_35083);
(statearr_35112_35142[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 13))
{var inst_35051 = (state_35092[8]);var inst_35050 = (state_35092[9]);var inst_35052 = (state_35092[10]);var inst_35049 = (state_35092[11]);var inst_35059 = (state_35092[2]);var inst_35060 = (inst_35052 + 1);var tmp35106 = inst_35051;var tmp35107 = inst_35050;var tmp35108 = inst_35049;var inst_35049__$1 = tmp35108;var inst_35050__$1 = tmp35107;var inst_35051__$1 = tmp35106;var inst_35052__$1 = inst_35060;var state_35092__$1 = (function (){var statearr_35113 = state_35092;(statearr_35113[8] = inst_35051__$1);
(statearr_35113[9] = inst_35050__$1);
(statearr_35113[10] = inst_35052__$1);
(statearr_35113[14] = inst_35059);
(statearr_35113[11] = inst_35049__$1);
return statearr_35113;
})();var statearr_35114_35143 = state_35092__$1;(statearr_35114_35143[2] = null);
(statearr_35114_35143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 14))
{var inst_35063 = (state_35092[13]);var inst_35065 = cljs.core.chunked_seq_QMARK_.call(null,inst_35063);var state_35092__$1 = state_35092;if(inst_35065)
{var statearr_35115_35144 = state_35092__$1;(statearr_35115_35144[1] = 17);
} else
{var statearr_35116_35145 = state_35092__$1;(statearr_35116_35145[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 15))
{var state_35092__$1 = state_35092;var statearr_35117_35146 = state_35092__$1;(statearr_35117_35146[2] = null);
(statearr_35117_35146[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 16))
{var inst_35081 = (state_35092[2]);var state_35092__$1 = state_35092;var statearr_35118_35147 = state_35092__$1;(statearr_35118_35147[2] = inst_35081);
(statearr_35118_35147[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 17))
{var inst_35063 = (state_35092[13]);var inst_35067 = cljs.core.chunk_first.call(null,inst_35063);var inst_35068 = cljs.core.chunk_rest.call(null,inst_35063);var inst_35069 = cljs.core.count.call(null,inst_35067);var inst_35049 = inst_35068;var inst_35050 = inst_35067;var inst_35051 = inst_35069;var inst_35052 = 0;var state_35092__$1 = (function (){var statearr_35119 = state_35092;(statearr_35119[8] = inst_35051);
(statearr_35119[9] = inst_35050);
(statearr_35119[10] = inst_35052);
(statearr_35119[11] = inst_35049);
return statearr_35119;
})();var statearr_35120_35148 = state_35092__$1;(statearr_35120_35148[2] = null);
(statearr_35120_35148[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 18))
{var inst_35063 = (state_35092[13]);var inst_35072 = cljs.core.first.call(null,inst_35063);var state_35092__$1 = state_35092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35092__$1,20,out,inst_35072);
} else
{if((state_val_35093 === 19))
{var inst_35078 = (state_35092[2]);var state_35092__$1 = state_35092;var statearr_35121_35149 = state_35092__$1;(statearr_35121_35149[2] = inst_35078);
(statearr_35121_35149[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35093 === 20))
{var inst_35063 = (state_35092[13]);var inst_35074 = (state_35092[2]);var inst_35075 = cljs.core.next.call(null,inst_35063);var inst_35049 = inst_35075;var inst_35050 = null;var inst_35051 = 0;var inst_35052 = 0;var state_35092__$1 = (function (){var statearr_35122 = state_35092;(statearr_35122[8] = inst_35051);
(statearr_35122[9] = inst_35050);
(statearr_35122[10] = inst_35052);
(statearr_35122[11] = inst_35049);
(statearr_35122[15] = inst_35074);
return statearr_35122;
})();var statearr_35123_35150 = state_35092__$1;(statearr_35123_35150[2] = null);
(statearr_35123_35150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35127[0] = state_machine__5507__auto__);
(statearr_35127[1] = 1);
return statearr_35127;
});
var state_machine__5507__auto____1 = (function (state_35092){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35092);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35128){if((e35128 instanceof Object))
{var ex__5510__auto__ = e35128;var statearr_35129_35151 = state_35092;(statearr_35129_35151[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35092);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35152 = state_35092;
state_35092 = G__35152;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35092){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35130 = f__5522__auto__.call(null);(statearr_35130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___35233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35212){var state_val_35213 = (state_35212[1]);if((state_val_35213 === 1))
{var state_35212__$1 = state_35212;var statearr_35214_35234 = state_35212__$1;(statearr_35214_35234[2] = null);
(statearr_35214_35234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35213 === 2))
{var state_35212__$1 = state_35212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35212__$1,4,from);
} else
{if((state_val_35213 === 3))
{var inst_35210 = (state_35212[2]);var state_35212__$1 = state_35212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35212__$1,inst_35210);
} else
{if((state_val_35213 === 4))
{var inst_35195 = (state_35212[7]);var inst_35195__$1 = (state_35212[2]);var inst_35196 = (inst_35195__$1 == null);var state_35212__$1 = (function (){var statearr_35215 = state_35212;(statearr_35215[7] = inst_35195__$1);
return statearr_35215;
})();if(cljs.core.truth_(inst_35196))
{var statearr_35216_35235 = state_35212__$1;(statearr_35216_35235[1] = 5);
} else
{var statearr_35217_35236 = state_35212__$1;(statearr_35217_35236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35213 === 5))
{var state_35212__$1 = state_35212;if(cljs.core.truth_(close_QMARK_))
{var statearr_35218_35237 = state_35212__$1;(statearr_35218_35237[1] = 8);
} else
{var statearr_35219_35238 = state_35212__$1;(statearr_35219_35238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35213 === 6))
{var inst_35195 = (state_35212[7]);var state_35212__$1 = state_35212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35212__$1,11,to,inst_35195);
} else
{if((state_val_35213 === 7))
{var inst_35208 = (state_35212[2]);var state_35212__$1 = state_35212;var statearr_35220_35239 = state_35212__$1;(statearr_35220_35239[2] = inst_35208);
(statearr_35220_35239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35213 === 8))
{var inst_35199 = cljs.core.async.close_BANG_.call(null,to);var state_35212__$1 = state_35212;var statearr_35221_35240 = state_35212__$1;(statearr_35221_35240[2] = inst_35199);
(statearr_35221_35240[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35213 === 9))
{var state_35212__$1 = state_35212;var statearr_35222_35241 = state_35212__$1;(statearr_35222_35241[2] = null);
(statearr_35222_35241[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35213 === 10))
{var inst_35202 = (state_35212[2]);var state_35212__$1 = state_35212;var statearr_35223_35242 = state_35212__$1;(statearr_35223_35242[2] = inst_35202);
(statearr_35223_35242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35213 === 11))
{var inst_35205 = (state_35212[2]);var state_35212__$1 = (function (){var statearr_35224 = state_35212;(statearr_35224[8] = inst_35205);
return statearr_35224;
})();var statearr_35225_35243 = state_35212__$1;(statearr_35225_35243[2] = null);
(statearr_35225_35243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35229 = [null,null,null,null,null,null,null,null,null];(statearr_35229[0] = state_machine__5507__auto__);
(statearr_35229[1] = 1);
return statearr_35229;
});
var state_machine__5507__auto____1 = (function (state_35212){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35212);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35230){if((e35230 instanceof Object))
{var ex__5510__auto__ = e35230;var statearr_35231_35244 = state_35212;(statearr_35231_35244[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35245 = state_35212;
state_35212 = G__35245;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35212){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35232 = f__5522__auto__.call(null);(statearr_35232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35233);
return statearr_35232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35332 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35310){var state_val_35311 = (state_35310[1]);if((state_val_35311 === 1))
{var state_35310__$1 = state_35310;var statearr_35312_35333 = state_35310__$1;(statearr_35312_35333[2] = null);
(statearr_35312_35333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 2))
{var state_35310__$1 = state_35310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35310__$1,4,ch);
} else
{if((state_val_35311 === 3))
{var inst_35308 = (state_35310[2]);var state_35310__$1 = state_35310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35310__$1,inst_35308);
} else
{if((state_val_35311 === 4))
{var inst_35291 = (state_35310[7]);var inst_35291__$1 = (state_35310[2]);var inst_35292 = (inst_35291__$1 == null);var state_35310__$1 = (function (){var statearr_35313 = state_35310;(statearr_35313[7] = inst_35291__$1);
return statearr_35313;
})();if(cljs.core.truth_(inst_35292))
{var statearr_35314_35334 = state_35310__$1;(statearr_35314_35334[1] = 5);
} else
{var statearr_35315_35335 = state_35310__$1;(statearr_35315_35335[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 5))
{var inst_35294 = cljs.core.async.close_BANG_.call(null,tc);var inst_35295 = cljs.core.async.close_BANG_.call(null,fc);var state_35310__$1 = (function (){var statearr_35316 = state_35310;(statearr_35316[8] = inst_35294);
return statearr_35316;
})();var statearr_35317_35336 = state_35310__$1;(statearr_35317_35336[2] = inst_35295);
(statearr_35317_35336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 6))
{var inst_35291 = (state_35310[7]);var inst_35297 = p.call(null,inst_35291);var state_35310__$1 = state_35310;if(cljs.core.truth_(inst_35297))
{var statearr_35318_35337 = state_35310__$1;(statearr_35318_35337[1] = 9);
} else
{var statearr_35319_35338 = state_35310__$1;(statearr_35319_35338[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 7))
{var inst_35306 = (state_35310[2]);var state_35310__$1 = state_35310;var statearr_35320_35339 = state_35310__$1;(statearr_35320_35339[2] = inst_35306);
(statearr_35320_35339[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 8))
{var inst_35303 = (state_35310[2]);var state_35310__$1 = (function (){var statearr_35321 = state_35310;(statearr_35321[9] = inst_35303);
return statearr_35321;
})();var statearr_35322_35340 = state_35310__$1;(statearr_35322_35340[2] = null);
(statearr_35322_35340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 9))
{var state_35310__$1 = state_35310;var statearr_35323_35341 = state_35310__$1;(statearr_35323_35341[2] = tc);
(statearr_35323_35341[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 10))
{var state_35310__$1 = state_35310;var statearr_35324_35342 = state_35310__$1;(statearr_35324_35342[2] = fc);
(statearr_35324_35342[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35311 === 11))
{var inst_35291 = (state_35310[7]);var inst_35301 = (state_35310[2]);var state_35310__$1 = state_35310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35310__$1,8,inst_35301,inst_35291);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35328 = [null,null,null,null,null,null,null,null,null,null];(statearr_35328[0] = state_machine__5507__auto__);
(statearr_35328[1] = 1);
return statearr_35328;
});
var state_machine__5507__auto____1 = (function (state_35310){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35310);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35329){if((e35329 instanceof Object))
{var ex__5510__auto__ = e35329;var statearr_35330_35343 = state_35310;(statearr_35330_35343[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35344 = state_35310;
state_35310 = G__35344;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35310){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35331 = f__5522__auto__.call(null);(statearr_35331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35332);
return statearr_35331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35391){var state_val_35392 = (state_35391[1]);if((state_val_35392 === 7))
{var inst_35387 = (state_35391[2]);var state_35391__$1 = state_35391;var statearr_35393_35409 = state_35391__$1;(statearr_35393_35409[2] = inst_35387);
(statearr_35393_35409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35392 === 6))
{var inst_35380 = (state_35391[7]);var inst_35377 = (state_35391[8]);var inst_35384 = f.call(null,inst_35377,inst_35380);var inst_35377__$1 = inst_35384;var state_35391__$1 = (function (){var statearr_35394 = state_35391;(statearr_35394[8] = inst_35377__$1);
return statearr_35394;
})();var statearr_35395_35410 = state_35391__$1;(statearr_35395_35410[2] = null);
(statearr_35395_35410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35392 === 5))
{var inst_35377 = (state_35391[8]);var state_35391__$1 = state_35391;var statearr_35396_35411 = state_35391__$1;(statearr_35396_35411[2] = inst_35377);
(statearr_35396_35411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35392 === 4))
{var inst_35380 = (state_35391[7]);var inst_35380__$1 = (state_35391[2]);var inst_35381 = (inst_35380__$1 == null);var state_35391__$1 = (function (){var statearr_35397 = state_35391;(statearr_35397[7] = inst_35380__$1);
return statearr_35397;
})();if(cljs.core.truth_(inst_35381))
{var statearr_35398_35412 = state_35391__$1;(statearr_35398_35412[1] = 5);
} else
{var statearr_35399_35413 = state_35391__$1;(statearr_35399_35413[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35392 === 3))
{var inst_35389 = (state_35391[2]);var state_35391__$1 = state_35391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35391__$1,inst_35389);
} else
{if((state_val_35392 === 2))
{var state_35391__$1 = state_35391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35391__$1,4,ch);
} else
{if((state_val_35392 === 1))
{var inst_35377 = init;var state_35391__$1 = (function (){var statearr_35400 = state_35391;(statearr_35400[8] = inst_35377);
return statearr_35400;
})();var statearr_35401_35414 = state_35391__$1;(statearr_35401_35414[2] = null);
(statearr_35401_35414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35405 = [null,null,null,null,null,null,null,null,null];(statearr_35405[0] = state_machine__5507__auto__);
(statearr_35405[1] = 1);
return statearr_35405;
});
var state_machine__5507__auto____1 = (function (state_35391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35406){if((e35406 instanceof Object))
{var ex__5510__auto__ = e35406;var statearr_35407_35415 = state_35391;(statearr_35407_35415[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35416 = state_35391;
state_35391 = G__35416;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35408 = f__5522__auto__.call(null);(statearr_35408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35478){var state_val_35479 = (state_35478[1]);if((state_val_35479 === 1))
{var inst_35458 = cljs.core.seq.call(null,coll);var inst_35459 = inst_35458;var state_35478__$1 = (function (){var statearr_35480 = state_35478;(statearr_35480[7] = inst_35459);
return statearr_35480;
})();var statearr_35481_35499 = state_35478__$1;(statearr_35481_35499[2] = null);
(statearr_35481_35499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 2))
{var inst_35459 = (state_35478[7]);var state_35478__$1 = state_35478;if(cljs.core.truth_(inst_35459))
{var statearr_35482_35500 = state_35478__$1;(statearr_35482_35500[1] = 4);
} else
{var statearr_35483_35501 = state_35478__$1;(statearr_35483_35501[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 3))
{var inst_35476 = (state_35478[2]);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35478__$1,inst_35476);
} else
{if((state_val_35479 === 4))
{var inst_35459 = (state_35478[7]);var inst_35462 = cljs.core.first.call(null,inst_35459);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35478__$1,7,ch,inst_35462);
} else
{if((state_val_35479 === 5))
{var state_35478__$1 = state_35478;if(cljs.core.truth_(close_QMARK_))
{var statearr_35484_35502 = state_35478__$1;(statearr_35484_35502[1] = 8);
} else
{var statearr_35485_35503 = state_35478__$1;(statearr_35485_35503[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 6))
{var inst_35474 = (state_35478[2]);var state_35478__$1 = state_35478;var statearr_35486_35504 = state_35478__$1;(statearr_35486_35504[2] = inst_35474);
(statearr_35486_35504[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 7))
{var inst_35459 = (state_35478[7]);var inst_35464 = (state_35478[2]);var inst_35465 = cljs.core.next.call(null,inst_35459);var inst_35459__$1 = inst_35465;var state_35478__$1 = (function (){var statearr_35487 = state_35478;(statearr_35487[7] = inst_35459__$1);
(statearr_35487[8] = inst_35464);
return statearr_35487;
})();var statearr_35488_35505 = state_35478__$1;(statearr_35488_35505[2] = null);
(statearr_35488_35505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 8))
{var inst_35469 = cljs.core.async.close_BANG_.call(null,ch);var state_35478__$1 = state_35478;var statearr_35489_35506 = state_35478__$1;(statearr_35489_35506[2] = inst_35469);
(statearr_35489_35506[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 9))
{var state_35478__$1 = state_35478;var statearr_35490_35507 = state_35478__$1;(statearr_35490_35507[2] = null);
(statearr_35490_35507[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 10))
{var inst_35472 = (state_35478[2]);var state_35478__$1 = state_35478;var statearr_35491_35508 = state_35478__$1;(statearr_35491_35508[2] = inst_35472);
(statearr_35491_35508[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35495 = [null,null,null,null,null,null,null,null,null];(statearr_35495[0] = state_machine__5507__auto__);
(statearr_35495[1] = 1);
return statearr_35495;
});
var state_machine__5507__auto____1 = (function (state_35478){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35496){if((e35496 instanceof Object))
{var ex__5510__auto__ = e35496;var statearr_35497_35509 = state_35478;(statearr_35497_35509[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35510 = state_35478;
state_35478 = G__35510;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35478){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35498 = f__5522__auto__.call(null);(statearr_35498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj35512 = {};return obj35512;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj35514 = {};return obj35514;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35738 = (function (cs,ch,mult,meta35739){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35739 = meta35739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35738.cljs$lang$type = true;
cljs.core.async.t35738.cljs$lang$ctorStr = "cljs.core.async/t35738";
cljs.core.async.t35738.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35738");
});})(cs))
;
cljs.core.async.t35738.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35738.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35738.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35738.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35738.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35740){var self__ = this;
var _35740__$1 = this;return self__.meta35739;
});})(cs))
;
cljs.core.async.t35738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35740,meta35739__$1){var self__ = this;
var _35740__$1 = this;return (new cljs.core.async.t35738(self__.cs,self__.ch,self__.mult,meta35739__$1));
});})(cs))
;
cljs.core.async.__GT_t35738 = ((function (cs){
return (function __GT_t35738(cs__$1,ch__$1,mult__$1,meta35739){return (new cljs.core.async.t35738(cs__$1,ch__$1,mult__$1,meta35739));
});})(cs))
;
}
return (new cljs.core.async.t35738(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___35961 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35875){var state_val_35876 = (state_35875[1]);if((state_val_35876 === 32))
{var inst_35743 = (state_35875[7]);var inst_35819 = (state_35875[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35875,31,Object,null,30);var inst_35826 = cljs.core.async.put_BANG_.call(null,inst_35819,inst_35743,done);var state_35875__$1 = state_35875;var statearr_35877_35962 = state_35875__$1;(statearr_35877_35962[2] = inst_35826);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 1))
{var state_35875__$1 = state_35875;var statearr_35878_35963 = state_35875__$1;(statearr_35878_35963[2] = null);
(statearr_35878_35963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 33))
{var inst_35832 = (state_35875[9]);var inst_35834 = cljs.core.chunked_seq_QMARK_.call(null,inst_35832);var state_35875__$1 = state_35875;if(inst_35834)
{var statearr_35879_35964 = state_35875__$1;(statearr_35879_35964[1] = 36);
} else
{var statearr_35880_35965 = state_35875__$1;(statearr_35880_35965[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 2))
{var state_35875__$1 = state_35875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35875__$1,4,ch);
} else
{if((state_val_35876 === 34))
{var state_35875__$1 = state_35875;var statearr_35881_35966 = state_35875__$1;(statearr_35881_35966[2] = null);
(statearr_35881_35966[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 3))
{var inst_35873 = (state_35875[2]);var state_35875__$1 = state_35875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35875__$1,inst_35873);
} else
{if((state_val_35876 === 35))
{var inst_35857 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35882_35967 = state_35875__$1;(statearr_35882_35967[2] = inst_35857);
(statearr_35882_35967[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 4))
{var inst_35743 = (state_35875[7]);var inst_35743__$1 = (state_35875[2]);var inst_35744 = (inst_35743__$1 == null);var state_35875__$1 = (function (){var statearr_35883 = state_35875;(statearr_35883[7] = inst_35743__$1);
return statearr_35883;
})();if(cljs.core.truth_(inst_35744))
{var statearr_35884_35968 = state_35875__$1;(statearr_35884_35968[1] = 5);
} else
{var statearr_35885_35969 = state_35875__$1;(statearr_35885_35969[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 36))
{var inst_35832 = (state_35875[9]);var inst_35836 = cljs.core.chunk_first.call(null,inst_35832);var inst_35837 = cljs.core.chunk_rest.call(null,inst_35832);var inst_35838 = cljs.core.count.call(null,inst_35836);var inst_35811 = inst_35837;var inst_35812 = inst_35836;var inst_35813 = inst_35838;var inst_35814 = 0;var state_35875__$1 = (function (){var statearr_35886 = state_35875;(statearr_35886[10] = inst_35811);
(statearr_35886[11] = inst_35812);
(statearr_35886[12] = inst_35813);
(statearr_35886[13] = inst_35814);
return statearr_35886;
})();var statearr_35887_35970 = state_35875__$1;(statearr_35887_35970[2] = null);
(statearr_35887_35970[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 5))
{var inst_35750 = cljs.core.deref.call(null,cs);var inst_35751 = cljs.core.seq.call(null,inst_35750);var inst_35752 = inst_35751;var inst_35753 = null;var inst_35754 = 0;var inst_35755 = 0;var state_35875__$1 = (function (){var statearr_35888 = state_35875;(statearr_35888[14] = inst_35755);
(statearr_35888[15] = inst_35754);
(statearr_35888[16] = inst_35753);
(statearr_35888[17] = inst_35752);
return statearr_35888;
})();var statearr_35889_35971 = state_35875__$1;(statearr_35889_35971[2] = null);
(statearr_35889_35971[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 37))
{var inst_35832 = (state_35875[9]);var inst_35841 = cljs.core.first.call(null,inst_35832);var state_35875__$1 = (function (){var statearr_35890 = state_35875;(statearr_35890[18] = inst_35841);
return statearr_35890;
})();var statearr_35891_35972 = state_35875__$1;(statearr_35891_35972[2] = null);
(statearr_35891_35972[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 6))
{var inst_35803 = (state_35875[19]);var inst_35802 = cljs.core.deref.call(null,cs);var inst_35803__$1 = cljs.core.keys.call(null,inst_35802);var inst_35804 = cljs.core.count.call(null,inst_35803__$1);var inst_35805 = cljs.core.reset_BANG_.call(null,dctr,inst_35804);var inst_35810 = cljs.core.seq.call(null,inst_35803__$1);var inst_35811 = inst_35810;var inst_35812 = null;var inst_35813 = 0;var inst_35814 = 0;var state_35875__$1 = (function (){var statearr_35892 = state_35875;(statearr_35892[10] = inst_35811);
(statearr_35892[11] = inst_35812);
(statearr_35892[12] = inst_35813);
(statearr_35892[19] = inst_35803__$1);
(statearr_35892[20] = inst_35805);
(statearr_35892[13] = inst_35814);
return statearr_35892;
})();var statearr_35893_35973 = state_35875__$1;(statearr_35893_35973[2] = null);
(statearr_35893_35973[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 38))
{var inst_35854 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35894_35974 = state_35875__$1;(statearr_35894_35974[2] = inst_35854);
(statearr_35894_35974[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 7))
{var inst_35871 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35895_35975 = state_35875__$1;(statearr_35895_35975[2] = inst_35871);
(statearr_35895_35975[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 39))
{var inst_35832 = (state_35875[9]);var inst_35850 = (state_35875[2]);var inst_35851 = cljs.core.next.call(null,inst_35832);var inst_35811 = inst_35851;var inst_35812 = null;var inst_35813 = 0;var inst_35814 = 0;var state_35875__$1 = (function (){var statearr_35896 = state_35875;(statearr_35896[10] = inst_35811);
(statearr_35896[11] = inst_35812);
(statearr_35896[12] = inst_35813);
(statearr_35896[21] = inst_35850);
(statearr_35896[13] = inst_35814);
return statearr_35896;
})();var statearr_35897_35976 = state_35875__$1;(statearr_35897_35976[2] = null);
(statearr_35897_35976[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 8))
{var inst_35755 = (state_35875[14]);var inst_35754 = (state_35875[15]);var inst_35757 = (inst_35755 < inst_35754);var inst_35758 = inst_35757;var state_35875__$1 = state_35875;if(cljs.core.truth_(inst_35758))
{var statearr_35898_35977 = state_35875__$1;(statearr_35898_35977[1] = 10);
} else
{var statearr_35899_35978 = state_35875__$1;(statearr_35899_35978[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 40))
{var inst_35841 = (state_35875[18]);var inst_35842 = (state_35875[2]);var inst_35843 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35844 = cljs.core.async.untap_STAR_.call(null,m,inst_35841);var state_35875__$1 = (function (){var statearr_35900 = state_35875;(statearr_35900[22] = inst_35843);
(statearr_35900[23] = inst_35842);
return statearr_35900;
})();var statearr_35901_35979 = state_35875__$1;(statearr_35901_35979[2] = inst_35844);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 9))
{var inst_35800 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35902_35980 = state_35875__$1;(statearr_35902_35980[2] = inst_35800);
(statearr_35902_35980[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 41))
{var inst_35743 = (state_35875[7]);var inst_35841 = (state_35875[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35875,40,Object,null,39);var inst_35848 = cljs.core.async.put_BANG_.call(null,inst_35841,inst_35743,done);var state_35875__$1 = state_35875;var statearr_35903_35981 = state_35875__$1;(statearr_35903_35981[2] = inst_35848);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 10))
{var inst_35755 = (state_35875[14]);var inst_35753 = (state_35875[16]);var inst_35761 = cljs.core._nth.call(null,inst_35753,inst_35755);var inst_35762 = cljs.core.nth.call(null,inst_35761,0,null);var inst_35763 = cljs.core.nth.call(null,inst_35761,1,null);var state_35875__$1 = (function (){var statearr_35904 = state_35875;(statearr_35904[24] = inst_35762);
return statearr_35904;
})();if(cljs.core.truth_(inst_35763))
{var statearr_35905_35982 = state_35875__$1;(statearr_35905_35982[1] = 13);
} else
{var statearr_35906_35983 = state_35875__$1;(statearr_35906_35983[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 42))
{var state_35875__$1 = state_35875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35875__$1,45,dchan);
} else
{if((state_val_35876 === 11))
{var inst_35772 = (state_35875[25]);var inst_35752 = (state_35875[17]);var inst_35772__$1 = cljs.core.seq.call(null,inst_35752);var state_35875__$1 = (function (){var statearr_35907 = state_35875;(statearr_35907[25] = inst_35772__$1);
return statearr_35907;
})();if(inst_35772__$1)
{var statearr_35908_35984 = state_35875__$1;(statearr_35908_35984[1] = 16);
} else
{var statearr_35909_35985 = state_35875__$1;(statearr_35909_35985[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 43))
{var state_35875__$1 = state_35875;var statearr_35910_35986 = state_35875__$1;(statearr_35910_35986[2] = null);
(statearr_35910_35986[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 12))
{var inst_35798 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35911_35987 = state_35875__$1;(statearr_35911_35987[2] = inst_35798);
(statearr_35911_35987[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 44))
{var inst_35868 = (state_35875[2]);var state_35875__$1 = (function (){var statearr_35912 = state_35875;(statearr_35912[26] = inst_35868);
return statearr_35912;
})();var statearr_35913_35988 = state_35875__$1;(statearr_35913_35988[2] = null);
(statearr_35913_35988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 13))
{var inst_35762 = (state_35875[24]);var inst_35765 = cljs.core.async.close_BANG_.call(null,inst_35762);var state_35875__$1 = state_35875;var statearr_35914_35989 = state_35875__$1;(statearr_35914_35989[2] = inst_35765);
(statearr_35914_35989[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 45))
{var inst_35865 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35918_35990 = state_35875__$1;(statearr_35918_35990[2] = inst_35865);
(statearr_35918_35990[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 14))
{var state_35875__$1 = state_35875;var statearr_35919_35991 = state_35875__$1;(statearr_35919_35991[2] = null);
(statearr_35919_35991[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 15))
{var inst_35755 = (state_35875[14]);var inst_35754 = (state_35875[15]);var inst_35753 = (state_35875[16]);var inst_35752 = (state_35875[17]);var inst_35768 = (state_35875[2]);var inst_35769 = (inst_35755 + 1);var tmp35915 = inst_35754;var tmp35916 = inst_35753;var tmp35917 = inst_35752;var inst_35752__$1 = tmp35917;var inst_35753__$1 = tmp35916;var inst_35754__$1 = tmp35915;var inst_35755__$1 = inst_35769;var state_35875__$1 = (function (){var statearr_35920 = state_35875;(statearr_35920[27] = inst_35768);
(statearr_35920[14] = inst_35755__$1);
(statearr_35920[15] = inst_35754__$1);
(statearr_35920[16] = inst_35753__$1);
(statearr_35920[17] = inst_35752__$1);
return statearr_35920;
})();var statearr_35921_35992 = state_35875__$1;(statearr_35921_35992[2] = null);
(statearr_35921_35992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 16))
{var inst_35772 = (state_35875[25]);var inst_35774 = cljs.core.chunked_seq_QMARK_.call(null,inst_35772);var state_35875__$1 = state_35875;if(inst_35774)
{var statearr_35922_35993 = state_35875__$1;(statearr_35922_35993[1] = 19);
} else
{var statearr_35923_35994 = state_35875__$1;(statearr_35923_35994[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 17))
{var state_35875__$1 = state_35875;var statearr_35924_35995 = state_35875__$1;(statearr_35924_35995[2] = null);
(statearr_35924_35995[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 18))
{var inst_35796 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35925_35996 = state_35875__$1;(statearr_35925_35996[2] = inst_35796);
(statearr_35925_35996[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 19))
{var inst_35772 = (state_35875[25]);var inst_35776 = cljs.core.chunk_first.call(null,inst_35772);var inst_35777 = cljs.core.chunk_rest.call(null,inst_35772);var inst_35778 = cljs.core.count.call(null,inst_35776);var inst_35752 = inst_35777;var inst_35753 = inst_35776;var inst_35754 = inst_35778;var inst_35755 = 0;var state_35875__$1 = (function (){var statearr_35926 = state_35875;(statearr_35926[14] = inst_35755);
(statearr_35926[15] = inst_35754);
(statearr_35926[16] = inst_35753);
(statearr_35926[17] = inst_35752);
return statearr_35926;
})();var statearr_35927_35997 = state_35875__$1;(statearr_35927_35997[2] = null);
(statearr_35927_35997[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 20))
{var inst_35772 = (state_35875[25]);var inst_35782 = cljs.core.first.call(null,inst_35772);var inst_35783 = cljs.core.nth.call(null,inst_35782,0,null);var inst_35784 = cljs.core.nth.call(null,inst_35782,1,null);var state_35875__$1 = (function (){var statearr_35928 = state_35875;(statearr_35928[28] = inst_35783);
return statearr_35928;
})();if(cljs.core.truth_(inst_35784))
{var statearr_35929_35998 = state_35875__$1;(statearr_35929_35998[1] = 22);
} else
{var statearr_35930_35999 = state_35875__$1;(statearr_35930_35999[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 21))
{var inst_35793 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35931_36000 = state_35875__$1;(statearr_35931_36000[2] = inst_35793);
(statearr_35931_36000[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 22))
{var inst_35783 = (state_35875[28]);var inst_35786 = cljs.core.async.close_BANG_.call(null,inst_35783);var state_35875__$1 = state_35875;var statearr_35932_36001 = state_35875__$1;(statearr_35932_36001[2] = inst_35786);
(statearr_35932_36001[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 23))
{var state_35875__$1 = state_35875;var statearr_35933_36002 = state_35875__$1;(statearr_35933_36002[2] = null);
(statearr_35933_36002[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 24))
{var inst_35772 = (state_35875[25]);var inst_35789 = (state_35875[2]);var inst_35790 = cljs.core.next.call(null,inst_35772);var inst_35752 = inst_35790;var inst_35753 = null;var inst_35754 = 0;var inst_35755 = 0;var state_35875__$1 = (function (){var statearr_35934 = state_35875;(statearr_35934[14] = inst_35755);
(statearr_35934[15] = inst_35754);
(statearr_35934[16] = inst_35753);
(statearr_35934[29] = inst_35789);
(statearr_35934[17] = inst_35752);
return statearr_35934;
})();var statearr_35935_36003 = state_35875__$1;(statearr_35935_36003[2] = null);
(statearr_35935_36003[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 25))
{var inst_35813 = (state_35875[12]);var inst_35814 = (state_35875[13]);var inst_35816 = (inst_35814 < inst_35813);var inst_35817 = inst_35816;var state_35875__$1 = state_35875;if(cljs.core.truth_(inst_35817))
{var statearr_35936_36004 = state_35875__$1;(statearr_35936_36004[1] = 27);
} else
{var statearr_35937_36005 = state_35875__$1;(statearr_35937_36005[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 26))
{var inst_35803 = (state_35875[19]);var inst_35861 = (state_35875[2]);var inst_35862 = cljs.core.seq.call(null,inst_35803);var state_35875__$1 = (function (){var statearr_35938 = state_35875;(statearr_35938[30] = inst_35861);
return statearr_35938;
})();if(inst_35862)
{var statearr_35939_36006 = state_35875__$1;(statearr_35939_36006[1] = 42);
} else
{var statearr_35940_36007 = state_35875__$1;(statearr_35940_36007[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 27))
{var inst_35812 = (state_35875[11]);var inst_35814 = (state_35875[13]);var inst_35819 = cljs.core._nth.call(null,inst_35812,inst_35814);var state_35875__$1 = (function (){var statearr_35941 = state_35875;(statearr_35941[8] = inst_35819);
return statearr_35941;
})();var statearr_35942_36008 = state_35875__$1;(statearr_35942_36008[2] = null);
(statearr_35942_36008[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 28))
{var inst_35811 = (state_35875[10]);var inst_35832 = (state_35875[9]);var inst_35832__$1 = cljs.core.seq.call(null,inst_35811);var state_35875__$1 = (function (){var statearr_35946 = state_35875;(statearr_35946[9] = inst_35832__$1);
return statearr_35946;
})();if(inst_35832__$1)
{var statearr_35947_36009 = state_35875__$1;(statearr_35947_36009[1] = 33);
} else
{var statearr_35948_36010 = state_35875__$1;(statearr_35948_36010[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 29))
{var inst_35859 = (state_35875[2]);var state_35875__$1 = state_35875;var statearr_35949_36011 = state_35875__$1;(statearr_35949_36011[2] = inst_35859);
(statearr_35949_36011[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 30))
{var inst_35811 = (state_35875[10]);var inst_35812 = (state_35875[11]);var inst_35813 = (state_35875[12]);var inst_35814 = (state_35875[13]);var inst_35828 = (state_35875[2]);var inst_35829 = (inst_35814 + 1);var tmp35943 = inst_35811;var tmp35944 = inst_35812;var tmp35945 = inst_35813;var inst_35811__$1 = tmp35943;var inst_35812__$1 = tmp35944;var inst_35813__$1 = tmp35945;var inst_35814__$1 = inst_35829;var state_35875__$1 = (function (){var statearr_35950 = state_35875;(statearr_35950[31] = inst_35828);
(statearr_35950[10] = inst_35811__$1);
(statearr_35950[11] = inst_35812__$1);
(statearr_35950[12] = inst_35813__$1);
(statearr_35950[13] = inst_35814__$1);
return statearr_35950;
})();var statearr_35951_36012 = state_35875__$1;(statearr_35951_36012[2] = null);
(statearr_35951_36012[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35876 === 31))
{var inst_35819 = (state_35875[8]);var inst_35820 = (state_35875[2]);var inst_35821 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35822 = cljs.core.async.untap_STAR_.call(null,m,inst_35819);var state_35875__$1 = (function (){var statearr_35952 = state_35875;(statearr_35952[32] = inst_35820);
(statearr_35952[33] = inst_35821);
return statearr_35952;
})();var statearr_35953_36013 = state_35875__$1;(statearr_35953_36013[2] = inst_35822);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35957[0] = state_machine__5507__auto__);
(statearr_35957[1] = 1);
return statearr_35957;
});
var state_machine__5507__auto____1 = (function (state_35875){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35875);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35958){if((e35958 instanceof Object))
{var ex__5510__auto__ = e35958;var statearr_35959_36014 = state_35875;(statearr_35959_36014[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36015 = state_35875;
state_35875 = G__36015;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35875){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35960 = f__5522__auto__.call(null);(statearr_35960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35961);
return statearr_35960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj36017 = {};return obj36017;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t36127 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36127 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36128){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta36128 = meta36128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36127.cljs$lang$type = true;
cljs.core.async.t36127.cljs$lang$ctorStr = "cljs.core.async/t36127";
cljs.core.async.t36127.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36127");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36127.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36129){var self__ = this;
var _36129__$1 = this;return self__.meta36128;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36129,meta36128__$1){var self__ = this;
var _36129__$1 = this;return (new cljs.core.async.t36127(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36128__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36127 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36127(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36128){return (new cljs.core.async.t36127(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36128));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36127(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___36236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36194){var state_val_36195 = (state_36194[1]);if((state_val_36195 === 1))
{var inst_36133 = (state_36194[7]);var inst_36133__$1 = calc_state.call(null);var inst_36134 = cljs.core.seq_QMARK_.call(null,inst_36133__$1);var state_36194__$1 = (function (){var statearr_36196 = state_36194;(statearr_36196[7] = inst_36133__$1);
return statearr_36196;
})();if(inst_36134)
{var statearr_36197_36237 = state_36194__$1;(statearr_36197_36237[1] = 2);
} else
{var statearr_36198_36238 = state_36194__$1;(statearr_36198_36238[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 2))
{var inst_36133 = (state_36194[7]);var inst_36136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36133);var state_36194__$1 = state_36194;var statearr_36199_36239 = state_36194__$1;(statearr_36199_36239[2] = inst_36136);
(statearr_36199_36239[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 3))
{var inst_36133 = (state_36194[7]);var state_36194__$1 = state_36194;var statearr_36200_36240 = state_36194__$1;(statearr_36200_36240[2] = inst_36133);
(statearr_36200_36240[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 4))
{var inst_36133 = (state_36194[7]);var inst_36139 = (state_36194[2]);var inst_36140 = cljs.core.get.call(null,inst_36139,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36141 = cljs.core.get.call(null,inst_36139,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36142 = cljs.core.get.call(null,inst_36139,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36143 = inst_36133;var state_36194__$1 = (function (){var statearr_36201 = state_36194;(statearr_36201[8] = inst_36143);
(statearr_36201[9] = inst_36140);
(statearr_36201[10] = inst_36142);
(statearr_36201[11] = inst_36141);
return statearr_36201;
})();var statearr_36202_36241 = state_36194__$1;(statearr_36202_36241[2] = null);
(statearr_36202_36241[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 5))
{var inst_36143 = (state_36194[8]);var inst_36146 = cljs.core.seq_QMARK_.call(null,inst_36143);var state_36194__$1 = state_36194;if(inst_36146)
{var statearr_36203_36242 = state_36194__$1;(statearr_36203_36242[1] = 7);
} else
{var statearr_36204_36243 = state_36194__$1;(statearr_36204_36243[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 6))
{var inst_36192 = (state_36194[2]);var state_36194__$1 = state_36194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36194__$1,inst_36192);
} else
{if((state_val_36195 === 7))
{var inst_36143 = (state_36194[8]);var inst_36148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36143);var state_36194__$1 = state_36194;var statearr_36205_36244 = state_36194__$1;(statearr_36205_36244[2] = inst_36148);
(statearr_36205_36244[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 8))
{var inst_36143 = (state_36194[8]);var state_36194__$1 = state_36194;var statearr_36206_36245 = state_36194__$1;(statearr_36206_36245[2] = inst_36143);
(statearr_36206_36245[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 9))
{var inst_36151 = (state_36194[12]);var inst_36151__$1 = (state_36194[2]);var inst_36152 = cljs.core.get.call(null,inst_36151__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36153 = cljs.core.get.call(null,inst_36151__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36154 = cljs.core.get.call(null,inst_36151__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36194__$1 = (function (){var statearr_36207 = state_36194;(statearr_36207[13] = inst_36154);
(statearr_36207[12] = inst_36151__$1);
(statearr_36207[14] = inst_36153);
return statearr_36207;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36194__$1,10,inst_36152);
} else
{if((state_val_36195 === 10))
{var inst_36159 = (state_36194[15]);var inst_36158 = (state_36194[16]);var inst_36157 = (state_36194[2]);var inst_36158__$1 = cljs.core.nth.call(null,inst_36157,0,null);var inst_36159__$1 = cljs.core.nth.call(null,inst_36157,1,null);var inst_36160 = (inst_36158__$1 == null);var inst_36161 = cljs.core._EQ_.call(null,inst_36159__$1,change);var inst_36162 = (inst_36160) || (inst_36161);var state_36194__$1 = (function (){var statearr_36208 = state_36194;(statearr_36208[15] = inst_36159__$1);
(statearr_36208[16] = inst_36158__$1);
return statearr_36208;
})();if(cljs.core.truth_(inst_36162))
{var statearr_36209_36246 = state_36194__$1;(statearr_36209_36246[1] = 11);
} else
{var statearr_36210_36247 = state_36194__$1;(statearr_36210_36247[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 11))
{var inst_36158 = (state_36194[16]);var inst_36164 = (inst_36158 == null);var state_36194__$1 = state_36194;if(cljs.core.truth_(inst_36164))
{var statearr_36211_36248 = state_36194__$1;(statearr_36211_36248[1] = 14);
} else
{var statearr_36212_36249 = state_36194__$1;(statearr_36212_36249[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 12))
{var inst_36159 = (state_36194[15]);var inst_36154 = (state_36194[13]);var inst_36173 = (state_36194[17]);var inst_36173__$1 = inst_36154.call(null,inst_36159);var state_36194__$1 = (function (){var statearr_36213 = state_36194;(statearr_36213[17] = inst_36173__$1);
return statearr_36213;
})();if(cljs.core.truth_(inst_36173__$1))
{var statearr_36214_36250 = state_36194__$1;(statearr_36214_36250[1] = 17);
} else
{var statearr_36215_36251 = state_36194__$1;(statearr_36215_36251[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 13))
{var inst_36190 = (state_36194[2]);var state_36194__$1 = state_36194;var statearr_36216_36252 = state_36194__$1;(statearr_36216_36252[2] = inst_36190);
(statearr_36216_36252[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 14))
{var inst_36159 = (state_36194[15]);var inst_36166 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36159);var state_36194__$1 = state_36194;var statearr_36217_36253 = state_36194__$1;(statearr_36217_36253[2] = inst_36166);
(statearr_36217_36253[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 15))
{var state_36194__$1 = state_36194;var statearr_36218_36254 = state_36194__$1;(statearr_36218_36254[2] = null);
(statearr_36218_36254[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 16))
{var inst_36169 = (state_36194[2]);var inst_36170 = calc_state.call(null);var inst_36143 = inst_36170;var state_36194__$1 = (function (){var statearr_36219 = state_36194;(statearr_36219[8] = inst_36143);
(statearr_36219[18] = inst_36169);
return statearr_36219;
})();var statearr_36220_36255 = state_36194__$1;(statearr_36220_36255[2] = null);
(statearr_36220_36255[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 17))
{var inst_36173 = (state_36194[17]);var state_36194__$1 = state_36194;var statearr_36221_36256 = state_36194__$1;(statearr_36221_36256[2] = inst_36173);
(statearr_36221_36256[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 18))
{var inst_36159 = (state_36194[15]);var inst_36154 = (state_36194[13]);var inst_36153 = (state_36194[14]);var inst_36176 = cljs.core.empty_QMARK_.call(null,inst_36154);var inst_36177 = inst_36153.call(null,inst_36159);var inst_36178 = cljs.core.not.call(null,inst_36177);var inst_36179 = (inst_36176) && (inst_36178);var state_36194__$1 = state_36194;var statearr_36222_36257 = state_36194__$1;(statearr_36222_36257[2] = inst_36179);
(statearr_36222_36257[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 19))
{var inst_36181 = (state_36194[2]);var state_36194__$1 = state_36194;if(cljs.core.truth_(inst_36181))
{var statearr_36223_36258 = state_36194__$1;(statearr_36223_36258[1] = 20);
} else
{var statearr_36224_36259 = state_36194__$1;(statearr_36224_36259[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 20))
{var inst_36158 = (state_36194[16]);var state_36194__$1 = state_36194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36194__$1,23,out,inst_36158);
} else
{if((state_val_36195 === 21))
{var state_36194__$1 = state_36194;var statearr_36225_36260 = state_36194__$1;(statearr_36225_36260[2] = null);
(statearr_36225_36260[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 22))
{var inst_36151 = (state_36194[12]);var inst_36187 = (state_36194[2]);var inst_36143 = inst_36151;var state_36194__$1 = (function (){var statearr_36226 = state_36194;(statearr_36226[8] = inst_36143);
(statearr_36226[19] = inst_36187);
return statearr_36226;
})();var statearr_36227_36261 = state_36194__$1;(statearr_36227_36261[2] = null);
(statearr_36227_36261[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36195 === 23))
{var inst_36184 = (state_36194[2]);var state_36194__$1 = state_36194;var statearr_36228_36262 = state_36194__$1;(statearr_36228_36262[2] = inst_36184);
(statearr_36228_36262[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36232[0] = state_machine__5507__auto__);
(statearr_36232[1] = 1);
return statearr_36232;
});
var state_machine__5507__auto____1 = (function (state_36194){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36233){if((e36233 instanceof Object))
{var ex__5510__auto__ = e36233;var statearr_36234_36263 = state_36194;(statearr_36234_36263[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36264 = state_36194;
state_36194 = G__36264;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36194){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36235 = f__5522__auto__.call(null);(statearr_36235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36236);
return statearr_36235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj36266 = {};return obj36266;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__36267_SHARP_){if(cljs.core.truth_(p1__36267_SHARP_.call(null,topic)))
{return p1__36267_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36267_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36392 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36393){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36393 = meta36393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36392.cljs$lang$type = true;
cljs.core.async.t36392.cljs$lang$ctorStr = "cljs.core.async/t36392";
cljs.core.async.t36392.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36392");
});})(mults,ensure_mult))
;
cljs.core.async.t36392.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36392.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36392.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36392.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36394){var self__ = this;
var _36394__$1 = this;return self__.meta36393;
});})(mults,ensure_mult))
;
cljs.core.async.t36392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36394,meta36393__$1){var self__ = this;
var _36394__$1 = this;return (new cljs.core.async.t36392(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36393__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36392 = ((function (mults,ensure_mult){
return (function __GT_t36392(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36393){return (new cljs.core.async.t36392(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36393));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36392(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36468){var state_val_36469 = (state_36468[1]);if((state_val_36469 === 1))
{var state_36468__$1 = state_36468;var statearr_36470_36517 = state_36468__$1;(statearr_36470_36517[2] = null);
(statearr_36470_36517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 2))
{var state_36468__$1 = state_36468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36468__$1,4,ch);
} else
{if((state_val_36469 === 3))
{var inst_36466 = (state_36468[2]);var state_36468__$1 = state_36468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36468__$1,inst_36466);
} else
{if((state_val_36469 === 4))
{var inst_36397 = (state_36468[7]);var inst_36397__$1 = (state_36468[2]);var inst_36398 = (inst_36397__$1 == null);var state_36468__$1 = (function (){var statearr_36471 = state_36468;(statearr_36471[7] = inst_36397__$1);
return statearr_36471;
})();if(cljs.core.truth_(inst_36398))
{var statearr_36472_36518 = state_36468__$1;(statearr_36472_36518[1] = 5);
} else
{var statearr_36473_36519 = state_36468__$1;(statearr_36473_36519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 5))
{var inst_36404 = cljs.core.deref.call(null,mults);var inst_36405 = cljs.core.vals.call(null,inst_36404);var inst_36406 = cljs.core.seq.call(null,inst_36405);var inst_36407 = inst_36406;var inst_36408 = null;var inst_36409 = 0;var inst_36410 = 0;var state_36468__$1 = (function (){var statearr_36474 = state_36468;(statearr_36474[8] = inst_36409);
(statearr_36474[9] = inst_36408);
(statearr_36474[10] = inst_36407);
(statearr_36474[11] = inst_36410);
return statearr_36474;
})();var statearr_36475_36520 = state_36468__$1;(statearr_36475_36520[2] = null);
(statearr_36475_36520[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 6))
{var inst_36397 = (state_36468[7]);var inst_36447 = (state_36468[12]);var inst_36445 = (state_36468[13]);var inst_36445__$1 = topic_fn.call(null,inst_36397);var inst_36446 = cljs.core.deref.call(null,mults);var inst_36447__$1 = cljs.core.get.call(null,inst_36446,inst_36445__$1);var state_36468__$1 = (function (){var statearr_36476 = state_36468;(statearr_36476[12] = inst_36447__$1);
(statearr_36476[13] = inst_36445__$1);
return statearr_36476;
})();if(cljs.core.truth_(inst_36447__$1))
{var statearr_36477_36521 = state_36468__$1;(statearr_36477_36521[1] = 19);
} else
{var statearr_36478_36522 = state_36468__$1;(statearr_36478_36522[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 7))
{var inst_36464 = (state_36468[2]);var state_36468__$1 = state_36468;var statearr_36479_36523 = state_36468__$1;(statearr_36479_36523[2] = inst_36464);
(statearr_36479_36523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 8))
{var inst_36409 = (state_36468[8]);var inst_36410 = (state_36468[11]);var inst_36412 = (inst_36410 < inst_36409);var inst_36413 = inst_36412;var state_36468__$1 = state_36468;if(cljs.core.truth_(inst_36413))
{var statearr_36483_36524 = state_36468__$1;(statearr_36483_36524[1] = 10);
} else
{var statearr_36484_36525 = state_36468__$1;(statearr_36484_36525[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 9))
{var inst_36443 = (state_36468[2]);var state_36468__$1 = state_36468;var statearr_36485_36526 = state_36468__$1;(statearr_36485_36526[2] = inst_36443);
(statearr_36485_36526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 10))
{var inst_36409 = (state_36468[8]);var inst_36408 = (state_36468[9]);var inst_36407 = (state_36468[10]);var inst_36410 = (state_36468[11]);var inst_36415 = cljs.core._nth.call(null,inst_36408,inst_36410);var inst_36416 = cljs.core.async.muxch_STAR_.call(null,inst_36415);var inst_36417 = cljs.core.async.close_BANG_.call(null,inst_36416);var inst_36418 = (inst_36410 + 1);var tmp36480 = inst_36409;var tmp36481 = inst_36408;var tmp36482 = inst_36407;var inst_36407__$1 = tmp36482;var inst_36408__$1 = tmp36481;var inst_36409__$1 = tmp36480;var inst_36410__$1 = inst_36418;var state_36468__$1 = (function (){var statearr_36486 = state_36468;(statearr_36486[8] = inst_36409__$1);
(statearr_36486[9] = inst_36408__$1);
(statearr_36486[14] = inst_36417);
(statearr_36486[10] = inst_36407__$1);
(statearr_36486[11] = inst_36410__$1);
return statearr_36486;
})();var statearr_36487_36527 = state_36468__$1;(statearr_36487_36527[2] = null);
(statearr_36487_36527[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 11))
{var inst_36421 = (state_36468[15]);var inst_36407 = (state_36468[10]);var inst_36421__$1 = cljs.core.seq.call(null,inst_36407);var state_36468__$1 = (function (){var statearr_36488 = state_36468;(statearr_36488[15] = inst_36421__$1);
return statearr_36488;
})();if(inst_36421__$1)
{var statearr_36489_36528 = state_36468__$1;(statearr_36489_36528[1] = 13);
} else
{var statearr_36490_36529 = state_36468__$1;(statearr_36490_36529[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 12))
{var inst_36441 = (state_36468[2]);var state_36468__$1 = state_36468;var statearr_36491_36530 = state_36468__$1;(statearr_36491_36530[2] = inst_36441);
(statearr_36491_36530[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 13))
{var inst_36421 = (state_36468[15]);var inst_36423 = cljs.core.chunked_seq_QMARK_.call(null,inst_36421);var state_36468__$1 = state_36468;if(inst_36423)
{var statearr_36492_36531 = state_36468__$1;(statearr_36492_36531[1] = 16);
} else
{var statearr_36493_36532 = state_36468__$1;(statearr_36493_36532[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 14))
{var state_36468__$1 = state_36468;var statearr_36494_36533 = state_36468__$1;(statearr_36494_36533[2] = null);
(statearr_36494_36533[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 15))
{var inst_36439 = (state_36468[2]);var state_36468__$1 = state_36468;var statearr_36495_36534 = state_36468__$1;(statearr_36495_36534[2] = inst_36439);
(statearr_36495_36534[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 16))
{var inst_36421 = (state_36468[15]);var inst_36425 = cljs.core.chunk_first.call(null,inst_36421);var inst_36426 = cljs.core.chunk_rest.call(null,inst_36421);var inst_36427 = cljs.core.count.call(null,inst_36425);var inst_36407 = inst_36426;var inst_36408 = inst_36425;var inst_36409 = inst_36427;var inst_36410 = 0;var state_36468__$1 = (function (){var statearr_36496 = state_36468;(statearr_36496[8] = inst_36409);
(statearr_36496[9] = inst_36408);
(statearr_36496[10] = inst_36407);
(statearr_36496[11] = inst_36410);
return statearr_36496;
})();var statearr_36497_36535 = state_36468__$1;(statearr_36497_36535[2] = null);
(statearr_36497_36535[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 17))
{var inst_36421 = (state_36468[15]);var inst_36430 = cljs.core.first.call(null,inst_36421);var inst_36431 = cljs.core.async.muxch_STAR_.call(null,inst_36430);var inst_36432 = cljs.core.async.close_BANG_.call(null,inst_36431);var inst_36433 = cljs.core.next.call(null,inst_36421);var inst_36407 = inst_36433;var inst_36408 = null;var inst_36409 = 0;var inst_36410 = 0;var state_36468__$1 = (function (){var statearr_36498 = state_36468;(statearr_36498[8] = inst_36409);
(statearr_36498[9] = inst_36408);
(statearr_36498[16] = inst_36432);
(statearr_36498[10] = inst_36407);
(statearr_36498[11] = inst_36410);
return statearr_36498;
})();var statearr_36499_36536 = state_36468__$1;(statearr_36499_36536[2] = null);
(statearr_36499_36536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 18))
{var inst_36436 = (state_36468[2]);var state_36468__$1 = state_36468;var statearr_36500_36537 = state_36468__$1;(statearr_36500_36537[2] = inst_36436);
(statearr_36500_36537[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 19))
{var state_36468__$1 = state_36468;var statearr_36501_36538 = state_36468__$1;(statearr_36501_36538[2] = null);
(statearr_36501_36538[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 20))
{var state_36468__$1 = state_36468;var statearr_36502_36539 = state_36468__$1;(statearr_36502_36539[2] = null);
(statearr_36502_36539[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 21))
{var inst_36461 = (state_36468[2]);var state_36468__$1 = (function (){var statearr_36503 = state_36468;(statearr_36503[17] = inst_36461);
return statearr_36503;
})();var statearr_36504_36540 = state_36468__$1;(statearr_36504_36540[2] = null);
(statearr_36504_36540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 22))
{var inst_36458 = (state_36468[2]);var state_36468__$1 = state_36468;var statearr_36505_36541 = state_36468__$1;(statearr_36505_36541[2] = inst_36458);
(statearr_36505_36541[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 23))
{var inst_36445 = (state_36468[13]);var inst_36449 = (state_36468[2]);var inst_36450 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36445);var state_36468__$1 = (function (){var statearr_36506 = state_36468;(statearr_36506[18] = inst_36449);
return statearr_36506;
})();var statearr_36507_36542 = state_36468__$1;(statearr_36507_36542[2] = inst_36450);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36469 === 24))
{var inst_36397 = (state_36468[7]);var inst_36447 = (state_36468[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36468,23,Object,null,22);var inst_36454 = cljs.core.async.muxch_STAR_.call(null,inst_36447);var state_36468__$1 = state_36468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36468__$1,25,inst_36454,inst_36397);
} else
{if((state_val_36469 === 25))
{var inst_36456 = (state_36468[2]);var state_36468__$1 = state_36468;var statearr_36508_36543 = state_36468__$1;(statearr_36508_36543[2] = inst_36456);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36512[0] = state_machine__5507__auto__);
(statearr_36512[1] = 1);
return statearr_36512;
});
var state_machine__5507__auto____1 = (function (state_36468){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36468);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36513){if((e36513 instanceof Object))
{var ex__5510__auto__ = e36513;var statearr_36514_36544 = state_36468;(statearr_36514_36544[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36545 = state_36468;
state_36468 = G__36545;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36468){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36515 = f__5522__auto__.call(null);(statearr_36515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36516);
return statearr_36515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___36682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36652){var state_val_36653 = (state_36652[1]);if((state_val_36653 === 1))
{var state_36652__$1 = state_36652;var statearr_36654_36683 = state_36652__$1;(statearr_36654_36683[2] = null);
(statearr_36654_36683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 2))
{var inst_36615 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36616 = 0;var state_36652__$1 = (function (){var statearr_36655 = state_36652;(statearr_36655[7] = inst_36615);
(statearr_36655[8] = inst_36616);
return statearr_36655;
})();var statearr_36656_36684 = state_36652__$1;(statearr_36656_36684[2] = null);
(statearr_36656_36684[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 3))
{var inst_36650 = (state_36652[2]);var state_36652__$1 = state_36652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36652__$1,inst_36650);
} else
{if((state_val_36653 === 4))
{var inst_36616 = (state_36652[8]);var inst_36618 = (inst_36616 < cnt);var state_36652__$1 = state_36652;if(cljs.core.truth_(inst_36618))
{var statearr_36657_36685 = state_36652__$1;(statearr_36657_36685[1] = 6);
} else
{var statearr_36658_36686 = state_36652__$1;(statearr_36658_36686[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 5))
{var inst_36636 = (state_36652[2]);var state_36652__$1 = (function (){var statearr_36659 = state_36652;(statearr_36659[9] = inst_36636);
return statearr_36659;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36652__$1,12,dchan);
} else
{if((state_val_36653 === 6))
{var state_36652__$1 = state_36652;var statearr_36660_36687 = state_36652__$1;(statearr_36660_36687[2] = null);
(statearr_36660_36687[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 7))
{var state_36652__$1 = state_36652;var statearr_36661_36688 = state_36652__$1;(statearr_36661_36688[2] = null);
(statearr_36661_36688[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 8))
{var inst_36634 = (state_36652[2]);var state_36652__$1 = state_36652;var statearr_36662_36689 = state_36652__$1;(statearr_36662_36689[2] = inst_36634);
(statearr_36662_36689[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 9))
{var inst_36616 = (state_36652[8]);var inst_36629 = (state_36652[2]);var inst_36630 = (inst_36616 + 1);var inst_36616__$1 = inst_36630;var state_36652__$1 = (function (){var statearr_36663 = state_36652;(statearr_36663[8] = inst_36616__$1);
(statearr_36663[10] = inst_36629);
return statearr_36663;
})();var statearr_36664_36690 = state_36652__$1;(statearr_36664_36690[2] = null);
(statearr_36664_36690[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 10))
{var inst_36620 = (state_36652[2]);var inst_36621 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36652__$1 = (function (){var statearr_36665 = state_36652;(statearr_36665[11] = inst_36620);
return statearr_36665;
})();var statearr_36666_36691 = state_36652__$1;(statearr_36666_36691[2] = inst_36621);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36652__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 11))
{var inst_36616 = (state_36652[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36652,10,Object,null,9);var inst_36625 = chs__$1.call(null,inst_36616);var inst_36626 = done.call(null,inst_36616);var inst_36627 = cljs.core.async.take_BANG_.call(null,inst_36625,inst_36626);var state_36652__$1 = state_36652;var statearr_36667_36692 = state_36652__$1;(statearr_36667_36692[2] = inst_36627);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36652__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 12))
{var inst_36638 = (state_36652[12]);var inst_36638__$1 = (state_36652[2]);var inst_36639 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36638__$1);var state_36652__$1 = (function (){var statearr_36668 = state_36652;(statearr_36668[12] = inst_36638__$1);
return statearr_36668;
})();if(cljs.core.truth_(inst_36639))
{var statearr_36669_36693 = state_36652__$1;(statearr_36669_36693[1] = 13);
} else
{var statearr_36670_36694 = state_36652__$1;(statearr_36670_36694[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 13))
{var inst_36641 = cljs.core.async.close_BANG_.call(null,out);var state_36652__$1 = state_36652;var statearr_36671_36695 = state_36652__$1;(statearr_36671_36695[2] = inst_36641);
(statearr_36671_36695[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 14))
{var inst_36638 = (state_36652[12]);var inst_36643 = cljs.core.apply.call(null,f,inst_36638);var state_36652__$1 = state_36652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36652__$1,16,out,inst_36643);
} else
{if((state_val_36653 === 15))
{var inst_36648 = (state_36652[2]);var state_36652__$1 = state_36652;var statearr_36672_36696 = state_36652__$1;(statearr_36672_36696[2] = inst_36648);
(statearr_36672_36696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36653 === 16))
{var inst_36645 = (state_36652[2]);var state_36652__$1 = (function (){var statearr_36673 = state_36652;(statearr_36673[13] = inst_36645);
return statearr_36673;
})();var statearr_36674_36697 = state_36652__$1;(statearr_36674_36697[2] = null);
(statearr_36674_36697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36678[0] = state_machine__5507__auto__);
(statearr_36678[1] = 1);
return statearr_36678;
});
var state_machine__5507__auto____1 = (function (state_36652){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36652);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36679){if((e36679 instanceof Object))
{var ex__5510__auto__ = e36679;var statearr_36680_36698 = state_36652;(statearr_36680_36698[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36699 = state_36652;
state_36652 = G__36699;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36652){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36681 = f__5522__auto__.call(null);(statearr_36681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36682);
return statearr_36681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36807 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36783){var state_val_36784 = (state_36783[1]);if((state_val_36784 === 1))
{var inst_36754 = cljs.core.vec.call(null,chs);var inst_36755 = inst_36754;var state_36783__$1 = (function (){var statearr_36785 = state_36783;(statearr_36785[7] = inst_36755);
return statearr_36785;
})();var statearr_36786_36808 = state_36783__$1;(statearr_36786_36808[2] = null);
(statearr_36786_36808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36784 === 2))
{var inst_36755 = (state_36783[7]);var inst_36757 = cljs.core.count.call(null,inst_36755);var inst_36758 = (inst_36757 > 0);var state_36783__$1 = state_36783;if(cljs.core.truth_(inst_36758))
{var statearr_36787_36809 = state_36783__$1;(statearr_36787_36809[1] = 4);
} else
{var statearr_36788_36810 = state_36783__$1;(statearr_36788_36810[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36784 === 3))
{var inst_36781 = (state_36783[2]);var state_36783__$1 = state_36783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36783__$1,inst_36781);
} else
{if((state_val_36784 === 4))
{var inst_36755 = (state_36783[7]);var state_36783__$1 = state_36783;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36783__$1,7,inst_36755);
} else
{if((state_val_36784 === 5))
{var inst_36777 = cljs.core.async.close_BANG_.call(null,out);var state_36783__$1 = state_36783;var statearr_36789_36811 = state_36783__$1;(statearr_36789_36811[2] = inst_36777);
(statearr_36789_36811[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36784 === 6))
{var inst_36779 = (state_36783[2]);var state_36783__$1 = state_36783;var statearr_36790_36812 = state_36783__$1;(statearr_36790_36812[2] = inst_36779);
(statearr_36790_36812[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36784 === 7))
{var inst_36762 = (state_36783[8]);var inst_36763 = (state_36783[9]);var inst_36762__$1 = (state_36783[2]);var inst_36763__$1 = cljs.core.nth.call(null,inst_36762__$1,0,null);var inst_36764 = cljs.core.nth.call(null,inst_36762__$1,1,null);var inst_36765 = (inst_36763__$1 == null);var state_36783__$1 = (function (){var statearr_36791 = state_36783;(statearr_36791[8] = inst_36762__$1);
(statearr_36791[10] = inst_36764);
(statearr_36791[9] = inst_36763__$1);
return statearr_36791;
})();if(cljs.core.truth_(inst_36765))
{var statearr_36792_36813 = state_36783__$1;(statearr_36792_36813[1] = 8);
} else
{var statearr_36793_36814 = state_36783__$1;(statearr_36793_36814[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36784 === 8))
{var inst_36755 = (state_36783[7]);var inst_36762 = (state_36783[8]);var inst_36764 = (state_36783[10]);var inst_36763 = (state_36783[9]);var inst_36767 = (function (){var c = inst_36764;var v = inst_36763;var vec__36760 = inst_36762;var cs = inst_36755;return ((function (c,v,vec__36760,cs,inst_36755,inst_36762,inst_36764,inst_36763,state_val_36784){
return (function (p1__36700_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36700_SHARP_);
});
;})(c,v,vec__36760,cs,inst_36755,inst_36762,inst_36764,inst_36763,state_val_36784))
})();var inst_36768 = cljs.core.filterv.call(null,inst_36767,inst_36755);var inst_36755__$1 = inst_36768;var state_36783__$1 = (function (){var statearr_36794 = state_36783;(statearr_36794[7] = inst_36755__$1);
return statearr_36794;
})();var statearr_36795_36815 = state_36783__$1;(statearr_36795_36815[2] = null);
(statearr_36795_36815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36784 === 9))
{var inst_36763 = (state_36783[9]);var state_36783__$1 = state_36783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36783__$1,11,out,inst_36763);
} else
{if((state_val_36784 === 10))
{var inst_36775 = (state_36783[2]);var state_36783__$1 = state_36783;var statearr_36797_36816 = state_36783__$1;(statearr_36797_36816[2] = inst_36775);
(statearr_36797_36816[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36784 === 11))
{var inst_36755 = (state_36783[7]);var inst_36772 = (state_36783[2]);var tmp36796 = inst_36755;var inst_36755__$1 = tmp36796;var state_36783__$1 = (function (){var statearr_36798 = state_36783;(statearr_36798[7] = inst_36755__$1);
(statearr_36798[11] = inst_36772);
return statearr_36798;
})();var statearr_36799_36817 = state_36783__$1;(statearr_36799_36817[2] = null);
(statearr_36799_36817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36803 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36803[0] = state_machine__5507__auto__);
(statearr_36803[1] = 1);
return statearr_36803;
});
var state_machine__5507__auto____1 = (function (state_36783){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36783);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36804){if((e36804 instanceof Object))
{var ex__5510__auto__ = e36804;var statearr_36805_36818 = state_36783;(statearr_36805_36818[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36819 = state_36783;
state_36783 = G__36819;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36783){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36806 = f__5522__auto__.call(null);(statearr_36806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36807);
return statearr_36806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36912 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36889){var state_val_36890 = (state_36889[1]);if((state_val_36890 === 1))
{var inst_36866 = 0;var state_36889__$1 = (function (){var statearr_36891 = state_36889;(statearr_36891[7] = inst_36866);
return statearr_36891;
})();var statearr_36892_36913 = state_36889__$1;(statearr_36892_36913[2] = null);
(statearr_36892_36913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36890 === 2))
{var inst_36866 = (state_36889[7]);var inst_36868 = (inst_36866 < n);var state_36889__$1 = state_36889;if(cljs.core.truth_(inst_36868))
{var statearr_36893_36914 = state_36889__$1;(statearr_36893_36914[1] = 4);
} else
{var statearr_36894_36915 = state_36889__$1;(statearr_36894_36915[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36890 === 3))
{var inst_36886 = (state_36889[2]);var inst_36887 = cljs.core.async.close_BANG_.call(null,out);var state_36889__$1 = (function (){var statearr_36895 = state_36889;(statearr_36895[8] = inst_36886);
return statearr_36895;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36889__$1,inst_36887);
} else
{if((state_val_36890 === 4))
{var state_36889__$1 = state_36889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,7,ch);
} else
{if((state_val_36890 === 5))
{var state_36889__$1 = state_36889;var statearr_36896_36916 = state_36889__$1;(statearr_36896_36916[2] = null);
(statearr_36896_36916[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36890 === 6))
{var inst_36884 = (state_36889[2]);var state_36889__$1 = state_36889;var statearr_36897_36917 = state_36889__$1;(statearr_36897_36917[2] = inst_36884);
(statearr_36897_36917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36890 === 7))
{var inst_36871 = (state_36889[9]);var inst_36871__$1 = (state_36889[2]);var inst_36872 = (inst_36871__$1 == null);var inst_36873 = cljs.core.not.call(null,inst_36872);var state_36889__$1 = (function (){var statearr_36898 = state_36889;(statearr_36898[9] = inst_36871__$1);
return statearr_36898;
})();if(inst_36873)
{var statearr_36899_36918 = state_36889__$1;(statearr_36899_36918[1] = 8);
} else
{var statearr_36900_36919 = state_36889__$1;(statearr_36900_36919[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36890 === 8))
{var inst_36871 = (state_36889[9]);var state_36889__$1 = state_36889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36889__$1,11,out,inst_36871);
} else
{if((state_val_36890 === 9))
{var state_36889__$1 = state_36889;var statearr_36901_36920 = state_36889__$1;(statearr_36901_36920[2] = null);
(statearr_36901_36920[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36890 === 10))
{var inst_36881 = (state_36889[2]);var state_36889__$1 = state_36889;var statearr_36902_36921 = state_36889__$1;(statearr_36902_36921[2] = inst_36881);
(statearr_36902_36921[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36890 === 11))
{var inst_36866 = (state_36889[7]);var inst_36876 = (state_36889[2]);var inst_36877 = (inst_36866 + 1);var inst_36866__$1 = inst_36877;var state_36889__$1 = (function (){var statearr_36903 = state_36889;(statearr_36903[10] = inst_36876);
(statearr_36903[7] = inst_36866__$1);
return statearr_36903;
})();var statearr_36904_36922 = state_36889__$1;(statearr_36904_36922[2] = null);
(statearr_36904_36922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36908 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36908[0] = state_machine__5507__auto__);
(statearr_36908[1] = 1);
return statearr_36908;
});
var state_machine__5507__auto____1 = (function (state_36889){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36889);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36909){if((e36909 instanceof Object))
{var ex__5510__auto__ = e36909;var statearr_36910_36923 = state_36889;(statearr_36910_36923[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36924 = state_36889;
state_36889 = G__36924;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36889){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36911 = f__5522__auto__.call(null);(statearr_36911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36912);
return statearr_36911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37021 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36996){var state_val_36997 = (state_36996[1]);if((state_val_36997 === 1))
{var inst_36973 = null;var state_36996__$1 = (function (){var statearr_36998 = state_36996;(statearr_36998[7] = inst_36973);
return statearr_36998;
})();var statearr_36999_37022 = state_36996__$1;(statearr_36999_37022[2] = null);
(statearr_36999_37022[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36997 === 2))
{var state_36996__$1 = state_36996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36996__$1,4,ch);
} else
{if((state_val_36997 === 3))
{var inst_36993 = (state_36996[2]);var inst_36994 = cljs.core.async.close_BANG_.call(null,out);var state_36996__$1 = (function (){var statearr_37000 = state_36996;(statearr_37000[8] = inst_36993);
return statearr_37000;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36996__$1,inst_36994);
} else
{if((state_val_36997 === 4))
{var inst_36976 = (state_36996[9]);var inst_36976__$1 = (state_36996[2]);var inst_36977 = (inst_36976__$1 == null);var inst_36978 = cljs.core.not.call(null,inst_36977);var state_36996__$1 = (function (){var statearr_37001 = state_36996;(statearr_37001[9] = inst_36976__$1);
return statearr_37001;
})();if(inst_36978)
{var statearr_37002_37023 = state_36996__$1;(statearr_37002_37023[1] = 5);
} else
{var statearr_37003_37024 = state_36996__$1;(statearr_37003_37024[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36997 === 5))
{var inst_36976 = (state_36996[9]);var inst_36973 = (state_36996[7]);var inst_36980 = cljs.core._EQ_.call(null,inst_36976,inst_36973);var state_36996__$1 = state_36996;if(inst_36980)
{var statearr_37004_37025 = state_36996__$1;(statearr_37004_37025[1] = 8);
} else
{var statearr_37005_37026 = state_36996__$1;(statearr_37005_37026[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36997 === 6))
{var state_36996__$1 = state_36996;var statearr_37007_37027 = state_36996__$1;(statearr_37007_37027[2] = null);
(statearr_37007_37027[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36997 === 7))
{var inst_36991 = (state_36996[2]);var state_36996__$1 = state_36996;var statearr_37008_37028 = state_36996__$1;(statearr_37008_37028[2] = inst_36991);
(statearr_37008_37028[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36997 === 8))
{var inst_36973 = (state_36996[7]);var tmp37006 = inst_36973;var inst_36973__$1 = tmp37006;var state_36996__$1 = (function (){var statearr_37009 = state_36996;(statearr_37009[7] = inst_36973__$1);
return statearr_37009;
})();var statearr_37010_37029 = state_36996__$1;(statearr_37010_37029[2] = null);
(statearr_37010_37029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36997 === 9))
{var inst_36976 = (state_36996[9]);var state_36996__$1 = state_36996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36996__$1,11,out,inst_36976);
} else
{if((state_val_36997 === 10))
{var inst_36988 = (state_36996[2]);var state_36996__$1 = state_36996;var statearr_37011_37030 = state_36996__$1;(statearr_37011_37030[2] = inst_36988);
(statearr_37011_37030[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36997 === 11))
{var inst_36976 = (state_36996[9]);var inst_36985 = (state_36996[2]);var inst_36973 = inst_36976;var state_36996__$1 = (function (){var statearr_37012 = state_36996;(statearr_37012[10] = inst_36985);
(statearr_37012[7] = inst_36973);
return statearr_37012;
})();var statearr_37013_37031 = state_36996__$1;(statearr_37013_37031[2] = null);
(statearr_37013_37031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_37017 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37017[0] = state_machine__5507__auto__);
(statearr_37017[1] = 1);
return statearr_37017;
});
var state_machine__5507__auto____1 = (function (state_36996){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37018){if((e37018 instanceof Object))
{var ex__5510__auto__ = e37018;var statearr_37019_37032 = state_36996;(statearr_37019_37032[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37033 = state_36996;
state_36996 = G__37033;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36996){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37020 = f__5522__auto__.call(null);(statearr_37020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37021);
return statearr_37020;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37168 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37138){var state_val_37139 = (state_37138[1]);if((state_val_37139 === 1))
{var inst_37101 = (new Array(n));var inst_37102 = inst_37101;var inst_37103 = 0;var state_37138__$1 = (function (){var statearr_37140 = state_37138;(statearr_37140[7] = inst_37102);
(statearr_37140[8] = inst_37103);
return statearr_37140;
})();var statearr_37141_37169 = state_37138__$1;(statearr_37141_37169[2] = null);
(statearr_37141_37169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 2))
{var state_37138__$1 = state_37138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37138__$1,4,ch);
} else
{if((state_val_37139 === 3))
{var inst_37136 = (state_37138[2]);var state_37138__$1 = state_37138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37138__$1,inst_37136);
} else
{if((state_val_37139 === 4))
{var inst_37106 = (state_37138[9]);var inst_37106__$1 = (state_37138[2]);var inst_37107 = (inst_37106__$1 == null);var inst_37108 = cljs.core.not.call(null,inst_37107);var state_37138__$1 = (function (){var statearr_37142 = state_37138;(statearr_37142[9] = inst_37106__$1);
return statearr_37142;
})();if(inst_37108)
{var statearr_37143_37170 = state_37138__$1;(statearr_37143_37170[1] = 5);
} else
{var statearr_37144_37171 = state_37138__$1;(statearr_37144_37171[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 5))
{var inst_37111 = (state_37138[10]);var inst_37106 = (state_37138[9]);var inst_37102 = (state_37138[7]);var inst_37103 = (state_37138[8]);var inst_37110 = (inst_37102[inst_37103] = inst_37106);var inst_37111__$1 = (inst_37103 + 1);var inst_37112 = (inst_37111__$1 < n);var state_37138__$1 = (function (){var statearr_37145 = state_37138;(statearr_37145[10] = inst_37111__$1);
(statearr_37145[11] = inst_37110);
return statearr_37145;
})();if(cljs.core.truth_(inst_37112))
{var statearr_37146_37172 = state_37138__$1;(statearr_37146_37172[1] = 8);
} else
{var statearr_37147_37173 = state_37138__$1;(statearr_37147_37173[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 6))
{var inst_37103 = (state_37138[8]);var inst_37124 = (inst_37103 > 0);var state_37138__$1 = state_37138;if(cljs.core.truth_(inst_37124))
{var statearr_37149_37174 = state_37138__$1;(statearr_37149_37174[1] = 12);
} else
{var statearr_37150_37175 = state_37138__$1;(statearr_37150_37175[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 7))
{var inst_37134 = (state_37138[2]);var state_37138__$1 = state_37138;var statearr_37151_37176 = state_37138__$1;(statearr_37151_37176[2] = inst_37134);
(statearr_37151_37176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 8))
{var inst_37111 = (state_37138[10]);var inst_37102 = (state_37138[7]);var tmp37148 = inst_37102;var inst_37102__$1 = tmp37148;var inst_37103 = inst_37111;var state_37138__$1 = (function (){var statearr_37152 = state_37138;(statearr_37152[7] = inst_37102__$1);
(statearr_37152[8] = inst_37103);
return statearr_37152;
})();var statearr_37153_37177 = state_37138__$1;(statearr_37153_37177[2] = null);
(statearr_37153_37177[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 9))
{var inst_37102 = (state_37138[7]);var inst_37116 = cljs.core.vec.call(null,inst_37102);var state_37138__$1 = state_37138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37138__$1,11,out,inst_37116);
} else
{if((state_val_37139 === 10))
{var inst_37122 = (state_37138[2]);var state_37138__$1 = state_37138;var statearr_37154_37178 = state_37138__$1;(statearr_37154_37178[2] = inst_37122);
(statearr_37154_37178[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 11))
{var inst_37118 = (state_37138[2]);var inst_37119 = (new Array(n));var inst_37102 = inst_37119;var inst_37103 = 0;var state_37138__$1 = (function (){var statearr_37155 = state_37138;(statearr_37155[12] = inst_37118);
(statearr_37155[7] = inst_37102);
(statearr_37155[8] = inst_37103);
return statearr_37155;
})();var statearr_37156_37179 = state_37138__$1;(statearr_37156_37179[2] = null);
(statearr_37156_37179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 12))
{var inst_37102 = (state_37138[7]);var inst_37126 = cljs.core.vec.call(null,inst_37102);var state_37138__$1 = state_37138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37138__$1,15,out,inst_37126);
} else
{if((state_val_37139 === 13))
{var state_37138__$1 = state_37138;var statearr_37157_37180 = state_37138__$1;(statearr_37157_37180[2] = null);
(statearr_37157_37180[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 14))
{var inst_37131 = (state_37138[2]);var inst_37132 = cljs.core.async.close_BANG_.call(null,out);var state_37138__$1 = (function (){var statearr_37158 = state_37138;(statearr_37158[13] = inst_37131);
return statearr_37158;
})();var statearr_37159_37181 = state_37138__$1;(statearr_37159_37181[2] = inst_37132);
(statearr_37159_37181[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37139 === 15))
{var inst_37128 = (state_37138[2]);var state_37138__$1 = state_37138;var statearr_37160_37182 = state_37138__$1;(statearr_37160_37182[2] = inst_37128);
(statearr_37160_37182[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_37164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37164[0] = state_machine__5507__auto__);
(statearr_37164[1] = 1);
return statearr_37164;
});
var state_machine__5507__auto____1 = (function (state_37138){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37138);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37165){if((e37165 instanceof Object))
{var ex__5510__auto__ = e37165;var statearr_37166_37183 = state_37138;(statearr_37166_37183[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37138);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37184 = state_37138;
state_37138 = G__37184;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37138){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37167 = f__5522__auto__.call(null);(statearr_37167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37168);
return statearr_37167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37327 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37297){var state_val_37298 = (state_37297[1]);if((state_val_37298 === 1))
{var inst_37256 = [];var inst_37257 = inst_37256;var inst_37258 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37297__$1 = (function (){var statearr_37299 = state_37297;(statearr_37299[7] = inst_37257);
(statearr_37299[8] = inst_37258);
return statearr_37299;
})();var statearr_37300_37328 = state_37297__$1;(statearr_37300_37328[2] = null);
(statearr_37300_37328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 2))
{var state_37297__$1 = state_37297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37297__$1,4,ch);
} else
{if((state_val_37298 === 3))
{var inst_37295 = (state_37297[2]);var state_37297__$1 = state_37297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37297__$1,inst_37295);
} else
{if((state_val_37298 === 4))
{var inst_37261 = (state_37297[9]);var inst_37261__$1 = (state_37297[2]);var inst_37262 = (inst_37261__$1 == null);var inst_37263 = cljs.core.not.call(null,inst_37262);var state_37297__$1 = (function (){var statearr_37301 = state_37297;(statearr_37301[9] = inst_37261__$1);
return statearr_37301;
})();if(inst_37263)
{var statearr_37302_37329 = state_37297__$1;(statearr_37302_37329[1] = 5);
} else
{var statearr_37303_37330 = state_37297__$1;(statearr_37303_37330[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 5))
{var inst_37265 = (state_37297[10]);var inst_37261 = (state_37297[9]);var inst_37258 = (state_37297[8]);var inst_37265__$1 = f.call(null,inst_37261);var inst_37266 = cljs.core._EQ_.call(null,inst_37265__$1,inst_37258);var inst_37267 = cljs.core.keyword_identical_QMARK_.call(null,inst_37258,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37268 = (inst_37266) || (inst_37267);var state_37297__$1 = (function (){var statearr_37304 = state_37297;(statearr_37304[10] = inst_37265__$1);
return statearr_37304;
})();if(cljs.core.truth_(inst_37268))
{var statearr_37305_37331 = state_37297__$1;(statearr_37305_37331[1] = 8);
} else
{var statearr_37306_37332 = state_37297__$1;(statearr_37306_37332[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 6))
{var inst_37257 = (state_37297[7]);var inst_37282 = inst_37257.length;var inst_37283 = (inst_37282 > 0);var state_37297__$1 = state_37297;if(cljs.core.truth_(inst_37283))
{var statearr_37308_37333 = state_37297__$1;(statearr_37308_37333[1] = 12);
} else
{var statearr_37309_37334 = state_37297__$1;(statearr_37309_37334[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 7))
{var inst_37293 = (state_37297[2]);var state_37297__$1 = state_37297;var statearr_37310_37335 = state_37297__$1;(statearr_37310_37335[2] = inst_37293);
(statearr_37310_37335[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 8))
{var inst_37257 = (state_37297[7]);var inst_37265 = (state_37297[10]);var inst_37261 = (state_37297[9]);var inst_37270 = inst_37257.push(inst_37261);var tmp37307 = inst_37257;var inst_37257__$1 = tmp37307;var inst_37258 = inst_37265;var state_37297__$1 = (function (){var statearr_37311 = state_37297;(statearr_37311[7] = inst_37257__$1);
(statearr_37311[11] = inst_37270);
(statearr_37311[8] = inst_37258);
return statearr_37311;
})();var statearr_37312_37336 = state_37297__$1;(statearr_37312_37336[2] = null);
(statearr_37312_37336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 9))
{var inst_37257 = (state_37297[7]);var inst_37273 = cljs.core.vec.call(null,inst_37257);var state_37297__$1 = state_37297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37297__$1,11,out,inst_37273);
} else
{if((state_val_37298 === 10))
{var inst_37280 = (state_37297[2]);var state_37297__$1 = state_37297;var statearr_37313_37337 = state_37297__$1;(statearr_37313_37337[2] = inst_37280);
(statearr_37313_37337[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 11))
{var inst_37265 = (state_37297[10]);var inst_37261 = (state_37297[9]);var inst_37275 = (state_37297[2]);var inst_37276 = [];var inst_37277 = inst_37276.push(inst_37261);var inst_37257 = inst_37276;var inst_37258 = inst_37265;var state_37297__$1 = (function (){var statearr_37314 = state_37297;(statearr_37314[12] = inst_37277);
(statearr_37314[13] = inst_37275);
(statearr_37314[7] = inst_37257);
(statearr_37314[8] = inst_37258);
return statearr_37314;
})();var statearr_37315_37338 = state_37297__$1;(statearr_37315_37338[2] = null);
(statearr_37315_37338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 12))
{var inst_37257 = (state_37297[7]);var inst_37285 = cljs.core.vec.call(null,inst_37257);var state_37297__$1 = state_37297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37297__$1,15,out,inst_37285);
} else
{if((state_val_37298 === 13))
{var state_37297__$1 = state_37297;var statearr_37316_37339 = state_37297__$1;(statearr_37316_37339[2] = null);
(statearr_37316_37339[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 14))
{var inst_37290 = (state_37297[2]);var inst_37291 = cljs.core.async.close_BANG_.call(null,out);var state_37297__$1 = (function (){var statearr_37317 = state_37297;(statearr_37317[14] = inst_37290);
return statearr_37317;
})();var statearr_37318_37340 = state_37297__$1;(statearr_37318_37340[2] = inst_37291);
(statearr_37318_37340[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37298 === 15))
{var inst_37287 = (state_37297[2]);var state_37297__$1 = state_37297;var statearr_37319_37341 = state_37297__$1;(statearr_37319_37341[2] = inst_37287);
(statearr_37319_37341[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_37323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37323[0] = state_machine__5507__auto__);
(statearr_37323[1] = 1);
return statearr_37323;
});
var state_machine__5507__auto____1 = (function (state_37297){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37297);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37324){if((e37324 instanceof Object))
{var ex__5510__auto__ = e37324;var statearr_37325_37342 = state_37297;(statearr_37325_37342[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37297);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37343 = state_37297;
state_37297 = G__37343;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37297){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37326 = f__5522__auto__.call(null);(statearr_37326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37327);
return statearr_37326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
