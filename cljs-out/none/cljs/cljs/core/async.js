// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25034 = (function (f,fn_handler,meta25035){
this.f = f;
this.fn_handler = fn_handler;
this.meta25035 = meta25035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25034.cljs$lang$type = true;
cljs.core.async.t25034.cljs$lang$ctorStr = "cljs.core.async/t25034";
cljs.core.async.t25034.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25034");
});
cljs.core.async.t25034.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25036){var self__ = this;
var _25036__$1 = this;return self__.meta25035;
});
cljs.core.async.t25034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25036,meta25035__$1){var self__ = this;
var _25036__$1 = this;return (new cljs.core.async.t25034(self__.f,self__.fn_handler,meta25035__$1));
});
cljs.core.async.__GT_t25034 = (function __GT_t25034(f__$1,fn_handler__$1,meta25035){return (new cljs.core.async.t25034(f__$1,fn_handler__$1,meta25035));
});
}
return (new cljs.core.async.t25034(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25038 = buff;if(G__25038)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__25038.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25038.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25038);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25038);
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
{var val_25039 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25039);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25039);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___25040 = n;var x_25041 = 0;while(true){
if((x_25041 < n__4289__auto___25040))
{(a[x_25041] = 0);
{
var G__25042 = (x_25041 + 1);
x_25041 = G__25042;
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
var G__25043 = (i + 1);
i = G__25043;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25047 = (function (flag,alt_flag,meta25048){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25048 = meta25048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25047.cljs$lang$type = true;
cljs.core.async.t25047.cljs$lang$ctorStr = "cljs.core.async/t25047";
cljs.core.async.t25047.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25047");
});
cljs.core.async.t25047.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25049){var self__ = this;
var _25049__$1 = this;return self__.meta25048;
});
cljs.core.async.t25047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25049,meta25048__$1){var self__ = this;
var _25049__$1 = this;return (new cljs.core.async.t25047(self__.flag,self__.alt_flag,meta25048__$1));
});
cljs.core.async.__GT_t25047 = (function __GT_t25047(flag__$1,alt_flag__$1,meta25048){return (new cljs.core.async.t25047(flag__$1,alt_flag__$1,meta25048));
});
}
return (new cljs.core.async.t25047(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25053 = (function (cb,flag,alt_handler,meta25054){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25054 = meta25054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25053.cljs$lang$type = true;
cljs.core.async.t25053.cljs$lang$ctorStr = "cljs.core.async/t25053";
cljs.core.async.t25053.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25053");
});
cljs.core.async.t25053.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25055){var self__ = this;
var _25055__$1 = this;return self__.meta25054;
});
cljs.core.async.t25053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25055,meta25054__$1){var self__ = this;
var _25055__$1 = this;return (new cljs.core.async.t25053(self__.cb,self__.flag,self__.alt_handler,meta25054__$1));
});
cljs.core.async.__GT_t25053 = (function __GT_t25053(cb__$1,flag__$1,alt_handler__$1,meta25054){return (new cljs.core.async.t25053(cb__$1,flag__$1,alt_handler__$1,meta25054));
});
}
return (new cljs.core.async.t25053(cb,flag,alt_handler,null));
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
return (function (p1__25056_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25056_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25057 = (i + 1);
i = G__25057;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
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
var alts_BANG___delegate = function (ports,p__25058){var map__25060 = p__25058;var map__25060__$1 = ((cljs.core.seq_QMARK_.call(null,map__25060))?cljs.core.apply.call(null,cljs.core.hash_map,map__25060):map__25060);var opts = map__25060__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25058 = null;if (arguments.length > 1) {
  p__25058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25058);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25061){
var ports = cljs.core.first(arglist__25061);
var p__25058 = cljs.core.rest(arglist__25061);
return alts_BANG___delegate(ports,p__25058);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25069 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25069 = (function (ch,f,map_LT_,meta25070){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25070 = meta25070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25069.cljs$lang$type = true;
cljs.core.async.t25069.cljs$lang$ctorStr = "cljs.core.async/t25069";
cljs.core.async.t25069.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25069");
});
cljs.core.async.t25069.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25069.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25072 = (function (fn1,_,meta25070,ch,f,map_LT_,meta25073){
this.fn1 = fn1;
this._ = _;
this.meta25070 = meta25070;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25073 = meta25073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25072.cljs$lang$type = true;
cljs.core.async.t25072.cljs$lang$ctorStr = "cljs.core.async/t25072";
cljs.core.async.t25072.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25072");
});
cljs.core.async.t25072.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25072.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25062_SHARP_){return f1.call(null,(((p1__25062_SHARP_ == null))?null:self__.f.call(null,p1__25062_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25074){var self__ = this;
var _25074__$1 = this;return self__.meta25073;
});
cljs.core.async.t25072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25074,meta25073__$1){var self__ = this;
var _25074__$1 = this;return (new cljs.core.async.t25072(self__.fn1,self__._,self__.meta25070,self__.ch,self__.f,self__.map_LT_,meta25073__$1));
});
cljs.core.async.__GT_t25072 = (function __GT_t25072(fn1__$1,___$2,meta25070__$1,ch__$2,f__$2,map_LT___$2,meta25073){return (new cljs.core.async.t25072(fn1__$1,___$2,meta25070__$1,ch__$2,f__$2,map_LT___$2,meta25073));
});
}
return (new cljs.core.async.t25072(fn1,___$1,self__.meta25070,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25069.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25071){var self__ = this;
var _25071__$1 = this;return self__.meta25070;
});
cljs.core.async.t25069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25071,meta25070__$1){var self__ = this;
var _25071__$1 = this;return (new cljs.core.async.t25069(self__.ch,self__.f,self__.map_LT_,meta25070__$1));
});
cljs.core.async.__GT_t25069 = (function __GT_t25069(ch__$1,f__$1,map_LT___$1,meta25070){return (new cljs.core.async.t25069(ch__$1,f__$1,map_LT___$1,meta25070));
});
}
return (new cljs.core.async.t25069(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25078 = (function (ch,f,map_GT_,meta25079){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25079 = meta25079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25078.cljs$lang$type = true;
cljs.core.async.t25078.cljs$lang$ctorStr = "cljs.core.async/t25078";
cljs.core.async.t25078.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25078");
});
cljs.core.async.t25078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25078.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25080){var self__ = this;
var _25080__$1 = this;return self__.meta25079;
});
cljs.core.async.t25078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25080,meta25079__$1){var self__ = this;
var _25080__$1 = this;return (new cljs.core.async.t25078(self__.ch,self__.f,self__.map_GT_,meta25079__$1));
});
cljs.core.async.__GT_t25078 = (function __GT_t25078(ch__$1,f__$1,map_GT___$1,meta25079){return (new cljs.core.async.t25078(ch__$1,f__$1,map_GT___$1,meta25079));
});
}
return (new cljs.core.async.t25078(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25084 = (function (ch,p,filter_GT_,meta25085){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25085 = meta25085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25084.cljs$lang$type = true;
cljs.core.async.t25084.cljs$lang$ctorStr = "cljs.core.async/t25084";
cljs.core.async.t25084.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25084");
});
cljs.core.async.t25084.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25084.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25084.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25084.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25084.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25084.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25086){var self__ = this;
var _25086__$1 = this;return self__.meta25085;
});
cljs.core.async.t25084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25086,meta25085__$1){var self__ = this;
var _25086__$1 = this;return (new cljs.core.async.t25084(self__.ch,self__.p,self__.filter_GT_,meta25085__$1));
});
cljs.core.async.__GT_t25084 = (function __GT_t25084(ch__$1,p__$1,filter_GT___$1,meta25085){return (new cljs.core.async.t25084(ch__$1,p__$1,filter_GT___$1,meta25085));
});
}
return (new cljs.core.async.t25084(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___25169 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25148){var state_val_25149 = (state_25148[1]);if((state_val_25149 === 1))
{var state_25148__$1 = state_25148;var statearr_25150_25170 = state_25148__$1;(statearr_25150_25170[2] = null);
(statearr_25150_25170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25149 === 2))
{var state_25148__$1 = state_25148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,4,ch);
} else
{if((state_val_25149 === 3))
{var inst_25146 = (state_25148[2]);var state_25148__$1 = state_25148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25148__$1,inst_25146);
} else
{if((state_val_25149 === 4))
{var inst_25130 = (state_25148[7]);var inst_25130__$1 = (state_25148[2]);var inst_25131 = (inst_25130__$1 == null);var state_25148__$1 = (function (){var statearr_25151 = state_25148;(statearr_25151[7] = inst_25130__$1);
return statearr_25151;
})();if(cljs.core.truth_(inst_25131))
{var statearr_25152_25171 = state_25148__$1;(statearr_25152_25171[1] = 5);
} else
{var statearr_25153_25172 = state_25148__$1;(statearr_25153_25172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25149 === 5))
{var inst_25133 = cljs.core.async.close_BANG_.call(null,out);var state_25148__$1 = state_25148;var statearr_25154_25173 = state_25148__$1;(statearr_25154_25173[2] = inst_25133);
(statearr_25154_25173[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25149 === 6))
{var inst_25130 = (state_25148[7]);var inst_25135 = p.call(null,inst_25130);var state_25148__$1 = state_25148;if(cljs.core.truth_(inst_25135))
{var statearr_25155_25174 = state_25148__$1;(statearr_25155_25174[1] = 8);
} else
{var statearr_25156_25175 = state_25148__$1;(statearr_25156_25175[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25149 === 7))
{var inst_25144 = (state_25148[2]);var state_25148__$1 = state_25148;var statearr_25157_25176 = state_25148__$1;(statearr_25157_25176[2] = inst_25144);
(statearr_25157_25176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25149 === 8))
{var inst_25130 = (state_25148[7]);var state_25148__$1 = state_25148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25148__$1,11,out,inst_25130);
} else
{if((state_val_25149 === 9))
{var state_25148__$1 = state_25148;var statearr_25158_25177 = state_25148__$1;(statearr_25158_25177[2] = null);
(statearr_25158_25177[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25149 === 10))
{var inst_25141 = (state_25148[2]);var state_25148__$1 = (function (){var statearr_25159 = state_25148;(statearr_25159[8] = inst_25141);
return statearr_25159;
})();var statearr_25160_25178 = state_25148__$1;(statearr_25160_25178[2] = null);
(statearr_25160_25178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25149 === 11))
{var inst_25138 = (state_25148[2]);var state_25148__$1 = state_25148;var statearr_25161_25179 = state_25148__$1;(statearr_25161_25179[2] = inst_25138);
(statearr_25161_25179[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25165 = [null,null,null,null,null,null,null,null,null];(statearr_25165[0] = state_machine__5548__auto__);
(statearr_25165[1] = 1);
return statearr_25165;
});
var state_machine__5548__auto____1 = (function (state_25148){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25166){if((e25166 instanceof Object))
{var ex__5551__auto__ = e25166;var statearr_25167_25180 = state_25148;(statearr_25167_25180[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25181 = state_25148;
state_25148 = G__25181;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25148){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25168 = f__5563__auto__.call(null);(statearr_25168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25169);
return statearr_25168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25333){var state_val_25334 = (state_25333[1]);if((state_val_25334 === 1))
{var state_25333__$1 = state_25333;var statearr_25335_25372 = state_25333__$1;(statearr_25335_25372[2] = null);
(statearr_25335_25372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 2))
{var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,4,in$);
} else
{if((state_val_25334 === 3))
{var inst_25331 = (state_25333[2]);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else
{if((state_val_25334 === 4))
{var inst_25279 = (state_25333[7]);var inst_25279__$1 = (state_25333[2]);var inst_25280 = (inst_25279__$1 == null);var state_25333__$1 = (function (){var statearr_25336 = state_25333;(statearr_25336[7] = inst_25279__$1);
return statearr_25336;
})();if(cljs.core.truth_(inst_25280))
{var statearr_25337_25373 = state_25333__$1;(statearr_25337_25373[1] = 5);
} else
{var statearr_25338_25374 = state_25333__$1;(statearr_25338_25374[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 5))
{var inst_25282 = cljs.core.async.close_BANG_.call(null,out);var state_25333__$1 = state_25333;var statearr_25339_25375 = state_25333__$1;(statearr_25339_25375[2] = inst_25282);
(statearr_25339_25375[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 6))
{var inst_25279 = (state_25333[7]);var inst_25284 = f.call(null,inst_25279);var inst_25289 = cljs.core.seq.call(null,inst_25284);var inst_25290 = inst_25289;var inst_25291 = null;var inst_25292 = 0;var inst_25293 = 0;var state_25333__$1 = (function (){var statearr_25340 = state_25333;(statearr_25340[8] = inst_25293);
(statearr_25340[9] = inst_25290);
(statearr_25340[10] = inst_25291);
(statearr_25340[11] = inst_25292);
return statearr_25340;
})();var statearr_25341_25376 = state_25333__$1;(statearr_25341_25376[2] = null);
(statearr_25341_25376[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 7))
{var inst_25329 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25342_25377 = state_25333__$1;(statearr_25342_25377[2] = inst_25329);
(statearr_25342_25377[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 8))
{var inst_25293 = (state_25333[8]);var inst_25292 = (state_25333[11]);var inst_25295 = (inst_25293 < inst_25292);var inst_25296 = inst_25295;var state_25333__$1 = state_25333;if(cljs.core.truth_(inst_25296))
{var statearr_25343_25378 = state_25333__$1;(statearr_25343_25378[1] = 10);
} else
{var statearr_25344_25379 = state_25333__$1;(statearr_25344_25379[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 9))
{var inst_25326 = (state_25333[2]);var state_25333__$1 = (function (){var statearr_25345 = state_25333;(statearr_25345[12] = inst_25326);
return statearr_25345;
})();var statearr_25346_25380 = state_25333__$1;(statearr_25346_25380[2] = null);
(statearr_25346_25380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 10))
{var inst_25293 = (state_25333[8]);var inst_25291 = (state_25333[10]);var inst_25298 = cljs.core._nth.call(null,inst_25291,inst_25293);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,13,out,inst_25298);
} else
{if((state_val_25334 === 11))
{var inst_25304 = (state_25333[13]);var inst_25290 = (state_25333[9]);var inst_25304__$1 = cljs.core.seq.call(null,inst_25290);var state_25333__$1 = (function (){var statearr_25350 = state_25333;(statearr_25350[13] = inst_25304__$1);
return statearr_25350;
})();if(inst_25304__$1)
{var statearr_25351_25381 = state_25333__$1;(statearr_25351_25381[1] = 14);
} else
{var statearr_25352_25382 = state_25333__$1;(statearr_25352_25382[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 12))
{var inst_25324 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25353_25383 = state_25333__$1;(statearr_25353_25383[2] = inst_25324);
(statearr_25353_25383[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 13))
{var inst_25293 = (state_25333[8]);var inst_25290 = (state_25333[9]);var inst_25291 = (state_25333[10]);var inst_25292 = (state_25333[11]);var inst_25300 = (state_25333[2]);var inst_25301 = (inst_25293 + 1);var tmp25347 = inst_25290;var tmp25348 = inst_25291;var tmp25349 = inst_25292;var inst_25290__$1 = tmp25347;var inst_25291__$1 = tmp25348;var inst_25292__$1 = tmp25349;var inst_25293__$1 = inst_25301;var state_25333__$1 = (function (){var statearr_25354 = state_25333;(statearr_25354[8] = inst_25293__$1);
(statearr_25354[14] = inst_25300);
(statearr_25354[9] = inst_25290__$1);
(statearr_25354[10] = inst_25291__$1);
(statearr_25354[11] = inst_25292__$1);
return statearr_25354;
})();var statearr_25355_25384 = state_25333__$1;(statearr_25355_25384[2] = null);
(statearr_25355_25384[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 14))
{var inst_25304 = (state_25333[13]);var inst_25306 = cljs.core.chunked_seq_QMARK_.call(null,inst_25304);var state_25333__$1 = state_25333;if(inst_25306)
{var statearr_25356_25385 = state_25333__$1;(statearr_25356_25385[1] = 17);
} else
{var statearr_25357_25386 = state_25333__$1;(statearr_25357_25386[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 15))
{var state_25333__$1 = state_25333;var statearr_25358_25387 = state_25333__$1;(statearr_25358_25387[2] = null);
(statearr_25358_25387[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 16))
{var inst_25322 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25359_25388 = state_25333__$1;(statearr_25359_25388[2] = inst_25322);
(statearr_25359_25388[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 17))
{var inst_25304 = (state_25333[13]);var inst_25308 = cljs.core.chunk_first.call(null,inst_25304);var inst_25309 = cljs.core.chunk_rest.call(null,inst_25304);var inst_25310 = cljs.core.count.call(null,inst_25308);var inst_25290 = inst_25309;var inst_25291 = inst_25308;var inst_25292 = inst_25310;var inst_25293 = 0;var state_25333__$1 = (function (){var statearr_25360 = state_25333;(statearr_25360[8] = inst_25293);
(statearr_25360[9] = inst_25290);
(statearr_25360[10] = inst_25291);
(statearr_25360[11] = inst_25292);
return statearr_25360;
})();var statearr_25361_25389 = state_25333__$1;(statearr_25361_25389[2] = null);
(statearr_25361_25389[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 18))
{var inst_25304 = (state_25333[13]);var inst_25313 = cljs.core.first.call(null,inst_25304);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,20,out,inst_25313);
} else
{if((state_val_25334 === 19))
{var inst_25319 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25362_25390 = state_25333__$1;(statearr_25362_25390[2] = inst_25319);
(statearr_25362_25390[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 20))
{var inst_25304 = (state_25333[13]);var inst_25315 = (state_25333[2]);var inst_25316 = cljs.core.next.call(null,inst_25304);var inst_25290 = inst_25316;var inst_25291 = null;var inst_25292 = 0;var inst_25293 = 0;var state_25333__$1 = (function (){var statearr_25363 = state_25333;(statearr_25363[8] = inst_25293);
(statearr_25363[9] = inst_25290);
(statearr_25363[10] = inst_25291);
(statearr_25363[11] = inst_25292);
(statearr_25363[15] = inst_25315);
return statearr_25363;
})();var statearr_25364_25391 = state_25333__$1;(statearr_25364_25391[2] = null);
(statearr_25364_25391[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25368[0] = state_machine__5548__auto__);
(statearr_25368[1] = 1);
return statearr_25368;
});
var state_machine__5548__auto____1 = (function (state_25333){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25333);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25369){if((e25369 instanceof Object))
{var ex__5551__auto__ = e25369;var statearr_25370_25392 = state_25333;(statearr_25370_25392[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25393 = state_25333;
state_25333 = G__25393;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25371 = f__5563__auto__.call(null);(statearr_25371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___25474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25453){var state_val_25454 = (state_25453[1]);if((state_val_25454 === 1))
{var state_25453__$1 = state_25453;var statearr_25455_25475 = state_25453__$1;(statearr_25455_25475[2] = null);
(statearr_25455_25475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25454 === 2))
{var state_25453__$1 = state_25453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25453__$1,4,from);
} else
{if((state_val_25454 === 3))
{var inst_25451 = (state_25453[2]);var state_25453__$1 = state_25453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25453__$1,inst_25451);
} else
{if((state_val_25454 === 4))
{var inst_25436 = (state_25453[7]);var inst_25436__$1 = (state_25453[2]);var inst_25437 = (inst_25436__$1 == null);var state_25453__$1 = (function (){var statearr_25456 = state_25453;(statearr_25456[7] = inst_25436__$1);
return statearr_25456;
})();if(cljs.core.truth_(inst_25437))
{var statearr_25457_25476 = state_25453__$1;(statearr_25457_25476[1] = 5);
} else
{var statearr_25458_25477 = state_25453__$1;(statearr_25458_25477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25454 === 5))
{var state_25453__$1 = state_25453;if(cljs.core.truth_(close_QMARK_))
{var statearr_25459_25478 = state_25453__$1;(statearr_25459_25478[1] = 8);
} else
{var statearr_25460_25479 = state_25453__$1;(statearr_25460_25479[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25454 === 6))
{var inst_25436 = (state_25453[7]);var state_25453__$1 = state_25453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25453__$1,11,to,inst_25436);
} else
{if((state_val_25454 === 7))
{var inst_25449 = (state_25453[2]);var state_25453__$1 = state_25453;var statearr_25461_25480 = state_25453__$1;(statearr_25461_25480[2] = inst_25449);
(statearr_25461_25480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25454 === 8))
{var inst_25440 = cljs.core.async.close_BANG_.call(null,to);var state_25453__$1 = state_25453;var statearr_25462_25481 = state_25453__$1;(statearr_25462_25481[2] = inst_25440);
(statearr_25462_25481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25454 === 9))
{var state_25453__$1 = state_25453;var statearr_25463_25482 = state_25453__$1;(statearr_25463_25482[2] = null);
(statearr_25463_25482[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25454 === 10))
{var inst_25443 = (state_25453[2]);var state_25453__$1 = state_25453;var statearr_25464_25483 = state_25453__$1;(statearr_25464_25483[2] = inst_25443);
(statearr_25464_25483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25454 === 11))
{var inst_25446 = (state_25453[2]);var state_25453__$1 = (function (){var statearr_25465 = state_25453;(statearr_25465[8] = inst_25446);
return statearr_25465;
})();var statearr_25466_25484 = state_25453__$1;(statearr_25466_25484[2] = null);
(statearr_25466_25484[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25470 = [null,null,null,null,null,null,null,null,null];(statearr_25470[0] = state_machine__5548__auto__);
(statearr_25470[1] = 1);
return statearr_25470;
});
var state_machine__5548__auto____1 = (function (state_25453){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25471){if((e25471 instanceof Object))
{var ex__5551__auto__ = e25471;var statearr_25472_25485 = state_25453;(statearr_25472_25485[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25486 = state_25453;
state_25453 = G__25486;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25453){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25473 = f__5563__auto__.call(null);(statearr_25473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25474);
return statearr_25473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___25573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25551){var state_val_25552 = (state_25551[1]);if((state_val_25552 === 1))
{var state_25551__$1 = state_25551;var statearr_25553_25574 = state_25551__$1;(statearr_25553_25574[2] = null);
(statearr_25553_25574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 2))
{var state_25551__$1 = state_25551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25551__$1,4,ch);
} else
{if((state_val_25552 === 3))
{var inst_25549 = (state_25551[2]);var state_25551__$1 = state_25551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25551__$1,inst_25549);
} else
{if((state_val_25552 === 4))
{var inst_25532 = (state_25551[7]);var inst_25532__$1 = (state_25551[2]);var inst_25533 = (inst_25532__$1 == null);var state_25551__$1 = (function (){var statearr_25554 = state_25551;(statearr_25554[7] = inst_25532__$1);
return statearr_25554;
})();if(cljs.core.truth_(inst_25533))
{var statearr_25555_25575 = state_25551__$1;(statearr_25555_25575[1] = 5);
} else
{var statearr_25556_25576 = state_25551__$1;(statearr_25556_25576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 5))
{var inst_25535 = cljs.core.async.close_BANG_.call(null,tc);var inst_25536 = cljs.core.async.close_BANG_.call(null,fc);var state_25551__$1 = (function (){var statearr_25557 = state_25551;(statearr_25557[8] = inst_25535);
return statearr_25557;
})();var statearr_25558_25577 = state_25551__$1;(statearr_25558_25577[2] = inst_25536);
(statearr_25558_25577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 6))
{var inst_25532 = (state_25551[7]);var inst_25538 = p.call(null,inst_25532);var state_25551__$1 = state_25551;if(cljs.core.truth_(inst_25538))
{var statearr_25559_25578 = state_25551__$1;(statearr_25559_25578[1] = 9);
} else
{var statearr_25560_25579 = state_25551__$1;(statearr_25560_25579[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 7))
{var inst_25547 = (state_25551[2]);var state_25551__$1 = state_25551;var statearr_25561_25580 = state_25551__$1;(statearr_25561_25580[2] = inst_25547);
(statearr_25561_25580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 8))
{var inst_25544 = (state_25551[2]);var state_25551__$1 = (function (){var statearr_25562 = state_25551;(statearr_25562[9] = inst_25544);
return statearr_25562;
})();var statearr_25563_25581 = state_25551__$1;(statearr_25563_25581[2] = null);
(statearr_25563_25581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 9))
{var state_25551__$1 = state_25551;var statearr_25564_25582 = state_25551__$1;(statearr_25564_25582[2] = tc);
(statearr_25564_25582[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 10))
{var state_25551__$1 = state_25551;var statearr_25565_25583 = state_25551__$1;(statearr_25565_25583[2] = fc);
(statearr_25565_25583[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25552 === 11))
{var inst_25532 = (state_25551[7]);var inst_25542 = (state_25551[2]);var state_25551__$1 = state_25551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25551__$1,8,inst_25542,inst_25532);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25569 = [null,null,null,null,null,null,null,null,null,null];(statearr_25569[0] = state_machine__5548__auto__);
(statearr_25569[1] = 1);
return statearr_25569;
});
var state_machine__5548__auto____1 = (function (state_25551){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25551);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25570){if((e25570 instanceof Object))
{var ex__5551__auto__ = e25570;var statearr_25571_25584 = state_25551;(statearr_25571_25584[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25585 = state_25551;
state_25551 = G__25585;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25551){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25572 = f__5563__auto__.call(null);(statearr_25572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25573);
return statearr_25572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25632){var state_val_25633 = (state_25632[1]);if((state_val_25633 === 7))
{var inst_25628 = (state_25632[2]);var state_25632__$1 = state_25632;var statearr_25634_25650 = state_25632__$1;(statearr_25634_25650[2] = inst_25628);
(statearr_25634_25650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25633 === 6))
{var inst_25621 = (state_25632[7]);var inst_25618 = (state_25632[8]);var inst_25625 = f.call(null,inst_25618,inst_25621);var inst_25618__$1 = inst_25625;var state_25632__$1 = (function (){var statearr_25635 = state_25632;(statearr_25635[8] = inst_25618__$1);
return statearr_25635;
})();var statearr_25636_25651 = state_25632__$1;(statearr_25636_25651[2] = null);
(statearr_25636_25651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25633 === 5))
{var inst_25618 = (state_25632[8]);var state_25632__$1 = state_25632;var statearr_25637_25652 = state_25632__$1;(statearr_25637_25652[2] = inst_25618);
(statearr_25637_25652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25633 === 4))
{var inst_25621 = (state_25632[7]);var inst_25621__$1 = (state_25632[2]);var inst_25622 = (inst_25621__$1 == null);var state_25632__$1 = (function (){var statearr_25638 = state_25632;(statearr_25638[7] = inst_25621__$1);
return statearr_25638;
})();if(cljs.core.truth_(inst_25622))
{var statearr_25639_25653 = state_25632__$1;(statearr_25639_25653[1] = 5);
} else
{var statearr_25640_25654 = state_25632__$1;(statearr_25640_25654[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25633 === 3))
{var inst_25630 = (state_25632[2]);var state_25632__$1 = state_25632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25632__$1,inst_25630);
} else
{if((state_val_25633 === 2))
{var state_25632__$1 = state_25632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25632__$1,4,ch);
} else
{if((state_val_25633 === 1))
{var inst_25618 = init;var state_25632__$1 = (function (){var statearr_25641 = state_25632;(statearr_25641[8] = inst_25618);
return statearr_25641;
})();var statearr_25642_25655 = state_25632__$1;(statearr_25642_25655[2] = null);
(statearr_25642_25655[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25646 = [null,null,null,null,null,null,null,null,null];(statearr_25646[0] = state_machine__5548__auto__);
(statearr_25646[1] = 1);
return statearr_25646;
});
var state_machine__5548__auto____1 = (function (state_25632){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25632);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25647){if((e25647 instanceof Object))
{var ex__5551__auto__ = e25647;var statearr_25648_25656 = state_25632;(statearr_25648_25656[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25632);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25657 = state_25632;
state_25632 = G__25657;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25632){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25649 = f__5563__auto__.call(null);(statearr_25649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25719){var state_val_25720 = (state_25719[1]);if((state_val_25720 === 1))
{var inst_25699 = cljs.core.seq.call(null,coll);var inst_25700 = inst_25699;var state_25719__$1 = (function (){var statearr_25721 = state_25719;(statearr_25721[7] = inst_25700);
return statearr_25721;
})();var statearr_25722_25740 = state_25719__$1;(statearr_25722_25740[2] = null);
(statearr_25722_25740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25720 === 2))
{var inst_25700 = (state_25719[7]);var state_25719__$1 = state_25719;if(cljs.core.truth_(inst_25700))
{var statearr_25723_25741 = state_25719__$1;(statearr_25723_25741[1] = 4);
} else
{var statearr_25724_25742 = state_25719__$1;(statearr_25724_25742[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25720 === 3))
{var inst_25717 = (state_25719[2]);var state_25719__$1 = state_25719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25719__$1,inst_25717);
} else
{if((state_val_25720 === 4))
{var inst_25700 = (state_25719[7]);var inst_25703 = cljs.core.first.call(null,inst_25700);var state_25719__$1 = state_25719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25719__$1,7,ch,inst_25703);
} else
{if((state_val_25720 === 5))
{var state_25719__$1 = state_25719;if(cljs.core.truth_(close_QMARK_))
{var statearr_25725_25743 = state_25719__$1;(statearr_25725_25743[1] = 8);
} else
{var statearr_25726_25744 = state_25719__$1;(statearr_25726_25744[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25720 === 6))
{var inst_25715 = (state_25719[2]);var state_25719__$1 = state_25719;var statearr_25727_25745 = state_25719__$1;(statearr_25727_25745[2] = inst_25715);
(statearr_25727_25745[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25720 === 7))
{var inst_25700 = (state_25719[7]);var inst_25705 = (state_25719[2]);var inst_25706 = cljs.core.next.call(null,inst_25700);var inst_25700__$1 = inst_25706;var state_25719__$1 = (function (){var statearr_25728 = state_25719;(statearr_25728[8] = inst_25705);
(statearr_25728[7] = inst_25700__$1);
return statearr_25728;
})();var statearr_25729_25746 = state_25719__$1;(statearr_25729_25746[2] = null);
(statearr_25729_25746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25720 === 8))
{var inst_25710 = cljs.core.async.close_BANG_.call(null,ch);var state_25719__$1 = state_25719;var statearr_25730_25747 = state_25719__$1;(statearr_25730_25747[2] = inst_25710);
(statearr_25730_25747[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25720 === 9))
{var state_25719__$1 = state_25719;var statearr_25731_25748 = state_25719__$1;(statearr_25731_25748[2] = null);
(statearr_25731_25748[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25720 === 10))
{var inst_25713 = (state_25719[2]);var state_25719__$1 = state_25719;var statearr_25732_25749 = state_25719__$1;(statearr_25732_25749[2] = inst_25713);
(statearr_25732_25749[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25736 = [null,null,null,null,null,null,null,null,null];(statearr_25736[0] = state_machine__5548__auto__);
(statearr_25736[1] = 1);
return statearr_25736;
});
var state_machine__5548__auto____1 = (function (state_25719){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25719);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25737){if((e25737 instanceof Object))
{var ex__5551__auto__ = e25737;var statearr_25738_25750 = state_25719;(statearr_25738_25750[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25719);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25751 = state_25719;
state_25719 = G__25751;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25719){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25739 = f__5563__auto__.call(null);(statearr_25739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj25753 = {};return obj25753;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25755 = {};return obj25755;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25979 = (function (cs,ch,mult,meta25980){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25980 = meta25980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25979.cljs$lang$type = true;
cljs.core.async.t25979.cljs$lang$ctorStr = "cljs.core.async/t25979";
cljs.core.async.t25979.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25979");
});})(cs))
;
cljs.core.async.t25979.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25979.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25979.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25979.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25979.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25981){var self__ = this;
var _25981__$1 = this;return self__.meta25980;
});})(cs))
;
cljs.core.async.t25979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25981,meta25980__$1){var self__ = this;
var _25981__$1 = this;return (new cljs.core.async.t25979(self__.cs,self__.ch,self__.mult,meta25980__$1));
});})(cs))
;
cljs.core.async.__GT_t25979 = ((function (cs){
return (function __GT_t25979(cs__$1,ch__$1,mult__$1,meta25980){return (new cljs.core.async.t25979(cs__$1,ch__$1,mult__$1,meta25980));
});})(cs))
;
}
return (new cljs.core.async.t25979(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___26202 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26116){var state_val_26117 = (state_26116[1]);if((state_val_26117 === 32))
{var inst_25984 = (state_26116[7]);var inst_26060 = (state_26116[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26116,31,Object,null,30);var inst_26067 = cljs.core.async.put_BANG_.call(null,inst_26060,inst_25984,done);var state_26116__$1 = state_26116;var statearr_26118_26203 = state_26116__$1;(statearr_26118_26203[2] = inst_26067);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26116__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 1))
{var state_26116__$1 = state_26116;var statearr_26119_26204 = state_26116__$1;(statearr_26119_26204[2] = null);
(statearr_26119_26204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 33))
{var inst_26073 = (state_26116[9]);var inst_26075 = cljs.core.chunked_seq_QMARK_.call(null,inst_26073);var state_26116__$1 = state_26116;if(inst_26075)
{var statearr_26120_26205 = state_26116__$1;(statearr_26120_26205[1] = 36);
} else
{var statearr_26121_26206 = state_26116__$1;(statearr_26121_26206[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 2))
{var state_26116__$1 = state_26116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26116__$1,4,ch);
} else
{if((state_val_26117 === 34))
{var state_26116__$1 = state_26116;var statearr_26122_26207 = state_26116__$1;(statearr_26122_26207[2] = null);
(statearr_26122_26207[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 3))
{var inst_26114 = (state_26116[2]);var state_26116__$1 = state_26116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26116__$1,inst_26114);
} else
{if((state_val_26117 === 35))
{var inst_26098 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26123_26208 = state_26116__$1;(statearr_26123_26208[2] = inst_26098);
(statearr_26123_26208[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 4))
{var inst_25984 = (state_26116[7]);var inst_25984__$1 = (state_26116[2]);var inst_25985 = (inst_25984__$1 == null);var state_26116__$1 = (function (){var statearr_26124 = state_26116;(statearr_26124[7] = inst_25984__$1);
return statearr_26124;
})();if(cljs.core.truth_(inst_25985))
{var statearr_26125_26209 = state_26116__$1;(statearr_26125_26209[1] = 5);
} else
{var statearr_26126_26210 = state_26116__$1;(statearr_26126_26210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 36))
{var inst_26073 = (state_26116[9]);var inst_26077 = cljs.core.chunk_first.call(null,inst_26073);var inst_26078 = cljs.core.chunk_rest.call(null,inst_26073);var inst_26079 = cljs.core.count.call(null,inst_26077);var inst_26052 = inst_26078;var inst_26053 = inst_26077;var inst_26054 = inst_26079;var inst_26055 = 0;var state_26116__$1 = (function (){var statearr_26127 = state_26116;(statearr_26127[10] = inst_26053);
(statearr_26127[11] = inst_26052);
(statearr_26127[12] = inst_26055);
(statearr_26127[13] = inst_26054);
return statearr_26127;
})();var statearr_26128_26211 = state_26116__$1;(statearr_26128_26211[2] = null);
(statearr_26128_26211[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 5))
{var inst_25991 = cljs.core.deref.call(null,cs);var inst_25992 = cljs.core.seq.call(null,inst_25991);var inst_25993 = inst_25992;var inst_25994 = null;var inst_25995 = 0;var inst_25996 = 0;var state_26116__$1 = (function (){var statearr_26129 = state_26116;(statearr_26129[14] = inst_25993);
(statearr_26129[15] = inst_25996);
(statearr_26129[16] = inst_25995);
(statearr_26129[17] = inst_25994);
return statearr_26129;
})();var statearr_26130_26212 = state_26116__$1;(statearr_26130_26212[2] = null);
(statearr_26130_26212[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 37))
{var inst_26073 = (state_26116[9]);var inst_26082 = cljs.core.first.call(null,inst_26073);var state_26116__$1 = (function (){var statearr_26131 = state_26116;(statearr_26131[18] = inst_26082);
return statearr_26131;
})();var statearr_26132_26213 = state_26116__$1;(statearr_26132_26213[2] = null);
(statearr_26132_26213[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 6))
{var inst_26044 = (state_26116[19]);var inst_26043 = cljs.core.deref.call(null,cs);var inst_26044__$1 = cljs.core.keys.call(null,inst_26043);var inst_26045 = cljs.core.count.call(null,inst_26044__$1);var inst_26046 = cljs.core.reset_BANG_.call(null,dctr,inst_26045);var inst_26051 = cljs.core.seq.call(null,inst_26044__$1);var inst_26052 = inst_26051;var inst_26053 = null;var inst_26054 = 0;var inst_26055 = 0;var state_26116__$1 = (function (){var statearr_26133 = state_26116;(statearr_26133[20] = inst_26046);
(statearr_26133[19] = inst_26044__$1);
(statearr_26133[10] = inst_26053);
(statearr_26133[11] = inst_26052);
(statearr_26133[12] = inst_26055);
(statearr_26133[13] = inst_26054);
return statearr_26133;
})();var statearr_26134_26214 = state_26116__$1;(statearr_26134_26214[2] = null);
(statearr_26134_26214[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 38))
{var inst_26095 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26135_26215 = state_26116__$1;(statearr_26135_26215[2] = inst_26095);
(statearr_26135_26215[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 7))
{var inst_26112 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26136_26216 = state_26116__$1;(statearr_26136_26216[2] = inst_26112);
(statearr_26136_26216[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 39))
{var inst_26073 = (state_26116[9]);var inst_26091 = (state_26116[2]);var inst_26092 = cljs.core.next.call(null,inst_26073);var inst_26052 = inst_26092;var inst_26053 = null;var inst_26054 = 0;var inst_26055 = 0;var state_26116__$1 = (function (){var statearr_26137 = state_26116;(statearr_26137[21] = inst_26091);
(statearr_26137[10] = inst_26053);
(statearr_26137[11] = inst_26052);
(statearr_26137[12] = inst_26055);
(statearr_26137[13] = inst_26054);
return statearr_26137;
})();var statearr_26138_26217 = state_26116__$1;(statearr_26138_26217[2] = null);
(statearr_26138_26217[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 8))
{var inst_25996 = (state_26116[15]);var inst_25995 = (state_26116[16]);var inst_25998 = (inst_25996 < inst_25995);var inst_25999 = inst_25998;var state_26116__$1 = state_26116;if(cljs.core.truth_(inst_25999))
{var statearr_26139_26218 = state_26116__$1;(statearr_26139_26218[1] = 10);
} else
{var statearr_26140_26219 = state_26116__$1;(statearr_26140_26219[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 40))
{var inst_26082 = (state_26116[18]);var inst_26083 = (state_26116[2]);var inst_26084 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26085 = cljs.core.async.untap_STAR_.call(null,m,inst_26082);var state_26116__$1 = (function (){var statearr_26141 = state_26116;(statearr_26141[22] = inst_26083);
(statearr_26141[23] = inst_26084);
return statearr_26141;
})();var statearr_26142_26220 = state_26116__$1;(statearr_26142_26220[2] = inst_26085);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26116__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 9))
{var inst_26041 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26143_26221 = state_26116__$1;(statearr_26143_26221[2] = inst_26041);
(statearr_26143_26221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 41))
{var inst_25984 = (state_26116[7]);var inst_26082 = (state_26116[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26116,40,Object,null,39);var inst_26089 = cljs.core.async.put_BANG_.call(null,inst_26082,inst_25984,done);var state_26116__$1 = state_26116;var statearr_26144_26222 = state_26116__$1;(statearr_26144_26222[2] = inst_26089);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26116__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 10))
{var inst_25996 = (state_26116[15]);var inst_25994 = (state_26116[17]);var inst_26002 = cljs.core._nth.call(null,inst_25994,inst_25996);var inst_26003 = cljs.core.nth.call(null,inst_26002,0,null);var inst_26004 = cljs.core.nth.call(null,inst_26002,1,null);var state_26116__$1 = (function (){var statearr_26145 = state_26116;(statearr_26145[24] = inst_26003);
return statearr_26145;
})();if(cljs.core.truth_(inst_26004))
{var statearr_26146_26223 = state_26116__$1;(statearr_26146_26223[1] = 13);
} else
{var statearr_26147_26224 = state_26116__$1;(statearr_26147_26224[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 42))
{var state_26116__$1 = state_26116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26116__$1,45,dchan);
} else
{if((state_val_26117 === 11))
{var inst_25993 = (state_26116[14]);var inst_26013 = (state_26116[25]);var inst_26013__$1 = cljs.core.seq.call(null,inst_25993);var state_26116__$1 = (function (){var statearr_26148 = state_26116;(statearr_26148[25] = inst_26013__$1);
return statearr_26148;
})();if(inst_26013__$1)
{var statearr_26149_26225 = state_26116__$1;(statearr_26149_26225[1] = 16);
} else
{var statearr_26150_26226 = state_26116__$1;(statearr_26150_26226[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 43))
{var state_26116__$1 = state_26116;var statearr_26151_26227 = state_26116__$1;(statearr_26151_26227[2] = null);
(statearr_26151_26227[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 12))
{var inst_26039 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26152_26228 = state_26116__$1;(statearr_26152_26228[2] = inst_26039);
(statearr_26152_26228[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 44))
{var inst_26109 = (state_26116[2]);var state_26116__$1 = (function (){var statearr_26153 = state_26116;(statearr_26153[26] = inst_26109);
return statearr_26153;
})();var statearr_26154_26229 = state_26116__$1;(statearr_26154_26229[2] = null);
(statearr_26154_26229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 13))
{var inst_26003 = (state_26116[24]);var inst_26006 = cljs.core.async.close_BANG_.call(null,inst_26003);var state_26116__$1 = state_26116;var statearr_26155_26230 = state_26116__$1;(statearr_26155_26230[2] = inst_26006);
(statearr_26155_26230[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 45))
{var inst_26106 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26159_26231 = state_26116__$1;(statearr_26159_26231[2] = inst_26106);
(statearr_26159_26231[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 14))
{var state_26116__$1 = state_26116;var statearr_26160_26232 = state_26116__$1;(statearr_26160_26232[2] = null);
(statearr_26160_26232[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 15))
{var inst_25993 = (state_26116[14]);var inst_25996 = (state_26116[15]);var inst_25995 = (state_26116[16]);var inst_25994 = (state_26116[17]);var inst_26009 = (state_26116[2]);var inst_26010 = (inst_25996 + 1);var tmp26156 = inst_25993;var tmp26157 = inst_25995;var tmp26158 = inst_25994;var inst_25993__$1 = tmp26156;var inst_25994__$1 = tmp26158;var inst_25995__$1 = tmp26157;var inst_25996__$1 = inst_26010;var state_26116__$1 = (function (){var statearr_26161 = state_26116;(statearr_26161[14] = inst_25993__$1);
(statearr_26161[27] = inst_26009);
(statearr_26161[15] = inst_25996__$1);
(statearr_26161[16] = inst_25995__$1);
(statearr_26161[17] = inst_25994__$1);
return statearr_26161;
})();var statearr_26162_26233 = state_26116__$1;(statearr_26162_26233[2] = null);
(statearr_26162_26233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 16))
{var inst_26013 = (state_26116[25]);var inst_26015 = cljs.core.chunked_seq_QMARK_.call(null,inst_26013);var state_26116__$1 = state_26116;if(inst_26015)
{var statearr_26163_26234 = state_26116__$1;(statearr_26163_26234[1] = 19);
} else
{var statearr_26164_26235 = state_26116__$1;(statearr_26164_26235[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 17))
{var state_26116__$1 = state_26116;var statearr_26165_26236 = state_26116__$1;(statearr_26165_26236[2] = null);
(statearr_26165_26236[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 18))
{var inst_26037 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26166_26237 = state_26116__$1;(statearr_26166_26237[2] = inst_26037);
(statearr_26166_26237[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 19))
{var inst_26013 = (state_26116[25]);var inst_26017 = cljs.core.chunk_first.call(null,inst_26013);var inst_26018 = cljs.core.chunk_rest.call(null,inst_26013);var inst_26019 = cljs.core.count.call(null,inst_26017);var inst_25993 = inst_26018;var inst_25994 = inst_26017;var inst_25995 = inst_26019;var inst_25996 = 0;var state_26116__$1 = (function (){var statearr_26167 = state_26116;(statearr_26167[14] = inst_25993);
(statearr_26167[15] = inst_25996);
(statearr_26167[16] = inst_25995);
(statearr_26167[17] = inst_25994);
return statearr_26167;
})();var statearr_26168_26238 = state_26116__$1;(statearr_26168_26238[2] = null);
(statearr_26168_26238[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 20))
{var inst_26013 = (state_26116[25]);var inst_26023 = cljs.core.first.call(null,inst_26013);var inst_26024 = cljs.core.nth.call(null,inst_26023,0,null);var inst_26025 = cljs.core.nth.call(null,inst_26023,1,null);var state_26116__$1 = (function (){var statearr_26169 = state_26116;(statearr_26169[28] = inst_26024);
return statearr_26169;
})();if(cljs.core.truth_(inst_26025))
{var statearr_26170_26239 = state_26116__$1;(statearr_26170_26239[1] = 22);
} else
{var statearr_26171_26240 = state_26116__$1;(statearr_26171_26240[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 21))
{var inst_26034 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26172_26241 = state_26116__$1;(statearr_26172_26241[2] = inst_26034);
(statearr_26172_26241[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 22))
{var inst_26024 = (state_26116[28]);var inst_26027 = cljs.core.async.close_BANG_.call(null,inst_26024);var state_26116__$1 = state_26116;var statearr_26173_26242 = state_26116__$1;(statearr_26173_26242[2] = inst_26027);
(statearr_26173_26242[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 23))
{var state_26116__$1 = state_26116;var statearr_26174_26243 = state_26116__$1;(statearr_26174_26243[2] = null);
(statearr_26174_26243[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 24))
{var inst_26013 = (state_26116[25]);var inst_26030 = (state_26116[2]);var inst_26031 = cljs.core.next.call(null,inst_26013);var inst_25993 = inst_26031;var inst_25994 = null;var inst_25995 = 0;var inst_25996 = 0;var state_26116__$1 = (function (){var statearr_26175 = state_26116;(statearr_26175[29] = inst_26030);
(statearr_26175[14] = inst_25993);
(statearr_26175[15] = inst_25996);
(statearr_26175[16] = inst_25995);
(statearr_26175[17] = inst_25994);
return statearr_26175;
})();var statearr_26176_26244 = state_26116__$1;(statearr_26176_26244[2] = null);
(statearr_26176_26244[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 25))
{var inst_26055 = (state_26116[12]);var inst_26054 = (state_26116[13]);var inst_26057 = (inst_26055 < inst_26054);var inst_26058 = inst_26057;var state_26116__$1 = state_26116;if(cljs.core.truth_(inst_26058))
{var statearr_26177_26245 = state_26116__$1;(statearr_26177_26245[1] = 27);
} else
{var statearr_26178_26246 = state_26116__$1;(statearr_26178_26246[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 26))
{var inst_26044 = (state_26116[19]);var inst_26102 = (state_26116[2]);var inst_26103 = cljs.core.seq.call(null,inst_26044);var state_26116__$1 = (function (){var statearr_26179 = state_26116;(statearr_26179[30] = inst_26102);
return statearr_26179;
})();if(inst_26103)
{var statearr_26180_26247 = state_26116__$1;(statearr_26180_26247[1] = 42);
} else
{var statearr_26181_26248 = state_26116__$1;(statearr_26181_26248[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 27))
{var inst_26053 = (state_26116[10]);var inst_26055 = (state_26116[12]);var inst_26060 = cljs.core._nth.call(null,inst_26053,inst_26055);var state_26116__$1 = (function (){var statearr_26182 = state_26116;(statearr_26182[8] = inst_26060);
return statearr_26182;
})();var statearr_26183_26249 = state_26116__$1;(statearr_26183_26249[2] = null);
(statearr_26183_26249[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 28))
{var inst_26073 = (state_26116[9]);var inst_26052 = (state_26116[11]);var inst_26073__$1 = cljs.core.seq.call(null,inst_26052);var state_26116__$1 = (function (){var statearr_26187 = state_26116;(statearr_26187[9] = inst_26073__$1);
return statearr_26187;
})();if(inst_26073__$1)
{var statearr_26188_26250 = state_26116__$1;(statearr_26188_26250[1] = 33);
} else
{var statearr_26189_26251 = state_26116__$1;(statearr_26189_26251[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 29))
{var inst_26100 = (state_26116[2]);var state_26116__$1 = state_26116;var statearr_26190_26252 = state_26116__$1;(statearr_26190_26252[2] = inst_26100);
(statearr_26190_26252[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 30))
{var inst_26053 = (state_26116[10]);var inst_26052 = (state_26116[11]);var inst_26055 = (state_26116[12]);var inst_26054 = (state_26116[13]);var inst_26069 = (state_26116[2]);var inst_26070 = (inst_26055 + 1);var tmp26184 = inst_26053;var tmp26185 = inst_26052;var tmp26186 = inst_26054;var inst_26052__$1 = tmp26185;var inst_26053__$1 = tmp26184;var inst_26054__$1 = tmp26186;var inst_26055__$1 = inst_26070;var state_26116__$1 = (function (){var statearr_26191 = state_26116;(statearr_26191[31] = inst_26069);
(statearr_26191[10] = inst_26053__$1);
(statearr_26191[11] = inst_26052__$1);
(statearr_26191[12] = inst_26055__$1);
(statearr_26191[13] = inst_26054__$1);
return statearr_26191;
})();var statearr_26192_26253 = state_26116__$1;(statearr_26192_26253[2] = null);
(statearr_26192_26253[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26117 === 31))
{var inst_26060 = (state_26116[8]);var inst_26061 = (state_26116[2]);var inst_26062 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26063 = cljs.core.async.untap_STAR_.call(null,m,inst_26060);var state_26116__$1 = (function (){var statearr_26193 = state_26116;(statearr_26193[32] = inst_26061);
(statearr_26193[33] = inst_26062);
return statearr_26193;
})();var statearr_26194_26254 = state_26116__$1;(statearr_26194_26254[2] = inst_26063);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26116__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26198[0] = state_machine__5548__auto__);
(statearr_26198[1] = 1);
return statearr_26198;
});
var state_machine__5548__auto____1 = (function (state_26116){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26116);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26199){if((e26199 instanceof Object))
{var ex__5551__auto__ = e26199;var statearr_26200_26255 = state_26116;(statearr_26200_26255[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26116);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26256 = state_26116;
state_26116 = G__26256;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26116){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26201 = f__5563__auto__.call(null);(statearr_26201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26202);
return statearr_26201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj26258 = {};return obj26258;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t26368 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26368 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26369){
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
this.meta26369 = meta26369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26368.cljs$lang$type = true;
cljs.core.async.t26368.cljs$lang$ctorStr = "cljs.core.async/t26368";
cljs.core.async.t26368.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26368");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26368.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26368.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26370){var self__ = this;
var _26370__$1 = this;return self__.meta26369;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26370,meta26369__$1){var self__ = this;
var _26370__$1 = this;return (new cljs.core.async.t26368(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26369__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26368 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26368(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26369){return (new cljs.core.async.t26368(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26369));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26368(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___26477 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26435){var state_val_26436 = (state_26435[1]);if((state_val_26436 === 1))
{var inst_26374 = (state_26435[7]);var inst_26374__$1 = calc_state.call(null);var inst_26375 = cljs.core.seq_QMARK_.call(null,inst_26374__$1);var state_26435__$1 = (function (){var statearr_26437 = state_26435;(statearr_26437[7] = inst_26374__$1);
return statearr_26437;
})();if(inst_26375)
{var statearr_26438_26478 = state_26435__$1;(statearr_26438_26478[1] = 2);
} else
{var statearr_26439_26479 = state_26435__$1;(statearr_26439_26479[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 2))
{var inst_26374 = (state_26435[7]);var inst_26377 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26374);var state_26435__$1 = state_26435;var statearr_26440_26480 = state_26435__$1;(statearr_26440_26480[2] = inst_26377);
(statearr_26440_26480[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 3))
{var inst_26374 = (state_26435[7]);var state_26435__$1 = state_26435;var statearr_26441_26481 = state_26435__$1;(statearr_26441_26481[2] = inst_26374);
(statearr_26441_26481[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 4))
{var inst_26374 = (state_26435[7]);var inst_26380 = (state_26435[2]);var inst_26381 = cljs.core.get.call(null,inst_26380,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26382 = cljs.core.get.call(null,inst_26380,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26383 = cljs.core.get.call(null,inst_26380,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26384 = inst_26374;var state_26435__$1 = (function (){var statearr_26442 = state_26435;(statearr_26442[8] = inst_26383);
(statearr_26442[9] = inst_26382);
(statearr_26442[10] = inst_26384);
(statearr_26442[11] = inst_26381);
return statearr_26442;
})();var statearr_26443_26482 = state_26435__$1;(statearr_26443_26482[2] = null);
(statearr_26443_26482[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 5))
{var inst_26384 = (state_26435[10]);var inst_26387 = cljs.core.seq_QMARK_.call(null,inst_26384);var state_26435__$1 = state_26435;if(inst_26387)
{var statearr_26444_26483 = state_26435__$1;(statearr_26444_26483[1] = 7);
} else
{var statearr_26445_26484 = state_26435__$1;(statearr_26445_26484[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 6))
{var inst_26433 = (state_26435[2]);var state_26435__$1 = state_26435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26435__$1,inst_26433);
} else
{if((state_val_26436 === 7))
{var inst_26384 = (state_26435[10]);var inst_26389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26384);var state_26435__$1 = state_26435;var statearr_26446_26485 = state_26435__$1;(statearr_26446_26485[2] = inst_26389);
(statearr_26446_26485[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 8))
{var inst_26384 = (state_26435[10]);var state_26435__$1 = state_26435;var statearr_26447_26486 = state_26435__$1;(statearr_26447_26486[2] = inst_26384);
(statearr_26447_26486[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 9))
{var inst_26392 = (state_26435[12]);var inst_26392__$1 = (state_26435[2]);var inst_26393 = cljs.core.get.call(null,inst_26392__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26394 = cljs.core.get.call(null,inst_26392__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26395 = cljs.core.get.call(null,inst_26392__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26435__$1 = (function (){var statearr_26448 = state_26435;(statearr_26448[13] = inst_26394);
(statearr_26448[14] = inst_26395);
(statearr_26448[12] = inst_26392__$1);
return statearr_26448;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26435__$1,10,inst_26393);
} else
{if((state_val_26436 === 10))
{var inst_26399 = (state_26435[15]);var inst_26400 = (state_26435[16]);var inst_26398 = (state_26435[2]);var inst_26399__$1 = cljs.core.nth.call(null,inst_26398,0,null);var inst_26400__$1 = cljs.core.nth.call(null,inst_26398,1,null);var inst_26401 = (inst_26399__$1 == null);var inst_26402 = cljs.core._EQ_.call(null,inst_26400__$1,change);var inst_26403 = (inst_26401) || (inst_26402);var state_26435__$1 = (function (){var statearr_26449 = state_26435;(statearr_26449[15] = inst_26399__$1);
(statearr_26449[16] = inst_26400__$1);
return statearr_26449;
})();if(cljs.core.truth_(inst_26403))
{var statearr_26450_26487 = state_26435__$1;(statearr_26450_26487[1] = 11);
} else
{var statearr_26451_26488 = state_26435__$1;(statearr_26451_26488[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 11))
{var inst_26399 = (state_26435[15]);var inst_26405 = (inst_26399 == null);var state_26435__$1 = state_26435;if(cljs.core.truth_(inst_26405))
{var statearr_26452_26489 = state_26435__$1;(statearr_26452_26489[1] = 14);
} else
{var statearr_26453_26490 = state_26435__$1;(statearr_26453_26490[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 12))
{var inst_26395 = (state_26435[14]);var inst_26400 = (state_26435[16]);var inst_26414 = (state_26435[17]);var inst_26414__$1 = inst_26395.call(null,inst_26400);var state_26435__$1 = (function (){var statearr_26454 = state_26435;(statearr_26454[17] = inst_26414__$1);
return statearr_26454;
})();if(cljs.core.truth_(inst_26414__$1))
{var statearr_26455_26491 = state_26435__$1;(statearr_26455_26491[1] = 17);
} else
{var statearr_26456_26492 = state_26435__$1;(statearr_26456_26492[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 13))
{var inst_26431 = (state_26435[2]);var state_26435__$1 = state_26435;var statearr_26457_26493 = state_26435__$1;(statearr_26457_26493[2] = inst_26431);
(statearr_26457_26493[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 14))
{var inst_26400 = (state_26435[16]);var inst_26407 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26400);var state_26435__$1 = state_26435;var statearr_26458_26494 = state_26435__$1;(statearr_26458_26494[2] = inst_26407);
(statearr_26458_26494[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 15))
{var state_26435__$1 = state_26435;var statearr_26459_26495 = state_26435__$1;(statearr_26459_26495[2] = null);
(statearr_26459_26495[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 16))
{var inst_26410 = (state_26435[2]);var inst_26411 = calc_state.call(null);var inst_26384 = inst_26411;var state_26435__$1 = (function (){var statearr_26460 = state_26435;(statearr_26460[10] = inst_26384);
(statearr_26460[18] = inst_26410);
return statearr_26460;
})();var statearr_26461_26496 = state_26435__$1;(statearr_26461_26496[2] = null);
(statearr_26461_26496[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 17))
{var inst_26414 = (state_26435[17]);var state_26435__$1 = state_26435;var statearr_26462_26497 = state_26435__$1;(statearr_26462_26497[2] = inst_26414);
(statearr_26462_26497[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 18))
{var inst_26394 = (state_26435[13]);var inst_26395 = (state_26435[14]);var inst_26400 = (state_26435[16]);var inst_26417 = cljs.core.empty_QMARK_.call(null,inst_26395);var inst_26418 = inst_26394.call(null,inst_26400);var inst_26419 = cljs.core.not.call(null,inst_26418);var inst_26420 = (inst_26417) && (inst_26419);var state_26435__$1 = state_26435;var statearr_26463_26498 = state_26435__$1;(statearr_26463_26498[2] = inst_26420);
(statearr_26463_26498[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 19))
{var inst_26422 = (state_26435[2]);var state_26435__$1 = state_26435;if(cljs.core.truth_(inst_26422))
{var statearr_26464_26499 = state_26435__$1;(statearr_26464_26499[1] = 20);
} else
{var statearr_26465_26500 = state_26435__$1;(statearr_26465_26500[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 20))
{var inst_26399 = (state_26435[15]);var state_26435__$1 = state_26435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26435__$1,23,out,inst_26399);
} else
{if((state_val_26436 === 21))
{var state_26435__$1 = state_26435;var statearr_26466_26501 = state_26435__$1;(statearr_26466_26501[2] = null);
(statearr_26466_26501[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 22))
{var inst_26392 = (state_26435[12]);var inst_26428 = (state_26435[2]);var inst_26384 = inst_26392;var state_26435__$1 = (function (){var statearr_26467 = state_26435;(statearr_26467[19] = inst_26428);
(statearr_26467[10] = inst_26384);
return statearr_26467;
})();var statearr_26468_26502 = state_26435__$1;(statearr_26468_26502[2] = null);
(statearr_26468_26502[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26436 === 23))
{var inst_26425 = (state_26435[2]);var state_26435__$1 = state_26435;var statearr_26469_26503 = state_26435__$1;(statearr_26469_26503[2] = inst_26425);
(statearr_26469_26503[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26473[0] = state_machine__5548__auto__);
(statearr_26473[1] = 1);
return statearr_26473;
});
var state_machine__5548__auto____1 = (function (state_26435){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26435);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26474){if((e26474 instanceof Object))
{var ex__5551__auto__ = e26474;var statearr_26475_26504 = state_26435;(statearr_26475_26504[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26435);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26505 = state_26435;
state_26435 = G__26505;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26435){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26476 = f__5563__auto__.call(null);(statearr_26476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26477);
return statearr_26476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj26507 = {};return obj26507;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__26508_SHARP_){if(cljs.core.truth_(p1__26508_SHARP_.call(null,topic)))
{return p1__26508_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26508_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26633 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26633 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26634){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26634 = meta26634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26633.cljs$lang$type = true;
cljs.core.async.t26633.cljs$lang$ctorStr = "cljs.core.async/t26633";
cljs.core.async.t26633.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26633");
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26635){var self__ = this;
var _26635__$1 = this;return self__.meta26634;
});})(mults,ensure_mult))
;
cljs.core.async.t26633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26635,meta26634__$1){var self__ = this;
var _26635__$1 = this;return (new cljs.core.async.t26633(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26634__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26633 = ((function (mults,ensure_mult){
return (function __GT_t26633(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26634){return (new cljs.core.async.t26633(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26634));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26633(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___26757 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26709){var state_val_26710 = (state_26709[1]);if((state_val_26710 === 1))
{var state_26709__$1 = state_26709;var statearr_26711_26758 = state_26709__$1;(statearr_26711_26758[2] = null);
(statearr_26711_26758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 2))
{var state_26709__$1 = state_26709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26709__$1,4,ch);
} else
{if((state_val_26710 === 3))
{var inst_26707 = (state_26709[2]);var state_26709__$1 = state_26709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26709__$1,inst_26707);
} else
{if((state_val_26710 === 4))
{var inst_26638 = (state_26709[7]);var inst_26638__$1 = (state_26709[2]);var inst_26639 = (inst_26638__$1 == null);var state_26709__$1 = (function (){var statearr_26712 = state_26709;(statearr_26712[7] = inst_26638__$1);
return statearr_26712;
})();if(cljs.core.truth_(inst_26639))
{var statearr_26713_26759 = state_26709__$1;(statearr_26713_26759[1] = 5);
} else
{var statearr_26714_26760 = state_26709__$1;(statearr_26714_26760[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 5))
{var inst_26645 = cljs.core.deref.call(null,mults);var inst_26646 = cljs.core.vals.call(null,inst_26645);var inst_26647 = cljs.core.seq.call(null,inst_26646);var inst_26648 = inst_26647;var inst_26649 = null;var inst_26650 = 0;var inst_26651 = 0;var state_26709__$1 = (function (){var statearr_26715 = state_26709;(statearr_26715[8] = inst_26648);
(statearr_26715[9] = inst_26649);
(statearr_26715[10] = inst_26650);
(statearr_26715[11] = inst_26651);
return statearr_26715;
})();var statearr_26716_26761 = state_26709__$1;(statearr_26716_26761[2] = null);
(statearr_26716_26761[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 6))
{var inst_26686 = (state_26709[12]);var inst_26638 = (state_26709[7]);var inst_26688 = (state_26709[13]);var inst_26686__$1 = topic_fn.call(null,inst_26638);var inst_26687 = cljs.core.deref.call(null,mults);var inst_26688__$1 = cljs.core.get.call(null,inst_26687,inst_26686__$1);var state_26709__$1 = (function (){var statearr_26717 = state_26709;(statearr_26717[12] = inst_26686__$1);
(statearr_26717[13] = inst_26688__$1);
return statearr_26717;
})();if(cljs.core.truth_(inst_26688__$1))
{var statearr_26718_26762 = state_26709__$1;(statearr_26718_26762[1] = 19);
} else
{var statearr_26719_26763 = state_26709__$1;(statearr_26719_26763[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 7))
{var inst_26705 = (state_26709[2]);var state_26709__$1 = state_26709;var statearr_26720_26764 = state_26709__$1;(statearr_26720_26764[2] = inst_26705);
(statearr_26720_26764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 8))
{var inst_26650 = (state_26709[10]);var inst_26651 = (state_26709[11]);var inst_26653 = (inst_26651 < inst_26650);var inst_26654 = inst_26653;var state_26709__$1 = state_26709;if(cljs.core.truth_(inst_26654))
{var statearr_26724_26765 = state_26709__$1;(statearr_26724_26765[1] = 10);
} else
{var statearr_26725_26766 = state_26709__$1;(statearr_26725_26766[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 9))
{var inst_26684 = (state_26709[2]);var state_26709__$1 = state_26709;var statearr_26726_26767 = state_26709__$1;(statearr_26726_26767[2] = inst_26684);
(statearr_26726_26767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 10))
{var inst_26648 = (state_26709[8]);var inst_26649 = (state_26709[9]);var inst_26650 = (state_26709[10]);var inst_26651 = (state_26709[11]);var inst_26656 = cljs.core._nth.call(null,inst_26649,inst_26651);var inst_26657 = cljs.core.async.muxch_STAR_.call(null,inst_26656);var inst_26658 = cljs.core.async.close_BANG_.call(null,inst_26657);var inst_26659 = (inst_26651 + 1);var tmp26721 = inst_26648;var tmp26722 = inst_26649;var tmp26723 = inst_26650;var inst_26648__$1 = tmp26721;var inst_26649__$1 = tmp26722;var inst_26650__$1 = tmp26723;var inst_26651__$1 = inst_26659;var state_26709__$1 = (function (){var statearr_26727 = state_26709;(statearr_26727[14] = inst_26658);
(statearr_26727[8] = inst_26648__$1);
(statearr_26727[9] = inst_26649__$1);
(statearr_26727[10] = inst_26650__$1);
(statearr_26727[11] = inst_26651__$1);
return statearr_26727;
})();var statearr_26728_26768 = state_26709__$1;(statearr_26728_26768[2] = null);
(statearr_26728_26768[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 11))
{var inst_26662 = (state_26709[15]);var inst_26648 = (state_26709[8]);var inst_26662__$1 = cljs.core.seq.call(null,inst_26648);var state_26709__$1 = (function (){var statearr_26729 = state_26709;(statearr_26729[15] = inst_26662__$1);
return statearr_26729;
})();if(inst_26662__$1)
{var statearr_26730_26769 = state_26709__$1;(statearr_26730_26769[1] = 13);
} else
{var statearr_26731_26770 = state_26709__$1;(statearr_26731_26770[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 12))
{var inst_26682 = (state_26709[2]);var state_26709__$1 = state_26709;var statearr_26732_26771 = state_26709__$1;(statearr_26732_26771[2] = inst_26682);
(statearr_26732_26771[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 13))
{var inst_26662 = (state_26709[15]);var inst_26664 = cljs.core.chunked_seq_QMARK_.call(null,inst_26662);var state_26709__$1 = state_26709;if(inst_26664)
{var statearr_26733_26772 = state_26709__$1;(statearr_26733_26772[1] = 16);
} else
{var statearr_26734_26773 = state_26709__$1;(statearr_26734_26773[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 14))
{var state_26709__$1 = state_26709;var statearr_26735_26774 = state_26709__$1;(statearr_26735_26774[2] = null);
(statearr_26735_26774[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 15))
{var inst_26680 = (state_26709[2]);var state_26709__$1 = state_26709;var statearr_26736_26775 = state_26709__$1;(statearr_26736_26775[2] = inst_26680);
(statearr_26736_26775[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 16))
{var inst_26662 = (state_26709[15]);var inst_26666 = cljs.core.chunk_first.call(null,inst_26662);var inst_26667 = cljs.core.chunk_rest.call(null,inst_26662);var inst_26668 = cljs.core.count.call(null,inst_26666);var inst_26648 = inst_26667;var inst_26649 = inst_26666;var inst_26650 = inst_26668;var inst_26651 = 0;var state_26709__$1 = (function (){var statearr_26737 = state_26709;(statearr_26737[8] = inst_26648);
(statearr_26737[9] = inst_26649);
(statearr_26737[10] = inst_26650);
(statearr_26737[11] = inst_26651);
return statearr_26737;
})();var statearr_26738_26776 = state_26709__$1;(statearr_26738_26776[2] = null);
(statearr_26738_26776[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 17))
{var inst_26662 = (state_26709[15]);var inst_26671 = cljs.core.first.call(null,inst_26662);var inst_26672 = cljs.core.async.muxch_STAR_.call(null,inst_26671);var inst_26673 = cljs.core.async.close_BANG_.call(null,inst_26672);var inst_26674 = cljs.core.next.call(null,inst_26662);var inst_26648 = inst_26674;var inst_26649 = null;var inst_26650 = 0;var inst_26651 = 0;var state_26709__$1 = (function (){var statearr_26739 = state_26709;(statearr_26739[16] = inst_26673);
(statearr_26739[8] = inst_26648);
(statearr_26739[9] = inst_26649);
(statearr_26739[10] = inst_26650);
(statearr_26739[11] = inst_26651);
return statearr_26739;
})();var statearr_26740_26777 = state_26709__$1;(statearr_26740_26777[2] = null);
(statearr_26740_26777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 18))
{var inst_26677 = (state_26709[2]);var state_26709__$1 = state_26709;var statearr_26741_26778 = state_26709__$1;(statearr_26741_26778[2] = inst_26677);
(statearr_26741_26778[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 19))
{var state_26709__$1 = state_26709;var statearr_26742_26779 = state_26709__$1;(statearr_26742_26779[2] = null);
(statearr_26742_26779[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 20))
{var state_26709__$1 = state_26709;var statearr_26743_26780 = state_26709__$1;(statearr_26743_26780[2] = null);
(statearr_26743_26780[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 21))
{var inst_26702 = (state_26709[2]);var state_26709__$1 = (function (){var statearr_26744 = state_26709;(statearr_26744[17] = inst_26702);
return statearr_26744;
})();var statearr_26745_26781 = state_26709__$1;(statearr_26745_26781[2] = null);
(statearr_26745_26781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 22))
{var inst_26699 = (state_26709[2]);var state_26709__$1 = state_26709;var statearr_26746_26782 = state_26709__$1;(statearr_26746_26782[2] = inst_26699);
(statearr_26746_26782[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 23))
{var inst_26686 = (state_26709[12]);var inst_26690 = (state_26709[2]);var inst_26691 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26686);var state_26709__$1 = (function (){var statearr_26747 = state_26709;(statearr_26747[18] = inst_26690);
return statearr_26747;
})();var statearr_26748_26783 = state_26709__$1;(statearr_26748_26783[2] = inst_26691);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26710 === 24))
{var inst_26638 = (state_26709[7]);var inst_26688 = (state_26709[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26709,23,Object,null,22);var inst_26695 = cljs.core.async.muxch_STAR_.call(null,inst_26688);var state_26709__$1 = state_26709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26709__$1,25,inst_26695,inst_26638);
} else
{if((state_val_26710 === 25))
{var inst_26697 = (state_26709[2]);var state_26709__$1 = state_26709;var statearr_26749_26784 = state_26709__$1;(statearr_26749_26784[2] = inst_26697);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26709__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26753[0] = state_machine__5548__auto__);
(statearr_26753[1] = 1);
return statearr_26753;
});
var state_machine__5548__auto____1 = (function (state_26709){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26754){if((e26754 instanceof Object))
{var ex__5551__auto__ = e26754;var statearr_26755_26785 = state_26709;(statearr_26755_26785[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26786 = state_26709;
state_26709 = G__26786;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26709){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26756 = f__5563__auto__.call(null);(statearr_26756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26757);
return statearr_26756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
,cljs.core.range.call(null,cnt));var c__5562__auto___26923 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26893){var state_val_26894 = (state_26893[1]);if((state_val_26894 === 1))
{var state_26893__$1 = state_26893;var statearr_26895_26924 = state_26893__$1;(statearr_26895_26924[2] = null);
(statearr_26895_26924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 2))
{var inst_26856 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26857 = 0;var state_26893__$1 = (function (){var statearr_26896 = state_26893;(statearr_26896[7] = inst_26856);
(statearr_26896[8] = inst_26857);
return statearr_26896;
})();var statearr_26897_26925 = state_26893__$1;(statearr_26897_26925[2] = null);
(statearr_26897_26925[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 3))
{var inst_26891 = (state_26893[2]);var state_26893__$1 = state_26893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26893__$1,inst_26891);
} else
{if((state_val_26894 === 4))
{var inst_26857 = (state_26893[8]);var inst_26859 = (inst_26857 < cnt);var state_26893__$1 = state_26893;if(cljs.core.truth_(inst_26859))
{var statearr_26898_26926 = state_26893__$1;(statearr_26898_26926[1] = 6);
} else
{var statearr_26899_26927 = state_26893__$1;(statearr_26899_26927[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 5))
{var inst_26877 = (state_26893[2]);var state_26893__$1 = (function (){var statearr_26900 = state_26893;(statearr_26900[9] = inst_26877);
return statearr_26900;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26893__$1,12,dchan);
} else
{if((state_val_26894 === 6))
{var state_26893__$1 = state_26893;var statearr_26901_26928 = state_26893__$1;(statearr_26901_26928[2] = null);
(statearr_26901_26928[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 7))
{var state_26893__$1 = state_26893;var statearr_26902_26929 = state_26893__$1;(statearr_26902_26929[2] = null);
(statearr_26902_26929[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 8))
{var inst_26875 = (state_26893[2]);var state_26893__$1 = state_26893;var statearr_26903_26930 = state_26893__$1;(statearr_26903_26930[2] = inst_26875);
(statearr_26903_26930[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 9))
{var inst_26857 = (state_26893[8]);var inst_26870 = (state_26893[2]);var inst_26871 = (inst_26857 + 1);var inst_26857__$1 = inst_26871;var state_26893__$1 = (function (){var statearr_26904 = state_26893;(statearr_26904[10] = inst_26870);
(statearr_26904[8] = inst_26857__$1);
return statearr_26904;
})();var statearr_26905_26931 = state_26893__$1;(statearr_26905_26931[2] = null);
(statearr_26905_26931[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 10))
{var inst_26861 = (state_26893[2]);var inst_26862 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26893__$1 = (function (){var statearr_26906 = state_26893;(statearr_26906[11] = inst_26861);
return statearr_26906;
})();var statearr_26907_26932 = state_26893__$1;(statearr_26907_26932[2] = inst_26862);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 11))
{var inst_26857 = (state_26893[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26893,10,Object,null,9);var inst_26866 = chs__$1.call(null,inst_26857);var inst_26867 = done.call(null,inst_26857);var inst_26868 = cljs.core.async.take_BANG_.call(null,inst_26866,inst_26867);var state_26893__$1 = state_26893;var statearr_26908_26933 = state_26893__$1;(statearr_26908_26933[2] = inst_26868);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 12))
{var inst_26879 = (state_26893[12]);var inst_26879__$1 = (state_26893[2]);var inst_26880 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26879__$1);var state_26893__$1 = (function (){var statearr_26909 = state_26893;(statearr_26909[12] = inst_26879__$1);
return statearr_26909;
})();if(cljs.core.truth_(inst_26880))
{var statearr_26910_26934 = state_26893__$1;(statearr_26910_26934[1] = 13);
} else
{var statearr_26911_26935 = state_26893__$1;(statearr_26911_26935[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 13))
{var inst_26882 = cljs.core.async.close_BANG_.call(null,out);var state_26893__$1 = state_26893;var statearr_26912_26936 = state_26893__$1;(statearr_26912_26936[2] = inst_26882);
(statearr_26912_26936[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 14))
{var inst_26879 = (state_26893[12]);var inst_26884 = cljs.core.apply.call(null,f,inst_26879);var state_26893__$1 = state_26893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26893__$1,16,out,inst_26884);
} else
{if((state_val_26894 === 15))
{var inst_26889 = (state_26893[2]);var state_26893__$1 = state_26893;var statearr_26913_26937 = state_26893__$1;(statearr_26913_26937[2] = inst_26889);
(statearr_26913_26937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26894 === 16))
{var inst_26886 = (state_26893[2]);var state_26893__$1 = (function (){var statearr_26914 = state_26893;(statearr_26914[13] = inst_26886);
return statearr_26914;
})();var statearr_26915_26938 = state_26893__$1;(statearr_26915_26938[2] = null);
(statearr_26915_26938[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26919[0] = state_machine__5548__auto__);
(statearr_26919[1] = 1);
return statearr_26919;
});
var state_machine__5548__auto____1 = (function (state_26893){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26893);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object))
{var ex__5551__auto__ = e26920;var statearr_26921_26939 = state_26893;(statearr_26921_26939[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26940 = state_26893;
state_26893 = G__26940;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26893){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26922 = f__5563__auto__.call(null);(statearr_26922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26923);
return statearr_26922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27048 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27024){var state_val_27025 = (state_27024[1]);if((state_val_27025 === 1))
{var inst_26995 = cljs.core.vec.call(null,chs);var inst_26996 = inst_26995;var state_27024__$1 = (function (){var statearr_27026 = state_27024;(statearr_27026[7] = inst_26996);
return statearr_27026;
})();var statearr_27027_27049 = state_27024__$1;(statearr_27027_27049[2] = null);
(statearr_27027_27049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27025 === 2))
{var inst_26996 = (state_27024[7]);var inst_26998 = cljs.core.count.call(null,inst_26996);var inst_26999 = (inst_26998 > 0);var state_27024__$1 = state_27024;if(cljs.core.truth_(inst_26999))
{var statearr_27028_27050 = state_27024__$1;(statearr_27028_27050[1] = 4);
} else
{var statearr_27029_27051 = state_27024__$1;(statearr_27029_27051[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27025 === 3))
{var inst_27022 = (state_27024[2]);var state_27024__$1 = state_27024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27024__$1,inst_27022);
} else
{if((state_val_27025 === 4))
{var inst_26996 = (state_27024[7]);var state_27024__$1 = state_27024;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27024__$1,7,inst_26996);
} else
{if((state_val_27025 === 5))
{var inst_27018 = cljs.core.async.close_BANG_.call(null,out);var state_27024__$1 = state_27024;var statearr_27030_27052 = state_27024__$1;(statearr_27030_27052[2] = inst_27018);
(statearr_27030_27052[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27025 === 6))
{var inst_27020 = (state_27024[2]);var state_27024__$1 = state_27024;var statearr_27031_27053 = state_27024__$1;(statearr_27031_27053[2] = inst_27020);
(statearr_27031_27053[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27025 === 7))
{var inst_27004 = (state_27024[8]);var inst_27003 = (state_27024[9]);var inst_27003__$1 = (state_27024[2]);var inst_27004__$1 = cljs.core.nth.call(null,inst_27003__$1,0,null);var inst_27005 = cljs.core.nth.call(null,inst_27003__$1,1,null);var inst_27006 = (inst_27004__$1 == null);var state_27024__$1 = (function (){var statearr_27032 = state_27024;(statearr_27032[8] = inst_27004__$1);
(statearr_27032[10] = inst_27005);
(statearr_27032[9] = inst_27003__$1);
return statearr_27032;
})();if(cljs.core.truth_(inst_27006))
{var statearr_27033_27054 = state_27024__$1;(statearr_27033_27054[1] = 8);
} else
{var statearr_27034_27055 = state_27024__$1;(statearr_27034_27055[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27025 === 8))
{var inst_26996 = (state_27024[7]);var inst_27004 = (state_27024[8]);var inst_27005 = (state_27024[10]);var inst_27003 = (state_27024[9]);var inst_27008 = (function (){var c = inst_27005;var v = inst_27004;var vec__27001 = inst_27003;var cs = inst_26996;return ((function (c,v,vec__27001,cs,inst_26996,inst_27004,inst_27005,inst_27003,state_val_27025){
return (function (p1__26941_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26941_SHARP_);
});
;})(c,v,vec__27001,cs,inst_26996,inst_27004,inst_27005,inst_27003,state_val_27025))
})();var inst_27009 = cljs.core.filterv.call(null,inst_27008,inst_26996);var inst_26996__$1 = inst_27009;var state_27024__$1 = (function (){var statearr_27035 = state_27024;(statearr_27035[7] = inst_26996__$1);
return statearr_27035;
})();var statearr_27036_27056 = state_27024__$1;(statearr_27036_27056[2] = null);
(statearr_27036_27056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27025 === 9))
{var inst_27004 = (state_27024[8]);var state_27024__$1 = state_27024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27024__$1,11,out,inst_27004);
} else
{if((state_val_27025 === 10))
{var inst_27016 = (state_27024[2]);var state_27024__$1 = state_27024;var statearr_27038_27057 = state_27024__$1;(statearr_27038_27057[2] = inst_27016);
(statearr_27038_27057[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27025 === 11))
{var inst_26996 = (state_27024[7]);var inst_27013 = (state_27024[2]);var tmp27037 = inst_26996;var inst_26996__$1 = tmp27037;var state_27024__$1 = (function (){var statearr_27039 = state_27024;(statearr_27039[7] = inst_26996__$1);
(statearr_27039[11] = inst_27013);
return statearr_27039;
})();var statearr_27040_27058 = state_27024__$1;(statearr_27040_27058[2] = null);
(statearr_27040_27058[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27044 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27044[0] = state_machine__5548__auto__);
(statearr_27044[1] = 1);
return statearr_27044;
});
var state_machine__5548__auto____1 = (function (state_27024){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27024);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27045){if((e27045 instanceof Object))
{var ex__5551__auto__ = e27045;var statearr_27046_27059 = state_27024;(statearr_27046_27059[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27060 = state_27024;
state_27024 = G__27060;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27024){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27047 = f__5563__auto__.call(null);(statearr_27047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27048);
return statearr_27047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27153 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27130){var state_val_27131 = (state_27130[1]);if((state_val_27131 === 1))
{var inst_27107 = 0;var state_27130__$1 = (function (){var statearr_27132 = state_27130;(statearr_27132[7] = inst_27107);
return statearr_27132;
})();var statearr_27133_27154 = state_27130__$1;(statearr_27133_27154[2] = null);
(statearr_27133_27154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27131 === 2))
{var inst_27107 = (state_27130[7]);var inst_27109 = (inst_27107 < n);var state_27130__$1 = state_27130;if(cljs.core.truth_(inst_27109))
{var statearr_27134_27155 = state_27130__$1;(statearr_27134_27155[1] = 4);
} else
{var statearr_27135_27156 = state_27130__$1;(statearr_27135_27156[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27131 === 3))
{var inst_27127 = (state_27130[2]);var inst_27128 = cljs.core.async.close_BANG_.call(null,out);var state_27130__$1 = (function (){var statearr_27136 = state_27130;(statearr_27136[8] = inst_27127);
return statearr_27136;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27130__$1,inst_27128);
} else
{if((state_val_27131 === 4))
{var state_27130__$1 = state_27130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27130__$1,7,ch);
} else
{if((state_val_27131 === 5))
{var state_27130__$1 = state_27130;var statearr_27137_27157 = state_27130__$1;(statearr_27137_27157[2] = null);
(statearr_27137_27157[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27131 === 6))
{var inst_27125 = (state_27130[2]);var state_27130__$1 = state_27130;var statearr_27138_27158 = state_27130__$1;(statearr_27138_27158[2] = inst_27125);
(statearr_27138_27158[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27131 === 7))
{var inst_27112 = (state_27130[9]);var inst_27112__$1 = (state_27130[2]);var inst_27113 = (inst_27112__$1 == null);var inst_27114 = cljs.core.not.call(null,inst_27113);var state_27130__$1 = (function (){var statearr_27139 = state_27130;(statearr_27139[9] = inst_27112__$1);
return statearr_27139;
})();if(inst_27114)
{var statearr_27140_27159 = state_27130__$1;(statearr_27140_27159[1] = 8);
} else
{var statearr_27141_27160 = state_27130__$1;(statearr_27141_27160[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27131 === 8))
{var inst_27112 = (state_27130[9]);var state_27130__$1 = state_27130;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27130__$1,11,out,inst_27112);
} else
{if((state_val_27131 === 9))
{var state_27130__$1 = state_27130;var statearr_27142_27161 = state_27130__$1;(statearr_27142_27161[2] = null);
(statearr_27142_27161[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27131 === 10))
{var inst_27122 = (state_27130[2]);var state_27130__$1 = state_27130;var statearr_27143_27162 = state_27130__$1;(statearr_27143_27162[2] = inst_27122);
(statearr_27143_27162[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27131 === 11))
{var inst_27107 = (state_27130[7]);var inst_27117 = (state_27130[2]);var inst_27118 = (inst_27107 + 1);var inst_27107__$1 = inst_27118;var state_27130__$1 = (function (){var statearr_27144 = state_27130;(statearr_27144[10] = inst_27117);
(statearr_27144[7] = inst_27107__$1);
return statearr_27144;
})();var statearr_27145_27163 = state_27130__$1;(statearr_27145_27163[2] = null);
(statearr_27145_27163[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27149 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27149[0] = state_machine__5548__auto__);
(statearr_27149[1] = 1);
return statearr_27149;
});
var state_machine__5548__auto____1 = (function (state_27130){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27130);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27150){if((e27150 instanceof Object))
{var ex__5551__auto__ = e27150;var statearr_27151_27164 = state_27130;(statearr_27151_27164[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27130);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27165 = state_27130;
state_27130 = G__27165;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27130){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27152 = f__5563__auto__.call(null);(statearr_27152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27153);
return statearr_27152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27262 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27237){var state_val_27238 = (state_27237[1]);if((state_val_27238 === 1))
{var inst_27214 = null;var state_27237__$1 = (function (){var statearr_27239 = state_27237;(statearr_27239[7] = inst_27214);
return statearr_27239;
})();var statearr_27240_27263 = state_27237__$1;(statearr_27240_27263[2] = null);
(statearr_27240_27263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27238 === 2))
{var state_27237__$1 = state_27237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27237__$1,4,ch);
} else
{if((state_val_27238 === 3))
{var inst_27234 = (state_27237[2]);var inst_27235 = cljs.core.async.close_BANG_.call(null,out);var state_27237__$1 = (function (){var statearr_27241 = state_27237;(statearr_27241[8] = inst_27234);
return statearr_27241;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27237__$1,inst_27235);
} else
{if((state_val_27238 === 4))
{var inst_27217 = (state_27237[9]);var inst_27217__$1 = (state_27237[2]);var inst_27218 = (inst_27217__$1 == null);var inst_27219 = cljs.core.not.call(null,inst_27218);var state_27237__$1 = (function (){var statearr_27242 = state_27237;(statearr_27242[9] = inst_27217__$1);
return statearr_27242;
})();if(inst_27219)
{var statearr_27243_27264 = state_27237__$1;(statearr_27243_27264[1] = 5);
} else
{var statearr_27244_27265 = state_27237__$1;(statearr_27244_27265[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27238 === 5))
{var inst_27214 = (state_27237[7]);var inst_27217 = (state_27237[9]);var inst_27221 = cljs.core._EQ_.call(null,inst_27217,inst_27214);var state_27237__$1 = state_27237;if(inst_27221)
{var statearr_27245_27266 = state_27237__$1;(statearr_27245_27266[1] = 8);
} else
{var statearr_27246_27267 = state_27237__$1;(statearr_27246_27267[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27238 === 6))
{var state_27237__$1 = state_27237;var statearr_27248_27268 = state_27237__$1;(statearr_27248_27268[2] = null);
(statearr_27248_27268[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27238 === 7))
{var inst_27232 = (state_27237[2]);var state_27237__$1 = state_27237;var statearr_27249_27269 = state_27237__$1;(statearr_27249_27269[2] = inst_27232);
(statearr_27249_27269[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27238 === 8))
{var inst_27214 = (state_27237[7]);var tmp27247 = inst_27214;var inst_27214__$1 = tmp27247;var state_27237__$1 = (function (){var statearr_27250 = state_27237;(statearr_27250[7] = inst_27214__$1);
return statearr_27250;
})();var statearr_27251_27270 = state_27237__$1;(statearr_27251_27270[2] = null);
(statearr_27251_27270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27238 === 9))
{var inst_27217 = (state_27237[9]);var state_27237__$1 = state_27237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27237__$1,11,out,inst_27217);
} else
{if((state_val_27238 === 10))
{var inst_27229 = (state_27237[2]);var state_27237__$1 = state_27237;var statearr_27252_27271 = state_27237__$1;(statearr_27252_27271[2] = inst_27229);
(statearr_27252_27271[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27238 === 11))
{var inst_27217 = (state_27237[9]);var inst_27226 = (state_27237[2]);var inst_27214 = inst_27217;var state_27237__$1 = (function (){var statearr_27253 = state_27237;(statearr_27253[7] = inst_27214);
(statearr_27253[10] = inst_27226);
return statearr_27253;
})();var statearr_27254_27272 = state_27237__$1;(statearr_27254_27272[2] = null);
(statearr_27254_27272[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27258 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27258[0] = state_machine__5548__auto__);
(statearr_27258[1] = 1);
return statearr_27258;
});
var state_machine__5548__auto____1 = (function (state_27237){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27237);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27259){if((e27259 instanceof Object))
{var ex__5551__auto__ = e27259;var statearr_27260_27273 = state_27237;(statearr_27260_27273[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27274 = state_27237;
state_27237 = G__27274;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27237){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27261 = f__5563__auto__.call(null);(statearr_27261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27262);
return statearr_27261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27409 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27379){var state_val_27380 = (state_27379[1]);if((state_val_27380 === 1))
{var inst_27342 = (new Array(n));var inst_27343 = inst_27342;var inst_27344 = 0;var state_27379__$1 = (function (){var statearr_27381 = state_27379;(statearr_27381[7] = inst_27343);
(statearr_27381[8] = inst_27344);
return statearr_27381;
})();var statearr_27382_27410 = state_27379__$1;(statearr_27382_27410[2] = null);
(statearr_27382_27410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 2))
{var state_27379__$1 = state_27379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,4,ch);
} else
{if((state_val_27380 === 3))
{var inst_27377 = (state_27379[2]);var state_27379__$1 = state_27379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27379__$1,inst_27377);
} else
{if((state_val_27380 === 4))
{var inst_27347 = (state_27379[9]);var inst_27347__$1 = (state_27379[2]);var inst_27348 = (inst_27347__$1 == null);var inst_27349 = cljs.core.not.call(null,inst_27348);var state_27379__$1 = (function (){var statearr_27383 = state_27379;(statearr_27383[9] = inst_27347__$1);
return statearr_27383;
})();if(inst_27349)
{var statearr_27384_27411 = state_27379__$1;(statearr_27384_27411[1] = 5);
} else
{var statearr_27385_27412 = state_27379__$1;(statearr_27385_27412[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 5))
{var inst_27352 = (state_27379[10]);var inst_27347 = (state_27379[9]);var inst_27343 = (state_27379[7]);var inst_27344 = (state_27379[8]);var inst_27351 = (inst_27343[inst_27344] = inst_27347);var inst_27352__$1 = (inst_27344 + 1);var inst_27353 = (inst_27352__$1 < n);var state_27379__$1 = (function (){var statearr_27386 = state_27379;(statearr_27386[11] = inst_27351);
(statearr_27386[10] = inst_27352__$1);
return statearr_27386;
})();if(cljs.core.truth_(inst_27353))
{var statearr_27387_27413 = state_27379__$1;(statearr_27387_27413[1] = 8);
} else
{var statearr_27388_27414 = state_27379__$1;(statearr_27388_27414[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 6))
{var inst_27344 = (state_27379[8]);var inst_27365 = (inst_27344 > 0);var state_27379__$1 = state_27379;if(cljs.core.truth_(inst_27365))
{var statearr_27390_27415 = state_27379__$1;(statearr_27390_27415[1] = 12);
} else
{var statearr_27391_27416 = state_27379__$1;(statearr_27391_27416[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 7))
{var inst_27375 = (state_27379[2]);var state_27379__$1 = state_27379;var statearr_27392_27417 = state_27379__$1;(statearr_27392_27417[2] = inst_27375);
(statearr_27392_27417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 8))
{var inst_27352 = (state_27379[10]);var inst_27343 = (state_27379[7]);var tmp27389 = inst_27343;var inst_27343__$1 = tmp27389;var inst_27344 = inst_27352;var state_27379__$1 = (function (){var statearr_27393 = state_27379;(statearr_27393[7] = inst_27343__$1);
(statearr_27393[8] = inst_27344);
return statearr_27393;
})();var statearr_27394_27418 = state_27379__$1;(statearr_27394_27418[2] = null);
(statearr_27394_27418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 9))
{var inst_27343 = (state_27379[7]);var inst_27357 = cljs.core.vec.call(null,inst_27343);var state_27379__$1 = state_27379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27379__$1,11,out,inst_27357);
} else
{if((state_val_27380 === 10))
{var inst_27363 = (state_27379[2]);var state_27379__$1 = state_27379;var statearr_27395_27419 = state_27379__$1;(statearr_27395_27419[2] = inst_27363);
(statearr_27395_27419[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 11))
{var inst_27359 = (state_27379[2]);var inst_27360 = (new Array(n));var inst_27343 = inst_27360;var inst_27344 = 0;var state_27379__$1 = (function (){var statearr_27396 = state_27379;(statearr_27396[12] = inst_27359);
(statearr_27396[7] = inst_27343);
(statearr_27396[8] = inst_27344);
return statearr_27396;
})();var statearr_27397_27420 = state_27379__$1;(statearr_27397_27420[2] = null);
(statearr_27397_27420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 12))
{var inst_27343 = (state_27379[7]);var inst_27367 = cljs.core.vec.call(null,inst_27343);var state_27379__$1 = state_27379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27379__$1,15,out,inst_27367);
} else
{if((state_val_27380 === 13))
{var state_27379__$1 = state_27379;var statearr_27398_27421 = state_27379__$1;(statearr_27398_27421[2] = null);
(statearr_27398_27421[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 14))
{var inst_27372 = (state_27379[2]);var inst_27373 = cljs.core.async.close_BANG_.call(null,out);var state_27379__$1 = (function (){var statearr_27399 = state_27379;(statearr_27399[13] = inst_27372);
return statearr_27399;
})();var statearr_27400_27422 = state_27379__$1;(statearr_27400_27422[2] = inst_27373);
(statearr_27400_27422[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27380 === 15))
{var inst_27369 = (state_27379[2]);var state_27379__$1 = state_27379;var statearr_27401_27423 = state_27379__$1;(statearr_27401_27423[2] = inst_27369);
(statearr_27401_27423[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27405[0] = state_machine__5548__auto__);
(statearr_27405[1] = 1);
return statearr_27405;
});
var state_machine__5548__auto____1 = (function (state_27379){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27406){if((e27406 instanceof Object))
{var ex__5551__auto__ = e27406;var statearr_27407_27424 = state_27379;(statearr_27407_27424[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27425 = state_27379;
state_27379 = G__27425;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27379){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27408 = f__5563__auto__.call(null);(statearr_27408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27409);
return statearr_27408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27568 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27538){var state_val_27539 = (state_27538[1]);if((state_val_27539 === 1))
{var inst_27497 = [];var inst_27498 = inst_27497;var inst_27499 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27538__$1 = (function (){var statearr_27540 = state_27538;(statearr_27540[7] = inst_27499);
(statearr_27540[8] = inst_27498);
return statearr_27540;
})();var statearr_27541_27569 = state_27538__$1;(statearr_27541_27569[2] = null);
(statearr_27541_27569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 2))
{var state_27538__$1 = state_27538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27538__$1,4,ch);
} else
{if((state_val_27539 === 3))
{var inst_27536 = (state_27538[2]);var state_27538__$1 = state_27538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27538__$1,inst_27536);
} else
{if((state_val_27539 === 4))
{var inst_27502 = (state_27538[9]);var inst_27502__$1 = (state_27538[2]);var inst_27503 = (inst_27502__$1 == null);var inst_27504 = cljs.core.not.call(null,inst_27503);var state_27538__$1 = (function (){var statearr_27542 = state_27538;(statearr_27542[9] = inst_27502__$1);
return statearr_27542;
})();if(inst_27504)
{var statearr_27543_27570 = state_27538__$1;(statearr_27543_27570[1] = 5);
} else
{var statearr_27544_27571 = state_27538__$1;(statearr_27544_27571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 5))
{var inst_27506 = (state_27538[10]);var inst_27499 = (state_27538[7]);var inst_27502 = (state_27538[9]);var inst_27506__$1 = f.call(null,inst_27502);var inst_27507 = cljs.core._EQ_.call(null,inst_27506__$1,inst_27499);var inst_27508 = cljs.core.keyword_identical_QMARK_.call(null,inst_27499,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27509 = (inst_27507) || (inst_27508);var state_27538__$1 = (function (){var statearr_27545 = state_27538;(statearr_27545[10] = inst_27506__$1);
return statearr_27545;
})();if(cljs.core.truth_(inst_27509))
{var statearr_27546_27572 = state_27538__$1;(statearr_27546_27572[1] = 8);
} else
{var statearr_27547_27573 = state_27538__$1;(statearr_27547_27573[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 6))
{var inst_27498 = (state_27538[8]);var inst_27523 = inst_27498.length;var inst_27524 = (inst_27523 > 0);var state_27538__$1 = state_27538;if(cljs.core.truth_(inst_27524))
{var statearr_27549_27574 = state_27538__$1;(statearr_27549_27574[1] = 12);
} else
{var statearr_27550_27575 = state_27538__$1;(statearr_27550_27575[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 7))
{var inst_27534 = (state_27538[2]);var state_27538__$1 = state_27538;var statearr_27551_27576 = state_27538__$1;(statearr_27551_27576[2] = inst_27534);
(statearr_27551_27576[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 8))
{var inst_27506 = (state_27538[10]);var inst_27498 = (state_27538[8]);var inst_27502 = (state_27538[9]);var inst_27511 = inst_27498.push(inst_27502);var tmp27548 = inst_27498;var inst_27498__$1 = tmp27548;var inst_27499 = inst_27506;var state_27538__$1 = (function (){var statearr_27552 = state_27538;(statearr_27552[11] = inst_27511);
(statearr_27552[7] = inst_27499);
(statearr_27552[8] = inst_27498__$1);
return statearr_27552;
})();var statearr_27553_27577 = state_27538__$1;(statearr_27553_27577[2] = null);
(statearr_27553_27577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 9))
{var inst_27498 = (state_27538[8]);var inst_27514 = cljs.core.vec.call(null,inst_27498);var state_27538__$1 = state_27538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27538__$1,11,out,inst_27514);
} else
{if((state_val_27539 === 10))
{var inst_27521 = (state_27538[2]);var state_27538__$1 = state_27538;var statearr_27554_27578 = state_27538__$1;(statearr_27554_27578[2] = inst_27521);
(statearr_27554_27578[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 11))
{var inst_27506 = (state_27538[10]);var inst_27502 = (state_27538[9]);var inst_27516 = (state_27538[2]);var inst_27517 = [];var inst_27518 = inst_27517.push(inst_27502);var inst_27498 = inst_27517;var inst_27499 = inst_27506;var state_27538__$1 = (function (){var statearr_27555 = state_27538;(statearr_27555[12] = inst_27516);
(statearr_27555[13] = inst_27518);
(statearr_27555[7] = inst_27499);
(statearr_27555[8] = inst_27498);
return statearr_27555;
})();var statearr_27556_27579 = state_27538__$1;(statearr_27556_27579[2] = null);
(statearr_27556_27579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 12))
{var inst_27498 = (state_27538[8]);var inst_27526 = cljs.core.vec.call(null,inst_27498);var state_27538__$1 = state_27538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27538__$1,15,out,inst_27526);
} else
{if((state_val_27539 === 13))
{var state_27538__$1 = state_27538;var statearr_27557_27580 = state_27538__$1;(statearr_27557_27580[2] = null);
(statearr_27557_27580[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 14))
{var inst_27531 = (state_27538[2]);var inst_27532 = cljs.core.async.close_BANG_.call(null,out);var state_27538__$1 = (function (){var statearr_27558 = state_27538;(statearr_27558[14] = inst_27531);
return statearr_27558;
})();var statearr_27559_27581 = state_27538__$1;(statearr_27559_27581[2] = inst_27532);
(statearr_27559_27581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27539 === 15))
{var inst_27528 = (state_27538[2]);var state_27538__$1 = state_27538;var statearr_27560_27582 = state_27538__$1;(statearr_27560_27582[2] = inst_27528);
(statearr_27560_27582[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27564[0] = state_machine__5548__auto__);
(statearr_27564[1] = 1);
return statearr_27564;
});
var state_machine__5548__auto____1 = (function (state_27538){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27538);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27565){if((e27565 instanceof Object))
{var ex__5551__auto__ = e27565;var statearr_27566_27583 = state_27538;(statearr_27566_27583[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27584 = state_27538;
state_27538 = G__27584;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27538){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27567 = f__5563__auto__.call(null);(statearr_27567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27568);
return statearr_27567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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