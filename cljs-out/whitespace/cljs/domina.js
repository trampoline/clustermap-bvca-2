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
var opt_wrapper_38260 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38261 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38261,table_section_wrapper_38261,opt_wrapper_38260,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38262,table_section_wrapper_38261,cell_wrapper_38262,opt_wrapper_38260,table_section_wrapper_38261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38261]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38267 = cljs.core.seq.call(null,tbody);var chunk__38268 = null;var count__38269 = 0;var i__38270 = 0;while(true){
if((i__38270 < count__38269))
{var child = cljs.core._nth.call(null,chunk__38268,i__38270);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38271 = seq__38267;
var G__38272 = chunk__38268;
var G__38273 = count__38269;
var G__38274 = (i__38270 + 1);
seq__38267 = G__38271;
chunk__38268 = G__38272;
count__38269 = G__38273;
i__38270 = G__38274;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38267);if(temp__4092__auto__)
{var seq__38267__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38267__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38267__$1);{
var G__38275 = cljs.core.chunk_rest.call(null,seq__38267__$1);
var G__38276 = c__4148__auto__;
var G__38277 = cljs.core.count.call(null,c__4148__auto__);
var G__38278 = 0;
seq__38267 = G__38275;
chunk__38268 = G__38276;
count__38269 = G__38277;
i__38270 = G__38278;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38267__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38279 = cljs.core.next.call(null,seq__38267__$1);
var G__38280 = null;
var G__38281 = 0;
var G__38282 = 0;
seq__38267 = G__38279;
chunk__38268 = G__38280;
count__38269 = G__38281;
i__38270 = G__38282;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38284 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38284,0,null);var start_wrap = cljs.core.nth.call(null,vec__38284,1,null);var end_wrap = cljs.core.nth.call(null,vec__38284,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38285 = wrapper.lastChild;
var G__38286 = (level - 1);
wrapper = G__38285;
level = G__38286;
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
domina.DomContent = (function (){var obj38288 = {};return obj38288;
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
log_debug.cljs$lang$applyTo = (function (arglist__38289){
var mesg = cljs.core.seq(arglist__38289);
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
log.cljs$lang$applyTo = (function (arglist__38290){
var mesg = cljs.core.seq(arglist__38290);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38291){
var contents = cljs.core.seq(arglist__38291);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38292_SHARP_){return p1__38292_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38293_SHARP_,p2__38294_SHARP_){return goog.dom.insertChildAt(p1__38293_SHARP_,p2__38294_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38296_SHARP_,p2__38295_SHARP_){return goog.dom.insertSiblingBefore(p2__38295_SHARP_,p1__38296_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38298_SHARP_,p2__38297_SHARP_){return goog.dom.insertSiblingAfter(p2__38297_SHARP_,p1__38298_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38300_SHARP_,p2__38299_SHARP_){return goog.dom.replaceNode(p2__38299_SHARP_,p1__38300_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38305_38309 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38306_38310 = null;var count__38307_38311 = 0;var i__38308_38312 = 0;while(true){
if((i__38308_38312 < count__38307_38311))
{var n_38313 = cljs.core._nth.call(null,chunk__38306_38310,i__38308_38312);goog.style.setStyle(n_38313,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38314 = seq__38305_38309;
var G__38315 = chunk__38306_38310;
var G__38316 = count__38307_38311;
var G__38317 = (i__38308_38312 + 1);
seq__38305_38309 = G__38314;
chunk__38306_38310 = G__38315;
count__38307_38311 = G__38316;
i__38308_38312 = G__38317;
continue;
}
} else
{var temp__4092__auto___38318 = cljs.core.seq.call(null,seq__38305_38309);if(temp__4092__auto___38318)
{var seq__38305_38319__$1 = temp__4092__auto___38318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38305_38319__$1))
{var c__4148__auto___38320 = cljs.core.chunk_first.call(null,seq__38305_38319__$1);{
var G__38321 = cljs.core.chunk_rest.call(null,seq__38305_38319__$1);
var G__38322 = c__4148__auto___38320;
var G__38323 = cljs.core.count.call(null,c__4148__auto___38320);
var G__38324 = 0;
seq__38305_38309 = G__38321;
chunk__38306_38310 = G__38322;
count__38307_38311 = G__38323;
i__38308_38312 = G__38324;
continue;
}
} else
{var n_38325 = cljs.core.first.call(null,seq__38305_38319__$1);goog.style.setStyle(n_38325,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38326 = cljs.core.next.call(null,seq__38305_38319__$1);
var G__38327 = null;
var G__38328 = 0;
var G__38329 = 0;
seq__38305_38309 = G__38326;
chunk__38306_38310 = G__38327;
count__38307_38311 = G__38328;
i__38308_38312 = G__38329;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38330){
var content = cljs.core.first(arglist__38330);
arglist__38330 = cljs.core.next(arglist__38330);
var name = cljs.core.first(arglist__38330);
var value = cljs.core.rest(arglist__38330);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38335_38339 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38336_38340 = null;var count__38337_38341 = 0;var i__38338_38342 = 0;while(true){
if((i__38338_38342 < count__38337_38341))
{var n_38343 = cljs.core._nth.call(null,chunk__38336_38340,i__38338_38342);n_38343.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38344 = seq__38335_38339;
var G__38345 = chunk__38336_38340;
var G__38346 = count__38337_38341;
var G__38347 = (i__38338_38342 + 1);
seq__38335_38339 = G__38344;
chunk__38336_38340 = G__38345;
count__38337_38341 = G__38346;
i__38338_38342 = G__38347;
continue;
}
} else
{var temp__4092__auto___38348 = cljs.core.seq.call(null,seq__38335_38339);if(temp__4092__auto___38348)
{var seq__38335_38349__$1 = temp__4092__auto___38348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38335_38349__$1))
{var c__4148__auto___38350 = cljs.core.chunk_first.call(null,seq__38335_38349__$1);{
var G__38351 = cljs.core.chunk_rest.call(null,seq__38335_38349__$1);
var G__38352 = c__4148__auto___38350;
var G__38353 = cljs.core.count.call(null,c__4148__auto___38350);
var G__38354 = 0;
seq__38335_38339 = G__38351;
chunk__38336_38340 = G__38352;
count__38337_38341 = G__38353;
i__38338_38342 = G__38354;
continue;
}
} else
{var n_38355 = cljs.core.first.call(null,seq__38335_38349__$1);n_38355.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38356 = cljs.core.next.call(null,seq__38335_38349__$1);
var G__38357 = null;
var G__38358 = 0;
var G__38359 = 0;
seq__38335_38339 = G__38356;
chunk__38336_38340 = G__38357;
count__38337_38341 = G__38358;
i__38338_38342 = G__38359;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38360){
var content = cljs.core.first(arglist__38360);
arglist__38360 = cljs.core.next(arglist__38360);
var name = cljs.core.first(arglist__38360);
var value = cljs.core.rest(arglist__38360);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38365_38369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38366_38370 = null;var count__38367_38371 = 0;var i__38368_38372 = 0;while(true){
if((i__38368_38372 < count__38367_38371))
{var n_38373 = cljs.core._nth.call(null,chunk__38366_38370,i__38368_38372);n_38373.removeAttribute(cljs.core.name.call(null,name));
{
var G__38374 = seq__38365_38369;
var G__38375 = chunk__38366_38370;
var G__38376 = count__38367_38371;
var G__38377 = (i__38368_38372 + 1);
seq__38365_38369 = G__38374;
chunk__38366_38370 = G__38375;
count__38367_38371 = G__38376;
i__38368_38372 = G__38377;
continue;
}
} else
{var temp__4092__auto___38378 = cljs.core.seq.call(null,seq__38365_38369);if(temp__4092__auto___38378)
{var seq__38365_38379__$1 = temp__4092__auto___38378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38365_38379__$1))
{var c__4148__auto___38380 = cljs.core.chunk_first.call(null,seq__38365_38379__$1);{
var G__38381 = cljs.core.chunk_rest.call(null,seq__38365_38379__$1);
var G__38382 = c__4148__auto___38380;
var G__38383 = cljs.core.count.call(null,c__4148__auto___38380);
var G__38384 = 0;
seq__38365_38369 = G__38381;
chunk__38366_38370 = G__38382;
count__38367_38371 = G__38383;
i__38368_38372 = G__38384;
continue;
}
} else
{var n_38385 = cljs.core.first.call(null,seq__38365_38379__$1);n_38385.removeAttribute(cljs.core.name.call(null,name));
{
var G__38386 = cljs.core.next.call(null,seq__38365_38379__$1);
var G__38387 = null;
var G__38388 = 0;
var G__38389 = 0;
seq__38365_38369 = G__38386;
chunk__38366_38370 = G__38387;
count__38367_38371 = G__38388;
i__38368_38372 = G__38389;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38391 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38391,0,null);var v = cljs.core.nth.call(null,vec__38391,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38392_SHARP_){var attr = attrs__$1.item(p1__38392_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38399_38405 = cljs.core.seq.call(null,styles);var chunk__38400_38406 = null;var count__38401_38407 = 0;var i__38402_38408 = 0;while(true){
if((i__38402_38408 < count__38401_38407))
{var vec__38403_38409 = cljs.core._nth.call(null,chunk__38400_38406,i__38402_38408);var name_38410 = cljs.core.nth.call(null,vec__38403_38409,0,null);var value_38411 = cljs.core.nth.call(null,vec__38403_38409,1,null);domina.set_style_BANG_.call(null,content,name_38410,value_38411);
{
var G__38412 = seq__38399_38405;
var G__38413 = chunk__38400_38406;
var G__38414 = count__38401_38407;
var G__38415 = (i__38402_38408 + 1);
seq__38399_38405 = G__38412;
chunk__38400_38406 = G__38413;
count__38401_38407 = G__38414;
i__38402_38408 = G__38415;
continue;
}
} else
{var temp__4092__auto___38416 = cljs.core.seq.call(null,seq__38399_38405);if(temp__4092__auto___38416)
{var seq__38399_38417__$1 = temp__4092__auto___38416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38399_38417__$1))
{var c__4148__auto___38418 = cljs.core.chunk_first.call(null,seq__38399_38417__$1);{
var G__38419 = cljs.core.chunk_rest.call(null,seq__38399_38417__$1);
var G__38420 = c__4148__auto___38418;
var G__38421 = cljs.core.count.call(null,c__4148__auto___38418);
var G__38422 = 0;
seq__38399_38405 = G__38419;
chunk__38400_38406 = G__38420;
count__38401_38407 = G__38421;
i__38402_38408 = G__38422;
continue;
}
} else
{var vec__38404_38423 = cljs.core.first.call(null,seq__38399_38417__$1);var name_38424 = cljs.core.nth.call(null,vec__38404_38423,0,null);var value_38425 = cljs.core.nth.call(null,vec__38404_38423,1,null);domina.set_style_BANG_.call(null,content,name_38424,value_38425);
{
var G__38426 = cljs.core.next.call(null,seq__38399_38417__$1);
var G__38427 = null;
var G__38428 = 0;
var G__38429 = 0;
seq__38399_38405 = G__38426;
chunk__38400_38406 = G__38427;
count__38401_38407 = G__38428;
i__38402_38408 = G__38429;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38436_38442 = cljs.core.seq.call(null,attrs);var chunk__38437_38443 = null;var count__38438_38444 = 0;var i__38439_38445 = 0;while(true){
if((i__38439_38445 < count__38438_38444))
{var vec__38440_38446 = cljs.core._nth.call(null,chunk__38437_38443,i__38439_38445);var name_38447 = cljs.core.nth.call(null,vec__38440_38446,0,null);var value_38448 = cljs.core.nth.call(null,vec__38440_38446,1,null);domina.set_attr_BANG_.call(null,content,name_38447,value_38448);
{
var G__38449 = seq__38436_38442;
var G__38450 = chunk__38437_38443;
var G__38451 = count__38438_38444;
var G__38452 = (i__38439_38445 + 1);
seq__38436_38442 = G__38449;
chunk__38437_38443 = G__38450;
count__38438_38444 = G__38451;
i__38439_38445 = G__38452;
continue;
}
} else
{var temp__4092__auto___38453 = cljs.core.seq.call(null,seq__38436_38442);if(temp__4092__auto___38453)
{var seq__38436_38454__$1 = temp__4092__auto___38453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38436_38454__$1))
{var c__4148__auto___38455 = cljs.core.chunk_first.call(null,seq__38436_38454__$1);{
var G__38456 = cljs.core.chunk_rest.call(null,seq__38436_38454__$1);
var G__38457 = c__4148__auto___38455;
var G__38458 = cljs.core.count.call(null,c__4148__auto___38455);
var G__38459 = 0;
seq__38436_38442 = G__38456;
chunk__38437_38443 = G__38457;
count__38438_38444 = G__38458;
i__38439_38445 = G__38459;
continue;
}
} else
{var vec__38441_38460 = cljs.core.first.call(null,seq__38436_38454__$1);var name_38461 = cljs.core.nth.call(null,vec__38441_38460,0,null);var value_38462 = cljs.core.nth.call(null,vec__38441_38460,1,null);domina.set_attr_BANG_.call(null,content,name_38461,value_38462);
{
var G__38463 = cljs.core.next.call(null,seq__38436_38454__$1);
var G__38464 = null;
var G__38465 = 0;
var G__38466 = 0;
seq__38436_38442 = G__38463;
chunk__38437_38443 = G__38464;
count__38438_38444 = G__38465;
i__38439_38445 = G__38466;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38471_38475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38472_38476 = null;var count__38473_38477 = 0;var i__38474_38478 = 0;while(true){
if((i__38474_38478 < count__38473_38477))
{var node_38479 = cljs.core._nth.call(null,chunk__38472_38476,i__38474_38478);goog.dom.classes.add(node_38479,class$);
{
var G__38480 = seq__38471_38475;
var G__38481 = chunk__38472_38476;
var G__38482 = count__38473_38477;
var G__38483 = (i__38474_38478 + 1);
seq__38471_38475 = G__38480;
chunk__38472_38476 = G__38481;
count__38473_38477 = G__38482;
i__38474_38478 = G__38483;
continue;
}
} else
{var temp__4092__auto___38484 = cljs.core.seq.call(null,seq__38471_38475);if(temp__4092__auto___38484)
{var seq__38471_38485__$1 = temp__4092__auto___38484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38471_38485__$1))
{var c__4148__auto___38486 = cljs.core.chunk_first.call(null,seq__38471_38485__$1);{
var G__38487 = cljs.core.chunk_rest.call(null,seq__38471_38485__$1);
var G__38488 = c__4148__auto___38486;
var G__38489 = cljs.core.count.call(null,c__4148__auto___38486);
var G__38490 = 0;
seq__38471_38475 = G__38487;
chunk__38472_38476 = G__38488;
count__38473_38477 = G__38489;
i__38474_38478 = G__38490;
continue;
}
} else
{var node_38491 = cljs.core.first.call(null,seq__38471_38485__$1);goog.dom.classes.add(node_38491,class$);
{
var G__38492 = cljs.core.next.call(null,seq__38471_38485__$1);
var G__38493 = null;
var G__38494 = 0;
var G__38495 = 0;
seq__38471_38475 = G__38492;
chunk__38472_38476 = G__38493;
count__38473_38477 = G__38494;
i__38474_38478 = G__38495;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38500_38504 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38501_38505 = null;var count__38502_38506 = 0;var i__38503_38507 = 0;while(true){
if((i__38503_38507 < count__38502_38506))
{var node_38508 = cljs.core._nth.call(null,chunk__38501_38505,i__38503_38507);goog.dom.classes.remove(node_38508,class$);
{
var G__38509 = seq__38500_38504;
var G__38510 = chunk__38501_38505;
var G__38511 = count__38502_38506;
var G__38512 = (i__38503_38507 + 1);
seq__38500_38504 = G__38509;
chunk__38501_38505 = G__38510;
count__38502_38506 = G__38511;
i__38503_38507 = G__38512;
continue;
}
} else
{var temp__4092__auto___38513 = cljs.core.seq.call(null,seq__38500_38504);if(temp__4092__auto___38513)
{var seq__38500_38514__$1 = temp__4092__auto___38513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38500_38514__$1))
{var c__4148__auto___38515 = cljs.core.chunk_first.call(null,seq__38500_38514__$1);{
var G__38516 = cljs.core.chunk_rest.call(null,seq__38500_38514__$1);
var G__38517 = c__4148__auto___38515;
var G__38518 = cljs.core.count.call(null,c__4148__auto___38515);
var G__38519 = 0;
seq__38500_38504 = G__38516;
chunk__38501_38505 = G__38517;
count__38502_38506 = G__38518;
i__38503_38507 = G__38519;
continue;
}
} else
{var node_38520 = cljs.core.first.call(null,seq__38500_38514__$1);goog.dom.classes.remove(node_38520,class$);
{
var G__38521 = cljs.core.next.call(null,seq__38500_38514__$1);
var G__38522 = null;
var G__38523 = 0;
var G__38524 = 0;
seq__38500_38504 = G__38521;
chunk__38501_38505 = G__38522;
count__38502_38506 = G__38523;
i__38503_38507 = G__38524;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38529_38533 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38530_38534 = null;var count__38531_38535 = 0;var i__38532_38536 = 0;while(true){
if((i__38532_38536 < count__38531_38535))
{var node_38537 = cljs.core._nth.call(null,chunk__38530_38534,i__38532_38536);goog.dom.classes.toggle(node_38537,class$);
{
var G__38538 = seq__38529_38533;
var G__38539 = chunk__38530_38534;
var G__38540 = count__38531_38535;
var G__38541 = (i__38532_38536 + 1);
seq__38529_38533 = G__38538;
chunk__38530_38534 = G__38539;
count__38531_38535 = G__38540;
i__38532_38536 = G__38541;
continue;
}
} else
{var temp__4092__auto___38542 = cljs.core.seq.call(null,seq__38529_38533);if(temp__4092__auto___38542)
{var seq__38529_38543__$1 = temp__4092__auto___38542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38529_38543__$1))
{var c__4148__auto___38544 = cljs.core.chunk_first.call(null,seq__38529_38543__$1);{
var G__38545 = cljs.core.chunk_rest.call(null,seq__38529_38543__$1);
var G__38546 = c__4148__auto___38544;
var G__38547 = cljs.core.count.call(null,c__4148__auto___38544);
var G__38548 = 0;
seq__38529_38533 = G__38545;
chunk__38530_38534 = G__38546;
count__38531_38535 = G__38547;
i__38532_38536 = G__38548;
continue;
}
} else
{var node_38549 = cljs.core.first.call(null,seq__38529_38543__$1);goog.dom.classes.toggle(node_38549,class$);
{
var G__38550 = cljs.core.next.call(null,seq__38529_38543__$1);
var G__38551 = null;
var G__38552 = 0;
var G__38553 = 0;
seq__38529_38533 = G__38550;
chunk__38530_38534 = G__38551;
count__38531_38535 = G__38552;
i__38532_38536 = G__38553;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38562__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38558_38563 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38559_38564 = null;var count__38560_38565 = 0;var i__38561_38566 = 0;while(true){
if((i__38561_38566 < count__38560_38565))
{var node_38567 = cljs.core._nth.call(null,chunk__38559_38564,i__38561_38566);goog.dom.classes.set(node_38567,classes_38562__$1);
{
var G__38568 = seq__38558_38563;
var G__38569 = chunk__38559_38564;
var G__38570 = count__38560_38565;
var G__38571 = (i__38561_38566 + 1);
seq__38558_38563 = G__38568;
chunk__38559_38564 = G__38569;
count__38560_38565 = G__38570;
i__38561_38566 = G__38571;
continue;
}
} else
{var temp__4092__auto___38572 = cljs.core.seq.call(null,seq__38558_38563);if(temp__4092__auto___38572)
{var seq__38558_38573__$1 = temp__4092__auto___38572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38558_38573__$1))
{var c__4148__auto___38574 = cljs.core.chunk_first.call(null,seq__38558_38573__$1);{
var G__38575 = cljs.core.chunk_rest.call(null,seq__38558_38573__$1);
var G__38576 = c__4148__auto___38574;
var G__38577 = cljs.core.count.call(null,c__4148__auto___38574);
var G__38578 = 0;
seq__38558_38563 = G__38575;
chunk__38559_38564 = G__38576;
count__38560_38565 = G__38577;
i__38561_38566 = G__38578;
continue;
}
} else
{var node_38579 = cljs.core.first.call(null,seq__38558_38573__$1);goog.dom.classes.set(node_38579,classes_38562__$1);
{
var G__38580 = cljs.core.next.call(null,seq__38558_38573__$1);
var G__38581 = null;
var G__38582 = 0;
var G__38583 = 0;
seq__38558_38563 = G__38580;
chunk__38559_38564 = G__38581;
count__38560_38565 = G__38582;
i__38561_38566 = G__38583;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38588_38592 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38589_38593 = null;var count__38590_38594 = 0;var i__38591_38595 = 0;while(true){
if((i__38591_38595 < count__38590_38594))
{var node_38596 = cljs.core._nth.call(null,chunk__38589_38593,i__38591_38595);goog.dom.setTextContent(node_38596,value);
{
var G__38597 = seq__38588_38592;
var G__38598 = chunk__38589_38593;
var G__38599 = count__38590_38594;
var G__38600 = (i__38591_38595 + 1);
seq__38588_38592 = G__38597;
chunk__38589_38593 = G__38598;
count__38590_38594 = G__38599;
i__38591_38595 = G__38600;
continue;
}
} else
{var temp__4092__auto___38601 = cljs.core.seq.call(null,seq__38588_38592);if(temp__4092__auto___38601)
{var seq__38588_38602__$1 = temp__4092__auto___38601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38588_38602__$1))
{var c__4148__auto___38603 = cljs.core.chunk_first.call(null,seq__38588_38602__$1);{
var G__38604 = cljs.core.chunk_rest.call(null,seq__38588_38602__$1);
var G__38605 = c__4148__auto___38603;
var G__38606 = cljs.core.count.call(null,c__4148__auto___38603);
var G__38607 = 0;
seq__38588_38592 = G__38604;
chunk__38589_38593 = G__38605;
count__38590_38594 = G__38606;
i__38591_38595 = G__38607;
continue;
}
} else
{var node_38608 = cljs.core.first.call(null,seq__38588_38602__$1);goog.dom.setTextContent(node_38608,value);
{
var G__38609 = cljs.core.next.call(null,seq__38588_38602__$1);
var G__38610 = null;
var G__38611 = 0;
var G__38612 = 0;
seq__38588_38592 = G__38609;
chunk__38589_38593 = G__38610;
count__38590_38594 = G__38611;
i__38591_38595 = G__38612;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38617_38621 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38618_38622 = null;var count__38619_38623 = 0;var i__38620_38624 = 0;while(true){
if((i__38620_38624 < count__38619_38623))
{var node_38625 = cljs.core._nth.call(null,chunk__38618_38622,i__38620_38624);goog.dom.forms.setValue(node_38625,value);
{
var G__38626 = seq__38617_38621;
var G__38627 = chunk__38618_38622;
var G__38628 = count__38619_38623;
var G__38629 = (i__38620_38624 + 1);
seq__38617_38621 = G__38626;
chunk__38618_38622 = G__38627;
count__38619_38623 = G__38628;
i__38620_38624 = G__38629;
continue;
}
} else
{var temp__4092__auto___38630 = cljs.core.seq.call(null,seq__38617_38621);if(temp__4092__auto___38630)
{var seq__38617_38631__$1 = temp__4092__auto___38630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38617_38631__$1))
{var c__4148__auto___38632 = cljs.core.chunk_first.call(null,seq__38617_38631__$1);{
var G__38633 = cljs.core.chunk_rest.call(null,seq__38617_38631__$1);
var G__38634 = c__4148__auto___38632;
var G__38635 = cljs.core.count.call(null,c__4148__auto___38632);
var G__38636 = 0;
seq__38617_38621 = G__38633;
chunk__38618_38622 = G__38634;
count__38619_38623 = G__38635;
i__38620_38624 = G__38636;
continue;
}
} else
{var node_38637 = cljs.core.first.call(null,seq__38617_38631__$1);goog.dom.forms.setValue(node_38637,value);
{
var G__38638 = cljs.core.next.call(null,seq__38617_38631__$1);
var G__38639 = null;
var G__38640 = 0;
var G__38641 = 0;
seq__38617_38621 = G__38638;
chunk__38618_38622 = G__38639;
count__38619_38623 = G__38640;
i__38620_38624 = G__38641;
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
{var value_38652 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38648_38653 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38649_38654 = null;var count__38650_38655 = 0;var i__38651_38656 = 0;while(true){
if((i__38651_38656 < count__38650_38655))
{var node_38657 = cljs.core._nth.call(null,chunk__38649_38654,i__38651_38656);node_38657.innerHTML = value_38652;
{
var G__38658 = seq__38648_38653;
var G__38659 = chunk__38649_38654;
var G__38660 = count__38650_38655;
var G__38661 = (i__38651_38656 + 1);
seq__38648_38653 = G__38658;
chunk__38649_38654 = G__38659;
count__38650_38655 = G__38660;
i__38651_38656 = G__38661;
continue;
}
} else
{var temp__4092__auto___38662 = cljs.core.seq.call(null,seq__38648_38653);if(temp__4092__auto___38662)
{var seq__38648_38663__$1 = temp__4092__auto___38662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38648_38663__$1))
{var c__4148__auto___38664 = cljs.core.chunk_first.call(null,seq__38648_38663__$1);{
var G__38665 = cljs.core.chunk_rest.call(null,seq__38648_38663__$1);
var G__38666 = c__4148__auto___38664;
var G__38667 = cljs.core.count.call(null,c__4148__auto___38664);
var G__38668 = 0;
seq__38648_38653 = G__38665;
chunk__38649_38654 = G__38666;
count__38650_38655 = G__38667;
i__38651_38656 = G__38668;
continue;
}
} else
{var node_38669 = cljs.core.first.call(null,seq__38648_38663__$1);node_38669.innerHTML = value_38652;
{
var G__38670 = cljs.core.next.call(null,seq__38648_38663__$1);
var G__38671 = null;
var G__38672 = 0;
var G__38673 = 0;
seq__38648_38653 = G__38670;
chunk__38649_38654 = G__38671;
count__38650_38655 = G__38672;
i__38651_38656 = G__38673;
continue;
}
}
} else
{}
}
break;
}
}catch (e38647){if((e38647 instanceof Error))
{var e_38674 = e38647;domina.replace_children_BANG_.call(null,content,value_38652);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38647;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38681_38685 = cljs.core.seq.call(null,children);var chunk__38682_38686 = null;var count__38683_38687 = 0;var i__38684_38688 = 0;while(true){
if((i__38684_38688 < count__38683_38687))
{var child_38689 = cljs.core._nth.call(null,chunk__38682_38686,i__38684_38688);frag.appendChild(child_38689);
{
var G__38690 = seq__38681_38685;
var G__38691 = chunk__38682_38686;
var G__38692 = count__38683_38687;
var G__38693 = (i__38684_38688 + 1);
seq__38681_38685 = G__38690;
chunk__38682_38686 = G__38691;
count__38683_38687 = G__38692;
i__38684_38688 = G__38693;
continue;
}
} else
{var temp__4092__auto___38694 = cljs.core.seq.call(null,seq__38681_38685);if(temp__4092__auto___38694)
{var seq__38681_38695__$1 = temp__4092__auto___38694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38681_38695__$1))
{var c__4148__auto___38696 = cljs.core.chunk_first.call(null,seq__38681_38695__$1);{
var G__38697 = cljs.core.chunk_rest.call(null,seq__38681_38695__$1);
var G__38698 = c__4148__auto___38696;
var G__38699 = cljs.core.count.call(null,c__4148__auto___38696);
var G__38700 = 0;
seq__38681_38685 = G__38697;
chunk__38682_38686 = G__38698;
count__38683_38687 = G__38699;
i__38684_38688 = G__38700;
continue;
}
} else
{var child_38701 = cljs.core.first.call(null,seq__38681_38695__$1);frag.appendChild(child_38701);
{
var G__38702 = cljs.core.next.call(null,seq__38681_38695__$1);
var G__38703 = null;
var G__38704 = 0;
var G__38705 = 0;
seq__38681_38685 = G__38702;
chunk__38682_38686 = G__38703;
count__38683_38687 = G__38704;
i__38684_38688 = G__38705;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38675_SHARP_,p2__38676_SHARP_){return f.call(null,p1__38675_SHARP_,p2__38676_SHARP_);
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
{if((function (){var G__38707 = list_thing;if(G__38707)
{var bit__4050__auto__ = (G__38707.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38707.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38707.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38707);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38707);
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
{if((function (){var G__38708 = content;if(G__38708)
{var bit__4050__auto__ = (G__38708.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38708.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38708.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38708);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38708);
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
{if((function (){var G__38709 = content;if(G__38709)
{var bit__4050__auto__ = (G__38709.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38709.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38709);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38709);
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
