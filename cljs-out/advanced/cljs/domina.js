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
var opt_wrapper_26165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26166 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26167 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$183,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26166,table_section_wrapper_26166,opt_wrapper_26165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26167,table_section_wrapper_26166,cell_wrapper_26167,opt_wrapper_26165,table_section_wrapper_26166,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26166]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26172 = cljs.core.seq(tbody);var chunk__26173 = null;var count__26174 = 0;var i__26175 = 0;while(true){
if((i__26175 < count__26174))
{var child = chunk__26173.cljs$core$IIndexed$_nth$arity$2(null,i__26175);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26176 = seq__26172;
var G__26177 = chunk__26173;
var G__26178 = count__26174;
var G__26179 = (i__26175 + 1);
seq__26172 = G__26176;
chunk__26173 = G__26177;
count__26174 = G__26178;
i__26175 = G__26179;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26172);if(temp__4092__auto__)
{var seq__26172__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26172__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26172__$1);{
var G__26180 = cljs.core.chunk_rest(seq__26172__$1);
var G__26181 = c__4148__auto__;
var G__26182 = cljs.core.count(c__4148__auto__);
var G__26183 = 0;
seq__26172 = G__26180;
chunk__26173 = G__26181;
count__26174 = G__26182;
i__26175 = G__26183;
continue;
}
} else
{var child = cljs.core.first(seq__26172__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26184 = cljs.core.next(seq__26172__$1);
var G__26185 = null;
var G__26186 = 0;
var G__26187 = 0;
seq__26172 = G__26184;
chunk__26173 = G__26185;
count__26174 = G__26186;
i__26175 = G__26187;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26189 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26189,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26189,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26189,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26190 = wrapper.lastChild;
var G__26191 = (level - 1);
wrapper = G__26190;
level = G__26191;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj26193 = {};return obj26193;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__26194){
var mesg = cljs.core.seq(arglist__26194);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__26195){
var mesg = cljs.core.seq(arglist__26195);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__26196){
var contents = cljs.core.seq(arglist__26196);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26197_SHARP_){return p1__26197_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26198_SHARP_,p2__26199_SHARP_){return goog.dom.insertChildAt(p1__26198_SHARP_,p2__26199_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26198_SHARP_,p2__26199_SHARP_){return goog.dom.insertChildAt(p1__26198_SHARP_,p2__26199_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26201_SHARP_,p2__26200_SHARP_){return goog.dom.insertSiblingBefore(p2__26200_SHARP_,p1__26201_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26201_SHARP_,p2__26200_SHARP_){return goog.dom.insertSiblingBefore(p2__26200_SHARP_,p1__26201_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26203_SHARP_,p2__26202_SHARP_){return goog.dom.insertSiblingAfter(p2__26202_SHARP_,p1__26203_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26203_SHARP_,p2__26202_SHARP_){return goog.dom.insertSiblingAfter(p2__26202_SHARP_,p1__26203_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26205_SHARP_,p2__26204_SHARP_){return goog.dom.replaceNode(p2__26204_SHARP_,p1__26205_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26205_SHARP_,p2__26204_SHARP_){return goog.dom.replaceNode(p2__26204_SHARP_,p1__26205_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__26210_26214 = cljs.core.seq(domina.nodes(content));var chunk__26211_26215 = null;var count__26212_26216 = 0;var i__26213_26217 = 0;while(true){
if((i__26213_26217 < count__26212_26216))
{var n_26218 = chunk__26211_26215.cljs$core$IIndexed$_nth$arity$2(null,i__26213_26217);goog.style.setStyle(n_26218,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26219 = seq__26210_26214;
var G__26220 = chunk__26211_26215;
var G__26221 = count__26212_26216;
var G__26222 = (i__26213_26217 + 1);
seq__26210_26214 = G__26219;
chunk__26211_26215 = G__26220;
count__26212_26216 = G__26221;
i__26213_26217 = G__26222;
continue;
}
} else
{var temp__4092__auto___26223 = cljs.core.seq(seq__26210_26214);if(temp__4092__auto___26223)
{var seq__26210_26224__$1 = temp__4092__auto___26223;if(cljs.core.chunked_seq_QMARK_(seq__26210_26224__$1))
{var c__4148__auto___26225 = cljs.core.chunk_first(seq__26210_26224__$1);{
var G__26226 = cljs.core.chunk_rest(seq__26210_26224__$1);
var G__26227 = c__4148__auto___26225;
var G__26228 = cljs.core.count(c__4148__auto___26225);
var G__26229 = 0;
seq__26210_26214 = G__26226;
chunk__26211_26215 = G__26227;
count__26212_26216 = G__26228;
i__26213_26217 = G__26229;
continue;
}
} else
{var n_26230 = cljs.core.first(seq__26210_26224__$1);goog.style.setStyle(n_26230,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26231 = cljs.core.next(seq__26210_26224__$1);
var G__26232 = null;
var G__26233 = 0;
var G__26234 = 0;
seq__26210_26214 = G__26231;
chunk__26211_26215 = G__26232;
count__26212_26216 = G__26233;
i__26213_26217 = G__26234;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26235){
var content = cljs.core.first(arglist__26235);
arglist__26235 = cljs.core.next(arglist__26235);
var name = cljs.core.first(arglist__26235);
var value = cljs.core.rest(arglist__26235);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26240_26244 = cljs.core.seq(domina.nodes(content));var chunk__26241_26245 = null;var count__26242_26246 = 0;var i__26243_26247 = 0;while(true){
if((i__26243_26247 < count__26242_26246))
{var n_26248 = chunk__26241_26245.cljs$core$IIndexed$_nth$arity$2(null,i__26243_26247);n_26248.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26249 = seq__26240_26244;
var G__26250 = chunk__26241_26245;
var G__26251 = count__26242_26246;
var G__26252 = (i__26243_26247 + 1);
seq__26240_26244 = G__26249;
chunk__26241_26245 = G__26250;
count__26242_26246 = G__26251;
i__26243_26247 = G__26252;
continue;
}
} else
{var temp__4092__auto___26253 = cljs.core.seq(seq__26240_26244);if(temp__4092__auto___26253)
{var seq__26240_26254__$1 = temp__4092__auto___26253;if(cljs.core.chunked_seq_QMARK_(seq__26240_26254__$1))
{var c__4148__auto___26255 = cljs.core.chunk_first(seq__26240_26254__$1);{
var G__26256 = cljs.core.chunk_rest(seq__26240_26254__$1);
var G__26257 = c__4148__auto___26255;
var G__26258 = cljs.core.count(c__4148__auto___26255);
var G__26259 = 0;
seq__26240_26244 = G__26256;
chunk__26241_26245 = G__26257;
count__26242_26246 = G__26258;
i__26243_26247 = G__26259;
continue;
}
} else
{var n_26260 = cljs.core.first(seq__26240_26254__$1);n_26260.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26261 = cljs.core.next(seq__26240_26254__$1);
var G__26262 = null;
var G__26263 = 0;
var G__26264 = 0;
seq__26240_26244 = G__26261;
chunk__26241_26245 = G__26262;
count__26242_26246 = G__26263;
i__26243_26247 = G__26264;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26265){
var content = cljs.core.first(arglist__26265);
arglist__26265 = cljs.core.next(arglist__26265);
var name = cljs.core.first(arglist__26265);
var value = cljs.core.rest(arglist__26265);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26270_26274 = cljs.core.seq(domina.nodes(content));var chunk__26271_26275 = null;var count__26272_26276 = 0;var i__26273_26277 = 0;while(true){
if((i__26273_26277 < count__26272_26276))
{var n_26278 = chunk__26271_26275.cljs$core$IIndexed$_nth$arity$2(null,i__26273_26277);n_26278.removeAttribute(cljs.core.name(name));
{
var G__26279 = seq__26270_26274;
var G__26280 = chunk__26271_26275;
var G__26281 = count__26272_26276;
var G__26282 = (i__26273_26277 + 1);
seq__26270_26274 = G__26279;
chunk__26271_26275 = G__26280;
count__26272_26276 = G__26281;
i__26273_26277 = G__26282;
continue;
}
} else
{var temp__4092__auto___26283 = cljs.core.seq(seq__26270_26274);if(temp__4092__auto___26283)
{var seq__26270_26284__$1 = temp__4092__auto___26283;if(cljs.core.chunked_seq_QMARK_(seq__26270_26284__$1))
{var c__4148__auto___26285 = cljs.core.chunk_first(seq__26270_26284__$1);{
var G__26286 = cljs.core.chunk_rest(seq__26270_26284__$1);
var G__26287 = c__4148__auto___26285;
var G__26288 = cljs.core.count(c__4148__auto___26285);
var G__26289 = 0;
seq__26270_26274 = G__26286;
chunk__26271_26275 = G__26287;
count__26272_26276 = G__26288;
i__26273_26277 = G__26289;
continue;
}
} else
{var n_26290 = cljs.core.first(seq__26270_26284__$1);n_26290.removeAttribute(cljs.core.name(name));
{
var G__26291 = cljs.core.next(seq__26270_26284__$1);
var G__26292 = null;
var G__26293 = 0;
var G__26294 = 0;
seq__26270_26274 = G__26291;
chunk__26271_26275 = G__26292;
count__26272_26276 = G__26293;
i__26273_26277 = G__26294;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26296 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26296,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$182)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26297_SHARP_){var attr = attrs__$1.item(p1__26297_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26304_26310 = cljs.core.seq(styles);var chunk__26305_26311 = null;var count__26306_26312 = 0;var i__26307_26313 = 0;while(true){
if((i__26307_26313 < count__26306_26312))
{var vec__26308_26314 = chunk__26305_26311.cljs$core$IIndexed$_nth$arity$2(null,i__26307_26313);var name_26315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26308_26314,0,null);var value_26316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26308_26314,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26315,cljs.core.array_seq([value_26316], 0));
{
var G__26317 = seq__26304_26310;
var G__26318 = chunk__26305_26311;
var G__26319 = count__26306_26312;
var G__26320 = (i__26307_26313 + 1);
seq__26304_26310 = G__26317;
chunk__26305_26311 = G__26318;
count__26306_26312 = G__26319;
i__26307_26313 = G__26320;
continue;
}
} else
{var temp__4092__auto___26321 = cljs.core.seq(seq__26304_26310);if(temp__4092__auto___26321)
{var seq__26304_26322__$1 = temp__4092__auto___26321;if(cljs.core.chunked_seq_QMARK_(seq__26304_26322__$1))
{var c__4148__auto___26323 = cljs.core.chunk_first(seq__26304_26322__$1);{
var G__26324 = cljs.core.chunk_rest(seq__26304_26322__$1);
var G__26325 = c__4148__auto___26323;
var G__26326 = cljs.core.count(c__4148__auto___26323);
var G__26327 = 0;
seq__26304_26310 = G__26324;
chunk__26305_26311 = G__26325;
count__26306_26312 = G__26326;
i__26307_26313 = G__26327;
continue;
}
} else
{var vec__26309_26328 = cljs.core.first(seq__26304_26322__$1);var name_26329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26309_26328,0,null);var value_26330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26309_26328,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26329,cljs.core.array_seq([value_26330], 0));
{
var G__26331 = cljs.core.next(seq__26304_26322__$1);
var G__26332 = null;
var G__26333 = 0;
var G__26334 = 0;
seq__26304_26310 = G__26331;
chunk__26305_26311 = G__26332;
count__26306_26312 = G__26333;
i__26307_26313 = G__26334;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26341_26347 = cljs.core.seq(attrs);var chunk__26342_26348 = null;var count__26343_26349 = 0;var i__26344_26350 = 0;while(true){
if((i__26344_26350 < count__26343_26349))
{var vec__26345_26351 = chunk__26342_26348.cljs$core$IIndexed$_nth$arity$2(null,i__26344_26350);var name_26352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26345_26351,0,null);var value_26353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26345_26351,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26352,cljs.core.array_seq([value_26353], 0));
{
var G__26354 = seq__26341_26347;
var G__26355 = chunk__26342_26348;
var G__26356 = count__26343_26349;
var G__26357 = (i__26344_26350 + 1);
seq__26341_26347 = G__26354;
chunk__26342_26348 = G__26355;
count__26343_26349 = G__26356;
i__26344_26350 = G__26357;
continue;
}
} else
{var temp__4092__auto___26358 = cljs.core.seq(seq__26341_26347);if(temp__4092__auto___26358)
{var seq__26341_26359__$1 = temp__4092__auto___26358;if(cljs.core.chunked_seq_QMARK_(seq__26341_26359__$1))
{var c__4148__auto___26360 = cljs.core.chunk_first(seq__26341_26359__$1);{
var G__26361 = cljs.core.chunk_rest(seq__26341_26359__$1);
var G__26362 = c__4148__auto___26360;
var G__26363 = cljs.core.count(c__4148__auto___26360);
var G__26364 = 0;
seq__26341_26347 = G__26361;
chunk__26342_26348 = G__26362;
count__26343_26349 = G__26363;
i__26344_26350 = G__26364;
continue;
}
} else
{var vec__26346_26365 = cljs.core.first(seq__26341_26359__$1);var name_26366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26346_26365,0,null);var value_26367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26346_26365,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26366,cljs.core.array_seq([value_26367], 0));
{
var G__26368 = cljs.core.next(seq__26341_26359__$1);
var G__26369 = null;
var G__26370 = 0;
var G__26371 = 0;
seq__26341_26347 = G__26368;
chunk__26342_26348 = G__26369;
count__26343_26349 = G__26370;
i__26344_26350 = G__26371;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26376_26380 = cljs.core.seq(domina.nodes(content));var chunk__26377_26381 = null;var count__26378_26382 = 0;var i__26379_26383 = 0;while(true){
if((i__26379_26383 < count__26378_26382))
{var node_26384 = chunk__26377_26381.cljs$core$IIndexed$_nth$arity$2(null,i__26379_26383);goog.dom.classes.add(node_26384,class$);
{
var G__26385 = seq__26376_26380;
var G__26386 = chunk__26377_26381;
var G__26387 = count__26378_26382;
var G__26388 = (i__26379_26383 + 1);
seq__26376_26380 = G__26385;
chunk__26377_26381 = G__26386;
count__26378_26382 = G__26387;
i__26379_26383 = G__26388;
continue;
}
} else
{var temp__4092__auto___26389 = cljs.core.seq(seq__26376_26380);if(temp__4092__auto___26389)
{var seq__26376_26390__$1 = temp__4092__auto___26389;if(cljs.core.chunked_seq_QMARK_(seq__26376_26390__$1))
{var c__4148__auto___26391 = cljs.core.chunk_first(seq__26376_26390__$1);{
var G__26392 = cljs.core.chunk_rest(seq__26376_26390__$1);
var G__26393 = c__4148__auto___26391;
var G__26394 = cljs.core.count(c__4148__auto___26391);
var G__26395 = 0;
seq__26376_26380 = G__26392;
chunk__26377_26381 = G__26393;
count__26378_26382 = G__26394;
i__26379_26383 = G__26395;
continue;
}
} else
{var node_26396 = cljs.core.first(seq__26376_26390__$1);goog.dom.classes.add(node_26396,class$);
{
var G__26397 = cljs.core.next(seq__26376_26390__$1);
var G__26398 = null;
var G__26399 = 0;
var G__26400 = 0;
seq__26376_26380 = G__26397;
chunk__26377_26381 = G__26398;
count__26378_26382 = G__26399;
i__26379_26383 = G__26400;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26405_26409 = cljs.core.seq(domina.nodes(content));var chunk__26406_26410 = null;var count__26407_26411 = 0;var i__26408_26412 = 0;while(true){
if((i__26408_26412 < count__26407_26411))
{var node_26413 = chunk__26406_26410.cljs$core$IIndexed$_nth$arity$2(null,i__26408_26412);goog.dom.classes.remove(node_26413,class$);
{
var G__26414 = seq__26405_26409;
var G__26415 = chunk__26406_26410;
var G__26416 = count__26407_26411;
var G__26417 = (i__26408_26412 + 1);
seq__26405_26409 = G__26414;
chunk__26406_26410 = G__26415;
count__26407_26411 = G__26416;
i__26408_26412 = G__26417;
continue;
}
} else
{var temp__4092__auto___26418 = cljs.core.seq(seq__26405_26409);if(temp__4092__auto___26418)
{var seq__26405_26419__$1 = temp__4092__auto___26418;if(cljs.core.chunked_seq_QMARK_(seq__26405_26419__$1))
{var c__4148__auto___26420 = cljs.core.chunk_first(seq__26405_26419__$1);{
var G__26421 = cljs.core.chunk_rest(seq__26405_26419__$1);
var G__26422 = c__4148__auto___26420;
var G__26423 = cljs.core.count(c__4148__auto___26420);
var G__26424 = 0;
seq__26405_26409 = G__26421;
chunk__26406_26410 = G__26422;
count__26407_26411 = G__26423;
i__26408_26412 = G__26424;
continue;
}
} else
{var node_26425 = cljs.core.first(seq__26405_26419__$1);goog.dom.classes.remove(node_26425,class$);
{
var G__26426 = cljs.core.next(seq__26405_26419__$1);
var G__26427 = null;
var G__26428 = 0;
var G__26429 = 0;
seq__26405_26409 = G__26426;
chunk__26406_26410 = G__26427;
count__26407_26411 = G__26428;
i__26408_26412 = G__26429;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26434_26438 = cljs.core.seq(domina.nodes(content));var chunk__26435_26439 = null;var count__26436_26440 = 0;var i__26437_26441 = 0;while(true){
if((i__26437_26441 < count__26436_26440))
{var node_26442 = chunk__26435_26439.cljs$core$IIndexed$_nth$arity$2(null,i__26437_26441);goog.dom.classes.toggle(node_26442,class$);
{
var G__26443 = seq__26434_26438;
var G__26444 = chunk__26435_26439;
var G__26445 = count__26436_26440;
var G__26446 = (i__26437_26441 + 1);
seq__26434_26438 = G__26443;
chunk__26435_26439 = G__26444;
count__26436_26440 = G__26445;
i__26437_26441 = G__26446;
continue;
}
} else
{var temp__4092__auto___26447 = cljs.core.seq(seq__26434_26438);if(temp__4092__auto___26447)
{var seq__26434_26448__$1 = temp__4092__auto___26447;if(cljs.core.chunked_seq_QMARK_(seq__26434_26448__$1))
{var c__4148__auto___26449 = cljs.core.chunk_first(seq__26434_26448__$1);{
var G__26450 = cljs.core.chunk_rest(seq__26434_26448__$1);
var G__26451 = c__4148__auto___26449;
var G__26452 = cljs.core.count(c__4148__auto___26449);
var G__26453 = 0;
seq__26434_26438 = G__26450;
chunk__26435_26439 = G__26451;
count__26436_26440 = G__26452;
i__26437_26441 = G__26453;
continue;
}
} else
{var node_26454 = cljs.core.first(seq__26434_26448__$1);goog.dom.classes.toggle(node_26454,class$);
{
var G__26455 = cljs.core.next(seq__26434_26448__$1);
var G__26456 = null;
var G__26457 = 0;
var G__26458 = 0;
seq__26434_26438 = G__26455;
chunk__26435_26439 = G__26456;
count__26436_26440 = G__26457;
i__26437_26441 = G__26458;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26467__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26463_26468 = cljs.core.seq(domina.nodes(content));var chunk__26464_26469 = null;var count__26465_26470 = 0;var i__26466_26471 = 0;while(true){
if((i__26466_26471 < count__26465_26470))
{var node_26472 = chunk__26464_26469.cljs$core$IIndexed$_nth$arity$2(null,i__26466_26471);goog.dom.classes.set(node_26472,classes_26467__$1);
{
var G__26473 = seq__26463_26468;
var G__26474 = chunk__26464_26469;
var G__26475 = count__26465_26470;
var G__26476 = (i__26466_26471 + 1);
seq__26463_26468 = G__26473;
chunk__26464_26469 = G__26474;
count__26465_26470 = G__26475;
i__26466_26471 = G__26476;
continue;
}
} else
{var temp__4092__auto___26477 = cljs.core.seq(seq__26463_26468);if(temp__4092__auto___26477)
{var seq__26463_26478__$1 = temp__4092__auto___26477;if(cljs.core.chunked_seq_QMARK_(seq__26463_26478__$1))
{var c__4148__auto___26479 = cljs.core.chunk_first(seq__26463_26478__$1);{
var G__26480 = cljs.core.chunk_rest(seq__26463_26478__$1);
var G__26481 = c__4148__auto___26479;
var G__26482 = cljs.core.count(c__4148__auto___26479);
var G__26483 = 0;
seq__26463_26468 = G__26480;
chunk__26464_26469 = G__26481;
count__26465_26470 = G__26482;
i__26466_26471 = G__26483;
continue;
}
} else
{var node_26484 = cljs.core.first(seq__26463_26478__$1);goog.dom.classes.set(node_26484,classes_26467__$1);
{
var G__26485 = cljs.core.next(seq__26463_26478__$1);
var G__26486 = null;
var G__26487 = 0;
var G__26488 = 0;
seq__26463_26468 = G__26485;
chunk__26464_26469 = G__26486;
count__26465_26470 = G__26487;
i__26466_26471 = G__26488;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26493_26497 = cljs.core.seq(domina.nodes(content));var chunk__26494_26498 = null;var count__26495_26499 = 0;var i__26496_26500 = 0;while(true){
if((i__26496_26500 < count__26495_26499))
{var node_26501 = chunk__26494_26498.cljs$core$IIndexed$_nth$arity$2(null,i__26496_26500);goog.dom.setTextContent(node_26501,value);
{
var G__26502 = seq__26493_26497;
var G__26503 = chunk__26494_26498;
var G__26504 = count__26495_26499;
var G__26505 = (i__26496_26500 + 1);
seq__26493_26497 = G__26502;
chunk__26494_26498 = G__26503;
count__26495_26499 = G__26504;
i__26496_26500 = G__26505;
continue;
}
} else
{var temp__4092__auto___26506 = cljs.core.seq(seq__26493_26497);if(temp__4092__auto___26506)
{var seq__26493_26507__$1 = temp__4092__auto___26506;if(cljs.core.chunked_seq_QMARK_(seq__26493_26507__$1))
{var c__4148__auto___26508 = cljs.core.chunk_first(seq__26493_26507__$1);{
var G__26509 = cljs.core.chunk_rest(seq__26493_26507__$1);
var G__26510 = c__4148__auto___26508;
var G__26511 = cljs.core.count(c__4148__auto___26508);
var G__26512 = 0;
seq__26493_26497 = G__26509;
chunk__26494_26498 = G__26510;
count__26495_26499 = G__26511;
i__26496_26500 = G__26512;
continue;
}
} else
{var node_26513 = cljs.core.first(seq__26493_26507__$1);goog.dom.setTextContent(node_26513,value);
{
var G__26514 = cljs.core.next(seq__26493_26507__$1);
var G__26515 = null;
var G__26516 = 0;
var G__26517 = 0;
seq__26493_26497 = G__26514;
chunk__26494_26498 = G__26515;
count__26495_26499 = G__26516;
i__26496_26500 = G__26517;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26522_26526 = cljs.core.seq(domina.nodes(content));var chunk__26523_26527 = null;var count__26524_26528 = 0;var i__26525_26529 = 0;while(true){
if((i__26525_26529 < count__26524_26528))
{var node_26530 = chunk__26523_26527.cljs$core$IIndexed$_nth$arity$2(null,i__26525_26529);goog.dom.forms.setValue(node_26530,value);
{
var G__26531 = seq__26522_26526;
var G__26532 = chunk__26523_26527;
var G__26533 = count__26524_26528;
var G__26534 = (i__26525_26529 + 1);
seq__26522_26526 = G__26531;
chunk__26523_26527 = G__26532;
count__26524_26528 = G__26533;
i__26525_26529 = G__26534;
continue;
}
} else
{var temp__4092__auto___26535 = cljs.core.seq(seq__26522_26526);if(temp__4092__auto___26535)
{var seq__26522_26536__$1 = temp__4092__auto___26535;if(cljs.core.chunked_seq_QMARK_(seq__26522_26536__$1))
{var c__4148__auto___26537 = cljs.core.chunk_first(seq__26522_26536__$1);{
var G__26538 = cljs.core.chunk_rest(seq__26522_26536__$1);
var G__26539 = c__4148__auto___26537;
var G__26540 = cljs.core.count(c__4148__auto___26537);
var G__26541 = 0;
seq__26522_26526 = G__26538;
chunk__26523_26527 = G__26539;
count__26524_26528 = G__26540;
i__26525_26529 = G__26541;
continue;
}
} else
{var node_26542 = cljs.core.first(seq__26522_26536__$1);goog.dom.forms.setValue(node_26542,value);
{
var G__26543 = cljs.core.next(seq__26522_26536__$1);
var G__26544 = null;
var G__26545 = 0;
var G__26546 = 0;
seq__26522_26526 = G__26543;
chunk__26523_26527 = G__26544;
count__26524_26528 = G__26545;
i__26525_26529 = G__26546;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_26557 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26553_26558 = cljs.core.seq(domina.nodes(content));var chunk__26554_26559 = null;var count__26555_26560 = 0;var i__26556_26561 = 0;while(true){
if((i__26556_26561 < count__26555_26560))
{var node_26562 = chunk__26554_26559.cljs$core$IIndexed$_nth$arity$2(null,i__26556_26561);node_26562.innerHTML = value_26557;
{
var G__26563 = seq__26553_26558;
var G__26564 = chunk__26554_26559;
var G__26565 = count__26555_26560;
var G__26566 = (i__26556_26561 + 1);
seq__26553_26558 = G__26563;
chunk__26554_26559 = G__26564;
count__26555_26560 = G__26565;
i__26556_26561 = G__26566;
continue;
}
} else
{var temp__4092__auto___26567 = cljs.core.seq(seq__26553_26558);if(temp__4092__auto___26567)
{var seq__26553_26568__$1 = temp__4092__auto___26567;if(cljs.core.chunked_seq_QMARK_(seq__26553_26568__$1))
{var c__4148__auto___26569 = cljs.core.chunk_first(seq__26553_26568__$1);{
var G__26570 = cljs.core.chunk_rest(seq__26553_26568__$1);
var G__26571 = c__4148__auto___26569;
var G__26572 = cljs.core.count(c__4148__auto___26569);
var G__26573 = 0;
seq__26553_26558 = G__26570;
chunk__26554_26559 = G__26571;
count__26555_26560 = G__26572;
i__26556_26561 = G__26573;
continue;
}
} else
{var node_26574 = cljs.core.first(seq__26553_26568__$1);node_26574.innerHTML = value_26557;
{
var G__26575 = cljs.core.next(seq__26553_26568__$1);
var G__26576 = null;
var G__26577 = 0;
var G__26578 = 0;
seq__26553_26558 = G__26575;
chunk__26554_26559 = G__26576;
count__26555_26560 = G__26577;
i__26556_26561 = G__26578;
continue;
}
}
} else
{}
}
break;
}
}catch (e26552){if((e26552 instanceof Error))
{var e_26579 = e26552;domina.replace_children_BANG_(content,value_26557);
} else
{if(cljs.core.constant$keyword$182)
{throw e26552;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26586_26590 = cljs.core.seq(children);var chunk__26587_26591 = null;var count__26588_26592 = 0;var i__26589_26593 = 0;while(true){
if((i__26589_26593 < count__26588_26592))
{var child_26594 = chunk__26587_26591.cljs$core$IIndexed$_nth$arity$2(null,i__26589_26593);frag.appendChild(child_26594);
{
var G__26595 = seq__26586_26590;
var G__26596 = chunk__26587_26591;
var G__26597 = count__26588_26592;
var G__26598 = (i__26589_26593 + 1);
seq__26586_26590 = G__26595;
chunk__26587_26591 = G__26596;
count__26588_26592 = G__26597;
i__26589_26593 = G__26598;
continue;
}
} else
{var temp__4092__auto___26599 = cljs.core.seq(seq__26586_26590);if(temp__4092__auto___26599)
{var seq__26586_26600__$1 = temp__4092__auto___26599;if(cljs.core.chunked_seq_QMARK_(seq__26586_26600__$1))
{var c__4148__auto___26601 = cljs.core.chunk_first(seq__26586_26600__$1);{
var G__26602 = cljs.core.chunk_rest(seq__26586_26600__$1);
var G__26603 = c__4148__auto___26601;
var G__26604 = cljs.core.count(c__4148__auto___26601);
var G__26605 = 0;
seq__26586_26590 = G__26602;
chunk__26587_26591 = G__26603;
count__26588_26592 = G__26604;
i__26589_26593 = G__26605;
continue;
}
} else
{var child_26606 = cljs.core.first(seq__26586_26600__$1);frag.appendChild(child_26606);
{
var G__26607 = cljs.core.next(seq__26586_26600__$1);
var G__26608 = null;
var G__26609 = 0;
var G__26610 = 0;
seq__26586_26590 = G__26607;
chunk__26587_26591 = G__26608;
count__26588_26592 = G__26609;
i__26589_26593 = G__26610;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26580_SHARP_,p2__26581_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26580_SHARP_,p2__26581_SHARP_) : f.call(null,p1__26580_SHARP_,p2__26581_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__26612 = list_thing;if(G__26612)
{var bit__4050__auto__ = (G__26612.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26612.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26612.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26612);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26612);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$183)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__26613 = content;if(G__26613)
{var bit__4050__auto__ = (G__26613.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26613.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26613);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26613);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$183)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__26614 = content;if(G__26614)
{var bit__4050__auto__ = (G__26614.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26614.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26614.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26614);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26614);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$183)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
