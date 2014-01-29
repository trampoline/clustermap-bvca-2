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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33043 = (function (f,fn_handler,meta33044){
this.f = f;
this.fn_handler = fn_handler;
this.meta33044 = meta33044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33043.cljs$lang$type = true;
cljs.core.async.t33043.cljs$lang$ctorStr = "cljs.core.async/t33043";
cljs.core.async.t33043.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33043");
});
cljs.core.async.t33043.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33045){var self__ = this;
var _33045__$1 = this;return self__.meta33044;
});
cljs.core.async.t33043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33045,meta33044__$1){var self__ = this;
var _33045__$1 = this;return (new cljs.core.async.t33043(self__.f,self__.fn_handler,meta33044__$1));
});
cljs.core.async.__GT_t33043 = (function __GT_t33043(f__$1,fn_handler__$1,meta33044){return (new cljs.core.async.t33043(f__$1,fn_handler__$1,meta33044));
});
}
return (new cljs.core.async.t33043(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33047 = buff;if(G__33047)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33047.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33047.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33047);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33047);
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
{var val_33048 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33048);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33048);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33049 = n;var x_33050 = 0;while(true){
if((x_33050 < n__4248__auto___33049))
{(a[x_33050] = 0);
{
var G__33051 = (x_33050 + 1);
x_33050 = G__33051;
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
var G__33052 = (i + 1);
i = G__33052;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33056 = (function (flag,alt_flag,meta33057){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33057 = meta33057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33056.cljs$lang$type = true;
cljs.core.async.t33056.cljs$lang$ctorStr = "cljs.core.async/t33056";
cljs.core.async.t33056.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33056");
});
cljs.core.async.t33056.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33058){var self__ = this;
var _33058__$1 = this;return self__.meta33057;
});
cljs.core.async.t33056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33058,meta33057__$1){var self__ = this;
var _33058__$1 = this;return (new cljs.core.async.t33056(self__.flag,self__.alt_flag,meta33057__$1));
});
cljs.core.async.__GT_t33056 = (function __GT_t33056(flag__$1,alt_flag__$1,meta33057){return (new cljs.core.async.t33056(flag__$1,alt_flag__$1,meta33057));
});
}
return (new cljs.core.async.t33056(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33062 = (function (cb,flag,alt_handler,meta33063){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33063 = meta33063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33062.cljs$lang$type = true;
cljs.core.async.t33062.cljs$lang$ctorStr = "cljs.core.async/t33062";
cljs.core.async.t33062.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33062");
});
cljs.core.async.t33062.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33064){var self__ = this;
var _33064__$1 = this;return self__.meta33063;
});
cljs.core.async.t33062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33064,meta33063__$1){var self__ = this;
var _33064__$1 = this;return (new cljs.core.async.t33062(self__.cb,self__.flag,self__.alt_handler,meta33063__$1));
});
cljs.core.async.__GT_t33062 = (function __GT_t33062(cb__$1,flag__$1,alt_handler__$1,meta33063){return (new cljs.core.async.t33062(cb__$1,flag__$1,alt_handler__$1,meta33063));
});
}
return (new cljs.core.async.t33062(cb,flag,alt_handler,null));
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
return (function (p1__33065_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33065_SHARP_,port], null));
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
var G__33066 = (i + 1);
i = G__33066;
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
var alts_BANG___delegate = function (ports,p__33067){var map__33069 = p__33067;var map__33069__$1 = ((cljs.core.seq_QMARK_.call(null,map__33069))?cljs.core.apply.call(null,cljs.core.hash_map,map__33069):map__33069);var opts = map__33069__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33067 = null;if (arguments.length > 1) {
  p__33067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33067);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33070){
var ports = cljs.core.first(arglist__33070);
var p__33067 = cljs.core.rest(arglist__33070);
return alts_BANG___delegate(ports,p__33067);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33078 = (function (ch,f,map_LT_,meta33079){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33079 = meta33079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33078.cljs$lang$type = true;
cljs.core.async.t33078.cljs$lang$ctorStr = "cljs.core.async/t33078";
cljs.core.async.t33078.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33078");
});
cljs.core.async.t33078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33081 = (function (fn1,_,meta33079,ch,f,map_LT_,meta33082){
this.fn1 = fn1;
this._ = _;
this.meta33079 = meta33079;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33082 = meta33082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33081.cljs$lang$type = true;
cljs.core.async.t33081.cljs$lang$ctorStr = "cljs.core.async/t33081";
cljs.core.async.t33081.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33081");
});
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33071_SHARP_){return f1.call(null,(((p1__33071_SHARP_ == null))?null:self__.f.call(null,p1__33071_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33083){var self__ = this;
var _33083__$1 = this;return self__.meta33082;
});
cljs.core.async.t33081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33083,meta33082__$1){var self__ = this;
var _33083__$1 = this;return (new cljs.core.async.t33081(self__.fn1,self__._,self__.meta33079,self__.ch,self__.f,self__.map_LT_,meta33082__$1));
});
cljs.core.async.__GT_t33081 = (function __GT_t33081(fn1__$1,___$2,meta33079__$1,ch__$2,f__$2,map_LT___$2,meta33082){return (new cljs.core.async.t33081(fn1__$1,___$2,meta33079__$1,ch__$2,f__$2,map_LT___$2,meta33082));
});
}
return (new cljs.core.async.t33081(fn1,___$1,self__.meta33079,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33078.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33080){var self__ = this;
var _33080__$1 = this;return self__.meta33079;
});
cljs.core.async.t33078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33080,meta33079__$1){var self__ = this;
var _33080__$1 = this;return (new cljs.core.async.t33078(self__.ch,self__.f,self__.map_LT_,meta33079__$1));
});
cljs.core.async.__GT_t33078 = (function __GT_t33078(ch__$1,f__$1,map_LT___$1,meta33079){return (new cljs.core.async.t33078(ch__$1,f__$1,map_LT___$1,meta33079));
});
}
return (new cljs.core.async.t33078(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33087 = (function (ch,f,map_GT_,meta33088){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33088 = meta33088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33087.cljs$lang$type = true;
cljs.core.async.t33087.cljs$lang$ctorStr = "cljs.core.async/t33087";
cljs.core.async.t33087.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33087");
});
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33089){var self__ = this;
var _33089__$1 = this;return self__.meta33088;
});
cljs.core.async.t33087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33089,meta33088__$1){var self__ = this;
var _33089__$1 = this;return (new cljs.core.async.t33087(self__.ch,self__.f,self__.map_GT_,meta33088__$1));
});
cljs.core.async.__GT_t33087 = (function __GT_t33087(ch__$1,f__$1,map_GT___$1,meta33088){return (new cljs.core.async.t33087(ch__$1,f__$1,map_GT___$1,meta33088));
});
}
return (new cljs.core.async.t33087(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33093 = (function (ch,p,filter_GT_,meta33094){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33094 = meta33094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33093.cljs$lang$type = true;
cljs.core.async.t33093.cljs$lang$ctorStr = "cljs.core.async/t33093";
cljs.core.async.t33093.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33093");
});
cljs.core.async.t33093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33093.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33095){var self__ = this;
var _33095__$1 = this;return self__.meta33094;
});
cljs.core.async.t33093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33095,meta33094__$1){var self__ = this;
var _33095__$1 = this;return (new cljs.core.async.t33093(self__.ch,self__.p,self__.filter_GT_,meta33094__$1));
});
cljs.core.async.__GT_t33093 = (function __GT_t33093(ch__$1,p__$1,filter_GT___$1,meta33094){return (new cljs.core.async.t33093(ch__$1,p__$1,filter_GT___$1,meta33094));
});
}
return (new cljs.core.async.t33093(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33178 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33157){var state_val_33158 = (state_33157[1]);if((state_val_33158 === 1))
{var state_33157__$1 = state_33157;var statearr_33159_33179 = state_33157__$1;(statearr_33159_33179[2] = null);
(statearr_33159_33179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33158 === 2))
{var state_33157__$1 = state_33157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33157__$1,4,ch);
} else
{if((state_val_33158 === 3))
{var inst_33155 = (state_33157[2]);var state_33157__$1 = state_33157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33157__$1,inst_33155);
} else
{if((state_val_33158 === 4))
{var inst_33139 = (state_33157[7]);var inst_33139__$1 = (state_33157[2]);var inst_33140 = (inst_33139__$1 == null);var state_33157__$1 = (function (){var statearr_33160 = state_33157;(statearr_33160[7] = inst_33139__$1);
return statearr_33160;
})();if(cljs.core.truth_(inst_33140))
{var statearr_33161_33180 = state_33157__$1;(statearr_33161_33180[1] = 5);
} else
{var statearr_33162_33181 = state_33157__$1;(statearr_33162_33181[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33158 === 5))
{var inst_33142 = cljs.core.async.close_BANG_.call(null,out);var state_33157__$1 = state_33157;var statearr_33163_33182 = state_33157__$1;(statearr_33163_33182[2] = inst_33142);
(statearr_33163_33182[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33158 === 6))
{var inst_33139 = (state_33157[7]);var inst_33144 = p.call(null,inst_33139);var state_33157__$1 = state_33157;if(cljs.core.truth_(inst_33144))
{var statearr_33164_33183 = state_33157__$1;(statearr_33164_33183[1] = 8);
} else
{var statearr_33165_33184 = state_33157__$1;(statearr_33165_33184[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33158 === 7))
{var inst_33153 = (state_33157[2]);var state_33157__$1 = state_33157;var statearr_33166_33185 = state_33157__$1;(statearr_33166_33185[2] = inst_33153);
(statearr_33166_33185[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33158 === 8))
{var inst_33139 = (state_33157[7]);var state_33157__$1 = state_33157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33157__$1,11,out,inst_33139);
} else
{if((state_val_33158 === 9))
{var state_33157__$1 = state_33157;var statearr_33167_33186 = state_33157__$1;(statearr_33167_33186[2] = null);
(statearr_33167_33186[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33158 === 10))
{var inst_33150 = (state_33157[2]);var state_33157__$1 = (function (){var statearr_33168 = state_33157;(statearr_33168[8] = inst_33150);
return statearr_33168;
})();var statearr_33169_33187 = state_33157__$1;(statearr_33169_33187[2] = null);
(statearr_33169_33187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33158 === 11))
{var inst_33147 = (state_33157[2]);var state_33157__$1 = state_33157;var statearr_33170_33188 = state_33157__$1;(statearr_33170_33188[2] = inst_33147);
(statearr_33170_33188[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33174 = [null,null,null,null,null,null,null,null,null];(statearr_33174[0] = state_machine__5507__auto__);
(statearr_33174[1] = 1);
return statearr_33174;
});
var state_machine__5507__auto____1 = (function (state_33157){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33157);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33175){if((e33175 instanceof Object))
{var ex__5510__auto__ = e33175;var statearr_33176_33189 = state_33157;(statearr_33176_33189[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33190 = state_33157;
state_33157 = G__33190;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33157){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33177 = f__5522__auto__.call(null);(statearr_33177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33178);
return statearr_33177;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33342){var state_val_33343 = (state_33342[1]);if((state_val_33343 === 1))
{var state_33342__$1 = state_33342;var statearr_33344_33381 = state_33342__$1;(statearr_33344_33381[2] = null);
(statearr_33344_33381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 2))
{var state_33342__$1 = state_33342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33342__$1,4,in$);
} else
{if((state_val_33343 === 3))
{var inst_33340 = (state_33342[2]);var state_33342__$1 = state_33342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33342__$1,inst_33340);
} else
{if((state_val_33343 === 4))
{var inst_33288 = (state_33342[7]);var inst_33288__$1 = (state_33342[2]);var inst_33289 = (inst_33288__$1 == null);var state_33342__$1 = (function (){var statearr_33345 = state_33342;(statearr_33345[7] = inst_33288__$1);
return statearr_33345;
})();if(cljs.core.truth_(inst_33289))
{var statearr_33346_33382 = state_33342__$1;(statearr_33346_33382[1] = 5);
} else
{var statearr_33347_33383 = state_33342__$1;(statearr_33347_33383[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 5))
{var inst_33291 = cljs.core.async.close_BANG_.call(null,out);var state_33342__$1 = state_33342;var statearr_33348_33384 = state_33342__$1;(statearr_33348_33384[2] = inst_33291);
(statearr_33348_33384[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 6))
{var inst_33288 = (state_33342[7]);var inst_33293 = f.call(null,inst_33288);var inst_33298 = cljs.core.seq.call(null,inst_33293);var inst_33299 = inst_33298;var inst_33300 = null;var inst_33301 = 0;var inst_33302 = 0;var state_33342__$1 = (function (){var statearr_33349 = state_33342;(statearr_33349[8] = inst_33302);
(statearr_33349[9] = inst_33301);
(statearr_33349[10] = inst_33300);
(statearr_33349[11] = inst_33299);
return statearr_33349;
})();var statearr_33350_33385 = state_33342__$1;(statearr_33350_33385[2] = null);
(statearr_33350_33385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 7))
{var inst_33338 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33351_33386 = state_33342__$1;(statearr_33351_33386[2] = inst_33338);
(statearr_33351_33386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 8))
{var inst_33302 = (state_33342[8]);var inst_33301 = (state_33342[9]);var inst_33304 = (inst_33302 < inst_33301);var inst_33305 = inst_33304;var state_33342__$1 = state_33342;if(cljs.core.truth_(inst_33305))
{var statearr_33352_33387 = state_33342__$1;(statearr_33352_33387[1] = 10);
} else
{var statearr_33353_33388 = state_33342__$1;(statearr_33353_33388[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 9))
{var inst_33335 = (state_33342[2]);var state_33342__$1 = (function (){var statearr_33354 = state_33342;(statearr_33354[12] = inst_33335);
return statearr_33354;
})();var statearr_33355_33389 = state_33342__$1;(statearr_33355_33389[2] = null);
(statearr_33355_33389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 10))
{var inst_33302 = (state_33342[8]);var inst_33300 = (state_33342[10]);var inst_33307 = cljs.core._nth.call(null,inst_33300,inst_33302);var state_33342__$1 = state_33342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33342__$1,13,out,inst_33307);
} else
{if((state_val_33343 === 11))
{var inst_33313 = (state_33342[13]);var inst_33299 = (state_33342[11]);var inst_33313__$1 = cljs.core.seq.call(null,inst_33299);var state_33342__$1 = (function (){var statearr_33359 = state_33342;(statearr_33359[13] = inst_33313__$1);
return statearr_33359;
})();if(inst_33313__$1)
{var statearr_33360_33390 = state_33342__$1;(statearr_33360_33390[1] = 14);
} else
{var statearr_33361_33391 = state_33342__$1;(statearr_33361_33391[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 12))
{var inst_33333 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33362_33392 = state_33342__$1;(statearr_33362_33392[2] = inst_33333);
(statearr_33362_33392[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 13))
{var inst_33302 = (state_33342[8]);var inst_33301 = (state_33342[9]);var inst_33300 = (state_33342[10]);var inst_33299 = (state_33342[11]);var inst_33309 = (state_33342[2]);var inst_33310 = (inst_33302 + 1);var tmp33356 = inst_33301;var tmp33357 = inst_33300;var tmp33358 = inst_33299;var inst_33299__$1 = tmp33358;var inst_33300__$1 = tmp33357;var inst_33301__$1 = tmp33356;var inst_33302__$1 = inst_33310;var state_33342__$1 = (function (){var statearr_33363 = state_33342;(statearr_33363[8] = inst_33302__$1);
(statearr_33363[14] = inst_33309);
(statearr_33363[9] = inst_33301__$1);
(statearr_33363[10] = inst_33300__$1);
(statearr_33363[11] = inst_33299__$1);
return statearr_33363;
})();var statearr_33364_33393 = state_33342__$1;(statearr_33364_33393[2] = null);
(statearr_33364_33393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 14))
{var inst_33313 = (state_33342[13]);var inst_33315 = cljs.core.chunked_seq_QMARK_.call(null,inst_33313);var state_33342__$1 = state_33342;if(inst_33315)
{var statearr_33365_33394 = state_33342__$1;(statearr_33365_33394[1] = 17);
} else
{var statearr_33366_33395 = state_33342__$1;(statearr_33366_33395[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 15))
{var state_33342__$1 = state_33342;var statearr_33367_33396 = state_33342__$1;(statearr_33367_33396[2] = null);
(statearr_33367_33396[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 16))
{var inst_33331 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33368_33397 = state_33342__$1;(statearr_33368_33397[2] = inst_33331);
(statearr_33368_33397[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 17))
{var inst_33313 = (state_33342[13]);var inst_33317 = cljs.core.chunk_first.call(null,inst_33313);var inst_33318 = cljs.core.chunk_rest.call(null,inst_33313);var inst_33319 = cljs.core.count.call(null,inst_33317);var inst_33299 = inst_33318;var inst_33300 = inst_33317;var inst_33301 = inst_33319;var inst_33302 = 0;var state_33342__$1 = (function (){var statearr_33369 = state_33342;(statearr_33369[8] = inst_33302);
(statearr_33369[9] = inst_33301);
(statearr_33369[10] = inst_33300);
(statearr_33369[11] = inst_33299);
return statearr_33369;
})();var statearr_33370_33398 = state_33342__$1;(statearr_33370_33398[2] = null);
(statearr_33370_33398[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 18))
{var inst_33313 = (state_33342[13]);var inst_33322 = cljs.core.first.call(null,inst_33313);var state_33342__$1 = state_33342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33342__$1,20,out,inst_33322);
} else
{if((state_val_33343 === 19))
{var inst_33328 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33371_33399 = state_33342__$1;(statearr_33371_33399[2] = inst_33328);
(statearr_33371_33399[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 20))
{var inst_33313 = (state_33342[13]);var inst_33324 = (state_33342[2]);var inst_33325 = cljs.core.next.call(null,inst_33313);var inst_33299 = inst_33325;var inst_33300 = null;var inst_33301 = 0;var inst_33302 = 0;var state_33342__$1 = (function (){var statearr_33372 = state_33342;(statearr_33372[8] = inst_33302);
(statearr_33372[9] = inst_33301);
(statearr_33372[10] = inst_33300);
(statearr_33372[15] = inst_33324);
(statearr_33372[11] = inst_33299);
return statearr_33372;
})();var statearr_33373_33400 = state_33342__$1;(statearr_33373_33400[2] = null);
(statearr_33373_33400[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33377[0] = state_machine__5507__auto__);
(statearr_33377[1] = 1);
return statearr_33377;
});
var state_machine__5507__auto____1 = (function (state_33342){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33342);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33378){if((e33378 instanceof Object))
{var ex__5510__auto__ = e33378;var statearr_33379_33401 = state_33342;(statearr_33379_33401[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33402 = state_33342;
state_33342 = G__33402;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33342){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33380 = f__5522__auto__.call(null);(statearr_33380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33380;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33462){var state_val_33463 = (state_33462[1]);if((state_val_33463 === 1))
{var state_33462__$1 = state_33462;var statearr_33464_33484 = state_33462__$1;(statearr_33464_33484[2] = null);
(statearr_33464_33484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33463 === 2))
{var state_33462__$1 = state_33462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33462__$1,4,from);
} else
{if((state_val_33463 === 3))
{var inst_33460 = (state_33462[2]);var state_33462__$1 = state_33462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33462__$1,inst_33460);
} else
{if((state_val_33463 === 4))
{var inst_33445 = (state_33462[7]);var inst_33445__$1 = (state_33462[2]);var inst_33446 = (inst_33445__$1 == null);var state_33462__$1 = (function (){var statearr_33465 = state_33462;(statearr_33465[7] = inst_33445__$1);
return statearr_33465;
})();if(cljs.core.truth_(inst_33446))
{var statearr_33466_33485 = state_33462__$1;(statearr_33466_33485[1] = 5);
} else
{var statearr_33467_33486 = state_33462__$1;(statearr_33467_33486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33463 === 5))
{var state_33462__$1 = state_33462;if(cljs.core.truth_(close_QMARK_))
{var statearr_33468_33487 = state_33462__$1;(statearr_33468_33487[1] = 8);
} else
{var statearr_33469_33488 = state_33462__$1;(statearr_33469_33488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33463 === 6))
{var inst_33445 = (state_33462[7]);var state_33462__$1 = state_33462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33462__$1,11,to,inst_33445);
} else
{if((state_val_33463 === 7))
{var inst_33458 = (state_33462[2]);var state_33462__$1 = state_33462;var statearr_33470_33489 = state_33462__$1;(statearr_33470_33489[2] = inst_33458);
(statearr_33470_33489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33463 === 8))
{var inst_33449 = cljs.core.async.close_BANG_.call(null,to);var state_33462__$1 = state_33462;var statearr_33471_33490 = state_33462__$1;(statearr_33471_33490[2] = inst_33449);
(statearr_33471_33490[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33463 === 9))
{var state_33462__$1 = state_33462;var statearr_33472_33491 = state_33462__$1;(statearr_33472_33491[2] = null);
(statearr_33472_33491[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33463 === 10))
{var inst_33452 = (state_33462[2]);var state_33462__$1 = state_33462;var statearr_33473_33492 = state_33462__$1;(statearr_33473_33492[2] = inst_33452);
(statearr_33473_33492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33463 === 11))
{var inst_33455 = (state_33462[2]);var state_33462__$1 = (function (){var statearr_33474 = state_33462;(statearr_33474[8] = inst_33455);
return statearr_33474;
})();var statearr_33475_33493 = state_33462__$1;(statearr_33475_33493[2] = null);
(statearr_33475_33493[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33479 = [null,null,null,null,null,null,null,null,null];(statearr_33479[0] = state_machine__5507__auto__);
(statearr_33479[1] = 1);
return statearr_33479;
});
var state_machine__5507__auto____1 = (function (state_33462){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33462);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33480){if((e33480 instanceof Object))
{var ex__5510__auto__ = e33480;var statearr_33481_33494 = state_33462;(statearr_33481_33494[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33462);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33495 = state_33462;
state_33462 = G__33495;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33462){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33482 = f__5522__auto__.call(null);(statearr_33482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33483);
return statearr_33482;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33560){var state_val_33561 = (state_33560[1]);if((state_val_33561 === 1))
{var state_33560__$1 = state_33560;var statearr_33562_33583 = state_33560__$1;(statearr_33562_33583[2] = null);
(statearr_33562_33583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 2))
{var state_33560__$1 = state_33560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33560__$1,4,ch);
} else
{if((state_val_33561 === 3))
{var inst_33558 = (state_33560[2]);var state_33560__$1 = state_33560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33560__$1,inst_33558);
} else
{if((state_val_33561 === 4))
{var inst_33541 = (state_33560[7]);var inst_33541__$1 = (state_33560[2]);var inst_33542 = (inst_33541__$1 == null);var state_33560__$1 = (function (){var statearr_33563 = state_33560;(statearr_33563[7] = inst_33541__$1);
return statearr_33563;
})();if(cljs.core.truth_(inst_33542))
{var statearr_33564_33584 = state_33560__$1;(statearr_33564_33584[1] = 5);
} else
{var statearr_33565_33585 = state_33560__$1;(statearr_33565_33585[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 5))
{var inst_33544 = cljs.core.async.close_BANG_.call(null,tc);var inst_33545 = cljs.core.async.close_BANG_.call(null,fc);var state_33560__$1 = (function (){var statearr_33566 = state_33560;(statearr_33566[8] = inst_33544);
return statearr_33566;
})();var statearr_33567_33586 = state_33560__$1;(statearr_33567_33586[2] = inst_33545);
(statearr_33567_33586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 6))
{var inst_33541 = (state_33560[7]);var inst_33547 = p.call(null,inst_33541);var state_33560__$1 = state_33560;if(cljs.core.truth_(inst_33547))
{var statearr_33568_33587 = state_33560__$1;(statearr_33568_33587[1] = 9);
} else
{var statearr_33569_33588 = state_33560__$1;(statearr_33569_33588[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 7))
{var inst_33556 = (state_33560[2]);var state_33560__$1 = state_33560;var statearr_33570_33589 = state_33560__$1;(statearr_33570_33589[2] = inst_33556);
(statearr_33570_33589[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 8))
{var inst_33553 = (state_33560[2]);var state_33560__$1 = (function (){var statearr_33571 = state_33560;(statearr_33571[9] = inst_33553);
return statearr_33571;
})();var statearr_33572_33590 = state_33560__$1;(statearr_33572_33590[2] = null);
(statearr_33572_33590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 9))
{var state_33560__$1 = state_33560;var statearr_33573_33591 = state_33560__$1;(statearr_33573_33591[2] = tc);
(statearr_33573_33591[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 10))
{var state_33560__$1 = state_33560;var statearr_33574_33592 = state_33560__$1;(statearr_33574_33592[2] = fc);
(statearr_33574_33592[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33561 === 11))
{var inst_33541 = (state_33560[7]);var inst_33551 = (state_33560[2]);var state_33560__$1 = state_33560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33560__$1,8,inst_33551,inst_33541);
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
var state_machine__5507__auto____0 = (function (){var statearr_33578 = [null,null,null,null,null,null,null,null,null,null];(statearr_33578[0] = state_machine__5507__auto__);
(statearr_33578[1] = 1);
return statearr_33578;
});
var state_machine__5507__auto____1 = (function (state_33560){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33560);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33579){if((e33579 instanceof Object))
{var ex__5510__auto__ = e33579;var statearr_33580_33593 = state_33560;(statearr_33580_33593[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33594 = state_33560;
state_33560 = G__33594;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33560){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33581 = f__5522__auto__.call(null);(statearr_33581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33582);
return statearr_33581;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33641){var state_val_33642 = (state_33641[1]);if((state_val_33642 === 7))
{var inst_33637 = (state_33641[2]);var state_33641__$1 = state_33641;var statearr_33643_33659 = state_33641__$1;(statearr_33643_33659[2] = inst_33637);
(statearr_33643_33659[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33642 === 6))
{var inst_33630 = (state_33641[7]);var inst_33627 = (state_33641[8]);var inst_33634 = f.call(null,inst_33627,inst_33630);var inst_33627__$1 = inst_33634;var state_33641__$1 = (function (){var statearr_33644 = state_33641;(statearr_33644[8] = inst_33627__$1);
return statearr_33644;
})();var statearr_33645_33660 = state_33641__$1;(statearr_33645_33660[2] = null);
(statearr_33645_33660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33642 === 5))
{var inst_33627 = (state_33641[8]);var state_33641__$1 = state_33641;var statearr_33646_33661 = state_33641__$1;(statearr_33646_33661[2] = inst_33627);
(statearr_33646_33661[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33642 === 4))
{var inst_33630 = (state_33641[7]);var inst_33630__$1 = (state_33641[2]);var inst_33631 = (inst_33630__$1 == null);var state_33641__$1 = (function (){var statearr_33647 = state_33641;(statearr_33647[7] = inst_33630__$1);
return statearr_33647;
})();if(cljs.core.truth_(inst_33631))
{var statearr_33648_33662 = state_33641__$1;(statearr_33648_33662[1] = 5);
} else
{var statearr_33649_33663 = state_33641__$1;(statearr_33649_33663[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33642 === 3))
{var inst_33639 = (state_33641[2]);var state_33641__$1 = state_33641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33641__$1,inst_33639);
} else
{if((state_val_33642 === 2))
{var state_33641__$1 = state_33641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33641__$1,4,ch);
} else
{if((state_val_33642 === 1))
{var inst_33627 = init;var state_33641__$1 = (function (){var statearr_33650 = state_33641;(statearr_33650[8] = inst_33627);
return statearr_33650;
})();var statearr_33651_33664 = state_33641__$1;(statearr_33651_33664[2] = null);
(statearr_33651_33664[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33655 = [null,null,null,null,null,null,null,null,null];(statearr_33655[0] = state_machine__5507__auto__);
(statearr_33655[1] = 1);
return statearr_33655;
});
var state_machine__5507__auto____1 = (function (state_33641){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33641);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33656){if((e33656 instanceof Object))
{var ex__5510__auto__ = e33656;var statearr_33657_33665 = state_33641;(statearr_33657_33665[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33641);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33666 = state_33641;
state_33641 = G__33666;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33641){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33658 = f__5522__auto__.call(null);(statearr_33658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33658;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33728){var state_val_33729 = (state_33728[1]);if((state_val_33729 === 1))
{var inst_33708 = cljs.core.seq.call(null,coll);var inst_33709 = inst_33708;var state_33728__$1 = (function (){var statearr_33730 = state_33728;(statearr_33730[7] = inst_33709);
return statearr_33730;
})();var statearr_33731_33749 = state_33728__$1;(statearr_33731_33749[2] = null);
(statearr_33731_33749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33729 === 2))
{var inst_33709 = (state_33728[7]);var state_33728__$1 = state_33728;if(cljs.core.truth_(inst_33709))
{var statearr_33732_33750 = state_33728__$1;(statearr_33732_33750[1] = 4);
} else
{var statearr_33733_33751 = state_33728__$1;(statearr_33733_33751[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33729 === 3))
{var inst_33726 = (state_33728[2]);var state_33728__$1 = state_33728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33728__$1,inst_33726);
} else
{if((state_val_33729 === 4))
{var inst_33709 = (state_33728[7]);var inst_33712 = cljs.core.first.call(null,inst_33709);var state_33728__$1 = state_33728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33728__$1,7,ch,inst_33712);
} else
{if((state_val_33729 === 5))
{var state_33728__$1 = state_33728;if(cljs.core.truth_(close_QMARK_))
{var statearr_33734_33752 = state_33728__$1;(statearr_33734_33752[1] = 8);
} else
{var statearr_33735_33753 = state_33728__$1;(statearr_33735_33753[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33729 === 6))
{var inst_33724 = (state_33728[2]);var state_33728__$1 = state_33728;var statearr_33736_33754 = state_33728__$1;(statearr_33736_33754[2] = inst_33724);
(statearr_33736_33754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33729 === 7))
{var inst_33709 = (state_33728[7]);var inst_33714 = (state_33728[2]);var inst_33715 = cljs.core.next.call(null,inst_33709);var inst_33709__$1 = inst_33715;var state_33728__$1 = (function (){var statearr_33737 = state_33728;(statearr_33737[7] = inst_33709__$1);
(statearr_33737[8] = inst_33714);
return statearr_33737;
})();var statearr_33738_33755 = state_33728__$1;(statearr_33738_33755[2] = null);
(statearr_33738_33755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33729 === 8))
{var inst_33719 = cljs.core.async.close_BANG_.call(null,ch);var state_33728__$1 = state_33728;var statearr_33739_33756 = state_33728__$1;(statearr_33739_33756[2] = inst_33719);
(statearr_33739_33756[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33729 === 9))
{var state_33728__$1 = state_33728;var statearr_33740_33757 = state_33728__$1;(statearr_33740_33757[2] = null);
(statearr_33740_33757[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33729 === 10))
{var inst_33722 = (state_33728[2]);var state_33728__$1 = state_33728;var statearr_33741_33758 = state_33728__$1;(statearr_33741_33758[2] = inst_33722);
(statearr_33741_33758[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33745 = [null,null,null,null,null,null,null,null,null];(statearr_33745[0] = state_machine__5507__auto__);
(statearr_33745[1] = 1);
return statearr_33745;
});
var state_machine__5507__auto____1 = (function (state_33728){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33746){if((e33746 instanceof Object))
{var ex__5510__auto__ = e33746;var statearr_33747_33759 = state_33728;(statearr_33747_33759[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33760 = state_33728;
state_33728 = G__33760;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33748 = f__5522__auto__.call(null);(statearr_33748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33748;
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
cljs.core.async.Mux = (function (){var obj33762 = {};return obj33762;
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
cljs.core.async.Mult = (function (){var obj33764 = {};return obj33764;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33988 = (function (cs,ch,mult,meta33989){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33989 = meta33989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33988.cljs$lang$type = true;
cljs.core.async.t33988.cljs$lang$ctorStr = "cljs.core.async/t33988";
cljs.core.async.t33988.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33988");
});})(cs))
;
cljs.core.async.t33988.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33988.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33988.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33988.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33988.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33990){var self__ = this;
var _33990__$1 = this;return self__.meta33989;
});})(cs))
;
cljs.core.async.t33988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33990,meta33989__$1){var self__ = this;
var _33990__$1 = this;return (new cljs.core.async.t33988(self__.cs,self__.ch,self__.mult,meta33989__$1));
});})(cs))
;
cljs.core.async.__GT_t33988 = ((function (cs){
return (function __GT_t33988(cs__$1,ch__$1,mult__$1,meta33989){return (new cljs.core.async.t33988(cs__$1,ch__$1,mult__$1,meta33989));
});})(cs))
;
}
return (new cljs.core.async.t33988(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34125){var state_val_34126 = (state_34125[1]);if((state_val_34126 === 32))
{var inst_33993 = (state_34125[7]);var inst_34069 = (state_34125[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34125,31,Object,null,30);var inst_34076 = cljs.core.async.put_BANG_.call(null,inst_34069,inst_33993,done);var state_34125__$1 = state_34125;var statearr_34127_34212 = state_34125__$1;(statearr_34127_34212[2] = inst_34076);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 1))
{var state_34125__$1 = state_34125;var statearr_34128_34213 = state_34125__$1;(statearr_34128_34213[2] = null);
(statearr_34128_34213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 33))
{var inst_34082 = (state_34125[9]);var inst_34084 = cljs.core.chunked_seq_QMARK_.call(null,inst_34082);var state_34125__$1 = state_34125;if(inst_34084)
{var statearr_34129_34214 = state_34125__$1;(statearr_34129_34214[1] = 36);
} else
{var statearr_34130_34215 = state_34125__$1;(statearr_34130_34215[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 2))
{var state_34125__$1 = state_34125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34125__$1,4,ch);
} else
{if((state_val_34126 === 34))
{var state_34125__$1 = state_34125;var statearr_34131_34216 = state_34125__$1;(statearr_34131_34216[2] = null);
(statearr_34131_34216[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 3))
{var inst_34123 = (state_34125[2]);var state_34125__$1 = state_34125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34125__$1,inst_34123);
} else
{if((state_val_34126 === 35))
{var inst_34107 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34132_34217 = state_34125__$1;(statearr_34132_34217[2] = inst_34107);
(statearr_34132_34217[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 4))
{var inst_33993 = (state_34125[7]);var inst_33993__$1 = (state_34125[2]);var inst_33994 = (inst_33993__$1 == null);var state_34125__$1 = (function (){var statearr_34133 = state_34125;(statearr_34133[7] = inst_33993__$1);
return statearr_34133;
})();if(cljs.core.truth_(inst_33994))
{var statearr_34134_34218 = state_34125__$1;(statearr_34134_34218[1] = 5);
} else
{var statearr_34135_34219 = state_34125__$1;(statearr_34135_34219[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 36))
{var inst_34082 = (state_34125[9]);var inst_34086 = cljs.core.chunk_first.call(null,inst_34082);var inst_34087 = cljs.core.chunk_rest.call(null,inst_34082);var inst_34088 = cljs.core.count.call(null,inst_34086);var inst_34061 = inst_34087;var inst_34062 = inst_34086;var inst_34063 = inst_34088;var inst_34064 = 0;var state_34125__$1 = (function (){var statearr_34136 = state_34125;(statearr_34136[10] = inst_34064);
(statearr_34136[11] = inst_34061);
(statearr_34136[12] = inst_34063);
(statearr_34136[13] = inst_34062);
return statearr_34136;
})();var statearr_34137_34220 = state_34125__$1;(statearr_34137_34220[2] = null);
(statearr_34137_34220[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 5))
{var inst_34000 = cljs.core.deref.call(null,cs);var inst_34001 = cljs.core.seq.call(null,inst_34000);var inst_34002 = inst_34001;var inst_34003 = null;var inst_34004 = 0;var inst_34005 = 0;var state_34125__$1 = (function (){var statearr_34138 = state_34125;(statearr_34138[14] = inst_34005);
(statearr_34138[15] = inst_34004);
(statearr_34138[16] = inst_34003);
(statearr_34138[17] = inst_34002);
return statearr_34138;
})();var statearr_34139_34221 = state_34125__$1;(statearr_34139_34221[2] = null);
(statearr_34139_34221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 37))
{var inst_34082 = (state_34125[9]);var inst_34091 = cljs.core.first.call(null,inst_34082);var state_34125__$1 = (function (){var statearr_34140 = state_34125;(statearr_34140[18] = inst_34091);
return statearr_34140;
})();var statearr_34141_34222 = state_34125__$1;(statearr_34141_34222[2] = null);
(statearr_34141_34222[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 6))
{var inst_34053 = (state_34125[19]);var inst_34052 = cljs.core.deref.call(null,cs);var inst_34053__$1 = cljs.core.keys.call(null,inst_34052);var inst_34054 = cljs.core.count.call(null,inst_34053__$1);var inst_34055 = cljs.core.reset_BANG_.call(null,dctr,inst_34054);var inst_34060 = cljs.core.seq.call(null,inst_34053__$1);var inst_34061 = inst_34060;var inst_34062 = null;var inst_34063 = 0;var inst_34064 = 0;var state_34125__$1 = (function (){var statearr_34142 = state_34125;(statearr_34142[20] = inst_34055);
(statearr_34142[19] = inst_34053__$1);
(statearr_34142[10] = inst_34064);
(statearr_34142[11] = inst_34061);
(statearr_34142[12] = inst_34063);
(statearr_34142[13] = inst_34062);
return statearr_34142;
})();var statearr_34143_34223 = state_34125__$1;(statearr_34143_34223[2] = null);
(statearr_34143_34223[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 38))
{var inst_34104 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34144_34224 = state_34125__$1;(statearr_34144_34224[2] = inst_34104);
(statearr_34144_34224[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 7))
{var inst_34121 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34145_34225 = state_34125__$1;(statearr_34145_34225[2] = inst_34121);
(statearr_34145_34225[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 39))
{var inst_34082 = (state_34125[9]);var inst_34100 = (state_34125[2]);var inst_34101 = cljs.core.next.call(null,inst_34082);var inst_34061 = inst_34101;var inst_34062 = null;var inst_34063 = 0;var inst_34064 = 0;var state_34125__$1 = (function (){var statearr_34146 = state_34125;(statearr_34146[21] = inst_34100);
(statearr_34146[10] = inst_34064);
(statearr_34146[11] = inst_34061);
(statearr_34146[12] = inst_34063);
(statearr_34146[13] = inst_34062);
return statearr_34146;
})();var statearr_34147_34226 = state_34125__$1;(statearr_34147_34226[2] = null);
(statearr_34147_34226[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 8))
{var inst_34005 = (state_34125[14]);var inst_34004 = (state_34125[15]);var inst_34007 = (inst_34005 < inst_34004);var inst_34008 = inst_34007;var state_34125__$1 = state_34125;if(cljs.core.truth_(inst_34008))
{var statearr_34148_34227 = state_34125__$1;(statearr_34148_34227[1] = 10);
} else
{var statearr_34149_34228 = state_34125__$1;(statearr_34149_34228[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 40))
{var inst_34091 = (state_34125[18]);var inst_34092 = (state_34125[2]);var inst_34093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34094 = cljs.core.async.untap_STAR_.call(null,m,inst_34091);var state_34125__$1 = (function (){var statearr_34150 = state_34125;(statearr_34150[22] = inst_34093);
(statearr_34150[23] = inst_34092);
return statearr_34150;
})();var statearr_34151_34229 = state_34125__$1;(statearr_34151_34229[2] = inst_34094);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 9))
{var inst_34050 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34152_34230 = state_34125__$1;(statearr_34152_34230[2] = inst_34050);
(statearr_34152_34230[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 41))
{var inst_33993 = (state_34125[7]);var inst_34091 = (state_34125[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34125,40,Object,null,39);var inst_34098 = cljs.core.async.put_BANG_.call(null,inst_34091,inst_33993,done);var state_34125__$1 = state_34125;var statearr_34153_34231 = state_34125__$1;(statearr_34153_34231[2] = inst_34098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 10))
{var inst_34005 = (state_34125[14]);var inst_34003 = (state_34125[16]);var inst_34011 = cljs.core._nth.call(null,inst_34003,inst_34005);var inst_34012 = cljs.core.nth.call(null,inst_34011,0,null);var inst_34013 = cljs.core.nth.call(null,inst_34011,1,null);var state_34125__$1 = (function (){var statearr_34154 = state_34125;(statearr_34154[24] = inst_34012);
return statearr_34154;
})();if(cljs.core.truth_(inst_34013))
{var statearr_34155_34232 = state_34125__$1;(statearr_34155_34232[1] = 13);
} else
{var statearr_34156_34233 = state_34125__$1;(statearr_34156_34233[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 42))
{var state_34125__$1 = state_34125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34125__$1,45,dchan);
} else
{if((state_val_34126 === 11))
{var inst_34002 = (state_34125[17]);var inst_34022 = (state_34125[25]);var inst_34022__$1 = cljs.core.seq.call(null,inst_34002);var state_34125__$1 = (function (){var statearr_34157 = state_34125;(statearr_34157[25] = inst_34022__$1);
return statearr_34157;
})();if(inst_34022__$1)
{var statearr_34158_34234 = state_34125__$1;(statearr_34158_34234[1] = 16);
} else
{var statearr_34159_34235 = state_34125__$1;(statearr_34159_34235[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 43))
{var state_34125__$1 = state_34125;var statearr_34160_34236 = state_34125__$1;(statearr_34160_34236[2] = null);
(statearr_34160_34236[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 12))
{var inst_34048 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34161_34237 = state_34125__$1;(statearr_34161_34237[2] = inst_34048);
(statearr_34161_34237[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 44))
{var inst_34118 = (state_34125[2]);var state_34125__$1 = (function (){var statearr_34162 = state_34125;(statearr_34162[26] = inst_34118);
return statearr_34162;
})();var statearr_34163_34238 = state_34125__$1;(statearr_34163_34238[2] = null);
(statearr_34163_34238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 13))
{var inst_34012 = (state_34125[24]);var inst_34015 = cljs.core.async.close_BANG_.call(null,inst_34012);var state_34125__$1 = state_34125;var statearr_34164_34239 = state_34125__$1;(statearr_34164_34239[2] = inst_34015);
(statearr_34164_34239[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 45))
{var inst_34115 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34168_34240 = state_34125__$1;(statearr_34168_34240[2] = inst_34115);
(statearr_34168_34240[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 14))
{var state_34125__$1 = state_34125;var statearr_34169_34241 = state_34125__$1;(statearr_34169_34241[2] = null);
(statearr_34169_34241[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 15))
{var inst_34005 = (state_34125[14]);var inst_34004 = (state_34125[15]);var inst_34003 = (state_34125[16]);var inst_34002 = (state_34125[17]);var inst_34018 = (state_34125[2]);var inst_34019 = (inst_34005 + 1);var tmp34165 = inst_34004;var tmp34166 = inst_34003;var tmp34167 = inst_34002;var inst_34002__$1 = tmp34167;var inst_34003__$1 = tmp34166;var inst_34004__$1 = tmp34165;var inst_34005__$1 = inst_34019;var state_34125__$1 = (function (){var statearr_34170 = state_34125;(statearr_34170[14] = inst_34005__$1);
(statearr_34170[15] = inst_34004__$1);
(statearr_34170[16] = inst_34003__$1);
(statearr_34170[17] = inst_34002__$1);
(statearr_34170[27] = inst_34018);
return statearr_34170;
})();var statearr_34171_34242 = state_34125__$1;(statearr_34171_34242[2] = null);
(statearr_34171_34242[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 16))
{var inst_34022 = (state_34125[25]);var inst_34024 = cljs.core.chunked_seq_QMARK_.call(null,inst_34022);var state_34125__$1 = state_34125;if(inst_34024)
{var statearr_34172_34243 = state_34125__$1;(statearr_34172_34243[1] = 19);
} else
{var statearr_34173_34244 = state_34125__$1;(statearr_34173_34244[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 17))
{var state_34125__$1 = state_34125;var statearr_34174_34245 = state_34125__$1;(statearr_34174_34245[2] = null);
(statearr_34174_34245[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 18))
{var inst_34046 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34175_34246 = state_34125__$1;(statearr_34175_34246[2] = inst_34046);
(statearr_34175_34246[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 19))
{var inst_34022 = (state_34125[25]);var inst_34026 = cljs.core.chunk_first.call(null,inst_34022);var inst_34027 = cljs.core.chunk_rest.call(null,inst_34022);var inst_34028 = cljs.core.count.call(null,inst_34026);var inst_34002 = inst_34027;var inst_34003 = inst_34026;var inst_34004 = inst_34028;var inst_34005 = 0;var state_34125__$1 = (function (){var statearr_34176 = state_34125;(statearr_34176[14] = inst_34005);
(statearr_34176[15] = inst_34004);
(statearr_34176[16] = inst_34003);
(statearr_34176[17] = inst_34002);
return statearr_34176;
})();var statearr_34177_34247 = state_34125__$1;(statearr_34177_34247[2] = null);
(statearr_34177_34247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 20))
{var inst_34022 = (state_34125[25]);var inst_34032 = cljs.core.first.call(null,inst_34022);var inst_34033 = cljs.core.nth.call(null,inst_34032,0,null);var inst_34034 = cljs.core.nth.call(null,inst_34032,1,null);var state_34125__$1 = (function (){var statearr_34178 = state_34125;(statearr_34178[28] = inst_34033);
return statearr_34178;
})();if(cljs.core.truth_(inst_34034))
{var statearr_34179_34248 = state_34125__$1;(statearr_34179_34248[1] = 22);
} else
{var statearr_34180_34249 = state_34125__$1;(statearr_34180_34249[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 21))
{var inst_34043 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34181_34250 = state_34125__$1;(statearr_34181_34250[2] = inst_34043);
(statearr_34181_34250[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 22))
{var inst_34033 = (state_34125[28]);var inst_34036 = cljs.core.async.close_BANG_.call(null,inst_34033);var state_34125__$1 = state_34125;var statearr_34182_34251 = state_34125__$1;(statearr_34182_34251[2] = inst_34036);
(statearr_34182_34251[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 23))
{var state_34125__$1 = state_34125;var statearr_34183_34252 = state_34125__$1;(statearr_34183_34252[2] = null);
(statearr_34183_34252[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 24))
{var inst_34022 = (state_34125[25]);var inst_34039 = (state_34125[2]);var inst_34040 = cljs.core.next.call(null,inst_34022);var inst_34002 = inst_34040;var inst_34003 = null;var inst_34004 = 0;var inst_34005 = 0;var state_34125__$1 = (function (){var statearr_34184 = state_34125;(statearr_34184[14] = inst_34005);
(statearr_34184[29] = inst_34039);
(statearr_34184[15] = inst_34004);
(statearr_34184[16] = inst_34003);
(statearr_34184[17] = inst_34002);
return statearr_34184;
})();var statearr_34185_34253 = state_34125__$1;(statearr_34185_34253[2] = null);
(statearr_34185_34253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 25))
{var inst_34064 = (state_34125[10]);var inst_34063 = (state_34125[12]);var inst_34066 = (inst_34064 < inst_34063);var inst_34067 = inst_34066;var state_34125__$1 = state_34125;if(cljs.core.truth_(inst_34067))
{var statearr_34186_34254 = state_34125__$1;(statearr_34186_34254[1] = 27);
} else
{var statearr_34187_34255 = state_34125__$1;(statearr_34187_34255[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 26))
{var inst_34053 = (state_34125[19]);var inst_34111 = (state_34125[2]);var inst_34112 = cljs.core.seq.call(null,inst_34053);var state_34125__$1 = (function (){var statearr_34188 = state_34125;(statearr_34188[30] = inst_34111);
return statearr_34188;
})();if(inst_34112)
{var statearr_34189_34256 = state_34125__$1;(statearr_34189_34256[1] = 42);
} else
{var statearr_34190_34257 = state_34125__$1;(statearr_34190_34257[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 27))
{var inst_34064 = (state_34125[10]);var inst_34062 = (state_34125[13]);var inst_34069 = cljs.core._nth.call(null,inst_34062,inst_34064);var state_34125__$1 = (function (){var statearr_34191 = state_34125;(statearr_34191[8] = inst_34069);
return statearr_34191;
})();var statearr_34192_34258 = state_34125__$1;(statearr_34192_34258[2] = null);
(statearr_34192_34258[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 28))
{var inst_34082 = (state_34125[9]);var inst_34061 = (state_34125[11]);var inst_34082__$1 = cljs.core.seq.call(null,inst_34061);var state_34125__$1 = (function (){var statearr_34196 = state_34125;(statearr_34196[9] = inst_34082__$1);
return statearr_34196;
})();if(inst_34082__$1)
{var statearr_34197_34259 = state_34125__$1;(statearr_34197_34259[1] = 33);
} else
{var statearr_34198_34260 = state_34125__$1;(statearr_34198_34260[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 29))
{var inst_34109 = (state_34125[2]);var state_34125__$1 = state_34125;var statearr_34199_34261 = state_34125__$1;(statearr_34199_34261[2] = inst_34109);
(statearr_34199_34261[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 30))
{var inst_34064 = (state_34125[10]);var inst_34061 = (state_34125[11]);var inst_34063 = (state_34125[12]);var inst_34062 = (state_34125[13]);var inst_34078 = (state_34125[2]);var inst_34079 = (inst_34064 + 1);var tmp34193 = inst_34061;var tmp34194 = inst_34063;var tmp34195 = inst_34062;var inst_34061__$1 = tmp34193;var inst_34062__$1 = tmp34195;var inst_34063__$1 = tmp34194;var inst_34064__$1 = inst_34079;var state_34125__$1 = (function (){var statearr_34200 = state_34125;(statearr_34200[10] = inst_34064__$1);
(statearr_34200[11] = inst_34061__$1);
(statearr_34200[12] = inst_34063__$1);
(statearr_34200[13] = inst_34062__$1);
(statearr_34200[31] = inst_34078);
return statearr_34200;
})();var statearr_34201_34262 = state_34125__$1;(statearr_34201_34262[2] = null);
(statearr_34201_34262[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34126 === 31))
{var inst_34069 = (state_34125[8]);var inst_34070 = (state_34125[2]);var inst_34071 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34072 = cljs.core.async.untap_STAR_.call(null,m,inst_34069);var state_34125__$1 = (function (){var statearr_34202 = state_34125;(statearr_34202[32] = inst_34070);
(statearr_34202[33] = inst_34071);
return statearr_34202;
})();var statearr_34203_34263 = state_34125__$1;(statearr_34203_34263[2] = inst_34072);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34125__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34207[0] = state_machine__5507__auto__);
(statearr_34207[1] = 1);
return statearr_34207;
});
var state_machine__5507__auto____1 = (function (state_34125){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34125);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34208){if((e34208 instanceof Object))
{var ex__5510__auto__ = e34208;var statearr_34209_34264 = state_34125;(statearr_34209_34264[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34265 = state_34125;
state_34125 = G__34265;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34210 = f__5522__auto__.call(null);(statearr_34210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34211);
return statearr_34210;
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
cljs.core.async.Mix = (function (){var obj34267 = {};return obj34267;
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
;var m = (function (){if(typeof cljs.core.async.t34377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34377 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34378){
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
this.meta34378 = meta34378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34377.cljs$lang$type = true;
cljs.core.async.t34377.cljs$lang$ctorStr = "cljs.core.async/t34377";
cljs.core.async.t34377.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34377");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34377.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34379){var self__ = this;
var _34379__$1 = this;return self__.meta34378;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34379,meta34378__$1){var self__ = this;
var _34379__$1 = this;return (new cljs.core.async.t34377(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34378__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34377 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34377(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34378){return (new cljs.core.async.t34377(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34378));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34377(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34486 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34444){var state_val_34445 = (state_34444[1]);if((state_val_34445 === 1))
{var inst_34383 = (state_34444[7]);var inst_34383__$1 = calc_state.call(null);var inst_34384 = cljs.core.seq_QMARK_.call(null,inst_34383__$1);var state_34444__$1 = (function (){var statearr_34446 = state_34444;(statearr_34446[7] = inst_34383__$1);
return statearr_34446;
})();if(inst_34384)
{var statearr_34447_34487 = state_34444__$1;(statearr_34447_34487[1] = 2);
} else
{var statearr_34448_34488 = state_34444__$1;(statearr_34448_34488[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 2))
{var inst_34383 = (state_34444[7]);var inst_34386 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34383);var state_34444__$1 = state_34444;var statearr_34449_34489 = state_34444__$1;(statearr_34449_34489[2] = inst_34386);
(statearr_34449_34489[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 3))
{var inst_34383 = (state_34444[7]);var state_34444__$1 = state_34444;var statearr_34450_34490 = state_34444__$1;(statearr_34450_34490[2] = inst_34383);
(statearr_34450_34490[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 4))
{var inst_34383 = (state_34444[7]);var inst_34389 = (state_34444[2]);var inst_34390 = cljs.core.get.call(null,inst_34389,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34391 = cljs.core.get.call(null,inst_34389,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34392 = cljs.core.get.call(null,inst_34389,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34393 = inst_34383;var state_34444__$1 = (function (){var statearr_34451 = state_34444;(statearr_34451[8] = inst_34391);
(statearr_34451[9] = inst_34390);
(statearr_34451[10] = inst_34393);
(statearr_34451[11] = inst_34392);
return statearr_34451;
})();var statearr_34452_34491 = state_34444__$1;(statearr_34452_34491[2] = null);
(statearr_34452_34491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 5))
{var inst_34393 = (state_34444[10]);var inst_34396 = cljs.core.seq_QMARK_.call(null,inst_34393);var state_34444__$1 = state_34444;if(inst_34396)
{var statearr_34453_34492 = state_34444__$1;(statearr_34453_34492[1] = 7);
} else
{var statearr_34454_34493 = state_34444__$1;(statearr_34454_34493[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 6))
{var inst_34442 = (state_34444[2]);var state_34444__$1 = state_34444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34444__$1,inst_34442);
} else
{if((state_val_34445 === 7))
{var inst_34393 = (state_34444[10]);var inst_34398 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34393);var state_34444__$1 = state_34444;var statearr_34455_34494 = state_34444__$1;(statearr_34455_34494[2] = inst_34398);
(statearr_34455_34494[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 8))
{var inst_34393 = (state_34444[10]);var state_34444__$1 = state_34444;var statearr_34456_34495 = state_34444__$1;(statearr_34456_34495[2] = inst_34393);
(statearr_34456_34495[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 9))
{var inst_34401 = (state_34444[12]);var inst_34401__$1 = (state_34444[2]);var inst_34402 = cljs.core.get.call(null,inst_34401__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34403 = cljs.core.get.call(null,inst_34401__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34404 = cljs.core.get.call(null,inst_34401__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34444__$1 = (function (){var statearr_34457 = state_34444;(statearr_34457[13] = inst_34403);
(statearr_34457[14] = inst_34404);
(statearr_34457[12] = inst_34401__$1);
return statearr_34457;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34444__$1,10,inst_34402);
} else
{if((state_val_34445 === 10))
{var inst_34409 = (state_34444[15]);var inst_34408 = (state_34444[16]);var inst_34407 = (state_34444[2]);var inst_34408__$1 = cljs.core.nth.call(null,inst_34407,0,null);var inst_34409__$1 = cljs.core.nth.call(null,inst_34407,1,null);var inst_34410 = (inst_34408__$1 == null);var inst_34411 = cljs.core._EQ_.call(null,inst_34409__$1,change);var inst_34412 = (inst_34410) || (inst_34411);var state_34444__$1 = (function (){var statearr_34458 = state_34444;(statearr_34458[15] = inst_34409__$1);
(statearr_34458[16] = inst_34408__$1);
return statearr_34458;
})();if(cljs.core.truth_(inst_34412))
{var statearr_34459_34496 = state_34444__$1;(statearr_34459_34496[1] = 11);
} else
{var statearr_34460_34497 = state_34444__$1;(statearr_34460_34497[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 11))
{var inst_34408 = (state_34444[16]);var inst_34414 = (inst_34408 == null);var state_34444__$1 = state_34444;if(cljs.core.truth_(inst_34414))
{var statearr_34461_34498 = state_34444__$1;(statearr_34461_34498[1] = 14);
} else
{var statearr_34462_34499 = state_34444__$1;(statearr_34462_34499[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 12))
{var inst_34404 = (state_34444[14]);var inst_34409 = (state_34444[15]);var inst_34423 = (state_34444[17]);var inst_34423__$1 = inst_34404.call(null,inst_34409);var state_34444__$1 = (function (){var statearr_34463 = state_34444;(statearr_34463[17] = inst_34423__$1);
return statearr_34463;
})();if(cljs.core.truth_(inst_34423__$1))
{var statearr_34464_34500 = state_34444__$1;(statearr_34464_34500[1] = 17);
} else
{var statearr_34465_34501 = state_34444__$1;(statearr_34465_34501[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 13))
{var inst_34440 = (state_34444[2]);var state_34444__$1 = state_34444;var statearr_34466_34502 = state_34444__$1;(statearr_34466_34502[2] = inst_34440);
(statearr_34466_34502[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 14))
{var inst_34409 = (state_34444[15]);var inst_34416 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34409);var state_34444__$1 = state_34444;var statearr_34467_34503 = state_34444__$1;(statearr_34467_34503[2] = inst_34416);
(statearr_34467_34503[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 15))
{var state_34444__$1 = state_34444;var statearr_34468_34504 = state_34444__$1;(statearr_34468_34504[2] = null);
(statearr_34468_34504[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 16))
{var inst_34419 = (state_34444[2]);var inst_34420 = calc_state.call(null);var inst_34393 = inst_34420;var state_34444__$1 = (function (){var statearr_34469 = state_34444;(statearr_34469[18] = inst_34419);
(statearr_34469[10] = inst_34393);
return statearr_34469;
})();var statearr_34470_34505 = state_34444__$1;(statearr_34470_34505[2] = null);
(statearr_34470_34505[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 17))
{var inst_34423 = (state_34444[17]);var state_34444__$1 = state_34444;var statearr_34471_34506 = state_34444__$1;(statearr_34471_34506[2] = inst_34423);
(statearr_34471_34506[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 18))
{var inst_34403 = (state_34444[13]);var inst_34404 = (state_34444[14]);var inst_34409 = (state_34444[15]);var inst_34426 = cljs.core.empty_QMARK_.call(null,inst_34404);var inst_34427 = inst_34403.call(null,inst_34409);var inst_34428 = cljs.core.not.call(null,inst_34427);var inst_34429 = (inst_34426) && (inst_34428);var state_34444__$1 = state_34444;var statearr_34472_34507 = state_34444__$1;(statearr_34472_34507[2] = inst_34429);
(statearr_34472_34507[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 19))
{var inst_34431 = (state_34444[2]);var state_34444__$1 = state_34444;if(cljs.core.truth_(inst_34431))
{var statearr_34473_34508 = state_34444__$1;(statearr_34473_34508[1] = 20);
} else
{var statearr_34474_34509 = state_34444__$1;(statearr_34474_34509[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 20))
{var inst_34408 = (state_34444[16]);var state_34444__$1 = state_34444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34444__$1,23,out,inst_34408);
} else
{if((state_val_34445 === 21))
{var state_34444__$1 = state_34444;var statearr_34475_34510 = state_34444__$1;(statearr_34475_34510[2] = null);
(statearr_34475_34510[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 22))
{var inst_34401 = (state_34444[12]);var inst_34437 = (state_34444[2]);var inst_34393 = inst_34401;var state_34444__$1 = (function (){var statearr_34476 = state_34444;(statearr_34476[19] = inst_34437);
(statearr_34476[10] = inst_34393);
return statearr_34476;
})();var statearr_34477_34511 = state_34444__$1;(statearr_34477_34511[2] = null);
(statearr_34477_34511[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34445 === 23))
{var inst_34434 = (state_34444[2]);var state_34444__$1 = state_34444;var statearr_34478_34512 = state_34444__$1;(statearr_34478_34512[2] = inst_34434);
(statearr_34478_34512[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34482[0] = state_machine__5507__auto__);
(statearr_34482[1] = 1);
return statearr_34482;
});
var state_machine__5507__auto____1 = (function (state_34444){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34444);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34483){if((e34483 instanceof Object))
{var ex__5510__auto__ = e34483;var statearr_34484_34513 = state_34444;(statearr_34484_34513[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34514 = state_34444;
state_34444 = G__34514;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34444){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34485 = f__5522__auto__.call(null);(statearr_34485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34486);
return statearr_34485;
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
cljs.core.async.Pub = (function (){var obj34516 = {};return obj34516;
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
return (function (p1__34517_SHARP_){if(cljs.core.truth_(p1__34517_SHARP_.call(null,topic)))
{return p1__34517_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34517_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34642 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34643){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34643 = meta34643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34642.cljs$lang$type = true;
cljs.core.async.t34642.cljs$lang$ctorStr = "cljs.core.async/t34642";
cljs.core.async.t34642.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34642");
});})(mults,ensure_mult))
;
cljs.core.async.t34642.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34642.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34642.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34642.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34644){var self__ = this;
var _34644__$1 = this;return self__.meta34643;
});})(mults,ensure_mult))
;
cljs.core.async.t34642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34644,meta34643__$1){var self__ = this;
var _34644__$1 = this;return (new cljs.core.async.t34642(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34643__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34642 = ((function (mults,ensure_mult){
return (function __GT_t34642(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34643){return (new cljs.core.async.t34642(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34643));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34642(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34766 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34718){var state_val_34719 = (state_34718[1]);if((state_val_34719 === 1))
{var state_34718__$1 = state_34718;var statearr_34720_34767 = state_34718__$1;(statearr_34720_34767[2] = null);
(statearr_34720_34767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 2))
{var state_34718__$1 = state_34718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34718__$1,4,ch);
} else
{if((state_val_34719 === 3))
{var inst_34716 = (state_34718[2]);var state_34718__$1 = state_34718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34718__$1,inst_34716);
} else
{if((state_val_34719 === 4))
{var inst_34647 = (state_34718[7]);var inst_34647__$1 = (state_34718[2]);var inst_34648 = (inst_34647__$1 == null);var state_34718__$1 = (function (){var statearr_34721 = state_34718;(statearr_34721[7] = inst_34647__$1);
return statearr_34721;
})();if(cljs.core.truth_(inst_34648))
{var statearr_34722_34768 = state_34718__$1;(statearr_34722_34768[1] = 5);
} else
{var statearr_34723_34769 = state_34718__$1;(statearr_34723_34769[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 5))
{var inst_34654 = cljs.core.deref.call(null,mults);var inst_34655 = cljs.core.vals.call(null,inst_34654);var inst_34656 = cljs.core.seq.call(null,inst_34655);var inst_34657 = inst_34656;var inst_34658 = null;var inst_34659 = 0;var inst_34660 = 0;var state_34718__$1 = (function (){var statearr_34724 = state_34718;(statearr_34724[8] = inst_34659);
(statearr_34724[9] = inst_34660);
(statearr_34724[10] = inst_34657);
(statearr_34724[11] = inst_34658);
return statearr_34724;
})();var statearr_34725_34770 = state_34718__$1;(statearr_34725_34770[2] = null);
(statearr_34725_34770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 6))
{var inst_34697 = (state_34718[12]);var inst_34647 = (state_34718[7]);var inst_34695 = (state_34718[13]);var inst_34695__$1 = topic_fn.call(null,inst_34647);var inst_34696 = cljs.core.deref.call(null,mults);var inst_34697__$1 = cljs.core.get.call(null,inst_34696,inst_34695__$1);var state_34718__$1 = (function (){var statearr_34726 = state_34718;(statearr_34726[12] = inst_34697__$1);
(statearr_34726[13] = inst_34695__$1);
return statearr_34726;
})();if(cljs.core.truth_(inst_34697__$1))
{var statearr_34727_34771 = state_34718__$1;(statearr_34727_34771[1] = 19);
} else
{var statearr_34728_34772 = state_34718__$1;(statearr_34728_34772[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 7))
{var inst_34714 = (state_34718[2]);var state_34718__$1 = state_34718;var statearr_34729_34773 = state_34718__$1;(statearr_34729_34773[2] = inst_34714);
(statearr_34729_34773[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 8))
{var inst_34659 = (state_34718[8]);var inst_34660 = (state_34718[9]);var inst_34662 = (inst_34660 < inst_34659);var inst_34663 = inst_34662;var state_34718__$1 = state_34718;if(cljs.core.truth_(inst_34663))
{var statearr_34733_34774 = state_34718__$1;(statearr_34733_34774[1] = 10);
} else
{var statearr_34734_34775 = state_34718__$1;(statearr_34734_34775[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 9))
{var inst_34693 = (state_34718[2]);var state_34718__$1 = state_34718;var statearr_34735_34776 = state_34718__$1;(statearr_34735_34776[2] = inst_34693);
(statearr_34735_34776[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 10))
{var inst_34659 = (state_34718[8]);var inst_34660 = (state_34718[9]);var inst_34657 = (state_34718[10]);var inst_34658 = (state_34718[11]);var inst_34665 = cljs.core._nth.call(null,inst_34658,inst_34660);var inst_34666 = cljs.core.async.muxch_STAR_.call(null,inst_34665);var inst_34667 = cljs.core.async.close_BANG_.call(null,inst_34666);var inst_34668 = (inst_34660 + 1);var tmp34730 = inst_34659;var tmp34731 = inst_34657;var tmp34732 = inst_34658;var inst_34657__$1 = tmp34731;var inst_34658__$1 = tmp34732;var inst_34659__$1 = tmp34730;var inst_34660__$1 = inst_34668;var state_34718__$1 = (function (){var statearr_34736 = state_34718;(statearr_34736[8] = inst_34659__$1);
(statearr_34736[9] = inst_34660__$1);
(statearr_34736[14] = inst_34667);
(statearr_34736[10] = inst_34657__$1);
(statearr_34736[11] = inst_34658__$1);
return statearr_34736;
})();var statearr_34737_34777 = state_34718__$1;(statearr_34737_34777[2] = null);
(statearr_34737_34777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 11))
{var inst_34671 = (state_34718[15]);var inst_34657 = (state_34718[10]);var inst_34671__$1 = cljs.core.seq.call(null,inst_34657);var state_34718__$1 = (function (){var statearr_34738 = state_34718;(statearr_34738[15] = inst_34671__$1);
return statearr_34738;
})();if(inst_34671__$1)
{var statearr_34739_34778 = state_34718__$1;(statearr_34739_34778[1] = 13);
} else
{var statearr_34740_34779 = state_34718__$1;(statearr_34740_34779[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 12))
{var inst_34691 = (state_34718[2]);var state_34718__$1 = state_34718;var statearr_34741_34780 = state_34718__$1;(statearr_34741_34780[2] = inst_34691);
(statearr_34741_34780[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 13))
{var inst_34671 = (state_34718[15]);var inst_34673 = cljs.core.chunked_seq_QMARK_.call(null,inst_34671);var state_34718__$1 = state_34718;if(inst_34673)
{var statearr_34742_34781 = state_34718__$1;(statearr_34742_34781[1] = 16);
} else
{var statearr_34743_34782 = state_34718__$1;(statearr_34743_34782[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 14))
{var state_34718__$1 = state_34718;var statearr_34744_34783 = state_34718__$1;(statearr_34744_34783[2] = null);
(statearr_34744_34783[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 15))
{var inst_34689 = (state_34718[2]);var state_34718__$1 = state_34718;var statearr_34745_34784 = state_34718__$1;(statearr_34745_34784[2] = inst_34689);
(statearr_34745_34784[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 16))
{var inst_34671 = (state_34718[15]);var inst_34675 = cljs.core.chunk_first.call(null,inst_34671);var inst_34676 = cljs.core.chunk_rest.call(null,inst_34671);var inst_34677 = cljs.core.count.call(null,inst_34675);var inst_34657 = inst_34676;var inst_34658 = inst_34675;var inst_34659 = inst_34677;var inst_34660 = 0;var state_34718__$1 = (function (){var statearr_34746 = state_34718;(statearr_34746[8] = inst_34659);
(statearr_34746[9] = inst_34660);
(statearr_34746[10] = inst_34657);
(statearr_34746[11] = inst_34658);
return statearr_34746;
})();var statearr_34747_34785 = state_34718__$1;(statearr_34747_34785[2] = null);
(statearr_34747_34785[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 17))
{var inst_34671 = (state_34718[15]);var inst_34680 = cljs.core.first.call(null,inst_34671);var inst_34681 = cljs.core.async.muxch_STAR_.call(null,inst_34680);var inst_34682 = cljs.core.async.close_BANG_.call(null,inst_34681);var inst_34683 = cljs.core.next.call(null,inst_34671);var inst_34657 = inst_34683;var inst_34658 = null;var inst_34659 = 0;var inst_34660 = 0;var state_34718__$1 = (function (){var statearr_34748 = state_34718;(statearr_34748[16] = inst_34682);
(statearr_34748[8] = inst_34659);
(statearr_34748[9] = inst_34660);
(statearr_34748[10] = inst_34657);
(statearr_34748[11] = inst_34658);
return statearr_34748;
})();var statearr_34749_34786 = state_34718__$1;(statearr_34749_34786[2] = null);
(statearr_34749_34786[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 18))
{var inst_34686 = (state_34718[2]);var state_34718__$1 = state_34718;var statearr_34750_34787 = state_34718__$1;(statearr_34750_34787[2] = inst_34686);
(statearr_34750_34787[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 19))
{var state_34718__$1 = state_34718;var statearr_34751_34788 = state_34718__$1;(statearr_34751_34788[2] = null);
(statearr_34751_34788[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 20))
{var state_34718__$1 = state_34718;var statearr_34752_34789 = state_34718__$1;(statearr_34752_34789[2] = null);
(statearr_34752_34789[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 21))
{var inst_34711 = (state_34718[2]);var state_34718__$1 = (function (){var statearr_34753 = state_34718;(statearr_34753[17] = inst_34711);
return statearr_34753;
})();var statearr_34754_34790 = state_34718__$1;(statearr_34754_34790[2] = null);
(statearr_34754_34790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 22))
{var inst_34708 = (state_34718[2]);var state_34718__$1 = state_34718;var statearr_34755_34791 = state_34718__$1;(statearr_34755_34791[2] = inst_34708);
(statearr_34755_34791[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 23))
{var inst_34695 = (state_34718[13]);var inst_34699 = (state_34718[2]);var inst_34700 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34695);var state_34718__$1 = (function (){var statearr_34756 = state_34718;(statearr_34756[18] = inst_34699);
return statearr_34756;
})();var statearr_34757_34792 = state_34718__$1;(statearr_34757_34792[2] = inst_34700);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34718__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34719 === 24))
{var inst_34697 = (state_34718[12]);var inst_34647 = (state_34718[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34718,23,Object,null,22);var inst_34704 = cljs.core.async.muxch_STAR_.call(null,inst_34697);var state_34718__$1 = state_34718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34718__$1,25,inst_34704,inst_34647);
} else
{if((state_val_34719 === 25))
{var inst_34706 = (state_34718[2]);var state_34718__$1 = state_34718;var statearr_34758_34793 = state_34718__$1;(statearr_34758_34793[2] = inst_34706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34718__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34762[0] = state_machine__5507__auto__);
(statearr_34762[1] = 1);
return statearr_34762;
});
var state_machine__5507__auto____1 = (function (state_34718){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34718);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34763){if((e34763 instanceof Object))
{var ex__5510__auto__ = e34763;var statearr_34764_34794 = state_34718;(statearr_34764_34794[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34795 = state_34718;
state_34718 = G__34795;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34718){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34765 = f__5522__auto__.call(null);(statearr_34765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34766);
return statearr_34765;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34902){var state_val_34903 = (state_34902[1]);if((state_val_34903 === 1))
{var state_34902__$1 = state_34902;var statearr_34904_34933 = state_34902__$1;(statearr_34904_34933[2] = null);
(statearr_34904_34933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 2))
{var inst_34865 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34866 = 0;var state_34902__$1 = (function (){var statearr_34905 = state_34902;(statearr_34905[7] = inst_34865);
(statearr_34905[8] = inst_34866);
return statearr_34905;
})();var statearr_34906_34934 = state_34902__$1;(statearr_34906_34934[2] = null);
(statearr_34906_34934[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 3))
{var inst_34900 = (state_34902[2]);var state_34902__$1 = state_34902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34902__$1,inst_34900);
} else
{if((state_val_34903 === 4))
{var inst_34866 = (state_34902[8]);var inst_34868 = (inst_34866 < cnt);var state_34902__$1 = state_34902;if(cljs.core.truth_(inst_34868))
{var statearr_34907_34935 = state_34902__$1;(statearr_34907_34935[1] = 6);
} else
{var statearr_34908_34936 = state_34902__$1;(statearr_34908_34936[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 5))
{var inst_34886 = (state_34902[2]);var state_34902__$1 = (function (){var statearr_34909 = state_34902;(statearr_34909[9] = inst_34886);
return statearr_34909;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34902__$1,12,dchan);
} else
{if((state_val_34903 === 6))
{var state_34902__$1 = state_34902;var statearr_34910_34937 = state_34902__$1;(statearr_34910_34937[2] = null);
(statearr_34910_34937[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 7))
{var state_34902__$1 = state_34902;var statearr_34911_34938 = state_34902__$1;(statearr_34911_34938[2] = null);
(statearr_34911_34938[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 8))
{var inst_34884 = (state_34902[2]);var state_34902__$1 = state_34902;var statearr_34912_34939 = state_34902__$1;(statearr_34912_34939[2] = inst_34884);
(statearr_34912_34939[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 9))
{var inst_34866 = (state_34902[8]);var inst_34879 = (state_34902[2]);var inst_34880 = (inst_34866 + 1);var inst_34866__$1 = inst_34880;var state_34902__$1 = (function (){var statearr_34913 = state_34902;(statearr_34913[10] = inst_34879);
(statearr_34913[8] = inst_34866__$1);
return statearr_34913;
})();var statearr_34914_34940 = state_34902__$1;(statearr_34914_34940[2] = null);
(statearr_34914_34940[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 10))
{var inst_34870 = (state_34902[2]);var inst_34871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34902__$1 = (function (){var statearr_34915 = state_34902;(statearr_34915[11] = inst_34870);
return statearr_34915;
})();var statearr_34916_34941 = state_34902__$1;(statearr_34916_34941[2] = inst_34871);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34902__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 11))
{var inst_34866 = (state_34902[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34902,10,Object,null,9);var inst_34875 = chs__$1.call(null,inst_34866);var inst_34876 = done.call(null,inst_34866);var inst_34877 = cljs.core.async.take_BANG_.call(null,inst_34875,inst_34876);var state_34902__$1 = state_34902;var statearr_34917_34942 = state_34902__$1;(statearr_34917_34942[2] = inst_34877);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34902__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 12))
{var inst_34888 = (state_34902[12]);var inst_34888__$1 = (state_34902[2]);var inst_34889 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34888__$1);var state_34902__$1 = (function (){var statearr_34918 = state_34902;(statearr_34918[12] = inst_34888__$1);
return statearr_34918;
})();if(cljs.core.truth_(inst_34889))
{var statearr_34919_34943 = state_34902__$1;(statearr_34919_34943[1] = 13);
} else
{var statearr_34920_34944 = state_34902__$1;(statearr_34920_34944[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 13))
{var inst_34891 = cljs.core.async.close_BANG_.call(null,out);var state_34902__$1 = state_34902;var statearr_34921_34945 = state_34902__$1;(statearr_34921_34945[2] = inst_34891);
(statearr_34921_34945[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 14))
{var inst_34888 = (state_34902[12]);var inst_34893 = cljs.core.apply.call(null,f,inst_34888);var state_34902__$1 = state_34902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34902__$1,16,out,inst_34893);
} else
{if((state_val_34903 === 15))
{var inst_34898 = (state_34902[2]);var state_34902__$1 = state_34902;var statearr_34922_34946 = state_34902__$1;(statearr_34922_34946[2] = inst_34898);
(statearr_34922_34946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34903 === 16))
{var inst_34895 = (state_34902[2]);var state_34902__$1 = (function (){var statearr_34923 = state_34902;(statearr_34923[13] = inst_34895);
return statearr_34923;
})();var statearr_34924_34947 = state_34902__$1;(statearr_34924_34947[2] = null);
(statearr_34924_34947[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34928[0] = state_machine__5507__auto__);
(statearr_34928[1] = 1);
return statearr_34928;
});
var state_machine__5507__auto____1 = (function (state_34902){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34902);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34929){if((e34929 instanceof Object))
{var ex__5510__auto__ = e34929;var statearr_34930_34948 = state_34902;(statearr_34930_34948[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34949 = state_34902;
state_34902 = G__34949;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34902){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34931 = f__5522__auto__.call(null);(statearr_34931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34932);
return statearr_34931;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35057 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35033){var state_val_35034 = (state_35033[1]);if((state_val_35034 === 1))
{var inst_35004 = cljs.core.vec.call(null,chs);var inst_35005 = inst_35004;var state_35033__$1 = (function (){var statearr_35035 = state_35033;(statearr_35035[7] = inst_35005);
return statearr_35035;
})();var statearr_35036_35058 = state_35033__$1;(statearr_35036_35058[2] = null);
(statearr_35036_35058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35034 === 2))
{var inst_35005 = (state_35033[7]);var inst_35007 = cljs.core.count.call(null,inst_35005);var inst_35008 = (inst_35007 > 0);var state_35033__$1 = state_35033;if(cljs.core.truth_(inst_35008))
{var statearr_35037_35059 = state_35033__$1;(statearr_35037_35059[1] = 4);
} else
{var statearr_35038_35060 = state_35033__$1;(statearr_35038_35060[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35034 === 3))
{var inst_35031 = (state_35033[2]);var state_35033__$1 = state_35033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35033__$1,inst_35031);
} else
{if((state_val_35034 === 4))
{var inst_35005 = (state_35033[7]);var state_35033__$1 = state_35033;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35033__$1,7,inst_35005);
} else
{if((state_val_35034 === 5))
{var inst_35027 = cljs.core.async.close_BANG_.call(null,out);var state_35033__$1 = state_35033;var statearr_35039_35061 = state_35033__$1;(statearr_35039_35061[2] = inst_35027);
(statearr_35039_35061[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35034 === 6))
{var inst_35029 = (state_35033[2]);var state_35033__$1 = state_35033;var statearr_35040_35062 = state_35033__$1;(statearr_35040_35062[2] = inst_35029);
(statearr_35040_35062[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35034 === 7))
{var inst_35012 = (state_35033[8]);var inst_35013 = (state_35033[9]);var inst_35012__$1 = (state_35033[2]);var inst_35013__$1 = cljs.core.nth.call(null,inst_35012__$1,0,null);var inst_35014 = cljs.core.nth.call(null,inst_35012__$1,1,null);var inst_35015 = (inst_35013__$1 == null);var state_35033__$1 = (function (){var statearr_35041 = state_35033;(statearr_35041[8] = inst_35012__$1);
(statearr_35041[9] = inst_35013__$1);
(statearr_35041[10] = inst_35014);
return statearr_35041;
})();if(cljs.core.truth_(inst_35015))
{var statearr_35042_35063 = state_35033__$1;(statearr_35042_35063[1] = 8);
} else
{var statearr_35043_35064 = state_35033__$1;(statearr_35043_35064[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35034 === 8))
{var inst_35012 = (state_35033[8]);var inst_35013 = (state_35033[9]);var inst_35014 = (state_35033[10]);var inst_35005 = (state_35033[7]);var inst_35017 = (function (){var c = inst_35014;var v = inst_35013;var vec__35010 = inst_35012;var cs = inst_35005;return ((function (c,v,vec__35010,cs,inst_35012,inst_35013,inst_35014,inst_35005,state_val_35034){
return (function (p1__34950_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34950_SHARP_);
});
;})(c,v,vec__35010,cs,inst_35012,inst_35013,inst_35014,inst_35005,state_val_35034))
})();var inst_35018 = cljs.core.filterv.call(null,inst_35017,inst_35005);var inst_35005__$1 = inst_35018;var state_35033__$1 = (function (){var statearr_35044 = state_35033;(statearr_35044[7] = inst_35005__$1);
return statearr_35044;
})();var statearr_35045_35065 = state_35033__$1;(statearr_35045_35065[2] = null);
(statearr_35045_35065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35034 === 9))
{var inst_35013 = (state_35033[9]);var state_35033__$1 = state_35033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35033__$1,11,out,inst_35013);
} else
{if((state_val_35034 === 10))
{var inst_35025 = (state_35033[2]);var state_35033__$1 = state_35033;var statearr_35047_35066 = state_35033__$1;(statearr_35047_35066[2] = inst_35025);
(statearr_35047_35066[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35034 === 11))
{var inst_35005 = (state_35033[7]);var inst_35022 = (state_35033[2]);var tmp35046 = inst_35005;var inst_35005__$1 = tmp35046;var state_35033__$1 = (function (){var statearr_35048 = state_35033;(statearr_35048[11] = inst_35022);
(statearr_35048[7] = inst_35005__$1);
return statearr_35048;
})();var statearr_35049_35067 = state_35033__$1;(statearr_35049_35067[2] = null);
(statearr_35049_35067[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35053 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35053[0] = state_machine__5507__auto__);
(statearr_35053[1] = 1);
return statearr_35053;
});
var state_machine__5507__auto____1 = (function (state_35033){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35033);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35054){if((e35054 instanceof Object))
{var ex__5510__auto__ = e35054;var statearr_35055_35068 = state_35033;(statearr_35055_35068[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35069 = state_35033;
state_35033 = G__35069;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35033){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35056 = f__5522__auto__.call(null);(statearr_35056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35057);
return statearr_35056;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35162 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35139){var state_val_35140 = (state_35139[1]);if((state_val_35140 === 1))
{var inst_35116 = 0;var state_35139__$1 = (function (){var statearr_35141 = state_35139;(statearr_35141[7] = inst_35116);
return statearr_35141;
})();var statearr_35142_35163 = state_35139__$1;(statearr_35142_35163[2] = null);
(statearr_35142_35163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35140 === 2))
{var inst_35116 = (state_35139[7]);var inst_35118 = (inst_35116 < n);var state_35139__$1 = state_35139;if(cljs.core.truth_(inst_35118))
{var statearr_35143_35164 = state_35139__$1;(statearr_35143_35164[1] = 4);
} else
{var statearr_35144_35165 = state_35139__$1;(statearr_35144_35165[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35140 === 3))
{var inst_35136 = (state_35139[2]);var inst_35137 = cljs.core.async.close_BANG_.call(null,out);var state_35139__$1 = (function (){var statearr_35145 = state_35139;(statearr_35145[8] = inst_35136);
return statearr_35145;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35139__$1,inst_35137);
} else
{if((state_val_35140 === 4))
{var state_35139__$1 = state_35139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35139__$1,7,ch);
} else
{if((state_val_35140 === 5))
{var state_35139__$1 = state_35139;var statearr_35146_35166 = state_35139__$1;(statearr_35146_35166[2] = null);
(statearr_35146_35166[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35140 === 6))
{var inst_35134 = (state_35139[2]);var state_35139__$1 = state_35139;var statearr_35147_35167 = state_35139__$1;(statearr_35147_35167[2] = inst_35134);
(statearr_35147_35167[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35140 === 7))
{var inst_35121 = (state_35139[9]);var inst_35121__$1 = (state_35139[2]);var inst_35122 = (inst_35121__$1 == null);var inst_35123 = cljs.core.not.call(null,inst_35122);var state_35139__$1 = (function (){var statearr_35148 = state_35139;(statearr_35148[9] = inst_35121__$1);
return statearr_35148;
})();if(inst_35123)
{var statearr_35149_35168 = state_35139__$1;(statearr_35149_35168[1] = 8);
} else
{var statearr_35150_35169 = state_35139__$1;(statearr_35150_35169[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35140 === 8))
{var inst_35121 = (state_35139[9]);var state_35139__$1 = state_35139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35139__$1,11,out,inst_35121);
} else
{if((state_val_35140 === 9))
{var state_35139__$1 = state_35139;var statearr_35151_35170 = state_35139__$1;(statearr_35151_35170[2] = null);
(statearr_35151_35170[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35140 === 10))
{var inst_35131 = (state_35139[2]);var state_35139__$1 = state_35139;var statearr_35152_35171 = state_35139__$1;(statearr_35152_35171[2] = inst_35131);
(statearr_35152_35171[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35140 === 11))
{var inst_35116 = (state_35139[7]);var inst_35126 = (state_35139[2]);var inst_35127 = (inst_35116 + 1);var inst_35116__$1 = inst_35127;var state_35139__$1 = (function (){var statearr_35153 = state_35139;(statearr_35153[10] = inst_35126);
(statearr_35153[7] = inst_35116__$1);
return statearr_35153;
})();var statearr_35154_35172 = state_35139__$1;(statearr_35154_35172[2] = null);
(statearr_35154_35172[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35158 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35158[0] = state_machine__5507__auto__);
(statearr_35158[1] = 1);
return statearr_35158;
});
var state_machine__5507__auto____1 = (function (state_35139){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35139);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35159){if((e35159 instanceof Object))
{var ex__5510__auto__ = e35159;var statearr_35160_35173 = state_35139;(statearr_35160_35173[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35139);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35174 = state_35139;
state_35139 = G__35174;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35139){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35161 = f__5522__auto__.call(null);(statearr_35161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35162);
return statearr_35161;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35271 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35246){var state_val_35247 = (state_35246[1]);if((state_val_35247 === 1))
{var inst_35223 = null;var state_35246__$1 = (function (){var statearr_35248 = state_35246;(statearr_35248[7] = inst_35223);
return statearr_35248;
})();var statearr_35249_35272 = state_35246__$1;(statearr_35249_35272[2] = null);
(statearr_35249_35272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35247 === 2))
{var state_35246__$1 = state_35246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35246__$1,4,ch);
} else
{if((state_val_35247 === 3))
{var inst_35243 = (state_35246[2]);var inst_35244 = cljs.core.async.close_BANG_.call(null,out);var state_35246__$1 = (function (){var statearr_35250 = state_35246;(statearr_35250[8] = inst_35243);
return statearr_35250;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35246__$1,inst_35244);
} else
{if((state_val_35247 === 4))
{var inst_35226 = (state_35246[9]);var inst_35226__$1 = (state_35246[2]);var inst_35227 = (inst_35226__$1 == null);var inst_35228 = cljs.core.not.call(null,inst_35227);var state_35246__$1 = (function (){var statearr_35251 = state_35246;(statearr_35251[9] = inst_35226__$1);
return statearr_35251;
})();if(inst_35228)
{var statearr_35252_35273 = state_35246__$1;(statearr_35252_35273[1] = 5);
} else
{var statearr_35253_35274 = state_35246__$1;(statearr_35253_35274[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35247 === 5))
{var inst_35226 = (state_35246[9]);var inst_35223 = (state_35246[7]);var inst_35230 = cljs.core._EQ_.call(null,inst_35226,inst_35223);var state_35246__$1 = state_35246;if(inst_35230)
{var statearr_35254_35275 = state_35246__$1;(statearr_35254_35275[1] = 8);
} else
{var statearr_35255_35276 = state_35246__$1;(statearr_35255_35276[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35247 === 6))
{var state_35246__$1 = state_35246;var statearr_35257_35277 = state_35246__$1;(statearr_35257_35277[2] = null);
(statearr_35257_35277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35247 === 7))
{var inst_35241 = (state_35246[2]);var state_35246__$1 = state_35246;var statearr_35258_35278 = state_35246__$1;(statearr_35258_35278[2] = inst_35241);
(statearr_35258_35278[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35247 === 8))
{var inst_35223 = (state_35246[7]);var tmp35256 = inst_35223;var inst_35223__$1 = tmp35256;var state_35246__$1 = (function (){var statearr_35259 = state_35246;(statearr_35259[7] = inst_35223__$1);
return statearr_35259;
})();var statearr_35260_35279 = state_35246__$1;(statearr_35260_35279[2] = null);
(statearr_35260_35279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35247 === 9))
{var inst_35226 = (state_35246[9]);var state_35246__$1 = state_35246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35246__$1,11,out,inst_35226);
} else
{if((state_val_35247 === 10))
{var inst_35238 = (state_35246[2]);var state_35246__$1 = state_35246;var statearr_35261_35280 = state_35246__$1;(statearr_35261_35280[2] = inst_35238);
(statearr_35261_35280[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35247 === 11))
{var inst_35226 = (state_35246[9]);var inst_35235 = (state_35246[2]);var inst_35223 = inst_35226;var state_35246__$1 = (function (){var statearr_35262 = state_35246;(statearr_35262[7] = inst_35223);
(statearr_35262[10] = inst_35235);
return statearr_35262;
})();var statearr_35263_35281 = state_35246__$1;(statearr_35263_35281[2] = null);
(statearr_35263_35281[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35267 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35267[0] = state_machine__5507__auto__);
(statearr_35267[1] = 1);
return statearr_35267;
});
var state_machine__5507__auto____1 = (function (state_35246){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35246);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35268){if((e35268 instanceof Object))
{var ex__5510__auto__ = e35268;var statearr_35269_35282 = state_35246;(statearr_35269_35282[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35283 = state_35246;
state_35246 = G__35283;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35246){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35270 = f__5522__auto__.call(null);(statearr_35270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35271);
return statearr_35270;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35418 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35388){var state_val_35389 = (state_35388[1]);if((state_val_35389 === 1))
{var inst_35351 = (new Array(n));var inst_35352 = inst_35351;var inst_35353 = 0;var state_35388__$1 = (function (){var statearr_35390 = state_35388;(statearr_35390[7] = inst_35353);
(statearr_35390[8] = inst_35352);
return statearr_35390;
})();var statearr_35391_35419 = state_35388__$1;(statearr_35391_35419[2] = null);
(statearr_35391_35419[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 2))
{var state_35388__$1 = state_35388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,4,ch);
} else
{if((state_val_35389 === 3))
{var inst_35386 = (state_35388[2]);var state_35388__$1 = state_35388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35388__$1,inst_35386);
} else
{if((state_val_35389 === 4))
{var inst_35356 = (state_35388[9]);var inst_35356__$1 = (state_35388[2]);var inst_35357 = (inst_35356__$1 == null);var inst_35358 = cljs.core.not.call(null,inst_35357);var state_35388__$1 = (function (){var statearr_35392 = state_35388;(statearr_35392[9] = inst_35356__$1);
return statearr_35392;
})();if(inst_35358)
{var statearr_35393_35420 = state_35388__$1;(statearr_35393_35420[1] = 5);
} else
{var statearr_35394_35421 = state_35388__$1;(statearr_35394_35421[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 5))
{var inst_35353 = (state_35388[7]);var inst_35352 = (state_35388[8]);var inst_35361 = (state_35388[10]);var inst_35356 = (state_35388[9]);var inst_35360 = (inst_35352[inst_35353] = inst_35356);var inst_35361__$1 = (inst_35353 + 1);var inst_35362 = (inst_35361__$1 < n);var state_35388__$1 = (function (){var statearr_35395 = state_35388;(statearr_35395[10] = inst_35361__$1);
(statearr_35395[11] = inst_35360);
return statearr_35395;
})();if(cljs.core.truth_(inst_35362))
{var statearr_35396_35422 = state_35388__$1;(statearr_35396_35422[1] = 8);
} else
{var statearr_35397_35423 = state_35388__$1;(statearr_35397_35423[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 6))
{var inst_35353 = (state_35388[7]);var inst_35374 = (inst_35353 > 0);var state_35388__$1 = state_35388;if(cljs.core.truth_(inst_35374))
{var statearr_35399_35424 = state_35388__$1;(statearr_35399_35424[1] = 12);
} else
{var statearr_35400_35425 = state_35388__$1;(statearr_35400_35425[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 7))
{var inst_35384 = (state_35388[2]);var state_35388__$1 = state_35388;var statearr_35401_35426 = state_35388__$1;(statearr_35401_35426[2] = inst_35384);
(statearr_35401_35426[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 8))
{var inst_35352 = (state_35388[8]);var inst_35361 = (state_35388[10]);var tmp35398 = inst_35352;var inst_35352__$1 = tmp35398;var inst_35353 = inst_35361;var state_35388__$1 = (function (){var statearr_35402 = state_35388;(statearr_35402[7] = inst_35353);
(statearr_35402[8] = inst_35352__$1);
return statearr_35402;
})();var statearr_35403_35427 = state_35388__$1;(statearr_35403_35427[2] = null);
(statearr_35403_35427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 9))
{var inst_35352 = (state_35388[8]);var inst_35366 = cljs.core.vec.call(null,inst_35352);var state_35388__$1 = state_35388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35388__$1,11,out,inst_35366);
} else
{if((state_val_35389 === 10))
{var inst_35372 = (state_35388[2]);var state_35388__$1 = state_35388;var statearr_35404_35428 = state_35388__$1;(statearr_35404_35428[2] = inst_35372);
(statearr_35404_35428[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 11))
{var inst_35368 = (state_35388[2]);var inst_35369 = (new Array(n));var inst_35352 = inst_35369;var inst_35353 = 0;var state_35388__$1 = (function (){var statearr_35405 = state_35388;(statearr_35405[7] = inst_35353);
(statearr_35405[8] = inst_35352);
(statearr_35405[12] = inst_35368);
return statearr_35405;
})();var statearr_35406_35429 = state_35388__$1;(statearr_35406_35429[2] = null);
(statearr_35406_35429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 12))
{var inst_35352 = (state_35388[8]);var inst_35376 = cljs.core.vec.call(null,inst_35352);var state_35388__$1 = state_35388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35388__$1,15,out,inst_35376);
} else
{if((state_val_35389 === 13))
{var state_35388__$1 = state_35388;var statearr_35407_35430 = state_35388__$1;(statearr_35407_35430[2] = null);
(statearr_35407_35430[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 14))
{var inst_35381 = (state_35388[2]);var inst_35382 = cljs.core.async.close_BANG_.call(null,out);var state_35388__$1 = (function (){var statearr_35408 = state_35388;(statearr_35408[13] = inst_35381);
return statearr_35408;
})();var statearr_35409_35431 = state_35388__$1;(statearr_35409_35431[2] = inst_35382);
(statearr_35409_35431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35389 === 15))
{var inst_35378 = (state_35388[2]);var state_35388__$1 = state_35388;var statearr_35410_35432 = state_35388__$1;(statearr_35410_35432[2] = inst_35378);
(statearr_35410_35432[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35414[0] = state_machine__5507__auto__);
(statearr_35414[1] = 1);
return statearr_35414;
});
var state_machine__5507__auto____1 = (function (state_35388){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35388);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35415){if((e35415 instanceof Object))
{var ex__5510__auto__ = e35415;var statearr_35416_35433 = state_35388;(statearr_35416_35433[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35434 = state_35388;
state_35388 = G__35434;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35388){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35417 = f__5522__auto__.call(null);(statearr_35417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35418);
return statearr_35417;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35577 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35547){var state_val_35548 = (state_35547[1]);if((state_val_35548 === 1))
{var inst_35506 = [];var inst_35507 = inst_35506;var inst_35508 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35547__$1 = (function (){var statearr_35549 = state_35547;(statearr_35549[7] = inst_35507);
(statearr_35549[8] = inst_35508);
return statearr_35549;
})();var statearr_35550_35578 = state_35547__$1;(statearr_35550_35578[2] = null);
(statearr_35550_35578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 2))
{var state_35547__$1 = state_35547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35547__$1,4,ch);
} else
{if((state_val_35548 === 3))
{var inst_35545 = (state_35547[2]);var state_35547__$1 = state_35547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35547__$1,inst_35545);
} else
{if((state_val_35548 === 4))
{var inst_35511 = (state_35547[9]);var inst_35511__$1 = (state_35547[2]);var inst_35512 = (inst_35511__$1 == null);var inst_35513 = cljs.core.not.call(null,inst_35512);var state_35547__$1 = (function (){var statearr_35551 = state_35547;(statearr_35551[9] = inst_35511__$1);
return statearr_35551;
})();if(inst_35513)
{var statearr_35552_35579 = state_35547__$1;(statearr_35552_35579[1] = 5);
} else
{var statearr_35553_35580 = state_35547__$1;(statearr_35553_35580[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 5))
{var inst_35508 = (state_35547[8]);var inst_35515 = (state_35547[10]);var inst_35511 = (state_35547[9]);var inst_35515__$1 = f.call(null,inst_35511);var inst_35516 = cljs.core._EQ_.call(null,inst_35515__$1,inst_35508);var inst_35517 = cljs.core.keyword_identical_QMARK_.call(null,inst_35508,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35518 = (inst_35516) || (inst_35517);var state_35547__$1 = (function (){var statearr_35554 = state_35547;(statearr_35554[10] = inst_35515__$1);
return statearr_35554;
})();if(cljs.core.truth_(inst_35518))
{var statearr_35555_35581 = state_35547__$1;(statearr_35555_35581[1] = 8);
} else
{var statearr_35556_35582 = state_35547__$1;(statearr_35556_35582[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 6))
{var inst_35507 = (state_35547[7]);var inst_35532 = inst_35507.length;var inst_35533 = (inst_35532 > 0);var state_35547__$1 = state_35547;if(cljs.core.truth_(inst_35533))
{var statearr_35558_35583 = state_35547__$1;(statearr_35558_35583[1] = 12);
} else
{var statearr_35559_35584 = state_35547__$1;(statearr_35559_35584[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 7))
{var inst_35543 = (state_35547[2]);var state_35547__$1 = state_35547;var statearr_35560_35585 = state_35547__$1;(statearr_35560_35585[2] = inst_35543);
(statearr_35560_35585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 8))
{var inst_35507 = (state_35547[7]);var inst_35515 = (state_35547[10]);var inst_35511 = (state_35547[9]);var inst_35520 = inst_35507.push(inst_35511);var tmp35557 = inst_35507;var inst_35507__$1 = tmp35557;var inst_35508 = inst_35515;var state_35547__$1 = (function (){var statearr_35561 = state_35547;(statearr_35561[7] = inst_35507__$1);
(statearr_35561[8] = inst_35508);
(statearr_35561[11] = inst_35520);
return statearr_35561;
})();var statearr_35562_35586 = state_35547__$1;(statearr_35562_35586[2] = null);
(statearr_35562_35586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 9))
{var inst_35507 = (state_35547[7]);var inst_35523 = cljs.core.vec.call(null,inst_35507);var state_35547__$1 = state_35547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35547__$1,11,out,inst_35523);
} else
{if((state_val_35548 === 10))
{var inst_35530 = (state_35547[2]);var state_35547__$1 = state_35547;var statearr_35563_35587 = state_35547__$1;(statearr_35563_35587[2] = inst_35530);
(statearr_35563_35587[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 11))
{var inst_35515 = (state_35547[10]);var inst_35511 = (state_35547[9]);var inst_35525 = (state_35547[2]);var inst_35526 = [];var inst_35527 = inst_35526.push(inst_35511);var inst_35507 = inst_35526;var inst_35508 = inst_35515;var state_35547__$1 = (function (){var statearr_35564 = state_35547;(statearr_35564[7] = inst_35507);
(statearr_35564[8] = inst_35508);
(statearr_35564[12] = inst_35525);
(statearr_35564[13] = inst_35527);
return statearr_35564;
})();var statearr_35565_35588 = state_35547__$1;(statearr_35565_35588[2] = null);
(statearr_35565_35588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 12))
{var inst_35507 = (state_35547[7]);var inst_35535 = cljs.core.vec.call(null,inst_35507);var state_35547__$1 = state_35547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35547__$1,15,out,inst_35535);
} else
{if((state_val_35548 === 13))
{var state_35547__$1 = state_35547;var statearr_35566_35589 = state_35547__$1;(statearr_35566_35589[2] = null);
(statearr_35566_35589[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 14))
{var inst_35540 = (state_35547[2]);var inst_35541 = cljs.core.async.close_BANG_.call(null,out);var state_35547__$1 = (function (){var statearr_35567 = state_35547;(statearr_35567[14] = inst_35540);
return statearr_35567;
})();var statearr_35568_35590 = state_35547__$1;(statearr_35568_35590[2] = inst_35541);
(statearr_35568_35590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 15))
{var inst_35537 = (state_35547[2]);var state_35547__$1 = state_35547;var statearr_35569_35591 = state_35547__$1;(statearr_35569_35591[2] = inst_35537);
(statearr_35569_35591[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35573[0] = state_machine__5507__auto__);
(statearr_35573[1] = 1);
return statearr_35573;
});
var state_machine__5507__auto____1 = (function (state_35547){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35574){if((e35574 instanceof Object))
{var ex__5510__auto__ = e35574;var statearr_35575_35592 = state_35547;(statearr_35575_35592[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35593 = state_35547;
state_35547 = G__35593;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35547){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35576 = f__5522__auto__.call(null);(statearr_35576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35577);
return statearr_35576;
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
