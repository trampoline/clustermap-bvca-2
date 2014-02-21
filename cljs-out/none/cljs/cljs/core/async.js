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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13696 = (function (f,fn_handler,meta13697){
this.f = f;
this.fn_handler = fn_handler;
this.meta13697 = meta13697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13696.cljs$lang$type = true;
cljs.core.async.t13696.cljs$lang$ctorStr = "cljs.core.async/t13696";
cljs.core.async.t13696.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13696");
});
cljs.core.async.t13696.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13698){var self__ = this;
var _13698__$1 = this;return self__.meta13697;
});
cljs.core.async.t13696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13698,meta13697__$1){var self__ = this;
var _13698__$1 = this;return (new cljs.core.async.t13696(self__.f,self__.fn_handler,meta13697__$1));
});
cljs.core.async.__GT_t13696 = (function __GT_t13696(f__$1,fn_handler__$1,meta13697){return (new cljs.core.async.t13696(f__$1,fn_handler__$1,meta13697));
});
}
return (new cljs.core.async.t13696(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13700 = buff;if(G__13700)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13700.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13700.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13700);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13700);
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
{var val_13701 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13701);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13701);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13702 = n;var x_13703 = 0;while(true){
if((x_13703 < n__4248__auto___13702))
{(a[x_13703] = 0);
{
var G__13704 = (x_13703 + 1);
x_13703 = G__13704;
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
var G__13705 = (i + 1);
i = G__13705;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13709 = (function (flag,alt_flag,meta13710){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13710 = meta13710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13709.cljs$lang$type = true;
cljs.core.async.t13709.cljs$lang$ctorStr = "cljs.core.async/t13709";
cljs.core.async.t13709.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13709");
});
cljs.core.async.t13709.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13711){var self__ = this;
var _13711__$1 = this;return self__.meta13710;
});
cljs.core.async.t13709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13711,meta13710__$1){var self__ = this;
var _13711__$1 = this;return (new cljs.core.async.t13709(self__.flag,self__.alt_flag,meta13710__$1));
});
cljs.core.async.__GT_t13709 = (function __GT_t13709(flag__$1,alt_flag__$1,meta13710){return (new cljs.core.async.t13709(flag__$1,alt_flag__$1,meta13710));
});
}
return (new cljs.core.async.t13709(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13715 = (function (cb,flag,alt_handler,meta13716){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13716 = meta13716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13715.cljs$lang$type = true;
cljs.core.async.t13715.cljs$lang$ctorStr = "cljs.core.async/t13715";
cljs.core.async.t13715.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13715");
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13717){var self__ = this;
var _13717__$1 = this;return self__.meta13716;
});
cljs.core.async.t13715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13717,meta13716__$1){var self__ = this;
var _13717__$1 = this;return (new cljs.core.async.t13715(self__.cb,self__.flag,self__.alt_handler,meta13716__$1));
});
cljs.core.async.__GT_t13715 = (function __GT_t13715(cb__$1,flag__$1,alt_handler__$1,meta13716){return (new cljs.core.async.t13715(cb__$1,flag__$1,alt_handler__$1,meta13716));
});
}
return (new cljs.core.async.t13715(cb,flag,alt_handler,null));
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
return (function (p1__13718_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13718_SHARP_,port], null));
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
var G__13719 = (i + 1);
i = G__13719;
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
var alts_BANG___delegate = function (ports,p__13720){var map__13722 = p__13720;var map__13722__$1 = ((cljs.core.seq_QMARK_.call(null,map__13722))?cljs.core.apply.call(null,cljs.core.hash_map,map__13722):map__13722);var opts = map__13722__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13720 = null;if (arguments.length > 1) {
  p__13720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13720);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13723){
var ports = cljs.core.first(arglist__13723);
var p__13720 = cljs.core.rest(arglist__13723);
return alts_BANG___delegate(ports,p__13720);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13731 = (function (ch,f,map_LT_,meta13732){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13732 = meta13732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13731.cljs$lang$type = true;
cljs.core.async.t13731.cljs$lang$ctorStr = "cljs.core.async/t13731";
cljs.core.async.t13731.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13731");
});
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13734 = (function (fn1,_,meta13732,ch,f,map_LT_,meta13735){
this.fn1 = fn1;
this._ = _;
this.meta13732 = meta13732;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13735 = meta13735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13734.cljs$lang$type = true;
cljs.core.async.t13734.cljs$lang$ctorStr = "cljs.core.async/t13734";
cljs.core.async.t13734.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13734");
});
cljs.core.async.t13734.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13734.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13724_SHARP_){return f1.call(null,(((p1__13724_SHARP_ == null))?null:self__.f.call(null,p1__13724_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13736){var self__ = this;
var _13736__$1 = this;return self__.meta13735;
});
cljs.core.async.t13734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13736,meta13735__$1){var self__ = this;
var _13736__$1 = this;return (new cljs.core.async.t13734(self__.fn1,self__._,self__.meta13732,self__.ch,self__.f,self__.map_LT_,meta13735__$1));
});
cljs.core.async.__GT_t13734 = (function __GT_t13734(fn1__$1,___$2,meta13732__$1,ch__$2,f__$2,map_LT___$2,meta13735){return (new cljs.core.async.t13734(fn1__$1,___$2,meta13732__$1,ch__$2,f__$2,map_LT___$2,meta13735));
});
}
return (new cljs.core.async.t13734(fn1,___$1,self__.meta13732,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13733){var self__ = this;
var _13733__$1 = this;return self__.meta13732;
});
cljs.core.async.t13731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13733,meta13732__$1){var self__ = this;
var _13733__$1 = this;return (new cljs.core.async.t13731(self__.ch,self__.f,self__.map_LT_,meta13732__$1));
});
cljs.core.async.__GT_t13731 = (function __GT_t13731(ch__$1,f__$1,map_LT___$1,meta13732){return (new cljs.core.async.t13731(ch__$1,f__$1,map_LT___$1,meta13732));
});
}
return (new cljs.core.async.t13731(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13740 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13740 = (function (ch,f,map_GT_,meta13741){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13741 = meta13741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13740.cljs$lang$type = true;
cljs.core.async.t13740.cljs$lang$ctorStr = "cljs.core.async/t13740";
cljs.core.async.t13740.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13740");
});
cljs.core.async.t13740.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13740.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13740.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13742){var self__ = this;
var _13742__$1 = this;return self__.meta13741;
});
cljs.core.async.t13740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13742,meta13741__$1){var self__ = this;
var _13742__$1 = this;return (new cljs.core.async.t13740(self__.ch,self__.f,self__.map_GT_,meta13741__$1));
});
cljs.core.async.__GT_t13740 = (function __GT_t13740(ch__$1,f__$1,map_GT___$1,meta13741){return (new cljs.core.async.t13740(ch__$1,f__$1,map_GT___$1,meta13741));
});
}
return (new cljs.core.async.t13740(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13746 = (function (ch,p,filter_GT_,meta13747){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13747 = meta13747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13746.cljs$lang$type = true;
cljs.core.async.t13746.cljs$lang$ctorStr = "cljs.core.async/t13746";
cljs.core.async.t13746.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13746");
});
cljs.core.async.t13746.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13746.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13746.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13748){var self__ = this;
var _13748__$1 = this;return self__.meta13747;
});
cljs.core.async.t13746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13748,meta13747__$1){var self__ = this;
var _13748__$1 = this;return (new cljs.core.async.t13746(self__.ch,self__.p,self__.filter_GT_,meta13747__$1));
});
cljs.core.async.__GT_t13746 = (function __GT_t13746(ch__$1,p__$1,filter_GT___$1,meta13747){return (new cljs.core.async.t13746(ch__$1,p__$1,filter_GT___$1,meta13747));
});
}
return (new cljs.core.async.t13746(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13810){var state_val_13811 = (state_13810[1]);if((state_val_13811 === 1))
{var state_13810__$1 = state_13810;var statearr_13812_13832 = state_13810__$1;(statearr_13812_13832[2] = null);
(statearr_13812_13832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13811 === 2))
{var state_13810__$1 = state_13810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13810__$1,4,ch);
} else
{if((state_val_13811 === 3))
{var inst_13808 = (state_13810[2]);var state_13810__$1 = state_13810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13810__$1,inst_13808);
} else
{if((state_val_13811 === 4))
{var inst_13792 = (state_13810[7]);var inst_13792__$1 = (state_13810[2]);var inst_13793 = (inst_13792__$1 == null);var state_13810__$1 = (function (){var statearr_13813 = state_13810;(statearr_13813[7] = inst_13792__$1);
return statearr_13813;
})();if(cljs.core.truth_(inst_13793))
{var statearr_13814_13833 = state_13810__$1;(statearr_13814_13833[1] = 5);
} else
{var statearr_13815_13834 = state_13810__$1;(statearr_13815_13834[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13811 === 5))
{var inst_13795 = cljs.core.async.close_BANG_.call(null,out);var state_13810__$1 = state_13810;var statearr_13816_13835 = state_13810__$1;(statearr_13816_13835[2] = inst_13795);
(statearr_13816_13835[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13811 === 6))
{var inst_13792 = (state_13810[7]);var inst_13797 = p.call(null,inst_13792);var state_13810__$1 = state_13810;if(cljs.core.truth_(inst_13797))
{var statearr_13817_13836 = state_13810__$1;(statearr_13817_13836[1] = 8);
} else
{var statearr_13818_13837 = state_13810__$1;(statearr_13818_13837[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13811 === 7))
{var inst_13806 = (state_13810[2]);var state_13810__$1 = state_13810;var statearr_13819_13838 = state_13810__$1;(statearr_13819_13838[2] = inst_13806);
(statearr_13819_13838[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13811 === 8))
{var inst_13792 = (state_13810[7]);var state_13810__$1 = state_13810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13810__$1,11,out,inst_13792);
} else
{if((state_val_13811 === 9))
{var state_13810__$1 = state_13810;var statearr_13820_13839 = state_13810__$1;(statearr_13820_13839[2] = null);
(statearr_13820_13839[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13811 === 10))
{var inst_13803 = (state_13810[2]);var state_13810__$1 = (function (){var statearr_13821 = state_13810;(statearr_13821[8] = inst_13803);
return statearr_13821;
})();var statearr_13822_13840 = state_13810__$1;(statearr_13822_13840[2] = null);
(statearr_13822_13840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13811 === 11))
{var inst_13800 = (state_13810[2]);var state_13810__$1 = state_13810;var statearr_13823_13841 = state_13810__$1;(statearr_13823_13841[2] = inst_13800);
(statearr_13823_13841[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13827 = [null,null,null,null,null,null,null,null,null];(statearr_13827[0] = state_machine__5507__auto__);
(statearr_13827[1] = 1);
return statearr_13827;
});
var state_machine__5507__auto____1 = (function (state_13810){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13810);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13828){if((e13828 instanceof Object))
{var ex__5510__auto__ = e13828;var statearr_13829_13842 = state_13810;(statearr_13829_13842[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13843 = state_13810;
state_13810 = G__13843;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13810){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13830 = f__5522__auto__.call(null);(statearr_13830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13831);
return statearr_13830;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13995){var state_val_13996 = (state_13995[1]);if((state_val_13996 === 1))
{var state_13995__$1 = state_13995;var statearr_13997_14034 = state_13995__$1;(statearr_13997_14034[2] = null);
(statearr_13997_14034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 2))
{var state_13995__$1 = state_13995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13995__$1,4,in$);
} else
{if((state_val_13996 === 3))
{var inst_13993 = (state_13995[2]);var state_13995__$1 = state_13995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13995__$1,inst_13993);
} else
{if((state_val_13996 === 4))
{var inst_13941 = (state_13995[7]);var inst_13941__$1 = (state_13995[2]);var inst_13942 = (inst_13941__$1 == null);var state_13995__$1 = (function (){var statearr_13998 = state_13995;(statearr_13998[7] = inst_13941__$1);
return statearr_13998;
})();if(cljs.core.truth_(inst_13942))
{var statearr_13999_14035 = state_13995__$1;(statearr_13999_14035[1] = 5);
} else
{var statearr_14000_14036 = state_13995__$1;(statearr_14000_14036[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 5))
{var inst_13944 = cljs.core.async.close_BANG_.call(null,out);var state_13995__$1 = state_13995;var statearr_14001_14037 = state_13995__$1;(statearr_14001_14037[2] = inst_13944);
(statearr_14001_14037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 6))
{var inst_13941 = (state_13995[7]);var inst_13946 = f.call(null,inst_13941);var inst_13951 = cljs.core.seq.call(null,inst_13946);var inst_13952 = inst_13951;var inst_13953 = null;var inst_13954 = 0;var inst_13955 = 0;var state_13995__$1 = (function (){var statearr_14002 = state_13995;(statearr_14002[8] = inst_13953);
(statearr_14002[9] = inst_13954);
(statearr_14002[10] = inst_13955);
(statearr_14002[11] = inst_13952);
return statearr_14002;
})();var statearr_14003_14038 = state_13995__$1;(statearr_14003_14038[2] = null);
(statearr_14003_14038[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 7))
{var inst_13991 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14004_14039 = state_13995__$1;(statearr_14004_14039[2] = inst_13991);
(statearr_14004_14039[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 8))
{var inst_13954 = (state_13995[9]);var inst_13955 = (state_13995[10]);var inst_13957 = (inst_13955 < inst_13954);var inst_13958 = inst_13957;var state_13995__$1 = state_13995;if(cljs.core.truth_(inst_13958))
{var statearr_14005_14040 = state_13995__$1;(statearr_14005_14040[1] = 10);
} else
{var statearr_14006_14041 = state_13995__$1;(statearr_14006_14041[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 9))
{var inst_13988 = (state_13995[2]);var state_13995__$1 = (function (){var statearr_14007 = state_13995;(statearr_14007[12] = inst_13988);
return statearr_14007;
})();var statearr_14008_14042 = state_13995__$1;(statearr_14008_14042[2] = null);
(statearr_14008_14042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 10))
{var inst_13953 = (state_13995[8]);var inst_13955 = (state_13995[10]);var inst_13960 = cljs.core._nth.call(null,inst_13953,inst_13955);var state_13995__$1 = state_13995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13995__$1,13,out,inst_13960);
} else
{if((state_val_13996 === 11))
{var inst_13952 = (state_13995[11]);var inst_13966 = (state_13995[13]);var inst_13966__$1 = cljs.core.seq.call(null,inst_13952);var state_13995__$1 = (function (){var statearr_14012 = state_13995;(statearr_14012[13] = inst_13966__$1);
return statearr_14012;
})();if(inst_13966__$1)
{var statearr_14013_14043 = state_13995__$1;(statearr_14013_14043[1] = 14);
} else
{var statearr_14014_14044 = state_13995__$1;(statearr_14014_14044[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 12))
{var inst_13986 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14015_14045 = state_13995__$1;(statearr_14015_14045[2] = inst_13986);
(statearr_14015_14045[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 13))
{var inst_13953 = (state_13995[8]);var inst_13954 = (state_13995[9]);var inst_13955 = (state_13995[10]);var inst_13952 = (state_13995[11]);var inst_13962 = (state_13995[2]);var inst_13963 = (inst_13955 + 1);var tmp14009 = inst_13953;var tmp14010 = inst_13954;var tmp14011 = inst_13952;var inst_13952__$1 = tmp14011;var inst_13953__$1 = tmp14009;var inst_13954__$1 = tmp14010;var inst_13955__$1 = inst_13963;var state_13995__$1 = (function (){var statearr_14016 = state_13995;(statearr_14016[8] = inst_13953__$1);
(statearr_14016[9] = inst_13954__$1);
(statearr_14016[14] = inst_13962);
(statearr_14016[10] = inst_13955__$1);
(statearr_14016[11] = inst_13952__$1);
return statearr_14016;
})();var statearr_14017_14046 = state_13995__$1;(statearr_14017_14046[2] = null);
(statearr_14017_14046[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 14))
{var inst_13966 = (state_13995[13]);var inst_13968 = cljs.core.chunked_seq_QMARK_.call(null,inst_13966);var state_13995__$1 = state_13995;if(inst_13968)
{var statearr_14018_14047 = state_13995__$1;(statearr_14018_14047[1] = 17);
} else
{var statearr_14019_14048 = state_13995__$1;(statearr_14019_14048[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 15))
{var state_13995__$1 = state_13995;var statearr_14020_14049 = state_13995__$1;(statearr_14020_14049[2] = null);
(statearr_14020_14049[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 16))
{var inst_13984 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14021_14050 = state_13995__$1;(statearr_14021_14050[2] = inst_13984);
(statearr_14021_14050[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 17))
{var inst_13966 = (state_13995[13]);var inst_13970 = cljs.core.chunk_first.call(null,inst_13966);var inst_13971 = cljs.core.chunk_rest.call(null,inst_13966);var inst_13972 = cljs.core.count.call(null,inst_13970);var inst_13952 = inst_13971;var inst_13953 = inst_13970;var inst_13954 = inst_13972;var inst_13955 = 0;var state_13995__$1 = (function (){var statearr_14022 = state_13995;(statearr_14022[8] = inst_13953);
(statearr_14022[9] = inst_13954);
(statearr_14022[10] = inst_13955);
(statearr_14022[11] = inst_13952);
return statearr_14022;
})();var statearr_14023_14051 = state_13995__$1;(statearr_14023_14051[2] = null);
(statearr_14023_14051[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 18))
{var inst_13966 = (state_13995[13]);var inst_13975 = cljs.core.first.call(null,inst_13966);var state_13995__$1 = state_13995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13995__$1,20,out,inst_13975);
} else
{if((state_val_13996 === 19))
{var inst_13981 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14024_14052 = state_13995__$1;(statearr_14024_14052[2] = inst_13981);
(statearr_14024_14052[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 20))
{var inst_13966 = (state_13995[13]);var inst_13977 = (state_13995[2]);var inst_13978 = cljs.core.next.call(null,inst_13966);var inst_13952 = inst_13978;var inst_13953 = null;var inst_13954 = 0;var inst_13955 = 0;var state_13995__$1 = (function (){var statearr_14025 = state_13995;(statearr_14025[8] = inst_13953);
(statearr_14025[9] = inst_13954);
(statearr_14025[10] = inst_13955);
(statearr_14025[11] = inst_13952);
(statearr_14025[15] = inst_13977);
return statearr_14025;
})();var statearr_14026_14053 = state_13995__$1;(statearr_14026_14053[2] = null);
(statearr_14026_14053[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14030[0] = state_machine__5507__auto__);
(statearr_14030[1] = 1);
return statearr_14030;
});
var state_machine__5507__auto____1 = (function (state_13995){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14031){if((e14031 instanceof Object))
{var ex__5510__auto__ = e14031;var statearr_14032_14054 = state_13995;(statearr_14032_14054[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14055 = state_13995;
state_13995 = G__14055;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13995){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14033 = f__5522__auto__.call(null);(statearr_14033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14033;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14136 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14115){var state_val_14116 = (state_14115[1]);if((state_val_14116 === 1))
{var state_14115__$1 = state_14115;var statearr_14117_14137 = state_14115__$1;(statearr_14117_14137[2] = null);
(statearr_14117_14137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14116 === 2))
{var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14115__$1,4,from);
} else
{if((state_val_14116 === 3))
{var inst_14113 = (state_14115[2]);var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14115__$1,inst_14113);
} else
{if((state_val_14116 === 4))
{var inst_14098 = (state_14115[7]);var inst_14098__$1 = (state_14115[2]);var inst_14099 = (inst_14098__$1 == null);var state_14115__$1 = (function (){var statearr_14118 = state_14115;(statearr_14118[7] = inst_14098__$1);
return statearr_14118;
})();if(cljs.core.truth_(inst_14099))
{var statearr_14119_14138 = state_14115__$1;(statearr_14119_14138[1] = 5);
} else
{var statearr_14120_14139 = state_14115__$1;(statearr_14120_14139[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14116 === 5))
{var state_14115__$1 = state_14115;if(cljs.core.truth_(close_QMARK_))
{var statearr_14121_14140 = state_14115__$1;(statearr_14121_14140[1] = 8);
} else
{var statearr_14122_14141 = state_14115__$1;(statearr_14122_14141[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14116 === 6))
{var inst_14098 = (state_14115[7]);var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14115__$1,11,to,inst_14098);
} else
{if((state_val_14116 === 7))
{var inst_14111 = (state_14115[2]);var state_14115__$1 = state_14115;var statearr_14123_14142 = state_14115__$1;(statearr_14123_14142[2] = inst_14111);
(statearr_14123_14142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14116 === 8))
{var inst_14102 = cljs.core.async.close_BANG_.call(null,to);var state_14115__$1 = state_14115;var statearr_14124_14143 = state_14115__$1;(statearr_14124_14143[2] = inst_14102);
(statearr_14124_14143[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14116 === 9))
{var state_14115__$1 = state_14115;var statearr_14125_14144 = state_14115__$1;(statearr_14125_14144[2] = null);
(statearr_14125_14144[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14116 === 10))
{var inst_14105 = (state_14115[2]);var state_14115__$1 = state_14115;var statearr_14126_14145 = state_14115__$1;(statearr_14126_14145[2] = inst_14105);
(statearr_14126_14145[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14116 === 11))
{var inst_14108 = (state_14115[2]);var state_14115__$1 = (function (){var statearr_14127 = state_14115;(statearr_14127[8] = inst_14108);
return statearr_14127;
})();var statearr_14128_14146 = state_14115__$1;(statearr_14128_14146[2] = null);
(statearr_14128_14146[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14132 = [null,null,null,null,null,null,null,null,null];(statearr_14132[0] = state_machine__5507__auto__);
(statearr_14132[1] = 1);
return statearr_14132;
});
var state_machine__5507__auto____1 = (function (state_14115){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14115);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14133){if((e14133 instanceof Object))
{var ex__5510__auto__ = e14133;var statearr_14134_14147 = state_14115;(statearr_14134_14147[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14115);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14148 = state_14115;
state_14115 = G__14148;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14115){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14135 = f__5522__auto__.call(null);(statearr_14135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14136);
return statearr_14135;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14213){var state_val_14214 = (state_14213[1]);if((state_val_14214 === 1))
{var state_14213__$1 = state_14213;var statearr_14215_14236 = state_14213__$1;(statearr_14215_14236[2] = null);
(statearr_14215_14236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 2))
{var state_14213__$1 = state_14213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14213__$1,4,ch);
} else
{if((state_val_14214 === 3))
{var inst_14211 = (state_14213[2]);var state_14213__$1 = state_14213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14213__$1,inst_14211);
} else
{if((state_val_14214 === 4))
{var inst_14194 = (state_14213[7]);var inst_14194__$1 = (state_14213[2]);var inst_14195 = (inst_14194__$1 == null);var state_14213__$1 = (function (){var statearr_14216 = state_14213;(statearr_14216[7] = inst_14194__$1);
return statearr_14216;
})();if(cljs.core.truth_(inst_14195))
{var statearr_14217_14237 = state_14213__$1;(statearr_14217_14237[1] = 5);
} else
{var statearr_14218_14238 = state_14213__$1;(statearr_14218_14238[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 5))
{var inst_14197 = cljs.core.async.close_BANG_.call(null,tc);var inst_14198 = cljs.core.async.close_BANG_.call(null,fc);var state_14213__$1 = (function (){var statearr_14219 = state_14213;(statearr_14219[8] = inst_14197);
return statearr_14219;
})();var statearr_14220_14239 = state_14213__$1;(statearr_14220_14239[2] = inst_14198);
(statearr_14220_14239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 6))
{var inst_14194 = (state_14213[7]);var inst_14200 = p.call(null,inst_14194);var state_14213__$1 = state_14213;if(cljs.core.truth_(inst_14200))
{var statearr_14221_14240 = state_14213__$1;(statearr_14221_14240[1] = 9);
} else
{var statearr_14222_14241 = state_14213__$1;(statearr_14222_14241[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 7))
{var inst_14209 = (state_14213[2]);var state_14213__$1 = state_14213;var statearr_14223_14242 = state_14213__$1;(statearr_14223_14242[2] = inst_14209);
(statearr_14223_14242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 8))
{var inst_14206 = (state_14213[2]);var state_14213__$1 = (function (){var statearr_14224 = state_14213;(statearr_14224[9] = inst_14206);
return statearr_14224;
})();var statearr_14225_14243 = state_14213__$1;(statearr_14225_14243[2] = null);
(statearr_14225_14243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 9))
{var state_14213__$1 = state_14213;var statearr_14226_14244 = state_14213__$1;(statearr_14226_14244[2] = tc);
(statearr_14226_14244[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 10))
{var state_14213__$1 = state_14213;var statearr_14227_14245 = state_14213__$1;(statearr_14227_14245[2] = fc);
(statearr_14227_14245[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 11))
{var inst_14194 = (state_14213[7]);var inst_14204 = (state_14213[2]);var state_14213__$1 = state_14213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14213__$1,8,inst_14204,inst_14194);
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
var state_machine__5507__auto____0 = (function (){var statearr_14231 = [null,null,null,null,null,null,null,null,null,null];(statearr_14231[0] = state_machine__5507__auto__);
(statearr_14231[1] = 1);
return statearr_14231;
});
var state_machine__5507__auto____1 = (function (state_14213){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14232){if((e14232 instanceof Object))
{var ex__5510__auto__ = e14232;var statearr_14233_14246 = state_14213;(statearr_14233_14246[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14247 = state_14213;
state_14213 = G__14247;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14213){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14234 = f__5522__auto__.call(null);(statearr_14234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14235);
return statearr_14234;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14294){var state_val_14295 = (state_14294[1]);if((state_val_14295 === 7))
{var inst_14290 = (state_14294[2]);var state_14294__$1 = state_14294;var statearr_14296_14312 = state_14294__$1;(statearr_14296_14312[2] = inst_14290);
(statearr_14296_14312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 6))
{var inst_14283 = (state_14294[7]);var inst_14280 = (state_14294[8]);var inst_14287 = f.call(null,inst_14280,inst_14283);var inst_14280__$1 = inst_14287;var state_14294__$1 = (function (){var statearr_14297 = state_14294;(statearr_14297[8] = inst_14280__$1);
return statearr_14297;
})();var statearr_14298_14313 = state_14294__$1;(statearr_14298_14313[2] = null);
(statearr_14298_14313[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 5))
{var inst_14280 = (state_14294[8]);var state_14294__$1 = state_14294;var statearr_14299_14314 = state_14294__$1;(statearr_14299_14314[2] = inst_14280);
(statearr_14299_14314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 4))
{var inst_14283 = (state_14294[7]);var inst_14283__$1 = (state_14294[2]);var inst_14284 = (inst_14283__$1 == null);var state_14294__$1 = (function (){var statearr_14300 = state_14294;(statearr_14300[7] = inst_14283__$1);
return statearr_14300;
})();if(cljs.core.truth_(inst_14284))
{var statearr_14301_14315 = state_14294__$1;(statearr_14301_14315[1] = 5);
} else
{var statearr_14302_14316 = state_14294__$1;(statearr_14302_14316[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 3))
{var inst_14292 = (state_14294[2]);var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14294__$1,inst_14292);
} else
{if((state_val_14295 === 2))
{var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14294__$1,4,ch);
} else
{if((state_val_14295 === 1))
{var inst_14280 = init;var state_14294__$1 = (function (){var statearr_14303 = state_14294;(statearr_14303[8] = inst_14280);
return statearr_14303;
})();var statearr_14304_14317 = state_14294__$1;(statearr_14304_14317[2] = null);
(statearr_14304_14317[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14308 = [null,null,null,null,null,null,null,null,null];(statearr_14308[0] = state_machine__5507__auto__);
(statearr_14308[1] = 1);
return statearr_14308;
});
var state_machine__5507__auto____1 = (function (state_14294){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14294);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14309){if((e14309 instanceof Object))
{var ex__5510__auto__ = e14309;var statearr_14310_14318 = state_14294;(statearr_14310_14318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14319 = state_14294;
state_14294 = G__14319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14311 = f__5522__auto__.call(null);(statearr_14311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14311;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14381){var state_val_14382 = (state_14381[1]);if((state_val_14382 === 1))
{var inst_14361 = cljs.core.seq.call(null,coll);var inst_14362 = inst_14361;var state_14381__$1 = (function (){var statearr_14383 = state_14381;(statearr_14383[7] = inst_14362);
return statearr_14383;
})();var statearr_14384_14402 = state_14381__$1;(statearr_14384_14402[2] = null);
(statearr_14384_14402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14382 === 2))
{var inst_14362 = (state_14381[7]);var state_14381__$1 = state_14381;if(cljs.core.truth_(inst_14362))
{var statearr_14385_14403 = state_14381__$1;(statearr_14385_14403[1] = 4);
} else
{var statearr_14386_14404 = state_14381__$1;(statearr_14386_14404[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14382 === 3))
{var inst_14379 = (state_14381[2]);var state_14381__$1 = state_14381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14381__$1,inst_14379);
} else
{if((state_val_14382 === 4))
{var inst_14362 = (state_14381[7]);var inst_14365 = cljs.core.first.call(null,inst_14362);var state_14381__$1 = state_14381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14381__$1,7,ch,inst_14365);
} else
{if((state_val_14382 === 5))
{var state_14381__$1 = state_14381;if(cljs.core.truth_(close_QMARK_))
{var statearr_14387_14405 = state_14381__$1;(statearr_14387_14405[1] = 8);
} else
{var statearr_14388_14406 = state_14381__$1;(statearr_14388_14406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14382 === 6))
{var inst_14377 = (state_14381[2]);var state_14381__$1 = state_14381;var statearr_14389_14407 = state_14381__$1;(statearr_14389_14407[2] = inst_14377);
(statearr_14389_14407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14382 === 7))
{var inst_14362 = (state_14381[7]);var inst_14367 = (state_14381[2]);var inst_14368 = cljs.core.next.call(null,inst_14362);var inst_14362__$1 = inst_14368;var state_14381__$1 = (function (){var statearr_14390 = state_14381;(statearr_14390[7] = inst_14362__$1);
(statearr_14390[8] = inst_14367);
return statearr_14390;
})();var statearr_14391_14408 = state_14381__$1;(statearr_14391_14408[2] = null);
(statearr_14391_14408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14382 === 8))
{var inst_14372 = cljs.core.async.close_BANG_.call(null,ch);var state_14381__$1 = state_14381;var statearr_14392_14409 = state_14381__$1;(statearr_14392_14409[2] = inst_14372);
(statearr_14392_14409[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14382 === 9))
{var state_14381__$1 = state_14381;var statearr_14393_14410 = state_14381__$1;(statearr_14393_14410[2] = null);
(statearr_14393_14410[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14382 === 10))
{var inst_14375 = (state_14381[2]);var state_14381__$1 = state_14381;var statearr_14394_14411 = state_14381__$1;(statearr_14394_14411[2] = inst_14375);
(statearr_14394_14411[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14398 = [null,null,null,null,null,null,null,null,null];(statearr_14398[0] = state_machine__5507__auto__);
(statearr_14398[1] = 1);
return statearr_14398;
});
var state_machine__5507__auto____1 = (function (state_14381){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14399){if((e14399 instanceof Object))
{var ex__5510__auto__ = e14399;var statearr_14400_14412 = state_14381;(statearr_14400_14412[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14413 = state_14381;
state_14381 = G__14413;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14381){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14401 = f__5522__auto__.call(null);(statearr_14401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14401;
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
cljs.core.async.Mux = (function (){var obj14415 = {};return obj14415;
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
cljs.core.async.Mult = (function (){var obj14417 = {};return obj14417;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14641 = (function (cs,ch,mult,meta14642){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14642 = meta14642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14641.cljs$lang$type = true;
cljs.core.async.t14641.cljs$lang$ctorStr = "cljs.core.async/t14641";
cljs.core.async.t14641.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14641");
});})(cs))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14643){var self__ = this;
var _14643__$1 = this;return self__.meta14642;
});})(cs))
;
cljs.core.async.t14641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14643,meta14642__$1){var self__ = this;
var _14643__$1 = this;return (new cljs.core.async.t14641(self__.cs,self__.ch,self__.mult,meta14642__$1));
});})(cs))
;
cljs.core.async.__GT_t14641 = ((function (cs){
return (function __GT_t14641(cs__$1,ch__$1,mult__$1,meta14642){return (new cljs.core.async.t14641(cs__$1,ch__$1,mult__$1,meta14642));
});})(cs))
;
}
return (new cljs.core.async.t14641(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14778){var state_val_14779 = (state_14778[1]);if((state_val_14779 === 32))
{var inst_14646 = (state_14778[7]);var inst_14722 = (state_14778[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14778,31,Object,null,30);var inst_14729 = cljs.core.async.put_BANG_.call(null,inst_14722,inst_14646,done);var state_14778__$1 = state_14778;var statearr_14780_14865 = state_14778__$1;(statearr_14780_14865[2] = inst_14729);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 1))
{var state_14778__$1 = state_14778;var statearr_14781_14866 = state_14778__$1;(statearr_14781_14866[2] = null);
(statearr_14781_14866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 33))
{var inst_14735 = (state_14778[9]);var inst_14737 = cljs.core.chunked_seq_QMARK_.call(null,inst_14735);var state_14778__$1 = state_14778;if(inst_14737)
{var statearr_14782_14867 = state_14778__$1;(statearr_14782_14867[1] = 36);
} else
{var statearr_14783_14868 = state_14778__$1;(statearr_14783_14868[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 2))
{var state_14778__$1 = state_14778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14778__$1,4,ch);
} else
{if((state_val_14779 === 34))
{var state_14778__$1 = state_14778;var statearr_14784_14869 = state_14778__$1;(statearr_14784_14869[2] = null);
(statearr_14784_14869[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 3))
{var inst_14776 = (state_14778[2]);var state_14778__$1 = state_14778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14778__$1,inst_14776);
} else
{if((state_val_14779 === 35))
{var inst_14760 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14785_14870 = state_14778__$1;(statearr_14785_14870[2] = inst_14760);
(statearr_14785_14870[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 4))
{var inst_14646 = (state_14778[7]);var inst_14646__$1 = (state_14778[2]);var inst_14647 = (inst_14646__$1 == null);var state_14778__$1 = (function (){var statearr_14786 = state_14778;(statearr_14786[7] = inst_14646__$1);
return statearr_14786;
})();if(cljs.core.truth_(inst_14647))
{var statearr_14787_14871 = state_14778__$1;(statearr_14787_14871[1] = 5);
} else
{var statearr_14788_14872 = state_14778__$1;(statearr_14788_14872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 36))
{var inst_14735 = (state_14778[9]);var inst_14739 = cljs.core.chunk_first.call(null,inst_14735);var inst_14740 = cljs.core.chunk_rest.call(null,inst_14735);var inst_14741 = cljs.core.count.call(null,inst_14739);var inst_14714 = inst_14740;var inst_14715 = inst_14739;var inst_14716 = inst_14741;var inst_14717 = 0;var state_14778__$1 = (function (){var statearr_14789 = state_14778;(statearr_14789[10] = inst_14714);
(statearr_14789[11] = inst_14715);
(statearr_14789[12] = inst_14717);
(statearr_14789[13] = inst_14716);
return statearr_14789;
})();var statearr_14790_14873 = state_14778__$1;(statearr_14790_14873[2] = null);
(statearr_14790_14873[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 5))
{var inst_14653 = cljs.core.deref.call(null,cs);var inst_14654 = cljs.core.seq.call(null,inst_14653);var inst_14655 = inst_14654;var inst_14656 = null;var inst_14657 = 0;var inst_14658 = 0;var state_14778__$1 = (function (){var statearr_14791 = state_14778;(statearr_14791[14] = inst_14656);
(statearr_14791[15] = inst_14655);
(statearr_14791[16] = inst_14657);
(statearr_14791[17] = inst_14658);
return statearr_14791;
})();var statearr_14792_14874 = state_14778__$1;(statearr_14792_14874[2] = null);
(statearr_14792_14874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 37))
{var inst_14735 = (state_14778[9]);var inst_14744 = cljs.core.first.call(null,inst_14735);var state_14778__$1 = (function (){var statearr_14793 = state_14778;(statearr_14793[18] = inst_14744);
return statearr_14793;
})();var statearr_14794_14875 = state_14778__$1;(statearr_14794_14875[2] = null);
(statearr_14794_14875[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 6))
{var inst_14706 = (state_14778[19]);var inst_14705 = cljs.core.deref.call(null,cs);var inst_14706__$1 = cljs.core.keys.call(null,inst_14705);var inst_14707 = cljs.core.count.call(null,inst_14706__$1);var inst_14708 = cljs.core.reset_BANG_.call(null,dctr,inst_14707);var inst_14713 = cljs.core.seq.call(null,inst_14706__$1);var inst_14714 = inst_14713;var inst_14715 = null;var inst_14716 = 0;var inst_14717 = 0;var state_14778__$1 = (function (){var statearr_14795 = state_14778;(statearr_14795[19] = inst_14706__$1);
(statearr_14795[20] = inst_14708);
(statearr_14795[10] = inst_14714);
(statearr_14795[11] = inst_14715);
(statearr_14795[12] = inst_14717);
(statearr_14795[13] = inst_14716);
return statearr_14795;
})();var statearr_14796_14876 = state_14778__$1;(statearr_14796_14876[2] = null);
(statearr_14796_14876[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 38))
{var inst_14757 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14797_14877 = state_14778__$1;(statearr_14797_14877[2] = inst_14757);
(statearr_14797_14877[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 7))
{var inst_14774 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14798_14878 = state_14778__$1;(statearr_14798_14878[2] = inst_14774);
(statearr_14798_14878[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 39))
{var inst_14735 = (state_14778[9]);var inst_14753 = (state_14778[2]);var inst_14754 = cljs.core.next.call(null,inst_14735);var inst_14714 = inst_14754;var inst_14715 = null;var inst_14716 = 0;var inst_14717 = 0;var state_14778__$1 = (function (){var statearr_14799 = state_14778;(statearr_14799[10] = inst_14714);
(statearr_14799[11] = inst_14715);
(statearr_14799[12] = inst_14717);
(statearr_14799[13] = inst_14716);
(statearr_14799[21] = inst_14753);
return statearr_14799;
})();var statearr_14800_14879 = state_14778__$1;(statearr_14800_14879[2] = null);
(statearr_14800_14879[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 8))
{var inst_14657 = (state_14778[16]);var inst_14658 = (state_14778[17]);var inst_14660 = (inst_14658 < inst_14657);var inst_14661 = inst_14660;var state_14778__$1 = state_14778;if(cljs.core.truth_(inst_14661))
{var statearr_14801_14880 = state_14778__$1;(statearr_14801_14880[1] = 10);
} else
{var statearr_14802_14881 = state_14778__$1;(statearr_14802_14881[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 40))
{var inst_14744 = (state_14778[18]);var inst_14745 = (state_14778[2]);var inst_14746 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14747 = cljs.core.async.untap_STAR_.call(null,m,inst_14744);var state_14778__$1 = (function (){var statearr_14803 = state_14778;(statearr_14803[22] = inst_14745);
(statearr_14803[23] = inst_14746);
return statearr_14803;
})();var statearr_14804_14882 = state_14778__$1;(statearr_14804_14882[2] = inst_14747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 9))
{var inst_14703 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14805_14883 = state_14778__$1;(statearr_14805_14883[2] = inst_14703);
(statearr_14805_14883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 41))
{var inst_14646 = (state_14778[7]);var inst_14744 = (state_14778[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14778,40,Object,null,39);var inst_14751 = cljs.core.async.put_BANG_.call(null,inst_14744,inst_14646,done);var state_14778__$1 = state_14778;var statearr_14806_14884 = state_14778__$1;(statearr_14806_14884[2] = inst_14751);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 10))
{var inst_14656 = (state_14778[14]);var inst_14658 = (state_14778[17]);var inst_14664 = cljs.core._nth.call(null,inst_14656,inst_14658);var inst_14665 = cljs.core.nth.call(null,inst_14664,0,null);var inst_14666 = cljs.core.nth.call(null,inst_14664,1,null);var state_14778__$1 = (function (){var statearr_14807 = state_14778;(statearr_14807[24] = inst_14665);
return statearr_14807;
})();if(cljs.core.truth_(inst_14666))
{var statearr_14808_14885 = state_14778__$1;(statearr_14808_14885[1] = 13);
} else
{var statearr_14809_14886 = state_14778__$1;(statearr_14809_14886[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 42))
{var state_14778__$1 = state_14778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14778__$1,45,dchan);
} else
{if((state_val_14779 === 11))
{var inst_14655 = (state_14778[15]);var inst_14675 = (state_14778[25]);var inst_14675__$1 = cljs.core.seq.call(null,inst_14655);var state_14778__$1 = (function (){var statearr_14810 = state_14778;(statearr_14810[25] = inst_14675__$1);
return statearr_14810;
})();if(inst_14675__$1)
{var statearr_14811_14887 = state_14778__$1;(statearr_14811_14887[1] = 16);
} else
{var statearr_14812_14888 = state_14778__$1;(statearr_14812_14888[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 43))
{var state_14778__$1 = state_14778;var statearr_14813_14889 = state_14778__$1;(statearr_14813_14889[2] = null);
(statearr_14813_14889[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 12))
{var inst_14701 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14814_14890 = state_14778__$1;(statearr_14814_14890[2] = inst_14701);
(statearr_14814_14890[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 44))
{var inst_14771 = (state_14778[2]);var state_14778__$1 = (function (){var statearr_14815 = state_14778;(statearr_14815[26] = inst_14771);
return statearr_14815;
})();var statearr_14816_14891 = state_14778__$1;(statearr_14816_14891[2] = null);
(statearr_14816_14891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 13))
{var inst_14665 = (state_14778[24]);var inst_14668 = cljs.core.async.close_BANG_.call(null,inst_14665);var state_14778__$1 = state_14778;var statearr_14817_14892 = state_14778__$1;(statearr_14817_14892[2] = inst_14668);
(statearr_14817_14892[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 45))
{var inst_14768 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14821_14893 = state_14778__$1;(statearr_14821_14893[2] = inst_14768);
(statearr_14821_14893[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 14))
{var state_14778__$1 = state_14778;var statearr_14822_14894 = state_14778__$1;(statearr_14822_14894[2] = null);
(statearr_14822_14894[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 15))
{var inst_14656 = (state_14778[14]);var inst_14655 = (state_14778[15]);var inst_14657 = (state_14778[16]);var inst_14658 = (state_14778[17]);var inst_14671 = (state_14778[2]);var inst_14672 = (inst_14658 + 1);var tmp14818 = inst_14656;var tmp14819 = inst_14655;var tmp14820 = inst_14657;var inst_14655__$1 = tmp14819;var inst_14656__$1 = tmp14818;var inst_14657__$1 = tmp14820;var inst_14658__$1 = inst_14672;var state_14778__$1 = (function (){var statearr_14823 = state_14778;(statearr_14823[14] = inst_14656__$1);
(statearr_14823[15] = inst_14655__$1);
(statearr_14823[27] = inst_14671);
(statearr_14823[16] = inst_14657__$1);
(statearr_14823[17] = inst_14658__$1);
return statearr_14823;
})();var statearr_14824_14895 = state_14778__$1;(statearr_14824_14895[2] = null);
(statearr_14824_14895[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 16))
{var inst_14675 = (state_14778[25]);var inst_14677 = cljs.core.chunked_seq_QMARK_.call(null,inst_14675);var state_14778__$1 = state_14778;if(inst_14677)
{var statearr_14825_14896 = state_14778__$1;(statearr_14825_14896[1] = 19);
} else
{var statearr_14826_14897 = state_14778__$1;(statearr_14826_14897[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 17))
{var state_14778__$1 = state_14778;var statearr_14827_14898 = state_14778__$1;(statearr_14827_14898[2] = null);
(statearr_14827_14898[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 18))
{var inst_14699 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14828_14899 = state_14778__$1;(statearr_14828_14899[2] = inst_14699);
(statearr_14828_14899[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 19))
{var inst_14675 = (state_14778[25]);var inst_14679 = cljs.core.chunk_first.call(null,inst_14675);var inst_14680 = cljs.core.chunk_rest.call(null,inst_14675);var inst_14681 = cljs.core.count.call(null,inst_14679);var inst_14655 = inst_14680;var inst_14656 = inst_14679;var inst_14657 = inst_14681;var inst_14658 = 0;var state_14778__$1 = (function (){var statearr_14829 = state_14778;(statearr_14829[14] = inst_14656);
(statearr_14829[15] = inst_14655);
(statearr_14829[16] = inst_14657);
(statearr_14829[17] = inst_14658);
return statearr_14829;
})();var statearr_14830_14900 = state_14778__$1;(statearr_14830_14900[2] = null);
(statearr_14830_14900[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 20))
{var inst_14675 = (state_14778[25]);var inst_14685 = cljs.core.first.call(null,inst_14675);var inst_14686 = cljs.core.nth.call(null,inst_14685,0,null);var inst_14687 = cljs.core.nth.call(null,inst_14685,1,null);var state_14778__$1 = (function (){var statearr_14831 = state_14778;(statearr_14831[28] = inst_14686);
return statearr_14831;
})();if(cljs.core.truth_(inst_14687))
{var statearr_14832_14901 = state_14778__$1;(statearr_14832_14901[1] = 22);
} else
{var statearr_14833_14902 = state_14778__$1;(statearr_14833_14902[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 21))
{var inst_14696 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14834_14903 = state_14778__$1;(statearr_14834_14903[2] = inst_14696);
(statearr_14834_14903[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 22))
{var inst_14686 = (state_14778[28]);var inst_14689 = cljs.core.async.close_BANG_.call(null,inst_14686);var state_14778__$1 = state_14778;var statearr_14835_14904 = state_14778__$1;(statearr_14835_14904[2] = inst_14689);
(statearr_14835_14904[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 23))
{var state_14778__$1 = state_14778;var statearr_14836_14905 = state_14778__$1;(statearr_14836_14905[2] = null);
(statearr_14836_14905[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 24))
{var inst_14675 = (state_14778[25]);var inst_14692 = (state_14778[2]);var inst_14693 = cljs.core.next.call(null,inst_14675);var inst_14655 = inst_14693;var inst_14656 = null;var inst_14657 = 0;var inst_14658 = 0;var state_14778__$1 = (function (){var statearr_14837 = state_14778;(statearr_14837[14] = inst_14656);
(statearr_14837[15] = inst_14655);
(statearr_14837[29] = inst_14692);
(statearr_14837[16] = inst_14657);
(statearr_14837[17] = inst_14658);
return statearr_14837;
})();var statearr_14838_14906 = state_14778__$1;(statearr_14838_14906[2] = null);
(statearr_14838_14906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 25))
{var inst_14717 = (state_14778[12]);var inst_14716 = (state_14778[13]);var inst_14719 = (inst_14717 < inst_14716);var inst_14720 = inst_14719;var state_14778__$1 = state_14778;if(cljs.core.truth_(inst_14720))
{var statearr_14839_14907 = state_14778__$1;(statearr_14839_14907[1] = 27);
} else
{var statearr_14840_14908 = state_14778__$1;(statearr_14840_14908[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 26))
{var inst_14706 = (state_14778[19]);var inst_14764 = (state_14778[2]);var inst_14765 = cljs.core.seq.call(null,inst_14706);var state_14778__$1 = (function (){var statearr_14841 = state_14778;(statearr_14841[30] = inst_14764);
return statearr_14841;
})();if(inst_14765)
{var statearr_14842_14909 = state_14778__$1;(statearr_14842_14909[1] = 42);
} else
{var statearr_14843_14910 = state_14778__$1;(statearr_14843_14910[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 27))
{var inst_14715 = (state_14778[11]);var inst_14717 = (state_14778[12]);var inst_14722 = cljs.core._nth.call(null,inst_14715,inst_14717);var state_14778__$1 = (function (){var statearr_14844 = state_14778;(statearr_14844[8] = inst_14722);
return statearr_14844;
})();var statearr_14845_14911 = state_14778__$1;(statearr_14845_14911[2] = null);
(statearr_14845_14911[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 28))
{var inst_14714 = (state_14778[10]);var inst_14735 = (state_14778[9]);var inst_14735__$1 = cljs.core.seq.call(null,inst_14714);var state_14778__$1 = (function (){var statearr_14849 = state_14778;(statearr_14849[9] = inst_14735__$1);
return statearr_14849;
})();if(inst_14735__$1)
{var statearr_14850_14912 = state_14778__$1;(statearr_14850_14912[1] = 33);
} else
{var statearr_14851_14913 = state_14778__$1;(statearr_14851_14913[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 29))
{var inst_14762 = (state_14778[2]);var state_14778__$1 = state_14778;var statearr_14852_14914 = state_14778__$1;(statearr_14852_14914[2] = inst_14762);
(statearr_14852_14914[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 30))
{var inst_14714 = (state_14778[10]);var inst_14715 = (state_14778[11]);var inst_14717 = (state_14778[12]);var inst_14716 = (state_14778[13]);var inst_14731 = (state_14778[2]);var inst_14732 = (inst_14717 + 1);var tmp14846 = inst_14714;var tmp14847 = inst_14715;var tmp14848 = inst_14716;var inst_14714__$1 = tmp14846;var inst_14715__$1 = tmp14847;var inst_14716__$1 = tmp14848;var inst_14717__$1 = inst_14732;var state_14778__$1 = (function (){var statearr_14853 = state_14778;(statearr_14853[31] = inst_14731);
(statearr_14853[10] = inst_14714__$1);
(statearr_14853[11] = inst_14715__$1);
(statearr_14853[12] = inst_14717__$1);
(statearr_14853[13] = inst_14716__$1);
return statearr_14853;
})();var statearr_14854_14915 = state_14778__$1;(statearr_14854_14915[2] = null);
(statearr_14854_14915[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14779 === 31))
{var inst_14722 = (state_14778[8]);var inst_14723 = (state_14778[2]);var inst_14724 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14725 = cljs.core.async.untap_STAR_.call(null,m,inst_14722);var state_14778__$1 = (function (){var statearr_14855 = state_14778;(statearr_14855[32] = inst_14723);
(statearr_14855[33] = inst_14724);
return statearr_14855;
})();var statearr_14856_14916 = state_14778__$1;(statearr_14856_14916[2] = inst_14725);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14778__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14860[0] = state_machine__5507__auto__);
(statearr_14860[1] = 1);
return statearr_14860;
});
var state_machine__5507__auto____1 = (function (state_14778){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14778);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14861){if((e14861 instanceof Object))
{var ex__5510__auto__ = e14861;var statearr_14862_14917 = state_14778;(statearr_14862_14917[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14918 = state_14778;
state_14778 = G__14918;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14778){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14863 = f__5522__auto__.call(null);(statearr_14863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14864);
return statearr_14863;
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
cljs.core.async.Mix = (function (){var obj14920 = {};return obj14920;
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
;var m = (function (){if(typeof cljs.core.async.t15030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15030 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15031){
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
this.meta15031 = meta15031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15030.cljs$lang$type = true;
cljs.core.async.t15030.cljs$lang$ctorStr = "cljs.core.async/t15030";
cljs.core.async.t15030.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15030");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15030.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15032){var self__ = this;
var _15032__$1 = this;return self__.meta15031;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15032,meta15031__$1){var self__ = this;
var _15032__$1 = this;return (new cljs.core.async.t15030(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15031__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15030 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15030(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15031){return (new cljs.core.async.t15030(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15031));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15030(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15097){var state_val_15098 = (state_15097[1]);if((state_val_15098 === 1))
{var inst_15036 = (state_15097[7]);var inst_15036__$1 = calc_state.call(null);var inst_15037 = cljs.core.seq_QMARK_.call(null,inst_15036__$1);var state_15097__$1 = (function (){var statearr_15099 = state_15097;(statearr_15099[7] = inst_15036__$1);
return statearr_15099;
})();if(inst_15037)
{var statearr_15100_15140 = state_15097__$1;(statearr_15100_15140[1] = 2);
} else
{var statearr_15101_15141 = state_15097__$1;(statearr_15101_15141[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 2))
{var inst_15036 = (state_15097[7]);var inst_15039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15036);var state_15097__$1 = state_15097;var statearr_15102_15142 = state_15097__$1;(statearr_15102_15142[2] = inst_15039);
(statearr_15102_15142[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 3))
{var inst_15036 = (state_15097[7]);var state_15097__$1 = state_15097;var statearr_15103_15143 = state_15097__$1;(statearr_15103_15143[2] = inst_15036);
(statearr_15103_15143[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 4))
{var inst_15036 = (state_15097[7]);var inst_15042 = (state_15097[2]);var inst_15043 = cljs.core.get.call(null,inst_15042,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15044 = cljs.core.get.call(null,inst_15042,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15045 = cljs.core.get.call(null,inst_15042,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15046 = inst_15036;var state_15097__$1 = (function (){var statearr_15104 = state_15097;(statearr_15104[8] = inst_15045);
(statearr_15104[9] = inst_15046);
(statearr_15104[10] = inst_15044);
(statearr_15104[11] = inst_15043);
return statearr_15104;
})();var statearr_15105_15144 = state_15097__$1;(statearr_15105_15144[2] = null);
(statearr_15105_15144[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 5))
{var inst_15046 = (state_15097[9]);var inst_15049 = cljs.core.seq_QMARK_.call(null,inst_15046);var state_15097__$1 = state_15097;if(inst_15049)
{var statearr_15106_15145 = state_15097__$1;(statearr_15106_15145[1] = 7);
} else
{var statearr_15107_15146 = state_15097__$1;(statearr_15107_15146[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 6))
{var inst_15095 = (state_15097[2]);var state_15097__$1 = state_15097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15097__$1,inst_15095);
} else
{if((state_val_15098 === 7))
{var inst_15046 = (state_15097[9]);var inst_15051 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15046);var state_15097__$1 = state_15097;var statearr_15108_15147 = state_15097__$1;(statearr_15108_15147[2] = inst_15051);
(statearr_15108_15147[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 8))
{var inst_15046 = (state_15097[9]);var state_15097__$1 = state_15097;var statearr_15109_15148 = state_15097__$1;(statearr_15109_15148[2] = inst_15046);
(statearr_15109_15148[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 9))
{var inst_15054 = (state_15097[12]);var inst_15054__$1 = (state_15097[2]);var inst_15055 = cljs.core.get.call(null,inst_15054__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15056 = cljs.core.get.call(null,inst_15054__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15057 = cljs.core.get.call(null,inst_15054__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15097__$1 = (function (){var statearr_15110 = state_15097;(statearr_15110[13] = inst_15056);
(statearr_15110[14] = inst_15057);
(statearr_15110[12] = inst_15054__$1);
return statearr_15110;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15097__$1,10,inst_15055);
} else
{if((state_val_15098 === 10))
{var inst_15061 = (state_15097[15]);var inst_15062 = (state_15097[16]);var inst_15060 = (state_15097[2]);var inst_15061__$1 = cljs.core.nth.call(null,inst_15060,0,null);var inst_15062__$1 = cljs.core.nth.call(null,inst_15060,1,null);var inst_15063 = (inst_15061__$1 == null);var inst_15064 = cljs.core._EQ_.call(null,inst_15062__$1,change);var inst_15065 = (inst_15063) || (inst_15064);var state_15097__$1 = (function (){var statearr_15111 = state_15097;(statearr_15111[15] = inst_15061__$1);
(statearr_15111[16] = inst_15062__$1);
return statearr_15111;
})();if(cljs.core.truth_(inst_15065))
{var statearr_15112_15149 = state_15097__$1;(statearr_15112_15149[1] = 11);
} else
{var statearr_15113_15150 = state_15097__$1;(statearr_15113_15150[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 11))
{var inst_15061 = (state_15097[15]);var inst_15067 = (inst_15061 == null);var state_15097__$1 = state_15097;if(cljs.core.truth_(inst_15067))
{var statearr_15114_15151 = state_15097__$1;(statearr_15114_15151[1] = 14);
} else
{var statearr_15115_15152 = state_15097__$1;(statearr_15115_15152[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 12))
{var inst_15057 = (state_15097[14]);var inst_15062 = (state_15097[16]);var inst_15076 = (state_15097[17]);var inst_15076__$1 = inst_15057.call(null,inst_15062);var state_15097__$1 = (function (){var statearr_15116 = state_15097;(statearr_15116[17] = inst_15076__$1);
return statearr_15116;
})();if(cljs.core.truth_(inst_15076__$1))
{var statearr_15117_15153 = state_15097__$1;(statearr_15117_15153[1] = 17);
} else
{var statearr_15118_15154 = state_15097__$1;(statearr_15118_15154[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 13))
{var inst_15093 = (state_15097[2]);var state_15097__$1 = state_15097;var statearr_15119_15155 = state_15097__$1;(statearr_15119_15155[2] = inst_15093);
(statearr_15119_15155[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 14))
{var inst_15062 = (state_15097[16]);var inst_15069 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15062);var state_15097__$1 = state_15097;var statearr_15120_15156 = state_15097__$1;(statearr_15120_15156[2] = inst_15069);
(statearr_15120_15156[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 15))
{var state_15097__$1 = state_15097;var statearr_15121_15157 = state_15097__$1;(statearr_15121_15157[2] = null);
(statearr_15121_15157[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 16))
{var inst_15072 = (state_15097[2]);var inst_15073 = calc_state.call(null);var inst_15046 = inst_15073;var state_15097__$1 = (function (){var statearr_15122 = state_15097;(statearr_15122[18] = inst_15072);
(statearr_15122[9] = inst_15046);
return statearr_15122;
})();var statearr_15123_15158 = state_15097__$1;(statearr_15123_15158[2] = null);
(statearr_15123_15158[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 17))
{var inst_15076 = (state_15097[17]);var state_15097__$1 = state_15097;var statearr_15124_15159 = state_15097__$1;(statearr_15124_15159[2] = inst_15076);
(statearr_15124_15159[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 18))
{var inst_15056 = (state_15097[13]);var inst_15057 = (state_15097[14]);var inst_15062 = (state_15097[16]);var inst_15079 = cljs.core.empty_QMARK_.call(null,inst_15057);var inst_15080 = inst_15056.call(null,inst_15062);var inst_15081 = cljs.core.not.call(null,inst_15080);var inst_15082 = (inst_15079) && (inst_15081);var state_15097__$1 = state_15097;var statearr_15125_15160 = state_15097__$1;(statearr_15125_15160[2] = inst_15082);
(statearr_15125_15160[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 19))
{var inst_15084 = (state_15097[2]);var state_15097__$1 = state_15097;if(cljs.core.truth_(inst_15084))
{var statearr_15126_15161 = state_15097__$1;(statearr_15126_15161[1] = 20);
} else
{var statearr_15127_15162 = state_15097__$1;(statearr_15127_15162[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 20))
{var inst_15061 = (state_15097[15]);var state_15097__$1 = state_15097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15097__$1,23,out,inst_15061);
} else
{if((state_val_15098 === 21))
{var state_15097__$1 = state_15097;var statearr_15128_15163 = state_15097__$1;(statearr_15128_15163[2] = null);
(statearr_15128_15163[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 22))
{var inst_15054 = (state_15097[12]);var inst_15090 = (state_15097[2]);var inst_15046 = inst_15054;var state_15097__$1 = (function (){var statearr_15129 = state_15097;(statearr_15129[19] = inst_15090);
(statearr_15129[9] = inst_15046);
return statearr_15129;
})();var statearr_15130_15164 = state_15097__$1;(statearr_15130_15164[2] = null);
(statearr_15130_15164[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15098 === 23))
{var inst_15087 = (state_15097[2]);var state_15097__$1 = state_15097;var statearr_15131_15165 = state_15097__$1;(statearr_15131_15165[2] = inst_15087);
(statearr_15131_15165[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15135[0] = state_machine__5507__auto__);
(statearr_15135[1] = 1);
return statearr_15135;
});
var state_machine__5507__auto____1 = (function (state_15097){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15097);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15136){if((e15136 instanceof Object))
{var ex__5510__auto__ = e15136;var statearr_15137_15166 = state_15097;(statearr_15137_15166[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15167 = state_15097;
state_15097 = G__15167;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15097){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15138 = f__5522__auto__.call(null);(statearr_15138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15139);
return statearr_15138;
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
cljs.core.async.Pub = (function (){var obj15169 = {};return obj15169;
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
return (function (p1__15170_SHARP_){if(cljs.core.truth_(p1__15170_SHARP_.call(null,topic)))
{return p1__15170_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15170_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15295 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15296){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15296 = meta15296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15295.cljs$lang$type = true;
cljs.core.async.t15295.cljs$lang$ctorStr = "cljs.core.async/t15295";
cljs.core.async.t15295.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15295");
});})(mults,ensure_mult))
;
cljs.core.async.t15295.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15295.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15295.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15295.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15297){var self__ = this;
var _15297__$1 = this;return self__.meta15296;
});})(mults,ensure_mult))
;
cljs.core.async.t15295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15297,meta15296__$1){var self__ = this;
var _15297__$1 = this;return (new cljs.core.async.t15295(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15296__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15295 = ((function (mults,ensure_mult){
return (function __GT_t15295(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15296){return (new cljs.core.async.t15295(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15296));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15295(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15419 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15371){var state_val_15372 = (state_15371[1]);if((state_val_15372 === 1))
{var state_15371__$1 = state_15371;var statearr_15373_15420 = state_15371__$1;(statearr_15373_15420[2] = null);
(statearr_15373_15420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 2))
{var state_15371__$1 = state_15371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15371__$1,4,ch);
} else
{if((state_val_15372 === 3))
{var inst_15369 = (state_15371[2]);var state_15371__$1 = state_15371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15371__$1,inst_15369);
} else
{if((state_val_15372 === 4))
{var inst_15300 = (state_15371[7]);var inst_15300__$1 = (state_15371[2]);var inst_15301 = (inst_15300__$1 == null);var state_15371__$1 = (function (){var statearr_15374 = state_15371;(statearr_15374[7] = inst_15300__$1);
return statearr_15374;
})();if(cljs.core.truth_(inst_15301))
{var statearr_15375_15421 = state_15371__$1;(statearr_15375_15421[1] = 5);
} else
{var statearr_15376_15422 = state_15371__$1;(statearr_15376_15422[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 5))
{var inst_15307 = cljs.core.deref.call(null,mults);var inst_15308 = cljs.core.vals.call(null,inst_15307);var inst_15309 = cljs.core.seq.call(null,inst_15308);var inst_15310 = inst_15309;var inst_15311 = null;var inst_15312 = 0;var inst_15313 = 0;var state_15371__$1 = (function (){var statearr_15377 = state_15371;(statearr_15377[8] = inst_15311);
(statearr_15377[9] = inst_15312);
(statearr_15377[10] = inst_15310);
(statearr_15377[11] = inst_15313);
return statearr_15377;
})();var statearr_15378_15423 = state_15371__$1;(statearr_15378_15423[2] = null);
(statearr_15378_15423[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 6))
{var inst_15348 = (state_15371[12]);var inst_15300 = (state_15371[7]);var inst_15350 = (state_15371[13]);var inst_15348__$1 = topic_fn.call(null,inst_15300);var inst_15349 = cljs.core.deref.call(null,mults);var inst_15350__$1 = cljs.core.get.call(null,inst_15349,inst_15348__$1);var state_15371__$1 = (function (){var statearr_15379 = state_15371;(statearr_15379[12] = inst_15348__$1);
(statearr_15379[13] = inst_15350__$1);
return statearr_15379;
})();if(cljs.core.truth_(inst_15350__$1))
{var statearr_15380_15424 = state_15371__$1;(statearr_15380_15424[1] = 19);
} else
{var statearr_15381_15425 = state_15371__$1;(statearr_15381_15425[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 7))
{var inst_15367 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15382_15426 = state_15371__$1;(statearr_15382_15426[2] = inst_15367);
(statearr_15382_15426[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 8))
{var inst_15312 = (state_15371[9]);var inst_15313 = (state_15371[11]);var inst_15315 = (inst_15313 < inst_15312);var inst_15316 = inst_15315;var state_15371__$1 = state_15371;if(cljs.core.truth_(inst_15316))
{var statearr_15386_15427 = state_15371__$1;(statearr_15386_15427[1] = 10);
} else
{var statearr_15387_15428 = state_15371__$1;(statearr_15387_15428[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 9))
{var inst_15346 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15388_15429 = state_15371__$1;(statearr_15388_15429[2] = inst_15346);
(statearr_15388_15429[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 10))
{var inst_15311 = (state_15371[8]);var inst_15312 = (state_15371[9]);var inst_15310 = (state_15371[10]);var inst_15313 = (state_15371[11]);var inst_15318 = cljs.core._nth.call(null,inst_15311,inst_15313);var inst_15319 = cljs.core.async.muxch_STAR_.call(null,inst_15318);var inst_15320 = cljs.core.async.close_BANG_.call(null,inst_15319);var inst_15321 = (inst_15313 + 1);var tmp15383 = inst_15311;var tmp15384 = inst_15312;var tmp15385 = inst_15310;var inst_15310__$1 = tmp15385;var inst_15311__$1 = tmp15383;var inst_15312__$1 = tmp15384;var inst_15313__$1 = inst_15321;var state_15371__$1 = (function (){var statearr_15389 = state_15371;(statearr_15389[8] = inst_15311__$1);
(statearr_15389[9] = inst_15312__$1);
(statearr_15389[10] = inst_15310__$1);
(statearr_15389[14] = inst_15320);
(statearr_15389[11] = inst_15313__$1);
return statearr_15389;
})();var statearr_15390_15430 = state_15371__$1;(statearr_15390_15430[2] = null);
(statearr_15390_15430[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 11))
{var inst_15310 = (state_15371[10]);var inst_15324 = (state_15371[15]);var inst_15324__$1 = cljs.core.seq.call(null,inst_15310);var state_15371__$1 = (function (){var statearr_15391 = state_15371;(statearr_15391[15] = inst_15324__$1);
return statearr_15391;
})();if(inst_15324__$1)
{var statearr_15392_15431 = state_15371__$1;(statearr_15392_15431[1] = 13);
} else
{var statearr_15393_15432 = state_15371__$1;(statearr_15393_15432[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 12))
{var inst_15344 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15394_15433 = state_15371__$1;(statearr_15394_15433[2] = inst_15344);
(statearr_15394_15433[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 13))
{var inst_15324 = (state_15371[15]);var inst_15326 = cljs.core.chunked_seq_QMARK_.call(null,inst_15324);var state_15371__$1 = state_15371;if(inst_15326)
{var statearr_15395_15434 = state_15371__$1;(statearr_15395_15434[1] = 16);
} else
{var statearr_15396_15435 = state_15371__$1;(statearr_15396_15435[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 14))
{var state_15371__$1 = state_15371;var statearr_15397_15436 = state_15371__$1;(statearr_15397_15436[2] = null);
(statearr_15397_15436[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 15))
{var inst_15342 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15398_15437 = state_15371__$1;(statearr_15398_15437[2] = inst_15342);
(statearr_15398_15437[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 16))
{var inst_15324 = (state_15371[15]);var inst_15328 = cljs.core.chunk_first.call(null,inst_15324);var inst_15329 = cljs.core.chunk_rest.call(null,inst_15324);var inst_15330 = cljs.core.count.call(null,inst_15328);var inst_15310 = inst_15329;var inst_15311 = inst_15328;var inst_15312 = inst_15330;var inst_15313 = 0;var state_15371__$1 = (function (){var statearr_15399 = state_15371;(statearr_15399[8] = inst_15311);
(statearr_15399[9] = inst_15312);
(statearr_15399[10] = inst_15310);
(statearr_15399[11] = inst_15313);
return statearr_15399;
})();var statearr_15400_15438 = state_15371__$1;(statearr_15400_15438[2] = null);
(statearr_15400_15438[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 17))
{var inst_15324 = (state_15371[15]);var inst_15333 = cljs.core.first.call(null,inst_15324);var inst_15334 = cljs.core.async.muxch_STAR_.call(null,inst_15333);var inst_15335 = cljs.core.async.close_BANG_.call(null,inst_15334);var inst_15336 = cljs.core.next.call(null,inst_15324);var inst_15310 = inst_15336;var inst_15311 = null;var inst_15312 = 0;var inst_15313 = 0;var state_15371__$1 = (function (){var statearr_15401 = state_15371;(statearr_15401[16] = inst_15335);
(statearr_15401[8] = inst_15311);
(statearr_15401[9] = inst_15312);
(statearr_15401[10] = inst_15310);
(statearr_15401[11] = inst_15313);
return statearr_15401;
})();var statearr_15402_15439 = state_15371__$1;(statearr_15402_15439[2] = null);
(statearr_15402_15439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 18))
{var inst_15339 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15403_15440 = state_15371__$1;(statearr_15403_15440[2] = inst_15339);
(statearr_15403_15440[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 19))
{var state_15371__$1 = state_15371;var statearr_15404_15441 = state_15371__$1;(statearr_15404_15441[2] = null);
(statearr_15404_15441[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 20))
{var state_15371__$1 = state_15371;var statearr_15405_15442 = state_15371__$1;(statearr_15405_15442[2] = null);
(statearr_15405_15442[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 21))
{var inst_15364 = (state_15371[2]);var state_15371__$1 = (function (){var statearr_15406 = state_15371;(statearr_15406[17] = inst_15364);
return statearr_15406;
})();var statearr_15407_15443 = state_15371__$1;(statearr_15407_15443[2] = null);
(statearr_15407_15443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 22))
{var inst_15361 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15408_15444 = state_15371__$1;(statearr_15408_15444[2] = inst_15361);
(statearr_15408_15444[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 23))
{var inst_15348 = (state_15371[12]);var inst_15352 = (state_15371[2]);var inst_15353 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15348);var state_15371__$1 = (function (){var statearr_15409 = state_15371;(statearr_15409[18] = inst_15352);
return statearr_15409;
})();var statearr_15410_15445 = state_15371__$1;(statearr_15410_15445[2] = inst_15353);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15371__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 24))
{var inst_15300 = (state_15371[7]);var inst_15350 = (state_15371[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15371,23,Object,null,22);var inst_15357 = cljs.core.async.muxch_STAR_.call(null,inst_15350);var state_15371__$1 = state_15371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15371__$1,25,inst_15357,inst_15300);
} else
{if((state_val_15372 === 25))
{var inst_15359 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15411_15446 = state_15371__$1;(statearr_15411_15446[2] = inst_15359);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15371__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15415[0] = state_machine__5507__auto__);
(statearr_15415[1] = 1);
return statearr_15415;
});
var state_machine__5507__auto____1 = (function (state_15371){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15416){if((e15416 instanceof Object))
{var ex__5510__auto__ = e15416;var statearr_15417_15447 = state_15371;(statearr_15417_15447[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15448 = state_15371;
state_15371 = G__15448;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15371){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15418 = f__5522__auto__.call(null);(statearr_15418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15419);
return statearr_15418;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15585 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15555){var state_val_15556 = (state_15555[1]);if((state_val_15556 === 1))
{var state_15555__$1 = state_15555;var statearr_15557_15586 = state_15555__$1;(statearr_15557_15586[2] = null);
(statearr_15557_15586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 2))
{var inst_15518 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15519 = 0;var state_15555__$1 = (function (){var statearr_15558 = state_15555;(statearr_15558[7] = inst_15519);
(statearr_15558[8] = inst_15518);
return statearr_15558;
})();var statearr_15559_15587 = state_15555__$1;(statearr_15559_15587[2] = null);
(statearr_15559_15587[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 3))
{var inst_15553 = (state_15555[2]);var state_15555__$1 = state_15555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15555__$1,inst_15553);
} else
{if((state_val_15556 === 4))
{var inst_15519 = (state_15555[7]);var inst_15521 = (inst_15519 < cnt);var state_15555__$1 = state_15555;if(cljs.core.truth_(inst_15521))
{var statearr_15560_15588 = state_15555__$1;(statearr_15560_15588[1] = 6);
} else
{var statearr_15561_15589 = state_15555__$1;(statearr_15561_15589[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 5))
{var inst_15539 = (state_15555[2]);var state_15555__$1 = (function (){var statearr_15562 = state_15555;(statearr_15562[9] = inst_15539);
return statearr_15562;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15555__$1,12,dchan);
} else
{if((state_val_15556 === 6))
{var state_15555__$1 = state_15555;var statearr_15563_15590 = state_15555__$1;(statearr_15563_15590[2] = null);
(statearr_15563_15590[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 7))
{var state_15555__$1 = state_15555;var statearr_15564_15591 = state_15555__$1;(statearr_15564_15591[2] = null);
(statearr_15564_15591[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 8))
{var inst_15537 = (state_15555[2]);var state_15555__$1 = state_15555;var statearr_15565_15592 = state_15555__$1;(statearr_15565_15592[2] = inst_15537);
(statearr_15565_15592[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 9))
{var inst_15519 = (state_15555[7]);var inst_15532 = (state_15555[2]);var inst_15533 = (inst_15519 + 1);var inst_15519__$1 = inst_15533;var state_15555__$1 = (function (){var statearr_15566 = state_15555;(statearr_15566[10] = inst_15532);
(statearr_15566[7] = inst_15519__$1);
return statearr_15566;
})();var statearr_15567_15593 = state_15555__$1;(statearr_15567_15593[2] = null);
(statearr_15567_15593[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 10))
{var inst_15523 = (state_15555[2]);var inst_15524 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15555__$1 = (function (){var statearr_15568 = state_15555;(statearr_15568[11] = inst_15523);
return statearr_15568;
})();var statearr_15569_15594 = state_15555__$1;(statearr_15569_15594[2] = inst_15524);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15555__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 11))
{var inst_15519 = (state_15555[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15555,10,Object,null,9);var inst_15528 = chs__$1.call(null,inst_15519);var inst_15529 = done.call(null,inst_15519);var inst_15530 = cljs.core.async.take_BANG_.call(null,inst_15528,inst_15529);var state_15555__$1 = state_15555;var statearr_15570_15595 = state_15555__$1;(statearr_15570_15595[2] = inst_15530);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15555__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 12))
{var inst_15541 = (state_15555[12]);var inst_15541__$1 = (state_15555[2]);var inst_15542 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15541__$1);var state_15555__$1 = (function (){var statearr_15571 = state_15555;(statearr_15571[12] = inst_15541__$1);
return statearr_15571;
})();if(cljs.core.truth_(inst_15542))
{var statearr_15572_15596 = state_15555__$1;(statearr_15572_15596[1] = 13);
} else
{var statearr_15573_15597 = state_15555__$1;(statearr_15573_15597[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 13))
{var inst_15544 = cljs.core.async.close_BANG_.call(null,out);var state_15555__$1 = state_15555;var statearr_15574_15598 = state_15555__$1;(statearr_15574_15598[2] = inst_15544);
(statearr_15574_15598[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 14))
{var inst_15541 = (state_15555[12]);var inst_15546 = cljs.core.apply.call(null,f,inst_15541);var state_15555__$1 = state_15555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15555__$1,16,out,inst_15546);
} else
{if((state_val_15556 === 15))
{var inst_15551 = (state_15555[2]);var state_15555__$1 = state_15555;var statearr_15575_15599 = state_15555__$1;(statearr_15575_15599[2] = inst_15551);
(statearr_15575_15599[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15556 === 16))
{var inst_15548 = (state_15555[2]);var state_15555__$1 = (function (){var statearr_15576 = state_15555;(statearr_15576[13] = inst_15548);
return statearr_15576;
})();var statearr_15577_15600 = state_15555__$1;(statearr_15577_15600[2] = null);
(statearr_15577_15600[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15581[0] = state_machine__5507__auto__);
(statearr_15581[1] = 1);
return statearr_15581;
});
var state_machine__5507__auto____1 = (function (state_15555){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15555);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15582){if((e15582 instanceof Object))
{var ex__5510__auto__ = e15582;var statearr_15583_15601 = state_15555;(statearr_15583_15601[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15555);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15602 = state_15555;
state_15555 = G__15602;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15555){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15584 = f__5522__auto__.call(null);(statearr_15584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15585);
return statearr_15584;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15710 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15686){var state_val_15687 = (state_15686[1]);if((state_val_15687 === 1))
{var inst_15657 = cljs.core.vec.call(null,chs);var inst_15658 = inst_15657;var state_15686__$1 = (function (){var statearr_15688 = state_15686;(statearr_15688[7] = inst_15658);
return statearr_15688;
})();var statearr_15689_15711 = state_15686__$1;(statearr_15689_15711[2] = null);
(statearr_15689_15711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 2))
{var inst_15658 = (state_15686[7]);var inst_15660 = cljs.core.count.call(null,inst_15658);var inst_15661 = (inst_15660 > 0);var state_15686__$1 = state_15686;if(cljs.core.truth_(inst_15661))
{var statearr_15690_15712 = state_15686__$1;(statearr_15690_15712[1] = 4);
} else
{var statearr_15691_15713 = state_15686__$1;(statearr_15691_15713[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 3))
{var inst_15684 = (state_15686[2]);var state_15686__$1 = state_15686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15686__$1,inst_15684);
} else
{if((state_val_15687 === 4))
{var inst_15658 = (state_15686[7]);var state_15686__$1 = state_15686;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15686__$1,7,inst_15658);
} else
{if((state_val_15687 === 5))
{var inst_15680 = cljs.core.async.close_BANG_.call(null,out);var state_15686__$1 = state_15686;var statearr_15692_15714 = state_15686__$1;(statearr_15692_15714[2] = inst_15680);
(statearr_15692_15714[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 6))
{var inst_15682 = (state_15686[2]);var state_15686__$1 = state_15686;var statearr_15693_15715 = state_15686__$1;(statearr_15693_15715[2] = inst_15682);
(statearr_15693_15715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 7))
{var inst_15666 = (state_15686[8]);var inst_15665 = (state_15686[9]);var inst_15665__$1 = (state_15686[2]);var inst_15666__$1 = cljs.core.nth.call(null,inst_15665__$1,0,null);var inst_15667 = cljs.core.nth.call(null,inst_15665__$1,1,null);var inst_15668 = (inst_15666__$1 == null);var state_15686__$1 = (function (){var statearr_15694 = state_15686;(statearr_15694[10] = inst_15667);
(statearr_15694[8] = inst_15666__$1);
(statearr_15694[9] = inst_15665__$1);
return statearr_15694;
})();if(cljs.core.truth_(inst_15668))
{var statearr_15695_15716 = state_15686__$1;(statearr_15695_15716[1] = 8);
} else
{var statearr_15696_15717 = state_15686__$1;(statearr_15696_15717[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 8))
{var inst_15658 = (state_15686[7]);var inst_15667 = (state_15686[10]);var inst_15666 = (state_15686[8]);var inst_15665 = (state_15686[9]);var inst_15670 = (function (){var c = inst_15667;var v = inst_15666;var vec__15663 = inst_15665;var cs = inst_15658;return ((function (c,v,vec__15663,cs,inst_15658,inst_15667,inst_15666,inst_15665,state_val_15687){
return (function (p1__15603_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15603_SHARP_);
});
;})(c,v,vec__15663,cs,inst_15658,inst_15667,inst_15666,inst_15665,state_val_15687))
})();var inst_15671 = cljs.core.filterv.call(null,inst_15670,inst_15658);var inst_15658__$1 = inst_15671;var state_15686__$1 = (function (){var statearr_15697 = state_15686;(statearr_15697[7] = inst_15658__$1);
return statearr_15697;
})();var statearr_15698_15718 = state_15686__$1;(statearr_15698_15718[2] = null);
(statearr_15698_15718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 9))
{var inst_15666 = (state_15686[8]);var state_15686__$1 = state_15686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15686__$1,11,out,inst_15666);
} else
{if((state_val_15687 === 10))
{var inst_15678 = (state_15686[2]);var state_15686__$1 = state_15686;var statearr_15700_15719 = state_15686__$1;(statearr_15700_15719[2] = inst_15678);
(statearr_15700_15719[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 11))
{var inst_15658 = (state_15686[7]);var inst_15675 = (state_15686[2]);var tmp15699 = inst_15658;var inst_15658__$1 = tmp15699;var state_15686__$1 = (function (){var statearr_15701 = state_15686;(statearr_15701[7] = inst_15658__$1);
(statearr_15701[11] = inst_15675);
return statearr_15701;
})();var statearr_15702_15720 = state_15686__$1;(statearr_15702_15720[2] = null);
(statearr_15702_15720[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15706 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15706[0] = state_machine__5507__auto__);
(statearr_15706[1] = 1);
return statearr_15706;
});
var state_machine__5507__auto____1 = (function (state_15686){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15686);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15707){if((e15707 instanceof Object))
{var ex__5510__auto__ = e15707;var statearr_15708_15721 = state_15686;(statearr_15708_15721[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15722 = state_15686;
state_15686 = G__15722;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15686){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15709 = f__5522__auto__.call(null);(statearr_15709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15710);
return statearr_15709;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15815 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15792){var state_val_15793 = (state_15792[1]);if((state_val_15793 === 1))
{var inst_15769 = 0;var state_15792__$1 = (function (){var statearr_15794 = state_15792;(statearr_15794[7] = inst_15769);
return statearr_15794;
})();var statearr_15795_15816 = state_15792__$1;(statearr_15795_15816[2] = null);
(statearr_15795_15816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15793 === 2))
{var inst_15769 = (state_15792[7]);var inst_15771 = (inst_15769 < n);var state_15792__$1 = state_15792;if(cljs.core.truth_(inst_15771))
{var statearr_15796_15817 = state_15792__$1;(statearr_15796_15817[1] = 4);
} else
{var statearr_15797_15818 = state_15792__$1;(statearr_15797_15818[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15793 === 3))
{var inst_15789 = (state_15792[2]);var inst_15790 = cljs.core.async.close_BANG_.call(null,out);var state_15792__$1 = (function (){var statearr_15798 = state_15792;(statearr_15798[8] = inst_15789);
return statearr_15798;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15792__$1,inst_15790);
} else
{if((state_val_15793 === 4))
{var state_15792__$1 = state_15792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15792__$1,7,ch);
} else
{if((state_val_15793 === 5))
{var state_15792__$1 = state_15792;var statearr_15799_15819 = state_15792__$1;(statearr_15799_15819[2] = null);
(statearr_15799_15819[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15793 === 6))
{var inst_15787 = (state_15792[2]);var state_15792__$1 = state_15792;var statearr_15800_15820 = state_15792__$1;(statearr_15800_15820[2] = inst_15787);
(statearr_15800_15820[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15793 === 7))
{var inst_15774 = (state_15792[9]);var inst_15774__$1 = (state_15792[2]);var inst_15775 = (inst_15774__$1 == null);var inst_15776 = cljs.core.not.call(null,inst_15775);var state_15792__$1 = (function (){var statearr_15801 = state_15792;(statearr_15801[9] = inst_15774__$1);
return statearr_15801;
})();if(inst_15776)
{var statearr_15802_15821 = state_15792__$1;(statearr_15802_15821[1] = 8);
} else
{var statearr_15803_15822 = state_15792__$1;(statearr_15803_15822[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15793 === 8))
{var inst_15774 = (state_15792[9]);var state_15792__$1 = state_15792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15792__$1,11,out,inst_15774);
} else
{if((state_val_15793 === 9))
{var state_15792__$1 = state_15792;var statearr_15804_15823 = state_15792__$1;(statearr_15804_15823[2] = null);
(statearr_15804_15823[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15793 === 10))
{var inst_15784 = (state_15792[2]);var state_15792__$1 = state_15792;var statearr_15805_15824 = state_15792__$1;(statearr_15805_15824[2] = inst_15784);
(statearr_15805_15824[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15793 === 11))
{var inst_15769 = (state_15792[7]);var inst_15779 = (state_15792[2]);var inst_15780 = (inst_15769 + 1);var inst_15769__$1 = inst_15780;var state_15792__$1 = (function (){var statearr_15806 = state_15792;(statearr_15806[10] = inst_15779);
(statearr_15806[7] = inst_15769__$1);
return statearr_15806;
})();var statearr_15807_15825 = state_15792__$1;(statearr_15807_15825[2] = null);
(statearr_15807_15825[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15811 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15811[0] = state_machine__5507__auto__);
(statearr_15811[1] = 1);
return statearr_15811;
});
var state_machine__5507__auto____1 = (function (state_15792){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15812){if((e15812 instanceof Object))
{var ex__5510__auto__ = e15812;var statearr_15813_15826 = state_15792;(statearr_15813_15826[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15827 = state_15792;
state_15792 = G__15827;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15792){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15814 = f__5522__auto__.call(null);(statearr_15814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15815);
return statearr_15814;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15924 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15899){var state_val_15900 = (state_15899[1]);if((state_val_15900 === 1))
{var inst_15876 = null;var state_15899__$1 = (function (){var statearr_15901 = state_15899;(statearr_15901[7] = inst_15876);
return statearr_15901;
})();var statearr_15902_15925 = state_15899__$1;(statearr_15902_15925[2] = null);
(statearr_15902_15925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15900 === 2))
{var state_15899__$1 = state_15899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15899__$1,4,ch);
} else
{if((state_val_15900 === 3))
{var inst_15896 = (state_15899[2]);var inst_15897 = cljs.core.async.close_BANG_.call(null,out);var state_15899__$1 = (function (){var statearr_15903 = state_15899;(statearr_15903[8] = inst_15896);
return statearr_15903;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15899__$1,inst_15897);
} else
{if((state_val_15900 === 4))
{var inst_15879 = (state_15899[9]);var inst_15879__$1 = (state_15899[2]);var inst_15880 = (inst_15879__$1 == null);var inst_15881 = cljs.core.not.call(null,inst_15880);var state_15899__$1 = (function (){var statearr_15904 = state_15899;(statearr_15904[9] = inst_15879__$1);
return statearr_15904;
})();if(inst_15881)
{var statearr_15905_15926 = state_15899__$1;(statearr_15905_15926[1] = 5);
} else
{var statearr_15906_15927 = state_15899__$1;(statearr_15906_15927[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15900 === 5))
{var inst_15879 = (state_15899[9]);var inst_15876 = (state_15899[7]);var inst_15883 = cljs.core._EQ_.call(null,inst_15879,inst_15876);var state_15899__$1 = state_15899;if(inst_15883)
{var statearr_15907_15928 = state_15899__$1;(statearr_15907_15928[1] = 8);
} else
{var statearr_15908_15929 = state_15899__$1;(statearr_15908_15929[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15900 === 6))
{var state_15899__$1 = state_15899;var statearr_15910_15930 = state_15899__$1;(statearr_15910_15930[2] = null);
(statearr_15910_15930[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15900 === 7))
{var inst_15894 = (state_15899[2]);var state_15899__$1 = state_15899;var statearr_15911_15931 = state_15899__$1;(statearr_15911_15931[2] = inst_15894);
(statearr_15911_15931[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15900 === 8))
{var inst_15876 = (state_15899[7]);var tmp15909 = inst_15876;var inst_15876__$1 = tmp15909;var state_15899__$1 = (function (){var statearr_15912 = state_15899;(statearr_15912[7] = inst_15876__$1);
return statearr_15912;
})();var statearr_15913_15932 = state_15899__$1;(statearr_15913_15932[2] = null);
(statearr_15913_15932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15900 === 9))
{var inst_15879 = (state_15899[9]);var state_15899__$1 = state_15899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15899__$1,11,out,inst_15879);
} else
{if((state_val_15900 === 10))
{var inst_15891 = (state_15899[2]);var state_15899__$1 = state_15899;var statearr_15914_15933 = state_15899__$1;(statearr_15914_15933[2] = inst_15891);
(statearr_15914_15933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15900 === 11))
{var inst_15879 = (state_15899[9]);var inst_15888 = (state_15899[2]);var inst_15876 = inst_15879;var state_15899__$1 = (function (){var statearr_15915 = state_15899;(statearr_15915[10] = inst_15888);
(statearr_15915[7] = inst_15876);
return statearr_15915;
})();var statearr_15916_15934 = state_15899__$1;(statearr_15916_15934[2] = null);
(statearr_15916_15934[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15920 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15920[0] = state_machine__5507__auto__);
(statearr_15920[1] = 1);
return statearr_15920;
});
var state_machine__5507__auto____1 = (function (state_15899){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15899);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15921){if((e15921 instanceof Object))
{var ex__5510__auto__ = e15921;var statearr_15922_15935 = state_15899;(statearr_15922_15935[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15936 = state_15899;
state_15899 = G__15936;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15899){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15923 = f__5522__auto__.call(null);(statearr_15923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15924);
return statearr_15923;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16071 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16041){var state_val_16042 = (state_16041[1]);if((state_val_16042 === 1))
{var inst_16004 = (new Array(n));var inst_16005 = inst_16004;var inst_16006 = 0;var state_16041__$1 = (function (){var statearr_16043 = state_16041;(statearr_16043[7] = inst_16005);
(statearr_16043[8] = inst_16006);
return statearr_16043;
})();var statearr_16044_16072 = state_16041__$1;(statearr_16044_16072[2] = null);
(statearr_16044_16072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 2))
{var state_16041__$1 = state_16041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16041__$1,4,ch);
} else
{if((state_val_16042 === 3))
{var inst_16039 = (state_16041[2]);var state_16041__$1 = state_16041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16041__$1,inst_16039);
} else
{if((state_val_16042 === 4))
{var inst_16009 = (state_16041[9]);var inst_16009__$1 = (state_16041[2]);var inst_16010 = (inst_16009__$1 == null);var inst_16011 = cljs.core.not.call(null,inst_16010);var state_16041__$1 = (function (){var statearr_16045 = state_16041;(statearr_16045[9] = inst_16009__$1);
return statearr_16045;
})();if(inst_16011)
{var statearr_16046_16073 = state_16041__$1;(statearr_16046_16073[1] = 5);
} else
{var statearr_16047_16074 = state_16041__$1;(statearr_16047_16074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 5))
{var inst_16005 = (state_16041[7]);var inst_16014 = (state_16041[10]);var inst_16009 = (state_16041[9]);var inst_16006 = (state_16041[8]);var inst_16013 = (inst_16005[inst_16006] = inst_16009);var inst_16014__$1 = (inst_16006 + 1);var inst_16015 = (inst_16014__$1 < n);var state_16041__$1 = (function (){var statearr_16048 = state_16041;(statearr_16048[11] = inst_16013);
(statearr_16048[10] = inst_16014__$1);
return statearr_16048;
})();if(cljs.core.truth_(inst_16015))
{var statearr_16049_16075 = state_16041__$1;(statearr_16049_16075[1] = 8);
} else
{var statearr_16050_16076 = state_16041__$1;(statearr_16050_16076[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 6))
{var inst_16006 = (state_16041[8]);var inst_16027 = (inst_16006 > 0);var state_16041__$1 = state_16041;if(cljs.core.truth_(inst_16027))
{var statearr_16052_16077 = state_16041__$1;(statearr_16052_16077[1] = 12);
} else
{var statearr_16053_16078 = state_16041__$1;(statearr_16053_16078[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 7))
{var inst_16037 = (state_16041[2]);var state_16041__$1 = state_16041;var statearr_16054_16079 = state_16041__$1;(statearr_16054_16079[2] = inst_16037);
(statearr_16054_16079[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 8))
{var inst_16005 = (state_16041[7]);var inst_16014 = (state_16041[10]);var tmp16051 = inst_16005;var inst_16005__$1 = tmp16051;var inst_16006 = inst_16014;var state_16041__$1 = (function (){var statearr_16055 = state_16041;(statearr_16055[7] = inst_16005__$1);
(statearr_16055[8] = inst_16006);
return statearr_16055;
})();var statearr_16056_16080 = state_16041__$1;(statearr_16056_16080[2] = null);
(statearr_16056_16080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 9))
{var inst_16005 = (state_16041[7]);var inst_16019 = cljs.core.vec.call(null,inst_16005);var state_16041__$1 = state_16041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16041__$1,11,out,inst_16019);
} else
{if((state_val_16042 === 10))
{var inst_16025 = (state_16041[2]);var state_16041__$1 = state_16041;var statearr_16057_16081 = state_16041__$1;(statearr_16057_16081[2] = inst_16025);
(statearr_16057_16081[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 11))
{var inst_16021 = (state_16041[2]);var inst_16022 = (new Array(n));var inst_16005 = inst_16022;var inst_16006 = 0;var state_16041__$1 = (function (){var statearr_16058 = state_16041;(statearr_16058[12] = inst_16021);
(statearr_16058[7] = inst_16005);
(statearr_16058[8] = inst_16006);
return statearr_16058;
})();var statearr_16059_16082 = state_16041__$1;(statearr_16059_16082[2] = null);
(statearr_16059_16082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 12))
{var inst_16005 = (state_16041[7]);var inst_16029 = cljs.core.vec.call(null,inst_16005);var state_16041__$1 = state_16041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16041__$1,15,out,inst_16029);
} else
{if((state_val_16042 === 13))
{var state_16041__$1 = state_16041;var statearr_16060_16083 = state_16041__$1;(statearr_16060_16083[2] = null);
(statearr_16060_16083[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 14))
{var inst_16034 = (state_16041[2]);var inst_16035 = cljs.core.async.close_BANG_.call(null,out);var state_16041__$1 = (function (){var statearr_16061 = state_16041;(statearr_16061[13] = inst_16034);
return statearr_16061;
})();var statearr_16062_16084 = state_16041__$1;(statearr_16062_16084[2] = inst_16035);
(statearr_16062_16084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16042 === 15))
{var inst_16031 = (state_16041[2]);var state_16041__$1 = state_16041;var statearr_16063_16085 = state_16041__$1;(statearr_16063_16085[2] = inst_16031);
(statearr_16063_16085[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16067[0] = state_machine__5507__auto__);
(statearr_16067[1] = 1);
return statearr_16067;
});
var state_machine__5507__auto____1 = (function (state_16041){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16068){if((e16068 instanceof Object))
{var ex__5510__auto__ = e16068;var statearr_16069_16086 = state_16041;(statearr_16069_16086[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16087 = state_16041;
state_16041 = G__16087;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16041){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16070 = f__5522__auto__.call(null);(statearr_16070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16071);
return statearr_16070;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16230 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16200){var state_val_16201 = (state_16200[1]);if((state_val_16201 === 1))
{var inst_16159 = [];var inst_16160 = inst_16159;var inst_16161 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16200__$1 = (function (){var statearr_16202 = state_16200;(statearr_16202[7] = inst_16160);
(statearr_16202[8] = inst_16161);
return statearr_16202;
})();var statearr_16203_16231 = state_16200__$1;(statearr_16203_16231[2] = null);
(statearr_16203_16231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 2))
{var state_16200__$1 = state_16200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16200__$1,4,ch);
} else
{if((state_val_16201 === 3))
{var inst_16198 = (state_16200[2]);var state_16200__$1 = state_16200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16200__$1,inst_16198);
} else
{if((state_val_16201 === 4))
{var inst_16164 = (state_16200[9]);var inst_16164__$1 = (state_16200[2]);var inst_16165 = (inst_16164__$1 == null);var inst_16166 = cljs.core.not.call(null,inst_16165);var state_16200__$1 = (function (){var statearr_16204 = state_16200;(statearr_16204[9] = inst_16164__$1);
return statearr_16204;
})();if(inst_16166)
{var statearr_16205_16232 = state_16200__$1;(statearr_16205_16232[1] = 5);
} else
{var statearr_16206_16233 = state_16200__$1;(statearr_16206_16233[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 5))
{var inst_16161 = (state_16200[8]);var inst_16168 = (state_16200[10]);var inst_16164 = (state_16200[9]);var inst_16168__$1 = f.call(null,inst_16164);var inst_16169 = cljs.core._EQ_.call(null,inst_16168__$1,inst_16161);var inst_16170 = cljs.core.keyword_identical_QMARK_.call(null,inst_16161,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16171 = (inst_16169) || (inst_16170);var state_16200__$1 = (function (){var statearr_16207 = state_16200;(statearr_16207[10] = inst_16168__$1);
return statearr_16207;
})();if(cljs.core.truth_(inst_16171))
{var statearr_16208_16234 = state_16200__$1;(statearr_16208_16234[1] = 8);
} else
{var statearr_16209_16235 = state_16200__$1;(statearr_16209_16235[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 6))
{var inst_16160 = (state_16200[7]);var inst_16185 = inst_16160.length;var inst_16186 = (inst_16185 > 0);var state_16200__$1 = state_16200;if(cljs.core.truth_(inst_16186))
{var statearr_16211_16236 = state_16200__$1;(statearr_16211_16236[1] = 12);
} else
{var statearr_16212_16237 = state_16200__$1;(statearr_16212_16237[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 7))
{var inst_16196 = (state_16200[2]);var state_16200__$1 = state_16200;var statearr_16213_16238 = state_16200__$1;(statearr_16213_16238[2] = inst_16196);
(statearr_16213_16238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 8))
{var inst_16160 = (state_16200[7]);var inst_16168 = (state_16200[10]);var inst_16164 = (state_16200[9]);var inst_16173 = inst_16160.push(inst_16164);var tmp16210 = inst_16160;var inst_16160__$1 = tmp16210;var inst_16161 = inst_16168;var state_16200__$1 = (function (){var statearr_16214 = state_16200;(statearr_16214[11] = inst_16173);
(statearr_16214[7] = inst_16160__$1);
(statearr_16214[8] = inst_16161);
return statearr_16214;
})();var statearr_16215_16239 = state_16200__$1;(statearr_16215_16239[2] = null);
(statearr_16215_16239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 9))
{var inst_16160 = (state_16200[7]);var inst_16176 = cljs.core.vec.call(null,inst_16160);var state_16200__$1 = state_16200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16200__$1,11,out,inst_16176);
} else
{if((state_val_16201 === 10))
{var inst_16183 = (state_16200[2]);var state_16200__$1 = state_16200;var statearr_16216_16240 = state_16200__$1;(statearr_16216_16240[2] = inst_16183);
(statearr_16216_16240[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 11))
{var inst_16168 = (state_16200[10]);var inst_16164 = (state_16200[9]);var inst_16178 = (state_16200[2]);var inst_16179 = [];var inst_16180 = inst_16179.push(inst_16164);var inst_16160 = inst_16179;var inst_16161 = inst_16168;var state_16200__$1 = (function (){var statearr_16217 = state_16200;(statearr_16217[7] = inst_16160);
(statearr_16217[8] = inst_16161);
(statearr_16217[12] = inst_16180);
(statearr_16217[13] = inst_16178);
return statearr_16217;
})();var statearr_16218_16241 = state_16200__$1;(statearr_16218_16241[2] = null);
(statearr_16218_16241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 12))
{var inst_16160 = (state_16200[7]);var inst_16188 = cljs.core.vec.call(null,inst_16160);var state_16200__$1 = state_16200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16200__$1,15,out,inst_16188);
} else
{if((state_val_16201 === 13))
{var state_16200__$1 = state_16200;var statearr_16219_16242 = state_16200__$1;(statearr_16219_16242[2] = null);
(statearr_16219_16242[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 14))
{var inst_16193 = (state_16200[2]);var inst_16194 = cljs.core.async.close_BANG_.call(null,out);var state_16200__$1 = (function (){var statearr_16220 = state_16200;(statearr_16220[14] = inst_16193);
return statearr_16220;
})();var statearr_16221_16243 = state_16200__$1;(statearr_16221_16243[2] = inst_16194);
(statearr_16221_16243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 15))
{var inst_16190 = (state_16200[2]);var state_16200__$1 = state_16200;var statearr_16222_16244 = state_16200__$1;(statearr_16222_16244[2] = inst_16190);
(statearr_16222_16244[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16226[0] = state_machine__5507__auto__);
(statearr_16226[1] = 1);
return statearr_16226;
});
var state_machine__5507__auto____1 = (function (state_16200){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16200);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16227){if((e16227 instanceof Object))
{var ex__5510__auto__ = e16227;var statearr_16228_16245 = state_16200;(statearr_16228_16245[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16246 = state_16200;
state_16200 = G__16246;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16200){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16229 = f__5522__auto__.call(null);(statearr_16229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16230);
return statearr_16229;
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