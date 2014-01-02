// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t43641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43641 = (function (f,fn_handler,meta43642){
this.f = f;
this.fn_handler = fn_handler;
this.meta43642 = meta43642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43641.cljs$lang$type = true;
cljs.core.async.t43641.cljs$lang$ctorStr = "cljs.core.async/t43641";
cljs.core.async.t43641.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t43641");
});
cljs.core.async.t43641.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t43641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t43641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43643){var self__ = this;
var _43643__$1 = this;return self__.meta43642;
});
cljs.core.async.t43641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43643,meta43642__$1){var self__ = this;
var _43643__$1 = this;return (new cljs.core.async.t43641(self__.f,self__.fn_handler,meta43642__$1));
});
cljs.core.async.__GT_t43641 = (function __GT_t43641(f__$1,fn_handler__$1,meta43642){return (new cljs.core.async.t43641(f__$1,fn_handler__$1,meta43642));
});
}
return (new cljs.core.async.t43641(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__43645 = buff;if(G__43645)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__43645.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__43645.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__43645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__43645);
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
{var val_43646 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_43646);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_43646);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___43647 = n;var x_43648 = 0;while(true){
if((x_43648 < n__4114__auto___43647))
{(a[x_43648] = 0);
{
var G__43649 = (x_43648 + 1);
x_43648 = G__43649;
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
var G__43650 = (i + 1);
i = G__43650;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t43654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43654 = (function (flag,alt_flag,meta43655){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta43655 = meta43655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43654.cljs$lang$type = true;
cljs.core.async.t43654.cljs$lang$ctorStr = "cljs.core.async/t43654";
cljs.core.async.t43654.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t43654");
});
cljs.core.async.t43654.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t43654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t43654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43656){var self__ = this;
var _43656__$1 = this;return self__.meta43655;
});
cljs.core.async.t43654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43656,meta43655__$1){var self__ = this;
var _43656__$1 = this;return (new cljs.core.async.t43654(self__.flag,self__.alt_flag,meta43655__$1));
});
cljs.core.async.__GT_t43654 = (function __GT_t43654(flag__$1,alt_flag__$1,meta43655){return (new cljs.core.async.t43654(flag__$1,alt_flag__$1,meta43655));
});
}
return (new cljs.core.async.t43654(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t43660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43660 = (function (cb,flag,alt_handler,meta43661){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta43661 = meta43661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43660.cljs$lang$type = true;
cljs.core.async.t43660.cljs$lang$ctorStr = "cljs.core.async/t43660";
cljs.core.async.t43660.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t43660");
});
cljs.core.async.t43660.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t43660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t43660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43662){var self__ = this;
var _43662__$1 = this;return self__.meta43661;
});
cljs.core.async.t43660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43662,meta43661__$1){var self__ = this;
var _43662__$1 = this;return (new cljs.core.async.t43660(self__.cb,self__.flag,self__.alt_handler,meta43661__$1));
});
cljs.core.async.__GT_t43660 = (function __GT_t43660(cb__$1,flag__$1,alt_handler__$1,meta43661){return (new cljs.core.async.t43660(cb__$1,flag__$1,alt_handler__$1,meta43661));
});
}
return (new cljs.core.async.t43660(cb,flag,alt_handler,null));
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
return (function (p1__43663_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43663_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__43664 = (i + 1);
i = G__43664;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3279__auto__;
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
var alts_BANG___delegate = function (ports,p__43665){var map__43667 = p__43665;var map__43667__$1 = ((cljs.core.seq_QMARK_.call(null,map__43667))?cljs.core.apply.call(null,cljs.core.hash_map,map__43667):map__43667);var opts = map__43667__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__43665 = null;if (arguments.length > 1) {
  p__43665 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__43665);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__43668){
var ports = cljs.core.first(arglist__43668);
var p__43665 = cljs.core.rest(arglist__43668);
return alts_BANG___delegate(ports,p__43665);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t43676 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43676 = (function (ch,f,map_LT_,meta43677){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta43677 = meta43677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43676.cljs$lang$type = true;
cljs.core.async.t43676.cljs$lang$ctorStr = "cljs.core.async/t43676";
cljs.core.async.t43676.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t43676");
});
cljs.core.async.t43676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t43676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t43679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43679 = (function (fn1,_,meta43677,ch,f,map_LT_,meta43680){
this.fn1 = fn1;
this._ = _;
this.meta43677 = meta43677;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta43680 = meta43680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43679.cljs$lang$type = true;
cljs.core.async.t43679.cljs$lang$ctorStr = "cljs.core.async/t43679";
cljs.core.async.t43679.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t43679");
});
cljs.core.async.t43679.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t43679.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t43679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__43669_SHARP_){return f1.call(null,(((p1__43669_SHARP_ == null))?null:self__.f.call(null,p1__43669_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t43679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43681){var self__ = this;
var _43681__$1 = this;return self__.meta43680;
});
cljs.core.async.t43679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43681,meta43680__$1){var self__ = this;
var _43681__$1 = this;return (new cljs.core.async.t43679(self__.fn1,self__._,self__.meta43677,self__.ch,self__.f,self__.map_LT_,meta43680__$1));
});
cljs.core.async.__GT_t43679 = (function __GT_t43679(fn1__$1,___$2,meta43677__$1,ch__$2,f__$2,map_LT___$2,meta43680){return (new cljs.core.async.t43679(fn1__$1,___$2,meta43677__$1,ch__$2,f__$2,map_LT___$2,meta43680));
});
}
return (new cljs.core.async.t43679(fn1,___$1,self__.meta43677,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t43676.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43678){var self__ = this;
var _43678__$1 = this;return self__.meta43677;
});
cljs.core.async.t43676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43678,meta43677__$1){var self__ = this;
var _43678__$1 = this;return (new cljs.core.async.t43676(self__.ch,self__.f,self__.map_LT_,meta43677__$1));
});
cljs.core.async.__GT_t43676 = (function __GT_t43676(ch__$1,f__$1,map_LT___$1,meta43677){return (new cljs.core.async.t43676(ch__$1,f__$1,map_LT___$1,meta43677));
});
}
return (new cljs.core.async.t43676(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t43685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43685 = (function (ch,f,map_GT_,meta43686){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta43686 = meta43686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43685.cljs$lang$type = true;
cljs.core.async.t43685.cljs$lang$ctorStr = "cljs.core.async/t43685";
cljs.core.async.t43685.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t43685");
});
cljs.core.async.t43685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t43685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t43685.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43687){var self__ = this;
var _43687__$1 = this;return self__.meta43686;
});
cljs.core.async.t43685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43687,meta43686__$1){var self__ = this;
var _43687__$1 = this;return (new cljs.core.async.t43685(self__.ch,self__.f,self__.map_GT_,meta43686__$1));
});
cljs.core.async.__GT_t43685 = (function __GT_t43685(ch__$1,f__$1,map_GT___$1,meta43686){return (new cljs.core.async.t43685(ch__$1,f__$1,map_GT___$1,meta43686));
});
}
return (new cljs.core.async.t43685(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t43691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43691 = (function (ch,p,filter_GT_,meta43692){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta43692 = meta43692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43691.cljs$lang$type = true;
cljs.core.async.t43691.cljs$lang$ctorStr = "cljs.core.async/t43691";
cljs.core.async.t43691.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t43691");
});
cljs.core.async.t43691.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t43691.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t43691.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43693){var self__ = this;
var _43693__$1 = this;return self__.meta43692;
});
cljs.core.async.t43691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43693,meta43692__$1){var self__ = this;
var _43693__$1 = this;return (new cljs.core.async.t43691(self__.ch,self__.p,self__.filter_GT_,meta43692__$1));
});
cljs.core.async.__GT_t43691 = (function __GT_t43691(ch__$1,p__$1,filter_GT___$1,meta43692){return (new cljs.core.async.t43691(ch__$1,p__$1,filter_GT___$1,meta43692));
});
}
return (new cljs.core.async.t43691(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___43776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_43755){var state_val_43756 = (state_43755[1]);if((state_val_43756 === 1))
{var state_43755__$1 = state_43755;var statearr_43757_43777 = state_43755__$1;(statearr_43757_43777[2] = null);
(statearr_43757_43777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43756 === 2))
{var state_43755__$1 = state_43755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43755__$1,4,ch);
} else
{if((state_val_43756 === 3))
{var inst_43753 = (state_43755[2]);var state_43755__$1 = state_43755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43755__$1,inst_43753);
} else
{if((state_val_43756 === 4))
{var inst_43737 = (state_43755[7]);var inst_43737__$1 = (state_43755[2]);var inst_43738 = (inst_43737__$1 == null);var state_43755__$1 = (function (){var statearr_43758 = state_43755;(statearr_43758[7] = inst_43737__$1);
return statearr_43758;
})();if(cljs.core.truth_(inst_43738))
{var statearr_43759_43778 = state_43755__$1;(statearr_43759_43778[1] = 5);
} else
{var statearr_43760_43779 = state_43755__$1;(statearr_43760_43779[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43756 === 5))
{var inst_43740 = cljs.core.async.close_BANG_.call(null,out);var state_43755__$1 = state_43755;var statearr_43761_43780 = state_43755__$1;(statearr_43761_43780[2] = inst_43740);
(statearr_43761_43780[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43756 === 6))
{var inst_43737 = (state_43755[7]);var inst_43742 = p.call(null,inst_43737);var state_43755__$1 = state_43755;if(cljs.core.truth_(inst_43742))
{var statearr_43762_43781 = state_43755__$1;(statearr_43762_43781[1] = 8);
} else
{var statearr_43763_43782 = state_43755__$1;(statearr_43763_43782[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43756 === 7))
{var inst_43751 = (state_43755[2]);var state_43755__$1 = state_43755;var statearr_43764_43783 = state_43755__$1;(statearr_43764_43783[2] = inst_43751);
(statearr_43764_43783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43756 === 8))
{var inst_43737 = (state_43755[7]);var state_43755__$1 = state_43755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43755__$1,11,out,inst_43737);
} else
{if((state_val_43756 === 9))
{var state_43755__$1 = state_43755;var statearr_43765_43784 = state_43755__$1;(statearr_43765_43784[2] = null);
(statearr_43765_43784[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43756 === 10))
{var inst_43748 = (state_43755[2]);var state_43755__$1 = (function (){var statearr_43766 = state_43755;(statearr_43766[8] = inst_43748);
return statearr_43766;
})();var statearr_43767_43785 = state_43755__$1;(statearr_43767_43785[2] = null);
(statearr_43767_43785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43756 === 11))
{var inst_43745 = (state_43755[2]);var state_43755__$1 = state_43755;var statearr_43768_43786 = state_43755__$1;(statearr_43768_43786[2] = inst_43745);
(statearr_43768_43786[1] = 10);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_43772 = (new Array(9));(statearr_43772[0] = state_machine__6013__auto__);
(statearr_43772[1] = 1);
return statearr_43772;
});
var state_machine__6013__auto____1 = (function (state_43755){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_43755);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e43773){if((e43773 instanceof Object))
{var ex__6016__auto__ = e43773;var statearr_43774_43787 = state_43755;(statearr_43774_43787[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43788 = state_43755;
state_43755 = G__43788;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_43755){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_43755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_43775 = f__6083__auto__.call(null);(statearr_43775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___43776);
return statearr_43775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6082__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_43940){var state_val_43941 = (state_43940[1]);if((state_val_43941 === 1))
{var state_43940__$1 = state_43940;var statearr_43942_43979 = state_43940__$1;(statearr_43942_43979[2] = null);
(statearr_43942_43979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 2))
{var state_43940__$1 = state_43940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43940__$1,4,in$);
} else
{if((state_val_43941 === 3))
{var inst_43938 = (state_43940[2]);var state_43940__$1 = state_43940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43940__$1,inst_43938);
} else
{if((state_val_43941 === 4))
{var inst_43886 = (state_43940[7]);var inst_43886__$1 = (state_43940[2]);var inst_43887 = (inst_43886__$1 == null);var state_43940__$1 = (function (){var statearr_43943 = state_43940;(statearr_43943[7] = inst_43886__$1);
return statearr_43943;
})();if(cljs.core.truth_(inst_43887))
{var statearr_43944_43980 = state_43940__$1;(statearr_43944_43980[1] = 5);
} else
{var statearr_43945_43981 = state_43940__$1;(statearr_43945_43981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 5))
{var inst_43889 = cljs.core.async.close_BANG_.call(null,out);var state_43940__$1 = state_43940;var statearr_43946_43982 = state_43940__$1;(statearr_43946_43982[2] = inst_43889);
(statearr_43946_43982[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 6))
{var inst_43886 = (state_43940[7]);var inst_43891 = f.call(null,inst_43886);var inst_43896 = cljs.core.seq.call(null,inst_43891);var inst_43897 = inst_43896;var inst_43898 = null;var inst_43899 = 0;var inst_43900 = 0;var state_43940__$1 = (function (){var statearr_43947 = state_43940;(statearr_43947[8] = inst_43899);
(statearr_43947[9] = inst_43900);
(statearr_43947[10] = inst_43897);
(statearr_43947[11] = inst_43898);
return statearr_43947;
})();var statearr_43948_43983 = state_43940__$1;(statearr_43948_43983[2] = null);
(statearr_43948_43983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 7))
{var inst_43936 = (state_43940[2]);var state_43940__$1 = state_43940;var statearr_43949_43984 = state_43940__$1;(statearr_43949_43984[2] = inst_43936);
(statearr_43949_43984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 8))
{var inst_43899 = (state_43940[8]);var inst_43900 = (state_43940[9]);var inst_43902 = (inst_43900 < inst_43899);var inst_43903 = inst_43902;var state_43940__$1 = state_43940;if(cljs.core.truth_(inst_43903))
{var statearr_43950_43985 = state_43940__$1;(statearr_43950_43985[1] = 10);
} else
{var statearr_43951_43986 = state_43940__$1;(statearr_43951_43986[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 9))
{var inst_43933 = (state_43940[2]);var state_43940__$1 = (function (){var statearr_43952 = state_43940;(statearr_43952[12] = inst_43933);
return statearr_43952;
})();var statearr_43953_43987 = state_43940__$1;(statearr_43953_43987[2] = null);
(statearr_43953_43987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 10))
{var inst_43900 = (state_43940[9]);var inst_43898 = (state_43940[11]);var inst_43905 = cljs.core._nth.call(null,inst_43898,inst_43900);var state_43940__$1 = state_43940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43940__$1,13,out,inst_43905);
} else
{if((state_val_43941 === 11))
{var inst_43897 = (state_43940[10]);var inst_43911 = (state_43940[13]);var inst_43911__$1 = cljs.core.seq.call(null,inst_43897);var state_43940__$1 = (function (){var statearr_43957 = state_43940;(statearr_43957[13] = inst_43911__$1);
return statearr_43957;
})();if(inst_43911__$1)
{var statearr_43958_43988 = state_43940__$1;(statearr_43958_43988[1] = 14);
} else
{var statearr_43959_43989 = state_43940__$1;(statearr_43959_43989[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 12))
{var inst_43931 = (state_43940[2]);var state_43940__$1 = state_43940;var statearr_43960_43990 = state_43940__$1;(statearr_43960_43990[2] = inst_43931);
(statearr_43960_43990[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 13))
{var inst_43899 = (state_43940[8]);var inst_43900 = (state_43940[9]);var inst_43897 = (state_43940[10]);var inst_43898 = (state_43940[11]);var inst_43907 = (state_43940[2]);var inst_43908 = (inst_43900 + 1);var tmp43954 = inst_43899;var tmp43955 = inst_43897;var tmp43956 = inst_43898;var inst_43897__$1 = tmp43955;var inst_43898__$1 = tmp43956;var inst_43899__$1 = tmp43954;var inst_43900__$1 = inst_43908;var state_43940__$1 = (function (){var statearr_43961 = state_43940;(statearr_43961[8] = inst_43899__$1);
(statearr_43961[9] = inst_43900__$1);
(statearr_43961[10] = inst_43897__$1);
(statearr_43961[11] = inst_43898__$1);
(statearr_43961[14] = inst_43907);
return statearr_43961;
})();var statearr_43962_43991 = state_43940__$1;(statearr_43962_43991[2] = null);
(statearr_43962_43991[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 14))
{var inst_43911 = (state_43940[13]);var inst_43913 = cljs.core.chunked_seq_QMARK_.call(null,inst_43911);var state_43940__$1 = state_43940;if(inst_43913)
{var statearr_43963_43992 = state_43940__$1;(statearr_43963_43992[1] = 17);
} else
{var statearr_43964_43993 = state_43940__$1;(statearr_43964_43993[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 15))
{var state_43940__$1 = state_43940;var statearr_43965_43994 = state_43940__$1;(statearr_43965_43994[2] = null);
(statearr_43965_43994[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 16))
{var inst_43929 = (state_43940[2]);var state_43940__$1 = state_43940;var statearr_43966_43995 = state_43940__$1;(statearr_43966_43995[2] = inst_43929);
(statearr_43966_43995[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 17))
{var inst_43911 = (state_43940[13]);var inst_43915 = cljs.core.chunk_first.call(null,inst_43911);var inst_43916 = cljs.core.chunk_rest.call(null,inst_43911);var inst_43917 = cljs.core.count.call(null,inst_43915);var inst_43897 = inst_43916;var inst_43898 = inst_43915;var inst_43899 = inst_43917;var inst_43900 = 0;var state_43940__$1 = (function (){var statearr_43967 = state_43940;(statearr_43967[8] = inst_43899);
(statearr_43967[9] = inst_43900);
(statearr_43967[10] = inst_43897);
(statearr_43967[11] = inst_43898);
return statearr_43967;
})();var statearr_43968_43996 = state_43940__$1;(statearr_43968_43996[2] = null);
(statearr_43968_43996[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 18))
{var inst_43911 = (state_43940[13]);var inst_43920 = cljs.core.first.call(null,inst_43911);var state_43940__$1 = state_43940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43940__$1,20,out,inst_43920);
} else
{if((state_val_43941 === 19))
{var inst_43926 = (state_43940[2]);var state_43940__$1 = state_43940;var statearr_43969_43997 = state_43940__$1;(statearr_43969_43997[2] = inst_43926);
(statearr_43969_43997[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43941 === 20))
{var inst_43911 = (state_43940[13]);var inst_43922 = (state_43940[2]);var inst_43923 = cljs.core.next.call(null,inst_43911);var inst_43897 = inst_43923;var inst_43898 = null;var inst_43899 = 0;var inst_43900 = 0;var state_43940__$1 = (function (){var statearr_43970 = state_43940;(statearr_43970[15] = inst_43922);
(statearr_43970[8] = inst_43899);
(statearr_43970[9] = inst_43900);
(statearr_43970[10] = inst_43897);
(statearr_43970[11] = inst_43898);
return statearr_43970;
})();var statearr_43971_43998 = state_43940__$1;(statearr_43971_43998[2] = null);
(statearr_43971_43998[1] = 8);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_43975 = (new Array(16));(statearr_43975[0] = state_machine__6013__auto__);
(statearr_43975[1] = 1);
return statearr_43975;
});
var state_machine__6013__auto____1 = (function (state_43940){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_43940);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e43976){if((e43976 instanceof Object))
{var ex__6016__auto__ = e43976;var statearr_43977_43999 = state_43940;(statearr_43977_43999[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43940);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44000 = state_43940;
state_43940 = G__44000;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_43940){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_43940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_43978 = f__6083__auto__.call(null);(statearr_43978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_43978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
}));
return c__6082__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6082__auto___44081 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_44060){var state_val_44061 = (state_44060[1]);if((state_val_44061 === 1))
{var state_44060__$1 = state_44060;var statearr_44062_44082 = state_44060__$1;(statearr_44062_44082[2] = null);
(statearr_44062_44082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44061 === 2))
{var state_44060__$1 = state_44060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44060__$1,4,from);
} else
{if((state_val_44061 === 3))
{var inst_44058 = (state_44060[2]);var state_44060__$1 = state_44060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44060__$1,inst_44058);
} else
{if((state_val_44061 === 4))
{var inst_44043 = (state_44060[7]);var inst_44043__$1 = (state_44060[2]);var inst_44044 = (inst_44043__$1 == null);var state_44060__$1 = (function (){var statearr_44063 = state_44060;(statearr_44063[7] = inst_44043__$1);
return statearr_44063;
})();if(cljs.core.truth_(inst_44044))
{var statearr_44064_44083 = state_44060__$1;(statearr_44064_44083[1] = 5);
} else
{var statearr_44065_44084 = state_44060__$1;(statearr_44065_44084[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44061 === 5))
{var state_44060__$1 = state_44060;if(cljs.core.truth_(close_QMARK_))
{var statearr_44066_44085 = state_44060__$1;(statearr_44066_44085[1] = 8);
} else
{var statearr_44067_44086 = state_44060__$1;(statearr_44067_44086[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44061 === 6))
{var inst_44043 = (state_44060[7]);var state_44060__$1 = state_44060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44060__$1,11,to,inst_44043);
} else
{if((state_val_44061 === 7))
{var inst_44056 = (state_44060[2]);var state_44060__$1 = state_44060;var statearr_44068_44087 = state_44060__$1;(statearr_44068_44087[2] = inst_44056);
(statearr_44068_44087[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44061 === 8))
{var inst_44047 = cljs.core.async.close_BANG_.call(null,to);var state_44060__$1 = state_44060;var statearr_44069_44088 = state_44060__$1;(statearr_44069_44088[2] = inst_44047);
(statearr_44069_44088[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44061 === 9))
{var state_44060__$1 = state_44060;var statearr_44070_44089 = state_44060__$1;(statearr_44070_44089[2] = null);
(statearr_44070_44089[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44061 === 10))
{var inst_44050 = (state_44060[2]);var state_44060__$1 = state_44060;var statearr_44071_44090 = state_44060__$1;(statearr_44071_44090[2] = inst_44050);
(statearr_44071_44090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44061 === 11))
{var inst_44053 = (state_44060[2]);var state_44060__$1 = (function (){var statearr_44072 = state_44060;(statearr_44072[8] = inst_44053);
return statearr_44072;
})();var statearr_44073_44091 = state_44060__$1;(statearr_44073_44091[2] = null);
(statearr_44073_44091[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_44077 = (new Array(9));(statearr_44077[0] = state_machine__6013__auto__);
(statearr_44077[1] = 1);
return statearr_44077;
});
var state_machine__6013__auto____1 = (function (state_44060){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_44060);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e44078){if((e44078 instanceof Object))
{var ex__6016__auto__ = e44078;var statearr_44079_44092 = state_44060;(statearr_44079_44092[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44060);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44093 = state_44060;
state_44060 = G__44093;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_44060){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_44060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_44080 = f__6083__auto__.call(null);(statearr_44080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___44081);
return statearr_44080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6082__auto___44180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_44158){var state_val_44159 = (state_44158[1]);if((state_val_44159 === 1))
{var state_44158__$1 = state_44158;var statearr_44160_44181 = state_44158__$1;(statearr_44160_44181[2] = null);
(statearr_44160_44181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 2))
{var state_44158__$1 = state_44158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44158__$1,4,ch);
} else
{if((state_val_44159 === 3))
{var inst_44156 = (state_44158[2]);var state_44158__$1 = state_44158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44158__$1,inst_44156);
} else
{if((state_val_44159 === 4))
{var inst_44139 = (state_44158[7]);var inst_44139__$1 = (state_44158[2]);var inst_44140 = (inst_44139__$1 == null);var state_44158__$1 = (function (){var statearr_44161 = state_44158;(statearr_44161[7] = inst_44139__$1);
return statearr_44161;
})();if(cljs.core.truth_(inst_44140))
{var statearr_44162_44182 = state_44158__$1;(statearr_44162_44182[1] = 5);
} else
{var statearr_44163_44183 = state_44158__$1;(statearr_44163_44183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 5))
{var inst_44142 = cljs.core.async.close_BANG_.call(null,tc);var inst_44143 = cljs.core.async.close_BANG_.call(null,fc);var state_44158__$1 = (function (){var statearr_44164 = state_44158;(statearr_44164[8] = inst_44142);
return statearr_44164;
})();var statearr_44165_44184 = state_44158__$1;(statearr_44165_44184[2] = inst_44143);
(statearr_44165_44184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 6))
{var inst_44139 = (state_44158[7]);var inst_44145 = p.call(null,inst_44139);var state_44158__$1 = state_44158;if(cljs.core.truth_(inst_44145))
{var statearr_44166_44185 = state_44158__$1;(statearr_44166_44185[1] = 9);
} else
{var statearr_44167_44186 = state_44158__$1;(statearr_44167_44186[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 7))
{var inst_44154 = (state_44158[2]);var state_44158__$1 = state_44158;var statearr_44168_44187 = state_44158__$1;(statearr_44168_44187[2] = inst_44154);
(statearr_44168_44187[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 8))
{var inst_44151 = (state_44158[2]);var state_44158__$1 = (function (){var statearr_44169 = state_44158;(statearr_44169[9] = inst_44151);
return statearr_44169;
})();var statearr_44170_44188 = state_44158__$1;(statearr_44170_44188[2] = null);
(statearr_44170_44188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 9))
{var state_44158__$1 = state_44158;var statearr_44171_44189 = state_44158__$1;(statearr_44171_44189[2] = tc);
(statearr_44171_44189[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 10))
{var state_44158__$1 = state_44158;var statearr_44172_44190 = state_44158__$1;(statearr_44172_44190[2] = fc);
(statearr_44172_44190[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44159 === 11))
{var inst_44139 = (state_44158[7]);var inst_44149 = (state_44158[2]);var state_44158__$1 = state_44158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44158__$1,8,inst_44149,inst_44139);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_44176 = (new Array(10));(statearr_44176[0] = state_machine__6013__auto__);
(statearr_44176[1] = 1);
return statearr_44176;
});
var state_machine__6013__auto____1 = (function (state_44158){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_44158);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e44177){if((e44177 instanceof Object))
{var ex__6016__auto__ = e44177;var statearr_44178_44191 = state_44158;(statearr_44178_44191[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44158);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44192 = state_44158;
state_44158 = G__44192;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_44158){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_44158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_44179 = f__6083__auto__.call(null);(statearr_44179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___44180);
return statearr_44179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6082__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_44239){var state_val_44240 = (state_44239[1]);if((state_val_44240 === 7))
{var inst_44235 = (state_44239[2]);var state_44239__$1 = state_44239;var statearr_44241_44257 = state_44239__$1;(statearr_44241_44257[2] = inst_44235);
(statearr_44241_44257[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44240 === 6))
{var inst_44225 = (state_44239[7]);var inst_44228 = (state_44239[8]);var inst_44232 = f.call(null,inst_44225,inst_44228);var inst_44225__$1 = inst_44232;var state_44239__$1 = (function (){var statearr_44242 = state_44239;(statearr_44242[7] = inst_44225__$1);
return statearr_44242;
})();var statearr_44243_44258 = state_44239__$1;(statearr_44243_44258[2] = null);
(statearr_44243_44258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44240 === 5))
{var inst_44225 = (state_44239[7]);var state_44239__$1 = state_44239;var statearr_44244_44259 = state_44239__$1;(statearr_44244_44259[2] = inst_44225);
(statearr_44244_44259[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44240 === 4))
{var inst_44228 = (state_44239[8]);var inst_44228__$1 = (state_44239[2]);var inst_44229 = (inst_44228__$1 == null);var state_44239__$1 = (function (){var statearr_44245 = state_44239;(statearr_44245[8] = inst_44228__$1);
return statearr_44245;
})();if(cljs.core.truth_(inst_44229))
{var statearr_44246_44260 = state_44239__$1;(statearr_44246_44260[1] = 5);
} else
{var statearr_44247_44261 = state_44239__$1;(statearr_44247_44261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44240 === 3))
{var inst_44237 = (state_44239[2]);var state_44239__$1 = state_44239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44239__$1,inst_44237);
} else
{if((state_val_44240 === 2))
{var state_44239__$1 = state_44239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44239__$1,4,ch);
} else
{if((state_val_44240 === 1))
{var inst_44225 = init;var state_44239__$1 = (function (){var statearr_44248 = state_44239;(statearr_44248[7] = inst_44225);
return statearr_44248;
})();var statearr_44249_44262 = state_44239__$1;(statearr_44249_44262[2] = null);
(statearr_44249_44262[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_44253 = (new Array(9));(statearr_44253[0] = state_machine__6013__auto__);
(statearr_44253[1] = 1);
return statearr_44253;
});
var state_machine__6013__auto____1 = (function (state_44239){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_44239);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e44254){if((e44254 instanceof Object))
{var ex__6016__auto__ = e44254;var statearr_44255_44263 = state_44239;(statearr_44255_44263[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44264 = state_44239;
state_44239 = G__44264;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_44239){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_44239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_44256 = f__6083__auto__.call(null);(statearr_44256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_44256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
}));
return c__6082__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6082__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_44326){var state_val_44327 = (state_44326[1]);if((state_val_44327 === 1))
{var inst_44306 = cljs.core.seq.call(null,coll);var inst_44307 = inst_44306;var state_44326__$1 = (function (){var statearr_44328 = state_44326;(statearr_44328[7] = inst_44307);
return statearr_44328;
})();var statearr_44329_44347 = state_44326__$1;(statearr_44329_44347[2] = null);
(statearr_44329_44347[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44327 === 2))
{var inst_44307 = (state_44326[7]);var state_44326__$1 = state_44326;if(cljs.core.truth_(inst_44307))
{var statearr_44330_44348 = state_44326__$1;(statearr_44330_44348[1] = 4);
} else
{var statearr_44331_44349 = state_44326__$1;(statearr_44331_44349[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44327 === 3))
{var inst_44324 = (state_44326[2]);var state_44326__$1 = state_44326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44326__$1,inst_44324);
} else
{if((state_val_44327 === 4))
{var inst_44307 = (state_44326[7]);var inst_44310 = cljs.core.first.call(null,inst_44307);var state_44326__$1 = state_44326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44326__$1,7,ch,inst_44310);
} else
{if((state_val_44327 === 5))
{var state_44326__$1 = state_44326;if(cljs.core.truth_(close_QMARK_))
{var statearr_44332_44350 = state_44326__$1;(statearr_44332_44350[1] = 8);
} else
{var statearr_44333_44351 = state_44326__$1;(statearr_44333_44351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44327 === 6))
{var inst_44322 = (state_44326[2]);var state_44326__$1 = state_44326;var statearr_44334_44352 = state_44326__$1;(statearr_44334_44352[2] = inst_44322);
(statearr_44334_44352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44327 === 7))
{var inst_44307 = (state_44326[7]);var inst_44312 = (state_44326[2]);var inst_44313 = cljs.core.next.call(null,inst_44307);var inst_44307__$1 = inst_44313;var state_44326__$1 = (function (){var statearr_44335 = state_44326;(statearr_44335[7] = inst_44307__$1);
(statearr_44335[8] = inst_44312);
return statearr_44335;
})();var statearr_44336_44353 = state_44326__$1;(statearr_44336_44353[2] = null);
(statearr_44336_44353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44327 === 8))
{var inst_44317 = cljs.core.async.close_BANG_.call(null,ch);var state_44326__$1 = state_44326;var statearr_44337_44354 = state_44326__$1;(statearr_44337_44354[2] = inst_44317);
(statearr_44337_44354[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44327 === 9))
{var state_44326__$1 = state_44326;var statearr_44338_44355 = state_44326__$1;(statearr_44338_44355[2] = null);
(statearr_44338_44355[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44327 === 10))
{var inst_44320 = (state_44326[2]);var state_44326__$1 = state_44326;var statearr_44339_44356 = state_44326__$1;(statearr_44339_44356[2] = inst_44320);
(statearr_44339_44356[1] = 6);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_44343 = (new Array(9));(statearr_44343[0] = state_machine__6013__auto__);
(statearr_44343[1] = 1);
return statearr_44343;
});
var state_machine__6013__auto____1 = (function (state_44326){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_44326);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e44344){if((e44344 instanceof Object))
{var ex__6016__auto__ = e44344;var statearr_44345_44357 = state_44326;(statearr_44345_44357[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44358 = state_44326;
state_44326 = G__44358;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_44326){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_44326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_44346 = f__6083__auto__.call(null);(statearr_44346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_44346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
}));
return c__6082__auto__;
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
cljs.core.async.Mux = (function (){var obj44360 = {};return obj44360;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj44362 = {};return obj44362;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t44577 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44577 = (function (cs,ch,mult,meta44578){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta44578 = meta44578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44577.cljs$lang$type = true;
cljs.core.async.t44577.cljs$lang$ctorStr = "cljs.core.async/t44577";
cljs.core.async.t44577.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t44577");
});})(cs))
;
cljs.core.async.t44577.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t44577.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t44577.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t44577.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t44577.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t44577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44579){var self__ = this;
var _44579__$1 = this;return self__.meta44578;
});})(cs))
;
cljs.core.async.t44577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44579,meta44578__$1){var self__ = this;
var _44579__$1 = this;return (new cljs.core.async.t44577(self__.cs,self__.ch,self__.mult,meta44578__$1));
});})(cs))
;
cljs.core.async.__GT_t44577 = ((function (cs){
return (function __GT_t44577(cs__$1,ch__$1,mult__$1,meta44578){return (new cljs.core.async.t44577(cs__$1,ch__$1,mult__$1,meta44578));
});})(cs))
;
}
return (new cljs.core.async.t44577(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6082__auto___44791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_44709){var state_val_44710 = (state_44709[1]);if((state_val_44710 === 32))
{var inst_44658 = (state_44709[7]);var inst_44582 = (state_44709[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44709,31,Object,null,30);var inst_44665 = cljs.core.async.put_BANG_.call(null,inst_44658,inst_44582,done);var state_44709__$1 = state_44709;var statearr_44711_44792 = state_44709__$1;(statearr_44711_44792[2] = inst_44665);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 1))
{var state_44709__$1 = state_44709;var statearr_44712_44793 = state_44709__$1;(statearr_44712_44793[2] = null);
(statearr_44712_44793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 33))
{var inst_44671 = (state_44709[9]);var inst_44673 = cljs.core.chunked_seq_QMARK_.call(null,inst_44671);var state_44709__$1 = state_44709;if(inst_44673)
{var statearr_44713_44794 = state_44709__$1;(statearr_44713_44794[1] = 36);
} else
{var statearr_44714_44795 = state_44709__$1;(statearr_44714_44795[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 2))
{var state_44709__$1 = state_44709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44709__$1,4,ch);
} else
{if((state_val_44710 === 34))
{var state_44709__$1 = state_44709;var statearr_44715_44796 = state_44709__$1;(statearr_44715_44796[2] = null);
(statearr_44715_44796[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 3))
{var inst_44707 = (state_44709[2]);var state_44709__$1 = state_44709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44709__$1,inst_44707);
} else
{if((state_val_44710 === 35))
{var inst_44696 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44716_44797 = state_44709__$1;(statearr_44716_44797[2] = inst_44696);
(statearr_44716_44797[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 4))
{var inst_44582 = (state_44709[8]);var inst_44582__$1 = (state_44709[2]);var inst_44583 = (inst_44582__$1 == null);var state_44709__$1 = (function (){var statearr_44717 = state_44709;(statearr_44717[8] = inst_44582__$1);
return statearr_44717;
})();if(cljs.core.truth_(inst_44583))
{var statearr_44718_44798 = state_44709__$1;(statearr_44718_44798[1] = 5);
} else
{var statearr_44719_44799 = state_44709__$1;(statearr_44719_44799[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 36))
{var inst_44671 = (state_44709[9]);var inst_44675 = cljs.core.chunk_first.call(null,inst_44671);var inst_44676 = cljs.core.chunk_rest.call(null,inst_44671);var inst_44677 = cljs.core.count.call(null,inst_44675);var inst_44650 = inst_44676;var inst_44651 = inst_44675;var inst_44652 = inst_44677;var inst_44653 = 0;var state_44709__$1 = (function (){var statearr_44720 = state_44709;(statearr_44720[10] = inst_44653);
(statearr_44720[11] = inst_44652);
(statearr_44720[12] = inst_44651);
(statearr_44720[13] = inst_44650);
return statearr_44720;
})();var statearr_44721_44800 = state_44709__$1;(statearr_44721_44800[2] = null);
(statearr_44721_44800[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 5))
{var inst_44589 = cljs.core.deref.call(null,cs);var inst_44590 = cljs.core.seq.call(null,inst_44589);var inst_44591 = inst_44590;var inst_44592 = null;var inst_44593 = 0;var inst_44594 = 0;var state_44709__$1 = (function (){var statearr_44722 = state_44709;(statearr_44722[14] = inst_44593);
(statearr_44722[15] = inst_44594);
(statearr_44722[16] = inst_44591);
(statearr_44722[17] = inst_44592);
return statearr_44722;
})();var statearr_44723_44801 = state_44709__$1;(statearr_44723_44801[2] = null);
(statearr_44723_44801[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 37))
{var inst_44671 = (state_44709[9]);var inst_44680 = cljs.core.first.call(null,inst_44671);var state_44709__$1 = (function (){var statearr_44724 = state_44709;(statearr_44724[18] = inst_44680);
return statearr_44724;
})();var statearr_44725_44802 = state_44709__$1;(statearr_44725_44802[2] = null);
(statearr_44725_44802[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 6))
{var inst_44641 = cljs.core.deref.call(null,cs);var inst_44642 = cljs.core.keys.call(null,inst_44641);var inst_44643 = cljs.core.count.call(null,inst_44642);var inst_44644 = cljs.core.reset_BANG_.call(null,dctr,inst_44643);var inst_44649 = cljs.core.seq.call(null,inst_44642);var inst_44650 = inst_44649;var inst_44651 = null;var inst_44652 = 0;var inst_44653 = 0;var state_44709__$1 = (function (){var statearr_44726 = state_44709;(statearr_44726[10] = inst_44653);
(statearr_44726[11] = inst_44652);
(statearr_44726[19] = inst_44644);
(statearr_44726[12] = inst_44651);
(statearr_44726[13] = inst_44650);
return statearr_44726;
})();var statearr_44727_44803 = state_44709__$1;(statearr_44727_44803[2] = null);
(statearr_44727_44803[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 38))
{var inst_44693 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44728_44804 = state_44709__$1;(statearr_44728_44804[2] = inst_44693);
(statearr_44728_44804[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 7))
{var inst_44705 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44729_44805 = state_44709__$1;(statearr_44729_44805[2] = inst_44705);
(statearr_44729_44805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 39))
{var inst_44671 = (state_44709[9]);var inst_44689 = (state_44709[2]);var inst_44690 = cljs.core.next.call(null,inst_44671);var inst_44650 = inst_44690;var inst_44651 = null;var inst_44652 = 0;var inst_44653 = 0;var state_44709__$1 = (function (){var statearr_44730 = state_44709;(statearr_44730[10] = inst_44653);
(statearr_44730[11] = inst_44652);
(statearr_44730[20] = inst_44689);
(statearr_44730[12] = inst_44651);
(statearr_44730[13] = inst_44650);
return statearr_44730;
})();var statearr_44731_44806 = state_44709__$1;(statearr_44731_44806[2] = null);
(statearr_44731_44806[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 8))
{var inst_44593 = (state_44709[14]);var inst_44594 = (state_44709[15]);var inst_44596 = (inst_44594 < inst_44593);var inst_44597 = inst_44596;var state_44709__$1 = state_44709;if(cljs.core.truth_(inst_44597))
{var statearr_44732_44807 = state_44709__$1;(statearr_44732_44807[1] = 10);
} else
{var statearr_44733_44808 = state_44709__$1;(statearr_44733_44808[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 40))
{var inst_44680 = (state_44709[18]);var inst_44681 = (state_44709[2]);var inst_44682 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_44683 = cljs.core.async.untap_STAR_.call(null,m,inst_44680);var state_44709__$1 = (function (){var statearr_44734 = state_44709;(statearr_44734[21] = inst_44681);
(statearr_44734[22] = inst_44682);
return statearr_44734;
})();var statearr_44735_44809 = state_44709__$1;(statearr_44735_44809[2] = inst_44683);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 9))
{var inst_44639 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44736_44810 = state_44709__$1;(statearr_44736_44810[2] = inst_44639);
(statearr_44736_44810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 41))
{var inst_44680 = (state_44709[18]);var inst_44582 = (state_44709[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44709,40,Object,null,39);var inst_44687 = cljs.core.async.put_BANG_.call(null,inst_44680,inst_44582,done);var state_44709__$1 = state_44709;var statearr_44737_44811 = state_44709__$1;(statearr_44737_44811[2] = inst_44687);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 10))
{var inst_44594 = (state_44709[15]);var inst_44592 = (state_44709[17]);var inst_44600 = cljs.core._nth.call(null,inst_44592,inst_44594);var inst_44601 = cljs.core.nth.call(null,inst_44600,0,null);var inst_44602 = cljs.core.nth.call(null,inst_44600,1,null);var state_44709__$1 = (function (){var statearr_44738 = state_44709;(statearr_44738[23] = inst_44601);
return statearr_44738;
})();if(cljs.core.truth_(inst_44602))
{var statearr_44739_44812 = state_44709__$1;(statearr_44739_44812[1] = 13);
} else
{var statearr_44740_44813 = state_44709__$1;(statearr_44740_44813[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 42))
{var inst_44702 = (state_44709[2]);var state_44709__$1 = (function (){var statearr_44741 = state_44709;(statearr_44741[24] = inst_44702);
return statearr_44741;
})();var statearr_44742_44814 = state_44709__$1;(statearr_44742_44814[2] = null);
(statearr_44742_44814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 11))
{var inst_44591 = (state_44709[16]);var inst_44611 = (state_44709[25]);var inst_44611__$1 = cljs.core.seq.call(null,inst_44591);var state_44709__$1 = (function (){var statearr_44743 = state_44709;(statearr_44743[25] = inst_44611__$1);
return statearr_44743;
})();if(inst_44611__$1)
{var statearr_44744_44815 = state_44709__$1;(statearr_44744_44815[1] = 16);
} else
{var statearr_44745_44816 = state_44709__$1;(statearr_44745_44816[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 12))
{var inst_44637 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44746_44817 = state_44709__$1;(statearr_44746_44817[2] = inst_44637);
(statearr_44746_44817[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 13))
{var inst_44601 = (state_44709[23]);var inst_44604 = cljs.core.async.close_BANG_.call(null,inst_44601);var state_44709__$1 = state_44709;var statearr_44750_44818 = state_44709__$1;(statearr_44750_44818[2] = inst_44604);
(statearr_44750_44818[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 14))
{var state_44709__$1 = state_44709;var statearr_44751_44819 = state_44709__$1;(statearr_44751_44819[2] = null);
(statearr_44751_44819[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 15))
{var inst_44593 = (state_44709[14]);var inst_44594 = (state_44709[15]);var inst_44591 = (state_44709[16]);var inst_44592 = (state_44709[17]);var inst_44607 = (state_44709[2]);var inst_44608 = (inst_44594 + 1);var tmp44747 = inst_44593;var tmp44748 = inst_44591;var tmp44749 = inst_44592;var inst_44591__$1 = tmp44748;var inst_44592__$1 = tmp44749;var inst_44593__$1 = tmp44747;var inst_44594__$1 = inst_44608;var state_44709__$1 = (function (){var statearr_44752 = state_44709;(statearr_44752[14] = inst_44593__$1);
(statearr_44752[15] = inst_44594__$1);
(statearr_44752[16] = inst_44591__$1);
(statearr_44752[17] = inst_44592__$1);
(statearr_44752[26] = inst_44607);
return statearr_44752;
})();var statearr_44753_44820 = state_44709__$1;(statearr_44753_44820[2] = null);
(statearr_44753_44820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 16))
{var inst_44611 = (state_44709[25]);var inst_44613 = cljs.core.chunked_seq_QMARK_.call(null,inst_44611);var state_44709__$1 = state_44709;if(inst_44613)
{var statearr_44754_44821 = state_44709__$1;(statearr_44754_44821[1] = 19);
} else
{var statearr_44755_44822 = state_44709__$1;(statearr_44755_44822[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 17))
{var state_44709__$1 = state_44709;var statearr_44756_44823 = state_44709__$1;(statearr_44756_44823[2] = null);
(statearr_44756_44823[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 18))
{var inst_44635 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44757_44824 = state_44709__$1;(statearr_44757_44824[2] = inst_44635);
(statearr_44757_44824[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 19))
{var inst_44611 = (state_44709[25]);var inst_44615 = cljs.core.chunk_first.call(null,inst_44611);var inst_44616 = cljs.core.chunk_rest.call(null,inst_44611);var inst_44617 = cljs.core.count.call(null,inst_44615);var inst_44591 = inst_44616;var inst_44592 = inst_44615;var inst_44593 = inst_44617;var inst_44594 = 0;var state_44709__$1 = (function (){var statearr_44758 = state_44709;(statearr_44758[14] = inst_44593);
(statearr_44758[15] = inst_44594);
(statearr_44758[16] = inst_44591);
(statearr_44758[17] = inst_44592);
return statearr_44758;
})();var statearr_44759_44825 = state_44709__$1;(statearr_44759_44825[2] = null);
(statearr_44759_44825[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 20))
{var inst_44611 = (state_44709[25]);var inst_44621 = cljs.core.first.call(null,inst_44611);var inst_44622 = cljs.core.nth.call(null,inst_44621,0,null);var inst_44623 = cljs.core.nth.call(null,inst_44621,1,null);var state_44709__$1 = (function (){var statearr_44760 = state_44709;(statearr_44760[27] = inst_44622);
return statearr_44760;
})();if(cljs.core.truth_(inst_44623))
{var statearr_44761_44826 = state_44709__$1;(statearr_44761_44826[1] = 22);
} else
{var statearr_44762_44827 = state_44709__$1;(statearr_44762_44827[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 21))
{var inst_44632 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44763_44828 = state_44709__$1;(statearr_44763_44828[2] = inst_44632);
(statearr_44763_44828[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 22))
{var inst_44622 = (state_44709[27]);var inst_44625 = cljs.core.async.close_BANG_.call(null,inst_44622);var state_44709__$1 = state_44709;var statearr_44764_44829 = state_44709__$1;(statearr_44764_44829[2] = inst_44625);
(statearr_44764_44829[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 23))
{var state_44709__$1 = state_44709;var statearr_44765_44830 = state_44709__$1;(statearr_44765_44830[2] = null);
(statearr_44765_44830[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 24))
{var inst_44611 = (state_44709[25]);var inst_44628 = (state_44709[2]);var inst_44629 = cljs.core.next.call(null,inst_44611);var inst_44591 = inst_44629;var inst_44592 = null;var inst_44593 = 0;var inst_44594 = 0;var state_44709__$1 = (function (){var statearr_44766 = state_44709;(statearr_44766[28] = inst_44628);
(statearr_44766[14] = inst_44593);
(statearr_44766[15] = inst_44594);
(statearr_44766[16] = inst_44591);
(statearr_44766[17] = inst_44592);
return statearr_44766;
})();var statearr_44767_44831 = state_44709__$1;(statearr_44767_44831[2] = null);
(statearr_44767_44831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 25))
{var inst_44653 = (state_44709[10]);var inst_44652 = (state_44709[11]);var inst_44655 = (inst_44653 < inst_44652);var inst_44656 = inst_44655;var state_44709__$1 = state_44709;if(cljs.core.truth_(inst_44656))
{var statearr_44768_44832 = state_44709__$1;(statearr_44768_44832[1] = 27);
} else
{var statearr_44769_44833 = state_44709__$1;(statearr_44769_44833[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 26))
{var inst_44700 = (state_44709[2]);var state_44709__$1 = (function (){var statearr_44770 = state_44709;(statearr_44770[29] = inst_44700);
return statearr_44770;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44709__$1,42,dchan);
} else
{if((state_val_44710 === 27))
{var inst_44653 = (state_44709[10]);var inst_44651 = (state_44709[12]);var inst_44658 = cljs.core._nth.call(null,inst_44651,inst_44653);var state_44709__$1 = (function (){var statearr_44771 = state_44709;(statearr_44771[7] = inst_44658);
return statearr_44771;
})();var statearr_44772_44834 = state_44709__$1;(statearr_44772_44834[2] = null);
(statearr_44772_44834[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 28))
{var inst_44650 = (state_44709[13]);var inst_44671 = (state_44709[9]);var inst_44671__$1 = cljs.core.seq.call(null,inst_44650);var state_44709__$1 = (function (){var statearr_44776 = state_44709;(statearr_44776[9] = inst_44671__$1);
return statearr_44776;
})();if(inst_44671__$1)
{var statearr_44777_44835 = state_44709__$1;(statearr_44777_44835[1] = 33);
} else
{var statearr_44778_44836 = state_44709__$1;(statearr_44778_44836[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 29))
{var inst_44698 = (state_44709[2]);var state_44709__$1 = state_44709;var statearr_44779_44837 = state_44709__$1;(statearr_44779_44837[2] = inst_44698);
(statearr_44779_44837[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 30))
{var inst_44653 = (state_44709[10]);var inst_44652 = (state_44709[11]);var inst_44651 = (state_44709[12]);var inst_44650 = (state_44709[13]);var inst_44667 = (state_44709[2]);var inst_44668 = (inst_44653 + 1);var tmp44773 = inst_44652;var tmp44774 = inst_44651;var tmp44775 = inst_44650;var inst_44650__$1 = tmp44775;var inst_44651__$1 = tmp44774;var inst_44652__$1 = tmp44773;var inst_44653__$1 = inst_44668;var state_44709__$1 = (function (){var statearr_44780 = state_44709;(statearr_44780[10] = inst_44653__$1);
(statearr_44780[11] = inst_44652__$1);
(statearr_44780[12] = inst_44651__$1);
(statearr_44780[13] = inst_44650__$1);
(statearr_44780[30] = inst_44667);
return statearr_44780;
})();var statearr_44781_44838 = state_44709__$1;(statearr_44781_44838[2] = null);
(statearr_44781_44838[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44710 === 31))
{var inst_44658 = (state_44709[7]);var inst_44659 = (state_44709[2]);var inst_44660 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_44661 = cljs.core.async.untap_STAR_.call(null,m,inst_44658);var state_44709__$1 = (function (){var statearr_44782 = state_44709;(statearr_44782[31] = inst_44659);
(statearr_44782[32] = inst_44660);
return statearr_44782;
})();var statearr_44783_44839 = state_44709__$1;(statearr_44783_44839[2] = inst_44661);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44709__$1);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_44787 = (new Array(33));(statearr_44787[0] = state_machine__6013__auto__);
(statearr_44787[1] = 1);
return statearr_44787;
});
var state_machine__6013__auto____1 = (function (state_44709){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_44709);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e44788){if((e44788 instanceof Object))
{var ex__6016__auto__ = e44788;var statearr_44789_44840 = state_44709;(statearr_44789_44840[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44841 = state_44709;
state_44709 = G__44841;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_44709){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_44709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_44790 = f__6083__auto__.call(null);(statearr_44790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___44791);
return statearr_44790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.Mix = (function (){var obj44843 = {};return obj44843;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t44953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44953 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta44954){
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
this.meta44954 = meta44954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44953.cljs$lang$type = true;
cljs.core.async.t44953.cljs$lang$ctorStr = "cljs.core.async/t44953";
cljs.core.async.t44953.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t44953");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t44953.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44953.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44955){var self__ = this;
var _44955__$1 = this;return self__.meta44954;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44955,meta44954__$1){var self__ = this;
var _44955__$1 = this;return (new cljs.core.async.t44953(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta44954__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t44953 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t44953(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta44954){return (new cljs.core.async.t44953(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta44954));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t44953(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6082__auto___45062 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_45020){var state_val_45021 = (state_45020[1]);if((state_val_45021 === 1))
{var inst_44959 = (state_45020[7]);var inst_44959__$1 = calc_state.call(null);var inst_44960 = cljs.core.seq_QMARK_.call(null,inst_44959__$1);var state_45020__$1 = (function (){var statearr_45022 = state_45020;(statearr_45022[7] = inst_44959__$1);
return statearr_45022;
})();if(inst_44960)
{var statearr_45023_45063 = state_45020__$1;(statearr_45023_45063[1] = 2);
} else
{var statearr_45024_45064 = state_45020__$1;(statearr_45024_45064[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 2))
{var inst_44959 = (state_45020[7]);var inst_44962 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44959);var state_45020__$1 = state_45020;var statearr_45025_45065 = state_45020__$1;(statearr_45025_45065[2] = inst_44962);
(statearr_45025_45065[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 3))
{var inst_44959 = (state_45020[7]);var state_45020__$1 = state_45020;var statearr_45026_45066 = state_45020__$1;(statearr_45026_45066[2] = inst_44959);
(statearr_45026_45066[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 4))
{var inst_44959 = (state_45020[7]);var inst_44965 = (state_45020[2]);var inst_44966 = cljs.core.get.call(null,inst_44965,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_44967 = cljs.core.get.call(null,inst_44965,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_44968 = cljs.core.get.call(null,inst_44965,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_44969 = inst_44959;var state_45020__$1 = (function (){var statearr_45027 = state_45020;(statearr_45027[8] = inst_44967);
(statearr_45027[9] = inst_44966);
(statearr_45027[10] = inst_44969);
(statearr_45027[11] = inst_44968);
return statearr_45027;
})();var statearr_45028_45067 = state_45020__$1;(statearr_45028_45067[2] = null);
(statearr_45028_45067[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 5))
{var inst_44969 = (state_45020[10]);var inst_44972 = cljs.core.seq_QMARK_.call(null,inst_44969);var state_45020__$1 = state_45020;if(inst_44972)
{var statearr_45029_45068 = state_45020__$1;(statearr_45029_45068[1] = 7);
} else
{var statearr_45030_45069 = state_45020__$1;(statearr_45030_45069[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 6))
{var inst_45018 = (state_45020[2]);var state_45020__$1 = state_45020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45020__$1,inst_45018);
} else
{if((state_val_45021 === 7))
{var inst_44969 = (state_45020[10]);var inst_44974 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44969);var state_45020__$1 = state_45020;var statearr_45031_45070 = state_45020__$1;(statearr_45031_45070[2] = inst_44974);
(statearr_45031_45070[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 8))
{var inst_44969 = (state_45020[10]);var state_45020__$1 = state_45020;var statearr_45032_45071 = state_45020__$1;(statearr_45032_45071[2] = inst_44969);
(statearr_45032_45071[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 9))
{var inst_44977 = (state_45020[12]);var inst_44977__$1 = (state_45020[2]);var inst_44978 = cljs.core.get.call(null,inst_44977__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_44979 = cljs.core.get.call(null,inst_44977__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_44980 = cljs.core.get.call(null,inst_44977__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_45020__$1 = (function (){var statearr_45033 = state_45020;(statearr_45033[12] = inst_44977__$1);
(statearr_45033[13] = inst_44979);
(statearr_45033[14] = inst_44980);
return statearr_45033;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_45020__$1,10,inst_44978);
} else
{if((state_val_45021 === 10))
{var inst_44984 = (state_45020[15]);var inst_44985 = (state_45020[16]);var inst_44983 = (state_45020[2]);var inst_44984__$1 = cljs.core.nth.call(null,inst_44983,0,null);var inst_44985__$1 = cljs.core.nth.call(null,inst_44983,1,null);var inst_44986 = (inst_44984__$1 == null);var inst_44987 = cljs.core._EQ_.call(null,inst_44985__$1,change);var inst_44988 = (inst_44986) || (inst_44987);var state_45020__$1 = (function (){var statearr_45034 = state_45020;(statearr_45034[15] = inst_44984__$1);
(statearr_45034[16] = inst_44985__$1);
return statearr_45034;
})();if(cljs.core.truth_(inst_44988))
{var statearr_45035_45072 = state_45020__$1;(statearr_45035_45072[1] = 11);
} else
{var statearr_45036_45073 = state_45020__$1;(statearr_45036_45073[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 11))
{var inst_44984 = (state_45020[15]);var inst_44990 = (inst_44984 == null);var state_45020__$1 = state_45020;if(cljs.core.truth_(inst_44990))
{var statearr_45037_45074 = state_45020__$1;(statearr_45037_45074[1] = 14);
} else
{var statearr_45038_45075 = state_45020__$1;(statearr_45038_45075[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 12))
{var inst_44999 = (state_45020[17]);var inst_44985 = (state_45020[16]);var inst_44980 = (state_45020[14]);var inst_44999__$1 = inst_44980.call(null,inst_44985);var state_45020__$1 = (function (){var statearr_45039 = state_45020;(statearr_45039[17] = inst_44999__$1);
return statearr_45039;
})();if(cljs.core.truth_(inst_44999__$1))
{var statearr_45040_45076 = state_45020__$1;(statearr_45040_45076[1] = 17);
} else
{var statearr_45041_45077 = state_45020__$1;(statearr_45041_45077[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 13))
{var inst_45016 = (state_45020[2]);var state_45020__$1 = state_45020;var statearr_45042_45078 = state_45020__$1;(statearr_45042_45078[2] = inst_45016);
(statearr_45042_45078[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 14))
{var inst_44985 = (state_45020[16]);var inst_44992 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44985);var state_45020__$1 = state_45020;var statearr_45043_45079 = state_45020__$1;(statearr_45043_45079[2] = inst_44992);
(statearr_45043_45079[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 15))
{var state_45020__$1 = state_45020;var statearr_45044_45080 = state_45020__$1;(statearr_45044_45080[2] = null);
(statearr_45044_45080[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 16))
{var inst_44995 = (state_45020[2]);var inst_44996 = calc_state.call(null);var inst_44969 = inst_44996;var state_45020__$1 = (function (){var statearr_45045 = state_45020;(statearr_45045[18] = inst_44995);
(statearr_45045[10] = inst_44969);
return statearr_45045;
})();var statearr_45046_45081 = state_45020__$1;(statearr_45046_45081[2] = null);
(statearr_45046_45081[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 17))
{var inst_44999 = (state_45020[17]);var state_45020__$1 = state_45020;var statearr_45047_45082 = state_45020__$1;(statearr_45047_45082[2] = inst_44999);
(statearr_45047_45082[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 18))
{var inst_44979 = (state_45020[13]);var inst_44985 = (state_45020[16]);var inst_44980 = (state_45020[14]);var inst_45002 = cljs.core.empty_QMARK_.call(null,inst_44980);var inst_45003 = inst_44979.call(null,inst_44985);var inst_45004 = cljs.core.not.call(null,inst_45003);var inst_45005 = (inst_45002) && (inst_45004);var state_45020__$1 = state_45020;var statearr_45048_45083 = state_45020__$1;(statearr_45048_45083[2] = inst_45005);
(statearr_45048_45083[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 19))
{var inst_45007 = (state_45020[2]);var state_45020__$1 = state_45020;if(cljs.core.truth_(inst_45007))
{var statearr_45049_45084 = state_45020__$1;(statearr_45049_45084[1] = 20);
} else
{var statearr_45050_45085 = state_45020__$1;(statearr_45050_45085[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 20))
{var inst_44984 = (state_45020[15]);var state_45020__$1 = state_45020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45020__$1,23,out,inst_44984);
} else
{if((state_val_45021 === 21))
{var state_45020__$1 = state_45020;var statearr_45051_45086 = state_45020__$1;(statearr_45051_45086[2] = null);
(statearr_45051_45086[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 22))
{var inst_44977 = (state_45020[12]);var inst_45013 = (state_45020[2]);var inst_44969 = inst_44977;var state_45020__$1 = (function (){var statearr_45052 = state_45020;(statearr_45052[19] = inst_45013);
(statearr_45052[10] = inst_44969);
return statearr_45052;
})();var statearr_45053_45087 = state_45020__$1;(statearr_45053_45087[2] = null);
(statearr_45053_45087[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45021 === 23))
{var inst_45010 = (state_45020[2]);var state_45020__$1 = state_45020;var statearr_45054_45088 = state_45020__$1;(statearr_45054_45088[2] = inst_45010);
(statearr_45054_45088[1] = 22);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_45058 = (new Array(20));(statearr_45058[0] = state_machine__6013__auto__);
(statearr_45058[1] = 1);
return statearr_45058;
});
var state_machine__6013__auto____1 = (function (state_45020){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_45020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e45059){if((e45059 instanceof Object))
{var ex__6016__auto__ = e45059;var statearr_45060_45089 = state_45020;(statearr_45060_45089[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45090 = state_45020;
state_45020 = G__45090;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_45020){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_45020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_45061 = f__6083__auto__.call(null);(statearr_45061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___45062);
return statearr_45061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.Pub = (function (){var obj45092 = {};return obj45092;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3291__auto__,mults){
return (function (p1__45093_SHARP_){if(cljs.core.truth_(p1__45093_SHARP_.call(null,topic)))
{return p1__45093_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__45093_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t45218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t45218 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta45219){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta45219 = meta45219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45218.cljs$lang$type = true;
cljs.core.async.t45218.cljs$lang$ctorStr = "cljs.core.async/t45218";
cljs.core.async.t45218.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t45218");
});})(mults,ensure_mult))
;
cljs.core.async.t45218.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t45218.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t45218.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t45218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t45218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t45218.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t45218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t45218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45220){var self__ = this;
var _45220__$1 = this;return self__.meta45219;
});})(mults,ensure_mult))
;
cljs.core.async.t45218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45220,meta45219__$1){var self__ = this;
var _45220__$1 = this;return (new cljs.core.async.t45218(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta45219__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t45218 = ((function (mults,ensure_mult){
return (function __GT_t45218(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45219){return (new cljs.core.async.t45218(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45219));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t45218(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6082__auto___45342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_45294){var state_val_45295 = (state_45294[1]);if((state_val_45295 === 1))
{var state_45294__$1 = state_45294;var statearr_45296_45343 = state_45294__$1;(statearr_45296_45343[2] = null);
(statearr_45296_45343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 2))
{var state_45294__$1 = state_45294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45294__$1,4,ch);
} else
{if((state_val_45295 === 3))
{var inst_45292 = (state_45294[2]);var state_45294__$1 = state_45294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45294__$1,inst_45292);
} else
{if((state_val_45295 === 4))
{var inst_45223 = (state_45294[7]);var inst_45223__$1 = (state_45294[2]);var inst_45224 = (inst_45223__$1 == null);var state_45294__$1 = (function (){var statearr_45297 = state_45294;(statearr_45297[7] = inst_45223__$1);
return statearr_45297;
})();if(cljs.core.truth_(inst_45224))
{var statearr_45298_45344 = state_45294__$1;(statearr_45298_45344[1] = 5);
} else
{var statearr_45299_45345 = state_45294__$1;(statearr_45299_45345[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 5))
{var inst_45230 = cljs.core.deref.call(null,mults);var inst_45231 = cljs.core.vals.call(null,inst_45230);var inst_45232 = cljs.core.seq.call(null,inst_45231);var inst_45233 = inst_45232;var inst_45234 = null;var inst_45235 = 0;var inst_45236 = 0;var state_45294__$1 = (function (){var statearr_45300 = state_45294;(statearr_45300[8] = inst_45236);
(statearr_45300[9] = inst_45235);
(statearr_45300[10] = inst_45234);
(statearr_45300[11] = inst_45233);
return statearr_45300;
})();var statearr_45301_45346 = state_45294__$1;(statearr_45301_45346[2] = null);
(statearr_45301_45346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 6))
{var inst_45223 = (state_45294[7]);var inst_45273 = (state_45294[12]);var inst_45271 = (state_45294[13]);var inst_45271__$1 = topic_fn.call(null,inst_45223);var inst_45272 = cljs.core.deref.call(null,mults);var inst_45273__$1 = cljs.core.get.call(null,inst_45272,inst_45271__$1);var state_45294__$1 = (function (){var statearr_45302 = state_45294;(statearr_45302[12] = inst_45273__$1);
(statearr_45302[13] = inst_45271__$1);
return statearr_45302;
})();if(cljs.core.truth_(inst_45273__$1))
{var statearr_45303_45347 = state_45294__$1;(statearr_45303_45347[1] = 19);
} else
{var statearr_45304_45348 = state_45294__$1;(statearr_45304_45348[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 7))
{var inst_45290 = (state_45294[2]);var state_45294__$1 = state_45294;var statearr_45305_45349 = state_45294__$1;(statearr_45305_45349[2] = inst_45290);
(statearr_45305_45349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 8))
{var inst_45236 = (state_45294[8]);var inst_45235 = (state_45294[9]);var inst_45238 = (inst_45236 < inst_45235);var inst_45239 = inst_45238;var state_45294__$1 = state_45294;if(cljs.core.truth_(inst_45239))
{var statearr_45309_45350 = state_45294__$1;(statearr_45309_45350[1] = 10);
} else
{var statearr_45310_45351 = state_45294__$1;(statearr_45310_45351[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 9))
{var inst_45269 = (state_45294[2]);var state_45294__$1 = state_45294;var statearr_45311_45352 = state_45294__$1;(statearr_45311_45352[2] = inst_45269);
(statearr_45311_45352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 10))
{var inst_45236 = (state_45294[8]);var inst_45235 = (state_45294[9]);var inst_45234 = (state_45294[10]);var inst_45233 = (state_45294[11]);var inst_45241 = cljs.core._nth.call(null,inst_45234,inst_45236);var inst_45242 = cljs.core.async.muxch_STAR_.call(null,inst_45241);var inst_45243 = cljs.core.async.close_BANG_.call(null,inst_45242);var inst_45244 = (inst_45236 + 1);var tmp45306 = inst_45235;var tmp45307 = inst_45234;var tmp45308 = inst_45233;var inst_45233__$1 = tmp45308;var inst_45234__$1 = tmp45307;var inst_45235__$1 = tmp45306;var inst_45236__$1 = inst_45244;var state_45294__$1 = (function (){var statearr_45312 = state_45294;(statearr_45312[14] = inst_45243);
(statearr_45312[8] = inst_45236__$1);
(statearr_45312[9] = inst_45235__$1);
(statearr_45312[10] = inst_45234__$1);
(statearr_45312[11] = inst_45233__$1);
return statearr_45312;
})();var statearr_45313_45353 = state_45294__$1;(statearr_45313_45353[2] = null);
(statearr_45313_45353[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 11))
{var inst_45247 = (state_45294[15]);var inst_45233 = (state_45294[11]);var inst_45247__$1 = cljs.core.seq.call(null,inst_45233);var state_45294__$1 = (function (){var statearr_45314 = state_45294;(statearr_45314[15] = inst_45247__$1);
return statearr_45314;
})();if(inst_45247__$1)
{var statearr_45315_45354 = state_45294__$1;(statearr_45315_45354[1] = 13);
} else
{var statearr_45316_45355 = state_45294__$1;(statearr_45316_45355[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 12))
{var inst_45267 = (state_45294[2]);var state_45294__$1 = state_45294;var statearr_45317_45356 = state_45294__$1;(statearr_45317_45356[2] = inst_45267);
(statearr_45317_45356[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 13))
{var inst_45247 = (state_45294[15]);var inst_45249 = cljs.core.chunked_seq_QMARK_.call(null,inst_45247);var state_45294__$1 = state_45294;if(inst_45249)
{var statearr_45318_45357 = state_45294__$1;(statearr_45318_45357[1] = 16);
} else
{var statearr_45319_45358 = state_45294__$1;(statearr_45319_45358[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 14))
{var state_45294__$1 = state_45294;var statearr_45320_45359 = state_45294__$1;(statearr_45320_45359[2] = null);
(statearr_45320_45359[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 15))
{var inst_45265 = (state_45294[2]);var state_45294__$1 = state_45294;var statearr_45321_45360 = state_45294__$1;(statearr_45321_45360[2] = inst_45265);
(statearr_45321_45360[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 16))
{var inst_45247 = (state_45294[15]);var inst_45251 = cljs.core.chunk_first.call(null,inst_45247);var inst_45252 = cljs.core.chunk_rest.call(null,inst_45247);var inst_45253 = cljs.core.count.call(null,inst_45251);var inst_45233 = inst_45252;var inst_45234 = inst_45251;var inst_45235 = inst_45253;var inst_45236 = 0;var state_45294__$1 = (function (){var statearr_45322 = state_45294;(statearr_45322[8] = inst_45236);
(statearr_45322[9] = inst_45235);
(statearr_45322[10] = inst_45234);
(statearr_45322[11] = inst_45233);
return statearr_45322;
})();var statearr_45323_45361 = state_45294__$1;(statearr_45323_45361[2] = null);
(statearr_45323_45361[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 17))
{var inst_45247 = (state_45294[15]);var inst_45256 = cljs.core.first.call(null,inst_45247);var inst_45257 = cljs.core.async.muxch_STAR_.call(null,inst_45256);var inst_45258 = cljs.core.async.close_BANG_.call(null,inst_45257);var inst_45259 = cljs.core.next.call(null,inst_45247);var inst_45233 = inst_45259;var inst_45234 = null;var inst_45235 = 0;var inst_45236 = 0;var state_45294__$1 = (function (){var statearr_45324 = state_45294;(statearr_45324[16] = inst_45258);
(statearr_45324[8] = inst_45236);
(statearr_45324[9] = inst_45235);
(statearr_45324[10] = inst_45234);
(statearr_45324[11] = inst_45233);
return statearr_45324;
})();var statearr_45325_45362 = state_45294__$1;(statearr_45325_45362[2] = null);
(statearr_45325_45362[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 18))
{var inst_45262 = (state_45294[2]);var state_45294__$1 = state_45294;var statearr_45326_45363 = state_45294__$1;(statearr_45326_45363[2] = inst_45262);
(statearr_45326_45363[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 19))
{var state_45294__$1 = state_45294;var statearr_45327_45364 = state_45294__$1;(statearr_45327_45364[2] = null);
(statearr_45327_45364[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 20))
{var state_45294__$1 = state_45294;var statearr_45328_45365 = state_45294__$1;(statearr_45328_45365[2] = null);
(statearr_45328_45365[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 21))
{var inst_45287 = (state_45294[2]);var state_45294__$1 = (function (){var statearr_45329 = state_45294;(statearr_45329[17] = inst_45287);
return statearr_45329;
})();var statearr_45330_45366 = state_45294__$1;(statearr_45330_45366[2] = null);
(statearr_45330_45366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 22))
{var inst_45284 = (state_45294[2]);var state_45294__$1 = state_45294;var statearr_45331_45367 = state_45294__$1;(statearr_45331_45367[2] = inst_45284);
(statearr_45331_45367[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 23))
{var inst_45271 = (state_45294[13]);var inst_45275 = (state_45294[2]);var inst_45276 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45271);var state_45294__$1 = (function (){var statearr_45332 = state_45294;(statearr_45332[18] = inst_45275);
return statearr_45332;
})();var statearr_45333_45368 = state_45294__$1;(statearr_45333_45368[2] = inst_45276);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45294__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45295 === 24))
{var inst_45223 = (state_45294[7]);var inst_45273 = (state_45294[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45294,23,Object,null,22);var inst_45280 = cljs.core.async.muxch_STAR_.call(null,inst_45273);var state_45294__$1 = state_45294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45294__$1,25,inst_45280,inst_45223);
} else
{if((state_val_45295 === 25))
{var inst_45282 = (state_45294[2]);var state_45294__$1 = state_45294;var statearr_45334_45369 = state_45294__$1;(statearr_45334_45369[2] = inst_45282);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45294__$1);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_45338 = (new Array(19));(statearr_45338[0] = state_machine__6013__auto__);
(statearr_45338[1] = 1);
return statearr_45338;
});
var state_machine__6013__auto____1 = (function (state_45294){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_45294);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e45339){if((e45339 instanceof Object))
{var ex__6016__auto__ = e45339;var statearr_45340_45370 = state_45294;(statearr_45340_45370[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45371 = state_45294;
state_45294 = G__45371;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_45294){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_45294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_45341 = f__6083__auto__.call(null);(statearr_45341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___45342);
return statearr_45341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
,cljs.core.range.call(null,cnt));var c__6082__auto___45508 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_45478){var state_val_45479 = (state_45478[1]);if((state_val_45479 === 1))
{var state_45478__$1 = state_45478;var statearr_45480_45509 = state_45478__$1;(statearr_45480_45509[2] = null);
(statearr_45480_45509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 2))
{var inst_45441 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_45442 = 0;var state_45478__$1 = (function (){var statearr_45481 = state_45478;(statearr_45481[7] = inst_45442);
(statearr_45481[8] = inst_45441);
return statearr_45481;
})();var statearr_45482_45510 = state_45478__$1;(statearr_45482_45510[2] = null);
(statearr_45482_45510[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 3))
{var inst_45476 = (state_45478[2]);var state_45478__$1 = state_45478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45478__$1,inst_45476);
} else
{if((state_val_45479 === 4))
{var inst_45442 = (state_45478[7]);var inst_45444 = (inst_45442 < cnt);var state_45478__$1 = state_45478;if(cljs.core.truth_(inst_45444))
{var statearr_45483_45511 = state_45478__$1;(statearr_45483_45511[1] = 6);
} else
{var statearr_45484_45512 = state_45478__$1;(statearr_45484_45512[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 5))
{var inst_45462 = (state_45478[2]);var state_45478__$1 = (function (){var statearr_45485 = state_45478;(statearr_45485[9] = inst_45462);
return statearr_45485;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45478__$1,12,dchan);
} else
{if((state_val_45479 === 6))
{var state_45478__$1 = state_45478;var statearr_45486_45513 = state_45478__$1;(statearr_45486_45513[2] = null);
(statearr_45486_45513[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 7))
{var state_45478__$1 = state_45478;var statearr_45487_45514 = state_45478__$1;(statearr_45487_45514[2] = null);
(statearr_45487_45514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 8))
{var inst_45460 = (state_45478[2]);var state_45478__$1 = state_45478;var statearr_45488_45515 = state_45478__$1;(statearr_45488_45515[2] = inst_45460);
(statearr_45488_45515[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 9))
{var inst_45442 = (state_45478[7]);var inst_45455 = (state_45478[2]);var inst_45456 = (inst_45442 + 1);var inst_45442__$1 = inst_45456;var state_45478__$1 = (function (){var statearr_45489 = state_45478;(statearr_45489[10] = inst_45455);
(statearr_45489[7] = inst_45442__$1);
return statearr_45489;
})();var statearr_45490_45516 = state_45478__$1;(statearr_45490_45516[2] = null);
(statearr_45490_45516[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 10))
{var inst_45446 = (state_45478[2]);var inst_45447 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_45478__$1 = (function (){var statearr_45491 = state_45478;(statearr_45491[11] = inst_45446);
return statearr_45491;
})();var statearr_45492_45517 = state_45478__$1;(statearr_45492_45517[2] = inst_45447);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 11))
{var inst_45442 = (state_45478[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45478,10,Object,null,9);var inst_45451 = chs__$1.call(null,inst_45442);var inst_45452 = done.call(null,inst_45442);var inst_45453 = cljs.core.async.take_BANG_.call(null,inst_45451,inst_45452);var state_45478__$1 = state_45478;var statearr_45493_45518 = state_45478__$1;(statearr_45493_45518[2] = inst_45453);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 12))
{var inst_45464 = (state_45478[12]);var inst_45464__$1 = (state_45478[2]);var inst_45465 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45464__$1);var state_45478__$1 = (function (){var statearr_45494 = state_45478;(statearr_45494[12] = inst_45464__$1);
return statearr_45494;
})();if(cljs.core.truth_(inst_45465))
{var statearr_45495_45519 = state_45478__$1;(statearr_45495_45519[1] = 13);
} else
{var statearr_45496_45520 = state_45478__$1;(statearr_45496_45520[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 13))
{var inst_45467 = cljs.core.async.close_BANG_.call(null,out);var state_45478__$1 = state_45478;var statearr_45497_45521 = state_45478__$1;(statearr_45497_45521[2] = inst_45467);
(statearr_45497_45521[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 14))
{var inst_45464 = (state_45478[12]);var inst_45469 = cljs.core.apply.call(null,f,inst_45464);var state_45478__$1 = state_45478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45478__$1,16,out,inst_45469);
} else
{if((state_val_45479 === 15))
{var inst_45474 = (state_45478[2]);var state_45478__$1 = state_45478;var statearr_45498_45522 = state_45478__$1;(statearr_45498_45522[2] = inst_45474);
(statearr_45498_45522[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45479 === 16))
{var inst_45471 = (state_45478[2]);var state_45478__$1 = (function (){var statearr_45499 = state_45478;(statearr_45499[13] = inst_45471);
return statearr_45499;
})();var statearr_45500_45523 = state_45478__$1;(statearr_45500_45523[2] = null);
(statearr_45500_45523[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_45504 = (new Array(14));(statearr_45504[0] = state_machine__6013__auto__);
(statearr_45504[1] = 1);
return statearr_45504;
});
var state_machine__6013__auto____1 = (function (state_45478){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_45478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e45505){if((e45505 instanceof Object))
{var ex__6016__auto__ = e45505;var statearr_45506_45524 = state_45478;(statearr_45506_45524[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45525 = state_45478;
state_45478 = G__45525;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_45478){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_45478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_45507 = f__6083__auto__.call(null);(statearr_45507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___45508);
return statearr_45507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___45633 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_45609){var state_val_45610 = (state_45609[1]);if((state_val_45610 === 1))
{var inst_45580 = cljs.core.vec.call(null,chs);var inst_45581 = inst_45580;var state_45609__$1 = (function (){var statearr_45611 = state_45609;(statearr_45611[7] = inst_45581);
return statearr_45611;
})();var statearr_45612_45634 = state_45609__$1;(statearr_45612_45634[2] = null);
(statearr_45612_45634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45610 === 2))
{var inst_45581 = (state_45609[7]);var inst_45583 = cljs.core.count.call(null,inst_45581);var inst_45584 = (inst_45583 > 0);var state_45609__$1 = state_45609;if(cljs.core.truth_(inst_45584))
{var statearr_45613_45635 = state_45609__$1;(statearr_45613_45635[1] = 4);
} else
{var statearr_45614_45636 = state_45609__$1;(statearr_45614_45636[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45610 === 3))
{var inst_45607 = (state_45609[2]);var state_45609__$1 = state_45609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45609__$1,inst_45607);
} else
{if((state_val_45610 === 4))
{var inst_45581 = (state_45609[7]);var state_45609__$1 = state_45609;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_45609__$1,7,inst_45581);
} else
{if((state_val_45610 === 5))
{var inst_45603 = cljs.core.async.close_BANG_.call(null,out);var state_45609__$1 = state_45609;var statearr_45615_45637 = state_45609__$1;(statearr_45615_45637[2] = inst_45603);
(statearr_45615_45637[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45610 === 6))
{var inst_45605 = (state_45609[2]);var state_45609__$1 = state_45609;var statearr_45616_45638 = state_45609__$1;(statearr_45616_45638[2] = inst_45605);
(statearr_45616_45638[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45610 === 7))
{var inst_45588 = (state_45609[8]);var inst_45589 = (state_45609[9]);var inst_45588__$1 = (state_45609[2]);var inst_45589__$1 = cljs.core.nth.call(null,inst_45588__$1,0,null);var inst_45590 = cljs.core.nth.call(null,inst_45588__$1,1,null);var inst_45591 = (inst_45589__$1 == null);var state_45609__$1 = (function (){var statearr_45617 = state_45609;(statearr_45617[8] = inst_45588__$1);
(statearr_45617[10] = inst_45590);
(statearr_45617[9] = inst_45589__$1);
return statearr_45617;
})();if(cljs.core.truth_(inst_45591))
{var statearr_45618_45639 = state_45609__$1;(statearr_45618_45639[1] = 8);
} else
{var statearr_45619_45640 = state_45609__$1;(statearr_45619_45640[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45610 === 8))
{var inst_45588 = (state_45609[8]);var inst_45581 = (state_45609[7]);var inst_45590 = (state_45609[10]);var inst_45589 = (state_45609[9]);var inst_45593 = (function (){var c = inst_45590;var v = inst_45589;var vec__45586 = inst_45588;var cs = inst_45581;return ((function (c,v,vec__45586,cs,inst_45588,inst_45581,inst_45590,inst_45589,state_val_45610){
return (function (p1__45526_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__45526_SHARP_);
});
;})(c,v,vec__45586,cs,inst_45588,inst_45581,inst_45590,inst_45589,state_val_45610))
})();var inst_45594 = cljs.core.filterv.call(null,inst_45593,inst_45581);var inst_45581__$1 = inst_45594;var state_45609__$1 = (function (){var statearr_45620 = state_45609;(statearr_45620[7] = inst_45581__$1);
return statearr_45620;
})();var statearr_45621_45641 = state_45609__$1;(statearr_45621_45641[2] = null);
(statearr_45621_45641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45610 === 9))
{var inst_45589 = (state_45609[9]);var state_45609__$1 = state_45609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45609__$1,11,out,inst_45589);
} else
{if((state_val_45610 === 10))
{var inst_45601 = (state_45609[2]);var state_45609__$1 = state_45609;var statearr_45623_45642 = state_45609__$1;(statearr_45623_45642[2] = inst_45601);
(statearr_45623_45642[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45610 === 11))
{var inst_45581 = (state_45609[7]);var inst_45598 = (state_45609[2]);var tmp45622 = inst_45581;var inst_45581__$1 = tmp45622;var state_45609__$1 = (function (){var statearr_45624 = state_45609;(statearr_45624[7] = inst_45581__$1);
(statearr_45624[11] = inst_45598);
return statearr_45624;
})();var statearr_45625_45643 = state_45609__$1;(statearr_45625_45643[2] = null);
(statearr_45625_45643[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_45629 = (new Array(12));(statearr_45629[0] = state_machine__6013__auto__);
(statearr_45629[1] = 1);
return statearr_45629;
});
var state_machine__6013__auto____1 = (function (state_45609){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_45609);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e45630){if((e45630 instanceof Object))
{var ex__6016__auto__ = e45630;var statearr_45631_45644 = state_45609;(statearr_45631_45644[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45645 = state_45609;
state_45609 = G__45645;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_45609){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_45609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_45632 = f__6083__auto__.call(null);(statearr_45632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___45633);
return statearr_45632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___45738 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_45715){var state_val_45716 = (state_45715[1]);if((state_val_45716 === 1))
{var inst_45692 = 0;var state_45715__$1 = (function (){var statearr_45717 = state_45715;(statearr_45717[7] = inst_45692);
return statearr_45717;
})();var statearr_45718_45739 = state_45715__$1;(statearr_45718_45739[2] = null);
(statearr_45718_45739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45716 === 2))
{var inst_45692 = (state_45715[7]);var inst_45694 = (inst_45692 < n);var state_45715__$1 = state_45715;if(cljs.core.truth_(inst_45694))
{var statearr_45719_45740 = state_45715__$1;(statearr_45719_45740[1] = 4);
} else
{var statearr_45720_45741 = state_45715__$1;(statearr_45720_45741[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45716 === 3))
{var inst_45712 = (state_45715[2]);var inst_45713 = cljs.core.async.close_BANG_.call(null,out);var state_45715__$1 = (function (){var statearr_45721 = state_45715;(statearr_45721[8] = inst_45712);
return statearr_45721;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45715__$1,inst_45713);
} else
{if((state_val_45716 === 4))
{var state_45715__$1 = state_45715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45715__$1,7,ch);
} else
{if((state_val_45716 === 5))
{var state_45715__$1 = state_45715;var statearr_45722_45742 = state_45715__$1;(statearr_45722_45742[2] = null);
(statearr_45722_45742[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45716 === 6))
{var inst_45710 = (state_45715[2]);var state_45715__$1 = state_45715;var statearr_45723_45743 = state_45715__$1;(statearr_45723_45743[2] = inst_45710);
(statearr_45723_45743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45716 === 7))
{var inst_45697 = (state_45715[9]);var inst_45697__$1 = (state_45715[2]);var inst_45698 = (inst_45697__$1 == null);var inst_45699 = cljs.core.not.call(null,inst_45698);var state_45715__$1 = (function (){var statearr_45724 = state_45715;(statearr_45724[9] = inst_45697__$1);
return statearr_45724;
})();if(inst_45699)
{var statearr_45725_45744 = state_45715__$1;(statearr_45725_45744[1] = 8);
} else
{var statearr_45726_45745 = state_45715__$1;(statearr_45726_45745[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45716 === 8))
{var inst_45697 = (state_45715[9]);var state_45715__$1 = state_45715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45715__$1,11,out,inst_45697);
} else
{if((state_val_45716 === 9))
{var state_45715__$1 = state_45715;var statearr_45727_45746 = state_45715__$1;(statearr_45727_45746[2] = null);
(statearr_45727_45746[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45716 === 10))
{var inst_45707 = (state_45715[2]);var state_45715__$1 = state_45715;var statearr_45728_45747 = state_45715__$1;(statearr_45728_45747[2] = inst_45707);
(statearr_45728_45747[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45716 === 11))
{var inst_45692 = (state_45715[7]);var inst_45702 = (state_45715[2]);var inst_45703 = (inst_45692 + 1);var inst_45692__$1 = inst_45703;var state_45715__$1 = (function (){var statearr_45729 = state_45715;(statearr_45729[7] = inst_45692__$1);
(statearr_45729[10] = inst_45702);
return statearr_45729;
})();var statearr_45730_45748 = state_45715__$1;(statearr_45730_45748[2] = null);
(statearr_45730_45748[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_45734 = (new Array(11));(statearr_45734[0] = state_machine__6013__auto__);
(statearr_45734[1] = 1);
return statearr_45734;
});
var state_machine__6013__auto____1 = (function (state_45715){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_45715);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e45735){if((e45735 instanceof Object))
{var ex__6016__auto__ = e45735;var statearr_45736_45749 = state_45715;(statearr_45736_45749[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45750 = state_45715;
state_45715 = G__45750;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_45715){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_45715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_45737 = f__6083__auto__.call(null);(statearr_45737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___45738);
return statearr_45737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___45847 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_45822){var state_val_45823 = (state_45822[1]);if((state_val_45823 === 1))
{var inst_45799 = null;var state_45822__$1 = (function (){var statearr_45824 = state_45822;(statearr_45824[7] = inst_45799);
return statearr_45824;
})();var statearr_45825_45848 = state_45822__$1;(statearr_45825_45848[2] = null);
(statearr_45825_45848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45823 === 2))
{var state_45822__$1 = state_45822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45822__$1,4,ch);
} else
{if((state_val_45823 === 3))
{var inst_45819 = (state_45822[2]);var inst_45820 = cljs.core.async.close_BANG_.call(null,out);var state_45822__$1 = (function (){var statearr_45826 = state_45822;(statearr_45826[8] = inst_45819);
return statearr_45826;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45822__$1,inst_45820);
} else
{if((state_val_45823 === 4))
{var inst_45802 = (state_45822[9]);var inst_45802__$1 = (state_45822[2]);var inst_45803 = (inst_45802__$1 == null);var inst_45804 = cljs.core.not.call(null,inst_45803);var state_45822__$1 = (function (){var statearr_45827 = state_45822;(statearr_45827[9] = inst_45802__$1);
return statearr_45827;
})();if(inst_45804)
{var statearr_45828_45849 = state_45822__$1;(statearr_45828_45849[1] = 5);
} else
{var statearr_45829_45850 = state_45822__$1;(statearr_45829_45850[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45823 === 5))
{var inst_45802 = (state_45822[9]);var inst_45799 = (state_45822[7]);var inst_45806 = cljs.core._EQ_.call(null,inst_45802,inst_45799);var state_45822__$1 = state_45822;if(inst_45806)
{var statearr_45830_45851 = state_45822__$1;(statearr_45830_45851[1] = 8);
} else
{var statearr_45831_45852 = state_45822__$1;(statearr_45831_45852[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45823 === 6))
{var state_45822__$1 = state_45822;var statearr_45833_45853 = state_45822__$1;(statearr_45833_45853[2] = null);
(statearr_45833_45853[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45823 === 7))
{var inst_45817 = (state_45822[2]);var state_45822__$1 = state_45822;var statearr_45834_45854 = state_45822__$1;(statearr_45834_45854[2] = inst_45817);
(statearr_45834_45854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45823 === 8))
{var inst_45799 = (state_45822[7]);var tmp45832 = inst_45799;var inst_45799__$1 = tmp45832;var state_45822__$1 = (function (){var statearr_45835 = state_45822;(statearr_45835[7] = inst_45799__$1);
return statearr_45835;
})();var statearr_45836_45855 = state_45822__$1;(statearr_45836_45855[2] = null);
(statearr_45836_45855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45823 === 9))
{var inst_45802 = (state_45822[9]);var state_45822__$1 = state_45822;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45822__$1,11,out,inst_45802);
} else
{if((state_val_45823 === 10))
{var inst_45814 = (state_45822[2]);var state_45822__$1 = state_45822;var statearr_45837_45856 = state_45822__$1;(statearr_45837_45856[2] = inst_45814);
(statearr_45837_45856[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45823 === 11))
{var inst_45802 = (state_45822[9]);var inst_45811 = (state_45822[2]);var inst_45799 = inst_45802;var state_45822__$1 = (function (){var statearr_45838 = state_45822;(statearr_45838[10] = inst_45811);
(statearr_45838[7] = inst_45799);
return statearr_45838;
})();var statearr_45839_45857 = state_45822__$1;(statearr_45839_45857[2] = null);
(statearr_45839_45857[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_45843 = (new Array(11));(statearr_45843[0] = state_machine__6013__auto__);
(statearr_45843[1] = 1);
return statearr_45843;
});
var state_machine__6013__auto____1 = (function (state_45822){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_45822);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e45844){if((e45844 instanceof Object))
{var ex__6016__auto__ = e45844;var statearr_45845_45858 = state_45822;(statearr_45845_45858[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45822);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45859 = state_45822;
state_45822 = G__45859;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_45822){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_45822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_45846 = f__6083__auto__.call(null);(statearr_45846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___45847);
return statearr_45846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___45994 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_45964){var state_val_45965 = (state_45964[1]);if((state_val_45965 === 1))
{var inst_45927 = (new Array(n));var inst_45928 = inst_45927;var inst_45929 = 0;var state_45964__$1 = (function (){var statearr_45966 = state_45964;(statearr_45966[7] = inst_45929);
(statearr_45966[8] = inst_45928);
return statearr_45966;
})();var statearr_45967_45995 = state_45964__$1;(statearr_45967_45995[2] = null);
(statearr_45967_45995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 2))
{var state_45964__$1 = state_45964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45964__$1,4,ch);
} else
{if((state_val_45965 === 3))
{var inst_45962 = (state_45964[2]);var state_45964__$1 = state_45964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45964__$1,inst_45962);
} else
{if((state_val_45965 === 4))
{var inst_45932 = (state_45964[9]);var inst_45932__$1 = (state_45964[2]);var inst_45933 = (inst_45932__$1 == null);var inst_45934 = cljs.core.not.call(null,inst_45933);var state_45964__$1 = (function (){var statearr_45968 = state_45964;(statearr_45968[9] = inst_45932__$1);
return statearr_45968;
})();if(inst_45934)
{var statearr_45969_45996 = state_45964__$1;(statearr_45969_45996[1] = 5);
} else
{var statearr_45970_45997 = state_45964__$1;(statearr_45970_45997[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 5))
{var inst_45932 = (state_45964[9]);var inst_45929 = (state_45964[7]);var inst_45928 = (state_45964[8]);var inst_45937 = (state_45964[10]);var inst_45936 = (inst_45928[inst_45929] = inst_45932);var inst_45937__$1 = (inst_45929 + 1);var inst_45938 = (inst_45937__$1 < n);var state_45964__$1 = (function (){var statearr_45971 = state_45964;(statearr_45971[10] = inst_45937__$1);
(statearr_45971[11] = inst_45936);
return statearr_45971;
})();if(cljs.core.truth_(inst_45938))
{var statearr_45972_45998 = state_45964__$1;(statearr_45972_45998[1] = 8);
} else
{var statearr_45973_45999 = state_45964__$1;(statearr_45973_45999[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 6))
{var inst_45929 = (state_45964[7]);var inst_45950 = (inst_45929 > 0);var state_45964__$1 = state_45964;if(cljs.core.truth_(inst_45950))
{var statearr_45975_46000 = state_45964__$1;(statearr_45975_46000[1] = 12);
} else
{var statearr_45976_46001 = state_45964__$1;(statearr_45976_46001[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 7))
{var inst_45960 = (state_45964[2]);var state_45964__$1 = state_45964;var statearr_45977_46002 = state_45964__$1;(statearr_45977_46002[2] = inst_45960);
(statearr_45977_46002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 8))
{var inst_45928 = (state_45964[8]);var inst_45937 = (state_45964[10]);var tmp45974 = inst_45928;var inst_45928__$1 = tmp45974;var inst_45929 = inst_45937;var state_45964__$1 = (function (){var statearr_45978 = state_45964;(statearr_45978[7] = inst_45929);
(statearr_45978[8] = inst_45928__$1);
return statearr_45978;
})();var statearr_45979_46003 = state_45964__$1;(statearr_45979_46003[2] = null);
(statearr_45979_46003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 9))
{var inst_45928 = (state_45964[8]);var inst_45942 = cljs.core.vec.call(null,inst_45928);var state_45964__$1 = state_45964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45964__$1,11,out,inst_45942);
} else
{if((state_val_45965 === 10))
{var inst_45948 = (state_45964[2]);var state_45964__$1 = state_45964;var statearr_45980_46004 = state_45964__$1;(statearr_45980_46004[2] = inst_45948);
(statearr_45980_46004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 11))
{var inst_45944 = (state_45964[2]);var inst_45945 = (new Array(n));var inst_45928 = inst_45945;var inst_45929 = 0;var state_45964__$1 = (function (){var statearr_45981 = state_45964;(statearr_45981[7] = inst_45929);
(statearr_45981[8] = inst_45928);
(statearr_45981[12] = inst_45944);
return statearr_45981;
})();var statearr_45982_46005 = state_45964__$1;(statearr_45982_46005[2] = null);
(statearr_45982_46005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 12))
{var inst_45928 = (state_45964[8]);var inst_45952 = cljs.core.vec.call(null,inst_45928);var state_45964__$1 = state_45964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45964__$1,15,out,inst_45952);
} else
{if((state_val_45965 === 13))
{var state_45964__$1 = state_45964;var statearr_45983_46006 = state_45964__$1;(statearr_45983_46006[2] = null);
(statearr_45983_46006[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 14))
{var inst_45957 = (state_45964[2]);var inst_45958 = cljs.core.async.close_BANG_.call(null,out);var state_45964__$1 = (function (){var statearr_45984 = state_45964;(statearr_45984[13] = inst_45957);
return statearr_45984;
})();var statearr_45985_46007 = state_45964__$1;(statearr_45985_46007[2] = inst_45958);
(statearr_45985_46007[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45965 === 15))
{var inst_45954 = (state_45964[2]);var state_45964__$1 = state_45964;var statearr_45986_46008 = state_45964__$1;(statearr_45986_46008[2] = inst_45954);
(statearr_45986_46008[1] = 14);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_45990 = (new Array(14));(statearr_45990[0] = state_machine__6013__auto__);
(statearr_45990[1] = 1);
return statearr_45990;
});
var state_machine__6013__auto____1 = (function (state_45964){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_45964);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e45991){if((e45991 instanceof Object))
{var ex__6016__auto__ = e45991;var statearr_45992_46009 = state_45964;(statearr_45992_46009[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46010 = state_45964;
state_45964 = G__46010;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_45964){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_45964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_45993 = f__6083__auto__.call(null);(statearr_45993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___45994);
return statearr_45993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___46153 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_46123){var state_val_46124 = (state_46123[1]);if((state_val_46124 === 1))
{var inst_46082 = (new Array(0));var inst_46083 = inst_46082;var inst_46084 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_46123__$1 = (function (){var statearr_46125 = state_46123;(statearr_46125[7] = inst_46084);
(statearr_46125[8] = inst_46083);
return statearr_46125;
})();var statearr_46126_46154 = state_46123__$1;(statearr_46126_46154[2] = null);
(statearr_46126_46154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 2))
{var state_46123__$1 = state_46123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46123__$1,4,ch);
} else
{if((state_val_46124 === 3))
{var inst_46121 = (state_46123[2]);var state_46123__$1 = state_46123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46123__$1,inst_46121);
} else
{if((state_val_46124 === 4))
{var inst_46087 = (state_46123[9]);var inst_46087__$1 = (state_46123[2]);var inst_46088 = (inst_46087__$1 == null);var inst_46089 = cljs.core.not.call(null,inst_46088);var state_46123__$1 = (function (){var statearr_46127 = state_46123;(statearr_46127[9] = inst_46087__$1);
return statearr_46127;
})();if(inst_46089)
{var statearr_46128_46155 = state_46123__$1;(statearr_46128_46155[1] = 5);
} else
{var statearr_46129_46156 = state_46123__$1;(statearr_46129_46156[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 5))
{var inst_46091 = (state_46123[10]);var inst_46087 = (state_46123[9]);var inst_46084 = (state_46123[7]);var inst_46091__$1 = f.call(null,inst_46087);var inst_46092 = cljs.core._EQ_.call(null,inst_46091__$1,inst_46084);var inst_46093 = cljs.core.keyword_identical_QMARK_.call(null,inst_46084,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_46094 = (inst_46092) || (inst_46093);var state_46123__$1 = (function (){var statearr_46130 = state_46123;(statearr_46130[10] = inst_46091__$1);
return statearr_46130;
})();if(cljs.core.truth_(inst_46094))
{var statearr_46131_46157 = state_46123__$1;(statearr_46131_46157[1] = 8);
} else
{var statearr_46132_46158 = state_46123__$1;(statearr_46132_46158[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 6))
{var inst_46083 = (state_46123[8]);var inst_46108 = inst_46083.length;var inst_46109 = (inst_46108 > 0);var state_46123__$1 = state_46123;if(cljs.core.truth_(inst_46109))
{var statearr_46134_46159 = state_46123__$1;(statearr_46134_46159[1] = 12);
} else
{var statearr_46135_46160 = state_46123__$1;(statearr_46135_46160[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 7))
{var inst_46119 = (state_46123[2]);var state_46123__$1 = state_46123;var statearr_46136_46161 = state_46123__$1;(statearr_46136_46161[2] = inst_46119);
(statearr_46136_46161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 8))
{var inst_46091 = (state_46123[10]);var inst_46087 = (state_46123[9]);var inst_46083 = (state_46123[8]);var inst_46096 = inst_46083.push(inst_46087);var tmp46133 = inst_46083;var inst_46083__$1 = tmp46133;var inst_46084 = inst_46091;var state_46123__$1 = (function (){var statearr_46137 = state_46123;(statearr_46137[7] = inst_46084);
(statearr_46137[8] = inst_46083__$1);
(statearr_46137[11] = inst_46096);
return statearr_46137;
})();var statearr_46138_46162 = state_46123__$1;(statearr_46138_46162[2] = null);
(statearr_46138_46162[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 9))
{var inst_46083 = (state_46123[8]);var inst_46099 = cljs.core.vec.call(null,inst_46083);var state_46123__$1 = state_46123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46123__$1,11,out,inst_46099);
} else
{if((state_val_46124 === 10))
{var inst_46106 = (state_46123[2]);var state_46123__$1 = state_46123;var statearr_46139_46163 = state_46123__$1;(statearr_46139_46163[2] = inst_46106);
(statearr_46139_46163[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 11))
{var inst_46091 = (state_46123[10]);var inst_46087 = (state_46123[9]);var inst_46101 = (state_46123[2]);var inst_46102 = (new Array(0));var inst_46103 = inst_46102.push(inst_46087);var inst_46083 = inst_46102;var inst_46084 = inst_46091;var state_46123__$1 = (function (){var statearr_46140 = state_46123;(statearr_46140[12] = inst_46101);
(statearr_46140[13] = inst_46103);
(statearr_46140[7] = inst_46084);
(statearr_46140[8] = inst_46083);
return statearr_46140;
})();var statearr_46141_46164 = state_46123__$1;(statearr_46141_46164[2] = null);
(statearr_46141_46164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 12))
{var inst_46083 = (state_46123[8]);var inst_46111 = cljs.core.vec.call(null,inst_46083);var state_46123__$1 = state_46123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46123__$1,15,out,inst_46111);
} else
{if((state_val_46124 === 13))
{var state_46123__$1 = state_46123;var statearr_46142_46165 = state_46123__$1;(statearr_46142_46165[2] = null);
(statearr_46142_46165[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 14))
{var inst_46116 = (state_46123[2]);var inst_46117 = cljs.core.async.close_BANG_.call(null,out);var state_46123__$1 = (function (){var statearr_46143 = state_46123;(statearr_46143[14] = inst_46116);
return statearr_46143;
})();var statearr_46144_46166 = state_46123__$1;(statearr_46144_46166[2] = inst_46117);
(statearr_46144_46166[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46124 === 15))
{var inst_46113 = (state_46123[2]);var state_46123__$1 = state_46123;var statearr_46145_46167 = state_46123__$1;(statearr_46145_46167[2] = inst_46113);
(statearr_46145_46167[1] = 14);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_46149 = (new Array(15));(statearr_46149[0] = state_machine__6013__auto__);
(statearr_46149[1] = 1);
return statearr_46149;
});
var state_machine__6013__auto____1 = (function (state_46123){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_46123);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e46150){if((e46150 instanceof Object))
{var ex__6016__auto__ = e46150;var statearr_46151_46168 = state_46123;(statearr_46151_46168[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46169 = state_46123;
state_46123 = G__46169;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_46123){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_46123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_46152 = f__6083__auto__.call(null);(statearr_46152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___46153);
return statearr_46152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
