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
var opt_wrapper_38302 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38304 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38303,table_section_wrapper_38303,opt_wrapper_38302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38304,table_section_wrapper_38303,cell_wrapper_38304,opt_wrapper_38302,table_section_wrapper_38303,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38303]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38309 = cljs.core.seq.call(null,tbody);var chunk__38310 = null;var count__38311 = 0;var i__38312 = 0;while(true){
if((i__38312 < count__38311))
{var child = cljs.core._nth.call(null,chunk__38310,i__38312);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38313 = seq__38309;
var G__38314 = chunk__38310;
var G__38315 = count__38311;
var G__38316 = (i__38312 + 1);
seq__38309 = G__38313;
chunk__38310 = G__38314;
count__38311 = G__38315;
i__38312 = G__38316;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38309);if(temp__4092__auto__)
{var seq__38309__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38309__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38309__$1);{
var G__38317 = cljs.core.chunk_rest.call(null,seq__38309__$1);
var G__38318 = c__4148__auto__;
var G__38319 = cljs.core.count.call(null,c__4148__auto__);
var G__38320 = 0;
seq__38309 = G__38317;
chunk__38310 = G__38318;
count__38311 = G__38319;
i__38312 = G__38320;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38309__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38321 = cljs.core.next.call(null,seq__38309__$1);
var G__38322 = null;
var G__38323 = 0;
var G__38324 = 0;
seq__38309 = G__38321;
chunk__38310 = G__38322;
count__38311 = G__38323;
i__38312 = G__38324;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38326 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38326,0,null);var start_wrap = cljs.core.nth.call(null,vec__38326,1,null);var end_wrap = cljs.core.nth.call(null,vec__38326,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38327 = wrapper.lastChild;
var G__38328 = (level - 1);
wrapper = G__38327;
level = G__38328;
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
domina.DomContent = (function (){var obj38330 = {};return obj38330;
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
log_debug.cljs$lang$applyTo = (function (arglist__38331){
var mesg = cljs.core.seq(arglist__38331);
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
log.cljs$lang$applyTo = (function (arglist__38332){
var mesg = cljs.core.seq(arglist__38332);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38333){
var contents = cljs.core.seq(arglist__38333);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38334_SHARP_){return p1__38334_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38335_SHARP_,p2__38336_SHARP_){return goog.dom.insertChildAt(p1__38335_SHARP_,p2__38336_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38338_SHARP_,p2__38337_SHARP_){return goog.dom.insertSiblingBefore(p2__38337_SHARP_,p1__38338_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38340_SHARP_,p2__38339_SHARP_){return goog.dom.insertSiblingAfter(p2__38339_SHARP_,p1__38340_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38342_SHARP_,p2__38341_SHARP_){return goog.dom.replaceNode(p2__38341_SHARP_,p1__38342_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38347_38351 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38348_38352 = null;var count__38349_38353 = 0;var i__38350_38354 = 0;while(true){
if((i__38350_38354 < count__38349_38353))
{var n_38355 = cljs.core._nth.call(null,chunk__38348_38352,i__38350_38354);goog.style.setStyle(n_38355,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38356 = seq__38347_38351;
var G__38357 = chunk__38348_38352;
var G__38358 = count__38349_38353;
var G__38359 = (i__38350_38354 + 1);
seq__38347_38351 = G__38356;
chunk__38348_38352 = G__38357;
count__38349_38353 = G__38358;
i__38350_38354 = G__38359;
continue;
}
} else
{var temp__4092__auto___38360 = cljs.core.seq.call(null,seq__38347_38351);if(temp__4092__auto___38360)
{var seq__38347_38361__$1 = temp__4092__auto___38360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38347_38361__$1))
{var c__4148__auto___38362 = cljs.core.chunk_first.call(null,seq__38347_38361__$1);{
var G__38363 = cljs.core.chunk_rest.call(null,seq__38347_38361__$1);
var G__38364 = c__4148__auto___38362;
var G__38365 = cljs.core.count.call(null,c__4148__auto___38362);
var G__38366 = 0;
seq__38347_38351 = G__38363;
chunk__38348_38352 = G__38364;
count__38349_38353 = G__38365;
i__38350_38354 = G__38366;
continue;
}
} else
{var n_38367 = cljs.core.first.call(null,seq__38347_38361__$1);goog.style.setStyle(n_38367,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38368 = cljs.core.next.call(null,seq__38347_38361__$1);
var G__38369 = null;
var G__38370 = 0;
var G__38371 = 0;
seq__38347_38351 = G__38368;
chunk__38348_38352 = G__38369;
count__38349_38353 = G__38370;
i__38350_38354 = G__38371;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38372){
var content = cljs.core.first(arglist__38372);
arglist__38372 = cljs.core.next(arglist__38372);
var name = cljs.core.first(arglist__38372);
var value = cljs.core.rest(arglist__38372);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38377_38381 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38378_38382 = null;var count__38379_38383 = 0;var i__38380_38384 = 0;while(true){
if((i__38380_38384 < count__38379_38383))
{var n_38385 = cljs.core._nth.call(null,chunk__38378_38382,i__38380_38384);n_38385.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38386 = seq__38377_38381;
var G__38387 = chunk__38378_38382;
var G__38388 = count__38379_38383;
var G__38389 = (i__38380_38384 + 1);
seq__38377_38381 = G__38386;
chunk__38378_38382 = G__38387;
count__38379_38383 = G__38388;
i__38380_38384 = G__38389;
continue;
}
} else
{var temp__4092__auto___38390 = cljs.core.seq.call(null,seq__38377_38381);if(temp__4092__auto___38390)
{var seq__38377_38391__$1 = temp__4092__auto___38390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38377_38391__$1))
{var c__4148__auto___38392 = cljs.core.chunk_first.call(null,seq__38377_38391__$1);{
var G__38393 = cljs.core.chunk_rest.call(null,seq__38377_38391__$1);
var G__38394 = c__4148__auto___38392;
var G__38395 = cljs.core.count.call(null,c__4148__auto___38392);
var G__38396 = 0;
seq__38377_38381 = G__38393;
chunk__38378_38382 = G__38394;
count__38379_38383 = G__38395;
i__38380_38384 = G__38396;
continue;
}
} else
{var n_38397 = cljs.core.first.call(null,seq__38377_38391__$1);n_38397.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38398 = cljs.core.next.call(null,seq__38377_38391__$1);
var G__38399 = null;
var G__38400 = 0;
var G__38401 = 0;
seq__38377_38381 = G__38398;
chunk__38378_38382 = G__38399;
count__38379_38383 = G__38400;
i__38380_38384 = G__38401;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38402){
var content = cljs.core.first(arglist__38402);
arglist__38402 = cljs.core.next(arglist__38402);
var name = cljs.core.first(arglist__38402);
var value = cljs.core.rest(arglist__38402);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38407_38411 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38408_38412 = null;var count__38409_38413 = 0;var i__38410_38414 = 0;while(true){
if((i__38410_38414 < count__38409_38413))
{var n_38415 = cljs.core._nth.call(null,chunk__38408_38412,i__38410_38414);n_38415.removeAttribute(cljs.core.name.call(null,name));
{
var G__38416 = seq__38407_38411;
var G__38417 = chunk__38408_38412;
var G__38418 = count__38409_38413;
var G__38419 = (i__38410_38414 + 1);
seq__38407_38411 = G__38416;
chunk__38408_38412 = G__38417;
count__38409_38413 = G__38418;
i__38410_38414 = G__38419;
continue;
}
} else
{var temp__4092__auto___38420 = cljs.core.seq.call(null,seq__38407_38411);if(temp__4092__auto___38420)
{var seq__38407_38421__$1 = temp__4092__auto___38420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38407_38421__$1))
{var c__4148__auto___38422 = cljs.core.chunk_first.call(null,seq__38407_38421__$1);{
var G__38423 = cljs.core.chunk_rest.call(null,seq__38407_38421__$1);
var G__38424 = c__4148__auto___38422;
var G__38425 = cljs.core.count.call(null,c__4148__auto___38422);
var G__38426 = 0;
seq__38407_38411 = G__38423;
chunk__38408_38412 = G__38424;
count__38409_38413 = G__38425;
i__38410_38414 = G__38426;
continue;
}
} else
{var n_38427 = cljs.core.first.call(null,seq__38407_38421__$1);n_38427.removeAttribute(cljs.core.name.call(null,name));
{
var G__38428 = cljs.core.next.call(null,seq__38407_38421__$1);
var G__38429 = null;
var G__38430 = 0;
var G__38431 = 0;
seq__38407_38411 = G__38428;
chunk__38408_38412 = G__38429;
count__38409_38413 = G__38430;
i__38410_38414 = G__38431;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38433 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38433,0,null);var v = cljs.core.nth.call(null,vec__38433,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38434_SHARP_){var attr = attrs__$1.item(p1__38434_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38441_38447 = cljs.core.seq.call(null,styles);var chunk__38442_38448 = null;var count__38443_38449 = 0;var i__38444_38450 = 0;while(true){
if((i__38444_38450 < count__38443_38449))
{var vec__38445_38451 = cljs.core._nth.call(null,chunk__38442_38448,i__38444_38450);var name_38452 = cljs.core.nth.call(null,vec__38445_38451,0,null);var value_38453 = cljs.core.nth.call(null,vec__38445_38451,1,null);domina.set_style_BANG_.call(null,content,name_38452,value_38453);
{
var G__38454 = seq__38441_38447;
var G__38455 = chunk__38442_38448;
var G__38456 = count__38443_38449;
var G__38457 = (i__38444_38450 + 1);
seq__38441_38447 = G__38454;
chunk__38442_38448 = G__38455;
count__38443_38449 = G__38456;
i__38444_38450 = G__38457;
continue;
}
} else
{var temp__4092__auto___38458 = cljs.core.seq.call(null,seq__38441_38447);if(temp__4092__auto___38458)
{var seq__38441_38459__$1 = temp__4092__auto___38458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38441_38459__$1))
{var c__4148__auto___38460 = cljs.core.chunk_first.call(null,seq__38441_38459__$1);{
var G__38461 = cljs.core.chunk_rest.call(null,seq__38441_38459__$1);
var G__38462 = c__4148__auto___38460;
var G__38463 = cljs.core.count.call(null,c__4148__auto___38460);
var G__38464 = 0;
seq__38441_38447 = G__38461;
chunk__38442_38448 = G__38462;
count__38443_38449 = G__38463;
i__38444_38450 = G__38464;
continue;
}
} else
{var vec__38446_38465 = cljs.core.first.call(null,seq__38441_38459__$1);var name_38466 = cljs.core.nth.call(null,vec__38446_38465,0,null);var value_38467 = cljs.core.nth.call(null,vec__38446_38465,1,null);domina.set_style_BANG_.call(null,content,name_38466,value_38467);
{
var G__38468 = cljs.core.next.call(null,seq__38441_38459__$1);
var G__38469 = null;
var G__38470 = 0;
var G__38471 = 0;
seq__38441_38447 = G__38468;
chunk__38442_38448 = G__38469;
count__38443_38449 = G__38470;
i__38444_38450 = G__38471;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38478_38484 = cljs.core.seq.call(null,attrs);var chunk__38479_38485 = null;var count__38480_38486 = 0;var i__38481_38487 = 0;while(true){
if((i__38481_38487 < count__38480_38486))
{var vec__38482_38488 = cljs.core._nth.call(null,chunk__38479_38485,i__38481_38487);var name_38489 = cljs.core.nth.call(null,vec__38482_38488,0,null);var value_38490 = cljs.core.nth.call(null,vec__38482_38488,1,null);domina.set_attr_BANG_.call(null,content,name_38489,value_38490);
{
var G__38491 = seq__38478_38484;
var G__38492 = chunk__38479_38485;
var G__38493 = count__38480_38486;
var G__38494 = (i__38481_38487 + 1);
seq__38478_38484 = G__38491;
chunk__38479_38485 = G__38492;
count__38480_38486 = G__38493;
i__38481_38487 = G__38494;
continue;
}
} else
{var temp__4092__auto___38495 = cljs.core.seq.call(null,seq__38478_38484);if(temp__4092__auto___38495)
{var seq__38478_38496__$1 = temp__4092__auto___38495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38478_38496__$1))
{var c__4148__auto___38497 = cljs.core.chunk_first.call(null,seq__38478_38496__$1);{
var G__38498 = cljs.core.chunk_rest.call(null,seq__38478_38496__$1);
var G__38499 = c__4148__auto___38497;
var G__38500 = cljs.core.count.call(null,c__4148__auto___38497);
var G__38501 = 0;
seq__38478_38484 = G__38498;
chunk__38479_38485 = G__38499;
count__38480_38486 = G__38500;
i__38481_38487 = G__38501;
continue;
}
} else
{var vec__38483_38502 = cljs.core.first.call(null,seq__38478_38496__$1);var name_38503 = cljs.core.nth.call(null,vec__38483_38502,0,null);var value_38504 = cljs.core.nth.call(null,vec__38483_38502,1,null);domina.set_attr_BANG_.call(null,content,name_38503,value_38504);
{
var G__38505 = cljs.core.next.call(null,seq__38478_38496__$1);
var G__38506 = null;
var G__38507 = 0;
var G__38508 = 0;
seq__38478_38484 = G__38505;
chunk__38479_38485 = G__38506;
count__38480_38486 = G__38507;
i__38481_38487 = G__38508;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38513_38517 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38514_38518 = null;var count__38515_38519 = 0;var i__38516_38520 = 0;while(true){
if((i__38516_38520 < count__38515_38519))
{var node_38521 = cljs.core._nth.call(null,chunk__38514_38518,i__38516_38520);goog.dom.classes.add(node_38521,class$);
{
var G__38522 = seq__38513_38517;
var G__38523 = chunk__38514_38518;
var G__38524 = count__38515_38519;
var G__38525 = (i__38516_38520 + 1);
seq__38513_38517 = G__38522;
chunk__38514_38518 = G__38523;
count__38515_38519 = G__38524;
i__38516_38520 = G__38525;
continue;
}
} else
{var temp__4092__auto___38526 = cljs.core.seq.call(null,seq__38513_38517);if(temp__4092__auto___38526)
{var seq__38513_38527__$1 = temp__4092__auto___38526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38513_38527__$1))
{var c__4148__auto___38528 = cljs.core.chunk_first.call(null,seq__38513_38527__$1);{
var G__38529 = cljs.core.chunk_rest.call(null,seq__38513_38527__$1);
var G__38530 = c__4148__auto___38528;
var G__38531 = cljs.core.count.call(null,c__4148__auto___38528);
var G__38532 = 0;
seq__38513_38517 = G__38529;
chunk__38514_38518 = G__38530;
count__38515_38519 = G__38531;
i__38516_38520 = G__38532;
continue;
}
} else
{var node_38533 = cljs.core.first.call(null,seq__38513_38527__$1);goog.dom.classes.add(node_38533,class$);
{
var G__38534 = cljs.core.next.call(null,seq__38513_38527__$1);
var G__38535 = null;
var G__38536 = 0;
var G__38537 = 0;
seq__38513_38517 = G__38534;
chunk__38514_38518 = G__38535;
count__38515_38519 = G__38536;
i__38516_38520 = G__38537;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38542_38546 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38543_38547 = null;var count__38544_38548 = 0;var i__38545_38549 = 0;while(true){
if((i__38545_38549 < count__38544_38548))
{var node_38550 = cljs.core._nth.call(null,chunk__38543_38547,i__38545_38549);goog.dom.classes.remove(node_38550,class$);
{
var G__38551 = seq__38542_38546;
var G__38552 = chunk__38543_38547;
var G__38553 = count__38544_38548;
var G__38554 = (i__38545_38549 + 1);
seq__38542_38546 = G__38551;
chunk__38543_38547 = G__38552;
count__38544_38548 = G__38553;
i__38545_38549 = G__38554;
continue;
}
} else
{var temp__4092__auto___38555 = cljs.core.seq.call(null,seq__38542_38546);if(temp__4092__auto___38555)
{var seq__38542_38556__$1 = temp__4092__auto___38555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38542_38556__$1))
{var c__4148__auto___38557 = cljs.core.chunk_first.call(null,seq__38542_38556__$1);{
var G__38558 = cljs.core.chunk_rest.call(null,seq__38542_38556__$1);
var G__38559 = c__4148__auto___38557;
var G__38560 = cljs.core.count.call(null,c__4148__auto___38557);
var G__38561 = 0;
seq__38542_38546 = G__38558;
chunk__38543_38547 = G__38559;
count__38544_38548 = G__38560;
i__38545_38549 = G__38561;
continue;
}
} else
{var node_38562 = cljs.core.first.call(null,seq__38542_38556__$1);goog.dom.classes.remove(node_38562,class$);
{
var G__38563 = cljs.core.next.call(null,seq__38542_38556__$1);
var G__38564 = null;
var G__38565 = 0;
var G__38566 = 0;
seq__38542_38546 = G__38563;
chunk__38543_38547 = G__38564;
count__38544_38548 = G__38565;
i__38545_38549 = G__38566;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38571_38575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38572_38576 = null;var count__38573_38577 = 0;var i__38574_38578 = 0;while(true){
if((i__38574_38578 < count__38573_38577))
{var node_38579 = cljs.core._nth.call(null,chunk__38572_38576,i__38574_38578);goog.dom.classes.toggle(node_38579,class$);
{
var G__38580 = seq__38571_38575;
var G__38581 = chunk__38572_38576;
var G__38582 = count__38573_38577;
var G__38583 = (i__38574_38578 + 1);
seq__38571_38575 = G__38580;
chunk__38572_38576 = G__38581;
count__38573_38577 = G__38582;
i__38574_38578 = G__38583;
continue;
}
} else
{var temp__4092__auto___38584 = cljs.core.seq.call(null,seq__38571_38575);if(temp__4092__auto___38584)
{var seq__38571_38585__$1 = temp__4092__auto___38584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38571_38585__$1))
{var c__4148__auto___38586 = cljs.core.chunk_first.call(null,seq__38571_38585__$1);{
var G__38587 = cljs.core.chunk_rest.call(null,seq__38571_38585__$1);
var G__38588 = c__4148__auto___38586;
var G__38589 = cljs.core.count.call(null,c__4148__auto___38586);
var G__38590 = 0;
seq__38571_38575 = G__38587;
chunk__38572_38576 = G__38588;
count__38573_38577 = G__38589;
i__38574_38578 = G__38590;
continue;
}
} else
{var node_38591 = cljs.core.first.call(null,seq__38571_38585__$1);goog.dom.classes.toggle(node_38591,class$);
{
var G__38592 = cljs.core.next.call(null,seq__38571_38585__$1);
var G__38593 = null;
var G__38594 = 0;
var G__38595 = 0;
seq__38571_38575 = G__38592;
chunk__38572_38576 = G__38593;
count__38573_38577 = G__38594;
i__38574_38578 = G__38595;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38604__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38600_38605 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38601_38606 = null;var count__38602_38607 = 0;var i__38603_38608 = 0;while(true){
if((i__38603_38608 < count__38602_38607))
{var node_38609 = cljs.core._nth.call(null,chunk__38601_38606,i__38603_38608);goog.dom.classes.set(node_38609,classes_38604__$1);
{
var G__38610 = seq__38600_38605;
var G__38611 = chunk__38601_38606;
var G__38612 = count__38602_38607;
var G__38613 = (i__38603_38608 + 1);
seq__38600_38605 = G__38610;
chunk__38601_38606 = G__38611;
count__38602_38607 = G__38612;
i__38603_38608 = G__38613;
continue;
}
} else
{var temp__4092__auto___38614 = cljs.core.seq.call(null,seq__38600_38605);if(temp__4092__auto___38614)
{var seq__38600_38615__$1 = temp__4092__auto___38614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38600_38615__$1))
{var c__4148__auto___38616 = cljs.core.chunk_first.call(null,seq__38600_38615__$1);{
var G__38617 = cljs.core.chunk_rest.call(null,seq__38600_38615__$1);
var G__38618 = c__4148__auto___38616;
var G__38619 = cljs.core.count.call(null,c__4148__auto___38616);
var G__38620 = 0;
seq__38600_38605 = G__38617;
chunk__38601_38606 = G__38618;
count__38602_38607 = G__38619;
i__38603_38608 = G__38620;
continue;
}
} else
{var node_38621 = cljs.core.first.call(null,seq__38600_38615__$1);goog.dom.classes.set(node_38621,classes_38604__$1);
{
var G__38622 = cljs.core.next.call(null,seq__38600_38615__$1);
var G__38623 = null;
var G__38624 = 0;
var G__38625 = 0;
seq__38600_38605 = G__38622;
chunk__38601_38606 = G__38623;
count__38602_38607 = G__38624;
i__38603_38608 = G__38625;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38630_38634 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38631_38635 = null;var count__38632_38636 = 0;var i__38633_38637 = 0;while(true){
if((i__38633_38637 < count__38632_38636))
{var node_38638 = cljs.core._nth.call(null,chunk__38631_38635,i__38633_38637);goog.dom.setTextContent(node_38638,value);
{
var G__38639 = seq__38630_38634;
var G__38640 = chunk__38631_38635;
var G__38641 = count__38632_38636;
var G__38642 = (i__38633_38637 + 1);
seq__38630_38634 = G__38639;
chunk__38631_38635 = G__38640;
count__38632_38636 = G__38641;
i__38633_38637 = G__38642;
continue;
}
} else
{var temp__4092__auto___38643 = cljs.core.seq.call(null,seq__38630_38634);if(temp__4092__auto___38643)
{var seq__38630_38644__$1 = temp__4092__auto___38643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38630_38644__$1))
{var c__4148__auto___38645 = cljs.core.chunk_first.call(null,seq__38630_38644__$1);{
var G__38646 = cljs.core.chunk_rest.call(null,seq__38630_38644__$1);
var G__38647 = c__4148__auto___38645;
var G__38648 = cljs.core.count.call(null,c__4148__auto___38645);
var G__38649 = 0;
seq__38630_38634 = G__38646;
chunk__38631_38635 = G__38647;
count__38632_38636 = G__38648;
i__38633_38637 = G__38649;
continue;
}
} else
{var node_38650 = cljs.core.first.call(null,seq__38630_38644__$1);goog.dom.setTextContent(node_38650,value);
{
var G__38651 = cljs.core.next.call(null,seq__38630_38644__$1);
var G__38652 = null;
var G__38653 = 0;
var G__38654 = 0;
seq__38630_38634 = G__38651;
chunk__38631_38635 = G__38652;
count__38632_38636 = G__38653;
i__38633_38637 = G__38654;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38659_38663 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38660_38664 = null;var count__38661_38665 = 0;var i__38662_38666 = 0;while(true){
if((i__38662_38666 < count__38661_38665))
{var node_38667 = cljs.core._nth.call(null,chunk__38660_38664,i__38662_38666);goog.dom.forms.setValue(node_38667,value);
{
var G__38668 = seq__38659_38663;
var G__38669 = chunk__38660_38664;
var G__38670 = count__38661_38665;
var G__38671 = (i__38662_38666 + 1);
seq__38659_38663 = G__38668;
chunk__38660_38664 = G__38669;
count__38661_38665 = G__38670;
i__38662_38666 = G__38671;
continue;
}
} else
{var temp__4092__auto___38672 = cljs.core.seq.call(null,seq__38659_38663);if(temp__4092__auto___38672)
{var seq__38659_38673__$1 = temp__4092__auto___38672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38659_38673__$1))
{var c__4148__auto___38674 = cljs.core.chunk_first.call(null,seq__38659_38673__$1);{
var G__38675 = cljs.core.chunk_rest.call(null,seq__38659_38673__$1);
var G__38676 = c__4148__auto___38674;
var G__38677 = cljs.core.count.call(null,c__4148__auto___38674);
var G__38678 = 0;
seq__38659_38663 = G__38675;
chunk__38660_38664 = G__38676;
count__38661_38665 = G__38677;
i__38662_38666 = G__38678;
continue;
}
} else
{var node_38679 = cljs.core.first.call(null,seq__38659_38673__$1);goog.dom.forms.setValue(node_38679,value);
{
var G__38680 = cljs.core.next.call(null,seq__38659_38673__$1);
var G__38681 = null;
var G__38682 = 0;
var G__38683 = 0;
seq__38659_38663 = G__38680;
chunk__38660_38664 = G__38681;
count__38661_38665 = G__38682;
i__38662_38666 = G__38683;
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
{var value_38694 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38690_38695 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38691_38696 = null;var count__38692_38697 = 0;var i__38693_38698 = 0;while(true){
if((i__38693_38698 < count__38692_38697))
{var node_38699 = cljs.core._nth.call(null,chunk__38691_38696,i__38693_38698);node_38699.innerHTML = value_38694;
{
var G__38700 = seq__38690_38695;
var G__38701 = chunk__38691_38696;
var G__38702 = count__38692_38697;
var G__38703 = (i__38693_38698 + 1);
seq__38690_38695 = G__38700;
chunk__38691_38696 = G__38701;
count__38692_38697 = G__38702;
i__38693_38698 = G__38703;
continue;
}
} else
{var temp__4092__auto___38704 = cljs.core.seq.call(null,seq__38690_38695);if(temp__4092__auto___38704)
{var seq__38690_38705__$1 = temp__4092__auto___38704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38690_38705__$1))
{var c__4148__auto___38706 = cljs.core.chunk_first.call(null,seq__38690_38705__$1);{
var G__38707 = cljs.core.chunk_rest.call(null,seq__38690_38705__$1);
var G__38708 = c__4148__auto___38706;
var G__38709 = cljs.core.count.call(null,c__4148__auto___38706);
var G__38710 = 0;
seq__38690_38695 = G__38707;
chunk__38691_38696 = G__38708;
count__38692_38697 = G__38709;
i__38693_38698 = G__38710;
continue;
}
} else
{var node_38711 = cljs.core.first.call(null,seq__38690_38705__$1);node_38711.innerHTML = value_38694;
{
var G__38712 = cljs.core.next.call(null,seq__38690_38705__$1);
var G__38713 = null;
var G__38714 = 0;
var G__38715 = 0;
seq__38690_38695 = G__38712;
chunk__38691_38696 = G__38713;
count__38692_38697 = G__38714;
i__38693_38698 = G__38715;
continue;
}
}
} else
{}
}
break;
}
}catch (e38689){if((e38689 instanceof Error))
{var e_38716 = e38689;domina.replace_children_BANG_.call(null,content,value_38694);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38689;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38723_38727 = cljs.core.seq.call(null,children);var chunk__38724_38728 = null;var count__38725_38729 = 0;var i__38726_38730 = 0;while(true){
if((i__38726_38730 < count__38725_38729))
{var child_38731 = cljs.core._nth.call(null,chunk__38724_38728,i__38726_38730);frag.appendChild(child_38731);
{
var G__38732 = seq__38723_38727;
var G__38733 = chunk__38724_38728;
var G__38734 = count__38725_38729;
var G__38735 = (i__38726_38730 + 1);
seq__38723_38727 = G__38732;
chunk__38724_38728 = G__38733;
count__38725_38729 = G__38734;
i__38726_38730 = G__38735;
continue;
}
} else
{var temp__4092__auto___38736 = cljs.core.seq.call(null,seq__38723_38727);if(temp__4092__auto___38736)
{var seq__38723_38737__$1 = temp__4092__auto___38736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38723_38737__$1))
{var c__4148__auto___38738 = cljs.core.chunk_first.call(null,seq__38723_38737__$1);{
var G__38739 = cljs.core.chunk_rest.call(null,seq__38723_38737__$1);
var G__38740 = c__4148__auto___38738;
var G__38741 = cljs.core.count.call(null,c__4148__auto___38738);
var G__38742 = 0;
seq__38723_38727 = G__38739;
chunk__38724_38728 = G__38740;
count__38725_38729 = G__38741;
i__38726_38730 = G__38742;
continue;
}
} else
{var child_38743 = cljs.core.first.call(null,seq__38723_38737__$1);frag.appendChild(child_38743);
{
var G__38744 = cljs.core.next.call(null,seq__38723_38737__$1);
var G__38745 = null;
var G__38746 = 0;
var G__38747 = 0;
seq__38723_38727 = G__38744;
chunk__38724_38728 = G__38745;
count__38725_38729 = G__38746;
i__38726_38730 = G__38747;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38717_SHARP_,p2__38718_SHARP_){return f.call(null,p1__38717_SHARP_,p2__38718_SHARP_);
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
{if((function (){var G__38749 = list_thing;if(G__38749)
{var bit__4050__auto__ = (G__38749.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38749.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38749.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38749);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38749);
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
{if((function (){var G__38750 = content;if(G__38750)
{var bit__4050__auto__ = (G__38750.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38750.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38750.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38750);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38750);
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
{if((function (){var G__38751 = content;if(G__38751)
{var bit__4050__auto__ = (G__38751.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38751.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38751.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38751);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38751);
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
