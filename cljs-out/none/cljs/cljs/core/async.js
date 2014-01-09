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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11854 = (function (f,fn_handler,meta11855){
this.f = f;
this.fn_handler = fn_handler;
this.meta11855 = meta11855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11854.cljs$lang$type = true;
cljs.core.async.t11854.cljs$lang$ctorStr = "cljs.core.async/t11854";
cljs.core.async.t11854.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11854");
});
cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11856){var self__ = this;
var _11856__$1 = this;return self__.meta11855;
});
cljs.core.async.t11854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11856,meta11855__$1){var self__ = this;
var _11856__$1 = this;return (new cljs.core.async.t11854(self__.f,self__.fn_handler,meta11855__$1));
});
cljs.core.async.__GT_t11854 = (function __GT_t11854(f__$1,fn_handler__$1,meta11855){return (new cljs.core.async.t11854(f__$1,fn_handler__$1,meta11855));
});
}
return (new cljs.core.async.t11854(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11858 = buff;if(G__11858)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11858.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11858.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11858);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11858);
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
{var val_11859 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11859);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11859);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11860 = n;var x_11861 = 0;while(true){
if((x_11861 < n__4248__auto___11860))
{(a[x_11861] = 0);
{
var G__11862 = (x_11861 + 1);
x_11861 = G__11862;
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
var G__11863 = (i + 1);
i = G__11863;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11867 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11867 = (function (flag,alt_flag,meta11868){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11868 = meta11868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11867.cljs$lang$type = true;
cljs.core.async.t11867.cljs$lang$ctorStr = "cljs.core.async/t11867";
cljs.core.async.t11867.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11867");
});
cljs.core.async.t11867.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11869){var self__ = this;
var _11869__$1 = this;return self__.meta11868;
});
cljs.core.async.t11867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11869,meta11868__$1){var self__ = this;
var _11869__$1 = this;return (new cljs.core.async.t11867(self__.flag,self__.alt_flag,meta11868__$1));
});
cljs.core.async.__GT_t11867 = (function __GT_t11867(flag__$1,alt_flag__$1,meta11868){return (new cljs.core.async.t11867(flag__$1,alt_flag__$1,meta11868));
});
}
return (new cljs.core.async.t11867(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11873 = (function (cb,flag,alt_handler,meta11874){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11874 = meta11874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11873.cljs$lang$type = true;
cljs.core.async.t11873.cljs$lang$ctorStr = "cljs.core.async/t11873";
cljs.core.async.t11873.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11873");
});
cljs.core.async.t11873.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11875){var self__ = this;
var _11875__$1 = this;return self__.meta11874;
});
cljs.core.async.t11873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11875,meta11874__$1){var self__ = this;
var _11875__$1 = this;return (new cljs.core.async.t11873(self__.cb,self__.flag,self__.alt_handler,meta11874__$1));
});
cljs.core.async.__GT_t11873 = (function __GT_t11873(cb__$1,flag__$1,alt_handler__$1,meta11874){return (new cljs.core.async.t11873(cb__$1,flag__$1,alt_handler__$1,meta11874));
});
}
return (new cljs.core.async.t11873(cb,flag,alt_handler,null));
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
return (function (p1__11876_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11876_SHARP_,port], null));
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
var G__11877 = (i + 1);
i = G__11877;
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
var alts_BANG___delegate = function (ports,p__11878){var map__11880 = p__11878;var map__11880__$1 = ((cljs.core.seq_QMARK_.call(null,map__11880))?cljs.core.apply.call(null,cljs.core.hash_map,map__11880):map__11880);var opts = map__11880__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11878 = null;if (arguments.length > 1) {
  p__11878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11878);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11881){
var ports = cljs.core.first(arglist__11881);
var p__11878 = cljs.core.rest(arglist__11881);
return alts_BANG___delegate(ports,p__11878);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11889 = (function (ch,f,map_LT_,meta11890){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11890 = meta11890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11889.cljs$lang$type = true;
cljs.core.async.t11889.cljs$lang$ctorStr = "cljs.core.async/t11889";
cljs.core.async.t11889.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11889");
});
cljs.core.async.t11889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11892 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11892 = (function (fn1,_,meta11890,ch,f,map_LT_,meta11893){
this.fn1 = fn1;
this._ = _;
this.meta11890 = meta11890;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11893 = meta11893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11892.cljs$lang$type = true;
cljs.core.async.t11892.cljs$lang$ctorStr = "cljs.core.async/t11892";
cljs.core.async.t11892.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11892");
});
cljs.core.async.t11892.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11892.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11882_SHARP_){return f1.call(null,(((p1__11882_SHARP_ == null))?null:self__.f.call(null,p1__11882_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11894){var self__ = this;
var _11894__$1 = this;return self__.meta11893;
});
cljs.core.async.t11892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11894,meta11893__$1){var self__ = this;
var _11894__$1 = this;return (new cljs.core.async.t11892(self__.fn1,self__._,self__.meta11890,self__.ch,self__.f,self__.map_LT_,meta11893__$1));
});
cljs.core.async.__GT_t11892 = (function __GT_t11892(fn1__$1,___$2,meta11890__$1,ch__$2,f__$2,map_LT___$2,meta11893){return (new cljs.core.async.t11892(fn1__$1,___$2,meta11890__$1,ch__$2,f__$2,map_LT___$2,meta11893));
});
}
return (new cljs.core.async.t11892(fn1,___$1,self__.meta11890,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11889.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11891){var self__ = this;
var _11891__$1 = this;return self__.meta11890;
});
cljs.core.async.t11889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11891,meta11890__$1){var self__ = this;
var _11891__$1 = this;return (new cljs.core.async.t11889(self__.ch,self__.f,self__.map_LT_,meta11890__$1));
});
cljs.core.async.__GT_t11889 = (function __GT_t11889(ch__$1,f__$1,map_LT___$1,meta11890){return (new cljs.core.async.t11889(ch__$1,f__$1,map_LT___$1,meta11890));
});
}
return (new cljs.core.async.t11889(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11898 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11898 = (function (ch,f,map_GT_,meta11899){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11899 = meta11899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11898.cljs$lang$type = true;
cljs.core.async.t11898.cljs$lang$ctorStr = "cljs.core.async/t11898";
cljs.core.async.t11898.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11898");
});
cljs.core.async.t11898.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11898.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11898.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11900){var self__ = this;
var _11900__$1 = this;return self__.meta11899;
});
cljs.core.async.t11898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11900,meta11899__$1){var self__ = this;
var _11900__$1 = this;return (new cljs.core.async.t11898(self__.ch,self__.f,self__.map_GT_,meta11899__$1));
});
cljs.core.async.__GT_t11898 = (function __GT_t11898(ch__$1,f__$1,map_GT___$1,meta11899){return (new cljs.core.async.t11898(ch__$1,f__$1,map_GT___$1,meta11899));
});
}
return (new cljs.core.async.t11898(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11904 = (function (ch,p,filter_GT_,meta11905){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11905 = meta11905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11904.cljs$lang$type = true;
cljs.core.async.t11904.cljs$lang$ctorStr = "cljs.core.async/t11904";
cljs.core.async.t11904.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11904");
});
cljs.core.async.t11904.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11904.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11904.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11906){var self__ = this;
var _11906__$1 = this;return self__.meta11905;
});
cljs.core.async.t11904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11906,meta11905__$1){var self__ = this;
var _11906__$1 = this;return (new cljs.core.async.t11904(self__.ch,self__.p,self__.filter_GT_,meta11905__$1));
});
cljs.core.async.__GT_t11904 = (function __GT_t11904(ch__$1,p__$1,filter_GT___$1,meta11905){return (new cljs.core.async.t11904(ch__$1,p__$1,filter_GT___$1,meta11905));
});
}
return (new cljs.core.async.t11904(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___11989 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11968){var state_val_11969 = (state_11968[1]);if((state_val_11969 === 1))
{var state_11968__$1 = state_11968;var statearr_11970_11990 = state_11968__$1;(statearr_11970_11990[2] = null);
(statearr_11970_11990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11969 === 2))
{var state_11968__$1 = state_11968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11968__$1,4,ch);
} else
{if((state_val_11969 === 3))
{var inst_11966 = (state_11968[2]);var state_11968__$1 = state_11968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11968__$1,inst_11966);
} else
{if((state_val_11969 === 4))
{var inst_11950 = (state_11968[7]);var inst_11950__$1 = (state_11968[2]);var inst_11951 = (inst_11950__$1 == null);var state_11968__$1 = (function (){var statearr_11971 = state_11968;(statearr_11971[7] = inst_11950__$1);
return statearr_11971;
})();if(cljs.core.truth_(inst_11951))
{var statearr_11972_11991 = state_11968__$1;(statearr_11972_11991[1] = 5);
} else
{var statearr_11973_11992 = state_11968__$1;(statearr_11973_11992[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11969 === 5))
{var inst_11953 = cljs.core.async.close_BANG_.call(null,out);var state_11968__$1 = state_11968;var statearr_11974_11993 = state_11968__$1;(statearr_11974_11993[2] = inst_11953);
(statearr_11974_11993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11969 === 6))
{var inst_11950 = (state_11968[7]);var inst_11955 = p.call(null,inst_11950);var state_11968__$1 = state_11968;if(cljs.core.truth_(inst_11955))
{var statearr_11975_11994 = state_11968__$1;(statearr_11975_11994[1] = 8);
} else
{var statearr_11976_11995 = state_11968__$1;(statearr_11976_11995[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11969 === 7))
{var inst_11964 = (state_11968[2]);var state_11968__$1 = state_11968;var statearr_11977_11996 = state_11968__$1;(statearr_11977_11996[2] = inst_11964);
(statearr_11977_11996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11969 === 8))
{var inst_11950 = (state_11968[7]);var state_11968__$1 = state_11968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11968__$1,11,out,inst_11950);
} else
{if((state_val_11969 === 9))
{var state_11968__$1 = state_11968;var statearr_11978_11997 = state_11968__$1;(statearr_11978_11997[2] = null);
(statearr_11978_11997[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11969 === 10))
{var inst_11961 = (state_11968[2]);var state_11968__$1 = (function (){var statearr_11979 = state_11968;(statearr_11979[8] = inst_11961);
return statearr_11979;
})();var statearr_11980_11998 = state_11968__$1;(statearr_11980_11998[2] = null);
(statearr_11980_11998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11969 === 11))
{var inst_11958 = (state_11968[2]);var state_11968__$1 = state_11968;var statearr_11981_11999 = state_11968__$1;(statearr_11981_11999[2] = inst_11958);
(statearr_11981_11999[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_11985 = [null,null,null,null,null,null,null,null,null];(statearr_11985[0] = state_machine__5507__auto__);
(statearr_11985[1] = 1);
return statearr_11985;
});
var state_machine__5507__auto____1 = (function (state_11968){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11968);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11986){if((e11986 instanceof Object))
{var ex__5510__auto__ = e11986;var statearr_11987_12000 = state_11968;(statearr_11987_12000[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12001 = state_11968;
state_11968 = G__12001;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11968){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11988 = f__5522__auto__.call(null);(statearr_11988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11989);
return statearr_11988;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12153){var state_val_12154 = (state_12153[1]);if((state_val_12154 === 1))
{var state_12153__$1 = state_12153;var statearr_12155_12192 = state_12153__$1;(statearr_12155_12192[2] = null);
(statearr_12155_12192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 2))
{var state_12153__$1 = state_12153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12153__$1,4,in$);
} else
{if((state_val_12154 === 3))
{var inst_12151 = (state_12153[2]);var state_12153__$1 = state_12153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12153__$1,inst_12151);
} else
{if((state_val_12154 === 4))
{var inst_12099 = (state_12153[7]);var inst_12099__$1 = (state_12153[2]);var inst_12100 = (inst_12099__$1 == null);var state_12153__$1 = (function (){var statearr_12156 = state_12153;(statearr_12156[7] = inst_12099__$1);
return statearr_12156;
})();if(cljs.core.truth_(inst_12100))
{var statearr_12157_12193 = state_12153__$1;(statearr_12157_12193[1] = 5);
} else
{var statearr_12158_12194 = state_12153__$1;(statearr_12158_12194[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 5))
{var inst_12102 = cljs.core.async.close_BANG_.call(null,out);var state_12153__$1 = state_12153;var statearr_12159_12195 = state_12153__$1;(statearr_12159_12195[2] = inst_12102);
(statearr_12159_12195[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 6))
{var inst_12099 = (state_12153[7]);var inst_12104 = f.call(null,inst_12099);var inst_12109 = cljs.core.seq.call(null,inst_12104);var inst_12110 = inst_12109;var inst_12111 = null;var inst_12112 = 0;var inst_12113 = 0;var state_12153__$1 = (function (){var statearr_12160 = state_12153;(statearr_12160[8] = inst_12113);
(statearr_12160[9] = inst_12112);
(statearr_12160[10] = inst_12110);
(statearr_12160[11] = inst_12111);
return statearr_12160;
})();var statearr_12161_12196 = state_12153__$1;(statearr_12161_12196[2] = null);
(statearr_12161_12196[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 7))
{var inst_12149 = (state_12153[2]);var state_12153__$1 = state_12153;var statearr_12162_12197 = state_12153__$1;(statearr_12162_12197[2] = inst_12149);
(statearr_12162_12197[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 8))
{var inst_12113 = (state_12153[8]);var inst_12112 = (state_12153[9]);var inst_12115 = (inst_12113 < inst_12112);var inst_12116 = inst_12115;var state_12153__$1 = state_12153;if(cljs.core.truth_(inst_12116))
{var statearr_12163_12198 = state_12153__$1;(statearr_12163_12198[1] = 10);
} else
{var statearr_12164_12199 = state_12153__$1;(statearr_12164_12199[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 9))
{var inst_12146 = (state_12153[2]);var state_12153__$1 = (function (){var statearr_12165 = state_12153;(statearr_12165[12] = inst_12146);
return statearr_12165;
})();var statearr_12166_12200 = state_12153__$1;(statearr_12166_12200[2] = null);
(statearr_12166_12200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 10))
{var inst_12113 = (state_12153[8]);var inst_12111 = (state_12153[11]);var inst_12118 = cljs.core._nth.call(null,inst_12111,inst_12113);var state_12153__$1 = state_12153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12153__$1,13,out,inst_12118);
} else
{if((state_val_12154 === 11))
{var inst_12110 = (state_12153[10]);var inst_12124 = (state_12153[13]);var inst_12124__$1 = cljs.core.seq.call(null,inst_12110);var state_12153__$1 = (function (){var statearr_12170 = state_12153;(statearr_12170[13] = inst_12124__$1);
return statearr_12170;
})();if(inst_12124__$1)
{var statearr_12171_12201 = state_12153__$1;(statearr_12171_12201[1] = 14);
} else
{var statearr_12172_12202 = state_12153__$1;(statearr_12172_12202[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 12))
{var inst_12144 = (state_12153[2]);var state_12153__$1 = state_12153;var statearr_12173_12203 = state_12153__$1;(statearr_12173_12203[2] = inst_12144);
(statearr_12173_12203[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 13))
{var inst_12113 = (state_12153[8]);var inst_12112 = (state_12153[9]);var inst_12110 = (state_12153[10]);var inst_12111 = (state_12153[11]);var inst_12120 = (state_12153[2]);var inst_12121 = (inst_12113 + 1);var tmp12167 = inst_12112;var tmp12168 = inst_12110;var tmp12169 = inst_12111;var inst_12110__$1 = tmp12168;var inst_12111__$1 = tmp12169;var inst_12112__$1 = tmp12167;var inst_12113__$1 = inst_12121;var state_12153__$1 = (function (){var statearr_12174 = state_12153;(statearr_12174[8] = inst_12113__$1);
(statearr_12174[9] = inst_12112__$1);
(statearr_12174[10] = inst_12110__$1);
(statearr_12174[11] = inst_12111__$1);
(statearr_12174[14] = inst_12120);
return statearr_12174;
})();var statearr_12175_12204 = state_12153__$1;(statearr_12175_12204[2] = null);
(statearr_12175_12204[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 14))
{var inst_12124 = (state_12153[13]);var inst_12126 = cljs.core.chunked_seq_QMARK_.call(null,inst_12124);var state_12153__$1 = state_12153;if(inst_12126)
{var statearr_12176_12205 = state_12153__$1;(statearr_12176_12205[1] = 17);
} else
{var statearr_12177_12206 = state_12153__$1;(statearr_12177_12206[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 15))
{var state_12153__$1 = state_12153;var statearr_12178_12207 = state_12153__$1;(statearr_12178_12207[2] = null);
(statearr_12178_12207[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 16))
{var inst_12142 = (state_12153[2]);var state_12153__$1 = state_12153;var statearr_12179_12208 = state_12153__$1;(statearr_12179_12208[2] = inst_12142);
(statearr_12179_12208[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 17))
{var inst_12124 = (state_12153[13]);var inst_12128 = cljs.core.chunk_first.call(null,inst_12124);var inst_12129 = cljs.core.chunk_rest.call(null,inst_12124);var inst_12130 = cljs.core.count.call(null,inst_12128);var inst_12110 = inst_12129;var inst_12111 = inst_12128;var inst_12112 = inst_12130;var inst_12113 = 0;var state_12153__$1 = (function (){var statearr_12180 = state_12153;(statearr_12180[8] = inst_12113);
(statearr_12180[9] = inst_12112);
(statearr_12180[10] = inst_12110);
(statearr_12180[11] = inst_12111);
return statearr_12180;
})();var statearr_12181_12209 = state_12153__$1;(statearr_12181_12209[2] = null);
(statearr_12181_12209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 18))
{var inst_12124 = (state_12153[13]);var inst_12133 = cljs.core.first.call(null,inst_12124);var state_12153__$1 = state_12153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12153__$1,20,out,inst_12133);
} else
{if((state_val_12154 === 19))
{var inst_12139 = (state_12153[2]);var state_12153__$1 = state_12153;var statearr_12182_12210 = state_12153__$1;(statearr_12182_12210[2] = inst_12139);
(statearr_12182_12210[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 20))
{var inst_12124 = (state_12153[13]);var inst_12135 = (state_12153[2]);var inst_12136 = cljs.core.next.call(null,inst_12124);var inst_12110 = inst_12136;var inst_12111 = null;var inst_12112 = 0;var inst_12113 = 0;var state_12153__$1 = (function (){var statearr_12183 = state_12153;(statearr_12183[8] = inst_12113);
(statearr_12183[9] = inst_12112);
(statearr_12183[10] = inst_12110);
(statearr_12183[11] = inst_12111);
(statearr_12183[15] = inst_12135);
return statearr_12183;
})();var statearr_12184_12211 = state_12153__$1;(statearr_12184_12211[2] = null);
(statearr_12184_12211[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12188[0] = state_machine__5507__auto__);
(statearr_12188[1] = 1);
return statearr_12188;
});
var state_machine__5507__auto____1 = (function (state_12153){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12153);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12189){if((e12189 instanceof Object))
{var ex__5510__auto__ = e12189;var statearr_12190_12212 = state_12153;(statearr_12190_12212[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12189;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12213 = state_12153;
state_12153 = G__12213;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12153){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12191 = f__5522__auto__.call(null);(statearr_12191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12191;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12273){var state_val_12274 = (state_12273[1]);if((state_val_12274 === 1))
{var state_12273__$1 = state_12273;var statearr_12275_12295 = state_12273__$1;(statearr_12275_12295[2] = null);
(statearr_12275_12295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12274 === 2))
{var state_12273__$1 = state_12273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12273__$1,4,from);
} else
{if((state_val_12274 === 3))
{var inst_12271 = (state_12273[2]);var state_12273__$1 = state_12273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12273__$1,inst_12271);
} else
{if((state_val_12274 === 4))
{var inst_12256 = (state_12273[7]);var inst_12256__$1 = (state_12273[2]);var inst_12257 = (inst_12256__$1 == null);var state_12273__$1 = (function (){var statearr_12276 = state_12273;(statearr_12276[7] = inst_12256__$1);
return statearr_12276;
})();if(cljs.core.truth_(inst_12257))
{var statearr_12277_12296 = state_12273__$1;(statearr_12277_12296[1] = 5);
} else
{var statearr_12278_12297 = state_12273__$1;(statearr_12278_12297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12274 === 5))
{var state_12273__$1 = state_12273;if(cljs.core.truth_(close_QMARK_))
{var statearr_12279_12298 = state_12273__$1;(statearr_12279_12298[1] = 8);
} else
{var statearr_12280_12299 = state_12273__$1;(statearr_12280_12299[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12274 === 6))
{var inst_12256 = (state_12273[7]);var state_12273__$1 = state_12273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12273__$1,11,to,inst_12256);
} else
{if((state_val_12274 === 7))
{var inst_12269 = (state_12273[2]);var state_12273__$1 = state_12273;var statearr_12281_12300 = state_12273__$1;(statearr_12281_12300[2] = inst_12269);
(statearr_12281_12300[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12274 === 8))
{var inst_12260 = cljs.core.async.close_BANG_.call(null,to);var state_12273__$1 = state_12273;var statearr_12282_12301 = state_12273__$1;(statearr_12282_12301[2] = inst_12260);
(statearr_12282_12301[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12274 === 9))
{var state_12273__$1 = state_12273;var statearr_12283_12302 = state_12273__$1;(statearr_12283_12302[2] = null);
(statearr_12283_12302[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12274 === 10))
{var inst_12263 = (state_12273[2]);var state_12273__$1 = state_12273;var statearr_12284_12303 = state_12273__$1;(statearr_12284_12303[2] = inst_12263);
(statearr_12284_12303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12274 === 11))
{var inst_12266 = (state_12273[2]);var state_12273__$1 = (function (){var statearr_12285 = state_12273;(statearr_12285[8] = inst_12266);
return statearr_12285;
})();var statearr_12286_12304 = state_12273__$1;(statearr_12286_12304[2] = null);
(statearr_12286_12304[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12290 = [null,null,null,null,null,null,null,null,null];(statearr_12290[0] = state_machine__5507__auto__);
(statearr_12290[1] = 1);
return statearr_12290;
});
var state_machine__5507__auto____1 = (function (state_12273){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12273);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12291){if((e12291 instanceof Object))
{var ex__5510__auto__ = e12291;var statearr_12292_12305 = state_12273;(statearr_12292_12305[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12273);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12306 = state_12273;
state_12273 = G__12306;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12273){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12293 = f__5522__auto__.call(null);(statearr_12293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12294);
return statearr_12293;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12393 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12371){var state_val_12372 = (state_12371[1]);if((state_val_12372 === 1))
{var state_12371__$1 = state_12371;var statearr_12373_12394 = state_12371__$1;(statearr_12373_12394[2] = null);
(statearr_12373_12394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 2))
{var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12371__$1,4,ch);
} else
{if((state_val_12372 === 3))
{var inst_12369 = (state_12371[2]);var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12371__$1,inst_12369);
} else
{if((state_val_12372 === 4))
{var inst_12352 = (state_12371[7]);var inst_12352__$1 = (state_12371[2]);var inst_12353 = (inst_12352__$1 == null);var state_12371__$1 = (function (){var statearr_12374 = state_12371;(statearr_12374[7] = inst_12352__$1);
return statearr_12374;
})();if(cljs.core.truth_(inst_12353))
{var statearr_12375_12395 = state_12371__$1;(statearr_12375_12395[1] = 5);
} else
{var statearr_12376_12396 = state_12371__$1;(statearr_12376_12396[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 5))
{var inst_12355 = cljs.core.async.close_BANG_.call(null,tc);var inst_12356 = cljs.core.async.close_BANG_.call(null,fc);var state_12371__$1 = (function (){var statearr_12377 = state_12371;(statearr_12377[8] = inst_12355);
return statearr_12377;
})();var statearr_12378_12397 = state_12371__$1;(statearr_12378_12397[2] = inst_12356);
(statearr_12378_12397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 6))
{var inst_12352 = (state_12371[7]);var inst_12358 = p.call(null,inst_12352);var state_12371__$1 = state_12371;if(cljs.core.truth_(inst_12358))
{var statearr_12379_12398 = state_12371__$1;(statearr_12379_12398[1] = 9);
} else
{var statearr_12380_12399 = state_12371__$1;(statearr_12380_12399[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 7))
{var inst_12367 = (state_12371[2]);var state_12371__$1 = state_12371;var statearr_12381_12400 = state_12371__$1;(statearr_12381_12400[2] = inst_12367);
(statearr_12381_12400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 8))
{var inst_12364 = (state_12371[2]);var state_12371__$1 = (function (){var statearr_12382 = state_12371;(statearr_12382[9] = inst_12364);
return statearr_12382;
})();var statearr_12383_12401 = state_12371__$1;(statearr_12383_12401[2] = null);
(statearr_12383_12401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 9))
{var state_12371__$1 = state_12371;var statearr_12384_12402 = state_12371__$1;(statearr_12384_12402[2] = tc);
(statearr_12384_12402[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 10))
{var state_12371__$1 = state_12371;var statearr_12385_12403 = state_12371__$1;(statearr_12385_12403[2] = fc);
(statearr_12385_12403[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 11))
{var inst_12352 = (state_12371[7]);var inst_12362 = (state_12371[2]);var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12371__$1,8,inst_12362,inst_12352);
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
var state_machine__5507__auto____0 = (function (){var statearr_12389 = [null,null,null,null,null,null,null,null,null,null];(statearr_12389[0] = state_machine__5507__auto__);
(statearr_12389[1] = 1);
return statearr_12389;
});
var state_machine__5507__auto____1 = (function (state_12371){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12390){if((e12390 instanceof Object))
{var ex__5510__auto__ = e12390;var statearr_12391_12404 = state_12371;(statearr_12391_12404[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12405 = state_12371;
state_12371 = G__12405;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12371){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12392 = f__5522__auto__.call(null);(statearr_12392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12393);
return statearr_12392;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12452){var state_val_12453 = (state_12452[1]);if((state_val_12453 === 7))
{var inst_12448 = (state_12452[2]);var state_12452__$1 = state_12452;var statearr_12454_12470 = state_12452__$1;(statearr_12454_12470[2] = inst_12448);
(statearr_12454_12470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12453 === 6))
{var inst_12441 = (state_12452[7]);var inst_12438 = (state_12452[8]);var inst_12445 = f.call(null,inst_12438,inst_12441);var inst_12438__$1 = inst_12445;var state_12452__$1 = (function (){var statearr_12455 = state_12452;(statearr_12455[8] = inst_12438__$1);
return statearr_12455;
})();var statearr_12456_12471 = state_12452__$1;(statearr_12456_12471[2] = null);
(statearr_12456_12471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12453 === 5))
{var inst_12438 = (state_12452[8]);var state_12452__$1 = state_12452;var statearr_12457_12472 = state_12452__$1;(statearr_12457_12472[2] = inst_12438);
(statearr_12457_12472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12453 === 4))
{var inst_12441 = (state_12452[7]);var inst_12441__$1 = (state_12452[2]);var inst_12442 = (inst_12441__$1 == null);var state_12452__$1 = (function (){var statearr_12458 = state_12452;(statearr_12458[7] = inst_12441__$1);
return statearr_12458;
})();if(cljs.core.truth_(inst_12442))
{var statearr_12459_12473 = state_12452__$1;(statearr_12459_12473[1] = 5);
} else
{var statearr_12460_12474 = state_12452__$1;(statearr_12460_12474[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12453 === 3))
{var inst_12450 = (state_12452[2]);var state_12452__$1 = state_12452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12452__$1,inst_12450);
} else
{if((state_val_12453 === 2))
{var state_12452__$1 = state_12452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12452__$1,4,ch);
} else
{if((state_val_12453 === 1))
{var inst_12438 = init;var state_12452__$1 = (function (){var statearr_12461 = state_12452;(statearr_12461[8] = inst_12438);
return statearr_12461;
})();var statearr_12462_12475 = state_12452__$1;(statearr_12462_12475[2] = null);
(statearr_12462_12475[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12466 = [null,null,null,null,null,null,null,null,null];(statearr_12466[0] = state_machine__5507__auto__);
(statearr_12466[1] = 1);
return statearr_12466;
});
var state_machine__5507__auto____1 = (function (state_12452){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12452);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12467){if((e12467 instanceof Object))
{var ex__5510__auto__ = e12467;var statearr_12468_12476 = state_12452;(statearr_12468_12476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12477 = state_12452;
state_12452 = G__12477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12452){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12469 = f__5522__auto__.call(null);(statearr_12469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12469;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12539){var state_val_12540 = (state_12539[1]);if((state_val_12540 === 1))
{var inst_12519 = cljs.core.seq.call(null,coll);var inst_12520 = inst_12519;var state_12539__$1 = (function (){var statearr_12541 = state_12539;(statearr_12541[7] = inst_12520);
return statearr_12541;
})();var statearr_12542_12560 = state_12539__$1;(statearr_12542_12560[2] = null);
(statearr_12542_12560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12540 === 2))
{var inst_12520 = (state_12539[7]);var state_12539__$1 = state_12539;if(cljs.core.truth_(inst_12520))
{var statearr_12543_12561 = state_12539__$1;(statearr_12543_12561[1] = 4);
} else
{var statearr_12544_12562 = state_12539__$1;(statearr_12544_12562[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12540 === 3))
{var inst_12537 = (state_12539[2]);var state_12539__$1 = state_12539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12539__$1,inst_12537);
} else
{if((state_val_12540 === 4))
{var inst_12520 = (state_12539[7]);var inst_12523 = cljs.core.first.call(null,inst_12520);var state_12539__$1 = state_12539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12539__$1,7,ch,inst_12523);
} else
{if((state_val_12540 === 5))
{var state_12539__$1 = state_12539;if(cljs.core.truth_(close_QMARK_))
{var statearr_12545_12563 = state_12539__$1;(statearr_12545_12563[1] = 8);
} else
{var statearr_12546_12564 = state_12539__$1;(statearr_12546_12564[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12540 === 6))
{var inst_12535 = (state_12539[2]);var state_12539__$1 = state_12539;var statearr_12547_12565 = state_12539__$1;(statearr_12547_12565[2] = inst_12535);
(statearr_12547_12565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12540 === 7))
{var inst_12520 = (state_12539[7]);var inst_12525 = (state_12539[2]);var inst_12526 = cljs.core.next.call(null,inst_12520);var inst_12520__$1 = inst_12526;var state_12539__$1 = (function (){var statearr_12548 = state_12539;(statearr_12548[8] = inst_12525);
(statearr_12548[7] = inst_12520__$1);
return statearr_12548;
})();var statearr_12549_12566 = state_12539__$1;(statearr_12549_12566[2] = null);
(statearr_12549_12566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12540 === 8))
{var inst_12530 = cljs.core.async.close_BANG_.call(null,ch);var state_12539__$1 = state_12539;var statearr_12550_12567 = state_12539__$1;(statearr_12550_12567[2] = inst_12530);
(statearr_12550_12567[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12540 === 9))
{var state_12539__$1 = state_12539;var statearr_12551_12568 = state_12539__$1;(statearr_12551_12568[2] = null);
(statearr_12551_12568[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12540 === 10))
{var inst_12533 = (state_12539[2]);var state_12539__$1 = state_12539;var statearr_12552_12569 = state_12539__$1;(statearr_12552_12569[2] = inst_12533);
(statearr_12552_12569[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12556 = [null,null,null,null,null,null,null,null,null];(statearr_12556[0] = state_machine__5507__auto__);
(statearr_12556[1] = 1);
return statearr_12556;
});
var state_machine__5507__auto____1 = (function (state_12539){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12557){if((e12557 instanceof Object))
{var ex__5510__auto__ = e12557;var statearr_12558_12570 = state_12539;(statearr_12558_12570[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12571 = state_12539;
state_12539 = G__12571;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12539){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12559 = f__5522__auto__.call(null);(statearr_12559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12559;
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
cljs.core.async.Mux = (function (){var obj12573 = {};return obj12573;
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
cljs.core.async.Mult = (function (){var obj12575 = {};return obj12575;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12799 = (function (cs,ch,mult,meta12800){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12800 = meta12800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12799.cljs$lang$type = true;
cljs.core.async.t12799.cljs$lang$ctorStr = "cljs.core.async/t12799";
cljs.core.async.t12799.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12799");
});})(cs))
;
cljs.core.async.t12799.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12799.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12799.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12799.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12799.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12801){var self__ = this;
var _12801__$1 = this;return self__.meta12800;
});})(cs))
;
cljs.core.async.t12799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12801,meta12800__$1){var self__ = this;
var _12801__$1 = this;return (new cljs.core.async.t12799(self__.cs,self__.ch,self__.mult,meta12800__$1));
});})(cs))
;
cljs.core.async.__GT_t12799 = ((function (cs){
return (function __GT_t12799(cs__$1,ch__$1,mult__$1,meta12800){return (new cljs.core.async.t12799(cs__$1,ch__$1,mult__$1,meta12800));
});})(cs))
;
}
return (new cljs.core.async.t12799(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12936){var state_val_12937 = (state_12936[1]);if((state_val_12937 === 32))
{var inst_12804 = (state_12936[7]);var inst_12880 = (state_12936[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12936,31,Object,null,30);var inst_12887 = cljs.core.async.put_BANG_.call(null,inst_12880,inst_12804,done);var state_12936__$1 = state_12936;var statearr_12938_13023 = state_12936__$1;(statearr_12938_13023[2] = inst_12887);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12936__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 1))
{var state_12936__$1 = state_12936;var statearr_12939_13024 = state_12936__$1;(statearr_12939_13024[2] = null);
(statearr_12939_13024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 33))
{var inst_12893 = (state_12936[9]);var inst_12895 = cljs.core.chunked_seq_QMARK_.call(null,inst_12893);var state_12936__$1 = state_12936;if(inst_12895)
{var statearr_12940_13025 = state_12936__$1;(statearr_12940_13025[1] = 36);
} else
{var statearr_12941_13026 = state_12936__$1;(statearr_12941_13026[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 2))
{var state_12936__$1 = state_12936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12936__$1,4,ch);
} else
{if((state_val_12937 === 34))
{var state_12936__$1 = state_12936;var statearr_12942_13027 = state_12936__$1;(statearr_12942_13027[2] = null);
(statearr_12942_13027[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 3))
{var inst_12934 = (state_12936[2]);var state_12936__$1 = state_12936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12936__$1,inst_12934);
} else
{if((state_val_12937 === 35))
{var inst_12918 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12943_13028 = state_12936__$1;(statearr_12943_13028[2] = inst_12918);
(statearr_12943_13028[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 4))
{var inst_12804 = (state_12936[7]);var inst_12804__$1 = (state_12936[2]);var inst_12805 = (inst_12804__$1 == null);var state_12936__$1 = (function (){var statearr_12944 = state_12936;(statearr_12944[7] = inst_12804__$1);
return statearr_12944;
})();if(cljs.core.truth_(inst_12805))
{var statearr_12945_13029 = state_12936__$1;(statearr_12945_13029[1] = 5);
} else
{var statearr_12946_13030 = state_12936__$1;(statearr_12946_13030[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 36))
{var inst_12893 = (state_12936[9]);var inst_12897 = cljs.core.chunk_first.call(null,inst_12893);var inst_12898 = cljs.core.chunk_rest.call(null,inst_12893);var inst_12899 = cljs.core.count.call(null,inst_12897);var inst_12872 = inst_12898;var inst_12873 = inst_12897;var inst_12874 = inst_12899;var inst_12875 = 0;var state_12936__$1 = (function (){var statearr_12947 = state_12936;(statearr_12947[10] = inst_12874);
(statearr_12947[11] = inst_12873);
(statearr_12947[12] = inst_12872);
(statearr_12947[13] = inst_12875);
return statearr_12947;
})();var statearr_12948_13031 = state_12936__$1;(statearr_12948_13031[2] = null);
(statearr_12948_13031[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 5))
{var inst_12811 = cljs.core.deref.call(null,cs);var inst_12812 = cljs.core.seq.call(null,inst_12811);var inst_12813 = inst_12812;var inst_12814 = null;var inst_12815 = 0;var inst_12816 = 0;var state_12936__$1 = (function (){var statearr_12949 = state_12936;(statearr_12949[14] = inst_12814);
(statearr_12949[15] = inst_12813);
(statearr_12949[16] = inst_12816);
(statearr_12949[17] = inst_12815);
return statearr_12949;
})();var statearr_12950_13032 = state_12936__$1;(statearr_12950_13032[2] = null);
(statearr_12950_13032[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 37))
{var inst_12893 = (state_12936[9]);var inst_12902 = cljs.core.first.call(null,inst_12893);var state_12936__$1 = (function (){var statearr_12951 = state_12936;(statearr_12951[18] = inst_12902);
return statearr_12951;
})();var statearr_12952_13033 = state_12936__$1;(statearr_12952_13033[2] = null);
(statearr_12952_13033[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 6))
{var inst_12864 = (state_12936[19]);var inst_12863 = cljs.core.deref.call(null,cs);var inst_12864__$1 = cljs.core.keys.call(null,inst_12863);var inst_12865 = cljs.core.count.call(null,inst_12864__$1);var inst_12866 = cljs.core.reset_BANG_.call(null,dctr,inst_12865);var inst_12871 = cljs.core.seq.call(null,inst_12864__$1);var inst_12872 = inst_12871;var inst_12873 = null;var inst_12874 = 0;var inst_12875 = 0;var state_12936__$1 = (function (){var statearr_12953 = state_12936;(statearr_12953[10] = inst_12874);
(statearr_12953[19] = inst_12864__$1);
(statearr_12953[11] = inst_12873);
(statearr_12953[20] = inst_12866);
(statearr_12953[12] = inst_12872);
(statearr_12953[13] = inst_12875);
return statearr_12953;
})();var statearr_12954_13034 = state_12936__$1;(statearr_12954_13034[2] = null);
(statearr_12954_13034[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 38))
{var inst_12915 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12955_13035 = state_12936__$1;(statearr_12955_13035[2] = inst_12915);
(statearr_12955_13035[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 7))
{var inst_12932 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12956_13036 = state_12936__$1;(statearr_12956_13036[2] = inst_12932);
(statearr_12956_13036[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 39))
{var inst_12893 = (state_12936[9]);var inst_12911 = (state_12936[2]);var inst_12912 = cljs.core.next.call(null,inst_12893);var inst_12872 = inst_12912;var inst_12873 = null;var inst_12874 = 0;var inst_12875 = 0;var state_12936__$1 = (function (){var statearr_12957 = state_12936;(statearr_12957[10] = inst_12874);
(statearr_12957[11] = inst_12873);
(statearr_12957[12] = inst_12872);
(statearr_12957[13] = inst_12875);
(statearr_12957[21] = inst_12911);
return statearr_12957;
})();var statearr_12958_13037 = state_12936__$1;(statearr_12958_13037[2] = null);
(statearr_12958_13037[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 8))
{var inst_12816 = (state_12936[16]);var inst_12815 = (state_12936[17]);var inst_12818 = (inst_12816 < inst_12815);var inst_12819 = inst_12818;var state_12936__$1 = state_12936;if(cljs.core.truth_(inst_12819))
{var statearr_12959_13038 = state_12936__$1;(statearr_12959_13038[1] = 10);
} else
{var statearr_12960_13039 = state_12936__$1;(statearr_12960_13039[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 40))
{var inst_12902 = (state_12936[18]);var inst_12903 = (state_12936[2]);var inst_12904 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12905 = cljs.core.async.untap_STAR_.call(null,m,inst_12902);var state_12936__$1 = (function (){var statearr_12961 = state_12936;(statearr_12961[22] = inst_12904);
(statearr_12961[23] = inst_12903);
return statearr_12961;
})();var statearr_12962_13040 = state_12936__$1;(statearr_12962_13040[2] = inst_12905);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12936__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 9))
{var inst_12861 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12963_13041 = state_12936__$1;(statearr_12963_13041[2] = inst_12861);
(statearr_12963_13041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 41))
{var inst_12804 = (state_12936[7]);var inst_12902 = (state_12936[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12936,40,Object,null,39);var inst_12909 = cljs.core.async.put_BANG_.call(null,inst_12902,inst_12804,done);var state_12936__$1 = state_12936;var statearr_12964_13042 = state_12936__$1;(statearr_12964_13042[2] = inst_12909);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12936__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 10))
{var inst_12814 = (state_12936[14]);var inst_12816 = (state_12936[16]);var inst_12822 = cljs.core._nth.call(null,inst_12814,inst_12816);var inst_12823 = cljs.core.nth.call(null,inst_12822,0,null);var inst_12824 = cljs.core.nth.call(null,inst_12822,1,null);var state_12936__$1 = (function (){var statearr_12965 = state_12936;(statearr_12965[24] = inst_12823);
return statearr_12965;
})();if(cljs.core.truth_(inst_12824))
{var statearr_12966_13043 = state_12936__$1;(statearr_12966_13043[1] = 13);
} else
{var statearr_12967_13044 = state_12936__$1;(statearr_12967_13044[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 42))
{var state_12936__$1 = state_12936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12936__$1,45,dchan);
} else
{if((state_val_12937 === 11))
{var inst_12813 = (state_12936[15]);var inst_12833 = (state_12936[25]);var inst_12833__$1 = cljs.core.seq.call(null,inst_12813);var state_12936__$1 = (function (){var statearr_12968 = state_12936;(statearr_12968[25] = inst_12833__$1);
return statearr_12968;
})();if(inst_12833__$1)
{var statearr_12969_13045 = state_12936__$1;(statearr_12969_13045[1] = 16);
} else
{var statearr_12970_13046 = state_12936__$1;(statearr_12970_13046[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 43))
{var state_12936__$1 = state_12936;var statearr_12971_13047 = state_12936__$1;(statearr_12971_13047[2] = null);
(statearr_12971_13047[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 12))
{var inst_12859 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12972_13048 = state_12936__$1;(statearr_12972_13048[2] = inst_12859);
(statearr_12972_13048[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 44))
{var inst_12929 = (state_12936[2]);var state_12936__$1 = (function (){var statearr_12973 = state_12936;(statearr_12973[26] = inst_12929);
return statearr_12973;
})();var statearr_12974_13049 = state_12936__$1;(statearr_12974_13049[2] = null);
(statearr_12974_13049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 13))
{var inst_12823 = (state_12936[24]);var inst_12826 = cljs.core.async.close_BANG_.call(null,inst_12823);var state_12936__$1 = state_12936;var statearr_12975_13050 = state_12936__$1;(statearr_12975_13050[2] = inst_12826);
(statearr_12975_13050[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 45))
{var inst_12926 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12979_13051 = state_12936__$1;(statearr_12979_13051[2] = inst_12926);
(statearr_12979_13051[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 14))
{var state_12936__$1 = state_12936;var statearr_12980_13052 = state_12936__$1;(statearr_12980_13052[2] = null);
(statearr_12980_13052[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 15))
{var inst_12814 = (state_12936[14]);var inst_12813 = (state_12936[15]);var inst_12816 = (state_12936[16]);var inst_12815 = (state_12936[17]);var inst_12829 = (state_12936[2]);var inst_12830 = (inst_12816 + 1);var tmp12976 = inst_12814;var tmp12977 = inst_12813;var tmp12978 = inst_12815;var inst_12813__$1 = tmp12977;var inst_12814__$1 = tmp12976;var inst_12815__$1 = tmp12978;var inst_12816__$1 = inst_12830;var state_12936__$1 = (function (){var statearr_12981 = state_12936;(statearr_12981[14] = inst_12814__$1);
(statearr_12981[15] = inst_12813__$1);
(statearr_12981[16] = inst_12816__$1);
(statearr_12981[17] = inst_12815__$1);
(statearr_12981[27] = inst_12829);
return statearr_12981;
})();var statearr_12982_13053 = state_12936__$1;(statearr_12982_13053[2] = null);
(statearr_12982_13053[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 16))
{var inst_12833 = (state_12936[25]);var inst_12835 = cljs.core.chunked_seq_QMARK_.call(null,inst_12833);var state_12936__$1 = state_12936;if(inst_12835)
{var statearr_12983_13054 = state_12936__$1;(statearr_12983_13054[1] = 19);
} else
{var statearr_12984_13055 = state_12936__$1;(statearr_12984_13055[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 17))
{var state_12936__$1 = state_12936;var statearr_12985_13056 = state_12936__$1;(statearr_12985_13056[2] = null);
(statearr_12985_13056[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 18))
{var inst_12857 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12986_13057 = state_12936__$1;(statearr_12986_13057[2] = inst_12857);
(statearr_12986_13057[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 19))
{var inst_12833 = (state_12936[25]);var inst_12837 = cljs.core.chunk_first.call(null,inst_12833);var inst_12838 = cljs.core.chunk_rest.call(null,inst_12833);var inst_12839 = cljs.core.count.call(null,inst_12837);var inst_12813 = inst_12838;var inst_12814 = inst_12837;var inst_12815 = inst_12839;var inst_12816 = 0;var state_12936__$1 = (function (){var statearr_12987 = state_12936;(statearr_12987[14] = inst_12814);
(statearr_12987[15] = inst_12813);
(statearr_12987[16] = inst_12816);
(statearr_12987[17] = inst_12815);
return statearr_12987;
})();var statearr_12988_13058 = state_12936__$1;(statearr_12988_13058[2] = null);
(statearr_12988_13058[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 20))
{var inst_12833 = (state_12936[25]);var inst_12843 = cljs.core.first.call(null,inst_12833);var inst_12844 = cljs.core.nth.call(null,inst_12843,0,null);var inst_12845 = cljs.core.nth.call(null,inst_12843,1,null);var state_12936__$1 = (function (){var statearr_12989 = state_12936;(statearr_12989[28] = inst_12844);
return statearr_12989;
})();if(cljs.core.truth_(inst_12845))
{var statearr_12990_13059 = state_12936__$1;(statearr_12990_13059[1] = 22);
} else
{var statearr_12991_13060 = state_12936__$1;(statearr_12991_13060[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 21))
{var inst_12854 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_12992_13061 = state_12936__$1;(statearr_12992_13061[2] = inst_12854);
(statearr_12992_13061[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 22))
{var inst_12844 = (state_12936[28]);var inst_12847 = cljs.core.async.close_BANG_.call(null,inst_12844);var state_12936__$1 = state_12936;var statearr_12993_13062 = state_12936__$1;(statearr_12993_13062[2] = inst_12847);
(statearr_12993_13062[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 23))
{var state_12936__$1 = state_12936;var statearr_12994_13063 = state_12936__$1;(statearr_12994_13063[2] = null);
(statearr_12994_13063[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 24))
{var inst_12833 = (state_12936[25]);var inst_12850 = (state_12936[2]);var inst_12851 = cljs.core.next.call(null,inst_12833);var inst_12813 = inst_12851;var inst_12814 = null;var inst_12815 = 0;var inst_12816 = 0;var state_12936__$1 = (function (){var statearr_12995 = state_12936;(statearr_12995[14] = inst_12814);
(statearr_12995[15] = inst_12813);
(statearr_12995[16] = inst_12816);
(statearr_12995[17] = inst_12815);
(statearr_12995[29] = inst_12850);
return statearr_12995;
})();var statearr_12996_13064 = state_12936__$1;(statearr_12996_13064[2] = null);
(statearr_12996_13064[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 25))
{var inst_12874 = (state_12936[10]);var inst_12875 = (state_12936[13]);var inst_12877 = (inst_12875 < inst_12874);var inst_12878 = inst_12877;var state_12936__$1 = state_12936;if(cljs.core.truth_(inst_12878))
{var statearr_12997_13065 = state_12936__$1;(statearr_12997_13065[1] = 27);
} else
{var statearr_12998_13066 = state_12936__$1;(statearr_12998_13066[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 26))
{var inst_12864 = (state_12936[19]);var inst_12922 = (state_12936[2]);var inst_12923 = cljs.core.seq.call(null,inst_12864);var state_12936__$1 = (function (){var statearr_12999 = state_12936;(statearr_12999[30] = inst_12922);
return statearr_12999;
})();if(inst_12923)
{var statearr_13000_13067 = state_12936__$1;(statearr_13000_13067[1] = 42);
} else
{var statearr_13001_13068 = state_12936__$1;(statearr_13001_13068[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 27))
{var inst_12873 = (state_12936[11]);var inst_12875 = (state_12936[13]);var inst_12880 = cljs.core._nth.call(null,inst_12873,inst_12875);var state_12936__$1 = (function (){var statearr_13002 = state_12936;(statearr_13002[8] = inst_12880);
return statearr_13002;
})();var statearr_13003_13069 = state_12936__$1;(statearr_13003_13069[2] = null);
(statearr_13003_13069[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 28))
{var inst_12872 = (state_12936[12]);var inst_12893 = (state_12936[9]);var inst_12893__$1 = cljs.core.seq.call(null,inst_12872);var state_12936__$1 = (function (){var statearr_13007 = state_12936;(statearr_13007[9] = inst_12893__$1);
return statearr_13007;
})();if(inst_12893__$1)
{var statearr_13008_13070 = state_12936__$1;(statearr_13008_13070[1] = 33);
} else
{var statearr_13009_13071 = state_12936__$1;(statearr_13009_13071[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 29))
{var inst_12920 = (state_12936[2]);var state_12936__$1 = state_12936;var statearr_13010_13072 = state_12936__$1;(statearr_13010_13072[2] = inst_12920);
(statearr_13010_13072[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 30))
{var inst_12874 = (state_12936[10]);var inst_12873 = (state_12936[11]);var inst_12872 = (state_12936[12]);var inst_12875 = (state_12936[13]);var inst_12889 = (state_12936[2]);var inst_12890 = (inst_12875 + 1);var tmp13004 = inst_12874;var tmp13005 = inst_12873;var tmp13006 = inst_12872;var inst_12872__$1 = tmp13006;var inst_12873__$1 = tmp13005;var inst_12874__$1 = tmp13004;var inst_12875__$1 = inst_12890;var state_12936__$1 = (function (){var statearr_13011 = state_12936;(statearr_13011[10] = inst_12874__$1);
(statearr_13011[11] = inst_12873__$1);
(statearr_13011[12] = inst_12872__$1);
(statearr_13011[31] = inst_12889);
(statearr_13011[13] = inst_12875__$1);
return statearr_13011;
})();var statearr_13012_13073 = state_12936__$1;(statearr_13012_13073[2] = null);
(statearr_13012_13073[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12937 === 31))
{var inst_12880 = (state_12936[8]);var inst_12881 = (state_12936[2]);var inst_12882 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12883 = cljs.core.async.untap_STAR_.call(null,m,inst_12880);var state_12936__$1 = (function (){var statearr_13013 = state_12936;(statearr_13013[32] = inst_12881);
(statearr_13013[33] = inst_12882);
return statearr_13013;
})();var statearr_13014_13074 = state_12936__$1;(statearr_13014_13074[2] = inst_12883);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12936__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13018[0] = state_machine__5507__auto__);
(statearr_13018[1] = 1);
return statearr_13018;
});
var state_machine__5507__auto____1 = (function (state_12936){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12936);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13019){if((e13019 instanceof Object))
{var ex__5510__auto__ = e13019;var statearr_13020_13075 = state_12936;(statearr_13020_13075[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13076 = state_12936;
state_12936 = G__13076;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12936){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13021 = f__5522__auto__.call(null);(statearr_13021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13022);
return statearr_13021;
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
cljs.core.async.Mix = (function (){var obj13078 = {};return obj13078;
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
;var m = (function (){if(typeof cljs.core.async.t13188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13188 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13189){
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
this.meta13189 = meta13189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13188.cljs$lang$type = true;
cljs.core.async.t13188.cljs$lang$ctorStr = "cljs.core.async/t13188";
cljs.core.async.t13188.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13188");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13188.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13190){var self__ = this;
var _13190__$1 = this;return self__.meta13189;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13190,meta13189__$1){var self__ = this;
var _13190__$1 = this;return (new cljs.core.async.t13188(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13189__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13188 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13188(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13189){return (new cljs.core.async.t13188(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13189));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13188(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13297 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13255){var state_val_13256 = (state_13255[1]);if((state_val_13256 === 1))
{var inst_13194 = (state_13255[7]);var inst_13194__$1 = calc_state.call(null);var inst_13195 = cljs.core.seq_QMARK_.call(null,inst_13194__$1);var state_13255__$1 = (function (){var statearr_13257 = state_13255;(statearr_13257[7] = inst_13194__$1);
return statearr_13257;
})();if(inst_13195)
{var statearr_13258_13298 = state_13255__$1;(statearr_13258_13298[1] = 2);
} else
{var statearr_13259_13299 = state_13255__$1;(statearr_13259_13299[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 2))
{var inst_13194 = (state_13255[7]);var inst_13197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13194);var state_13255__$1 = state_13255;var statearr_13260_13300 = state_13255__$1;(statearr_13260_13300[2] = inst_13197);
(statearr_13260_13300[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 3))
{var inst_13194 = (state_13255[7]);var state_13255__$1 = state_13255;var statearr_13261_13301 = state_13255__$1;(statearr_13261_13301[2] = inst_13194);
(statearr_13261_13301[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 4))
{var inst_13194 = (state_13255[7]);var inst_13200 = (state_13255[2]);var inst_13201 = cljs.core.get.call(null,inst_13200,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13202 = cljs.core.get.call(null,inst_13200,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13203 = cljs.core.get.call(null,inst_13200,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13204 = inst_13194;var state_13255__$1 = (function (){var statearr_13262 = state_13255;(statearr_13262[8] = inst_13204);
(statearr_13262[9] = inst_13203);
(statearr_13262[10] = inst_13202);
(statearr_13262[11] = inst_13201);
return statearr_13262;
})();var statearr_13263_13302 = state_13255__$1;(statearr_13263_13302[2] = null);
(statearr_13263_13302[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 5))
{var inst_13204 = (state_13255[8]);var inst_13207 = cljs.core.seq_QMARK_.call(null,inst_13204);var state_13255__$1 = state_13255;if(inst_13207)
{var statearr_13264_13303 = state_13255__$1;(statearr_13264_13303[1] = 7);
} else
{var statearr_13265_13304 = state_13255__$1;(statearr_13265_13304[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 6))
{var inst_13253 = (state_13255[2]);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13255__$1,inst_13253);
} else
{if((state_val_13256 === 7))
{var inst_13204 = (state_13255[8]);var inst_13209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13204);var state_13255__$1 = state_13255;var statearr_13266_13305 = state_13255__$1;(statearr_13266_13305[2] = inst_13209);
(statearr_13266_13305[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 8))
{var inst_13204 = (state_13255[8]);var state_13255__$1 = state_13255;var statearr_13267_13306 = state_13255__$1;(statearr_13267_13306[2] = inst_13204);
(statearr_13267_13306[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 9))
{var inst_13212 = (state_13255[12]);var inst_13212__$1 = (state_13255[2]);var inst_13213 = cljs.core.get.call(null,inst_13212__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13214 = cljs.core.get.call(null,inst_13212__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13215 = cljs.core.get.call(null,inst_13212__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13255__$1 = (function (){var statearr_13268 = state_13255;(statearr_13268[13] = inst_13215);
(statearr_13268[14] = inst_13214);
(statearr_13268[12] = inst_13212__$1);
return statearr_13268;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13255__$1,10,inst_13213);
} else
{if((state_val_13256 === 10))
{var inst_13219 = (state_13255[15]);var inst_13220 = (state_13255[16]);var inst_13218 = (state_13255[2]);var inst_13219__$1 = cljs.core.nth.call(null,inst_13218,0,null);var inst_13220__$1 = cljs.core.nth.call(null,inst_13218,1,null);var inst_13221 = (inst_13219__$1 == null);var inst_13222 = cljs.core._EQ_.call(null,inst_13220__$1,change);var inst_13223 = (inst_13221) || (inst_13222);var state_13255__$1 = (function (){var statearr_13269 = state_13255;(statearr_13269[15] = inst_13219__$1);
(statearr_13269[16] = inst_13220__$1);
return statearr_13269;
})();if(cljs.core.truth_(inst_13223))
{var statearr_13270_13307 = state_13255__$1;(statearr_13270_13307[1] = 11);
} else
{var statearr_13271_13308 = state_13255__$1;(statearr_13271_13308[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 11))
{var inst_13219 = (state_13255[15]);var inst_13225 = (inst_13219 == null);var state_13255__$1 = state_13255;if(cljs.core.truth_(inst_13225))
{var statearr_13272_13309 = state_13255__$1;(statearr_13272_13309[1] = 14);
} else
{var statearr_13273_13310 = state_13255__$1;(statearr_13273_13310[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 12))
{var inst_13234 = (state_13255[17]);var inst_13220 = (state_13255[16]);var inst_13215 = (state_13255[13]);var inst_13234__$1 = inst_13215.call(null,inst_13220);var state_13255__$1 = (function (){var statearr_13274 = state_13255;(statearr_13274[17] = inst_13234__$1);
return statearr_13274;
})();if(cljs.core.truth_(inst_13234__$1))
{var statearr_13275_13311 = state_13255__$1;(statearr_13275_13311[1] = 17);
} else
{var statearr_13276_13312 = state_13255__$1;(statearr_13276_13312[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 13))
{var inst_13251 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13277_13313 = state_13255__$1;(statearr_13277_13313[2] = inst_13251);
(statearr_13277_13313[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 14))
{var inst_13220 = (state_13255[16]);var inst_13227 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13220);var state_13255__$1 = state_13255;var statearr_13278_13314 = state_13255__$1;(statearr_13278_13314[2] = inst_13227);
(statearr_13278_13314[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 15))
{var state_13255__$1 = state_13255;var statearr_13279_13315 = state_13255__$1;(statearr_13279_13315[2] = null);
(statearr_13279_13315[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 16))
{var inst_13230 = (state_13255[2]);var inst_13231 = calc_state.call(null);var inst_13204 = inst_13231;var state_13255__$1 = (function (){var statearr_13280 = state_13255;(statearr_13280[18] = inst_13230);
(statearr_13280[8] = inst_13204);
return statearr_13280;
})();var statearr_13281_13316 = state_13255__$1;(statearr_13281_13316[2] = null);
(statearr_13281_13316[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 17))
{var inst_13234 = (state_13255[17]);var state_13255__$1 = state_13255;var statearr_13282_13317 = state_13255__$1;(statearr_13282_13317[2] = inst_13234);
(statearr_13282_13317[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 18))
{var inst_13220 = (state_13255[16]);var inst_13215 = (state_13255[13]);var inst_13214 = (state_13255[14]);var inst_13237 = cljs.core.empty_QMARK_.call(null,inst_13215);var inst_13238 = inst_13214.call(null,inst_13220);var inst_13239 = cljs.core.not.call(null,inst_13238);var inst_13240 = (inst_13237) && (inst_13239);var state_13255__$1 = state_13255;var statearr_13283_13318 = state_13255__$1;(statearr_13283_13318[2] = inst_13240);
(statearr_13283_13318[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 19))
{var inst_13242 = (state_13255[2]);var state_13255__$1 = state_13255;if(cljs.core.truth_(inst_13242))
{var statearr_13284_13319 = state_13255__$1;(statearr_13284_13319[1] = 20);
} else
{var statearr_13285_13320 = state_13255__$1;(statearr_13285_13320[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 20))
{var inst_13219 = (state_13255[15]);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13255__$1,23,out,inst_13219);
} else
{if((state_val_13256 === 21))
{var state_13255__$1 = state_13255;var statearr_13286_13321 = state_13255__$1;(statearr_13286_13321[2] = null);
(statearr_13286_13321[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 22))
{var inst_13212 = (state_13255[12]);var inst_13248 = (state_13255[2]);var inst_13204 = inst_13212;var state_13255__$1 = (function (){var statearr_13287 = state_13255;(statearr_13287[19] = inst_13248);
(statearr_13287[8] = inst_13204);
return statearr_13287;
})();var statearr_13288_13322 = state_13255__$1;(statearr_13288_13322[2] = null);
(statearr_13288_13322[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 23))
{var inst_13245 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13289_13323 = state_13255__$1;(statearr_13289_13323[2] = inst_13245);
(statearr_13289_13323[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13293[0] = state_machine__5507__auto__);
(statearr_13293[1] = 1);
return statearr_13293;
});
var state_machine__5507__auto____1 = (function (state_13255){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13294){if((e13294 instanceof Object))
{var ex__5510__auto__ = e13294;var statearr_13295_13324 = state_13255;(statearr_13295_13324[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13294;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13325 = state_13255;
state_13255 = G__13325;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13255){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13296 = f__5522__auto__.call(null);(statearr_13296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13297);
return statearr_13296;
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
cljs.core.async.Pub = (function (){var obj13327 = {};return obj13327;
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
return (function (p1__13328_SHARP_){if(cljs.core.truth_(p1__13328_SHARP_.call(null,topic)))
{return p1__13328_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13328_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13453 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13453 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13454){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13454 = meta13454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13453.cljs$lang$type = true;
cljs.core.async.t13453.cljs$lang$ctorStr = "cljs.core.async/t13453";
cljs.core.async.t13453.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13453");
});})(mults,ensure_mult))
;
cljs.core.async.t13453.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13453.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13453.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13453.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13453.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13453.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13455){var self__ = this;
var _13455__$1 = this;return self__.meta13454;
});})(mults,ensure_mult))
;
cljs.core.async.t13453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13455,meta13454__$1){var self__ = this;
var _13455__$1 = this;return (new cljs.core.async.t13453(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13454__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13453 = ((function (mults,ensure_mult){
return (function __GT_t13453(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13454){return (new cljs.core.async.t13453(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13454));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13453(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13577 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13529){var state_val_13530 = (state_13529[1]);if((state_val_13530 === 1))
{var state_13529__$1 = state_13529;var statearr_13531_13578 = state_13529__$1;(statearr_13531_13578[2] = null);
(statearr_13531_13578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 2))
{var state_13529__$1 = state_13529;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13529__$1,4,ch);
} else
{if((state_val_13530 === 3))
{var inst_13527 = (state_13529[2]);var state_13529__$1 = state_13529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13529__$1,inst_13527);
} else
{if((state_val_13530 === 4))
{var inst_13458 = (state_13529[7]);var inst_13458__$1 = (state_13529[2]);var inst_13459 = (inst_13458__$1 == null);var state_13529__$1 = (function (){var statearr_13532 = state_13529;(statearr_13532[7] = inst_13458__$1);
return statearr_13532;
})();if(cljs.core.truth_(inst_13459))
{var statearr_13533_13579 = state_13529__$1;(statearr_13533_13579[1] = 5);
} else
{var statearr_13534_13580 = state_13529__$1;(statearr_13534_13580[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 5))
{var inst_13465 = cljs.core.deref.call(null,mults);var inst_13466 = cljs.core.vals.call(null,inst_13465);var inst_13467 = cljs.core.seq.call(null,inst_13466);var inst_13468 = inst_13467;var inst_13469 = null;var inst_13470 = 0;var inst_13471 = 0;var state_13529__$1 = (function (){var statearr_13535 = state_13529;(statearr_13535[8] = inst_13471);
(statearr_13535[9] = inst_13470);
(statearr_13535[10] = inst_13469);
(statearr_13535[11] = inst_13468);
return statearr_13535;
})();var statearr_13536_13581 = state_13529__$1;(statearr_13536_13581[2] = null);
(statearr_13536_13581[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 6))
{var inst_13506 = (state_13529[12]);var inst_13508 = (state_13529[13]);var inst_13458 = (state_13529[7]);var inst_13506__$1 = topic_fn.call(null,inst_13458);var inst_13507 = cljs.core.deref.call(null,mults);var inst_13508__$1 = cljs.core.get.call(null,inst_13507,inst_13506__$1);var state_13529__$1 = (function (){var statearr_13537 = state_13529;(statearr_13537[12] = inst_13506__$1);
(statearr_13537[13] = inst_13508__$1);
return statearr_13537;
})();if(cljs.core.truth_(inst_13508__$1))
{var statearr_13538_13582 = state_13529__$1;(statearr_13538_13582[1] = 19);
} else
{var statearr_13539_13583 = state_13529__$1;(statearr_13539_13583[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 7))
{var inst_13525 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13540_13584 = state_13529__$1;(statearr_13540_13584[2] = inst_13525);
(statearr_13540_13584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 8))
{var inst_13471 = (state_13529[8]);var inst_13470 = (state_13529[9]);var inst_13473 = (inst_13471 < inst_13470);var inst_13474 = inst_13473;var state_13529__$1 = state_13529;if(cljs.core.truth_(inst_13474))
{var statearr_13544_13585 = state_13529__$1;(statearr_13544_13585[1] = 10);
} else
{var statearr_13545_13586 = state_13529__$1;(statearr_13545_13586[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 9))
{var inst_13504 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13546_13587 = state_13529__$1;(statearr_13546_13587[2] = inst_13504);
(statearr_13546_13587[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 10))
{var inst_13471 = (state_13529[8]);var inst_13470 = (state_13529[9]);var inst_13469 = (state_13529[10]);var inst_13468 = (state_13529[11]);var inst_13476 = cljs.core._nth.call(null,inst_13469,inst_13471);var inst_13477 = cljs.core.async.muxch_STAR_.call(null,inst_13476);var inst_13478 = cljs.core.async.close_BANG_.call(null,inst_13477);var inst_13479 = (inst_13471 + 1);var tmp13541 = inst_13470;var tmp13542 = inst_13469;var tmp13543 = inst_13468;var inst_13468__$1 = tmp13543;var inst_13469__$1 = tmp13542;var inst_13470__$1 = tmp13541;var inst_13471__$1 = inst_13479;var state_13529__$1 = (function (){var statearr_13547 = state_13529;(statearr_13547[8] = inst_13471__$1);
(statearr_13547[9] = inst_13470__$1);
(statearr_13547[10] = inst_13469__$1);
(statearr_13547[14] = inst_13478);
(statearr_13547[11] = inst_13468__$1);
return statearr_13547;
})();var statearr_13548_13588 = state_13529__$1;(statearr_13548_13588[2] = null);
(statearr_13548_13588[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 11))
{var inst_13482 = (state_13529[15]);var inst_13468 = (state_13529[11]);var inst_13482__$1 = cljs.core.seq.call(null,inst_13468);var state_13529__$1 = (function (){var statearr_13549 = state_13529;(statearr_13549[15] = inst_13482__$1);
return statearr_13549;
})();if(inst_13482__$1)
{var statearr_13550_13589 = state_13529__$1;(statearr_13550_13589[1] = 13);
} else
{var statearr_13551_13590 = state_13529__$1;(statearr_13551_13590[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 12))
{var inst_13502 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13552_13591 = state_13529__$1;(statearr_13552_13591[2] = inst_13502);
(statearr_13552_13591[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 13))
{var inst_13482 = (state_13529[15]);var inst_13484 = cljs.core.chunked_seq_QMARK_.call(null,inst_13482);var state_13529__$1 = state_13529;if(inst_13484)
{var statearr_13553_13592 = state_13529__$1;(statearr_13553_13592[1] = 16);
} else
{var statearr_13554_13593 = state_13529__$1;(statearr_13554_13593[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 14))
{var state_13529__$1 = state_13529;var statearr_13555_13594 = state_13529__$1;(statearr_13555_13594[2] = null);
(statearr_13555_13594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 15))
{var inst_13500 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13556_13595 = state_13529__$1;(statearr_13556_13595[2] = inst_13500);
(statearr_13556_13595[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 16))
{var inst_13482 = (state_13529[15]);var inst_13486 = cljs.core.chunk_first.call(null,inst_13482);var inst_13487 = cljs.core.chunk_rest.call(null,inst_13482);var inst_13488 = cljs.core.count.call(null,inst_13486);var inst_13468 = inst_13487;var inst_13469 = inst_13486;var inst_13470 = inst_13488;var inst_13471 = 0;var state_13529__$1 = (function (){var statearr_13557 = state_13529;(statearr_13557[8] = inst_13471);
(statearr_13557[9] = inst_13470);
(statearr_13557[10] = inst_13469);
(statearr_13557[11] = inst_13468);
return statearr_13557;
})();var statearr_13558_13596 = state_13529__$1;(statearr_13558_13596[2] = null);
(statearr_13558_13596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 17))
{var inst_13482 = (state_13529[15]);var inst_13491 = cljs.core.first.call(null,inst_13482);var inst_13492 = cljs.core.async.muxch_STAR_.call(null,inst_13491);var inst_13493 = cljs.core.async.close_BANG_.call(null,inst_13492);var inst_13494 = cljs.core.next.call(null,inst_13482);var inst_13468 = inst_13494;var inst_13469 = null;var inst_13470 = 0;var inst_13471 = 0;var state_13529__$1 = (function (){var statearr_13559 = state_13529;(statearr_13559[8] = inst_13471);
(statearr_13559[9] = inst_13470);
(statearr_13559[10] = inst_13469);
(statearr_13559[11] = inst_13468);
(statearr_13559[16] = inst_13493);
return statearr_13559;
})();var statearr_13560_13597 = state_13529__$1;(statearr_13560_13597[2] = null);
(statearr_13560_13597[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 18))
{var inst_13497 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13561_13598 = state_13529__$1;(statearr_13561_13598[2] = inst_13497);
(statearr_13561_13598[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 19))
{var state_13529__$1 = state_13529;var statearr_13562_13599 = state_13529__$1;(statearr_13562_13599[2] = null);
(statearr_13562_13599[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 20))
{var state_13529__$1 = state_13529;var statearr_13563_13600 = state_13529__$1;(statearr_13563_13600[2] = null);
(statearr_13563_13600[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 21))
{var inst_13522 = (state_13529[2]);var state_13529__$1 = (function (){var statearr_13564 = state_13529;(statearr_13564[17] = inst_13522);
return statearr_13564;
})();var statearr_13565_13601 = state_13529__$1;(statearr_13565_13601[2] = null);
(statearr_13565_13601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 22))
{var inst_13519 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13566_13602 = state_13529__$1;(statearr_13566_13602[2] = inst_13519);
(statearr_13566_13602[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 23))
{var inst_13506 = (state_13529[12]);var inst_13510 = (state_13529[2]);var inst_13511 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13506);var state_13529__$1 = (function (){var statearr_13567 = state_13529;(statearr_13567[18] = inst_13510);
return statearr_13567;
})();var statearr_13568_13603 = state_13529__$1;(statearr_13568_13603[2] = inst_13511);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13529__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13530 === 24))
{var inst_13508 = (state_13529[13]);var inst_13458 = (state_13529[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13529,23,Object,null,22);var inst_13515 = cljs.core.async.muxch_STAR_.call(null,inst_13508);var state_13529__$1 = state_13529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13529__$1,25,inst_13515,inst_13458);
} else
{if((state_val_13530 === 25))
{var inst_13517 = (state_13529[2]);var state_13529__$1 = state_13529;var statearr_13569_13604 = state_13529__$1;(statearr_13569_13604[2] = inst_13517);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13529__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13573[0] = state_machine__5507__auto__);
(statearr_13573[1] = 1);
return statearr_13573;
});
var state_machine__5507__auto____1 = (function (state_13529){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13529);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13574){if((e13574 instanceof Object))
{var ex__5510__auto__ = e13574;var statearr_13575_13605 = state_13529;(statearr_13575_13605[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13529);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13606 = state_13529;
state_13529 = G__13606;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13529){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13576 = f__5522__auto__.call(null);(statearr_13576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13577);
return statearr_13576;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13743 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13713){var state_val_13714 = (state_13713[1]);if((state_val_13714 === 1))
{var state_13713__$1 = state_13713;var statearr_13715_13744 = state_13713__$1;(statearr_13715_13744[2] = null);
(statearr_13715_13744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 2))
{var inst_13676 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13677 = 0;var state_13713__$1 = (function (){var statearr_13716 = state_13713;(statearr_13716[7] = inst_13677);
(statearr_13716[8] = inst_13676);
return statearr_13716;
})();var statearr_13717_13745 = state_13713__$1;(statearr_13717_13745[2] = null);
(statearr_13717_13745[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 3))
{var inst_13711 = (state_13713[2]);var state_13713__$1 = state_13713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13713__$1,inst_13711);
} else
{if((state_val_13714 === 4))
{var inst_13677 = (state_13713[7]);var inst_13679 = (inst_13677 < cnt);var state_13713__$1 = state_13713;if(cljs.core.truth_(inst_13679))
{var statearr_13718_13746 = state_13713__$1;(statearr_13718_13746[1] = 6);
} else
{var statearr_13719_13747 = state_13713__$1;(statearr_13719_13747[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 5))
{var inst_13697 = (state_13713[2]);var state_13713__$1 = (function (){var statearr_13720 = state_13713;(statearr_13720[9] = inst_13697);
return statearr_13720;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13713__$1,12,dchan);
} else
{if((state_val_13714 === 6))
{var state_13713__$1 = state_13713;var statearr_13721_13748 = state_13713__$1;(statearr_13721_13748[2] = null);
(statearr_13721_13748[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 7))
{var state_13713__$1 = state_13713;var statearr_13722_13749 = state_13713__$1;(statearr_13722_13749[2] = null);
(statearr_13722_13749[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 8))
{var inst_13695 = (state_13713[2]);var state_13713__$1 = state_13713;var statearr_13723_13750 = state_13713__$1;(statearr_13723_13750[2] = inst_13695);
(statearr_13723_13750[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 9))
{var inst_13677 = (state_13713[7]);var inst_13690 = (state_13713[2]);var inst_13691 = (inst_13677 + 1);var inst_13677__$1 = inst_13691;var state_13713__$1 = (function (){var statearr_13724 = state_13713;(statearr_13724[7] = inst_13677__$1);
(statearr_13724[10] = inst_13690);
return statearr_13724;
})();var statearr_13725_13751 = state_13713__$1;(statearr_13725_13751[2] = null);
(statearr_13725_13751[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 10))
{var inst_13681 = (state_13713[2]);var inst_13682 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13713__$1 = (function (){var statearr_13726 = state_13713;(statearr_13726[11] = inst_13681);
return statearr_13726;
})();var statearr_13727_13752 = state_13713__$1;(statearr_13727_13752[2] = inst_13682);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13713__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 11))
{var inst_13677 = (state_13713[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13713,10,Object,null,9);var inst_13686 = chs__$1.call(null,inst_13677);var inst_13687 = done.call(null,inst_13677);var inst_13688 = cljs.core.async.take_BANG_.call(null,inst_13686,inst_13687);var state_13713__$1 = state_13713;var statearr_13728_13753 = state_13713__$1;(statearr_13728_13753[2] = inst_13688);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13713__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 12))
{var inst_13699 = (state_13713[12]);var inst_13699__$1 = (state_13713[2]);var inst_13700 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13699__$1);var state_13713__$1 = (function (){var statearr_13729 = state_13713;(statearr_13729[12] = inst_13699__$1);
return statearr_13729;
})();if(cljs.core.truth_(inst_13700))
{var statearr_13730_13754 = state_13713__$1;(statearr_13730_13754[1] = 13);
} else
{var statearr_13731_13755 = state_13713__$1;(statearr_13731_13755[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 13))
{var inst_13702 = cljs.core.async.close_BANG_.call(null,out);var state_13713__$1 = state_13713;var statearr_13732_13756 = state_13713__$1;(statearr_13732_13756[2] = inst_13702);
(statearr_13732_13756[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 14))
{var inst_13699 = (state_13713[12]);var inst_13704 = cljs.core.apply.call(null,f,inst_13699);var state_13713__$1 = state_13713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13713__$1,16,out,inst_13704);
} else
{if((state_val_13714 === 15))
{var inst_13709 = (state_13713[2]);var state_13713__$1 = state_13713;var statearr_13733_13757 = state_13713__$1;(statearr_13733_13757[2] = inst_13709);
(statearr_13733_13757[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13714 === 16))
{var inst_13706 = (state_13713[2]);var state_13713__$1 = (function (){var statearr_13734 = state_13713;(statearr_13734[13] = inst_13706);
return statearr_13734;
})();var statearr_13735_13758 = state_13713__$1;(statearr_13735_13758[2] = null);
(statearr_13735_13758[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13739[0] = state_machine__5507__auto__);
(statearr_13739[1] = 1);
return statearr_13739;
});
var state_machine__5507__auto____1 = (function (state_13713){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13713);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13740){if((e13740 instanceof Object))
{var ex__5510__auto__ = e13740;var statearr_13741_13759 = state_13713;(statearr_13741_13759[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13760 = state_13713;
state_13713 = G__13760;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13713){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13742 = f__5522__auto__.call(null);(statearr_13742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13743);
return statearr_13742;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13844){var state_val_13845 = (state_13844[1]);if((state_val_13845 === 1))
{var inst_13815 = cljs.core.vec.call(null,chs);var inst_13816 = inst_13815;var state_13844__$1 = (function (){var statearr_13846 = state_13844;(statearr_13846[7] = inst_13816);
return statearr_13846;
})();var statearr_13847_13869 = state_13844__$1;(statearr_13847_13869[2] = null);
(statearr_13847_13869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13845 === 2))
{var inst_13816 = (state_13844[7]);var inst_13818 = cljs.core.count.call(null,inst_13816);var inst_13819 = (inst_13818 > 0);var state_13844__$1 = state_13844;if(cljs.core.truth_(inst_13819))
{var statearr_13848_13870 = state_13844__$1;(statearr_13848_13870[1] = 4);
} else
{var statearr_13849_13871 = state_13844__$1;(statearr_13849_13871[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13845 === 3))
{var inst_13842 = (state_13844[2]);var state_13844__$1 = state_13844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13844__$1,inst_13842);
} else
{if((state_val_13845 === 4))
{var inst_13816 = (state_13844[7]);var state_13844__$1 = state_13844;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13844__$1,7,inst_13816);
} else
{if((state_val_13845 === 5))
{var inst_13838 = cljs.core.async.close_BANG_.call(null,out);var state_13844__$1 = state_13844;var statearr_13850_13872 = state_13844__$1;(statearr_13850_13872[2] = inst_13838);
(statearr_13850_13872[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13845 === 6))
{var inst_13840 = (state_13844[2]);var state_13844__$1 = state_13844;var statearr_13851_13873 = state_13844__$1;(statearr_13851_13873[2] = inst_13840);
(statearr_13851_13873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13845 === 7))
{var inst_13823 = (state_13844[8]);var inst_13824 = (state_13844[9]);var inst_13823__$1 = (state_13844[2]);var inst_13824__$1 = cljs.core.nth.call(null,inst_13823__$1,0,null);var inst_13825 = cljs.core.nth.call(null,inst_13823__$1,1,null);var inst_13826 = (inst_13824__$1 == null);var state_13844__$1 = (function (){var statearr_13852 = state_13844;(statearr_13852[8] = inst_13823__$1);
(statearr_13852[9] = inst_13824__$1);
(statearr_13852[10] = inst_13825);
return statearr_13852;
})();if(cljs.core.truth_(inst_13826))
{var statearr_13853_13874 = state_13844__$1;(statearr_13853_13874[1] = 8);
} else
{var statearr_13854_13875 = state_13844__$1;(statearr_13854_13875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13845 === 8))
{var inst_13816 = (state_13844[7]);var inst_13823 = (state_13844[8]);var inst_13824 = (state_13844[9]);var inst_13825 = (state_13844[10]);var inst_13828 = (function (){var c = inst_13825;var v = inst_13824;var vec__13821 = inst_13823;var cs = inst_13816;return ((function (c,v,vec__13821,cs,inst_13816,inst_13823,inst_13824,inst_13825,state_val_13845){
return (function (p1__13761_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13761_SHARP_);
});
;})(c,v,vec__13821,cs,inst_13816,inst_13823,inst_13824,inst_13825,state_val_13845))
})();var inst_13829 = cljs.core.filterv.call(null,inst_13828,inst_13816);var inst_13816__$1 = inst_13829;var state_13844__$1 = (function (){var statearr_13855 = state_13844;(statearr_13855[7] = inst_13816__$1);
return statearr_13855;
})();var statearr_13856_13876 = state_13844__$1;(statearr_13856_13876[2] = null);
(statearr_13856_13876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13845 === 9))
{var inst_13824 = (state_13844[9]);var state_13844__$1 = state_13844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13844__$1,11,out,inst_13824);
} else
{if((state_val_13845 === 10))
{var inst_13836 = (state_13844[2]);var state_13844__$1 = state_13844;var statearr_13858_13877 = state_13844__$1;(statearr_13858_13877[2] = inst_13836);
(statearr_13858_13877[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13845 === 11))
{var inst_13816 = (state_13844[7]);var inst_13833 = (state_13844[2]);var tmp13857 = inst_13816;var inst_13816__$1 = tmp13857;var state_13844__$1 = (function (){var statearr_13859 = state_13844;(statearr_13859[11] = inst_13833);
(statearr_13859[7] = inst_13816__$1);
return statearr_13859;
})();var statearr_13860_13878 = state_13844__$1;(statearr_13860_13878[2] = null);
(statearr_13860_13878[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13864 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13864[0] = state_machine__5507__auto__);
(statearr_13864[1] = 1);
return statearr_13864;
});
var state_machine__5507__auto____1 = (function (state_13844){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13844);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13865){if((e13865 instanceof Object))
{var ex__5510__auto__ = e13865;var statearr_13866_13879 = state_13844;(statearr_13866_13879[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13844);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13880 = state_13844;
state_13844 = G__13880;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13844){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13867 = f__5522__auto__.call(null);(statearr_13867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13868);
return statearr_13867;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13950){var state_val_13951 = (state_13950[1]);if((state_val_13951 === 1))
{var inst_13927 = 0;var state_13950__$1 = (function (){var statearr_13952 = state_13950;(statearr_13952[7] = inst_13927);
return statearr_13952;
})();var statearr_13953_13974 = state_13950__$1;(statearr_13953_13974[2] = null);
(statearr_13953_13974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 2))
{var inst_13927 = (state_13950[7]);var inst_13929 = (inst_13927 < n);var state_13950__$1 = state_13950;if(cljs.core.truth_(inst_13929))
{var statearr_13954_13975 = state_13950__$1;(statearr_13954_13975[1] = 4);
} else
{var statearr_13955_13976 = state_13950__$1;(statearr_13955_13976[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 3))
{var inst_13947 = (state_13950[2]);var inst_13948 = cljs.core.async.close_BANG_.call(null,out);var state_13950__$1 = (function (){var statearr_13956 = state_13950;(statearr_13956[8] = inst_13947);
return statearr_13956;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13950__$1,inst_13948);
} else
{if((state_val_13951 === 4))
{var state_13950__$1 = state_13950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13950__$1,7,ch);
} else
{if((state_val_13951 === 5))
{var state_13950__$1 = state_13950;var statearr_13957_13977 = state_13950__$1;(statearr_13957_13977[2] = null);
(statearr_13957_13977[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 6))
{var inst_13945 = (state_13950[2]);var state_13950__$1 = state_13950;var statearr_13958_13978 = state_13950__$1;(statearr_13958_13978[2] = inst_13945);
(statearr_13958_13978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 7))
{var inst_13932 = (state_13950[9]);var inst_13932__$1 = (state_13950[2]);var inst_13933 = (inst_13932__$1 == null);var inst_13934 = cljs.core.not.call(null,inst_13933);var state_13950__$1 = (function (){var statearr_13959 = state_13950;(statearr_13959[9] = inst_13932__$1);
return statearr_13959;
})();if(inst_13934)
{var statearr_13960_13979 = state_13950__$1;(statearr_13960_13979[1] = 8);
} else
{var statearr_13961_13980 = state_13950__$1;(statearr_13961_13980[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 8))
{var inst_13932 = (state_13950[9]);var state_13950__$1 = state_13950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13950__$1,11,out,inst_13932);
} else
{if((state_val_13951 === 9))
{var state_13950__$1 = state_13950;var statearr_13962_13981 = state_13950__$1;(statearr_13962_13981[2] = null);
(statearr_13962_13981[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 10))
{var inst_13942 = (state_13950[2]);var state_13950__$1 = state_13950;var statearr_13963_13982 = state_13950__$1;(statearr_13963_13982[2] = inst_13942);
(statearr_13963_13982[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13951 === 11))
{var inst_13927 = (state_13950[7]);var inst_13937 = (state_13950[2]);var inst_13938 = (inst_13927 + 1);var inst_13927__$1 = inst_13938;var state_13950__$1 = (function (){var statearr_13964 = state_13950;(statearr_13964[7] = inst_13927__$1);
(statearr_13964[10] = inst_13937);
return statearr_13964;
})();var statearr_13965_13983 = state_13950__$1;(statearr_13965_13983[2] = null);
(statearr_13965_13983[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13969 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13969[0] = state_machine__5507__auto__);
(statearr_13969[1] = 1);
return statearr_13969;
});
var state_machine__5507__auto____1 = (function (state_13950){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13950);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13970){if((e13970 instanceof Object))
{var ex__5510__auto__ = e13970;var statearr_13971_13984 = state_13950;(statearr_13971_13984[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13950);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13985 = state_13950;
state_13950 = G__13985;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13950){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13972 = f__5522__auto__.call(null);(statearr_13972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13973);
return statearr_13972;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14082 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14057){var state_val_14058 = (state_14057[1]);if((state_val_14058 === 1))
{var inst_14034 = null;var state_14057__$1 = (function (){var statearr_14059 = state_14057;(statearr_14059[7] = inst_14034);
return statearr_14059;
})();var statearr_14060_14083 = state_14057__$1;(statearr_14060_14083[2] = null);
(statearr_14060_14083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14058 === 2))
{var state_14057__$1 = state_14057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14057__$1,4,ch);
} else
{if((state_val_14058 === 3))
{var inst_14054 = (state_14057[2]);var inst_14055 = cljs.core.async.close_BANG_.call(null,out);var state_14057__$1 = (function (){var statearr_14061 = state_14057;(statearr_14061[8] = inst_14054);
return statearr_14061;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14057__$1,inst_14055);
} else
{if((state_val_14058 === 4))
{var inst_14037 = (state_14057[9]);var inst_14037__$1 = (state_14057[2]);var inst_14038 = (inst_14037__$1 == null);var inst_14039 = cljs.core.not.call(null,inst_14038);var state_14057__$1 = (function (){var statearr_14062 = state_14057;(statearr_14062[9] = inst_14037__$1);
return statearr_14062;
})();if(inst_14039)
{var statearr_14063_14084 = state_14057__$1;(statearr_14063_14084[1] = 5);
} else
{var statearr_14064_14085 = state_14057__$1;(statearr_14064_14085[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14058 === 5))
{var inst_14037 = (state_14057[9]);var inst_14034 = (state_14057[7]);var inst_14041 = cljs.core._EQ_.call(null,inst_14037,inst_14034);var state_14057__$1 = state_14057;if(inst_14041)
{var statearr_14065_14086 = state_14057__$1;(statearr_14065_14086[1] = 8);
} else
{var statearr_14066_14087 = state_14057__$1;(statearr_14066_14087[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14058 === 6))
{var state_14057__$1 = state_14057;var statearr_14068_14088 = state_14057__$1;(statearr_14068_14088[2] = null);
(statearr_14068_14088[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14058 === 7))
{var inst_14052 = (state_14057[2]);var state_14057__$1 = state_14057;var statearr_14069_14089 = state_14057__$1;(statearr_14069_14089[2] = inst_14052);
(statearr_14069_14089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14058 === 8))
{var inst_14034 = (state_14057[7]);var tmp14067 = inst_14034;var inst_14034__$1 = tmp14067;var state_14057__$1 = (function (){var statearr_14070 = state_14057;(statearr_14070[7] = inst_14034__$1);
return statearr_14070;
})();var statearr_14071_14090 = state_14057__$1;(statearr_14071_14090[2] = null);
(statearr_14071_14090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14058 === 9))
{var inst_14037 = (state_14057[9]);var state_14057__$1 = state_14057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14057__$1,11,out,inst_14037);
} else
{if((state_val_14058 === 10))
{var inst_14049 = (state_14057[2]);var state_14057__$1 = state_14057;var statearr_14072_14091 = state_14057__$1;(statearr_14072_14091[2] = inst_14049);
(statearr_14072_14091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14058 === 11))
{var inst_14037 = (state_14057[9]);var inst_14046 = (state_14057[2]);var inst_14034 = inst_14037;var state_14057__$1 = (function (){var statearr_14073 = state_14057;(statearr_14073[10] = inst_14046);
(statearr_14073[7] = inst_14034);
return statearr_14073;
})();var statearr_14074_14092 = state_14057__$1;(statearr_14074_14092[2] = null);
(statearr_14074_14092[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14078 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14078[0] = state_machine__5507__auto__);
(statearr_14078[1] = 1);
return statearr_14078;
});
var state_machine__5507__auto____1 = (function (state_14057){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14057);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14079){if((e14079 instanceof Object))
{var ex__5510__auto__ = e14079;var statearr_14080_14093 = state_14057;(statearr_14080_14093[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14094 = state_14057;
state_14057 = G__14094;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14057){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14081 = f__5522__auto__.call(null);(statearr_14081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14082);
return statearr_14081;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14199){var state_val_14200 = (state_14199[1]);if((state_val_14200 === 1))
{var inst_14162 = (new Array(n));var inst_14163 = inst_14162;var inst_14164 = 0;var state_14199__$1 = (function (){var statearr_14201 = state_14199;(statearr_14201[7] = inst_14164);
(statearr_14201[8] = inst_14163);
return statearr_14201;
})();var statearr_14202_14230 = state_14199__$1;(statearr_14202_14230[2] = null);
(statearr_14202_14230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 2))
{var state_14199__$1 = state_14199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14199__$1,4,ch);
} else
{if((state_val_14200 === 3))
{var inst_14197 = (state_14199[2]);var state_14199__$1 = state_14199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14199__$1,inst_14197);
} else
{if((state_val_14200 === 4))
{var inst_14167 = (state_14199[9]);var inst_14167__$1 = (state_14199[2]);var inst_14168 = (inst_14167__$1 == null);var inst_14169 = cljs.core.not.call(null,inst_14168);var state_14199__$1 = (function (){var statearr_14203 = state_14199;(statearr_14203[9] = inst_14167__$1);
return statearr_14203;
})();if(inst_14169)
{var statearr_14204_14231 = state_14199__$1;(statearr_14204_14231[1] = 5);
} else
{var statearr_14205_14232 = state_14199__$1;(statearr_14205_14232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 5))
{var inst_14167 = (state_14199[9]);var inst_14164 = (state_14199[7]);var inst_14163 = (state_14199[8]);var inst_14172 = (state_14199[10]);var inst_14171 = (inst_14163[inst_14164] = inst_14167);var inst_14172__$1 = (inst_14164 + 1);var inst_14173 = (inst_14172__$1 < n);var state_14199__$1 = (function (){var statearr_14206 = state_14199;(statearr_14206[10] = inst_14172__$1);
(statearr_14206[11] = inst_14171);
return statearr_14206;
})();if(cljs.core.truth_(inst_14173))
{var statearr_14207_14233 = state_14199__$1;(statearr_14207_14233[1] = 8);
} else
{var statearr_14208_14234 = state_14199__$1;(statearr_14208_14234[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 6))
{var inst_14164 = (state_14199[7]);var inst_14185 = (inst_14164 > 0);var state_14199__$1 = state_14199;if(cljs.core.truth_(inst_14185))
{var statearr_14210_14235 = state_14199__$1;(statearr_14210_14235[1] = 12);
} else
{var statearr_14211_14236 = state_14199__$1;(statearr_14211_14236[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 7))
{var inst_14195 = (state_14199[2]);var state_14199__$1 = state_14199;var statearr_14212_14237 = state_14199__$1;(statearr_14212_14237[2] = inst_14195);
(statearr_14212_14237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 8))
{var inst_14163 = (state_14199[8]);var inst_14172 = (state_14199[10]);var tmp14209 = inst_14163;var inst_14163__$1 = tmp14209;var inst_14164 = inst_14172;var state_14199__$1 = (function (){var statearr_14213 = state_14199;(statearr_14213[7] = inst_14164);
(statearr_14213[8] = inst_14163__$1);
return statearr_14213;
})();var statearr_14214_14238 = state_14199__$1;(statearr_14214_14238[2] = null);
(statearr_14214_14238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 9))
{var inst_14163 = (state_14199[8]);var inst_14177 = cljs.core.vec.call(null,inst_14163);var state_14199__$1 = state_14199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14199__$1,11,out,inst_14177);
} else
{if((state_val_14200 === 10))
{var inst_14183 = (state_14199[2]);var state_14199__$1 = state_14199;var statearr_14215_14239 = state_14199__$1;(statearr_14215_14239[2] = inst_14183);
(statearr_14215_14239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 11))
{var inst_14179 = (state_14199[2]);var inst_14180 = (new Array(n));var inst_14163 = inst_14180;var inst_14164 = 0;var state_14199__$1 = (function (){var statearr_14216 = state_14199;(statearr_14216[7] = inst_14164);
(statearr_14216[8] = inst_14163);
(statearr_14216[12] = inst_14179);
return statearr_14216;
})();var statearr_14217_14240 = state_14199__$1;(statearr_14217_14240[2] = null);
(statearr_14217_14240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 12))
{var inst_14163 = (state_14199[8]);var inst_14187 = cljs.core.vec.call(null,inst_14163);var state_14199__$1 = state_14199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14199__$1,15,out,inst_14187);
} else
{if((state_val_14200 === 13))
{var state_14199__$1 = state_14199;var statearr_14218_14241 = state_14199__$1;(statearr_14218_14241[2] = null);
(statearr_14218_14241[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 14))
{var inst_14192 = (state_14199[2]);var inst_14193 = cljs.core.async.close_BANG_.call(null,out);var state_14199__$1 = (function (){var statearr_14219 = state_14199;(statearr_14219[13] = inst_14192);
return statearr_14219;
})();var statearr_14220_14242 = state_14199__$1;(statearr_14220_14242[2] = inst_14193);
(statearr_14220_14242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 15))
{var inst_14189 = (state_14199[2]);var state_14199__$1 = state_14199;var statearr_14221_14243 = state_14199__$1;(statearr_14221_14243[2] = inst_14189);
(statearr_14221_14243[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14225[0] = state_machine__5507__auto__);
(statearr_14225[1] = 1);
return statearr_14225;
});
var state_machine__5507__auto____1 = (function (state_14199){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14199);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14226){if((e14226 instanceof Object))
{var ex__5510__auto__ = e14226;var statearr_14227_14244 = state_14199;(statearr_14227_14244[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14245 = state_14199;
state_14199 = G__14245;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14199){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14228 = f__5522__auto__.call(null);(statearr_14228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14229);
return statearr_14228;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14388 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14358){var state_val_14359 = (state_14358[1]);if((state_val_14359 === 1))
{var inst_14317 = [];var inst_14318 = inst_14317;var inst_14319 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14358__$1 = (function (){var statearr_14360 = state_14358;(statearr_14360[7] = inst_14318);
(statearr_14360[8] = inst_14319);
return statearr_14360;
})();var statearr_14361_14389 = state_14358__$1;(statearr_14361_14389[2] = null);
(statearr_14361_14389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 2))
{var state_14358__$1 = state_14358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14358__$1,4,ch);
} else
{if((state_val_14359 === 3))
{var inst_14356 = (state_14358[2]);var state_14358__$1 = state_14358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14358__$1,inst_14356);
} else
{if((state_val_14359 === 4))
{var inst_14322 = (state_14358[9]);var inst_14322__$1 = (state_14358[2]);var inst_14323 = (inst_14322__$1 == null);var inst_14324 = cljs.core.not.call(null,inst_14323);var state_14358__$1 = (function (){var statearr_14362 = state_14358;(statearr_14362[9] = inst_14322__$1);
return statearr_14362;
})();if(inst_14324)
{var statearr_14363_14390 = state_14358__$1;(statearr_14363_14390[1] = 5);
} else
{var statearr_14364_14391 = state_14358__$1;(statearr_14364_14391[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 5))
{var inst_14322 = (state_14358[9]);var inst_14326 = (state_14358[10]);var inst_14319 = (state_14358[8]);var inst_14326__$1 = f.call(null,inst_14322);var inst_14327 = cljs.core._EQ_.call(null,inst_14326__$1,inst_14319);var inst_14328 = cljs.core.keyword_identical_QMARK_.call(null,inst_14319,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14329 = (inst_14327) || (inst_14328);var state_14358__$1 = (function (){var statearr_14365 = state_14358;(statearr_14365[10] = inst_14326__$1);
return statearr_14365;
})();if(cljs.core.truth_(inst_14329))
{var statearr_14366_14392 = state_14358__$1;(statearr_14366_14392[1] = 8);
} else
{var statearr_14367_14393 = state_14358__$1;(statearr_14367_14393[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 6))
{var inst_14318 = (state_14358[7]);var inst_14343 = inst_14318.length;var inst_14344 = (inst_14343 > 0);var state_14358__$1 = state_14358;if(cljs.core.truth_(inst_14344))
{var statearr_14369_14394 = state_14358__$1;(statearr_14369_14394[1] = 12);
} else
{var statearr_14370_14395 = state_14358__$1;(statearr_14370_14395[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 7))
{var inst_14354 = (state_14358[2]);var state_14358__$1 = state_14358;var statearr_14371_14396 = state_14358__$1;(statearr_14371_14396[2] = inst_14354);
(statearr_14371_14396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 8))
{var inst_14322 = (state_14358[9]);var inst_14326 = (state_14358[10]);var inst_14318 = (state_14358[7]);var inst_14331 = inst_14318.push(inst_14322);var tmp14368 = inst_14318;var inst_14318__$1 = tmp14368;var inst_14319 = inst_14326;var state_14358__$1 = (function (){var statearr_14372 = state_14358;(statearr_14372[11] = inst_14331);
(statearr_14372[7] = inst_14318__$1);
(statearr_14372[8] = inst_14319);
return statearr_14372;
})();var statearr_14373_14397 = state_14358__$1;(statearr_14373_14397[2] = null);
(statearr_14373_14397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 9))
{var inst_14318 = (state_14358[7]);var inst_14334 = cljs.core.vec.call(null,inst_14318);var state_14358__$1 = state_14358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14358__$1,11,out,inst_14334);
} else
{if((state_val_14359 === 10))
{var inst_14341 = (state_14358[2]);var state_14358__$1 = state_14358;var statearr_14374_14398 = state_14358__$1;(statearr_14374_14398[2] = inst_14341);
(statearr_14374_14398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 11))
{var inst_14322 = (state_14358[9]);var inst_14326 = (state_14358[10]);var inst_14336 = (state_14358[2]);var inst_14337 = [];var inst_14338 = inst_14337.push(inst_14322);var inst_14318 = inst_14337;var inst_14319 = inst_14326;var state_14358__$1 = (function (){var statearr_14375 = state_14358;(statearr_14375[12] = inst_14336);
(statearr_14375[7] = inst_14318);
(statearr_14375[8] = inst_14319);
(statearr_14375[13] = inst_14338);
return statearr_14375;
})();var statearr_14376_14399 = state_14358__$1;(statearr_14376_14399[2] = null);
(statearr_14376_14399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 12))
{var inst_14318 = (state_14358[7]);var inst_14346 = cljs.core.vec.call(null,inst_14318);var state_14358__$1 = state_14358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14358__$1,15,out,inst_14346);
} else
{if((state_val_14359 === 13))
{var state_14358__$1 = state_14358;var statearr_14377_14400 = state_14358__$1;(statearr_14377_14400[2] = null);
(statearr_14377_14400[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 14))
{var inst_14351 = (state_14358[2]);var inst_14352 = cljs.core.async.close_BANG_.call(null,out);var state_14358__$1 = (function (){var statearr_14378 = state_14358;(statearr_14378[14] = inst_14351);
return statearr_14378;
})();var statearr_14379_14401 = state_14358__$1;(statearr_14379_14401[2] = inst_14352);
(statearr_14379_14401[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14359 === 15))
{var inst_14348 = (state_14358[2]);var state_14358__$1 = state_14358;var statearr_14380_14402 = state_14358__$1;(statearr_14380_14402[2] = inst_14348);
(statearr_14380_14402[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14384[0] = state_machine__5507__auto__);
(statearr_14384[1] = 1);
return statearr_14384;
});
var state_machine__5507__auto____1 = (function (state_14358){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14358);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14385){if((e14385 instanceof Object))
{var ex__5510__auto__ = e14385;var statearr_14386_14403 = state_14358;(statearr_14386_14403[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14404 = state_14358;
state_14358 = G__14404;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14358){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14387 = f__5522__auto__.call(null);(statearr_14387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14388);
return statearr_14387;
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

//# sourceMappingURL=async.js.map