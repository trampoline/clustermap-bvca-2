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
var opt_wrapper_16276 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16277 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16277,table_section_wrapper_16277,opt_wrapper_16276,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16278,table_section_wrapper_16277,cell_wrapper_16278,opt_wrapper_16276,table_section_wrapper_16277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16277]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16283 = cljs.core.seq.call(null,tbody);var chunk__16284 = null;var count__16285 = 0;var i__16286 = 0;while(true){
if((i__16286 < count__16285))
{var child = cljs.core._nth.call(null,chunk__16284,i__16286);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16287 = seq__16283;
var G__16288 = chunk__16284;
var G__16289 = count__16285;
var G__16290 = (i__16286 + 1);
seq__16283 = G__16287;
chunk__16284 = G__16288;
count__16285 = G__16289;
i__16286 = G__16290;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16283);if(temp__4092__auto__)
{var seq__16283__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16283__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16283__$1);{
var G__16291 = cljs.core.chunk_rest.call(null,seq__16283__$1);
var G__16292 = c__4148__auto__;
var G__16293 = cljs.core.count.call(null,c__4148__auto__);
var G__16294 = 0;
seq__16283 = G__16291;
chunk__16284 = G__16292;
count__16285 = G__16293;
i__16286 = G__16294;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16283__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16295 = cljs.core.next.call(null,seq__16283__$1);
var G__16296 = null;
var G__16297 = 0;
var G__16298 = 0;
seq__16283 = G__16295;
chunk__16284 = G__16296;
count__16285 = G__16297;
i__16286 = G__16298;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16300 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16300,0,null);var start_wrap = cljs.core.nth.call(null,vec__16300,1,null);var end_wrap = cljs.core.nth.call(null,vec__16300,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16301 = wrapper.lastChild;
var G__16302 = (level - 1);
wrapper = G__16301;
level = G__16302;
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
domina.DomContent = (function (){var obj16304 = {};return obj16304;
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
log_debug.cljs$lang$applyTo = (function (arglist__16305){
var mesg = cljs.core.seq(arglist__16305);
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
log.cljs$lang$applyTo = (function (arglist__16306){
var mesg = cljs.core.seq(arglist__16306);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16307){
var contents = cljs.core.seq(arglist__16307);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16308_SHARP_){return p1__16308_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16309_SHARP_,p2__16310_SHARP_){return goog.dom.insertChildAt(p1__16309_SHARP_,p2__16310_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16312_SHARP_,p2__16311_SHARP_){return goog.dom.insertSiblingBefore(p2__16311_SHARP_,p1__16312_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16314_SHARP_,p2__16313_SHARP_){return goog.dom.insertSiblingAfter(p2__16313_SHARP_,p1__16314_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16316_SHARP_,p2__16315_SHARP_){return goog.dom.replaceNode(p2__16315_SHARP_,p1__16316_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16321_16325 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16322_16326 = null;var count__16323_16327 = 0;var i__16324_16328 = 0;while(true){
if((i__16324_16328 < count__16323_16327))
{var n_16329 = cljs.core._nth.call(null,chunk__16322_16326,i__16324_16328);goog.style.setStyle(n_16329,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16330 = seq__16321_16325;
var G__16331 = chunk__16322_16326;
var G__16332 = count__16323_16327;
var G__16333 = (i__16324_16328 + 1);
seq__16321_16325 = G__16330;
chunk__16322_16326 = G__16331;
count__16323_16327 = G__16332;
i__16324_16328 = G__16333;
continue;
}
} else
{var temp__4092__auto___16334 = cljs.core.seq.call(null,seq__16321_16325);if(temp__4092__auto___16334)
{var seq__16321_16335__$1 = temp__4092__auto___16334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16321_16335__$1))
{var c__4148__auto___16336 = cljs.core.chunk_first.call(null,seq__16321_16335__$1);{
var G__16337 = cljs.core.chunk_rest.call(null,seq__16321_16335__$1);
var G__16338 = c__4148__auto___16336;
var G__16339 = cljs.core.count.call(null,c__4148__auto___16336);
var G__16340 = 0;
seq__16321_16325 = G__16337;
chunk__16322_16326 = G__16338;
count__16323_16327 = G__16339;
i__16324_16328 = G__16340;
continue;
}
} else
{var n_16341 = cljs.core.first.call(null,seq__16321_16335__$1);goog.style.setStyle(n_16341,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16342 = cljs.core.next.call(null,seq__16321_16335__$1);
var G__16343 = null;
var G__16344 = 0;
var G__16345 = 0;
seq__16321_16325 = G__16342;
chunk__16322_16326 = G__16343;
count__16323_16327 = G__16344;
i__16324_16328 = G__16345;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16346){
var content = cljs.core.first(arglist__16346);
arglist__16346 = cljs.core.next(arglist__16346);
var name = cljs.core.first(arglist__16346);
var value = cljs.core.rest(arglist__16346);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16351_16355 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16352_16356 = null;var count__16353_16357 = 0;var i__16354_16358 = 0;while(true){
if((i__16354_16358 < count__16353_16357))
{var n_16359 = cljs.core._nth.call(null,chunk__16352_16356,i__16354_16358);n_16359.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16360 = seq__16351_16355;
var G__16361 = chunk__16352_16356;
var G__16362 = count__16353_16357;
var G__16363 = (i__16354_16358 + 1);
seq__16351_16355 = G__16360;
chunk__16352_16356 = G__16361;
count__16353_16357 = G__16362;
i__16354_16358 = G__16363;
continue;
}
} else
{var temp__4092__auto___16364 = cljs.core.seq.call(null,seq__16351_16355);if(temp__4092__auto___16364)
{var seq__16351_16365__$1 = temp__4092__auto___16364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16351_16365__$1))
{var c__4148__auto___16366 = cljs.core.chunk_first.call(null,seq__16351_16365__$1);{
var G__16367 = cljs.core.chunk_rest.call(null,seq__16351_16365__$1);
var G__16368 = c__4148__auto___16366;
var G__16369 = cljs.core.count.call(null,c__4148__auto___16366);
var G__16370 = 0;
seq__16351_16355 = G__16367;
chunk__16352_16356 = G__16368;
count__16353_16357 = G__16369;
i__16354_16358 = G__16370;
continue;
}
} else
{var n_16371 = cljs.core.first.call(null,seq__16351_16365__$1);n_16371.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16372 = cljs.core.next.call(null,seq__16351_16365__$1);
var G__16373 = null;
var G__16374 = 0;
var G__16375 = 0;
seq__16351_16355 = G__16372;
chunk__16352_16356 = G__16373;
count__16353_16357 = G__16374;
i__16354_16358 = G__16375;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16376){
var content = cljs.core.first(arglist__16376);
arglist__16376 = cljs.core.next(arglist__16376);
var name = cljs.core.first(arglist__16376);
var value = cljs.core.rest(arglist__16376);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16381_16385 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16382_16386 = null;var count__16383_16387 = 0;var i__16384_16388 = 0;while(true){
if((i__16384_16388 < count__16383_16387))
{var n_16389 = cljs.core._nth.call(null,chunk__16382_16386,i__16384_16388);n_16389.removeAttribute(cljs.core.name.call(null,name));
{
var G__16390 = seq__16381_16385;
var G__16391 = chunk__16382_16386;
var G__16392 = count__16383_16387;
var G__16393 = (i__16384_16388 + 1);
seq__16381_16385 = G__16390;
chunk__16382_16386 = G__16391;
count__16383_16387 = G__16392;
i__16384_16388 = G__16393;
continue;
}
} else
{var temp__4092__auto___16394 = cljs.core.seq.call(null,seq__16381_16385);if(temp__4092__auto___16394)
{var seq__16381_16395__$1 = temp__4092__auto___16394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16381_16395__$1))
{var c__4148__auto___16396 = cljs.core.chunk_first.call(null,seq__16381_16395__$1);{
var G__16397 = cljs.core.chunk_rest.call(null,seq__16381_16395__$1);
var G__16398 = c__4148__auto___16396;
var G__16399 = cljs.core.count.call(null,c__4148__auto___16396);
var G__16400 = 0;
seq__16381_16385 = G__16397;
chunk__16382_16386 = G__16398;
count__16383_16387 = G__16399;
i__16384_16388 = G__16400;
continue;
}
} else
{var n_16401 = cljs.core.first.call(null,seq__16381_16395__$1);n_16401.removeAttribute(cljs.core.name.call(null,name));
{
var G__16402 = cljs.core.next.call(null,seq__16381_16395__$1);
var G__16403 = null;
var G__16404 = 0;
var G__16405 = 0;
seq__16381_16385 = G__16402;
chunk__16382_16386 = G__16403;
count__16383_16387 = G__16404;
i__16384_16388 = G__16405;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16407 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16407,0,null);var v = cljs.core.nth.call(null,vec__16407,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16408_SHARP_){var attr = attrs__$1.item(p1__16408_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16415_16421 = cljs.core.seq.call(null,styles);var chunk__16416_16422 = null;var count__16417_16423 = 0;var i__16418_16424 = 0;while(true){
if((i__16418_16424 < count__16417_16423))
{var vec__16419_16425 = cljs.core._nth.call(null,chunk__16416_16422,i__16418_16424);var name_16426 = cljs.core.nth.call(null,vec__16419_16425,0,null);var value_16427 = cljs.core.nth.call(null,vec__16419_16425,1,null);domina.set_style_BANG_.call(null,content,name_16426,value_16427);
{
var G__16428 = seq__16415_16421;
var G__16429 = chunk__16416_16422;
var G__16430 = count__16417_16423;
var G__16431 = (i__16418_16424 + 1);
seq__16415_16421 = G__16428;
chunk__16416_16422 = G__16429;
count__16417_16423 = G__16430;
i__16418_16424 = G__16431;
continue;
}
} else
{var temp__4092__auto___16432 = cljs.core.seq.call(null,seq__16415_16421);if(temp__4092__auto___16432)
{var seq__16415_16433__$1 = temp__4092__auto___16432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16415_16433__$1))
{var c__4148__auto___16434 = cljs.core.chunk_first.call(null,seq__16415_16433__$1);{
var G__16435 = cljs.core.chunk_rest.call(null,seq__16415_16433__$1);
var G__16436 = c__4148__auto___16434;
var G__16437 = cljs.core.count.call(null,c__4148__auto___16434);
var G__16438 = 0;
seq__16415_16421 = G__16435;
chunk__16416_16422 = G__16436;
count__16417_16423 = G__16437;
i__16418_16424 = G__16438;
continue;
}
} else
{var vec__16420_16439 = cljs.core.first.call(null,seq__16415_16433__$1);var name_16440 = cljs.core.nth.call(null,vec__16420_16439,0,null);var value_16441 = cljs.core.nth.call(null,vec__16420_16439,1,null);domina.set_style_BANG_.call(null,content,name_16440,value_16441);
{
var G__16442 = cljs.core.next.call(null,seq__16415_16433__$1);
var G__16443 = null;
var G__16444 = 0;
var G__16445 = 0;
seq__16415_16421 = G__16442;
chunk__16416_16422 = G__16443;
count__16417_16423 = G__16444;
i__16418_16424 = G__16445;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16452_16458 = cljs.core.seq.call(null,attrs);var chunk__16453_16459 = null;var count__16454_16460 = 0;var i__16455_16461 = 0;while(true){
if((i__16455_16461 < count__16454_16460))
{var vec__16456_16462 = cljs.core._nth.call(null,chunk__16453_16459,i__16455_16461);var name_16463 = cljs.core.nth.call(null,vec__16456_16462,0,null);var value_16464 = cljs.core.nth.call(null,vec__16456_16462,1,null);domina.set_attr_BANG_.call(null,content,name_16463,value_16464);
{
var G__16465 = seq__16452_16458;
var G__16466 = chunk__16453_16459;
var G__16467 = count__16454_16460;
var G__16468 = (i__16455_16461 + 1);
seq__16452_16458 = G__16465;
chunk__16453_16459 = G__16466;
count__16454_16460 = G__16467;
i__16455_16461 = G__16468;
continue;
}
} else
{var temp__4092__auto___16469 = cljs.core.seq.call(null,seq__16452_16458);if(temp__4092__auto___16469)
{var seq__16452_16470__$1 = temp__4092__auto___16469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16452_16470__$1))
{var c__4148__auto___16471 = cljs.core.chunk_first.call(null,seq__16452_16470__$1);{
var G__16472 = cljs.core.chunk_rest.call(null,seq__16452_16470__$1);
var G__16473 = c__4148__auto___16471;
var G__16474 = cljs.core.count.call(null,c__4148__auto___16471);
var G__16475 = 0;
seq__16452_16458 = G__16472;
chunk__16453_16459 = G__16473;
count__16454_16460 = G__16474;
i__16455_16461 = G__16475;
continue;
}
} else
{var vec__16457_16476 = cljs.core.first.call(null,seq__16452_16470__$1);var name_16477 = cljs.core.nth.call(null,vec__16457_16476,0,null);var value_16478 = cljs.core.nth.call(null,vec__16457_16476,1,null);domina.set_attr_BANG_.call(null,content,name_16477,value_16478);
{
var G__16479 = cljs.core.next.call(null,seq__16452_16470__$1);
var G__16480 = null;
var G__16481 = 0;
var G__16482 = 0;
seq__16452_16458 = G__16479;
chunk__16453_16459 = G__16480;
count__16454_16460 = G__16481;
i__16455_16461 = G__16482;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16487_16491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16488_16492 = null;var count__16489_16493 = 0;var i__16490_16494 = 0;while(true){
if((i__16490_16494 < count__16489_16493))
{var node_16495 = cljs.core._nth.call(null,chunk__16488_16492,i__16490_16494);goog.dom.classes.add(node_16495,class$);
{
var G__16496 = seq__16487_16491;
var G__16497 = chunk__16488_16492;
var G__16498 = count__16489_16493;
var G__16499 = (i__16490_16494 + 1);
seq__16487_16491 = G__16496;
chunk__16488_16492 = G__16497;
count__16489_16493 = G__16498;
i__16490_16494 = G__16499;
continue;
}
} else
{var temp__4092__auto___16500 = cljs.core.seq.call(null,seq__16487_16491);if(temp__4092__auto___16500)
{var seq__16487_16501__$1 = temp__4092__auto___16500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16487_16501__$1))
{var c__4148__auto___16502 = cljs.core.chunk_first.call(null,seq__16487_16501__$1);{
var G__16503 = cljs.core.chunk_rest.call(null,seq__16487_16501__$1);
var G__16504 = c__4148__auto___16502;
var G__16505 = cljs.core.count.call(null,c__4148__auto___16502);
var G__16506 = 0;
seq__16487_16491 = G__16503;
chunk__16488_16492 = G__16504;
count__16489_16493 = G__16505;
i__16490_16494 = G__16506;
continue;
}
} else
{var node_16507 = cljs.core.first.call(null,seq__16487_16501__$1);goog.dom.classes.add(node_16507,class$);
{
var G__16508 = cljs.core.next.call(null,seq__16487_16501__$1);
var G__16509 = null;
var G__16510 = 0;
var G__16511 = 0;
seq__16487_16491 = G__16508;
chunk__16488_16492 = G__16509;
count__16489_16493 = G__16510;
i__16490_16494 = G__16511;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16516_16520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16517_16521 = null;var count__16518_16522 = 0;var i__16519_16523 = 0;while(true){
if((i__16519_16523 < count__16518_16522))
{var node_16524 = cljs.core._nth.call(null,chunk__16517_16521,i__16519_16523);goog.dom.classes.remove(node_16524,class$);
{
var G__16525 = seq__16516_16520;
var G__16526 = chunk__16517_16521;
var G__16527 = count__16518_16522;
var G__16528 = (i__16519_16523 + 1);
seq__16516_16520 = G__16525;
chunk__16517_16521 = G__16526;
count__16518_16522 = G__16527;
i__16519_16523 = G__16528;
continue;
}
} else
{var temp__4092__auto___16529 = cljs.core.seq.call(null,seq__16516_16520);if(temp__4092__auto___16529)
{var seq__16516_16530__$1 = temp__4092__auto___16529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16516_16530__$1))
{var c__4148__auto___16531 = cljs.core.chunk_first.call(null,seq__16516_16530__$1);{
var G__16532 = cljs.core.chunk_rest.call(null,seq__16516_16530__$1);
var G__16533 = c__4148__auto___16531;
var G__16534 = cljs.core.count.call(null,c__4148__auto___16531);
var G__16535 = 0;
seq__16516_16520 = G__16532;
chunk__16517_16521 = G__16533;
count__16518_16522 = G__16534;
i__16519_16523 = G__16535;
continue;
}
} else
{var node_16536 = cljs.core.first.call(null,seq__16516_16530__$1);goog.dom.classes.remove(node_16536,class$);
{
var G__16537 = cljs.core.next.call(null,seq__16516_16530__$1);
var G__16538 = null;
var G__16539 = 0;
var G__16540 = 0;
seq__16516_16520 = G__16537;
chunk__16517_16521 = G__16538;
count__16518_16522 = G__16539;
i__16519_16523 = G__16540;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16545_16549 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16546_16550 = null;var count__16547_16551 = 0;var i__16548_16552 = 0;while(true){
if((i__16548_16552 < count__16547_16551))
{var node_16553 = cljs.core._nth.call(null,chunk__16546_16550,i__16548_16552);goog.dom.classes.toggle(node_16553,class$);
{
var G__16554 = seq__16545_16549;
var G__16555 = chunk__16546_16550;
var G__16556 = count__16547_16551;
var G__16557 = (i__16548_16552 + 1);
seq__16545_16549 = G__16554;
chunk__16546_16550 = G__16555;
count__16547_16551 = G__16556;
i__16548_16552 = G__16557;
continue;
}
} else
{var temp__4092__auto___16558 = cljs.core.seq.call(null,seq__16545_16549);if(temp__4092__auto___16558)
{var seq__16545_16559__$1 = temp__4092__auto___16558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16545_16559__$1))
{var c__4148__auto___16560 = cljs.core.chunk_first.call(null,seq__16545_16559__$1);{
var G__16561 = cljs.core.chunk_rest.call(null,seq__16545_16559__$1);
var G__16562 = c__4148__auto___16560;
var G__16563 = cljs.core.count.call(null,c__4148__auto___16560);
var G__16564 = 0;
seq__16545_16549 = G__16561;
chunk__16546_16550 = G__16562;
count__16547_16551 = G__16563;
i__16548_16552 = G__16564;
continue;
}
} else
{var node_16565 = cljs.core.first.call(null,seq__16545_16559__$1);goog.dom.classes.toggle(node_16565,class$);
{
var G__16566 = cljs.core.next.call(null,seq__16545_16559__$1);
var G__16567 = null;
var G__16568 = 0;
var G__16569 = 0;
seq__16545_16549 = G__16566;
chunk__16546_16550 = G__16567;
count__16547_16551 = G__16568;
i__16548_16552 = G__16569;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16578__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16574_16579 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16575_16580 = null;var count__16576_16581 = 0;var i__16577_16582 = 0;while(true){
if((i__16577_16582 < count__16576_16581))
{var node_16583 = cljs.core._nth.call(null,chunk__16575_16580,i__16577_16582);goog.dom.classes.set(node_16583,classes_16578__$1);
{
var G__16584 = seq__16574_16579;
var G__16585 = chunk__16575_16580;
var G__16586 = count__16576_16581;
var G__16587 = (i__16577_16582 + 1);
seq__16574_16579 = G__16584;
chunk__16575_16580 = G__16585;
count__16576_16581 = G__16586;
i__16577_16582 = G__16587;
continue;
}
} else
{var temp__4092__auto___16588 = cljs.core.seq.call(null,seq__16574_16579);if(temp__4092__auto___16588)
{var seq__16574_16589__$1 = temp__4092__auto___16588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16574_16589__$1))
{var c__4148__auto___16590 = cljs.core.chunk_first.call(null,seq__16574_16589__$1);{
var G__16591 = cljs.core.chunk_rest.call(null,seq__16574_16589__$1);
var G__16592 = c__4148__auto___16590;
var G__16593 = cljs.core.count.call(null,c__4148__auto___16590);
var G__16594 = 0;
seq__16574_16579 = G__16591;
chunk__16575_16580 = G__16592;
count__16576_16581 = G__16593;
i__16577_16582 = G__16594;
continue;
}
} else
{var node_16595 = cljs.core.first.call(null,seq__16574_16589__$1);goog.dom.classes.set(node_16595,classes_16578__$1);
{
var G__16596 = cljs.core.next.call(null,seq__16574_16589__$1);
var G__16597 = null;
var G__16598 = 0;
var G__16599 = 0;
seq__16574_16579 = G__16596;
chunk__16575_16580 = G__16597;
count__16576_16581 = G__16598;
i__16577_16582 = G__16599;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16604_16608 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16605_16609 = null;var count__16606_16610 = 0;var i__16607_16611 = 0;while(true){
if((i__16607_16611 < count__16606_16610))
{var node_16612 = cljs.core._nth.call(null,chunk__16605_16609,i__16607_16611);goog.dom.setTextContent(node_16612,value);
{
var G__16613 = seq__16604_16608;
var G__16614 = chunk__16605_16609;
var G__16615 = count__16606_16610;
var G__16616 = (i__16607_16611 + 1);
seq__16604_16608 = G__16613;
chunk__16605_16609 = G__16614;
count__16606_16610 = G__16615;
i__16607_16611 = G__16616;
continue;
}
} else
{var temp__4092__auto___16617 = cljs.core.seq.call(null,seq__16604_16608);if(temp__4092__auto___16617)
{var seq__16604_16618__$1 = temp__4092__auto___16617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16604_16618__$1))
{var c__4148__auto___16619 = cljs.core.chunk_first.call(null,seq__16604_16618__$1);{
var G__16620 = cljs.core.chunk_rest.call(null,seq__16604_16618__$1);
var G__16621 = c__4148__auto___16619;
var G__16622 = cljs.core.count.call(null,c__4148__auto___16619);
var G__16623 = 0;
seq__16604_16608 = G__16620;
chunk__16605_16609 = G__16621;
count__16606_16610 = G__16622;
i__16607_16611 = G__16623;
continue;
}
} else
{var node_16624 = cljs.core.first.call(null,seq__16604_16618__$1);goog.dom.setTextContent(node_16624,value);
{
var G__16625 = cljs.core.next.call(null,seq__16604_16618__$1);
var G__16626 = null;
var G__16627 = 0;
var G__16628 = 0;
seq__16604_16608 = G__16625;
chunk__16605_16609 = G__16626;
count__16606_16610 = G__16627;
i__16607_16611 = G__16628;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16633_16637 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16634_16638 = null;var count__16635_16639 = 0;var i__16636_16640 = 0;while(true){
if((i__16636_16640 < count__16635_16639))
{var node_16641 = cljs.core._nth.call(null,chunk__16634_16638,i__16636_16640);goog.dom.forms.setValue(node_16641,value);
{
var G__16642 = seq__16633_16637;
var G__16643 = chunk__16634_16638;
var G__16644 = count__16635_16639;
var G__16645 = (i__16636_16640 + 1);
seq__16633_16637 = G__16642;
chunk__16634_16638 = G__16643;
count__16635_16639 = G__16644;
i__16636_16640 = G__16645;
continue;
}
} else
{var temp__4092__auto___16646 = cljs.core.seq.call(null,seq__16633_16637);if(temp__4092__auto___16646)
{var seq__16633_16647__$1 = temp__4092__auto___16646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16633_16647__$1))
{var c__4148__auto___16648 = cljs.core.chunk_first.call(null,seq__16633_16647__$1);{
var G__16649 = cljs.core.chunk_rest.call(null,seq__16633_16647__$1);
var G__16650 = c__4148__auto___16648;
var G__16651 = cljs.core.count.call(null,c__4148__auto___16648);
var G__16652 = 0;
seq__16633_16637 = G__16649;
chunk__16634_16638 = G__16650;
count__16635_16639 = G__16651;
i__16636_16640 = G__16652;
continue;
}
} else
{var node_16653 = cljs.core.first.call(null,seq__16633_16647__$1);goog.dom.forms.setValue(node_16653,value);
{
var G__16654 = cljs.core.next.call(null,seq__16633_16647__$1);
var G__16655 = null;
var G__16656 = 0;
var G__16657 = 0;
seq__16633_16637 = G__16654;
chunk__16634_16638 = G__16655;
count__16635_16639 = G__16656;
i__16636_16640 = G__16657;
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
{var value_16668 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16664_16669 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16665_16670 = null;var count__16666_16671 = 0;var i__16667_16672 = 0;while(true){
if((i__16667_16672 < count__16666_16671))
{var node_16673 = cljs.core._nth.call(null,chunk__16665_16670,i__16667_16672);node_16673.innerHTML = value_16668;
{
var G__16674 = seq__16664_16669;
var G__16675 = chunk__16665_16670;
var G__16676 = count__16666_16671;
var G__16677 = (i__16667_16672 + 1);
seq__16664_16669 = G__16674;
chunk__16665_16670 = G__16675;
count__16666_16671 = G__16676;
i__16667_16672 = G__16677;
continue;
}
} else
{var temp__4092__auto___16678 = cljs.core.seq.call(null,seq__16664_16669);if(temp__4092__auto___16678)
{var seq__16664_16679__$1 = temp__4092__auto___16678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16664_16679__$1))
{var c__4148__auto___16680 = cljs.core.chunk_first.call(null,seq__16664_16679__$1);{
var G__16681 = cljs.core.chunk_rest.call(null,seq__16664_16679__$1);
var G__16682 = c__4148__auto___16680;
var G__16683 = cljs.core.count.call(null,c__4148__auto___16680);
var G__16684 = 0;
seq__16664_16669 = G__16681;
chunk__16665_16670 = G__16682;
count__16666_16671 = G__16683;
i__16667_16672 = G__16684;
continue;
}
} else
{var node_16685 = cljs.core.first.call(null,seq__16664_16679__$1);node_16685.innerHTML = value_16668;
{
var G__16686 = cljs.core.next.call(null,seq__16664_16679__$1);
var G__16687 = null;
var G__16688 = 0;
var G__16689 = 0;
seq__16664_16669 = G__16686;
chunk__16665_16670 = G__16687;
count__16666_16671 = G__16688;
i__16667_16672 = G__16689;
continue;
}
}
} else
{}
}
break;
}
}catch (e16663){if((e16663 instanceof Error))
{var e_16690 = e16663;domina.replace_children_BANG_.call(null,content,value_16668);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16663;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16697_16701 = cljs.core.seq.call(null,children);var chunk__16698_16702 = null;var count__16699_16703 = 0;var i__16700_16704 = 0;while(true){
if((i__16700_16704 < count__16699_16703))
{var child_16705 = cljs.core._nth.call(null,chunk__16698_16702,i__16700_16704);frag.appendChild(child_16705);
{
var G__16706 = seq__16697_16701;
var G__16707 = chunk__16698_16702;
var G__16708 = count__16699_16703;
var G__16709 = (i__16700_16704 + 1);
seq__16697_16701 = G__16706;
chunk__16698_16702 = G__16707;
count__16699_16703 = G__16708;
i__16700_16704 = G__16709;
continue;
}
} else
{var temp__4092__auto___16710 = cljs.core.seq.call(null,seq__16697_16701);if(temp__4092__auto___16710)
{var seq__16697_16711__$1 = temp__4092__auto___16710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16697_16711__$1))
{var c__4148__auto___16712 = cljs.core.chunk_first.call(null,seq__16697_16711__$1);{
var G__16713 = cljs.core.chunk_rest.call(null,seq__16697_16711__$1);
var G__16714 = c__4148__auto___16712;
var G__16715 = cljs.core.count.call(null,c__4148__auto___16712);
var G__16716 = 0;
seq__16697_16701 = G__16713;
chunk__16698_16702 = G__16714;
count__16699_16703 = G__16715;
i__16700_16704 = G__16716;
continue;
}
} else
{var child_16717 = cljs.core.first.call(null,seq__16697_16711__$1);frag.appendChild(child_16717);
{
var G__16718 = cljs.core.next.call(null,seq__16697_16711__$1);
var G__16719 = null;
var G__16720 = 0;
var G__16721 = 0;
seq__16697_16701 = G__16718;
chunk__16698_16702 = G__16719;
count__16699_16703 = G__16720;
i__16700_16704 = G__16721;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16691_SHARP_,p2__16692_SHARP_){return f.call(null,p1__16691_SHARP_,p2__16692_SHARP_);
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
{if((function (){var G__16723 = list_thing;if(G__16723)
{var bit__4050__auto__ = (G__16723.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16723.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16723.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16723);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16723);
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
{if((function (){var G__16724 = content;if(G__16724)
{var bit__4050__auto__ = (G__16724.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16724.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16724.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16724);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16724);
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
{if((function (){var G__16725 = content;if(G__16725)
{var bit__4050__auto__ = (G__16725.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16725.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16725.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16725);
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