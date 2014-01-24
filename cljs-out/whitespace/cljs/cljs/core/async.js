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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t32134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32134 = (function (f,fn_handler,meta32135){
this.f = f;
this.fn_handler = fn_handler;
this.meta32135 = meta32135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32134.cljs$lang$type = true;
cljs.core.async.t32134.cljs$lang$ctorStr = "cljs.core.async/t32134";
cljs.core.async.t32134.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32134");
});
cljs.core.async.t32134.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t32134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t32134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32136){var self__ = this;
var _32136__$1 = this;return self__.meta32135;
});
cljs.core.async.t32134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32136,meta32135__$1){var self__ = this;
var _32136__$1 = this;return (new cljs.core.async.t32134(self__.f,self__.fn_handler,meta32135__$1));
});
cljs.core.async.__GT_t32134 = (function __GT_t32134(f__$1,fn_handler__$1,meta32135){return (new cljs.core.async.t32134(f__$1,fn_handler__$1,meta32135));
});
}
return (new cljs.core.async.t32134(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__32138 = buff;if(G__32138)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__32138.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__32138.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32138);
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
{var val_32139 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_32139);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_32139);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___32140 = n;var x_32141 = 0;while(true){
if((x_32141 < n__4248__auto___32140))
{(a[x_32141] = 0);
{
var G__32142 = (x_32141 + 1);
x_32141 = G__32142;
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
var G__32143 = (i + 1);
i = G__32143;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t32147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32147 = (function (flag,alt_flag,meta32148){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32148 = meta32148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32147.cljs$lang$type = true;
cljs.core.async.t32147.cljs$lang$ctorStr = "cljs.core.async/t32147";
cljs.core.async.t32147.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32147");
});
cljs.core.async.t32147.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t32147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t32147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32149){var self__ = this;
var _32149__$1 = this;return self__.meta32148;
});
cljs.core.async.t32147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32149,meta32148__$1){var self__ = this;
var _32149__$1 = this;return (new cljs.core.async.t32147(self__.flag,self__.alt_flag,meta32148__$1));
});
cljs.core.async.__GT_t32147 = (function __GT_t32147(flag__$1,alt_flag__$1,meta32148){return (new cljs.core.async.t32147(flag__$1,alt_flag__$1,meta32148));
});
}
return (new cljs.core.async.t32147(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t32153 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32153 = (function (cb,flag,alt_handler,meta32154){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32154 = meta32154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32153.cljs$lang$type = true;
cljs.core.async.t32153.cljs$lang$ctorStr = "cljs.core.async/t32153";
cljs.core.async.t32153.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32153");
});
cljs.core.async.t32153.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t32153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t32153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32155){var self__ = this;
var _32155__$1 = this;return self__.meta32154;
});
cljs.core.async.t32153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32155,meta32154__$1){var self__ = this;
var _32155__$1 = this;return (new cljs.core.async.t32153(self__.cb,self__.flag,self__.alt_handler,meta32154__$1));
});
cljs.core.async.__GT_t32153 = (function __GT_t32153(cb__$1,flag__$1,alt_handler__$1,meta32154){return (new cljs.core.async.t32153(cb__$1,flag__$1,alt_handler__$1,meta32154));
});
}
return (new cljs.core.async.t32153(cb,flag,alt_handler,null));
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
return (function (p1__32156_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32156_SHARP_,port], null));
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
var G__32157 = (i + 1);
i = G__32157;
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
var alts_BANG___delegate = function (ports,p__32158){var map__32160 = p__32158;var map__32160__$1 = ((cljs.core.seq_QMARK_.call(null,map__32160))?cljs.core.apply.call(null,cljs.core.hash_map,map__32160):map__32160);var opts = map__32160__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__32158 = null;if (arguments.length > 1) {
  p__32158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__32158);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32161){
var ports = cljs.core.first(arglist__32161);
var p__32158 = cljs.core.rest(arglist__32161);
return alts_BANG___delegate(ports,p__32158);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32169 = (function (ch,f,map_LT_,meta32170){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32170 = meta32170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32169.cljs$lang$type = true;
cljs.core.async.t32169.cljs$lang$ctorStr = "cljs.core.async/t32169";
cljs.core.async.t32169.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32169");
});
cljs.core.async.t32169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t32169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32172 = (function (fn1,_,meta32170,ch,f,map_LT_,meta32173){
this.fn1 = fn1;
this._ = _;
this.meta32170 = meta32170;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32173 = meta32173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32172.cljs$lang$type = true;
cljs.core.async.t32172.cljs$lang$ctorStr = "cljs.core.async/t32172";
cljs.core.async.t32172.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32172");
});
cljs.core.async.t32172.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t32172.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t32172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__32162_SHARP_){return f1.call(null,(((p1__32162_SHARP_ == null))?null:self__.f.call(null,p1__32162_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t32172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32174){var self__ = this;
var _32174__$1 = this;return self__.meta32173;
});
cljs.core.async.t32172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32174,meta32173__$1){var self__ = this;
var _32174__$1 = this;return (new cljs.core.async.t32172(self__.fn1,self__._,self__.meta32170,self__.ch,self__.f,self__.map_LT_,meta32173__$1));
});
cljs.core.async.__GT_t32172 = (function __GT_t32172(fn1__$1,___$2,meta32170__$1,ch__$2,f__$2,map_LT___$2,meta32173){return (new cljs.core.async.t32172(fn1__$1,___$2,meta32170__$1,ch__$2,f__$2,map_LT___$2,meta32173));
});
}
return (new cljs.core.async.t32172(fn1,___$1,self__.meta32170,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t32169.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32171){var self__ = this;
var _32171__$1 = this;return self__.meta32170;
});
cljs.core.async.t32169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32171,meta32170__$1){var self__ = this;
var _32171__$1 = this;return (new cljs.core.async.t32169(self__.ch,self__.f,self__.map_LT_,meta32170__$1));
});
cljs.core.async.__GT_t32169 = (function __GT_t32169(ch__$1,f__$1,map_LT___$1,meta32170){return (new cljs.core.async.t32169(ch__$1,f__$1,map_LT___$1,meta32170));
});
}
return (new cljs.core.async.t32169(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32178 = (function (ch,f,map_GT_,meta32179){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32179 = meta32179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32178.cljs$lang$type = true;
cljs.core.async.t32178.cljs$lang$ctorStr = "cljs.core.async/t32178";
cljs.core.async.t32178.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32178");
});
cljs.core.async.t32178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t32178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32178.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32180){var self__ = this;
var _32180__$1 = this;return self__.meta32179;
});
cljs.core.async.t32178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32180,meta32179__$1){var self__ = this;
var _32180__$1 = this;return (new cljs.core.async.t32178(self__.ch,self__.f,self__.map_GT_,meta32179__$1));
});
cljs.core.async.__GT_t32178 = (function __GT_t32178(ch__$1,f__$1,map_GT___$1,meta32179){return (new cljs.core.async.t32178(ch__$1,f__$1,map_GT___$1,meta32179));
});
}
return (new cljs.core.async.t32178(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32184 = (function (ch,p,filter_GT_,meta32185){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32185 = meta32185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32184.cljs$lang$type = true;
cljs.core.async.t32184.cljs$lang$ctorStr = "cljs.core.async/t32184";
cljs.core.async.t32184.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32184");
});
cljs.core.async.t32184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t32184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32184.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32186){var self__ = this;
var _32186__$1 = this;return self__.meta32185;
});
cljs.core.async.t32184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32186,meta32185__$1){var self__ = this;
var _32186__$1 = this;return (new cljs.core.async.t32184(self__.ch,self__.p,self__.filter_GT_,meta32185__$1));
});
cljs.core.async.__GT_t32184 = (function __GT_t32184(ch__$1,p__$1,filter_GT___$1,meta32185){return (new cljs.core.async.t32184(ch__$1,p__$1,filter_GT___$1,meta32185));
});
}
return (new cljs.core.async.t32184(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32248){var state_val_32249 = (state_32248[1]);if((state_val_32249 === 1))
{var state_32248__$1 = state_32248;var statearr_32250_32270 = state_32248__$1;(statearr_32250_32270[2] = null);
(statearr_32250_32270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32249 === 2))
{var state_32248__$1 = state_32248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32248__$1,4,ch);
} else
{if((state_val_32249 === 3))
{var inst_32246 = (state_32248[2]);var state_32248__$1 = state_32248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32248__$1,inst_32246);
} else
{if((state_val_32249 === 4))
{var inst_32230 = (state_32248[7]);var inst_32230__$1 = (state_32248[2]);var inst_32231 = (inst_32230__$1 == null);var state_32248__$1 = (function (){var statearr_32251 = state_32248;(statearr_32251[7] = inst_32230__$1);
return statearr_32251;
})();if(cljs.core.truth_(inst_32231))
{var statearr_32252_32271 = state_32248__$1;(statearr_32252_32271[1] = 5);
} else
{var statearr_32253_32272 = state_32248__$1;(statearr_32253_32272[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32249 === 5))
{var inst_32233 = cljs.core.async.close_BANG_.call(null,out);var state_32248__$1 = state_32248;var statearr_32254_32273 = state_32248__$1;(statearr_32254_32273[2] = inst_32233);
(statearr_32254_32273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32249 === 6))
{var inst_32230 = (state_32248[7]);var inst_32235 = p.call(null,inst_32230);var state_32248__$1 = state_32248;if(cljs.core.truth_(inst_32235))
{var statearr_32255_32274 = state_32248__$1;(statearr_32255_32274[1] = 8);
} else
{var statearr_32256_32275 = state_32248__$1;(statearr_32256_32275[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32249 === 7))
{var inst_32244 = (state_32248[2]);var state_32248__$1 = state_32248;var statearr_32257_32276 = state_32248__$1;(statearr_32257_32276[2] = inst_32244);
(statearr_32257_32276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32249 === 8))
{var inst_32230 = (state_32248[7]);var state_32248__$1 = state_32248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32248__$1,11,out,inst_32230);
} else
{if((state_val_32249 === 9))
{var state_32248__$1 = state_32248;var statearr_32258_32277 = state_32248__$1;(statearr_32258_32277[2] = null);
(statearr_32258_32277[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32249 === 10))
{var inst_32241 = (state_32248[2]);var state_32248__$1 = (function (){var statearr_32259 = state_32248;(statearr_32259[8] = inst_32241);
return statearr_32259;
})();var statearr_32260_32278 = state_32248__$1;(statearr_32260_32278[2] = null);
(statearr_32260_32278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32249 === 11))
{var inst_32238 = (state_32248[2]);var state_32248__$1 = state_32248;var statearr_32261_32279 = state_32248__$1;(statearr_32261_32279[2] = inst_32238);
(statearr_32261_32279[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_32265 = [null,null,null,null,null,null,null,null,null];(statearr_32265[0] = state_machine__5507__auto__);
(statearr_32265[1] = 1);
return statearr_32265;
});
var state_machine__5507__auto____1 = (function (state_32248){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32248);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32266){if((e32266 instanceof Object))
{var ex__5510__auto__ = e32266;var statearr_32267_32280 = state_32248;(statearr_32267_32280[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32248);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32281 = state_32248;
state_32248 = G__32281;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32248){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32268 = f__5522__auto__.call(null);(statearr_32268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32269);
return statearr_32268;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32433){var state_val_32434 = (state_32433[1]);if((state_val_32434 === 1))
{var state_32433__$1 = state_32433;var statearr_32435_32472 = state_32433__$1;(statearr_32435_32472[2] = null);
(statearr_32435_32472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 2))
{var state_32433__$1 = state_32433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32433__$1,4,in$);
} else
{if((state_val_32434 === 3))
{var inst_32431 = (state_32433[2]);var state_32433__$1 = state_32433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32433__$1,inst_32431);
} else
{if((state_val_32434 === 4))
{var inst_32379 = (state_32433[7]);var inst_32379__$1 = (state_32433[2]);var inst_32380 = (inst_32379__$1 == null);var state_32433__$1 = (function (){var statearr_32436 = state_32433;(statearr_32436[7] = inst_32379__$1);
return statearr_32436;
})();if(cljs.core.truth_(inst_32380))
{var statearr_32437_32473 = state_32433__$1;(statearr_32437_32473[1] = 5);
} else
{var statearr_32438_32474 = state_32433__$1;(statearr_32438_32474[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 5))
{var inst_32382 = cljs.core.async.close_BANG_.call(null,out);var state_32433__$1 = state_32433;var statearr_32439_32475 = state_32433__$1;(statearr_32439_32475[2] = inst_32382);
(statearr_32439_32475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 6))
{var inst_32379 = (state_32433[7]);var inst_32384 = f.call(null,inst_32379);var inst_32389 = cljs.core.seq.call(null,inst_32384);var inst_32390 = inst_32389;var inst_32391 = null;var inst_32392 = 0;var inst_32393 = 0;var state_32433__$1 = (function (){var statearr_32440 = state_32433;(statearr_32440[8] = inst_32392);
(statearr_32440[9] = inst_32393);
(statearr_32440[10] = inst_32391);
(statearr_32440[11] = inst_32390);
return statearr_32440;
})();var statearr_32441_32476 = state_32433__$1;(statearr_32441_32476[2] = null);
(statearr_32441_32476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 7))
{var inst_32429 = (state_32433[2]);var state_32433__$1 = state_32433;var statearr_32442_32477 = state_32433__$1;(statearr_32442_32477[2] = inst_32429);
(statearr_32442_32477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 8))
{var inst_32392 = (state_32433[8]);var inst_32393 = (state_32433[9]);var inst_32395 = (inst_32393 < inst_32392);var inst_32396 = inst_32395;var state_32433__$1 = state_32433;if(cljs.core.truth_(inst_32396))
{var statearr_32443_32478 = state_32433__$1;(statearr_32443_32478[1] = 10);
} else
{var statearr_32444_32479 = state_32433__$1;(statearr_32444_32479[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 9))
{var inst_32426 = (state_32433[2]);var state_32433__$1 = (function (){var statearr_32445 = state_32433;(statearr_32445[12] = inst_32426);
return statearr_32445;
})();var statearr_32446_32480 = state_32433__$1;(statearr_32446_32480[2] = null);
(statearr_32446_32480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 10))
{var inst_32393 = (state_32433[9]);var inst_32391 = (state_32433[10]);var inst_32398 = cljs.core._nth.call(null,inst_32391,inst_32393);var state_32433__$1 = state_32433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32433__$1,13,out,inst_32398);
} else
{if((state_val_32434 === 11))
{var inst_32404 = (state_32433[13]);var inst_32390 = (state_32433[11]);var inst_32404__$1 = cljs.core.seq.call(null,inst_32390);var state_32433__$1 = (function (){var statearr_32450 = state_32433;(statearr_32450[13] = inst_32404__$1);
return statearr_32450;
})();if(inst_32404__$1)
{var statearr_32451_32481 = state_32433__$1;(statearr_32451_32481[1] = 14);
} else
{var statearr_32452_32482 = state_32433__$1;(statearr_32452_32482[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 12))
{var inst_32424 = (state_32433[2]);var state_32433__$1 = state_32433;var statearr_32453_32483 = state_32433__$1;(statearr_32453_32483[2] = inst_32424);
(statearr_32453_32483[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 13))
{var inst_32392 = (state_32433[8]);var inst_32393 = (state_32433[9]);var inst_32391 = (state_32433[10]);var inst_32390 = (state_32433[11]);var inst_32400 = (state_32433[2]);var inst_32401 = (inst_32393 + 1);var tmp32447 = inst_32392;var tmp32448 = inst_32391;var tmp32449 = inst_32390;var inst_32390__$1 = tmp32449;var inst_32391__$1 = tmp32448;var inst_32392__$1 = tmp32447;var inst_32393__$1 = inst_32401;var state_32433__$1 = (function (){var statearr_32454 = state_32433;(statearr_32454[8] = inst_32392__$1);
(statearr_32454[9] = inst_32393__$1);
(statearr_32454[10] = inst_32391__$1);
(statearr_32454[11] = inst_32390__$1);
(statearr_32454[14] = inst_32400);
return statearr_32454;
})();var statearr_32455_32484 = state_32433__$1;(statearr_32455_32484[2] = null);
(statearr_32455_32484[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 14))
{var inst_32404 = (state_32433[13]);var inst_32406 = cljs.core.chunked_seq_QMARK_.call(null,inst_32404);var state_32433__$1 = state_32433;if(inst_32406)
{var statearr_32456_32485 = state_32433__$1;(statearr_32456_32485[1] = 17);
} else
{var statearr_32457_32486 = state_32433__$1;(statearr_32457_32486[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 15))
{var state_32433__$1 = state_32433;var statearr_32458_32487 = state_32433__$1;(statearr_32458_32487[2] = null);
(statearr_32458_32487[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 16))
{var inst_32422 = (state_32433[2]);var state_32433__$1 = state_32433;var statearr_32459_32488 = state_32433__$1;(statearr_32459_32488[2] = inst_32422);
(statearr_32459_32488[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 17))
{var inst_32404 = (state_32433[13]);var inst_32408 = cljs.core.chunk_first.call(null,inst_32404);var inst_32409 = cljs.core.chunk_rest.call(null,inst_32404);var inst_32410 = cljs.core.count.call(null,inst_32408);var inst_32390 = inst_32409;var inst_32391 = inst_32408;var inst_32392 = inst_32410;var inst_32393 = 0;var state_32433__$1 = (function (){var statearr_32460 = state_32433;(statearr_32460[8] = inst_32392);
(statearr_32460[9] = inst_32393);
(statearr_32460[10] = inst_32391);
(statearr_32460[11] = inst_32390);
return statearr_32460;
})();var statearr_32461_32489 = state_32433__$1;(statearr_32461_32489[2] = null);
(statearr_32461_32489[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 18))
{var inst_32404 = (state_32433[13]);var inst_32413 = cljs.core.first.call(null,inst_32404);var state_32433__$1 = state_32433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32433__$1,20,out,inst_32413);
} else
{if((state_val_32434 === 19))
{var inst_32419 = (state_32433[2]);var state_32433__$1 = state_32433;var statearr_32462_32490 = state_32433__$1;(statearr_32462_32490[2] = inst_32419);
(statearr_32462_32490[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32434 === 20))
{var inst_32404 = (state_32433[13]);var inst_32415 = (state_32433[2]);var inst_32416 = cljs.core.next.call(null,inst_32404);var inst_32390 = inst_32416;var inst_32391 = null;var inst_32392 = 0;var inst_32393 = 0;var state_32433__$1 = (function (){var statearr_32463 = state_32433;(statearr_32463[8] = inst_32392);
(statearr_32463[9] = inst_32393);
(statearr_32463[10] = inst_32391);
(statearr_32463[11] = inst_32390);
(statearr_32463[15] = inst_32415);
return statearr_32463;
})();var statearr_32464_32491 = state_32433__$1;(statearr_32464_32491[2] = null);
(statearr_32464_32491[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_32468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32468[0] = state_machine__5507__auto__);
(statearr_32468[1] = 1);
return statearr_32468;
});
var state_machine__5507__auto____1 = (function (state_32433){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32469){if((e32469 instanceof Object))
{var ex__5510__auto__ = e32469;var statearr_32470_32492 = state_32433;(statearr_32470_32492[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32493 = state_32433;
state_32433 = G__32493;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32433){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32471 = f__5522__auto__.call(null);(statearr_32471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32471;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___32574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32553){var state_val_32554 = (state_32553[1]);if((state_val_32554 === 1))
{var state_32553__$1 = state_32553;var statearr_32555_32575 = state_32553__$1;(statearr_32555_32575[2] = null);
(statearr_32555_32575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32554 === 2))
{var state_32553__$1 = state_32553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32553__$1,4,from);
} else
{if((state_val_32554 === 3))
{var inst_32551 = (state_32553[2]);var state_32553__$1 = state_32553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32553__$1,inst_32551);
} else
{if((state_val_32554 === 4))
{var inst_32536 = (state_32553[7]);var inst_32536__$1 = (state_32553[2]);var inst_32537 = (inst_32536__$1 == null);var state_32553__$1 = (function (){var statearr_32556 = state_32553;(statearr_32556[7] = inst_32536__$1);
return statearr_32556;
})();if(cljs.core.truth_(inst_32537))
{var statearr_32557_32576 = state_32553__$1;(statearr_32557_32576[1] = 5);
} else
{var statearr_32558_32577 = state_32553__$1;(statearr_32558_32577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32554 === 5))
{var state_32553__$1 = state_32553;if(cljs.core.truth_(close_QMARK_))
{var statearr_32559_32578 = state_32553__$1;(statearr_32559_32578[1] = 8);
} else
{var statearr_32560_32579 = state_32553__$1;(statearr_32560_32579[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32554 === 6))
{var inst_32536 = (state_32553[7]);var state_32553__$1 = state_32553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32553__$1,11,to,inst_32536);
} else
{if((state_val_32554 === 7))
{var inst_32549 = (state_32553[2]);var state_32553__$1 = state_32553;var statearr_32561_32580 = state_32553__$1;(statearr_32561_32580[2] = inst_32549);
(statearr_32561_32580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32554 === 8))
{var inst_32540 = cljs.core.async.close_BANG_.call(null,to);var state_32553__$1 = state_32553;var statearr_32562_32581 = state_32553__$1;(statearr_32562_32581[2] = inst_32540);
(statearr_32562_32581[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32554 === 9))
{var state_32553__$1 = state_32553;var statearr_32563_32582 = state_32553__$1;(statearr_32563_32582[2] = null);
(statearr_32563_32582[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32554 === 10))
{var inst_32543 = (state_32553[2]);var state_32553__$1 = state_32553;var statearr_32564_32583 = state_32553__$1;(statearr_32564_32583[2] = inst_32543);
(statearr_32564_32583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32554 === 11))
{var inst_32546 = (state_32553[2]);var state_32553__$1 = (function (){var statearr_32565 = state_32553;(statearr_32565[8] = inst_32546);
return statearr_32565;
})();var statearr_32566_32584 = state_32553__$1;(statearr_32566_32584[2] = null);
(statearr_32566_32584[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32570 = [null,null,null,null,null,null,null,null,null];(statearr_32570[0] = state_machine__5507__auto__);
(statearr_32570[1] = 1);
return statearr_32570;
});
var state_machine__5507__auto____1 = (function (state_32553){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32571){if((e32571 instanceof Object))
{var ex__5510__auto__ = e32571;var statearr_32572_32585 = state_32553;(statearr_32572_32585[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32586 = state_32553;
state_32553 = G__32586;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32573 = f__5522__auto__.call(null);(statearr_32573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32574);
return statearr_32573;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___32673 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32651){var state_val_32652 = (state_32651[1]);if((state_val_32652 === 1))
{var state_32651__$1 = state_32651;var statearr_32653_32674 = state_32651__$1;(statearr_32653_32674[2] = null);
(statearr_32653_32674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 2))
{var state_32651__$1 = state_32651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32651__$1,4,ch);
} else
{if((state_val_32652 === 3))
{var inst_32649 = (state_32651[2]);var state_32651__$1 = state_32651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32651__$1,inst_32649);
} else
{if((state_val_32652 === 4))
{var inst_32632 = (state_32651[7]);var inst_32632__$1 = (state_32651[2]);var inst_32633 = (inst_32632__$1 == null);var state_32651__$1 = (function (){var statearr_32654 = state_32651;(statearr_32654[7] = inst_32632__$1);
return statearr_32654;
})();if(cljs.core.truth_(inst_32633))
{var statearr_32655_32675 = state_32651__$1;(statearr_32655_32675[1] = 5);
} else
{var statearr_32656_32676 = state_32651__$1;(statearr_32656_32676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 5))
{var inst_32635 = cljs.core.async.close_BANG_.call(null,tc);var inst_32636 = cljs.core.async.close_BANG_.call(null,fc);var state_32651__$1 = (function (){var statearr_32657 = state_32651;(statearr_32657[8] = inst_32635);
return statearr_32657;
})();var statearr_32658_32677 = state_32651__$1;(statearr_32658_32677[2] = inst_32636);
(statearr_32658_32677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 6))
{var inst_32632 = (state_32651[7]);var inst_32638 = p.call(null,inst_32632);var state_32651__$1 = state_32651;if(cljs.core.truth_(inst_32638))
{var statearr_32659_32678 = state_32651__$1;(statearr_32659_32678[1] = 9);
} else
{var statearr_32660_32679 = state_32651__$1;(statearr_32660_32679[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 7))
{var inst_32647 = (state_32651[2]);var state_32651__$1 = state_32651;var statearr_32661_32680 = state_32651__$1;(statearr_32661_32680[2] = inst_32647);
(statearr_32661_32680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 8))
{var inst_32644 = (state_32651[2]);var state_32651__$1 = (function (){var statearr_32662 = state_32651;(statearr_32662[9] = inst_32644);
return statearr_32662;
})();var statearr_32663_32681 = state_32651__$1;(statearr_32663_32681[2] = null);
(statearr_32663_32681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 9))
{var state_32651__$1 = state_32651;var statearr_32664_32682 = state_32651__$1;(statearr_32664_32682[2] = tc);
(statearr_32664_32682[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 10))
{var state_32651__$1 = state_32651;var statearr_32665_32683 = state_32651__$1;(statearr_32665_32683[2] = fc);
(statearr_32665_32683[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32652 === 11))
{var inst_32632 = (state_32651[7]);var inst_32642 = (state_32651[2]);var state_32651__$1 = state_32651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32651__$1,8,inst_32642,inst_32632);
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
var state_machine__5507__auto____0 = (function (){var statearr_32669 = [null,null,null,null,null,null,null,null,null,null];(statearr_32669[0] = state_machine__5507__auto__);
(statearr_32669[1] = 1);
return statearr_32669;
});
var state_machine__5507__auto____1 = (function (state_32651){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32651);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32670){if((e32670 instanceof Object))
{var ex__5510__auto__ = e32670;var statearr_32671_32684 = state_32651;(statearr_32671_32684[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32651);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32685 = state_32651;
state_32651 = G__32685;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32651){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32672 = f__5522__auto__.call(null);(statearr_32672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32673);
return statearr_32672;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32732){var state_val_32733 = (state_32732[1]);if((state_val_32733 === 7))
{var inst_32728 = (state_32732[2]);var state_32732__$1 = state_32732;var statearr_32734_32750 = state_32732__$1;(statearr_32734_32750[2] = inst_32728);
(statearr_32734_32750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32733 === 6))
{var inst_32718 = (state_32732[7]);var inst_32721 = (state_32732[8]);var inst_32725 = f.call(null,inst_32718,inst_32721);var inst_32718__$1 = inst_32725;var state_32732__$1 = (function (){var statearr_32735 = state_32732;(statearr_32735[7] = inst_32718__$1);
return statearr_32735;
})();var statearr_32736_32751 = state_32732__$1;(statearr_32736_32751[2] = null);
(statearr_32736_32751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32733 === 5))
{var inst_32718 = (state_32732[7]);var state_32732__$1 = state_32732;var statearr_32737_32752 = state_32732__$1;(statearr_32737_32752[2] = inst_32718);
(statearr_32737_32752[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32733 === 4))
{var inst_32721 = (state_32732[8]);var inst_32721__$1 = (state_32732[2]);var inst_32722 = (inst_32721__$1 == null);var state_32732__$1 = (function (){var statearr_32738 = state_32732;(statearr_32738[8] = inst_32721__$1);
return statearr_32738;
})();if(cljs.core.truth_(inst_32722))
{var statearr_32739_32753 = state_32732__$1;(statearr_32739_32753[1] = 5);
} else
{var statearr_32740_32754 = state_32732__$1;(statearr_32740_32754[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32733 === 3))
{var inst_32730 = (state_32732[2]);var state_32732__$1 = state_32732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32732__$1,inst_32730);
} else
{if((state_val_32733 === 2))
{var state_32732__$1 = state_32732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32732__$1,4,ch);
} else
{if((state_val_32733 === 1))
{var inst_32718 = init;var state_32732__$1 = (function (){var statearr_32741 = state_32732;(statearr_32741[7] = inst_32718);
return statearr_32741;
})();var statearr_32742_32755 = state_32732__$1;(statearr_32742_32755[2] = null);
(statearr_32742_32755[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32746 = [null,null,null,null,null,null,null,null,null];(statearr_32746[0] = state_machine__5507__auto__);
(statearr_32746[1] = 1);
return statearr_32746;
});
var state_machine__5507__auto____1 = (function (state_32732){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32732);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32747){if((e32747 instanceof Object))
{var ex__5510__auto__ = e32747;var statearr_32748_32756 = state_32732;(statearr_32748_32756[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32732);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32757 = state_32732;
state_32732 = G__32757;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32732){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32749 = f__5522__auto__.call(null);(statearr_32749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32749;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32819){var state_val_32820 = (state_32819[1]);if((state_val_32820 === 1))
{var inst_32799 = cljs.core.seq.call(null,coll);var inst_32800 = inst_32799;var state_32819__$1 = (function (){var statearr_32821 = state_32819;(statearr_32821[7] = inst_32800);
return statearr_32821;
})();var statearr_32822_32840 = state_32819__$1;(statearr_32822_32840[2] = null);
(statearr_32822_32840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32820 === 2))
{var inst_32800 = (state_32819[7]);var state_32819__$1 = state_32819;if(cljs.core.truth_(inst_32800))
{var statearr_32823_32841 = state_32819__$1;(statearr_32823_32841[1] = 4);
} else
{var statearr_32824_32842 = state_32819__$1;(statearr_32824_32842[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32820 === 3))
{var inst_32817 = (state_32819[2]);var state_32819__$1 = state_32819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32819__$1,inst_32817);
} else
{if((state_val_32820 === 4))
{var inst_32800 = (state_32819[7]);var inst_32803 = cljs.core.first.call(null,inst_32800);var state_32819__$1 = state_32819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32819__$1,7,ch,inst_32803);
} else
{if((state_val_32820 === 5))
{var state_32819__$1 = state_32819;if(cljs.core.truth_(close_QMARK_))
{var statearr_32825_32843 = state_32819__$1;(statearr_32825_32843[1] = 8);
} else
{var statearr_32826_32844 = state_32819__$1;(statearr_32826_32844[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32820 === 6))
{var inst_32815 = (state_32819[2]);var state_32819__$1 = state_32819;var statearr_32827_32845 = state_32819__$1;(statearr_32827_32845[2] = inst_32815);
(statearr_32827_32845[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32820 === 7))
{var inst_32800 = (state_32819[7]);var inst_32805 = (state_32819[2]);var inst_32806 = cljs.core.next.call(null,inst_32800);var inst_32800__$1 = inst_32806;var state_32819__$1 = (function (){var statearr_32828 = state_32819;(statearr_32828[7] = inst_32800__$1);
(statearr_32828[8] = inst_32805);
return statearr_32828;
})();var statearr_32829_32846 = state_32819__$1;(statearr_32829_32846[2] = null);
(statearr_32829_32846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32820 === 8))
{var inst_32810 = cljs.core.async.close_BANG_.call(null,ch);var state_32819__$1 = state_32819;var statearr_32830_32847 = state_32819__$1;(statearr_32830_32847[2] = inst_32810);
(statearr_32830_32847[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32820 === 9))
{var state_32819__$1 = state_32819;var statearr_32831_32848 = state_32819__$1;(statearr_32831_32848[2] = null);
(statearr_32831_32848[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32820 === 10))
{var inst_32813 = (state_32819[2]);var state_32819__$1 = state_32819;var statearr_32832_32849 = state_32819__$1;(statearr_32832_32849[2] = inst_32813);
(statearr_32832_32849[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_32836 = [null,null,null,null,null,null,null,null,null];(statearr_32836[0] = state_machine__5507__auto__);
(statearr_32836[1] = 1);
return statearr_32836;
});
var state_machine__5507__auto____1 = (function (state_32819){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32819);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32837){if((e32837 instanceof Object))
{var ex__5510__auto__ = e32837;var statearr_32838_32850 = state_32819;(statearr_32838_32850[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32819);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32851 = state_32819;
state_32819 = G__32851;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32819){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32839 = f__5522__auto__.call(null);(statearr_32839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32839;
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
cljs.core.async.Mux = (function (){var obj32853 = {};return obj32853;
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
cljs.core.async.Mult = (function (){var obj32855 = {};return obj32855;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33079 = (function (cs,ch,mult,meta33080){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33080 = meta33080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33079.cljs$lang$type = true;
cljs.core.async.t33079.cljs$lang$ctorStr = "cljs.core.async/t33079";
cljs.core.async.t33079.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33079");
});})(cs))
;
cljs.core.async.t33079.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33079.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33079.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33079.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33079.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33081){var self__ = this;
var _33081__$1 = this;return self__.meta33080;
});})(cs))
;
cljs.core.async.t33079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33081,meta33080__$1){var self__ = this;
var _33081__$1 = this;return (new cljs.core.async.t33079(self__.cs,self__.ch,self__.mult,meta33080__$1));
});})(cs))
;
cljs.core.async.__GT_t33079 = ((function (cs){
return (function __GT_t33079(cs__$1,ch__$1,mult__$1,meta33080){return (new cljs.core.async.t33079(cs__$1,ch__$1,mult__$1,meta33080));
});})(cs))
;
}
return (new cljs.core.async.t33079(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___33302 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33216){var state_val_33217 = (state_33216[1]);if((state_val_33217 === 32))
{var inst_33084 = (state_33216[7]);var inst_33160 = (state_33216[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33216,31,Object,null,30);var inst_33167 = cljs.core.async.put_BANG_.call(null,inst_33160,inst_33084,done);var state_33216__$1 = state_33216;var statearr_33218_33303 = state_33216__$1;(statearr_33218_33303[2] = inst_33167);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33216__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 1))
{var state_33216__$1 = state_33216;var statearr_33219_33304 = state_33216__$1;(statearr_33219_33304[2] = null);
(statearr_33219_33304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 33))
{var inst_33173 = (state_33216[9]);var inst_33175 = cljs.core.chunked_seq_QMARK_.call(null,inst_33173);var state_33216__$1 = state_33216;if(inst_33175)
{var statearr_33220_33305 = state_33216__$1;(statearr_33220_33305[1] = 36);
} else
{var statearr_33221_33306 = state_33216__$1;(statearr_33221_33306[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 2))
{var state_33216__$1 = state_33216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33216__$1,4,ch);
} else
{if((state_val_33217 === 34))
{var state_33216__$1 = state_33216;var statearr_33222_33307 = state_33216__$1;(statearr_33222_33307[2] = null);
(statearr_33222_33307[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 3))
{var inst_33214 = (state_33216[2]);var state_33216__$1 = state_33216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33216__$1,inst_33214);
} else
{if((state_val_33217 === 35))
{var inst_33198 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33223_33308 = state_33216__$1;(statearr_33223_33308[2] = inst_33198);
(statearr_33223_33308[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 4))
{var inst_33084 = (state_33216[7]);var inst_33084__$1 = (state_33216[2]);var inst_33085 = (inst_33084__$1 == null);var state_33216__$1 = (function (){var statearr_33224 = state_33216;(statearr_33224[7] = inst_33084__$1);
return statearr_33224;
})();if(cljs.core.truth_(inst_33085))
{var statearr_33225_33309 = state_33216__$1;(statearr_33225_33309[1] = 5);
} else
{var statearr_33226_33310 = state_33216__$1;(statearr_33226_33310[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 36))
{var inst_33173 = (state_33216[9]);var inst_33177 = cljs.core.chunk_first.call(null,inst_33173);var inst_33178 = cljs.core.chunk_rest.call(null,inst_33173);var inst_33179 = cljs.core.count.call(null,inst_33177);var inst_33152 = inst_33178;var inst_33153 = inst_33177;var inst_33154 = inst_33179;var inst_33155 = 0;var state_33216__$1 = (function (){var statearr_33227 = state_33216;(statearr_33227[10] = inst_33153);
(statearr_33227[11] = inst_33154);
(statearr_33227[12] = inst_33152);
(statearr_33227[13] = inst_33155);
return statearr_33227;
})();var statearr_33228_33311 = state_33216__$1;(statearr_33228_33311[2] = null);
(statearr_33228_33311[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 5))
{var inst_33091 = cljs.core.deref.call(null,cs);var inst_33092 = cljs.core.seq.call(null,inst_33091);var inst_33093 = inst_33092;var inst_33094 = null;var inst_33095 = 0;var inst_33096 = 0;var state_33216__$1 = (function (){var statearr_33229 = state_33216;(statearr_33229[14] = inst_33096);
(statearr_33229[15] = inst_33093);
(statearr_33229[16] = inst_33095);
(statearr_33229[17] = inst_33094);
return statearr_33229;
})();var statearr_33230_33312 = state_33216__$1;(statearr_33230_33312[2] = null);
(statearr_33230_33312[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 37))
{var inst_33173 = (state_33216[9]);var inst_33182 = cljs.core.first.call(null,inst_33173);var state_33216__$1 = (function (){var statearr_33231 = state_33216;(statearr_33231[18] = inst_33182);
return statearr_33231;
})();var statearr_33232_33313 = state_33216__$1;(statearr_33232_33313[2] = null);
(statearr_33232_33313[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 6))
{var inst_33144 = (state_33216[19]);var inst_33143 = cljs.core.deref.call(null,cs);var inst_33144__$1 = cljs.core.keys.call(null,inst_33143);var inst_33145 = cljs.core.count.call(null,inst_33144__$1);var inst_33146 = cljs.core.reset_BANG_.call(null,dctr,inst_33145);var inst_33151 = cljs.core.seq.call(null,inst_33144__$1);var inst_33152 = inst_33151;var inst_33153 = null;var inst_33154 = 0;var inst_33155 = 0;var state_33216__$1 = (function (){var statearr_33233 = state_33216;(statearr_33233[10] = inst_33153);
(statearr_33233[11] = inst_33154);
(statearr_33233[12] = inst_33152);
(statearr_33233[13] = inst_33155);
(statearr_33233[20] = inst_33146);
(statearr_33233[19] = inst_33144__$1);
return statearr_33233;
})();var statearr_33234_33314 = state_33216__$1;(statearr_33234_33314[2] = null);
(statearr_33234_33314[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 38))
{var inst_33195 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33235_33315 = state_33216__$1;(statearr_33235_33315[2] = inst_33195);
(statearr_33235_33315[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 7))
{var inst_33212 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33236_33316 = state_33216__$1;(statearr_33236_33316[2] = inst_33212);
(statearr_33236_33316[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 39))
{var inst_33173 = (state_33216[9]);var inst_33191 = (state_33216[2]);var inst_33192 = cljs.core.next.call(null,inst_33173);var inst_33152 = inst_33192;var inst_33153 = null;var inst_33154 = 0;var inst_33155 = 0;var state_33216__$1 = (function (){var statearr_33237 = state_33216;(statearr_33237[10] = inst_33153);
(statearr_33237[11] = inst_33154);
(statearr_33237[12] = inst_33152);
(statearr_33237[21] = inst_33191);
(statearr_33237[13] = inst_33155);
return statearr_33237;
})();var statearr_33238_33317 = state_33216__$1;(statearr_33238_33317[2] = null);
(statearr_33238_33317[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 8))
{var inst_33096 = (state_33216[14]);var inst_33095 = (state_33216[16]);var inst_33098 = (inst_33096 < inst_33095);var inst_33099 = inst_33098;var state_33216__$1 = state_33216;if(cljs.core.truth_(inst_33099))
{var statearr_33239_33318 = state_33216__$1;(statearr_33239_33318[1] = 10);
} else
{var statearr_33240_33319 = state_33216__$1;(statearr_33240_33319[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 40))
{var inst_33182 = (state_33216[18]);var inst_33183 = (state_33216[2]);var inst_33184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33185 = cljs.core.async.untap_STAR_.call(null,m,inst_33182);var state_33216__$1 = (function (){var statearr_33241 = state_33216;(statearr_33241[22] = inst_33184);
(statearr_33241[23] = inst_33183);
return statearr_33241;
})();var statearr_33242_33320 = state_33216__$1;(statearr_33242_33320[2] = inst_33185);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33216__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 9))
{var inst_33141 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33243_33321 = state_33216__$1;(statearr_33243_33321[2] = inst_33141);
(statearr_33243_33321[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 41))
{var inst_33084 = (state_33216[7]);var inst_33182 = (state_33216[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33216,40,Object,null,39);var inst_33189 = cljs.core.async.put_BANG_.call(null,inst_33182,inst_33084,done);var state_33216__$1 = state_33216;var statearr_33244_33322 = state_33216__$1;(statearr_33244_33322[2] = inst_33189);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33216__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 10))
{var inst_33096 = (state_33216[14]);var inst_33094 = (state_33216[17]);var inst_33102 = cljs.core._nth.call(null,inst_33094,inst_33096);var inst_33103 = cljs.core.nth.call(null,inst_33102,0,null);var inst_33104 = cljs.core.nth.call(null,inst_33102,1,null);var state_33216__$1 = (function (){var statearr_33245 = state_33216;(statearr_33245[24] = inst_33103);
return statearr_33245;
})();if(cljs.core.truth_(inst_33104))
{var statearr_33246_33323 = state_33216__$1;(statearr_33246_33323[1] = 13);
} else
{var statearr_33247_33324 = state_33216__$1;(statearr_33247_33324[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 42))
{var state_33216__$1 = state_33216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33216__$1,45,dchan);
} else
{if((state_val_33217 === 11))
{var inst_33113 = (state_33216[25]);var inst_33093 = (state_33216[15]);var inst_33113__$1 = cljs.core.seq.call(null,inst_33093);var state_33216__$1 = (function (){var statearr_33248 = state_33216;(statearr_33248[25] = inst_33113__$1);
return statearr_33248;
})();if(inst_33113__$1)
{var statearr_33249_33325 = state_33216__$1;(statearr_33249_33325[1] = 16);
} else
{var statearr_33250_33326 = state_33216__$1;(statearr_33250_33326[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 43))
{var state_33216__$1 = state_33216;var statearr_33251_33327 = state_33216__$1;(statearr_33251_33327[2] = null);
(statearr_33251_33327[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 12))
{var inst_33139 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33252_33328 = state_33216__$1;(statearr_33252_33328[2] = inst_33139);
(statearr_33252_33328[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 44))
{var inst_33209 = (state_33216[2]);var state_33216__$1 = (function (){var statearr_33253 = state_33216;(statearr_33253[26] = inst_33209);
return statearr_33253;
})();var statearr_33254_33329 = state_33216__$1;(statearr_33254_33329[2] = null);
(statearr_33254_33329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 13))
{var inst_33103 = (state_33216[24]);var inst_33106 = cljs.core.async.close_BANG_.call(null,inst_33103);var state_33216__$1 = state_33216;var statearr_33255_33330 = state_33216__$1;(statearr_33255_33330[2] = inst_33106);
(statearr_33255_33330[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 45))
{var inst_33206 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33259_33331 = state_33216__$1;(statearr_33259_33331[2] = inst_33206);
(statearr_33259_33331[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 14))
{var state_33216__$1 = state_33216;var statearr_33260_33332 = state_33216__$1;(statearr_33260_33332[2] = null);
(statearr_33260_33332[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 15))
{var inst_33096 = (state_33216[14]);var inst_33093 = (state_33216[15]);var inst_33095 = (state_33216[16]);var inst_33094 = (state_33216[17]);var inst_33109 = (state_33216[2]);var inst_33110 = (inst_33096 + 1);var tmp33256 = inst_33093;var tmp33257 = inst_33095;var tmp33258 = inst_33094;var inst_33093__$1 = tmp33256;var inst_33094__$1 = tmp33258;var inst_33095__$1 = tmp33257;var inst_33096__$1 = inst_33110;var state_33216__$1 = (function (){var statearr_33261 = state_33216;(statearr_33261[27] = inst_33109);
(statearr_33261[14] = inst_33096__$1);
(statearr_33261[15] = inst_33093__$1);
(statearr_33261[16] = inst_33095__$1);
(statearr_33261[17] = inst_33094__$1);
return statearr_33261;
})();var statearr_33262_33333 = state_33216__$1;(statearr_33262_33333[2] = null);
(statearr_33262_33333[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 16))
{var inst_33113 = (state_33216[25]);var inst_33115 = cljs.core.chunked_seq_QMARK_.call(null,inst_33113);var state_33216__$1 = state_33216;if(inst_33115)
{var statearr_33263_33334 = state_33216__$1;(statearr_33263_33334[1] = 19);
} else
{var statearr_33264_33335 = state_33216__$1;(statearr_33264_33335[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 17))
{var state_33216__$1 = state_33216;var statearr_33265_33336 = state_33216__$1;(statearr_33265_33336[2] = null);
(statearr_33265_33336[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 18))
{var inst_33137 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33266_33337 = state_33216__$1;(statearr_33266_33337[2] = inst_33137);
(statearr_33266_33337[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 19))
{var inst_33113 = (state_33216[25]);var inst_33117 = cljs.core.chunk_first.call(null,inst_33113);var inst_33118 = cljs.core.chunk_rest.call(null,inst_33113);var inst_33119 = cljs.core.count.call(null,inst_33117);var inst_33093 = inst_33118;var inst_33094 = inst_33117;var inst_33095 = inst_33119;var inst_33096 = 0;var state_33216__$1 = (function (){var statearr_33267 = state_33216;(statearr_33267[14] = inst_33096);
(statearr_33267[15] = inst_33093);
(statearr_33267[16] = inst_33095);
(statearr_33267[17] = inst_33094);
return statearr_33267;
})();var statearr_33268_33338 = state_33216__$1;(statearr_33268_33338[2] = null);
(statearr_33268_33338[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 20))
{var inst_33113 = (state_33216[25]);var inst_33123 = cljs.core.first.call(null,inst_33113);var inst_33124 = cljs.core.nth.call(null,inst_33123,0,null);var inst_33125 = cljs.core.nth.call(null,inst_33123,1,null);var state_33216__$1 = (function (){var statearr_33269 = state_33216;(statearr_33269[28] = inst_33124);
return statearr_33269;
})();if(cljs.core.truth_(inst_33125))
{var statearr_33270_33339 = state_33216__$1;(statearr_33270_33339[1] = 22);
} else
{var statearr_33271_33340 = state_33216__$1;(statearr_33271_33340[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 21))
{var inst_33134 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33272_33341 = state_33216__$1;(statearr_33272_33341[2] = inst_33134);
(statearr_33272_33341[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 22))
{var inst_33124 = (state_33216[28]);var inst_33127 = cljs.core.async.close_BANG_.call(null,inst_33124);var state_33216__$1 = state_33216;var statearr_33273_33342 = state_33216__$1;(statearr_33273_33342[2] = inst_33127);
(statearr_33273_33342[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 23))
{var state_33216__$1 = state_33216;var statearr_33274_33343 = state_33216__$1;(statearr_33274_33343[2] = null);
(statearr_33274_33343[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 24))
{var inst_33113 = (state_33216[25]);var inst_33130 = (state_33216[2]);var inst_33131 = cljs.core.next.call(null,inst_33113);var inst_33093 = inst_33131;var inst_33094 = null;var inst_33095 = 0;var inst_33096 = 0;var state_33216__$1 = (function (){var statearr_33275 = state_33216;(statearr_33275[14] = inst_33096);
(statearr_33275[29] = inst_33130);
(statearr_33275[15] = inst_33093);
(statearr_33275[16] = inst_33095);
(statearr_33275[17] = inst_33094);
return statearr_33275;
})();var statearr_33276_33344 = state_33216__$1;(statearr_33276_33344[2] = null);
(statearr_33276_33344[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 25))
{var inst_33154 = (state_33216[11]);var inst_33155 = (state_33216[13]);var inst_33157 = (inst_33155 < inst_33154);var inst_33158 = inst_33157;var state_33216__$1 = state_33216;if(cljs.core.truth_(inst_33158))
{var statearr_33277_33345 = state_33216__$1;(statearr_33277_33345[1] = 27);
} else
{var statearr_33278_33346 = state_33216__$1;(statearr_33278_33346[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 26))
{var inst_33144 = (state_33216[19]);var inst_33202 = (state_33216[2]);var inst_33203 = cljs.core.seq.call(null,inst_33144);var state_33216__$1 = (function (){var statearr_33279 = state_33216;(statearr_33279[30] = inst_33202);
return statearr_33279;
})();if(inst_33203)
{var statearr_33280_33347 = state_33216__$1;(statearr_33280_33347[1] = 42);
} else
{var statearr_33281_33348 = state_33216__$1;(statearr_33281_33348[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 27))
{var inst_33153 = (state_33216[10]);var inst_33155 = (state_33216[13]);var inst_33160 = cljs.core._nth.call(null,inst_33153,inst_33155);var state_33216__$1 = (function (){var statearr_33282 = state_33216;(statearr_33282[8] = inst_33160);
return statearr_33282;
})();var statearr_33283_33349 = state_33216__$1;(statearr_33283_33349[2] = null);
(statearr_33283_33349[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 28))
{var inst_33152 = (state_33216[12]);var inst_33173 = (state_33216[9]);var inst_33173__$1 = cljs.core.seq.call(null,inst_33152);var state_33216__$1 = (function (){var statearr_33287 = state_33216;(statearr_33287[9] = inst_33173__$1);
return statearr_33287;
})();if(inst_33173__$1)
{var statearr_33288_33350 = state_33216__$1;(statearr_33288_33350[1] = 33);
} else
{var statearr_33289_33351 = state_33216__$1;(statearr_33289_33351[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 29))
{var inst_33200 = (state_33216[2]);var state_33216__$1 = state_33216;var statearr_33290_33352 = state_33216__$1;(statearr_33290_33352[2] = inst_33200);
(statearr_33290_33352[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 30))
{var inst_33153 = (state_33216[10]);var inst_33154 = (state_33216[11]);var inst_33152 = (state_33216[12]);var inst_33155 = (state_33216[13]);var inst_33169 = (state_33216[2]);var inst_33170 = (inst_33155 + 1);var tmp33284 = inst_33153;var tmp33285 = inst_33154;var tmp33286 = inst_33152;var inst_33152__$1 = tmp33286;var inst_33153__$1 = tmp33284;var inst_33154__$1 = tmp33285;var inst_33155__$1 = inst_33170;var state_33216__$1 = (function (){var statearr_33291 = state_33216;(statearr_33291[10] = inst_33153__$1);
(statearr_33291[11] = inst_33154__$1);
(statearr_33291[12] = inst_33152__$1);
(statearr_33291[31] = inst_33169);
(statearr_33291[13] = inst_33155__$1);
return statearr_33291;
})();var statearr_33292_33353 = state_33216__$1;(statearr_33292_33353[2] = null);
(statearr_33292_33353[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33217 === 31))
{var inst_33160 = (state_33216[8]);var inst_33161 = (state_33216[2]);var inst_33162 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33163 = cljs.core.async.untap_STAR_.call(null,m,inst_33160);var state_33216__$1 = (function (){var statearr_33293 = state_33216;(statearr_33293[32] = inst_33162);
(statearr_33293[33] = inst_33161);
return statearr_33293;
})();var statearr_33294_33354 = state_33216__$1;(statearr_33294_33354[2] = inst_33163);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33216__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33298[0] = state_machine__5507__auto__);
(statearr_33298[1] = 1);
return statearr_33298;
});
var state_machine__5507__auto____1 = (function (state_33216){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33216);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33299){if((e33299 instanceof Object))
{var ex__5510__auto__ = e33299;var statearr_33300_33355 = state_33216;(statearr_33300_33355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33356 = state_33216;
state_33216 = G__33356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33216){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33301 = f__5522__auto__.call(null);(statearr_33301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33302);
return statearr_33301;
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
cljs.core.async.Mix = (function (){var obj33358 = {};return obj33358;
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
;var m = (function (){if(typeof cljs.core.async.t33468 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33468 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta33469){
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
this.meta33469 = meta33469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33468.cljs$lang$type = true;
cljs.core.async.t33468.cljs$lang$ctorStr = "cljs.core.async/t33468";
cljs.core.async.t33468.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33468");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33468.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33470){var self__ = this;
var _33470__$1 = this;return self__.meta33469;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33470,meta33469__$1){var self__ = this;
var _33470__$1 = this;return (new cljs.core.async.t33468(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta33469__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33468 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33468(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33469){return (new cljs.core.async.t33468(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33469));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33468(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___33577 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33535){var state_val_33536 = (state_33535[1]);if((state_val_33536 === 1))
{var inst_33474 = (state_33535[7]);var inst_33474__$1 = calc_state.call(null);var inst_33475 = cljs.core.seq_QMARK_.call(null,inst_33474__$1);var state_33535__$1 = (function (){var statearr_33537 = state_33535;(statearr_33537[7] = inst_33474__$1);
return statearr_33537;
})();if(inst_33475)
{var statearr_33538_33578 = state_33535__$1;(statearr_33538_33578[1] = 2);
} else
{var statearr_33539_33579 = state_33535__$1;(statearr_33539_33579[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 2))
{var inst_33474 = (state_33535[7]);var inst_33477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33474);var state_33535__$1 = state_33535;var statearr_33540_33580 = state_33535__$1;(statearr_33540_33580[2] = inst_33477);
(statearr_33540_33580[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 3))
{var inst_33474 = (state_33535[7]);var state_33535__$1 = state_33535;var statearr_33541_33581 = state_33535__$1;(statearr_33541_33581[2] = inst_33474);
(statearr_33541_33581[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 4))
{var inst_33474 = (state_33535[7]);var inst_33480 = (state_33535[2]);var inst_33481 = cljs.core.get.call(null,inst_33480,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33482 = cljs.core.get.call(null,inst_33480,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33483 = cljs.core.get.call(null,inst_33480,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33484 = inst_33474;var state_33535__$1 = (function (){var statearr_33542 = state_33535;(statearr_33542[8] = inst_33483);
(statearr_33542[9] = inst_33484);
(statearr_33542[10] = inst_33481);
(statearr_33542[11] = inst_33482);
return statearr_33542;
})();var statearr_33543_33582 = state_33535__$1;(statearr_33543_33582[2] = null);
(statearr_33543_33582[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 5))
{var inst_33484 = (state_33535[9]);var inst_33487 = cljs.core.seq_QMARK_.call(null,inst_33484);var state_33535__$1 = state_33535;if(inst_33487)
{var statearr_33544_33583 = state_33535__$1;(statearr_33544_33583[1] = 7);
} else
{var statearr_33545_33584 = state_33535__$1;(statearr_33545_33584[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 6))
{var inst_33533 = (state_33535[2]);var state_33535__$1 = state_33535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33535__$1,inst_33533);
} else
{if((state_val_33536 === 7))
{var inst_33484 = (state_33535[9]);var inst_33489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33484);var state_33535__$1 = state_33535;var statearr_33546_33585 = state_33535__$1;(statearr_33546_33585[2] = inst_33489);
(statearr_33546_33585[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 8))
{var inst_33484 = (state_33535[9]);var state_33535__$1 = state_33535;var statearr_33547_33586 = state_33535__$1;(statearr_33547_33586[2] = inst_33484);
(statearr_33547_33586[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 9))
{var inst_33492 = (state_33535[12]);var inst_33492__$1 = (state_33535[2]);var inst_33493 = cljs.core.get.call(null,inst_33492__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33494 = cljs.core.get.call(null,inst_33492__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33495 = cljs.core.get.call(null,inst_33492__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33535__$1 = (function (){var statearr_33548 = state_33535;(statearr_33548[13] = inst_33494);
(statearr_33548[14] = inst_33495);
(statearr_33548[12] = inst_33492__$1);
return statearr_33548;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33535__$1,10,inst_33493);
} else
{if((state_val_33536 === 10))
{var inst_33500 = (state_33535[15]);var inst_33499 = (state_33535[16]);var inst_33498 = (state_33535[2]);var inst_33499__$1 = cljs.core.nth.call(null,inst_33498,0,null);var inst_33500__$1 = cljs.core.nth.call(null,inst_33498,1,null);var inst_33501 = (inst_33499__$1 == null);var inst_33502 = cljs.core._EQ_.call(null,inst_33500__$1,change);var inst_33503 = (inst_33501) || (inst_33502);var state_33535__$1 = (function (){var statearr_33549 = state_33535;(statearr_33549[15] = inst_33500__$1);
(statearr_33549[16] = inst_33499__$1);
return statearr_33549;
})();if(cljs.core.truth_(inst_33503))
{var statearr_33550_33587 = state_33535__$1;(statearr_33550_33587[1] = 11);
} else
{var statearr_33551_33588 = state_33535__$1;(statearr_33551_33588[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 11))
{var inst_33499 = (state_33535[16]);var inst_33505 = (inst_33499 == null);var state_33535__$1 = state_33535;if(cljs.core.truth_(inst_33505))
{var statearr_33552_33589 = state_33535__$1;(statearr_33552_33589[1] = 14);
} else
{var statearr_33553_33590 = state_33535__$1;(statearr_33553_33590[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 12))
{var inst_33514 = (state_33535[17]);var inst_33500 = (state_33535[15]);var inst_33495 = (state_33535[14]);var inst_33514__$1 = inst_33495.call(null,inst_33500);var state_33535__$1 = (function (){var statearr_33554 = state_33535;(statearr_33554[17] = inst_33514__$1);
return statearr_33554;
})();if(cljs.core.truth_(inst_33514__$1))
{var statearr_33555_33591 = state_33535__$1;(statearr_33555_33591[1] = 17);
} else
{var statearr_33556_33592 = state_33535__$1;(statearr_33556_33592[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 13))
{var inst_33531 = (state_33535[2]);var state_33535__$1 = state_33535;var statearr_33557_33593 = state_33535__$1;(statearr_33557_33593[2] = inst_33531);
(statearr_33557_33593[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 14))
{var inst_33500 = (state_33535[15]);var inst_33507 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33500);var state_33535__$1 = state_33535;var statearr_33558_33594 = state_33535__$1;(statearr_33558_33594[2] = inst_33507);
(statearr_33558_33594[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 15))
{var state_33535__$1 = state_33535;var statearr_33559_33595 = state_33535__$1;(statearr_33559_33595[2] = null);
(statearr_33559_33595[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 16))
{var inst_33510 = (state_33535[2]);var inst_33511 = calc_state.call(null);var inst_33484 = inst_33511;var state_33535__$1 = (function (){var statearr_33560 = state_33535;(statearr_33560[9] = inst_33484);
(statearr_33560[18] = inst_33510);
return statearr_33560;
})();var statearr_33561_33596 = state_33535__$1;(statearr_33561_33596[2] = null);
(statearr_33561_33596[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 17))
{var inst_33514 = (state_33535[17]);var state_33535__$1 = state_33535;var statearr_33562_33597 = state_33535__$1;(statearr_33562_33597[2] = inst_33514);
(statearr_33562_33597[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 18))
{var inst_33500 = (state_33535[15]);var inst_33494 = (state_33535[13]);var inst_33495 = (state_33535[14]);var inst_33517 = cljs.core.empty_QMARK_.call(null,inst_33495);var inst_33518 = inst_33494.call(null,inst_33500);var inst_33519 = cljs.core.not.call(null,inst_33518);var inst_33520 = (inst_33517) && (inst_33519);var state_33535__$1 = state_33535;var statearr_33563_33598 = state_33535__$1;(statearr_33563_33598[2] = inst_33520);
(statearr_33563_33598[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 19))
{var inst_33522 = (state_33535[2]);var state_33535__$1 = state_33535;if(cljs.core.truth_(inst_33522))
{var statearr_33564_33599 = state_33535__$1;(statearr_33564_33599[1] = 20);
} else
{var statearr_33565_33600 = state_33535__$1;(statearr_33565_33600[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 20))
{var inst_33499 = (state_33535[16]);var state_33535__$1 = state_33535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33535__$1,23,out,inst_33499);
} else
{if((state_val_33536 === 21))
{var state_33535__$1 = state_33535;var statearr_33566_33601 = state_33535__$1;(statearr_33566_33601[2] = null);
(statearr_33566_33601[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 22))
{var inst_33492 = (state_33535[12]);var inst_33528 = (state_33535[2]);var inst_33484 = inst_33492;var state_33535__$1 = (function (){var statearr_33567 = state_33535;(statearr_33567[19] = inst_33528);
(statearr_33567[9] = inst_33484);
return statearr_33567;
})();var statearr_33568_33602 = state_33535__$1;(statearr_33568_33602[2] = null);
(statearr_33568_33602[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33536 === 23))
{var inst_33525 = (state_33535[2]);var state_33535__$1 = state_33535;var statearr_33569_33603 = state_33535__$1;(statearr_33569_33603[2] = inst_33525);
(statearr_33569_33603[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_33573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33573[0] = state_machine__5507__auto__);
(statearr_33573[1] = 1);
return statearr_33573;
});
var state_machine__5507__auto____1 = (function (state_33535){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33574){if((e33574 instanceof Object))
{var ex__5510__auto__ = e33574;var statearr_33575_33604 = state_33535;(statearr_33575_33604[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33605 = state_33535;
state_33535 = G__33605;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33535){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33576 = f__5522__auto__.call(null);(statearr_33576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33577);
return statearr_33576;
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
cljs.core.async.Pub = (function (){var obj33607 = {};return obj33607;
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
return (function (p1__33608_SHARP_){if(cljs.core.truth_(p1__33608_SHARP_.call(null,topic)))
{return p1__33608_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33608_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33733 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33733 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33734){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33734 = meta33734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33733.cljs$lang$type = true;
cljs.core.async.t33733.cljs$lang$ctorStr = "cljs.core.async/t33733";
cljs.core.async.t33733.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33733");
});})(mults,ensure_mult))
;
cljs.core.async.t33733.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33733.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33733.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33733.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33733.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33733.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33733.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33735){var self__ = this;
var _33735__$1 = this;return self__.meta33734;
});})(mults,ensure_mult))
;
cljs.core.async.t33733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33735,meta33734__$1){var self__ = this;
var _33735__$1 = this;return (new cljs.core.async.t33733(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33734__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33733 = ((function (mults,ensure_mult){
return (function __GT_t33733(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33734){return (new cljs.core.async.t33733(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33734));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33733(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___33857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33809){var state_val_33810 = (state_33809[1]);if((state_val_33810 === 1))
{var state_33809__$1 = state_33809;var statearr_33811_33858 = state_33809__$1;(statearr_33811_33858[2] = null);
(statearr_33811_33858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 2))
{var state_33809__$1 = state_33809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33809__$1,4,ch);
} else
{if((state_val_33810 === 3))
{var inst_33807 = (state_33809[2]);var state_33809__$1 = state_33809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33809__$1,inst_33807);
} else
{if((state_val_33810 === 4))
{var inst_33738 = (state_33809[7]);var inst_33738__$1 = (state_33809[2]);var inst_33739 = (inst_33738__$1 == null);var state_33809__$1 = (function (){var statearr_33812 = state_33809;(statearr_33812[7] = inst_33738__$1);
return statearr_33812;
})();if(cljs.core.truth_(inst_33739))
{var statearr_33813_33859 = state_33809__$1;(statearr_33813_33859[1] = 5);
} else
{var statearr_33814_33860 = state_33809__$1;(statearr_33814_33860[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 5))
{var inst_33745 = cljs.core.deref.call(null,mults);var inst_33746 = cljs.core.vals.call(null,inst_33745);var inst_33747 = cljs.core.seq.call(null,inst_33746);var inst_33748 = inst_33747;var inst_33749 = null;var inst_33750 = 0;var inst_33751 = 0;var state_33809__$1 = (function (){var statearr_33815 = state_33809;(statearr_33815[8] = inst_33751);
(statearr_33815[9] = inst_33750);
(statearr_33815[10] = inst_33749);
(statearr_33815[11] = inst_33748);
return statearr_33815;
})();var statearr_33816_33861 = state_33809__$1;(statearr_33816_33861[2] = null);
(statearr_33816_33861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 6))
{var inst_33738 = (state_33809[7]);var inst_33786 = (state_33809[12]);var inst_33788 = (state_33809[13]);var inst_33786__$1 = topic_fn.call(null,inst_33738);var inst_33787 = cljs.core.deref.call(null,mults);var inst_33788__$1 = cljs.core.get.call(null,inst_33787,inst_33786__$1);var state_33809__$1 = (function (){var statearr_33817 = state_33809;(statearr_33817[12] = inst_33786__$1);
(statearr_33817[13] = inst_33788__$1);
return statearr_33817;
})();if(cljs.core.truth_(inst_33788__$1))
{var statearr_33818_33862 = state_33809__$1;(statearr_33818_33862[1] = 19);
} else
{var statearr_33819_33863 = state_33809__$1;(statearr_33819_33863[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 7))
{var inst_33805 = (state_33809[2]);var state_33809__$1 = state_33809;var statearr_33820_33864 = state_33809__$1;(statearr_33820_33864[2] = inst_33805);
(statearr_33820_33864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 8))
{var inst_33751 = (state_33809[8]);var inst_33750 = (state_33809[9]);var inst_33753 = (inst_33751 < inst_33750);var inst_33754 = inst_33753;var state_33809__$1 = state_33809;if(cljs.core.truth_(inst_33754))
{var statearr_33824_33865 = state_33809__$1;(statearr_33824_33865[1] = 10);
} else
{var statearr_33825_33866 = state_33809__$1;(statearr_33825_33866[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 9))
{var inst_33784 = (state_33809[2]);var state_33809__$1 = state_33809;var statearr_33826_33867 = state_33809__$1;(statearr_33826_33867[2] = inst_33784);
(statearr_33826_33867[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 10))
{var inst_33751 = (state_33809[8]);var inst_33750 = (state_33809[9]);var inst_33749 = (state_33809[10]);var inst_33748 = (state_33809[11]);var inst_33756 = cljs.core._nth.call(null,inst_33749,inst_33751);var inst_33757 = cljs.core.async.muxch_STAR_.call(null,inst_33756);var inst_33758 = cljs.core.async.close_BANG_.call(null,inst_33757);var inst_33759 = (inst_33751 + 1);var tmp33821 = inst_33750;var tmp33822 = inst_33749;var tmp33823 = inst_33748;var inst_33748__$1 = tmp33823;var inst_33749__$1 = tmp33822;var inst_33750__$1 = tmp33821;var inst_33751__$1 = inst_33759;var state_33809__$1 = (function (){var statearr_33827 = state_33809;(statearr_33827[8] = inst_33751__$1);
(statearr_33827[9] = inst_33750__$1);
(statearr_33827[10] = inst_33749__$1);
(statearr_33827[11] = inst_33748__$1);
(statearr_33827[14] = inst_33758);
return statearr_33827;
})();var statearr_33828_33868 = state_33809__$1;(statearr_33828_33868[2] = null);
(statearr_33828_33868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 11))
{var inst_33762 = (state_33809[15]);var inst_33748 = (state_33809[11]);var inst_33762__$1 = cljs.core.seq.call(null,inst_33748);var state_33809__$1 = (function (){var statearr_33829 = state_33809;(statearr_33829[15] = inst_33762__$1);
return statearr_33829;
})();if(inst_33762__$1)
{var statearr_33830_33869 = state_33809__$1;(statearr_33830_33869[1] = 13);
} else
{var statearr_33831_33870 = state_33809__$1;(statearr_33831_33870[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 12))
{var inst_33782 = (state_33809[2]);var state_33809__$1 = state_33809;var statearr_33832_33871 = state_33809__$1;(statearr_33832_33871[2] = inst_33782);
(statearr_33832_33871[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 13))
{var inst_33762 = (state_33809[15]);var inst_33764 = cljs.core.chunked_seq_QMARK_.call(null,inst_33762);var state_33809__$1 = state_33809;if(inst_33764)
{var statearr_33833_33872 = state_33809__$1;(statearr_33833_33872[1] = 16);
} else
{var statearr_33834_33873 = state_33809__$1;(statearr_33834_33873[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 14))
{var state_33809__$1 = state_33809;var statearr_33835_33874 = state_33809__$1;(statearr_33835_33874[2] = null);
(statearr_33835_33874[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 15))
{var inst_33780 = (state_33809[2]);var state_33809__$1 = state_33809;var statearr_33836_33875 = state_33809__$1;(statearr_33836_33875[2] = inst_33780);
(statearr_33836_33875[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 16))
{var inst_33762 = (state_33809[15]);var inst_33766 = cljs.core.chunk_first.call(null,inst_33762);var inst_33767 = cljs.core.chunk_rest.call(null,inst_33762);var inst_33768 = cljs.core.count.call(null,inst_33766);var inst_33748 = inst_33767;var inst_33749 = inst_33766;var inst_33750 = inst_33768;var inst_33751 = 0;var state_33809__$1 = (function (){var statearr_33837 = state_33809;(statearr_33837[8] = inst_33751);
(statearr_33837[9] = inst_33750);
(statearr_33837[10] = inst_33749);
(statearr_33837[11] = inst_33748);
return statearr_33837;
})();var statearr_33838_33876 = state_33809__$1;(statearr_33838_33876[2] = null);
(statearr_33838_33876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 17))
{var inst_33762 = (state_33809[15]);var inst_33771 = cljs.core.first.call(null,inst_33762);var inst_33772 = cljs.core.async.muxch_STAR_.call(null,inst_33771);var inst_33773 = cljs.core.async.close_BANG_.call(null,inst_33772);var inst_33774 = cljs.core.next.call(null,inst_33762);var inst_33748 = inst_33774;var inst_33749 = null;var inst_33750 = 0;var inst_33751 = 0;var state_33809__$1 = (function (){var statearr_33839 = state_33809;(statearr_33839[8] = inst_33751);
(statearr_33839[9] = inst_33750);
(statearr_33839[10] = inst_33749);
(statearr_33839[11] = inst_33748);
(statearr_33839[16] = inst_33773);
return statearr_33839;
})();var statearr_33840_33877 = state_33809__$1;(statearr_33840_33877[2] = null);
(statearr_33840_33877[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 18))
{var inst_33777 = (state_33809[2]);var state_33809__$1 = state_33809;var statearr_33841_33878 = state_33809__$1;(statearr_33841_33878[2] = inst_33777);
(statearr_33841_33878[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 19))
{var state_33809__$1 = state_33809;var statearr_33842_33879 = state_33809__$1;(statearr_33842_33879[2] = null);
(statearr_33842_33879[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 20))
{var state_33809__$1 = state_33809;var statearr_33843_33880 = state_33809__$1;(statearr_33843_33880[2] = null);
(statearr_33843_33880[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 21))
{var inst_33802 = (state_33809[2]);var state_33809__$1 = (function (){var statearr_33844 = state_33809;(statearr_33844[17] = inst_33802);
return statearr_33844;
})();var statearr_33845_33881 = state_33809__$1;(statearr_33845_33881[2] = null);
(statearr_33845_33881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 22))
{var inst_33799 = (state_33809[2]);var state_33809__$1 = state_33809;var statearr_33846_33882 = state_33809__$1;(statearr_33846_33882[2] = inst_33799);
(statearr_33846_33882[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 23))
{var inst_33786 = (state_33809[12]);var inst_33790 = (state_33809[2]);var inst_33791 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33786);var state_33809__$1 = (function (){var statearr_33847 = state_33809;(statearr_33847[18] = inst_33790);
return statearr_33847;
})();var statearr_33848_33883 = state_33809__$1;(statearr_33848_33883[2] = inst_33791);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33809__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33810 === 24))
{var inst_33738 = (state_33809[7]);var inst_33788 = (state_33809[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33809,23,Object,null,22);var inst_33795 = cljs.core.async.muxch_STAR_.call(null,inst_33788);var state_33809__$1 = state_33809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33809__$1,25,inst_33795,inst_33738);
} else
{if((state_val_33810 === 25))
{var inst_33797 = (state_33809[2]);var state_33809__$1 = state_33809;var statearr_33849_33884 = state_33809__$1;(statearr_33849_33884[2] = inst_33797);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33809__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33853[0] = state_machine__5507__auto__);
(statearr_33853[1] = 1);
return statearr_33853;
});
var state_machine__5507__auto____1 = (function (state_33809){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33809);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33854){if((e33854 instanceof Object))
{var ex__5510__auto__ = e33854;var statearr_33855_33885 = state_33809;(statearr_33855_33885[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33809);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33886 = state_33809;
state_33809 = G__33886;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33809){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33856 = f__5522__auto__.call(null);(statearr_33856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33857);
return statearr_33856;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34023 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33993){var state_val_33994 = (state_33993[1]);if((state_val_33994 === 1))
{var state_33993__$1 = state_33993;var statearr_33995_34024 = state_33993__$1;(statearr_33995_34024[2] = null);
(statearr_33995_34024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 2))
{var inst_33956 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33957 = 0;var state_33993__$1 = (function (){var statearr_33996 = state_33993;(statearr_33996[7] = inst_33956);
(statearr_33996[8] = inst_33957);
return statearr_33996;
})();var statearr_33997_34025 = state_33993__$1;(statearr_33997_34025[2] = null);
(statearr_33997_34025[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 3))
{var inst_33991 = (state_33993[2]);var state_33993__$1 = state_33993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33993__$1,inst_33991);
} else
{if((state_val_33994 === 4))
{var inst_33957 = (state_33993[8]);var inst_33959 = (inst_33957 < cnt);var state_33993__$1 = state_33993;if(cljs.core.truth_(inst_33959))
{var statearr_33998_34026 = state_33993__$1;(statearr_33998_34026[1] = 6);
} else
{var statearr_33999_34027 = state_33993__$1;(statearr_33999_34027[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 5))
{var inst_33977 = (state_33993[2]);var state_33993__$1 = (function (){var statearr_34000 = state_33993;(statearr_34000[9] = inst_33977);
return statearr_34000;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33993__$1,12,dchan);
} else
{if((state_val_33994 === 6))
{var state_33993__$1 = state_33993;var statearr_34001_34028 = state_33993__$1;(statearr_34001_34028[2] = null);
(statearr_34001_34028[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 7))
{var state_33993__$1 = state_33993;var statearr_34002_34029 = state_33993__$1;(statearr_34002_34029[2] = null);
(statearr_34002_34029[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 8))
{var inst_33975 = (state_33993[2]);var state_33993__$1 = state_33993;var statearr_34003_34030 = state_33993__$1;(statearr_34003_34030[2] = inst_33975);
(statearr_34003_34030[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 9))
{var inst_33957 = (state_33993[8]);var inst_33970 = (state_33993[2]);var inst_33971 = (inst_33957 + 1);var inst_33957__$1 = inst_33971;var state_33993__$1 = (function (){var statearr_34004 = state_33993;(statearr_34004[8] = inst_33957__$1);
(statearr_34004[10] = inst_33970);
return statearr_34004;
})();var statearr_34005_34031 = state_33993__$1;(statearr_34005_34031[2] = null);
(statearr_34005_34031[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 10))
{var inst_33961 = (state_33993[2]);var inst_33962 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33993__$1 = (function (){var statearr_34006 = state_33993;(statearr_34006[11] = inst_33961);
return statearr_34006;
})();var statearr_34007_34032 = state_33993__$1;(statearr_34007_34032[2] = inst_33962);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33993__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 11))
{var inst_33957 = (state_33993[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33993,10,Object,null,9);var inst_33966 = chs__$1.call(null,inst_33957);var inst_33967 = done.call(null,inst_33957);var inst_33968 = cljs.core.async.take_BANG_.call(null,inst_33966,inst_33967);var state_33993__$1 = state_33993;var statearr_34008_34033 = state_33993__$1;(statearr_34008_34033[2] = inst_33968);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33993__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 12))
{var inst_33979 = (state_33993[12]);var inst_33979__$1 = (state_33993[2]);var inst_33980 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33979__$1);var state_33993__$1 = (function (){var statearr_34009 = state_33993;(statearr_34009[12] = inst_33979__$1);
return statearr_34009;
})();if(cljs.core.truth_(inst_33980))
{var statearr_34010_34034 = state_33993__$1;(statearr_34010_34034[1] = 13);
} else
{var statearr_34011_34035 = state_33993__$1;(statearr_34011_34035[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 13))
{var inst_33982 = cljs.core.async.close_BANG_.call(null,out);var state_33993__$1 = state_33993;var statearr_34012_34036 = state_33993__$1;(statearr_34012_34036[2] = inst_33982);
(statearr_34012_34036[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 14))
{var inst_33979 = (state_33993[12]);var inst_33984 = cljs.core.apply.call(null,f,inst_33979);var state_33993__$1 = state_33993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33993__$1,16,out,inst_33984);
} else
{if((state_val_33994 === 15))
{var inst_33989 = (state_33993[2]);var state_33993__$1 = state_33993;var statearr_34013_34037 = state_33993__$1;(statearr_34013_34037[2] = inst_33989);
(statearr_34013_34037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33994 === 16))
{var inst_33986 = (state_33993[2]);var state_33993__$1 = (function (){var statearr_34014 = state_33993;(statearr_34014[13] = inst_33986);
return statearr_34014;
})();var statearr_34015_34038 = state_33993__$1;(statearr_34015_34038[2] = null);
(statearr_34015_34038[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34019[0] = state_machine__5507__auto__);
(statearr_34019[1] = 1);
return statearr_34019;
});
var state_machine__5507__auto____1 = (function (state_33993){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34020){if((e34020 instanceof Object))
{var ex__5510__auto__ = e34020;var statearr_34021_34039 = state_33993;(statearr_34021_34039[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34040 = state_33993;
state_33993 = G__34040;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33993){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34022 = f__5522__auto__.call(null);(statearr_34022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34023);
return statearr_34022;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34148 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34124){var state_val_34125 = (state_34124[1]);if((state_val_34125 === 1))
{var inst_34095 = cljs.core.vec.call(null,chs);var inst_34096 = inst_34095;var state_34124__$1 = (function (){var statearr_34126 = state_34124;(statearr_34126[7] = inst_34096);
return statearr_34126;
})();var statearr_34127_34149 = state_34124__$1;(statearr_34127_34149[2] = null);
(statearr_34127_34149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34125 === 2))
{var inst_34096 = (state_34124[7]);var inst_34098 = cljs.core.count.call(null,inst_34096);var inst_34099 = (inst_34098 > 0);var state_34124__$1 = state_34124;if(cljs.core.truth_(inst_34099))
{var statearr_34128_34150 = state_34124__$1;(statearr_34128_34150[1] = 4);
} else
{var statearr_34129_34151 = state_34124__$1;(statearr_34129_34151[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34125 === 3))
{var inst_34122 = (state_34124[2]);var state_34124__$1 = state_34124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34124__$1,inst_34122);
} else
{if((state_val_34125 === 4))
{var inst_34096 = (state_34124[7]);var state_34124__$1 = state_34124;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34124__$1,7,inst_34096);
} else
{if((state_val_34125 === 5))
{var inst_34118 = cljs.core.async.close_BANG_.call(null,out);var state_34124__$1 = state_34124;var statearr_34130_34152 = state_34124__$1;(statearr_34130_34152[2] = inst_34118);
(statearr_34130_34152[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34125 === 6))
{var inst_34120 = (state_34124[2]);var state_34124__$1 = state_34124;var statearr_34131_34153 = state_34124__$1;(statearr_34131_34153[2] = inst_34120);
(statearr_34131_34153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34125 === 7))
{var inst_34104 = (state_34124[8]);var inst_34103 = (state_34124[9]);var inst_34103__$1 = (state_34124[2]);var inst_34104__$1 = cljs.core.nth.call(null,inst_34103__$1,0,null);var inst_34105 = cljs.core.nth.call(null,inst_34103__$1,1,null);var inst_34106 = (inst_34104__$1 == null);var state_34124__$1 = (function (){var statearr_34132 = state_34124;(statearr_34132[10] = inst_34105);
(statearr_34132[8] = inst_34104__$1);
(statearr_34132[9] = inst_34103__$1);
return statearr_34132;
})();if(cljs.core.truth_(inst_34106))
{var statearr_34133_34154 = state_34124__$1;(statearr_34133_34154[1] = 8);
} else
{var statearr_34134_34155 = state_34124__$1;(statearr_34134_34155[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34125 === 8))
{var inst_34096 = (state_34124[7]);var inst_34105 = (state_34124[10]);var inst_34104 = (state_34124[8]);var inst_34103 = (state_34124[9]);var inst_34108 = (function (){var c = inst_34105;var v = inst_34104;var vec__34101 = inst_34103;var cs = inst_34096;return ((function (c,v,vec__34101,cs,inst_34096,inst_34105,inst_34104,inst_34103,state_val_34125){
return (function (p1__34041_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34041_SHARP_);
});
;})(c,v,vec__34101,cs,inst_34096,inst_34105,inst_34104,inst_34103,state_val_34125))
})();var inst_34109 = cljs.core.filterv.call(null,inst_34108,inst_34096);var inst_34096__$1 = inst_34109;var state_34124__$1 = (function (){var statearr_34135 = state_34124;(statearr_34135[7] = inst_34096__$1);
return statearr_34135;
})();var statearr_34136_34156 = state_34124__$1;(statearr_34136_34156[2] = null);
(statearr_34136_34156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34125 === 9))
{var inst_34104 = (state_34124[8]);var state_34124__$1 = state_34124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34124__$1,11,out,inst_34104);
} else
{if((state_val_34125 === 10))
{var inst_34116 = (state_34124[2]);var state_34124__$1 = state_34124;var statearr_34138_34157 = state_34124__$1;(statearr_34138_34157[2] = inst_34116);
(statearr_34138_34157[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34125 === 11))
{var inst_34096 = (state_34124[7]);var inst_34113 = (state_34124[2]);var tmp34137 = inst_34096;var inst_34096__$1 = tmp34137;var state_34124__$1 = (function (){var statearr_34139 = state_34124;(statearr_34139[7] = inst_34096__$1);
(statearr_34139[11] = inst_34113);
return statearr_34139;
})();var statearr_34140_34158 = state_34124__$1;(statearr_34140_34158[2] = null);
(statearr_34140_34158[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34144 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34144[0] = state_machine__5507__auto__);
(statearr_34144[1] = 1);
return statearr_34144;
});
var state_machine__5507__auto____1 = (function (state_34124){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34124);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34145){if((e34145 instanceof Object))
{var ex__5510__auto__ = e34145;var statearr_34146_34159 = state_34124;(statearr_34146_34159[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34124);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34160 = state_34124;
state_34124 = G__34160;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34124){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34147 = f__5522__auto__.call(null);(statearr_34147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34148);
return statearr_34147;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34230){var state_val_34231 = (state_34230[1]);if((state_val_34231 === 1))
{var inst_34207 = 0;var state_34230__$1 = (function (){var statearr_34232 = state_34230;(statearr_34232[7] = inst_34207);
return statearr_34232;
})();var statearr_34233_34254 = state_34230__$1;(statearr_34233_34254[2] = null);
(statearr_34233_34254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34231 === 2))
{var inst_34207 = (state_34230[7]);var inst_34209 = (inst_34207 < n);var state_34230__$1 = state_34230;if(cljs.core.truth_(inst_34209))
{var statearr_34234_34255 = state_34230__$1;(statearr_34234_34255[1] = 4);
} else
{var statearr_34235_34256 = state_34230__$1;(statearr_34235_34256[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34231 === 3))
{var inst_34227 = (state_34230[2]);var inst_34228 = cljs.core.async.close_BANG_.call(null,out);var state_34230__$1 = (function (){var statearr_34236 = state_34230;(statearr_34236[8] = inst_34227);
return statearr_34236;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34230__$1,inst_34228);
} else
{if((state_val_34231 === 4))
{var state_34230__$1 = state_34230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34230__$1,7,ch);
} else
{if((state_val_34231 === 5))
{var state_34230__$1 = state_34230;var statearr_34237_34257 = state_34230__$1;(statearr_34237_34257[2] = null);
(statearr_34237_34257[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34231 === 6))
{var inst_34225 = (state_34230[2]);var state_34230__$1 = state_34230;var statearr_34238_34258 = state_34230__$1;(statearr_34238_34258[2] = inst_34225);
(statearr_34238_34258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34231 === 7))
{var inst_34212 = (state_34230[9]);var inst_34212__$1 = (state_34230[2]);var inst_34213 = (inst_34212__$1 == null);var inst_34214 = cljs.core.not.call(null,inst_34213);var state_34230__$1 = (function (){var statearr_34239 = state_34230;(statearr_34239[9] = inst_34212__$1);
return statearr_34239;
})();if(inst_34214)
{var statearr_34240_34259 = state_34230__$1;(statearr_34240_34259[1] = 8);
} else
{var statearr_34241_34260 = state_34230__$1;(statearr_34241_34260[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34231 === 8))
{var inst_34212 = (state_34230[9]);var state_34230__$1 = state_34230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34230__$1,11,out,inst_34212);
} else
{if((state_val_34231 === 9))
{var state_34230__$1 = state_34230;var statearr_34242_34261 = state_34230__$1;(statearr_34242_34261[2] = null);
(statearr_34242_34261[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34231 === 10))
{var inst_34222 = (state_34230[2]);var state_34230__$1 = state_34230;var statearr_34243_34262 = state_34230__$1;(statearr_34243_34262[2] = inst_34222);
(statearr_34243_34262[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34231 === 11))
{var inst_34207 = (state_34230[7]);var inst_34217 = (state_34230[2]);var inst_34218 = (inst_34207 + 1);var inst_34207__$1 = inst_34218;var state_34230__$1 = (function (){var statearr_34244 = state_34230;(statearr_34244[7] = inst_34207__$1);
(statearr_34244[10] = inst_34217);
return statearr_34244;
})();var statearr_34245_34263 = state_34230__$1;(statearr_34245_34263[2] = null);
(statearr_34245_34263[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34249 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34249[0] = state_machine__5507__auto__);
(statearr_34249[1] = 1);
return statearr_34249;
});
var state_machine__5507__auto____1 = (function (state_34230){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34230);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34250){if((e34250 instanceof Object))
{var ex__5510__auto__ = e34250;var statearr_34251_34264 = state_34230;(statearr_34251_34264[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34265 = state_34230;
state_34230 = G__34265;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34230){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34252 = f__5522__auto__.call(null);(statearr_34252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34253);
return statearr_34252;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34337){var state_val_34338 = (state_34337[1]);if((state_val_34338 === 1))
{var inst_34314 = null;var state_34337__$1 = (function (){var statearr_34339 = state_34337;(statearr_34339[7] = inst_34314);
return statearr_34339;
})();var statearr_34340_34363 = state_34337__$1;(statearr_34340_34363[2] = null);
(statearr_34340_34363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34338 === 2))
{var state_34337__$1 = state_34337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34337__$1,4,ch);
} else
{if((state_val_34338 === 3))
{var inst_34334 = (state_34337[2]);var inst_34335 = cljs.core.async.close_BANG_.call(null,out);var state_34337__$1 = (function (){var statearr_34341 = state_34337;(statearr_34341[8] = inst_34334);
return statearr_34341;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34337__$1,inst_34335);
} else
{if((state_val_34338 === 4))
{var inst_34317 = (state_34337[9]);var inst_34317__$1 = (state_34337[2]);var inst_34318 = (inst_34317__$1 == null);var inst_34319 = cljs.core.not.call(null,inst_34318);var state_34337__$1 = (function (){var statearr_34342 = state_34337;(statearr_34342[9] = inst_34317__$1);
return statearr_34342;
})();if(inst_34319)
{var statearr_34343_34364 = state_34337__$1;(statearr_34343_34364[1] = 5);
} else
{var statearr_34344_34365 = state_34337__$1;(statearr_34344_34365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34338 === 5))
{var inst_34314 = (state_34337[7]);var inst_34317 = (state_34337[9]);var inst_34321 = cljs.core._EQ_.call(null,inst_34317,inst_34314);var state_34337__$1 = state_34337;if(inst_34321)
{var statearr_34345_34366 = state_34337__$1;(statearr_34345_34366[1] = 8);
} else
{var statearr_34346_34367 = state_34337__$1;(statearr_34346_34367[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34338 === 6))
{var state_34337__$1 = state_34337;var statearr_34348_34368 = state_34337__$1;(statearr_34348_34368[2] = null);
(statearr_34348_34368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34338 === 7))
{var inst_34332 = (state_34337[2]);var state_34337__$1 = state_34337;var statearr_34349_34369 = state_34337__$1;(statearr_34349_34369[2] = inst_34332);
(statearr_34349_34369[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34338 === 8))
{var inst_34314 = (state_34337[7]);var tmp34347 = inst_34314;var inst_34314__$1 = tmp34347;var state_34337__$1 = (function (){var statearr_34350 = state_34337;(statearr_34350[7] = inst_34314__$1);
return statearr_34350;
})();var statearr_34351_34370 = state_34337__$1;(statearr_34351_34370[2] = null);
(statearr_34351_34370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34338 === 9))
{var inst_34317 = (state_34337[9]);var state_34337__$1 = state_34337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34337__$1,11,out,inst_34317);
} else
{if((state_val_34338 === 10))
{var inst_34329 = (state_34337[2]);var state_34337__$1 = state_34337;var statearr_34352_34371 = state_34337__$1;(statearr_34352_34371[2] = inst_34329);
(statearr_34352_34371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34338 === 11))
{var inst_34317 = (state_34337[9]);var inst_34326 = (state_34337[2]);var inst_34314 = inst_34317;var state_34337__$1 = (function (){var statearr_34353 = state_34337;(statearr_34353[10] = inst_34326);
(statearr_34353[7] = inst_34314);
return statearr_34353;
})();var statearr_34354_34372 = state_34337__$1;(statearr_34354_34372[2] = null);
(statearr_34354_34372[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34358 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34358[0] = state_machine__5507__auto__);
(statearr_34358[1] = 1);
return statearr_34358;
});
var state_machine__5507__auto____1 = (function (state_34337){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34337);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34359){if((e34359 instanceof Object))
{var ex__5510__auto__ = e34359;var statearr_34360_34373 = state_34337;(statearr_34360_34373[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34374 = state_34337;
state_34337 = G__34374;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34337){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34361 = f__5522__auto__.call(null);(statearr_34361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34362);
return statearr_34361;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34509 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34479){var state_val_34480 = (state_34479[1]);if((state_val_34480 === 1))
{var inst_34442 = (new Array(n));var inst_34443 = inst_34442;var inst_34444 = 0;var state_34479__$1 = (function (){var statearr_34481 = state_34479;(statearr_34481[7] = inst_34444);
(statearr_34481[8] = inst_34443);
return statearr_34481;
})();var statearr_34482_34510 = state_34479__$1;(statearr_34482_34510[2] = null);
(statearr_34482_34510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 2))
{var state_34479__$1 = state_34479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34479__$1,4,ch);
} else
{if((state_val_34480 === 3))
{var inst_34477 = (state_34479[2]);var state_34479__$1 = state_34479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34479__$1,inst_34477);
} else
{if((state_val_34480 === 4))
{var inst_34447 = (state_34479[9]);var inst_34447__$1 = (state_34479[2]);var inst_34448 = (inst_34447__$1 == null);var inst_34449 = cljs.core.not.call(null,inst_34448);var state_34479__$1 = (function (){var statearr_34483 = state_34479;(statearr_34483[9] = inst_34447__$1);
return statearr_34483;
})();if(inst_34449)
{var statearr_34484_34511 = state_34479__$1;(statearr_34484_34511[1] = 5);
} else
{var statearr_34485_34512 = state_34479__$1;(statearr_34485_34512[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 5))
{var inst_34447 = (state_34479[9]);var inst_34452 = (state_34479[10]);var inst_34444 = (state_34479[7]);var inst_34443 = (state_34479[8]);var inst_34451 = (inst_34443[inst_34444] = inst_34447);var inst_34452__$1 = (inst_34444 + 1);var inst_34453 = (inst_34452__$1 < n);var state_34479__$1 = (function (){var statearr_34486 = state_34479;(statearr_34486[11] = inst_34451);
(statearr_34486[10] = inst_34452__$1);
return statearr_34486;
})();if(cljs.core.truth_(inst_34453))
{var statearr_34487_34513 = state_34479__$1;(statearr_34487_34513[1] = 8);
} else
{var statearr_34488_34514 = state_34479__$1;(statearr_34488_34514[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 6))
{var inst_34444 = (state_34479[7]);var inst_34465 = (inst_34444 > 0);var state_34479__$1 = state_34479;if(cljs.core.truth_(inst_34465))
{var statearr_34490_34515 = state_34479__$1;(statearr_34490_34515[1] = 12);
} else
{var statearr_34491_34516 = state_34479__$1;(statearr_34491_34516[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 7))
{var inst_34475 = (state_34479[2]);var state_34479__$1 = state_34479;var statearr_34492_34517 = state_34479__$1;(statearr_34492_34517[2] = inst_34475);
(statearr_34492_34517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 8))
{var inst_34452 = (state_34479[10]);var inst_34443 = (state_34479[8]);var tmp34489 = inst_34443;var inst_34443__$1 = tmp34489;var inst_34444 = inst_34452;var state_34479__$1 = (function (){var statearr_34493 = state_34479;(statearr_34493[7] = inst_34444);
(statearr_34493[8] = inst_34443__$1);
return statearr_34493;
})();var statearr_34494_34518 = state_34479__$1;(statearr_34494_34518[2] = null);
(statearr_34494_34518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 9))
{var inst_34443 = (state_34479[8]);var inst_34457 = cljs.core.vec.call(null,inst_34443);var state_34479__$1 = state_34479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34479__$1,11,out,inst_34457);
} else
{if((state_val_34480 === 10))
{var inst_34463 = (state_34479[2]);var state_34479__$1 = state_34479;var statearr_34495_34519 = state_34479__$1;(statearr_34495_34519[2] = inst_34463);
(statearr_34495_34519[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 11))
{var inst_34459 = (state_34479[2]);var inst_34460 = (new Array(n));var inst_34443 = inst_34460;var inst_34444 = 0;var state_34479__$1 = (function (){var statearr_34496 = state_34479;(statearr_34496[7] = inst_34444);
(statearr_34496[8] = inst_34443);
(statearr_34496[12] = inst_34459);
return statearr_34496;
})();var statearr_34497_34520 = state_34479__$1;(statearr_34497_34520[2] = null);
(statearr_34497_34520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 12))
{var inst_34443 = (state_34479[8]);var inst_34467 = cljs.core.vec.call(null,inst_34443);var state_34479__$1 = state_34479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34479__$1,15,out,inst_34467);
} else
{if((state_val_34480 === 13))
{var state_34479__$1 = state_34479;var statearr_34498_34521 = state_34479__$1;(statearr_34498_34521[2] = null);
(statearr_34498_34521[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 14))
{var inst_34472 = (state_34479[2]);var inst_34473 = cljs.core.async.close_BANG_.call(null,out);var state_34479__$1 = (function (){var statearr_34499 = state_34479;(statearr_34499[13] = inst_34472);
return statearr_34499;
})();var statearr_34500_34522 = state_34479__$1;(statearr_34500_34522[2] = inst_34473);
(statearr_34500_34522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34480 === 15))
{var inst_34469 = (state_34479[2]);var state_34479__$1 = state_34479;var statearr_34501_34523 = state_34479__$1;(statearr_34501_34523[2] = inst_34469);
(statearr_34501_34523[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_34505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34505[0] = state_machine__5507__auto__);
(statearr_34505[1] = 1);
return statearr_34505;
});
var state_machine__5507__auto____1 = (function (state_34479){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34479);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34506){if((e34506 instanceof Object))
{var ex__5510__auto__ = e34506;var statearr_34507_34524 = state_34479;(statearr_34507_34524[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34525 = state_34479;
state_34479 = G__34525;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34479){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34508 = f__5522__auto__.call(null);(statearr_34508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34509);
return statearr_34508;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34668 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34638){var state_val_34639 = (state_34638[1]);if((state_val_34639 === 1))
{var inst_34597 = [];var inst_34598 = inst_34597;var inst_34599 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34638__$1 = (function (){var statearr_34640 = state_34638;(statearr_34640[7] = inst_34599);
(statearr_34640[8] = inst_34598);
return statearr_34640;
})();var statearr_34641_34669 = state_34638__$1;(statearr_34641_34669[2] = null);
(statearr_34641_34669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 2))
{var state_34638__$1 = state_34638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34638__$1,4,ch);
} else
{if((state_val_34639 === 3))
{var inst_34636 = (state_34638[2]);var state_34638__$1 = state_34638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34638__$1,inst_34636);
} else
{if((state_val_34639 === 4))
{var inst_34602 = (state_34638[9]);var inst_34602__$1 = (state_34638[2]);var inst_34603 = (inst_34602__$1 == null);var inst_34604 = cljs.core.not.call(null,inst_34603);var state_34638__$1 = (function (){var statearr_34642 = state_34638;(statearr_34642[9] = inst_34602__$1);
return statearr_34642;
})();if(inst_34604)
{var statearr_34643_34670 = state_34638__$1;(statearr_34643_34670[1] = 5);
} else
{var statearr_34644_34671 = state_34638__$1;(statearr_34644_34671[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 5))
{var inst_34602 = (state_34638[9]);var inst_34599 = (state_34638[7]);var inst_34606 = (state_34638[10]);var inst_34606__$1 = f.call(null,inst_34602);var inst_34607 = cljs.core._EQ_.call(null,inst_34606__$1,inst_34599);var inst_34608 = cljs.core.keyword_identical_QMARK_.call(null,inst_34599,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34609 = (inst_34607) || (inst_34608);var state_34638__$1 = (function (){var statearr_34645 = state_34638;(statearr_34645[10] = inst_34606__$1);
return statearr_34645;
})();if(cljs.core.truth_(inst_34609))
{var statearr_34646_34672 = state_34638__$1;(statearr_34646_34672[1] = 8);
} else
{var statearr_34647_34673 = state_34638__$1;(statearr_34647_34673[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 6))
{var inst_34598 = (state_34638[8]);var inst_34623 = inst_34598.length;var inst_34624 = (inst_34623 > 0);var state_34638__$1 = state_34638;if(cljs.core.truth_(inst_34624))
{var statearr_34649_34674 = state_34638__$1;(statearr_34649_34674[1] = 12);
} else
{var statearr_34650_34675 = state_34638__$1;(statearr_34650_34675[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 7))
{var inst_34634 = (state_34638[2]);var state_34638__$1 = state_34638;var statearr_34651_34676 = state_34638__$1;(statearr_34651_34676[2] = inst_34634);
(statearr_34651_34676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 8))
{var inst_34602 = (state_34638[9]);var inst_34598 = (state_34638[8]);var inst_34606 = (state_34638[10]);var inst_34611 = inst_34598.push(inst_34602);var tmp34648 = inst_34598;var inst_34598__$1 = tmp34648;var inst_34599 = inst_34606;var state_34638__$1 = (function (){var statearr_34652 = state_34638;(statearr_34652[7] = inst_34599);
(statearr_34652[8] = inst_34598__$1);
(statearr_34652[11] = inst_34611);
return statearr_34652;
})();var statearr_34653_34677 = state_34638__$1;(statearr_34653_34677[2] = null);
(statearr_34653_34677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 9))
{var inst_34598 = (state_34638[8]);var inst_34614 = cljs.core.vec.call(null,inst_34598);var state_34638__$1 = state_34638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34638__$1,11,out,inst_34614);
} else
{if((state_val_34639 === 10))
{var inst_34621 = (state_34638[2]);var state_34638__$1 = state_34638;var statearr_34654_34678 = state_34638__$1;(statearr_34654_34678[2] = inst_34621);
(statearr_34654_34678[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 11))
{var inst_34602 = (state_34638[9]);var inst_34606 = (state_34638[10]);var inst_34616 = (state_34638[2]);var inst_34617 = [];var inst_34618 = inst_34617.push(inst_34602);var inst_34598 = inst_34617;var inst_34599 = inst_34606;var state_34638__$1 = (function (){var statearr_34655 = state_34638;(statearr_34655[12] = inst_34616);
(statearr_34655[13] = inst_34618);
(statearr_34655[7] = inst_34599);
(statearr_34655[8] = inst_34598);
return statearr_34655;
})();var statearr_34656_34679 = state_34638__$1;(statearr_34656_34679[2] = null);
(statearr_34656_34679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 12))
{var inst_34598 = (state_34638[8]);var inst_34626 = cljs.core.vec.call(null,inst_34598);var state_34638__$1 = state_34638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34638__$1,15,out,inst_34626);
} else
{if((state_val_34639 === 13))
{var state_34638__$1 = state_34638;var statearr_34657_34680 = state_34638__$1;(statearr_34657_34680[2] = null);
(statearr_34657_34680[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 14))
{var inst_34631 = (state_34638[2]);var inst_34632 = cljs.core.async.close_BANG_.call(null,out);var state_34638__$1 = (function (){var statearr_34658 = state_34638;(statearr_34658[14] = inst_34631);
return statearr_34658;
})();var statearr_34659_34681 = state_34638__$1;(statearr_34659_34681[2] = inst_34632);
(statearr_34659_34681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34639 === 15))
{var inst_34628 = (state_34638[2]);var state_34638__$1 = state_34638;var statearr_34660_34682 = state_34638__$1;(statearr_34660_34682[2] = inst_34628);
(statearr_34660_34682[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_34664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34664[0] = state_machine__5507__auto__);
(statearr_34664[1] = 1);
return statearr_34664;
});
var state_machine__5507__auto____1 = (function (state_34638){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34665){if((e34665 instanceof Object))
{var ex__5510__auto__ = e34665;var statearr_34666_34683 = state_34638;(statearr_34666_34683[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34684 = state_34638;
state_34638 = G__34684;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34638){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34667 = f__5522__auto__.call(null);(statearr_34667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34668);
return statearr_34667;
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
