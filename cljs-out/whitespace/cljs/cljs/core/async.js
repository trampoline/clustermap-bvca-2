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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25805 = (function (f,fn_handler,meta25806){
this.f = f;
this.fn_handler = fn_handler;
this.meta25806 = meta25806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25805.cljs$lang$type = true;
cljs.core.async.t25805.cljs$lang$ctorStr = "cljs.core.async/t25805";
cljs.core.async.t25805.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25805");
});
cljs.core.async.t25805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25807){var self__ = this;
var _25807__$1 = this;return self__.meta25806;
});
cljs.core.async.t25805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25807,meta25806__$1){var self__ = this;
var _25807__$1 = this;return (new cljs.core.async.t25805(self__.f,self__.fn_handler,meta25806__$1));
});
cljs.core.async.__GT_t25805 = (function __GT_t25805(f__$1,fn_handler__$1,meta25806){return (new cljs.core.async.t25805(f__$1,fn_handler__$1,meta25806));
});
}
return (new cljs.core.async.t25805(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25809 = buff;if(G__25809)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__25809.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25809.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25809);
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
{var val_25810 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25810);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25810);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___25811 = n;var x_25812 = 0;while(true){
if((x_25812 < n__4248__auto___25811))
{(a[x_25812] = 0);
{
var G__25813 = (x_25812 + 1);
x_25812 = G__25813;
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
var G__25814 = (i + 1);
i = G__25814;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25818 = (function (flag,alt_flag,meta25819){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25819 = meta25819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25818.cljs$lang$type = true;
cljs.core.async.t25818.cljs$lang$ctorStr = "cljs.core.async/t25818";
cljs.core.async.t25818.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25818");
});
cljs.core.async.t25818.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25820){var self__ = this;
var _25820__$1 = this;return self__.meta25819;
});
cljs.core.async.t25818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25820,meta25819__$1){var self__ = this;
var _25820__$1 = this;return (new cljs.core.async.t25818(self__.flag,self__.alt_flag,meta25819__$1));
});
cljs.core.async.__GT_t25818 = (function __GT_t25818(flag__$1,alt_flag__$1,meta25819){return (new cljs.core.async.t25818(flag__$1,alt_flag__$1,meta25819));
});
}
return (new cljs.core.async.t25818(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25824 = (function (cb,flag,alt_handler,meta25825){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25825 = meta25825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25824.cljs$lang$type = true;
cljs.core.async.t25824.cljs$lang$ctorStr = "cljs.core.async/t25824";
cljs.core.async.t25824.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25824");
});
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25826){var self__ = this;
var _25826__$1 = this;return self__.meta25825;
});
cljs.core.async.t25824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25826,meta25825__$1){var self__ = this;
var _25826__$1 = this;return (new cljs.core.async.t25824(self__.cb,self__.flag,self__.alt_handler,meta25825__$1));
});
cljs.core.async.__GT_t25824 = (function __GT_t25824(cb__$1,flag__$1,alt_handler__$1,meta25825){return (new cljs.core.async.t25824(cb__$1,flag__$1,alt_handler__$1,meta25825));
});
}
return (new cljs.core.async.t25824(cb,flag,alt_handler,null));
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
return (function (p1__25827_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25827_SHARP_,port], null));
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
var G__25828 = (i + 1);
i = G__25828;
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
var alts_BANG___delegate = function (ports,p__25829){var map__25831 = p__25829;var map__25831__$1 = ((cljs.core.seq_QMARK_.call(null,map__25831))?cljs.core.apply.call(null,cljs.core.hash_map,map__25831):map__25831);var opts = map__25831__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25829 = null;if (arguments.length > 1) {
  p__25829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25829);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25832){
var ports = cljs.core.first(arglist__25832);
var p__25829 = cljs.core.rest(arglist__25832);
return alts_BANG___delegate(ports,p__25829);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25840 = (function (ch,f,map_LT_,meta25841){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25841 = meta25841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25840.cljs$lang$type = true;
cljs.core.async.t25840.cljs$lang$ctorStr = "cljs.core.async/t25840";
cljs.core.async.t25840.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25840");
});
cljs.core.async.t25840.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25840.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25843 = (function (fn1,_,meta25841,ch,f,map_LT_,meta25844){
this.fn1 = fn1;
this._ = _;
this.meta25841 = meta25841;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25844 = meta25844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25843.cljs$lang$type = true;
cljs.core.async.t25843.cljs$lang$ctorStr = "cljs.core.async/t25843";
cljs.core.async.t25843.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25843");
});
cljs.core.async.t25843.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25843.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25833_SHARP_){return f1.call(null,(((p1__25833_SHARP_ == null))?null:self__.f.call(null,p1__25833_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25845){var self__ = this;
var _25845__$1 = this;return self__.meta25844;
});
cljs.core.async.t25843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25845,meta25844__$1){var self__ = this;
var _25845__$1 = this;return (new cljs.core.async.t25843(self__.fn1,self__._,self__.meta25841,self__.ch,self__.f,self__.map_LT_,meta25844__$1));
});
cljs.core.async.__GT_t25843 = (function __GT_t25843(fn1__$1,___$2,meta25841__$1,ch__$2,f__$2,map_LT___$2,meta25844){return (new cljs.core.async.t25843(fn1__$1,___$2,meta25841__$1,ch__$2,f__$2,map_LT___$2,meta25844));
});
}
return (new cljs.core.async.t25843(fn1,___$1,self__.meta25841,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25840.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25842){var self__ = this;
var _25842__$1 = this;return self__.meta25841;
});
cljs.core.async.t25840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25842,meta25841__$1){var self__ = this;
var _25842__$1 = this;return (new cljs.core.async.t25840(self__.ch,self__.f,self__.map_LT_,meta25841__$1));
});
cljs.core.async.__GT_t25840 = (function __GT_t25840(ch__$1,f__$1,map_LT___$1,meta25841){return (new cljs.core.async.t25840(ch__$1,f__$1,map_LT___$1,meta25841));
});
}
return (new cljs.core.async.t25840(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25849 = (function (ch,f,map_GT_,meta25850){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25850 = meta25850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25849.cljs$lang$type = true;
cljs.core.async.t25849.cljs$lang$ctorStr = "cljs.core.async/t25849";
cljs.core.async.t25849.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25849");
});
cljs.core.async.t25849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25849.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25851){var self__ = this;
var _25851__$1 = this;return self__.meta25850;
});
cljs.core.async.t25849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25851,meta25850__$1){var self__ = this;
var _25851__$1 = this;return (new cljs.core.async.t25849(self__.ch,self__.f,self__.map_GT_,meta25850__$1));
});
cljs.core.async.__GT_t25849 = (function __GT_t25849(ch__$1,f__$1,map_GT___$1,meta25850){return (new cljs.core.async.t25849(ch__$1,f__$1,map_GT___$1,meta25850));
});
}
return (new cljs.core.async.t25849(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25855 = (function (ch,p,filter_GT_,meta25856){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25856 = meta25856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25855.cljs$lang$type = true;
cljs.core.async.t25855.cljs$lang$ctorStr = "cljs.core.async/t25855";
cljs.core.async.t25855.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25855");
});
cljs.core.async.t25855.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25855.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25855.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25857){var self__ = this;
var _25857__$1 = this;return self__.meta25856;
});
cljs.core.async.t25855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25857,meta25856__$1){var self__ = this;
var _25857__$1 = this;return (new cljs.core.async.t25855(self__.ch,self__.p,self__.filter_GT_,meta25856__$1));
});
cljs.core.async.__GT_t25855 = (function __GT_t25855(ch__$1,p__$1,filter_GT___$1,meta25856){return (new cljs.core.async.t25855(ch__$1,p__$1,filter_GT___$1,meta25856));
});
}
return (new cljs.core.async.t25855(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___25940 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25919){var state_val_25920 = (state_25919[1]);if((state_val_25920 === 1))
{var state_25919__$1 = state_25919;var statearr_25921_25941 = state_25919__$1;(statearr_25921_25941[2] = null);
(statearr_25921_25941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25920 === 2))
{var state_25919__$1 = state_25919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25919__$1,4,ch);
} else
{if((state_val_25920 === 3))
{var inst_25917 = (state_25919[2]);var state_25919__$1 = state_25919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25919__$1,inst_25917);
} else
{if((state_val_25920 === 4))
{var inst_25901 = (state_25919[7]);var inst_25901__$1 = (state_25919[2]);var inst_25902 = (inst_25901__$1 == null);var state_25919__$1 = (function (){var statearr_25922 = state_25919;(statearr_25922[7] = inst_25901__$1);
return statearr_25922;
})();if(cljs.core.truth_(inst_25902))
{var statearr_25923_25942 = state_25919__$1;(statearr_25923_25942[1] = 5);
} else
{var statearr_25924_25943 = state_25919__$1;(statearr_25924_25943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25920 === 5))
{var inst_25904 = cljs.core.async.close_BANG_.call(null,out);var state_25919__$1 = state_25919;var statearr_25925_25944 = state_25919__$1;(statearr_25925_25944[2] = inst_25904);
(statearr_25925_25944[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25920 === 6))
{var inst_25901 = (state_25919[7]);var inst_25906 = p.call(null,inst_25901);var state_25919__$1 = state_25919;if(cljs.core.truth_(inst_25906))
{var statearr_25926_25945 = state_25919__$1;(statearr_25926_25945[1] = 8);
} else
{var statearr_25927_25946 = state_25919__$1;(statearr_25927_25946[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25920 === 7))
{var inst_25915 = (state_25919[2]);var state_25919__$1 = state_25919;var statearr_25928_25947 = state_25919__$1;(statearr_25928_25947[2] = inst_25915);
(statearr_25928_25947[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25920 === 8))
{var inst_25901 = (state_25919[7]);var state_25919__$1 = state_25919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25919__$1,11,out,inst_25901);
} else
{if((state_val_25920 === 9))
{var state_25919__$1 = state_25919;var statearr_25929_25948 = state_25919__$1;(statearr_25929_25948[2] = null);
(statearr_25929_25948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25920 === 10))
{var inst_25912 = (state_25919[2]);var state_25919__$1 = (function (){var statearr_25930 = state_25919;(statearr_25930[8] = inst_25912);
return statearr_25930;
})();var statearr_25931_25949 = state_25919__$1;(statearr_25931_25949[2] = null);
(statearr_25931_25949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25920 === 11))
{var inst_25909 = (state_25919[2]);var state_25919__$1 = state_25919;var statearr_25932_25950 = state_25919__$1;(statearr_25932_25950[2] = inst_25909);
(statearr_25932_25950[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_25936 = [null,null,null,null,null,null,null,null,null];(statearr_25936[0] = state_machine__5507__auto__);
(statearr_25936[1] = 1);
return statearr_25936;
});
var state_machine__5507__auto____1 = (function (state_25919){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_25919);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25937){if((e25937 instanceof Object))
{var ex__5510__auto__ = e25937;var statearr_25938_25951 = state_25919;(statearr_25938_25951[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25952 = state_25919;
state_25919 = G__25952;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25919){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25939 = f__5522__auto__.call(null);(statearr_25939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25940);
return statearr_25939;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26104){var state_val_26105 = (state_26104[1]);if((state_val_26105 === 1))
{var state_26104__$1 = state_26104;var statearr_26106_26143 = state_26104__$1;(statearr_26106_26143[2] = null);
(statearr_26106_26143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 2))
{var state_26104__$1 = state_26104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26104__$1,4,in$);
} else
{if((state_val_26105 === 3))
{var inst_26102 = (state_26104[2]);var state_26104__$1 = state_26104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26104__$1,inst_26102);
} else
{if((state_val_26105 === 4))
{var inst_26050 = (state_26104[7]);var inst_26050__$1 = (state_26104[2]);var inst_26051 = (inst_26050__$1 == null);var state_26104__$1 = (function (){var statearr_26107 = state_26104;(statearr_26107[7] = inst_26050__$1);
return statearr_26107;
})();if(cljs.core.truth_(inst_26051))
{var statearr_26108_26144 = state_26104__$1;(statearr_26108_26144[1] = 5);
} else
{var statearr_26109_26145 = state_26104__$1;(statearr_26109_26145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 5))
{var inst_26053 = cljs.core.async.close_BANG_.call(null,out);var state_26104__$1 = state_26104;var statearr_26110_26146 = state_26104__$1;(statearr_26110_26146[2] = inst_26053);
(statearr_26110_26146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 6))
{var inst_26050 = (state_26104[7]);var inst_26055 = f.call(null,inst_26050);var inst_26060 = cljs.core.seq.call(null,inst_26055);var inst_26061 = inst_26060;var inst_26062 = null;var inst_26063 = 0;var inst_26064 = 0;var state_26104__$1 = (function (){var statearr_26111 = state_26104;(statearr_26111[8] = inst_26064);
(statearr_26111[9] = inst_26063);
(statearr_26111[10] = inst_26061);
(statearr_26111[11] = inst_26062);
return statearr_26111;
})();var statearr_26112_26147 = state_26104__$1;(statearr_26112_26147[2] = null);
(statearr_26112_26147[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 7))
{var inst_26100 = (state_26104[2]);var state_26104__$1 = state_26104;var statearr_26113_26148 = state_26104__$1;(statearr_26113_26148[2] = inst_26100);
(statearr_26113_26148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 8))
{var inst_26064 = (state_26104[8]);var inst_26063 = (state_26104[9]);var inst_26066 = (inst_26064 < inst_26063);var inst_26067 = inst_26066;var state_26104__$1 = state_26104;if(cljs.core.truth_(inst_26067))
{var statearr_26114_26149 = state_26104__$1;(statearr_26114_26149[1] = 10);
} else
{var statearr_26115_26150 = state_26104__$1;(statearr_26115_26150[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 9))
{var inst_26097 = (state_26104[2]);var state_26104__$1 = (function (){var statearr_26116 = state_26104;(statearr_26116[12] = inst_26097);
return statearr_26116;
})();var statearr_26117_26151 = state_26104__$1;(statearr_26117_26151[2] = null);
(statearr_26117_26151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 10))
{var inst_26064 = (state_26104[8]);var inst_26062 = (state_26104[11]);var inst_26069 = cljs.core._nth.call(null,inst_26062,inst_26064);var state_26104__$1 = state_26104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26104__$1,13,out,inst_26069);
} else
{if((state_val_26105 === 11))
{var inst_26075 = (state_26104[13]);var inst_26061 = (state_26104[10]);var inst_26075__$1 = cljs.core.seq.call(null,inst_26061);var state_26104__$1 = (function (){var statearr_26121 = state_26104;(statearr_26121[13] = inst_26075__$1);
return statearr_26121;
})();if(inst_26075__$1)
{var statearr_26122_26152 = state_26104__$1;(statearr_26122_26152[1] = 14);
} else
{var statearr_26123_26153 = state_26104__$1;(statearr_26123_26153[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 12))
{var inst_26095 = (state_26104[2]);var state_26104__$1 = state_26104;var statearr_26124_26154 = state_26104__$1;(statearr_26124_26154[2] = inst_26095);
(statearr_26124_26154[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 13))
{var inst_26064 = (state_26104[8]);var inst_26063 = (state_26104[9]);var inst_26061 = (state_26104[10]);var inst_26062 = (state_26104[11]);var inst_26071 = (state_26104[2]);var inst_26072 = (inst_26064 + 1);var tmp26118 = inst_26063;var tmp26119 = inst_26061;var tmp26120 = inst_26062;var inst_26061__$1 = tmp26119;var inst_26062__$1 = tmp26120;var inst_26063__$1 = tmp26118;var inst_26064__$1 = inst_26072;var state_26104__$1 = (function (){var statearr_26125 = state_26104;(statearr_26125[8] = inst_26064__$1);
(statearr_26125[9] = inst_26063__$1);
(statearr_26125[14] = inst_26071);
(statearr_26125[10] = inst_26061__$1);
(statearr_26125[11] = inst_26062__$1);
return statearr_26125;
})();var statearr_26126_26155 = state_26104__$1;(statearr_26126_26155[2] = null);
(statearr_26126_26155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 14))
{var inst_26075 = (state_26104[13]);var inst_26077 = cljs.core.chunked_seq_QMARK_.call(null,inst_26075);var state_26104__$1 = state_26104;if(inst_26077)
{var statearr_26127_26156 = state_26104__$1;(statearr_26127_26156[1] = 17);
} else
{var statearr_26128_26157 = state_26104__$1;(statearr_26128_26157[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 15))
{var state_26104__$1 = state_26104;var statearr_26129_26158 = state_26104__$1;(statearr_26129_26158[2] = null);
(statearr_26129_26158[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 16))
{var inst_26093 = (state_26104[2]);var state_26104__$1 = state_26104;var statearr_26130_26159 = state_26104__$1;(statearr_26130_26159[2] = inst_26093);
(statearr_26130_26159[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 17))
{var inst_26075 = (state_26104[13]);var inst_26079 = cljs.core.chunk_first.call(null,inst_26075);var inst_26080 = cljs.core.chunk_rest.call(null,inst_26075);var inst_26081 = cljs.core.count.call(null,inst_26079);var inst_26061 = inst_26080;var inst_26062 = inst_26079;var inst_26063 = inst_26081;var inst_26064 = 0;var state_26104__$1 = (function (){var statearr_26131 = state_26104;(statearr_26131[8] = inst_26064);
(statearr_26131[9] = inst_26063);
(statearr_26131[10] = inst_26061);
(statearr_26131[11] = inst_26062);
return statearr_26131;
})();var statearr_26132_26160 = state_26104__$1;(statearr_26132_26160[2] = null);
(statearr_26132_26160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 18))
{var inst_26075 = (state_26104[13]);var inst_26084 = cljs.core.first.call(null,inst_26075);var state_26104__$1 = state_26104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26104__$1,20,out,inst_26084);
} else
{if((state_val_26105 === 19))
{var inst_26090 = (state_26104[2]);var state_26104__$1 = state_26104;var statearr_26133_26161 = state_26104__$1;(statearr_26133_26161[2] = inst_26090);
(statearr_26133_26161[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26105 === 20))
{var inst_26075 = (state_26104[13]);var inst_26086 = (state_26104[2]);var inst_26087 = cljs.core.next.call(null,inst_26075);var inst_26061 = inst_26087;var inst_26062 = null;var inst_26063 = 0;var inst_26064 = 0;var state_26104__$1 = (function (){var statearr_26134 = state_26104;(statearr_26134[8] = inst_26064);
(statearr_26134[9] = inst_26063);
(statearr_26134[15] = inst_26086);
(statearr_26134[10] = inst_26061);
(statearr_26134[11] = inst_26062);
return statearr_26134;
})();var statearr_26135_26162 = state_26104__$1;(statearr_26135_26162[2] = null);
(statearr_26135_26162[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_26139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26139[0] = state_machine__5507__auto__);
(statearr_26139[1] = 1);
return statearr_26139;
});
var state_machine__5507__auto____1 = (function (state_26104){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26104);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26140){if((e26140 instanceof Object))
{var ex__5510__auto__ = e26140;var statearr_26141_26163 = state_26104;(statearr_26141_26163[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26104);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26164 = state_26104;
state_26104 = G__26164;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26104){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26142 = f__5522__auto__.call(null);(statearr_26142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_26142;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___26245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26224){var state_val_26225 = (state_26224[1]);if((state_val_26225 === 1))
{var state_26224__$1 = state_26224;var statearr_26226_26246 = state_26224__$1;(statearr_26226_26246[2] = null);
(statearr_26226_26246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26225 === 2))
{var state_26224__$1 = state_26224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26224__$1,4,from);
} else
{if((state_val_26225 === 3))
{var inst_26222 = (state_26224[2]);var state_26224__$1 = state_26224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26224__$1,inst_26222);
} else
{if((state_val_26225 === 4))
{var inst_26207 = (state_26224[7]);var inst_26207__$1 = (state_26224[2]);var inst_26208 = (inst_26207__$1 == null);var state_26224__$1 = (function (){var statearr_26227 = state_26224;(statearr_26227[7] = inst_26207__$1);
return statearr_26227;
})();if(cljs.core.truth_(inst_26208))
{var statearr_26228_26247 = state_26224__$1;(statearr_26228_26247[1] = 5);
} else
{var statearr_26229_26248 = state_26224__$1;(statearr_26229_26248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26225 === 5))
{var state_26224__$1 = state_26224;if(cljs.core.truth_(close_QMARK_))
{var statearr_26230_26249 = state_26224__$1;(statearr_26230_26249[1] = 8);
} else
{var statearr_26231_26250 = state_26224__$1;(statearr_26231_26250[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26225 === 6))
{var inst_26207 = (state_26224[7]);var state_26224__$1 = state_26224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26224__$1,11,to,inst_26207);
} else
{if((state_val_26225 === 7))
{var inst_26220 = (state_26224[2]);var state_26224__$1 = state_26224;var statearr_26232_26251 = state_26224__$1;(statearr_26232_26251[2] = inst_26220);
(statearr_26232_26251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26225 === 8))
{var inst_26211 = cljs.core.async.close_BANG_.call(null,to);var state_26224__$1 = state_26224;var statearr_26233_26252 = state_26224__$1;(statearr_26233_26252[2] = inst_26211);
(statearr_26233_26252[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26225 === 9))
{var state_26224__$1 = state_26224;var statearr_26234_26253 = state_26224__$1;(statearr_26234_26253[2] = null);
(statearr_26234_26253[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26225 === 10))
{var inst_26214 = (state_26224[2]);var state_26224__$1 = state_26224;var statearr_26235_26254 = state_26224__$1;(statearr_26235_26254[2] = inst_26214);
(statearr_26235_26254[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26225 === 11))
{var inst_26217 = (state_26224[2]);var state_26224__$1 = (function (){var statearr_26236 = state_26224;(statearr_26236[8] = inst_26217);
return statearr_26236;
})();var statearr_26237_26255 = state_26224__$1;(statearr_26237_26255[2] = null);
(statearr_26237_26255[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_26241 = [null,null,null,null,null,null,null,null,null];(statearr_26241[0] = state_machine__5507__auto__);
(statearr_26241[1] = 1);
return statearr_26241;
});
var state_machine__5507__auto____1 = (function (state_26224){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26242){if((e26242 instanceof Object))
{var ex__5510__auto__ = e26242;var statearr_26243_26256 = state_26224;(statearr_26243_26256[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26257 = state_26224;
state_26224 = G__26257;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26224){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26244 = f__5522__auto__.call(null);(statearr_26244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26245);
return statearr_26244;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___26344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26322){var state_val_26323 = (state_26322[1]);if((state_val_26323 === 1))
{var state_26322__$1 = state_26322;var statearr_26324_26345 = state_26322__$1;(statearr_26324_26345[2] = null);
(statearr_26324_26345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 2))
{var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,4,ch);
} else
{if((state_val_26323 === 3))
{var inst_26320 = (state_26322[2]);var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26322__$1,inst_26320);
} else
{if((state_val_26323 === 4))
{var inst_26303 = (state_26322[7]);var inst_26303__$1 = (state_26322[2]);var inst_26304 = (inst_26303__$1 == null);var state_26322__$1 = (function (){var statearr_26325 = state_26322;(statearr_26325[7] = inst_26303__$1);
return statearr_26325;
})();if(cljs.core.truth_(inst_26304))
{var statearr_26326_26346 = state_26322__$1;(statearr_26326_26346[1] = 5);
} else
{var statearr_26327_26347 = state_26322__$1;(statearr_26327_26347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 5))
{var inst_26306 = cljs.core.async.close_BANG_.call(null,tc);var inst_26307 = cljs.core.async.close_BANG_.call(null,fc);var state_26322__$1 = (function (){var statearr_26328 = state_26322;(statearr_26328[8] = inst_26306);
return statearr_26328;
})();var statearr_26329_26348 = state_26322__$1;(statearr_26329_26348[2] = inst_26307);
(statearr_26329_26348[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 6))
{var inst_26303 = (state_26322[7]);var inst_26309 = p.call(null,inst_26303);var state_26322__$1 = state_26322;if(cljs.core.truth_(inst_26309))
{var statearr_26330_26349 = state_26322__$1;(statearr_26330_26349[1] = 9);
} else
{var statearr_26331_26350 = state_26322__$1;(statearr_26331_26350[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 7))
{var inst_26318 = (state_26322[2]);var state_26322__$1 = state_26322;var statearr_26332_26351 = state_26322__$1;(statearr_26332_26351[2] = inst_26318);
(statearr_26332_26351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 8))
{var inst_26315 = (state_26322[2]);var state_26322__$1 = (function (){var statearr_26333 = state_26322;(statearr_26333[9] = inst_26315);
return statearr_26333;
})();var statearr_26334_26352 = state_26322__$1;(statearr_26334_26352[2] = null);
(statearr_26334_26352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 9))
{var state_26322__$1 = state_26322;var statearr_26335_26353 = state_26322__$1;(statearr_26335_26353[2] = tc);
(statearr_26335_26353[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 10))
{var state_26322__$1 = state_26322;var statearr_26336_26354 = state_26322__$1;(statearr_26336_26354[2] = fc);
(statearr_26336_26354[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26323 === 11))
{var inst_26303 = (state_26322[7]);var inst_26313 = (state_26322[2]);var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26322__$1,8,inst_26313,inst_26303);
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
var state_machine__5507__auto____0 = (function (){var statearr_26340 = [null,null,null,null,null,null,null,null,null,null];(statearr_26340[0] = state_machine__5507__auto__);
(statearr_26340[1] = 1);
return statearr_26340;
});
var state_machine__5507__auto____1 = (function (state_26322){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26341){if((e26341 instanceof Object))
{var ex__5510__auto__ = e26341;var statearr_26342_26355 = state_26322;(statearr_26342_26355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26356 = state_26322;
state_26322 = G__26356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26322){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26343 = f__5522__auto__.call(null);(statearr_26343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26344);
return statearr_26343;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26403){var state_val_26404 = (state_26403[1]);if((state_val_26404 === 7))
{var inst_26399 = (state_26403[2]);var state_26403__$1 = state_26403;var statearr_26405_26421 = state_26403__$1;(statearr_26405_26421[2] = inst_26399);
(statearr_26405_26421[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 6))
{var inst_26389 = (state_26403[7]);var inst_26392 = (state_26403[8]);var inst_26396 = f.call(null,inst_26389,inst_26392);var inst_26389__$1 = inst_26396;var state_26403__$1 = (function (){var statearr_26406 = state_26403;(statearr_26406[7] = inst_26389__$1);
return statearr_26406;
})();var statearr_26407_26422 = state_26403__$1;(statearr_26407_26422[2] = null);
(statearr_26407_26422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 5))
{var inst_26389 = (state_26403[7]);var state_26403__$1 = state_26403;var statearr_26408_26423 = state_26403__$1;(statearr_26408_26423[2] = inst_26389);
(statearr_26408_26423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 4))
{var inst_26392 = (state_26403[8]);var inst_26392__$1 = (state_26403[2]);var inst_26393 = (inst_26392__$1 == null);var state_26403__$1 = (function (){var statearr_26409 = state_26403;(statearr_26409[8] = inst_26392__$1);
return statearr_26409;
})();if(cljs.core.truth_(inst_26393))
{var statearr_26410_26424 = state_26403__$1;(statearr_26410_26424[1] = 5);
} else
{var statearr_26411_26425 = state_26403__$1;(statearr_26411_26425[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 3))
{var inst_26401 = (state_26403[2]);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26403__$1,inst_26401);
} else
{if((state_val_26404 === 2))
{var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26403__$1,4,ch);
} else
{if((state_val_26404 === 1))
{var inst_26389 = init;var state_26403__$1 = (function (){var statearr_26412 = state_26403;(statearr_26412[7] = inst_26389);
return statearr_26412;
})();var statearr_26413_26426 = state_26403__$1;(statearr_26413_26426[2] = null);
(statearr_26413_26426[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_26417 = [null,null,null,null,null,null,null,null,null];(statearr_26417[0] = state_machine__5507__auto__);
(statearr_26417[1] = 1);
return statearr_26417;
});
var state_machine__5507__auto____1 = (function (state_26403){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26418){if((e26418 instanceof Object))
{var ex__5510__auto__ = e26418;var statearr_26419_26427 = state_26403;(statearr_26419_26427[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26428 = state_26403;
state_26403 = G__26428;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26403){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26420 = f__5522__auto__.call(null);(statearr_26420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_26420;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26490){var state_val_26491 = (state_26490[1]);if((state_val_26491 === 1))
{var inst_26470 = cljs.core.seq.call(null,coll);var inst_26471 = inst_26470;var state_26490__$1 = (function (){var statearr_26492 = state_26490;(statearr_26492[7] = inst_26471);
return statearr_26492;
})();var statearr_26493_26511 = state_26490__$1;(statearr_26493_26511[2] = null);
(statearr_26493_26511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26491 === 2))
{var inst_26471 = (state_26490[7]);var state_26490__$1 = state_26490;if(cljs.core.truth_(inst_26471))
{var statearr_26494_26512 = state_26490__$1;(statearr_26494_26512[1] = 4);
} else
{var statearr_26495_26513 = state_26490__$1;(statearr_26495_26513[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26491 === 3))
{var inst_26488 = (state_26490[2]);var state_26490__$1 = state_26490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26490__$1,inst_26488);
} else
{if((state_val_26491 === 4))
{var inst_26471 = (state_26490[7]);var inst_26474 = cljs.core.first.call(null,inst_26471);var state_26490__$1 = state_26490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26490__$1,7,ch,inst_26474);
} else
{if((state_val_26491 === 5))
{var state_26490__$1 = state_26490;if(cljs.core.truth_(close_QMARK_))
{var statearr_26496_26514 = state_26490__$1;(statearr_26496_26514[1] = 8);
} else
{var statearr_26497_26515 = state_26490__$1;(statearr_26497_26515[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26491 === 6))
{var inst_26486 = (state_26490[2]);var state_26490__$1 = state_26490;var statearr_26498_26516 = state_26490__$1;(statearr_26498_26516[2] = inst_26486);
(statearr_26498_26516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26491 === 7))
{var inst_26471 = (state_26490[7]);var inst_26476 = (state_26490[2]);var inst_26477 = cljs.core.next.call(null,inst_26471);var inst_26471__$1 = inst_26477;var state_26490__$1 = (function (){var statearr_26499 = state_26490;(statearr_26499[8] = inst_26476);
(statearr_26499[7] = inst_26471__$1);
return statearr_26499;
})();var statearr_26500_26517 = state_26490__$1;(statearr_26500_26517[2] = null);
(statearr_26500_26517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26491 === 8))
{var inst_26481 = cljs.core.async.close_BANG_.call(null,ch);var state_26490__$1 = state_26490;var statearr_26501_26518 = state_26490__$1;(statearr_26501_26518[2] = inst_26481);
(statearr_26501_26518[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26491 === 9))
{var state_26490__$1 = state_26490;var statearr_26502_26519 = state_26490__$1;(statearr_26502_26519[2] = null);
(statearr_26502_26519[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26491 === 10))
{var inst_26484 = (state_26490[2]);var state_26490__$1 = state_26490;var statearr_26503_26520 = state_26490__$1;(statearr_26503_26520[2] = inst_26484);
(statearr_26503_26520[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_26507 = [null,null,null,null,null,null,null,null,null];(statearr_26507[0] = state_machine__5507__auto__);
(statearr_26507[1] = 1);
return statearr_26507;
});
var state_machine__5507__auto____1 = (function (state_26490){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26508){if((e26508 instanceof Object))
{var ex__5510__auto__ = e26508;var statearr_26509_26521 = state_26490;(statearr_26509_26521[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26522 = state_26490;
state_26490 = G__26522;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26490){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26510 = f__5522__auto__.call(null);(statearr_26510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_26510;
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
cljs.core.async.Mux = (function (){var obj26524 = {};return obj26524;
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
cljs.core.async.Mult = (function (){var obj26526 = {};return obj26526;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26750 = (function (cs,ch,mult,meta26751){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26751 = meta26751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26750.cljs$lang$type = true;
cljs.core.async.t26750.cljs$lang$ctorStr = "cljs.core.async/t26750";
cljs.core.async.t26750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t26750");
});})(cs))
;
cljs.core.async.t26750.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26750.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26752){var self__ = this;
var _26752__$1 = this;return self__.meta26751;
});})(cs))
;
cljs.core.async.t26750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26752,meta26751__$1){var self__ = this;
var _26752__$1 = this;return (new cljs.core.async.t26750(self__.cs,self__.ch,self__.mult,meta26751__$1));
});})(cs))
;
cljs.core.async.__GT_t26750 = ((function (cs){
return (function __GT_t26750(cs__$1,ch__$1,mult__$1,meta26751){return (new cljs.core.async.t26750(cs__$1,ch__$1,mult__$1,meta26751));
});})(cs))
;
}
return (new cljs.core.async.t26750(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___26973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26887){var state_val_26888 = (state_26887[1]);if((state_val_26888 === 32))
{var inst_26755 = (state_26887[7]);var inst_26831 = (state_26887[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26887,31,Object,null,30);var inst_26838 = cljs.core.async.put_BANG_.call(null,inst_26831,inst_26755,done);var state_26887__$1 = state_26887;var statearr_26889_26974 = state_26887__$1;(statearr_26889_26974[2] = inst_26838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 1))
{var state_26887__$1 = state_26887;var statearr_26890_26975 = state_26887__$1;(statearr_26890_26975[2] = null);
(statearr_26890_26975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 33))
{var inst_26844 = (state_26887[9]);var inst_26846 = cljs.core.chunked_seq_QMARK_.call(null,inst_26844);var state_26887__$1 = state_26887;if(inst_26846)
{var statearr_26891_26976 = state_26887__$1;(statearr_26891_26976[1] = 36);
} else
{var statearr_26892_26977 = state_26887__$1;(statearr_26892_26977[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 2))
{var state_26887__$1 = state_26887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26887__$1,4,ch);
} else
{if((state_val_26888 === 34))
{var state_26887__$1 = state_26887;var statearr_26893_26978 = state_26887__$1;(statearr_26893_26978[2] = null);
(statearr_26893_26978[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 3))
{var inst_26885 = (state_26887[2]);var state_26887__$1 = state_26887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26887__$1,inst_26885);
} else
{if((state_val_26888 === 35))
{var inst_26869 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26894_26979 = state_26887__$1;(statearr_26894_26979[2] = inst_26869);
(statearr_26894_26979[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 4))
{var inst_26755 = (state_26887[7]);var inst_26755__$1 = (state_26887[2]);var inst_26756 = (inst_26755__$1 == null);var state_26887__$1 = (function (){var statearr_26895 = state_26887;(statearr_26895[7] = inst_26755__$1);
return statearr_26895;
})();if(cljs.core.truth_(inst_26756))
{var statearr_26896_26980 = state_26887__$1;(statearr_26896_26980[1] = 5);
} else
{var statearr_26897_26981 = state_26887__$1;(statearr_26897_26981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 36))
{var inst_26844 = (state_26887[9]);var inst_26848 = cljs.core.chunk_first.call(null,inst_26844);var inst_26849 = cljs.core.chunk_rest.call(null,inst_26844);var inst_26850 = cljs.core.count.call(null,inst_26848);var inst_26823 = inst_26849;var inst_26824 = inst_26848;var inst_26825 = inst_26850;var inst_26826 = 0;var state_26887__$1 = (function (){var statearr_26898 = state_26887;(statearr_26898[10] = inst_26823);
(statearr_26898[11] = inst_26824);
(statearr_26898[12] = inst_26825);
(statearr_26898[13] = inst_26826);
return statearr_26898;
})();var statearr_26899_26982 = state_26887__$1;(statearr_26899_26982[2] = null);
(statearr_26899_26982[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 5))
{var inst_26762 = cljs.core.deref.call(null,cs);var inst_26763 = cljs.core.seq.call(null,inst_26762);var inst_26764 = inst_26763;var inst_26765 = null;var inst_26766 = 0;var inst_26767 = 0;var state_26887__$1 = (function (){var statearr_26900 = state_26887;(statearr_26900[14] = inst_26767);
(statearr_26900[15] = inst_26766);
(statearr_26900[16] = inst_26765);
(statearr_26900[17] = inst_26764);
return statearr_26900;
})();var statearr_26901_26983 = state_26887__$1;(statearr_26901_26983[2] = null);
(statearr_26901_26983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 37))
{var inst_26844 = (state_26887[9]);var inst_26853 = cljs.core.first.call(null,inst_26844);var state_26887__$1 = (function (){var statearr_26902 = state_26887;(statearr_26902[18] = inst_26853);
return statearr_26902;
})();var statearr_26903_26984 = state_26887__$1;(statearr_26903_26984[2] = null);
(statearr_26903_26984[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 6))
{var inst_26815 = (state_26887[19]);var inst_26814 = cljs.core.deref.call(null,cs);var inst_26815__$1 = cljs.core.keys.call(null,inst_26814);var inst_26816 = cljs.core.count.call(null,inst_26815__$1);var inst_26817 = cljs.core.reset_BANG_.call(null,dctr,inst_26816);var inst_26822 = cljs.core.seq.call(null,inst_26815__$1);var inst_26823 = inst_26822;var inst_26824 = null;var inst_26825 = 0;var inst_26826 = 0;var state_26887__$1 = (function (){var statearr_26904 = state_26887;(statearr_26904[10] = inst_26823);
(statearr_26904[11] = inst_26824);
(statearr_26904[12] = inst_26825);
(statearr_26904[13] = inst_26826);
(statearr_26904[19] = inst_26815__$1);
(statearr_26904[20] = inst_26817);
return statearr_26904;
})();var statearr_26905_26985 = state_26887__$1;(statearr_26905_26985[2] = null);
(statearr_26905_26985[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 38))
{var inst_26866 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26906_26986 = state_26887__$1;(statearr_26906_26986[2] = inst_26866);
(statearr_26906_26986[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 7))
{var inst_26883 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26907_26987 = state_26887__$1;(statearr_26907_26987[2] = inst_26883);
(statearr_26907_26987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 39))
{var inst_26844 = (state_26887[9]);var inst_26862 = (state_26887[2]);var inst_26863 = cljs.core.next.call(null,inst_26844);var inst_26823 = inst_26863;var inst_26824 = null;var inst_26825 = 0;var inst_26826 = 0;var state_26887__$1 = (function (){var statearr_26908 = state_26887;(statearr_26908[21] = inst_26862);
(statearr_26908[10] = inst_26823);
(statearr_26908[11] = inst_26824);
(statearr_26908[12] = inst_26825);
(statearr_26908[13] = inst_26826);
return statearr_26908;
})();var statearr_26909_26988 = state_26887__$1;(statearr_26909_26988[2] = null);
(statearr_26909_26988[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 8))
{var inst_26767 = (state_26887[14]);var inst_26766 = (state_26887[15]);var inst_26769 = (inst_26767 < inst_26766);var inst_26770 = inst_26769;var state_26887__$1 = state_26887;if(cljs.core.truth_(inst_26770))
{var statearr_26910_26989 = state_26887__$1;(statearr_26910_26989[1] = 10);
} else
{var statearr_26911_26990 = state_26887__$1;(statearr_26911_26990[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 40))
{var inst_26853 = (state_26887[18]);var inst_26854 = (state_26887[2]);var inst_26855 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26856 = cljs.core.async.untap_STAR_.call(null,m,inst_26853);var state_26887__$1 = (function (){var statearr_26912 = state_26887;(statearr_26912[22] = inst_26855);
(statearr_26912[23] = inst_26854);
return statearr_26912;
})();var statearr_26913_26991 = state_26887__$1;(statearr_26913_26991[2] = inst_26856);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 9))
{var inst_26812 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26914_26992 = state_26887__$1;(statearr_26914_26992[2] = inst_26812);
(statearr_26914_26992[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 41))
{var inst_26755 = (state_26887[7]);var inst_26853 = (state_26887[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26887,40,Object,null,39);var inst_26860 = cljs.core.async.put_BANG_.call(null,inst_26853,inst_26755,done);var state_26887__$1 = state_26887;var statearr_26915_26993 = state_26887__$1;(statearr_26915_26993[2] = inst_26860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 10))
{var inst_26767 = (state_26887[14]);var inst_26765 = (state_26887[16]);var inst_26773 = cljs.core._nth.call(null,inst_26765,inst_26767);var inst_26774 = cljs.core.nth.call(null,inst_26773,0,null);var inst_26775 = cljs.core.nth.call(null,inst_26773,1,null);var state_26887__$1 = (function (){var statearr_26916 = state_26887;(statearr_26916[24] = inst_26774);
return statearr_26916;
})();if(cljs.core.truth_(inst_26775))
{var statearr_26917_26994 = state_26887__$1;(statearr_26917_26994[1] = 13);
} else
{var statearr_26918_26995 = state_26887__$1;(statearr_26918_26995[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 42))
{var state_26887__$1 = state_26887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26887__$1,45,dchan);
} else
{if((state_val_26888 === 11))
{var inst_26784 = (state_26887[25]);var inst_26764 = (state_26887[17]);var inst_26784__$1 = cljs.core.seq.call(null,inst_26764);var state_26887__$1 = (function (){var statearr_26919 = state_26887;(statearr_26919[25] = inst_26784__$1);
return statearr_26919;
})();if(inst_26784__$1)
{var statearr_26920_26996 = state_26887__$1;(statearr_26920_26996[1] = 16);
} else
{var statearr_26921_26997 = state_26887__$1;(statearr_26921_26997[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 43))
{var state_26887__$1 = state_26887;var statearr_26922_26998 = state_26887__$1;(statearr_26922_26998[2] = null);
(statearr_26922_26998[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 12))
{var inst_26810 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26923_26999 = state_26887__$1;(statearr_26923_26999[2] = inst_26810);
(statearr_26923_26999[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 44))
{var inst_26880 = (state_26887[2]);var state_26887__$1 = (function (){var statearr_26924 = state_26887;(statearr_26924[26] = inst_26880);
return statearr_26924;
})();var statearr_26925_27000 = state_26887__$1;(statearr_26925_27000[2] = null);
(statearr_26925_27000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 13))
{var inst_26774 = (state_26887[24]);var inst_26777 = cljs.core.async.close_BANG_.call(null,inst_26774);var state_26887__$1 = state_26887;var statearr_26926_27001 = state_26887__$1;(statearr_26926_27001[2] = inst_26777);
(statearr_26926_27001[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 45))
{var inst_26877 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26930_27002 = state_26887__$1;(statearr_26930_27002[2] = inst_26877);
(statearr_26930_27002[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 14))
{var state_26887__$1 = state_26887;var statearr_26931_27003 = state_26887__$1;(statearr_26931_27003[2] = null);
(statearr_26931_27003[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 15))
{var inst_26767 = (state_26887[14]);var inst_26766 = (state_26887[15]);var inst_26765 = (state_26887[16]);var inst_26764 = (state_26887[17]);var inst_26780 = (state_26887[2]);var inst_26781 = (inst_26767 + 1);var tmp26927 = inst_26766;var tmp26928 = inst_26765;var tmp26929 = inst_26764;var inst_26764__$1 = tmp26929;var inst_26765__$1 = tmp26928;var inst_26766__$1 = tmp26927;var inst_26767__$1 = inst_26781;var state_26887__$1 = (function (){var statearr_26932 = state_26887;(statearr_26932[27] = inst_26780);
(statearr_26932[14] = inst_26767__$1);
(statearr_26932[15] = inst_26766__$1);
(statearr_26932[16] = inst_26765__$1);
(statearr_26932[17] = inst_26764__$1);
return statearr_26932;
})();var statearr_26933_27004 = state_26887__$1;(statearr_26933_27004[2] = null);
(statearr_26933_27004[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 16))
{var inst_26784 = (state_26887[25]);var inst_26786 = cljs.core.chunked_seq_QMARK_.call(null,inst_26784);var state_26887__$1 = state_26887;if(inst_26786)
{var statearr_26934_27005 = state_26887__$1;(statearr_26934_27005[1] = 19);
} else
{var statearr_26935_27006 = state_26887__$1;(statearr_26935_27006[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 17))
{var state_26887__$1 = state_26887;var statearr_26936_27007 = state_26887__$1;(statearr_26936_27007[2] = null);
(statearr_26936_27007[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 18))
{var inst_26808 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26937_27008 = state_26887__$1;(statearr_26937_27008[2] = inst_26808);
(statearr_26937_27008[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 19))
{var inst_26784 = (state_26887[25]);var inst_26788 = cljs.core.chunk_first.call(null,inst_26784);var inst_26789 = cljs.core.chunk_rest.call(null,inst_26784);var inst_26790 = cljs.core.count.call(null,inst_26788);var inst_26764 = inst_26789;var inst_26765 = inst_26788;var inst_26766 = inst_26790;var inst_26767 = 0;var state_26887__$1 = (function (){var statearr_26938 = state_26887;(statearr_26938[14] = inst_26767);
(statearr_26938[15] = inst_26766);
(statearr_26938[16] = inst_26765);
(statearr_26938[17] = inst_26764);
return statearr_26938;
})();var statearr_26939_27009 = state_26887__$1;(statearr_26939_27009[2] = null);
(statearr_26939_27009[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 20))
{var inst_26784 = (state_26887[25]);var inst_26794 = cljs.core.first.call(null,inst_26784);var inst_26795 = cljs.core.nth.call(null,inst_26794,0,null);var inst_26796 = cljs.core.nth.call(null,inst_26794,1,null);var state_26887__$1 = (function (){var statearr_26940 = state_26887;(statearr_26940[28] = inst_26795);
return statearr_26940;
})();if(cljs.core.truth_(inst_26796))
{var statearr_26941_27010 = state_26887__$1;(statearr_26941_27010[1] = 22);
} else
{var statearr_26942_27011 = state_26887__$1;(statearr_26942_27011[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 21))
{var inst_26805 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26943_27012 = state_26887__$1;(statearr_26943_27012[2] = inst_26805);
(statearr_26943_27012[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 22))
{var inst_26795 = (state_26887[28]);var inst_26798 = cljs.core.async.close_BANG_.call(null,inst_26795);var state_26887__$1 = state_26887;var statearr_26944_27013 = state_26887__$1;(statearr_26944_27013[2] = inst_26798);
(statearr_26944_27013[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 23))
{var state_26887__$1 = state_26887;var statearr_26945_27014 = state_26887__$1;(statearr_26945_27014[2] = null);
(statearr_26945_27014[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 24))
{var inst_26784 = (state_26887[25]);var inst_26801 = (state_26887[2]);var inst_26802 = cljs.core.next.call(null,inst_26784);var inst_26764 = inst_26802;var inst_26765 = null;var inst_26766 = 0;var inst_26767 = 0;var state_26887__$1 = (function (){var statearr_26946 = state_26887;(statearr_26946[29] = inst_26801);
(statearr_26946[14] = inst_26767);
(statearr_26946[15] = inst_26766);
(statearr_26946[16] = inst_26765);
(statearr_26946[17] = inst_26764);
return statearr_26946;
})();var statearr_26947_27015 = state_26887__$1;(statearr_26947_27015[2] = null);
(statearr_26947_27015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 25))
{var inst_26825 = (state_26887[12]);var inst_26826 = (state_26887[13]);var inst_26828 = (inst_26826 < inst_26825);var inst_26829 = inst_26828;var state_26887__$1 = state_26887;if(cljs.core.truth_(inst_26829))
{var statearr_26948_27016 = state_26887__$1;(statearr_26948_27016[1] = 27);
} else
{var statearr_26949_27017 = state_26887__$1;(statearr_26949_27017[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 26))
{var inst_26815 = (state_26887[19]);var inst_26873 = (state_26887[2]);var inst_26874 = cljs.core.seq.call(null,inst_26815);var state_26887__$1 = (function (){var statearr_26950 = state_26887;(statearr_26950[30] = inst_26873);
return statearr_26950;
})();if(inst_26874)
{var statearr_26951_27018 = state_26887__$1;(statearr_26951_27018[1] = 42);
} else
{var statearr_26952_27019 = state_26887__$1;(statearr_26952_27019[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 27))
{var inst_26824 = (state_26887[11]);var inst_26826 = (state_26887[13]);var inst_26831 = cljs.core._nth.call(null,inst_26824,inst_26826);var state_26887__$1 = (function (){var statearr_26953 = state_26887;(statearr_26953[8] = inst_26831);
return statearr_26953;
})();var statearr_26954_27020 = state_26887__$1;(statearr_26954_27020[2] = null);
(statearr_26954_27020[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 28))
{var inst_26823 = (state_26887[10]);var inst_26844 = (state_26887[9]);var inst_26844__$1 = cljs.core.seq.call(null,inst_26823);var state_26887__$1 = (function (){var statearr_26958 = state_26887;(statearr_26958[9] = inst_26844__$1);
return statearr_26958;
})();if(inst_26844__$1)
{var statearr_26959_27021 = state_26887__$1;(statearr_26959_27021[1] = 33);
} else
{var statearr_26960_27022 = state_26887__$1;(statearr_26960_27022[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 29))
{var inst_26871 = (state_26887[2]);var state_26887__$1 = state_26887;var statearr_26961_27023 = state_26887__$1;(statearr_26961_27023[2] = inst_26871);
(statearr_26961_27023[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 30))
{var inst_26823 = (state_26887[10]);var inst_26824 = (state_26887[11]);var inst_26825 = (state_26887[12]);var inst_26826 = (state_26887[13]);var inst_26840 = (state_26887[2]);var inst_26841 = (inst_26826 + 1);var tmp26955 = inst_26823;var tmp26956 = inst_26824;var tmp26957 = inst_26825;var inst_26823__$1 = tmp26955;var inst_26824__$1 = tmp26956;var inst_26825__$1 = tmp26957;var inst_26826__$1 = inst_26841;var state_26887__$1 = (function (){var statearr_26962 = state_26887;(statearr_26962[10] = inst_26823__$1);
(statearr_26962[11] = inst_26824__$1);
(statearr_26962[12] = inst_26825__$1);
(statearr_26962[13] = inst_26826__$1);
(statearr_26962[31] = inst_26840);
return statearr_26962;
})();var statearr_26963_27024 = state_26887__$1;(statearr_26963_27024[2] = null);
(statearr_26963_27024[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26888 === 31))
{var inst_26831 = (state_26887[8]);var inst_26832 = (state_26887[2]);var inst_26833 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26834 = cljs.core.async.untap_STAR_.call(null,m,inst_26831);var state_26887__$1 = (function (){var statearr_26964 = state_26887;(statearr_26964[32] = inst_26833);
(statearr_26964[33] = inst_26832);
return statearr_26964;
})();var statearr_26965_27025 = state_26887__$1;(statearr_26965_27025[2] = inst_26834);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_26969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26969[0] = state_machine__5507__auto__);
(statearr_26969[1] = 1);
return statearr_26969;
});
var state_machine__5507__auto____1 = (function (state_26887){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26970){if((e26970 instanceof Object))
{var ex__5510__auto__ = e26970;var statearr_26971_27026 = state_26887;(statearr_26971_27026[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27027 = state_26887;
state_26887 = G__27027;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26887){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26972 = f__5522__auto__.call(null);(statearr_26972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26973);
return statearr_26972;
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
cljs.core.async.Mix = (function (){var obj27029 = {};return obj27029;
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
;var m = (function (){if(typeof cljs.core.async.t27139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27139 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27140){
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
this.meta27140 = meta27140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27139.cljs$lang$type = true;
cljs.core.async.t27139.cljs$lang$ctorStr = "cljs.core.async/t27139";
cljs.core.async.t27139.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t27139");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27139.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27141){var self__ = this;
var _27141__$1 = this;return self__.meta27140;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27141,meta27140__$1){var self__ = this;
var _27141__$1 = this;return (new cljs.core.async.t27139(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27140__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27139 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27139(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27140){return (new cljs.core.async.t27139(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27140));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27139(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___27248 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27206){var state_val_27207 = (state_27206[1]);if((state_val_27207 === 1))
{var inst_27145 = (state_27206[7]);var inst_27145__$1 = calc_state.call(null);var inst_27146 = cljs.core.seq_QMARK_.call(null,inst_27145__$1);var state_27206__$1 = (function (){var statearr_27208 = state_27206;(statearr_27208[7] = inst_27145__$1);
return statearr_27208;
})();if(inst_27146)
{var statearr_27209_27249 = state_27206__$1;(statearr_27209_27249[1] = 2);
} else
{var statearr_27210_27250 = state_27206__$1;(statearr_27210_27250[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 2))
{var inst_27145 = (state_27206[7]);var inst_27148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27145);var state_27206__$1 = state_27206;var statearr_27211_27251 = state_27206__$1;(statearr_27211_27251[2] = inst_27148);
(statearr_27211_27251[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 3))
{var inst_27145 = (state_27206[7]);var state_27206__$1 = state_27206;var statearr_27212_27252 = state_27206__$1;(statearr_27212_27252[2] = inst_27145);
(statearr_27212_27252[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 4))
{var inst_27145 = (state_27206[7]);var inst_27151 = (state_27206[2]);var inst_27152 = cljs.core.get.call(null,inst_27151,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27153 = cljs.core.get.call(null,inst_27151,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27154 = cljs.core.get.call(null,inst_27151,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27155 = inst_27145;var state_27206__$1 = (function (){var statearr_27213 = state_27206;(statearr_27213[8] = inst_27153);
(statearr_27213[9] = inst_27152);
(statearr_27213[10] = inst_27155);
(statearr_27213[11] = inst_27154);
return statearr_27213;
})();var statearr_27214_27253 = state_27206__$1;(statearr_27214_27253[2] = null);
(statearr_27214_27253[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 5))
{var inst_27155 = (state_27206[10]);var inst_27158 = cljs.core.seq_QMARK_.call(null,inst_27155);var state_27206__$1 = state_27206;if(inst_27158)
{var statearr_27215_27254 = state_27206__$1;(statearr_27215_27254[1] = 7);
} else
{var statearr_27216_27255 = state_27206__$1;(statearr_27216_27255[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 6))
{var inst_27204 = (state_27206[2]);var state_27206__$1 = state_27206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27206__$1,inst_27204);
} else
{if((state_val_27207 === 7))
{var inst_27155 = (state_27206[10]);var inst_27160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27155);var state_27206__$1 = state_27206;var statearr_27217_27256 = state_27206__$1;(statearr_27217_27256[2] = inst_27160);
(statearr_27217_27256[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 8))
{var inst_27155 = (state_27206[10]);var state_27206__$1 = state_27206;var statearr_27218_27257 = state_27206__$1;(statearr_27218_27257[2] = inst_27155);
(statearr_27218_27257[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 9))
{var inst_27163 = (state_27206[12]);var inst_27163__$1 = (state_27206[2]);var inst_27164 = cljs.core.get.call(null,inst_27163__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27165 = cljs.core.get.call(null,inst_27163__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27166 = cljs.core.get.call(null,inst_27163__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27206__$1 = (function (){var statearr_27219 = state_27206;(statearr_27219[12] = inst_27163__$1);
(statearr_27219[13] = inst_27166);
(statearr_27219[14] = inst_27165);
return statearr_27219;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27206__$1,10,inst_27164);
} else
{if((state_val_27207 === 10))
{var inst_27170 = (state_27206[15]);var inst_27171 = (state_27206[16]);var inst_27169 = (state_27206[2]);var inst_27170__$1 = cljs.core.nth.call(null,inst_27169,0,null);var inst_27171__$1 = cljs.core.nth.call(null,inst_27169,1,null);var inst_27172 = (inst_27170__$1 == null);var inst_27173 = cljs.core._EQ_.call(null,inst_27171__$1,change);var inst_27174 = (inst_27172) || (inst_27173);var state_27206__$1 = (function (){var statearr_27220 = state_27206;(statearr_27220[15] = inst_27170__$1);
(statearr_27220[16] = inst_27171__$1);
return statearr_27220;
})();if(cljs.core.truth_(inst_27174))
{var statearr_27221_27258 = state_27206__$1;(statearr_27221_27258[1] = 11);
} else
{var statearr_27222_27259 = state_27206__$1;(statearr_27222_27259[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 11))
{var inst_27170 = (state_27206[15]);var inst_27176 = (inst_27170 == null);var state_27206__$1 = state_27206;if(cljs.core.truth_(inst_27176))
{var statearr_27223_27260 = state_27206__$1;(statearr_27223_27260[1] = 14);
} else
{var statearr_27224_27261 = state_27206__$1;(statearr_27224_27261[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 12))
{var inst_27171 = (state_27206[16]);var inst_27166 = (state_27206[13]);var inst_27185 = (state_27206[17]);var inst_27185__$1 = inst_27166.call(null,inst_27171);var state_27206__$1 = (function (){var statearr_27225 = state_27206;(statearr_27225[17] = inst_27185__$1);
return statearr_27225;
})();if(cljs.core.truth_(inst_27185__$1))
{var statearr_27226_27262 = state_27206__$1;(statearr_27226_27262[1] = 17);
} else
{var statearr_27227_27263 = state_27206__$1;(statearr_27227_27263[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 13))
{var inst_27202 = (state_27206[2]);var state_27206__$1 = state_27206;var statearr_27228_27264 = state_27206__$1;(statearr_27228_27264[2] = inst_27202);
(statearr_27228_27264[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 14))
{var inst_27171 = (state_27206[16]);var inst_27178 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27171);var state_27206__$1 = state_27206;var statearr_27229_27265 = state_27206__$1;(statearr_27229_27265[2] = inst_27178);
(statearr_27229_27265[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 15))
{var state_27206__$1 = state_27206;var statearr_27230_27266 = state_27206__$1;(statearr_27230_27266[2] = null);
(statearr_27230_27266[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 16))
{var inst_27181 = (state_27206[2]);var inst_27182 = calc_state.call(null);var inst_27155 = inst_27182;var state_27206__$1 = (function (){var statearr_27231 = state_27206;(statearr_27231[18] = inst_27181);
(statearr_27231[10] = inst_27155);
return statearr_27231;
})();var statearr_27232_27267 = state_27206__$1;(statearr_27232_27267[2] = null);
(statearr_27232_27267[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 17))
{var inst_27185 = (state_27206[17]);var state_27206__$1 = state_27206;var statearr_27233_27268 = state_27206__$1;(statearr_27233_27268[2] = inst_27185);
(statearr_27233_27268[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 18))
{var inst_27171 = (state_27206[16]);var inst_27166 = (state_27206[13]);var inst_27165 = (state_27206[14]);var inst_27188 = cljs.core.empty_QMARK_.call(null,inst_27166);var inst_27189 = inst_27165.call(null,inst_27171);var inst_27190 = cljs.core.not.call(null,inst_27189);var inst_27191 = (inst_27188) && (inst_27190);var state_27206__$1 = state_27206;var statearr_27234_27269 = state_27206__$1;(statearr_27234_27269[2] = inst_27191);
(statearr_27234_27269[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 19))
{var inst_27193 = (state_27206[2]);var state_27206__$1 = state_27206;if(cljs.core.truth_(inst_27193))
{var statearr_27235_27270 = state_27206__$1;(statearr_27235_27270[1] = 20);
} else
{var statearr_27236_27271 = state_27206__$1;(statearr_27236_27271[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 20))
{var inst_27170 = (state_27206[15]);var state_27206__$1 = state_27206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27206__$1,23,out,inst_27170);
} else
{if((state_val_27207 === 21))
{var state_27206__$1 = state_27206;var statearr_27237_27272 = state_27206__$1;(statearr_27237_27272[2] = null);
(statearr_27237_27272[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 22))
{var inst_27163 = (state_27206[12]);var inst_27199 = (state_27206[2]);var inst_27155 = inst_27163;var state_27206__$1 = (function (){var statearr_27238 = state_27206;(statearr_27238[19] = inst_27199);
(statearr_27238[10] = inst_27155);
return statearr_27238;
})();var statearr_27239_27273 = state_27206__$1;(statearr_27239_27273[2] = null);
(statearr_27239_27273[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27207 === 23))
{var inst_27196 = (state_27206[2]);var state_27206__$1 = state_27206;var statearr_27240_27274 = state_27206__$1;(statearr_27240_27274[2] = inst_27196);
(statearr_27240_27274[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_27244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27244[0] = state_machine__5507__auto__);
(statearr_27244[1] = 1);
return statearr_27244;
});
var state_machine__5507__auto____1 = (function (state_27206){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27206);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27245){if((e27245 instanceof Object))
{var ex__5510__auto__ = e27245;var statearr_27246_27275 = state_27206;(statearr_27246_27275[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27276 = state_27206;
state_27206 = G__27276;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27206){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27247 = f__5522__auto__.call(null);(statearr_27247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27248);
return statearr_27247;
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
cljs.core.async.Pub = (function (){var obj27278 = {};return obj27278;
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
return (function (p1__27279_SHARP_){if(cljs.core.truth_(p1__27279_SHARP_.call(null,topic)))
{return p1__27279_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27279_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27404 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27404 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27405){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27405 = meta27405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27404.cljs$lang$type = true;
cljs.core.async.t27404.cljs$lang$ctorStr = "cljs.core.async/t27404";
cljs.core.async.t27404.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t27404");
});})(mults,ensure_mult))
;
cljs.core.async.t27404.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27404.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27404.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27404.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27406){var self__ = this;
var _27406__$1 = this;return self__.meta27405;
});})(mults,ensure_mult))
;
cljs.core.async.t27404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27406,meta27405__$1){var self__ = this;
var _27406__$1 = this;return (new cljs.core.async.t27404(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27405__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27404 = ((function (mults,ensure_mult){
return (function __GT_t27404(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27405){return (new cljs.core.async.t27404(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27405));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27404(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___27528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27480){var state_val_27481 = (state_27480[1]);if((state_val_27481 === 1))
{var state_27480__$1 = state_27480;var statearr_27482_27529 = state_27480__$1;(statearr_27482_27529[2] = null);
(statearr_27482_27529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 2))
{var state_27480__$1 = state_27480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27480__$1,4,ch);
} else
{if((state_val_27481 === 3))
{var inst_27478 = (state_27480[2]);var state_27480__$1 = state_27480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27480__$1,inst_27478);
} else
{if((state_val_27481 === 4))
{var inst_27409 = (state_27480[7]);var inst_27409__$1 = (state_27480[2]);var inst_27410 = (inst_27409__$1 == null);var state_27480__$1 = (function (){var statearr_27483 = state_27480;(statearr_27483[7] = inst_27409__$1);
return statearr_27483;
})();if(cljs.core.truth_(inst_27410))
{var statearr_27484_27530 = state_27480__$1;(statearr_27484_27530[1] = 5);
} else
{var statearr_27485_27531 = state_27480__$1;(statearr_27485_27531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 5))
{var inst_27416 = cljs.core.deref.call(null,mults);var inst_27417 = cljs.core.vals.call(null,inst_27416);var inst_27418 = cljs.core.seq.call(null,inst_27417);var inst_27419 = inst_27418;var inst_27420 = null;var inst_27421 = 0;var inst_27422 = 0;var state_27480__$1 = (function (){var statearr_27486 = state_27480;(statearr_27486[8] = inst_27419);
(statearr_27486[9] = inst_27422);
(statearr_27486[10] = inst_27420);
(statearr_27486[11] = inst_27421);
return statearr_27486;
})();var statearr_27487_27532 = state_27480__$1;(statearr_27487_27532[2] = null);
(statearr_27487_27532[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 6))
{var inst_27459 = (state_27480[12]);var inst_27409 = (state_27480[7]);var inst_27457 = (state_27480[13]);var inst_27457__$1 = topic_fn.call(null,inst_27409);var inst_27458 = cljs.core.deref.call(null,mults);var inst_27459__$1 = cljs.core.get.call(null,inst_27458,inst_27457__$1);var state_27480__$1 = (function (){var statearr_27488 = state_27480;(statearr_27488[12] = inst_27459__$1);
(statearr_27488[13] = inst_27457__$1);
return statearr_27488;
})();if(cljs.core.truth_(inst_27459__$1))
{var statearr_27489_27533 = state_27480__$1;(statearr_27489_27533[1] = 19);
} else
{var statearr_27490_27534 = state_27480__$1;(statearr_27490_27534[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 7))
{var inst_27476 = (state_27480[2]);var state_27480__$1 = state_27480;var statearr_27491_27535 = state_27480__$1;(statearr_27491_27535[2] = inst_27476);
(statearr_27491_27535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 8))
{var inst_27422 = (state_27480[9]);var inst_27421 = (state_27480[11]);var inst_27424 = (inst_27422 < inst_27421);var inst_27425 = inst_27424;var state_27480__$1 = state_27480;if(cljs.core.truth_(inst_27425))
{var statearr_27495_27536 = state_27480__$1;(statearr_27495_27536[1] = 10);
} else
{var statearr_27496_27537 = state_27480__$1;(statearr_27496_27537[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 9))
{var inst_27455 = (state_27480[2]);var state_27480__$1 = state_27480;var statearr_27497_27538 = state_27480__$1;(statearr_27497_27538[2] = inst_27455);
(statearr_27497_27538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 10))
{var inst_27419 = (state_27480[8]);var inst_27422 = (state_27480[9]);var inst_27420 = (state_27480[10]);var inst_27421 = (state_27480[11]);var inst_27427 = cljs.core._nth.call(null,inst_27420,inst_27422);var inst_27428 = cljs.core.async.muxch_STAR_.call(null,inst_27427);var inst_27429 = cljs.core.async.close_BANG_.call(null,inst_27428);var inst_27430 = (inst_27422 + 1);var tmp27492 = inst_27419;var tmp27493 = inst_27420;var tmp27494 = inst_27421;var inst_27419__$1 = tmp27492;var inst_27420__$1 = tmp27493;var inst_27421__$1 = tmp27494;var inst_27422__$1 = inst_27430;var state_27480__$1 = (function (){var statearr_27498 = state_27480;(statearr_27498[14] = inst_27429);
(statearr_27498[8] = inst_27419__$1);
(statearr_27498[9] = inst_27422__$1);
(statearr_27498[10] = inst_27420__$1);
(statearr_27498[11] = inst_27421__$1);
return statearr_27498;
})();var statearr_27499_27539 = state_27480__$1;(statearr_27499_27539[2] = null);
(statearr_27499_27539[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 11))
{var inst_27433 = (state_27480[15]);var inst_27419 = (state_27480[8]);var inst_27433__$1 = cljs.core.seq.call(null,inst_27419);var state_27480__$1 = (function (){var statearr_27500 = state_27480;(statearr_27500[15] = inst_27433__$1);
return statearr_27500;
})();if(inst_27433__$1)
{var statearr_27501_27540 = state_27480__$1;(statearr_27501_27540[1] = 13);
} else
{var statearr_27502_27541 = state_27480__$1;(statearr_27502_27541[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 12))
{var inst_27453 = (state_27480[2]);var state_27480__$1 = state_27480;var statearr_27503_27542 = state_27480__$1;(statearr_27503_27542[2] = inst_27453);
(statearr_27503_27542[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 13))
{var inst_27433 = (state_27480[15]);var inst_27435 = cljs.core.chunked_seq_QMARK_.call(null,inst_27433);var state_27480__$1 = state_27480;if(inst_27435)
{var statearr_27504_27543 = state_27480__$1;(statearr_27504_27543[1] = 16);
} else
{var statearr_27505_27544 = state_27480__$1;(statearr_27505_27544[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 14))
{var state_27480__$1 = state_27480;var statearr_27506_27545 = state_27480__$1;(statearr_27506_27545[2] = null);
(statearr_27506_27545[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 15))
{var inst_27451 = (state_27480[2]);var state_27480__$1 = state_27480;var statearr_27507_27546 = state_27480__$1;(statearr_27507_27546[2] = inst_27451);
(statearr_27507_27546[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 16))
{var inst_27433 = (state_27480[15]);var inst_27437 = cljs.core.chunk_first.call(null,inst_27433);var inst_27438 = cljs.core.chunk_rest.call(null,inst_27433);var inst_27439 = cljs.core.count.call(null,inst_27437);var inst_27419 = inst_27438;var inst_27420 = inst_27437;var inst_27421 = inst_27439;var inst_27422 = 0;var state_27480__$1 = (function (){var statearr_27508 = state_27480;(statearr_27508[8] = inst_27419);
(statearr_27508[9] = inst_27422);
(statearr_27508[10] = inst_27420);
(statearr_27508[11] = inst_27421);
return statearr_27508;
})();var statearr_27509_27547 = state_27480__$1;(statearr_27509_27547[2] = null);
(statearr_27509_27547[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 17))
{var inst_27433 = (state_27480[15]);var inst_27442 = cljs.core.first.call(null,inst_27433);var inst_27443 = cljs.core.async.muxch_STAR_.call(null,inst_27442);var inst_27444 = cljs.core.async.close_BANG_.call(null,inst_27443);var inst_27445 = cljs.core.next.call(null,inst_27433);var inst_27419 = inst_27445;var inst_27420 = null;var inst_27421 = 0;var inst_27422 = 0;var state_27480__$1 = (function (){var statearr_27510 = state_27480;(statearr_27510[16] = inst_27444);
(statearr_27510[8] = inst_27419);
(statearr_27510[9] = inst_27422);
(statearr_27510[10] = inst_27420);
(statearr_27510[11] = inst_27421);
return statearr_27510;
})();var statearr_27511_27548 = state_27480__$1;(statearr_27511_27548[2] = null);
(statearr_27511_27548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 18))
{var inst_27448 = (state_27480[2]);var state_27480__$1 = state_27480;var statearr_27512_27549 = state_27480__$1;(statearr_27512_27549[2] = inst_27448);
(statearr_27512_27549[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 19))
{var state_27480__$1 = state_27480;var statearr_27513_27550 = state_27480__$1;(statearr_27513_27550[2] = null);
(statearr_27513_27550[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 20))
{var state_27480__$1 = state_27480;var statearr_27514_27551 = state_27480__$1;(statearr_27514_27551[2] = null);
(statearr_27514_27551[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 21))
{var inst_27473 = (state_27480[2]);var state_27480__$1 = (function (){var statearr_27515 = state_27480;(statearr_27515[17] = inst_27473);
return statearr_27515;
})();var statearr_27516_27552 = state_27480__$1;(statearr_27516_27552[2] = null);
(statearr_27516_27552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 22))
{var inst_27470 = (state_27480[2]);var state_27480__$1 = state_27480;var statearr_27517_27553 = state_27480__$1;(statearr_27517_27553[2] = inst_27470);
(statearr_27517_27553[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 23))
{var inst_27457 = (state_27480[13]);var inst_27461 = (state_27480[2]);var inst_27462 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27457);var state_27480__$1 = (function (){var statearr_27518 = state_27480;(statearr_27518[18] = inst_27461);
return statearr_27518;
})();var statearr_27519_27554 = state_27480__$1;(statearr_27519_27554[2] = inst_27462);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27481 === 24))
{var inst_27459 = (state_27480[12]);var inst_27409 = (state_27480[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27480,23,Object,null,22);var inst_27466 = cljs.core.async.muxch_STAR_.call(null,inst_27459);var state_27480__$1 = state_27480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27480__$1,25,inst_27466,inst_27409);
} else
{if((state_val_27481 === 25))
{var inst_27468 = (state_27480[2]);var state_27480__$1 = state_27480;var statearr_27520_27555 = state_27480__$1;(statearr_27520_27555[2] = inst_27468);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_27524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27524[0] = state_machine__5507__auto__);
(statearr_27524[1] = 1);
return statearr_27524;
});
var state_machine__5507__auto____1 = (function (state_27480){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27480);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27525){if((e27525 instanceof Object))
{var ex__5510__auto__ = e27525;var statearr_27526_27556 = state_27480;(statearr_27526_27556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27557 = state_27480;
state_27480 = G__27557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27480){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27527 = f__5522__auto__.call(null);(statearr_27527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27528);
return statearr_27527;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___27694 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27664){var state_val_27665 = (state_27664[1]);if((state_val_27665 === 1))
{var state_27664__$1 = state_27664;var statearr_27666_27695 = state_27664__$1;(statearr_27666_27695[2] = null);
(statearr_27666_27695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 2))
{var inst_27627 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27628 = 0;var state_27664__$1 = (function (){var statearr_27667 = state_27664;(statearr_27667[7] = inst_27627);
(statearr_27667[8] = inst_27628);
return statearr_27667;
})();var statearr_27668_27696 = state_27664__$1;(statearr_27668_27696[2] = null);
(statearr_27668_27696[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 3))
{var inst_27662 = (state_27664[2]);var state_27664__$1 = state_27664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27664__$1,inst_27662);
} else
{if((state_val_27665 === 4))
{var inst_27628 = (state_27664[8]);var inst_27630 = (inst_27628 < cnt);var state_27664__$1 = state_27664;if(cljs.core.truth_(inst_27630))
{var statearr_27669_27697 = state_27664__$1;(statearr_27669_27697[1] = 6);
} else
{var statearr_27670_27698 = state_27664__$1;(statearr_27670_27698[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 5))
{var inst_27648 = (state_27664[2]);var state_27664__$1 = (function (){var statearr_27671 = state_27664;(statearr_27671[9] = inst_27648);
return statearr_27671;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27664__$1,12,dchan);
} else
{if((state_val_27665 === 6))
{var state_27664__$1 = state_27664;var statearr_27672_27699 = state_27664__$1;(statearr_27672_27699[2] = null);
(statearr_27672_27699[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 7))
{var state_27664__$1 = state_27664;var statearr_27673_27700 = state_27664__$1;(statearr_27673_27700[2] = null);
(statearr_27673_27700[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 8))
{var inst_27646 = (state_27664[2]);var state_27664__$1 = state_27664;var statearr_27674_27701 = state_27664__$1;(statearr_27674_27701[2] = inst_27646);
(statearr_27674_27701[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 9))
{var inst_27628 = (state_27664[8]);var inst_27641 = (state_27664[2]);var inst_27642 = (inst_27628 + 1);var inst_27628__$1 = inst_27642;var state_27664__$1 = (function (){var statearr_27675 = state_27664;(statearr_27675[10] = inst_27641);
(statearr_27675[8] = inst_27628__$1);
return statearr_27675;
})();var statearr_27676_27702 = state_27664__$1;(statearr_27676_27702[2] = null);
(statearr_27676_27702[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 10))
{var inst_27632 = (state_27664[2]);var inst_27633 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27664__$1 = (function (){var statearr_27677 = state_27664;(statearr_27677[11] = inst_27632);
return statearr_27677;
})();var statearr_27678_27703 = state_27664__$1;(statearr_27678_27703[2] = inst_27633);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27664__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 11))
{var inst_27628 = (state_27664[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27664,10,Object,null,9);var inst_27637 = chs__$1.call(null,inst_27628);var inst_27638 = done.call(null,inst_27628);var inst_27639 = cljs.core.async.take_BANG_.call(null,inst_27637,inst_27638);var state_27664__$1 = state_27664;var statearr_27679_27704 = state_27664__$1;(statearr_27679_27704[2] = inst_27639);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27664__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 12))
{var inst_27650 = (state_27664[12]);var inst_27650__$1 = (state_27664[2]);var inst_27651 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27650__$1);var state_27664__$1 = (function (){var statearr_27680 = state_27664;(statearr_27680[12] = inst_27650__$1);
return statearr_27680;
})();if(cljs.core.truth_(inst_27651))
{var statearr_27681_27705 = state_27664__$1;(statearr_27681_27705[1] = 13);
} else
{var statearr_27682_27706 = state_27664__$1;(statearr_27682_27706[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 13))
{var inst_27653 = cljs.core.async.close_BANG_.call(null,out);var state_27664__$1 = state_27664;var statearr_27683_27707 = state_27664__$1;(statearr_27683_27707[2] = inst_27653);
(statearr_27683_27707[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 14))
{var inst_27650 = (state_27664[12]);var inst_27655 = cljs.core.apply.call(null,f,inst_27650);var state_27664__$1 = state_27664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27664__$1,16,out,inst_27655);
} else
{if((state_val_27665 === 15))
{var inst_27660 = (state_27664[2]);var state_27664__$1 = state_27664;var statearr_27684_27708 = state_27664__$1;(statearr_27684_27708[2] = inst_27660);
(statearr_27684_27708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27665 === 16))
{var inst_27657 = (state_27664[2]);var state_27664__$1 = (function (){var statearr_27685 = state_27664;(statearr_27685[13] = inst_27657);
return statearr_27685;
})();var statearr_27686_27709 = state_27664__$1;(statearr_27686_27709[2] = null);
(statearr_27686_27709[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_27690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27690[0] = state_machine__5507__auto__);
(statearr_27690[1] = 1);
return statearr_27690;
});
var state_machine__5507__auto____1 = (function (state_27664){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27664);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27691){if((e27691 instanceof Object))
{var ex__5510__auto__ = e27691;var statearr_27692_27710 = state_27664;(statearr_27692_27710[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27664);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27711 = state_27664;
state_27664 = G__27711;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27664){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27693 = f__5522__auto__.call(null);(statearr_27693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27694);
return statearr_27693;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___27819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27795){var state_val_27796 = (state_27795[1]);if((state_val_27796 === 1))
{var inst_27766 = cljs.core.vec.call(null,chs);var inst_27767 = inst_27766;var state_27795__$1 = (function (){var statearr_27797 = state_27795;(statearr_27797[7] = inst_27767);
return statearr_27797;
})();var statearr_27798_27820 = state_27795__$1;(statearr_27798_27820[2] = null);
(statearr_27798_27820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27796 === 2))
{var inst_27767 = (state_27795[7]);var inst_27769 = cljs.core.count.call(null,inst_27767);var inst_27770 = (inst_27769 > 0);var state_27795__$1 = state_27795;if(cljs.core.truth_(inst_27770))
{var statearr_27799_27821 = state_27795__$1;(statearr_27799_27821[1] = 4);
} else
{var statearr_27800_27822 = state_27795__$1;(statearr_27800_27822[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27796 === 3))
{var inst_27793 = (state_27795[2]);var state_27795__$1 = state_27795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27795__$1,inst_27793);
} else
{if((state_val_27796 === 4))
{var inst_27767 = (state_27795[7]);var state_27795__$1 = state_27795;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27795__$1,7,inst_27767);
} else
{if((state_val_27796 === 5))
{var inst_27789 = cljs.core.async.close_BANG_.call(null,out);var state_27795__$1 = state_27795;var statearr_27801_27823 = state_27795__$1;(statearr_27801_27823[2] = inst_27789);
(statearr_27801_27823[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27796 === 6))
{var inst_27791 = (state_27795[2]);var state_27795__$1 = state_27795;var statearr_27802_27824 = state_27795__$1;(statearr_27802_27824[2] = inst_27791);
(statearr_27802_27824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27796 === 7))
{var inst_27774 = (state_27795[8]);var inst_27775 = (state_27795[9]);var inst_27774__$1 = (state_27795[2]);var inst_27775__$1 = cljs.core.nth.call(null,inst_27774__$1,0,null);var inst_27776 = cljs.core.nth.call(null,inst_27774__$1,1,null);var inst_27777 = (inst_27775__$1 == null);var state_27795__$1 = (function (){var statearr_27803 = state_27795;(statearr_27803[8] = inst_27774__$1);
(statearr_27803[9] = inst_27775__$1);
(statearr_27803[10] = inst_27776);
return statearr_27803;
})();if(cljs.core.truth_(inst_27777))
{var statearr_27804_27825 = state_27795__$1;(statearr_27804_27825[1] = 8);
} else
{var statearr_27805_27826 = state_27795__$1;(statearr_27805_27826[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27796 === 8))
{var inst_27767 = (state_27795[7]);var inst_27774 = (state_27795[8]);var inst_27775 = (state_27795[9]);var inst_27776 = (state_27795[10]);var inst_27779 = (function (){var c = inst_27776;var v = inst_27775;var vec__27772 = inst_27774;var cs = inst_27767;return ((function (c,v,vec__27772,cs,inst_27767,inst_27774,inst_27775,inst_27776,state_val_27796){
return (function (p1__27712_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27712_SHARP_);
});
;})(c,v,vec__27772,cs,inst_27767,inst_27774,inst_27775,inst_27776,state_val_27796))
})();var inst_27780 = cljs.core.filterv.call(null,inst_27779,inst_27767);var inst_27767__$1 = inst_27780;var state_27795__$1 = (function (){var statearr_27806 = state_27795;(statearr_27806[7] = inst_27767__$1);
return statearr_27806;
})();var statearr_27807_27827 = state_27795__$1;(statearr_27807_27827[2] = null);
(statearr_27807_27827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27796 === 9))
{var inst_27775 = (state_27795[9]);var state_27795__$1 = state_27795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27795__$1,11,out,inst_27775);
} else
{if((state_val_27796 === 10))
{var inst_27787 = (state_27795[2]);var state_27795__$1 = state_27795;var statearr_27809_27828 = state_27795__$1;(statearr_27809_27828[2] = inst_27787);
(statearr_27809_27828[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27796 === 11))
{var inst_27767 = (state_27795[7]);var inst_27784 = (state_27795[2]);var tmp27808 = inst_27767;var inst_27767__$1 = tmp27808;var state_27795__$1 = (function (){var statearr_27810 = state_27795;(statearr_27810[7] = inst_27767__$1);
(statearr_27810[11] = inst_27784);
return statearr_27810;
})();var statearr_27811_27829 = state_27795__$1;(statearr_27811_27829[2] = null);
(statearr_27811_27829[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_27815 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27815[0] = state_machine__5507__auto__);
(statearr_27815[1] = 1);
return statearr_27815;
});
var state_machine__5507__auto____1 = (function (state_27795){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object))
{var ex__5510__auto__ = e27816;var statearr_27817_27830 = state_27795;(statearr_27817_27830[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27831 = state_27795;
state_27795 = G__27831;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27818 = f__5522__auto__.call(null);(statearr_27818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27819);
return statearr_27818;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___27924 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27901){var state_val_27902 = (state_27901[1]);if((state_val_27902 === 1))
{var inst_27878 = 0;var state_27901__$1 = (function (){var statearr_27903 = state_27901;(statearr_27903[7] = inst_27878);
return statearr_27903;
})();var statearr_27904_27925 = state_27901__$1;(statearr_27904_27925[2] = null);
(statearr_27904_27925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27902 === 2))
{var inst_27878 = (state_27901[7]);var inst_27880 = (inst_27878 < n);var state_27901__$1 = state_27901;if(cljs.core.truth_(inst_27880))
{var statearr_27905_27926 = state_27901__$1;(statearr_27905_27926[1] = 4);
} else
{var statearr_27906_27927 = state_27901__$1;(statearr_27906_27927[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27902 === 3))
{var inst_27898 = (state_27901[2]);var inst_27899 = cljs.core.async.close_BANG_.call(null,out);var state_27901__$1 = (function (){var statearr_27907 = state_27901;(statearr_27907[8] = inst_27898);
return statearr_27907;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27901__$1,inst_27899);
} else
{if((state_val_27902 === 4))
{var state_27901__$1 = state_27901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27901__$1,7,ch);
} else
{if((state_val_27902 === 5))
{var state_27901__$1 = state_27901;var statearr_27908_27928 = state_27901__$1;(statearr_27908_27928[2] = null);
(statearr_27908_27928[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27902 === 6))
{var inst_27896 = (state_27901[2]);var state_27901__$1 = state_27901;var statearr_27909_27929 = state_27901__$1;(statearr_27909_27929[2] = inst_27896);
(statearr_27909_27929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27902 === 7))
{var inst_27883 = (state_27901[9]);var inst_27883__$1 = (state_27901[2]);var inst_27884 = (inst_27883__$1 == null);var inst_27885 = cljs.core.not.call(null,inst_27884);var state_27901__$1 = (function (){var statearr_27910 = state_27901;(statearr_27910[9] = inst_27883__$1);
return statearr_27910;
})();if(inst_27885)
{var statearr_27911_27930 = state_27901__$1;(statearr_27911_27930[1] = 8);
} else
{var statearr_27912_27931 = state_27901__$1;(statearr_27912_27931[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27902 === 8))
{var inst_27883 = (state_27901[9]);var state_27901__$1 = state_27901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27901__$1,11,out,inst_27883);
} else
{if((state_val_27902 === 9))
{var state_27901__$1 = state_27901;var statearr_27913_27932 = state_27901__$1;(statearr_27913_27932[2] = null);
(statearr_27913_27932[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27902 === 10))
{var inst_27893 = (state_27901[2]);var state_27901__$1 = state_27901;var statearr_27914_27933 = state_27901__$1;(statearr_27914_27933[2] = inst_27893);
(statearr_27914_27933[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27902 === 11))
{var inst_27878 = (state_27901[7]);var inst_27888 = (state_27901[2]);var inst_27889 = (inst_27878 + 1);var inst_27878__$1 = inst_27889;var state_27901__$1 = (function (){var statearr_27915 = state_27901;(statearr_27915[10] = inst_27888);
(statearr_27915[7] = inst_27878__$1);
return statearr_27915;
})();var statearr_27916_27934 = state_27901__$1;(statearr_27916_27934[2] = null);
(statearr_27916_27934[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_27920 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27920[0] = state_machine__5507__auto__);
(statearr_27920[1] = 1);
return statearr_27920;
});
var state_machine__5507__auto____1 = (function (state_27901){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27921){if((e27921 instanceof Object))
{var ex__5510__auto__ = e27921;var statearr_27922_27935 = state_27901;(statearr_27922_27935[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27936 = state_27901;
state_27901 = G__27936;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27901){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27923 = f__5522__auto__.call(null);(statearr_27923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27924);
return statearr_27923;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___28033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28008){var state_val_28009 = (state_28008[1]);if((state_val_28009 === 1))
{var inst_27985 = null;var state_28008__$1 = (function (){var statearr_28010 = state_28008;(statearr_28010[7] = inst_27985);
return statearr_28010;
})();var statearr_28011_28034 = state_28008__$1;(statearr_28011_28034[2] = null);
(statearr_28011_28034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28009 === 2))
{var state_28008__$1 = state_28008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28008__$1,4,ch);
} else
{if((state_val_28009 === 3))
{var inst_28005 = (state_28008[2]);var inst_28006 = cljs.core.async.close_BANG_.call(null,out);var state_28008__$1 = (function (){var statearr_28012 = state_28008;(statearr_28012[8] = inst_28005);
return statearr_28012;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28008__$1,inst_28006);
} else
{if((state_val_28009 === 4))
{var inst_27988 = (state_28008[9]);var inst_27988__$1 = (state_28008[2]);var inst_27989 = (inst_27988__$1 == null);var inst_27990 = cljs.core.not.call(null,inst_27989);var state_28008__$1 = (function (){var statearr_28013 = state_28008;(statearr_28013[9] = inst_27988__$1);
return statearr_28013;
})();if(inst_27990)
{var statearr_28014_28035 = state_28008__$1;(statearr_28014_28035[1] = 5);
} else
{var statearr_28015_28036 = state_28008__$1;(statearr_28015_28036[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28009 === 5))
{var inst_27988 = (state_28008[9]);var inst_27985 = (state_28008[7]);var inst_27992 = cljs.core._EQ_.call(null,inst_27988,inst_27985);var state_28008__$1 = state_28008;if(inst_27992)
{var statearr_28016_28037 = state_28008__$1;(statearr_28016_28037[1] = 8);
} else
{var statearr_28017_28038 = state_28008__$1;(statearr_28017_28038[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28009 === 6))
{var state_28008__$1 = state_28008;var statearr_28019_28039 = state_28008__$1;(statearr_28019_28039[2] = null);
(statearr_28019_28039[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28009 === 7))
{var inst_28003 = (state_28008[2]);var state_28008__$1 = state_28008;var statearr_28020_28040 = state_28008__$1;(statearr_28020_28040[2] = inst_28003);
(statearr_28020_28040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28009 === 8))
{var inst_27985 = (state_28008[7]);var tmp28018 = inst_27985;var inst_27985__$1 = tmp28018;var state_28008__$1 = (function (){var statearr_28021 = state_28008;(statearr_28021[7] = inst_27985__$1);
return statearr_28021;
})();var statearr_28022_28041 = state_28008__$1;(statearr_28022_28041[2] = null);
(statearr_28022_28041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28009 === 9))
{var inst_27988 = (state_28008[9]);var state_28008__$1 = state_28008;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28008__$1,11,out,inst_27988);
} else
{if((state_val_28009 === 10))
{var inst_28000 = (state_28008[2]);var state_28008__$1 = state_28008;var statearr_28023_28042 = state_28008__$1;(statearr_28023_28042[2] = inst_28000);
(statearr_28023_28042[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28009 === 11))
{var inst_27988 = (state_28008[9]);var inst_27997 = (state_28008[2]);var inst_27985 = inst_27988;var state_28008__$1 = (function (){var statearr_28024 = state_28008;(statearr_28024[10] = inst_27997);
(statearr_28024[7] = inst_27985);
return statearr_28024;
})();var statearr_28025_28043 = state_28008__$1;(statearr_28025_28043[2] = null);
(statearr_28025_28043[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_28029 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28029[0] = state_machine__5507__auto__);
(statearr_28029[1] = 1);
return statearr_28029;
});
var state_machine__5507__auto____1 = (function (state_28008){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28008);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28030){if((e28030 instanceof Object))
{var ex__5510__auto__ = e28030;var statearr_28031_28044 = state_28008;(statearr_28031_28044[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28045 = state_28008;
state_28008 = G__28045;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28008){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28032 = f__5522__auto__.call(null);(statearr_28032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28033);
return statearr_28032;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___28180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28150){var state_val_28151 = (state_28150[1]);if((state_val_28151 === 1))
{var inst_28113 = (new Array(n));var inst_28114 = inst_28113;var inst_28115 = 0;var state_28150__$1 = (function (){var statearr_28152 = state_28150;(statearr_28152[7] = inst_28115);
(statearr_28152[8] = inst_28114);
return statearr_28152;
})();var statearr_28153_28181 = state_28150__$1;(statearr_28153_28181[2] = null);
(statearr_28153_28181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 2))
{var state_28150__$1 = state_28150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28150__$1,4,ch);
} else
{if((state_val_28151 === 3))
{var inst_28148 = (state_28150[2]);var state_28150__$1 = state_28150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28150__$1,inst_28148);
} else
{if((state_val_28151 === 4))
{var inst_28118 = (state_28150[9]);var inst_28118__$1 = (state_28150[2]);var inst_28119 = (inst_28118__$1 == null);var inst_28120 = cljs.core.not.call(null,inst_28119);var state_28150__$1 = (function (){var statearr_28154 = state_28150;(statearr_28154[9] = inst_28118__$1);
return statearr_28154;
})();if(inst_28120)
{var statearr_28155_28182 = state_28150__$1;(statearr_28155_28182[1] = 5);
} else
{var statearr_28156_28183 = state_28150__$1;(statearr_28156_28183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 5))
{var inst_28123 = (state_28150[10]);var inst_28118 = (state_28150[9]);var inst_28115 = (state_28150[7]);var inst_28114 = (state_28150[8]);var inst_28122 = (inst_28114[inst_28115] = inst_28118);var inst_28123__$1 = (inst_28115 + 1);var inst_28124 = (inst_28123__$1 < n);var state_28150__$1 = (function (){var statearr_28157 = state_28150;(statearr_28157[10] = inst_28123__$1);
(statearr_28157[11] = inst_28122);
return statearr_28157;
})();if(cljs.core.truth_(inst_28124))
{var statearr_28158_28184 = state_28150__$1;(statearr_28158_28184[1] = 8);
} else
{var statearr_28159_28185 = state_28150__$1;(statearr_28159_28185[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 6))
{var inst_28115 = (state_28150[7]);var inst_28136 = (inst_28115 > 0);var state_28150__$1 = state_28150;if(cljs.core.truth_(inst_28136))
{var statearr_28161_28186 = state_28150__$1;(statearr_28161_28186[1] = 12);
} else
{var statearr_28162_28187 = state_28150__$1;(statearr_28162_28187[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 7))
{var inst_28146 = (state_28150[2]);var state_28150__$1 = state_28150;var statearr_28163_28188 = state_28150__$1;(statearr_28163_28188[2] = inst_28146);
(statearr_28163_28188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 8))
{var inst_28123 = (state_28150[10]);var inst_28114 = (state_28150[8]);var tmp28160 = inst_28114;var inst_28114__$1 = tmp28160;var inst_28115 = inst_28123;var state_28150__$1 = (function (){var statearr_28164 = state_28150;(statearr_28164[7] = inst_28115);
(statearr_28164[8] = inst_28114__$1);
return statearr_28164;
})();var statearr_28165_28189 = state_28150__$1;(statearr_28165_28189[2] = null);
(statearr_28165_28189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 9))
{var inst_28114 = (state_28150[8]);var inst_28128 = cljs.core.vec.call(null,inst_28114);var state_28150__$1 = state_28150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,11,out,inst_28128);
} else
{if((state_val_28151 === 10))
{var inst_28134 = (state_28150[2]);var state_28150__$1 = state_28150;var statearr_28166_28190 = state_28150__$1;(statearr_28166_28190[2] = inst_28134);
(statearr_28166_28190[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 11))
{var inst_28130 = (state_28150[2]);var inst_28131 = (new Array(n));var inst_28114 = inst_28131;var inst_28115 = 0;var state_28150__$1 = (function (){var statearr_28167 = state_28150;(statearr_28167[12] = inst_28130);
(statearr_28167[7] = inst_28115);
(statearr_28167[8] = inst_28114);
return statearr_28167;
})();var statearr_28168_28191 = state_28150__$1;(statearr_28168_28191[2] = null);
(statearr_28168_28191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 12))
{var inst_28114 = (state_28150[8]);var inst_28138 = cljs.core.vec.call(null,inst_28114);var state_28150__$1 = state_28150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,15,out,inst_28138);
} else
{if((state_val_28151 === 13))
{var state_28150__$1 = state_28150;var statearr_28169_28192 = state_28150__$1;(statearr_28169_28192[2] = null);
(statearr_28169_28192[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 14))
{var inst_28143 = (state_28150[2]);var inst_28144 = cljs.core.async.close_BANG_.call(null,out);var state_28150__$1 = (function (){var statearr_28170 = state_28150;(statearr_28170[13] = inst_28143);
return statearr_28170;
})();var statearr_28171_28193 = state_28150__$1;(statearr_28171_28193[2] = inst_28144);
(statearr_28171_28193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28151 === 15))
{var inst_28140 = (state_28150[2]);var state_28150__$1 = state_28150;var statearr_28172_28194 = state_28150__$1;(statearr_28172_28194[2] = inst_28140);
(statearr_28172_28194[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_28176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28176[0] = state_machine__5507__auto__);
(statearr_28176[1] = 1);
return statearr_28176;
});
var state_machine__5507__auto____1 = (function (state_28150){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28150);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object))
{var ex__5510__auto__ = e28177;var statearr_28178_28195 = state_28150;(statearr_28178_28195[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28196 = state_28150;
state_28150 = G__28196;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28150){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28179 = f__5522__auto__.call(null);(statearr_28179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28180);
return statearr_28179;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___28339 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28309){var state_val_28310 = (state_28309[1]);if((state_val_28310 === 1))
{var inst_28268 = [];var inst_28269 = inst_28268;var inst_28270 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28309__$1 = (function (){var statearr_28311 = state_28309;(statearr_28311[7] = inst_28270);
(statearr_28311[8] = inst_28269);
return statearr_28311;
})();var statearr_28312_28340 = state_28309__$1;(statearr_28312_28340[2] = null);
(statearr_28312_28340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 2))
{var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,4,ch);
} else
{if((state_val_28310 === 3))
{var inst_28307 = (state_28309[2]);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28309__$1,inst_28307);
} else
{if((state_val_28310 === 4))
{var inst_28273 = (state_28309[9]);var inst_28273__$1 = (state_28309[2]);var inst_28274 = (inst_28273__$1 == null);var inst_28275 = cljs.core.not.call(null,inst_28274);var state_28309__$1 = (function (){var statearr_28313 = state_28309;(statearr_28313[9] = inst_28273__$1);
return statearr_28313;
})();if(inst_28275)
{var statearr_28314_28341 = state_28309__$1;(statearr_28314_28341[1] = 5);
} else
{var statearr_28315_28342 = state_28309__$1;(statearr_28315_28342[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 5))
{var inst_28270 = (state_28309[7]);var inst_28273 = (state_28309[9]);var inst_28277 = (state_28309[10]);var inst_28277__$1 = f.call(null,inst_28273);var inst_28278 = cljs.core._EQ_.call(null,inst_28277__$1,inst_28270);var inst_28279 = cljs.core.keyword_identical_QMARK_.call(null,inst_28270,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28280 = (inst_28278) || (inst_28279);var state_28309__$1 = (function (){var statearr_28316 = state_28309;(statearr_28316[10] = inst_28277__$1);
return statearr_28316;
})();if(cljs.core.truth_(inst_28280))
{var statearr_28317_28343 = state_28309__$1;(statearr_28317_28343[1] = 8);
} else
{var statearr_28318_28344 = state_28309__$1;(statearr_28318_28344[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 6))
{var inst_28269 = (state_28309[8]);var inst_28294 = inst_28269.length;var inst_28295 = (inst_28294 > 0);var state_28309__$1 = state_28309;if(cljs.core.truth_(inst_28295))
{var statearr_28320_28345 = state_28309__$1;(statearr_28320_28345[1] = 12);
} else
{var statearr_28321_28346 = state_28309__$1;(statearr_28321_28346[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 7))
{var inst_28305 = (state_28309[2]);var state_28309__$1 = state_28309;var statearr_28322_28347 = state_28309__$1;(statearr_28322_28347[2] = inst_28305);
(statearr_28322_28347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 8))
{var inst_28273 = (state_28309[9]);var inst_28269 = (state_28309[8]);var inst_28277 = (state_28309[10]);var inst_28282 = inst_28269.push(inst_28273);var tmp28319 = inst_28269;var inst_28269__$1 = tmp28319;var inst_28270 = inst_28277;var state_28309__$1 = (function (){var statearr_28323 = state_28309;(statearr_28323[7] = inst_28270);
(statearr_28323[8] = inst_28269__$1);
(statearr_28323[11] = inst_28282);
return statearr_28323;
})();var statearr_28324_28348 = state_28309__$1;(statearr_28324_28348[2] = null);
(statearr_28324_28348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 9))
{var inst_28269 = (state_28309[8]);var inst_28285 = cljs.core.vec.call(null,inst_28269);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,11,out,inst_28285);
} else
{if((state_val_28310 === 10))
{var inst_28292 = (state_28309[2]);var state_28309__$1 = state_28309;var statearr_28325_28349 = state_28309__$1;(statearr_28325_28349[2] = inst_28292);
(statearr_28325_28349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 11))
{var inst_28273 = (state_28309[9]);var inst_28277 = (state_28309[10]);var inst_28287 = (state_28309[2]);var inst_28288 = [];var inst_28289 = inst_28288.push(inst_28273);var inst_28269 = inst_28288;var inst_28270 = inst_28277;var state_28309__$1 = (function (){var statearr_28326 = state_28309;(statearr_28326[7] = inst_28270);
(statearr_28326[12] = inst_28289);
(statearr_28326[13] = inst_28287);
(statearr_28326[8] = inst_28269);
return statearr_28326;
})();var statearr_28327_28350 = state_28309__$1;(statearr_28327_28350[2] = null);
(statearr_28327_28350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 12))
{var inst_28269 = (state_28309[8]);var inst_28297 = cljs.core.vec.call(null,inst_28269);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,15,out,inst_28297);
} else
{if((state_val_28310 === 13))
{var state_28309__$1 = state_28309;var statearr_28328_28351 = state_28309__$1;(statearr_28328_28351[2] = null);
(statearr_28328_28351[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 14))
{var inst_28302 = (state_28309[2]);var inst_28303 = cljs.core.async.close_BANG_.call(null,out);var state_28309__$1 = (function (){var statearr_28329 = state_28309;(statearr_28329[14] = inst_28302);
return statearr_28329;
})();var statearr_28330_28352 = state_28309__$1;(statearr_28330_28352[2] = inst_28303);
(statearr_28330_28352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28310 === 15))
{var inst_28299 = (state_28309[2]);var state_28309__$1 = state_28309;var statearr_28331_28353 = state_28309__$1;(statearr_28331_28353[2] = inst_28299);
(statearr_28331_28353[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_28335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28335[0] = state_machine__5507__auto__);
(statearr_28335[1] = 1);
return statearr_28335;
});
var state_machine__5507__auto____1 = (function (state_28309){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28309);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28336){if((e28336 instanceof Object))
{var ex__5510__auto__ = e28336;var statearr_28337_28354 = state_28309;(statearr_28337_28354[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28355 = state_28309;
state_28309 = G__28355;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28309){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28338 = f__5522__auto__.call(null);(statearr_28338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28339);
return statearr_28338;
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
