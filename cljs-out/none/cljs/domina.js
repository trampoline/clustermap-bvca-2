// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_16304 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16305 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16306 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16305,table_section_wrapper_16305,opt_wrapper_16304,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16306,table_section_wrapper_16305,cell_wrapper_16306,opt_wrapper_16304,table_section_wrapper_16305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16305]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16311 = cljs.core.seq.call(null,tbody);var chunk__16312 = null;var count__16313 = 0;var i__16314 = 0;while(true){
if((i__16314 < count__16313))
{var child = cljs.core._nth.call(null,chunk__16312,i__16314);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16315 = seq__16311;
var G__16316 = chunk__16312;
var G__16317 = count__16313;
var G__16318 = (i__16314 + 1);
seq__16311 = G__16315;
chunk__16312 = G__16316;
count__16313 = G__16317;
i__16314 = G__16318;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16311);if(temp__4092__auto__)
{var seq__16311__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16311__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16311__$1);{
var G__16319 = cljs.core.chunk_rest.call(null,seq__16311__$1);
var G__16320 = c__4148__auto__;
var G__16321 = cljs.core.count.call(null,c__4148__auto__);
var G__16322 = 0;
seq__16311 = G__16319;
chunk__16312 = G__16320;
count__16313 = G__16321;
i__16314 = G__16322;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16311__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16323 = cljs.core.next.call(null,seq__16311__$1);
var G__16324 = null;
var G__16325 = 0;
var G__16326 = 0;
seq__16311 = G__16323;
chunk__16312 = G__16324;
count__16313 = G__16325;
i__16314 = G__16326;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16328 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16328,0,null);var start_wrap = cljs.core.nth.call(null,vec__16328,1,null);var end_wrap = cljs.core.nth.call(null,vec__16328,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16329 = wrapper.lastChild;
var G__16330 = (level - 1);
wrapper = G__16329;
level = G__16330;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj16332 = {};return obj16332;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__16333){
var mesg = cljs.core.seq(arglist__16333);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__16334){
var mesg = cljs.core.seq(arglist__16334);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__16335){
var contents = cljs.core.seq(arglist__16335);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16336_SHARP_){return p1__16336_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16337_SHARP_,p2__16338_SHARP_){return goog.dom.insertChildAt(p1__16337_SHARP_,p2__16338_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16340_SHARP_,p2__16339_SHARP_){return goog.dom.insertSiblingBefore(p2__16339_SHARP_,p1__16340_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16342_SHARP_,p2__16341_SHARP_){return goog.dom.insertSiblingAfter(p2__16341_SHARP_,p1__16342_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16344_SHARP_,p2__16343_SHARP_){return goog.dom.replaceNode(p2__16343_SHARP_,p1__16344_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__16349_16353 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16350_16354 = null;var count__16351_16355 = 0;var i__16352_16356 = 0;while(true){
if((i__16352_16356 < count__16351_16355))
{var n_16357 = cljs.core._nth.call(null,chunk__16350_16354,i__16352_16356);goog.style.setStyle(n_16357,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16358 = seq__16349_16353;
var G__16359 = chunk__16350_16354;
var G__16360 = count__16351_16355;
var G__16361 = (i__16352_16356 + 1);
seq__16349_16353 = G__16358;
chunk__16350_16354 = G__16359;
count__16351_16355 = G__16360;
i__16352_16356 = G__16361;
continue;
}
} else
{var temp__4092__auto___16362 = cljs.core.seq.call(null,seq__16349_16353);if(temp__4092__auto___16362)
{var seq__16349_16363__$1 = temp__4092__auto___16362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16349_16363__$1))
{var c__4148__auto___16364 = cljs.core.chunk_first.call(null,seq__16349_16363__$1);{
var G__16365 = cljs.core.chunk_rest.call(null,seq__16349_16363__$1);
var G__16366 = c__4148__auto___16364;
var G__16367 = cljs.core.count.call(null,c__4148__auto___16364);
var G__16368 = 0;
seq__16349_16353 = G__16365;
chunk__16350_16354 = G__16366;
count__16351_16355 = G__16367;
i__16352_16356 = G__16368;
continue;
}
} else
{var n_16369 = cljs.core.first.call(null,seq__16349_16363__$1);goog.style.setStyle(n_16369,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16370 = cljs.core.next.call(null,seq__16349_16363__$1);
var G__16371 = null;
var G__16372 = 0;
var G__16373 = 0;
seq__16349_16353 = G__16370;
chunk__16350_16354 = G__16371;
count__16351_16355 = G__16372;
i__16352_16356 = G__16373;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16374){
var content = cljs.core.first(arglist__16374);
arglist__16374 = cljs.core.next(arglist__16374);
var name = cljs.core.first(arglist__16374);
var value = cljs.core.rest(arglist__16374);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__16379_16383 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16380_16384 = null;var count__16381_16385 = 0;var i__16382_16386 = 0;while(true){
if((i__16382_16386 < count__16381_16385))
{var n_16387 = cljs.core._nth.call(null,chunk__16380_16384,i__16382_16386);n_16387.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16388 = seq__16379_16383;
var G__16389 = chunk__16380_16384;
var G__16390 = count__16381_16385;
var G__16391 = (i__16382_16386 + 1);
seq__16379_16383 = G__16388;
chunk__16380_16384 = G__16389;
count__16381_16385 = G__16390;
i__16382_16386 = G__16391;
continue;
}
} else
{var temp__4092__auto___16392 = cljs.core.seq.call(null,seq__16379_16383);if(temp__4092__auto___16392)
{var seq__16379_16393__$1 = temp__4092__auto___16392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16379_16393__$1))
{var c__4148__auto___16394 = cljs.core.chunk_first.call(null,seq__16379_16393__$1);{
var G__16395 = cljs.core.chunk_rest.call(null,seq__16379_16393__$1);
var G__16396 = c__4148__auto___16394;
var G__16397 = cljs.core.count.call(null,c__4148__auto___16394);
var G__16398 = 0;
seq__16379_16383 = G__16395;
chunk__16380_16384 = G__16396;
count__16381_16385 = G__16397;
i__16382_16386 = G__16398;
continue;
}
} else
{var n_16399 = cljs.core.first.call(null,seq__16379_16393__$1);n_16399.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16400 = cljs.core.next.call(null,seq__16379_16393__$1);
var G__16401 = null;
var G__16402 = 0;
var G__16403 = 0;
seq__16379_16383 = G__16400;
chunk__16380_16384 = G__16401;
count__16381_16385 = G__16402;
i__16382_16386 = G__16403;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16404){
var content = cljs.core.first(arglist__16404);
arglist__16404 = cljs.core.next(arglist__16404);
var name = cljs.core.first(arglist__16404);
var value = cljs.core.rest(arglist__16404);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16409_16413 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16410_16414 = null;var count__16411_16415 = 0;var i__16412_16416 = 0;while(true){
if((i__16412_16416 < count__16411_16415))
{var n_16417 = cljs.core._nth.call(null,chunk__16410_16414,i__16412_16416);n_16417.removeAttribute(cljs.core.name.call(null,name));
{
var G__16418 = seq__16409_16413;
var G__16419 = chunk__16410_16414;
var G__16420 = count__16411_16415;
var G__16421 = (i__16412_16416 + 1);
seq__16409_16413 = G__16418;
chunk__16410_16414 = G__16419;
count__16411_16415 = G__16420;
i__16412_16416 = G__16421;
continue;
}
} else
{var temp__4092__auto___16422 = cljs.core.seq.call(null,seq__16409_16413);if(temp__4092__auto___16422)
{var seq__16409_16423__$1 = temp__4092__auto___16422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16409_16423__$1))
{var c__4148__auto___16424 = cljs.core.chunk_first.call(null,seq__16409_16423__$1);{
var G__16425 = cljs.core.chunk_rest.call(null,seq__16409_16423__$1);
var G__16426 = c__4148__auto___16424;
var G__16427 = cljs.core.count.call(null,c__4148__auto___16424);
var G__16428 = 0;
seq__16409_16413 = G__16425;
chunk__16410_16414 = G__16426;
count__16411_16415 = G__16427;
i__16412_16416 = G__16428;
continue;
}
} else
{var n_16429 = cljs.core.first.call(null,seq__16409_16423__$1);n_16429.removeAttribute(cljs.core.name.call(null,name));
{
var G__16430 = cljs.core.next.call(null,seq__16409_16423__$1);
var G__16431 = null;
var G__16432 = 0;
var G__16433 = 0;
seq__16409_16413 = G__16430;
chunk__16410_16414 = G__16431;
count__16411_16415 = G__16432;
i__16412_16416 = G__16433;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16435 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16435,0,null);var v = cljs.core.nth.call(null,vec__16435,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16436_SHARP_){var attr = attrs__$1.item(p1__16436_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16443_16449 = cljs.core.seq.call(null,styles);var chunk__16444_16450 = null;var count__16445_16451 = 0;var i__16446_16452 = 0;while(true){
if((i__16446_16452 < count__16445_16451))
{var vec__16447_16453 = cljs.core._nth.call(null,chunk__16444_16450,i__16446_16452);var name_16454 = cljs.core.nth.call(null,vec__16447_16453,0,null);var value_16455 = cljs.core.nth.call(null,vec__16447_16453,1,null);domina.set_style_BANG_.call(null,content,name_16454,value_16455);
{
var G__16456 = seq__16443_16449;
var G__16457 = chunk__16444_16450;
var G__16458 = count__16445_16451;
var G__16459 = (i__16446_16452 + 1);
seq__16443_16449 = G__16456;
chunk__16444_16450 = G__16457;
count__16445_16451 = G__16458;
i__16446_16452 = G__16459;
continue;
}
} else
{var temp__4092__auto___16460 = cljs.core.seq.call(null,seq__16443_16449);if(temp__4092__auto___16460)
{var seq__16443_16461__$1 = temp__4092__auto___16460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16443_16461__$1))
{var c__4148__auto___16462 = cljs.core.chunk_first.call(null,seq__16443_16461__$1);{
var G__16463 = cljs.core.chunk_rest.call(null,seq__16443_16461__$1);
var G__16464 = c__4148__auto___16462;
var G__16465 = cljs.core.count.call(null,c__4148__auto___16462);
var G__16466 = 0;
seq__16443_16449 = G__16463;
chunk__16444_16450 = G__16464;
count__16445_16451 = G__16465;
i__16446_16452 = G__16466;
continue;
}
} else
{var vec__16448_16467 = cljs.core.first.call(null,seq__16443_16461__$1);var name_16468 = cljs.core.nth.call(null,vec__16448_16467,0,null);var value_16469 = cljs.core.nth.call(null,vec__16448_16467,1,null);domina.set_style_BANG_.call(null,content,name_16468,value_16469);
{
var G__16470 = cljs.core.next.call(null,seq__16443_16461__$1);
var G__16471 = null;
var G__16472 = 0;
var G__16473 = 0;
seq__16443_16449 = G__16470;
chunk__16444_16450 = G__16471;
count__16445_16451 = G__16472;
i__16446_16452 = G__16473;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16480_16486 = cljs.core.seq.call(null,attrs);var chunk__16481_16487 = null;var count__16482_16488 = 0;var i__16483_16489 = 0;while(true){
if((i__16483_16489 < count__16482_16488))
{var vec__16484_16490 = cljs.core._nth.call(null,chunk__16481_16487,i__16483_16489);var name_16491 = cljs.core.nth.call(null,vec__16484_16490,0,null);var value_16492 = cljs.core.nth.call(null,vec__16484_16490,1,null);domina.set_attr_BANG_.call(null,content,name_16491,value_16492);
{
var G__16493 = seq__16480_16486;
var G__16494 = chunk__16481_16487;
var G__16495 = count__16482_16488;
var G__16496 = (i__16483_16489 + 1);
seq__16480_16486 = G__16493;
chunk__16481_16487 = G__16494;
count__16482_16488 = G__16495;
i__16483_16489 = G__16496;
continue;
}
} else
{var temp__4092__auto___16497 = cljs.core.seq.call(null,seq__16480_16486);if(temp__4092__auto___16497)
{var seq__16480_16498__$1 = temp__4092__auto___16497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16480_16498__$1))
{var c__4148__auto___16499 = cljs.core.chunk_first.call(null,seq__16480_16498__$1);{
var G__16500 = cljs.core.chunk_rest.call(null,seq__16480_16498__$1);
var G__16501 = c__4148__auto___16499;
var G__16502 = cljs.core.count.call(null,c__4148__auto___16499);
var G__16503 = 0;
seq__16480_16486 = G__16500;
chunk__16481_16487 = G__16501;
count__16482_16488 = G__16502;
i__16483_16489 = G__16503;
continue;
}
} else
{var vec__16485_16504 = cljs.core.first.call(null,seq__16480_16498__$1);var name_16505 = cljs.core.nth.call(null,vec__16485_16504,0,null);var value_16506 = cljs.core.nth.call(null,vec__16485_16504,1,null);domina.set_attr_BANG_.call(null,content,name_16505,value_16506);
{
var G__16507 = cljs.core.next.call(null,seq__16480_16498__$1);
var G__16508 = null;
var G__16509 = 0;
var G__16510 = 0;
seq__16480_16486 = G__16507;
chunk__16481_16487 = G__16508;
count__16482_16488 = G__16509;
i__16483_16489 = G__16510;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16515_16519 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16516_16520 = null;var count__16517_16521 = 0;var i__16518_16522 = 0;while(true){
if((i__16518_16522 < count__16517_16521))
{var node_16523 = cljs.core._nth.call(null,chunk__16516_16520,i__16518_16522);goog.dom.classes.add(node_16523,class$);
{
var G__16524 = seq__16515_16519;
var G__16525 = chunk__16516_16520;
var G__16526 = count__16517_16521;
var G__16527 = (i__16518_16522 + 1);
seq__16515_16519 = G__16524;
chunk__16516_16520 = G__16525;
count__16517_16521 = G__16526;
i__16518_16522 = G__16527;
continue;
}
} else
{var temp__4092__auto___16528 = cljs.core.seq.call(null,seq__16515_16519);if(temp__4092__auto___16528)
{var seq__16515_16529__$1 = temp__4092__auto___16528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16515_16529__$1))
{var c__4148__auto___16530 = cljs.core.chunk_first.call(null,seq__16515_16529__$1);{
var G__16531 = cljs.core.chunk_rest.call(null,seq__16515_16529__$1);
var G__16532 = c__4148__auto___16530;
var G__16533 = cljs.core.count.call(null,c__4148__auto___16530);
var G__16534 = 0;
seq__16515_16519 = G__16531;
chunk__16516_16520 = G__16532;
count__16517_16521 = G__16533;
i__16518_16522 = G__16534;
continue;
}
} else
{var node_16535 = cljs.core.first.call(null,seq__16515_16529__$1);goog.dom.classes.add(node_16535,class$);
{
var G__16536 = cljs.core.next.call(null,seq__16515_16529__$1);
var G__16537 = null;
var G__16538 = 0;
var G__16539 = 0;
seq__16515_16519 = G__16536;
chunk__16516_16520 = G__16537;
count__16517_16521 = G__16538;
i__16518_16522 = G__16539;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16544_16548 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16545_16549 = null;var count__16546_16550 = 0;var i__16547_16551 = 0;while(true){
if((i__16547_16551 < count__16546_16550))
{var node_16552 = cljs.core._nth.call(null,chunk__16545_16549,i__16547_16551);goog.dom.classes.remove(node_16552,class$);
{
var G__16553 = seq__16544_16548;
var G__16554 = chunk__16545_16549;
var G__16555 = count__16546_16550;
var G__16556 = (i__16547_16551 + 1);
seq__16544_16548 = G__16553;
chunk__16545_16549 = G__16554;
count__16546_16550 = G__16555;
i__16547_16551 = G__16556;
continue;
}
} else
{var temp__4092__auto___16557 = cljs.core.seq.call(null,seq__16544_16548);if(temp__4092__auto___16557)
{var seq__16544_16558__$1 = temp__4092__auto___16557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16544_16558__$1))
{var c__4148__auto___16559 = cljs.core.chunk_first.call(null,seq__16544_16558__$1);{
var G__16560 = cljs.core.chunk_rest.call(null,seq__16544_16558__$1);
var G__16561 = c__4148__auto___16559;
var G__16562 = cljs.core.count.call(null,c__4148__auto___16559);
var G__16563 = 0;
seq__16544_16548 = G__16560;
chunk__16545_16549 = G__16561;
count__16546_16550 = G__16562;
i__16547_16551 = G__16563;
continue;
}
} else
{var node_16564 = cljs.core.first.call(null,seq__16544_16558__$1);goog.dom.classes.remove(node_16564,class$);
{
var G__16565 = cljs.core.next.call(null,seq__16544_16558__$1);
var G__16566 = null;
var G__16567 = 0;
var G__16568 = 0;
seq__16544_16548 = G__16565;
chunk__16545_16549 = G__16566;
count__16546_16550 = G__16567;
i__16547_16551 = G__16568;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16573_16577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16574_16578 = null;var count__16575_16579 = 0;var i__16576_16580 = 0;while(true){
if((i__16576_16580 < count__16575_16579))
{var node_16581 = cljs.core._nth.call(null,chunk__16574_16578,i__16576_16580);goog.dom.classes.toggle(node_16581,class$);
{
var G__16582 = seq__16573_16577;
var G__16583 = chunk__16574_16578;
var G__16584 = count__16575_16579;
var G__16585 = (i__16576_16580 + 1);
seq__16573_16577 = G__16582;
chunk__16574_16578 = G__16583;
count__16575_16579 = G__16584;
i__16576_16580 = G__16585;
continue;
}
} else
{var temp__4092__auto___16586 = cljs.core.seq.call(null,seq__16573_16577);if(temp__4092__auto___16586)
{var seq__16573_16587__$1 = temp__4092__auto___16586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16573_16587__$1))
{var c__4148__auto___16588 = cljs.core.chunk_first.call(null,seq__16573_16587__$1);{
var G__16589 = cljs.core.chunk_rest.call(null,seq__16573_16587__$1);
var G__16590 = c__4148__auto___16588;
var G__16591 = cljs.core.count.call(null,c__4148__auto___16588);
var G__16592 = 0;
seq__16573_16577 = G__16589;
chunk__16574_16578 = G__16590;
count__16575_16579 = G__16591;
i__16576_16580 = G__16592;
continue;
}
} else
{var node_16593 = cljs.core.first.call(null,seq__16573_16587__$1);goog.dom.classes.toggle(node_16593,class$);
{
var G__16594 = cljs.core.next.call(null,seq__16573_16587__$1);
var G__16595 = null;
var G__16596 = 0;
var G__16597 = 0;
seq__16573_16577 = G__16594;
chunk__16574_16578 = G__16595;
count__16575_16579 = G__16596;
i__16576_16580 = G__16597;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16606__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16602_16607 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16603_16608 = null;var count__16604_16609 = 0;var i__16605_16610 = 0;while(true){
if((i__16605_16610 < count__16604_16609))
{var node_16611 = cljs.core._nth.call(null,chunk__16603_16608,i__16605_16610);goog.dom.classes.set(node_16611,classes_16606__$1);
{
var G__16612 = seq__16602_16607;
var G__16613 = chunk__16603_16608;
var G__16614 = count__16604_16609;
var G__16615 = (i__16605_16610 + 1);
seq__16602_16607 = G__16612;
chunk__16603_16608 = G__16613;
count__16604_16609 = G__16614;
i__16605_16610 = G__16615;
continue;
}
} else
{var temp__4092__auto___16616 = cljs.core.seq.call(null,seq__16602_16607);if(temp__4092__auto___16616)
{var seq__16602_16617__$1 = temp__4092__auto___16616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16602_16617__$1))
{var c__4148__auto___16618 = cljs.core.chunk_first.call(null,seq__16602_16617__$1);{
var G__16619 = cljs.core.chunk_rest.call(null,seq__16602_16617__$1);
var G__16620 = c__4148__auto___16618;
var G__16621 = cljs.core.count.call(null,c__4148__auto___16618);
var G__16622 = 0;
seq__16602_16607 = G__16619;
chunk__16603_16608 = G__16620;
count__16604_16609 = G__16621;
i__16605_16610 = G__16622;
continue;
}
} else
{var node_16623 = cljs.core.first.call(null,seq__16602_16617__$1);goog.dom.classes.set(node_16623,classes_16606__$1);
{
var G__16624 = cljs.core.next.call(null,seq__16602_16617__$1);
var G__16625 = null;
var G__16626 = 0;
var G__16627 = 0;
seq__16602_16607 = G__16624;
chunk__16603_16608 = G__16625;
count__16604_16609 = G__16626;
i__16605_16610 = G__16627;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16632_16636 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16633_16637 = null;var count__16634_16638 = 0;var i__16635_16639 = 0;while(true){
if((i__16635_16639 < count__16634_16638))
{var node_16640 = cljs.core._nth.call(null,chunk__16633_16637,i__16635_16639);goog.dom.setTextContent(node_16640,value);
{
var G__16641 = seq__16632_16636;
var G__16642 = chunk__16633_16637;
var G__16643 = count__16634_16638;
var G__16644 = (i__16635_16639 + 1);
seq__16632_16636 = G__16641;
chunk__16633_16637 = G__16642;
count__16634_16638 = G__16643;
i__16635_16639 = G__16644;
continue;
}
} else
{var temp__4092__auto___16645 = cljs.core.seq.call(null,seq__16632_16636);if(temp__4092__auto___16645)
{var seq__16632_16646__$1 = temp__4092__auto___16645;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16632_16646__$1))
{var c__4148__auto___16647 = cljs.core.chunk_first.call(null,seq__16632_16646__$1);{
var G__16648 = cljs.core.chunk_rest.call(null,seq__16632_16646__$1);
var G__16649 = c__4148__auto___16647;
var G__16650 = cljs.core.count.call(null,c__4148__auto___16647);
var G__16651 = 0;
seq__16632_16636 = G__16648;
chunk__16633_16637 = G__16649;
count__16634_16638 = G__16650;
i__16635_16639 = G__16651;
continue;
}
} else
{var node_16652 = cljs.core.first.call(null,seq__16632_16646__$1);goog.dom.setTextContent(node_16652,value);
{
var G__16653 = cljs.core.next.call(null,seq__16632_16646__$1);
var G__16654 = null;
var G__16655 = 0;
var G__16656 = 0;
seq__16632_16636 = G__16653;
chunk__16633_16637 = G__16654;
count__16634_16638 = G__16655;
i__16635_16639 = G__16656;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16661_16665 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16662_16666 = null;var count__16663_16667 = 0;var i__16664_16668 = 0;while(true){
if((i__16664_16668 < count__16663_16667))
{var node_16669 = cljs.core._nth.call(null,chunk__16662_16666,i__16664_16668);goog.dom.forms.setValue(node_16669,value);
{
var G__16670 = seq__16661_16665;
var G__16671 = chunk__16662_16666;
var G__16672 = count__16663_16667;
var G__16673 = (i__16664_16668 + 1);
seq__16661_16665 = G__16670;
chunk__16662_16666 = G__16671;
count__16663_16667 = G__16672;
i__16664_16668 = G__16673;
continue;
}
} else
{var temp__4092__auto___16674 = cljs.core.seq.call(null,seq__16661_16665);if(temp__4092__auto___16674)
{var seq__16661_16675__$1 = temp__4092__auto___16674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16661_16675__$1))
{var c__4148__auto___16676 = cljs.core.chunk_first.call(null,seq__16661_16675__$1);{
var G__16677 = cljs.core.chunk_rest.call(null,seq__16661_16675__$1);
var G__16678 = c__4148__auto___16676;
var G__16679 = cljs.core.count.call(null,c__4148__auto___16676);
var G__16680 = 0;
seq__16661_16665 = G__16677;
chunk__16662_16666 = G__16678;
count__16663_16667 = G__16679;
i__16664_16668 = G__16680;
continue;
}
} else
{var node_16681 = cljs.core.first.call(null,seq__16661_16675__$1);goog.dom.forms.setValue(node_16681,value);
{
var G__16682 = cljs.core.next.call(null,seq__16661_16675__$1);
var G__16683 = null;
var G__16684 = 0;
var G__16685 = 0;
seq__16661_16665 = G__16682;
chunk__16662_16666 = G__16683;
count__16663_16667 = G__16684;
i__16664_16668 = G__16685;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_16696 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16692_16697 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16693_16698 = null;var count__16694_16699 = 0;var i__16695_16700 = 0;while(true){
if((i__16695_16700 < count__16694_16699))
{var node_16701 = cljs.core._nth.call(null,chunk__16693_16698,i__16695_16700);node_16701.innerHTML = value_16696;
{
var G__16702 = seq__16692_16697;
var G__16703 = chunk__16693_16698;
var G__16704 = count__16694_16699;
var G__16705 = (i__16695_16700 + 1);
seq__16692_16697 = G__16702;
chunk__16693_16698 = G__16703;
count__16694_16699 = G__16704;
i__16695_16700 = G__16705;
continue;
}
} else
{var temp__4092__auto___16706 = cljs.core.seq.call(null,seq__16692_16697);if(temp__4092__auto___16706)
{var seq__16692_16707__$1 = temp__4092__auto___16706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16692_16707__$1))
{var c__4148__auto___16708 = cljs.core.chunk_first.call(null,seq__16692_16707__$1);{
var G__16709 = cljs.core.chunk_rest.call(null,seq__16692_16707__$1);
var G__16710 = c__4148__auto___16708;
var G__16711 = cljs.core.count.call(null,c__4148__auto___16708);
var G__16712 = 0;
seq__16692_16697 = G__16709;
chunk__16693_16698 = G__16710;
count__16694_16699 = G__16711;
i__16695_16700 = G__16712;
continue;
}
} else
{var node_16713 = cljs.core.first.call(null,seq__16692_16707__$1);node_16713.innerHTML = value_16696;
{
var G__16714 = cljs.core.next.call(null,seq__16692_16707__$1);
var G__16715 = null;
var G__16716 = 0;
var G__16717 = 0;
seq__16692_16697 = G__16714;
chunk__16693_16698 = G__16715;
count__16694_16699 = G__16716;
i__16695_16700 = G__16717;
continue;
}
}
} else
{}
}
break;
}
}catch (e16691){if((e16691 instanceof Error))
{var e_16718 = e16691;domina.replace_children_BANG_.call(null,content,value_16696);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16691;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16725_16729 = cljs.core.seq.call(null,children);var chunk__16726_16730 = null;var count__16727_16731 = 0;var i__16728_16732 = 0;while(true){
if((i__16728_16732 < count__16727_16731))
{var child_16733 = cljs.core._nth.call(null,chunk__16726_16730,i__16728_16732);frag.appendChild(child_16733);
{
var G__16734 = seq__16725_16729;
var G__16735 = chunk__16726_16730;
var G__16736 = count__16727_16731;
var G__16737 = (i__16728_16732 + 1);
seq__16725_16729 = G__16734;
chunk__16726_16730 = G__16735;
count__16727_16731 = G__16736;
i__16728_16732 = G__16737;
continue;
}
} else
{var temp__4092__auto___16738 = cljs.core.seq.call(null,seq__16725_16729);if(temp__4092__auto___16738)
{var seq__16725_16739__$1 = temp__4092__auto___16738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16725_16739__$1))
{var c__4148__auto___16740 = cljs.core.chunk_first.call(null,seq__16725_16739__$1);{
var G__16741 = cljs.core.chunk_rest.call(null,seq__16725_16739__$1);
var G__16742 = c__4148__auto___16740;
var G__16743 = cljs.core.count.call(null,c__4148__auto___16740);
var G__16744 = 0;
seq__16725_16729 = G__16741;
chunk__16726_16730 = G__16742;
count__16727_16731 = G__16743;
i__16728_16732 = G__16744;
continue;
}
} else
{var child_16745 = cljs.core.first.call(null,seq__16725_16739__$1);frag.appendChild(child_16745);
{
var G__16746 = cljs.core.next.call(null,seq__16725_16739__$1);
var G__16747 = null;
var G__16748 = 0;
var G__16749 = 0;
seq__16725_16729 = G__16746;
chunk__16726_16730 = G__16747;
count__16727_16731 = G__16748;
i__16728_16732 = G__16749;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16719_SHARP_,p2__16720_SHARP_){return f.call(null,p1__16719_SHARP_,p2__16720_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__16751 = list_thing;if(G__16751)
{var bit__4050__auto__ = (G__16751.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16751.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16751.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16751);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16751);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__16752 = content;if(G__16752)
{var bit__4050__auto__ = (G__16752.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16752.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16752.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16752);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16752);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__16753 = content;if(G__16753)
{var bit__4050__auto__ = (G__16753.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16753.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16753.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16753);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16753);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map