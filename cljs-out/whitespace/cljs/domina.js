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
var opt_wrapper_37174 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37175 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37175,table_section_wrapper_37175,opt_wrapper_37174,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37176,table_section_wrapper_37175,cell_wrapper_37176,opt_wrapper_37174,table_section_wrapper_37175,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37175]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37181 = cljs.core.seq.call(null,tbody);var chunk__37182 = null;var count__37183 = 0;var i__37184 = 0;while(true){
if((i__37184 < count__37183))
{var child = cljs.core._nth.call(null,chunk__37182,i__37184);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37185 = seq__37181;
var G__37186 = chunk__37182;
var G__37187 = count__37183;
var G__37188 = (i__37184 + 1);
seq__37181 = G__37185;
chunk__37182 = G__37186;
count__37183 = G__37187;
i__37184 = G__37188;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37181);if(temp__4092__auto__)
{var seq__37181__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37181__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37181__$1);{
var G__37189 = cljs.core.chunk_rest.call(null,seq__37181__$1);
var G__37190 = c__4148__auto__;
var G__37191 = cljs.core.count.call(null,c__4148__auto__);
var G__37192 = 0;
seq__37181 = G__37189;
chunk__37182 = G__37190;
count__37183 = G__37191;
i__37184 = G__37192;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37181__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37193 = cljs.core.next.call(null,seq__37181__$1);
var G__37194 = null;
var G__37195 = 0;
var G__37196 = 0;
seq__37181 = G__37193;
chunk__37182 = G__37194;
count__37183 = G__37195;
i__37184 = G__37196;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37198 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37198,0,null);var start_wrap = cljs.core.nth.call(null,vec__37198,1,null);var end_wrap = cljs.core.nth.call(null,vec__37198,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37199 = wrapper.lastChild;
var G__37200 = (level - 1);
wrapper = G__37199;
level = G__37200;
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
domina.DomContent = (function (){var obj37202 = {};return obj37202;
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
log_debug.cljs$lang$applyTo = (function (arglist__37203){
var mesg = cljs.core.seq(arglist__37203);
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
log.cljs$lang$applyTo = (function (arglist__37204){
var mesg = cljs.core.seq(arglist__37204);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37205){
var contents = cljs.core.seq(arglist__37205);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37206_SHARP_){return p1__37206_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37207_SHARP_,p2__37208_SHARP_){return goog.dom.insertChildAt(p1__37207_SHARP_,p2__37208_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37210_SHARP_,p2__37209_SHARP_){return goog.dom.insertSiblingBefore(p2__37209_SHARP_,p1__37210_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37212_SHARP_,p2__37211_SHARP_){return goog.dom.insertSiblingAfter(p2__37211_SHARP_,p1__37212_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37214_SHARP_,p2__37213_SHARP_){return goog.dom.replaceNode(p2__37213_SHARP_,p1__37214_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37219_37223 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37220_37224 = null;var count__37221_37225 = 0;var i__37222_37226 = 0;while(true){
if((i__37222_37226 < count__37221_37225))
{var n_37227 = cljs.core._nth.call(null,chunk__37220_37224,i__37222_37226);goog.style.setStyle(n_37227,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37228 = seq__37219_37223;
var G__37229 = chunk__37220_37224;
var G__37230 = count__37221_37225;
var G__37231 = (i__37222_37226 + 1);
seq__37219_37223 = G__37228;
chunk__37220_37224 = G__37229;
count__37221_37225 = G__37230;
i__37222_37226 = G__37231;
continue;
}
} else
{var temp__4092__auto___37232 = cljs.core.seq.call(null,seq__37219_37223);if(temp__4092__auto___37232)
{var seq__37219_37233__$1 = temp__4092__auto___37232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37219_37233__$1))
{var c__4148__auto___37234 = cljs.core.chunk_first.call(null,seq__37219_37233__$1);{
var G__37235 = cljs.core.chunk_rest.call(null,seq__37219_37233__$1);
var G__37236 = c__4148__auto___37234;
var G__37237 = cljs.core.count.call(null,c__4148__auto___37234);
var G__37238 = 0;
seq__37219_37223 = G__37235;
chunk__37220_37224 = G__37236;
count__37221_37225 = G__37237;
i__37222_37226 = G__37238;
continue;
}
} else
{var n_37239 = cljs.core.first.call(null,seq__37219_37233__$1);goog.style.setStyle(n_37239,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37240 = cljs.core.next.call(null,seq__37219_37233__$1);
var G__37241 = null;
var G__37242 = 0;
var G__37243 = 0;
seq__37219_37223 = G__37240;
chunk__37220_37224 = G__37241;
count__37221_37225 = G__37242;
i__37222_37226 = G__37243;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37244){
var content = cljs.core.first(arglist__37244);
arglist__37244 = cljs.core.next(arglist__37244);
var name = cljs.core.first(arglist__37244);
var value = cljs.core.rest(arglist__37244);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37249_37253 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37250_37254 = null;var count__37251_37255 = 0;var i__37252_37256 = 0;while(true){
if((i__37252_37256 < count__37251_37255))
{var n_37257 = cljs.core._nth.call(null,chunk__37250_37254,i__37252_37256);n_37257.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37258 = seq__37249_37253;
var G__37259 = chunk__37250_37254;
var G__37260 = count__37251_37255;
var G__37261 = (i__37252_37256 + 1);
seq__37249_37253 = G__37258;
chunk__37250_37254 = G__37259;
count__37251_37255 = G__37260;
i__37252_37256 = G__37261;
continue;
}
} else
{var temp__4092__auto___37262 = cljs.core.seq.call(null,seq__37249_37253);if(temp__4092__auto___37262)
{var seq__37249_37263__$1 = temp__4092__auto___37262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37249_37263__$1))
{var c__4148__auto___37264 = cljs.core.chunk_first.call(null,seq__37249_37263__$1);{
var G__37265 = cljs.core.chunk_rest.call(null,seq__37249_37263__$1);
var G__37266 = c__4148__auto___37264;
var G__37267 = cljs.core.count.call(null,c__4148__auto___37264);
var G__37268 = 0;
seq__37249_37253 = G__37265;
chunk__37250_37254 = G__37266;
count__37251_37255 = G__37267;
i__37252_37256 = G__37268;
continue;
}
} else
{var n_37269 = cljs.core.first.call(null,seq__37249_37263__$1);n_37269.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37270 = cljs.core.next.call(null,seq__37249_37263__$1);
var G__37271 = null;
var G__37272 = 0;
var G__37273 = 0;
seq__37249_37253 = G__37270;
chunk__37250_37254 = G__37271;
count__37251_37255 = G__37272;
i__37252_37256 = G__37273;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37274){
var content = cljs.core.first(arglist__37274);
arglist__37274 = cljs.core.next(arglist__37274);
var name = cljs.core.first(arglist__37274);
var value = cljs.core.rest(arglist__37274);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37279_37283 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37280_37284 = null;var count__37281_37285 = 0;var i__37282_37286 = 0;while(true){
if((i__37282_37286 < count__37281_37285))
{var n_37287 = cljs.core._nth.call(null,chunk__37280_37284,i__37282_37286);n_37287.removeAttribute(cljs.core.name.call(null,name));
{
var G__37288 = seq__37279_37283;
var G__37289 = chunk__37280_37284;
var G__37290 = count__37281_37285;
var G__37291 = (i__37282_37286 + 1);
seq__37279_37283 = G__37288;
chunk__37280_37284 = G__37289;
count__37281_37285 = G__37290;
i__37282_37286 = G__37291;
continue;
}
} else
{var temp__4092__auto___37292 = cljs.core.seq.call(null,seq__37279_37283);if(temp__4092__auto___37292)
{var seq__37279_37293__$1 = temp__4092__auto___37292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37279_37293__$1))
{var c__4148__auto___37294 = cljs.core.chunk_first.call(null,seq__37279_37293__$1);{
var G__37295 = cljs.core.chunk_rest.call(null,seq__37279_37293__$1);
var G__37296 = c__4148__auto___37294;
var G__37297 = cljs.core.count.call(null,c__4148__auto___37294);
var G__37298 = 0;
seq__37279_37283 = G__37295;
chunk__37280_37284 = G__37296;
count__37281_37285 = G__37297;
i__37282_37286 = G__37298;
continue;
}
} else
{var n_37299 = cljs.core.first.call(null,seq__37279_37293__$1);n_37299.removeAttribute(cljs.core.name.call(null,name));
{
var G__37300 = cljs.core.next.call(null,seq__37279_37293__$1);
var G__37301 = null;
var G__37302 = 0;
var G__37303 = 0;
seq__37279_37283 = G__37300;
chunk__37280_37284 = G__37301;
count__37281_37285 = G__37302;
i__37282_37286 = G__37303;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37305 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37305,0,null);var v = cljs.core.nth.call(null,vec__37305,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__37306_SHARP_){var attr = attrs__$1.item(p1__37306_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37313_37319 = cljs.core.seq.call(null,styles);var chunk__37314_37320 = null;var count__37315_37321 = 0;var i__37316_37322 = 0;while(true){
if((i__37316_37322 < count__37315_37321))
{var vec__37317_37323 = cljs.core._nth.call(null,chunk__37314_37320,i__37316_37322);var name_37324 = cljs.core.nth.call(null,vec__37317_37323,0,null);var value_37325 = cljs.core.nth.call(null,vec__37317_37323,1,null);domina.set_style_BANG_.call(null,content,name_37324,value_37325);
{
var G__37326 = seq__37313_37319;
var G__37327 = chunk__37314_37320;
var G__37328 = count__37315_37321;
var G__37329 = (i__37316_37322 + 1);
seq__37313_37319 = G__37326;
chunk__37314_37320 = G__37327;
count__37315_37321 = G__37328;
i__37316_37322 = G__37329;
continue;
}
} else
{var temp__4092__auto___37330 = cljs.core.seq.call(null,seq__37313_37319);if(temp__4092__auto___37330)
{var seq__37313_37331__$1 = temp__4092__auto___37330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37313_37331__$1))
{var c__4148__auto___37332 = cljs.core.chunk_first.call(null,seq__37313_37331__$1);{
var G__37333 = cljs.core.chunk_rest.call(null,seq__37313_37331__$1);
var G__37334 = c__4148__auto___37332;
var G__37335 = cljs.core.count.call(null,c__4148__auto___37332);
var G__37336 = 0;
seq__37313_37319 = G__37333;
chunk__37314_37320 = G__37334;
count__37315_37321 = G__37335;
i__37316_37322 = G__37336;
continue;
}
} else
{var vec__37318_37337 = cljs.core.first.call(null,seq__37313_37331__$1);var name_37338 = cljs.core.nth.call(null,vec__37318_37337,0,null);var value_37339 = cljs.core.nth.call(null,vec__37318_37337,1,null);domina.set_style_BANG_.call(null,content,name_37338,value_37339);
{
var G__37340 = cljs.core.next.call(null,seq__37313_37331__$1);
var G__37341 = null;
var G__37342 = 0;
var G__37343 = 0;
seq__37313_37319 = G__37340;
chunk__37314_37320 = G__37341;
count__37315_37321 = G__37342;
i__37316_37322 = G__37343;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37350_37356 = cljs.core.seq.call(null,attrs);var chunk__37351_37357 = null;var count__37352_37358 = 0;var i__37353_37359 = 0;while(true){
if((i__37353_37359 < count__37352_37358))
{var vec__37354_37360 = cljs.core._nth.call(null,chunk__37351_37357,i__37353_37359);var name_37361 = cljs.core.nth.call(null,vec__37354_37360,0,null);var value_37362 = cljs.core.nth.call(null,vec__37354_37360,1,null);domina.set_attr_BANG_.call(null,content,name_37361,value_37362);
{
var G__37363 = seq__37350_37356;
var G__37364 = chunk__37351_37357;
var G__37365 = count__37352_37358;
var G__37366 = (i__37353_37359 + 1);
seq__37350_37356 = G__37363;
chunk__37351_37357 = G__37364;
count__37352_37358 = G__37365;
i__37353_37359 = G__37366;
continue;
}
} else
{var temp__4092__auto___37367 = cljs.core.seq.call(null,seq__37350_37356);if(temp__4092__auto___37367)
{var seq__37350_37368__$1 = temp__4092__auto___37367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37350_37368__$1))
{var c__4148__auto___37369 = cljs.core.chunk_first.call(null,seq__37350_37368__$1);{
var G__37370 = cljs.core.chunk_rest.call(null,seq__37350_37368__$1);
var G__37371 = c__4148__auto___37369;
var G__37372 = cljs.core.count.call(null,c__4148__auto___37369);
var G__37373 = 0;
seq__37350_37356 = G__37370;
chunk__37351_37357 = G__37371;
count__37352_37358 = G__37372;
i__37353_37359 = G__37373;
continue;
}
} else
{var vec__37355_37374 = cljs.core.first.call(null,seq__37350_37368__$1);var name_37375 = cljs.core.nth.call(null,vec__37355_37374,0,null);var value_37376 = cljs.core.nth.call(null,vec__37355_37374,1,null);domina.set_attr_BANG_.call(null,content,name_37375,value_37376);
{
var G__37377 = cljs.core.next.call(null,seq__37350_37368__$1);
var G__37378 = null;
var G__37379 = 0;
var G__37380 = 0;
seq__37350_37356 = G__37377;
chunk__37351_37357 = G__37378;
count__37352_37358 = G__37379;
i__37353_37359 = G__37380;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37385_37389 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37386_37390 = null;var count__37387_37391 = 0;var i__37388_37392 = 0;while(true){
if((i__37388_37392 < count__37387_37391))
{var node_37393 = cljs.core._nth.call(null,chunk__37386_37390,i__37388_37392);goog.dom.classes.add(node_37393,class$);
{
var G__37394 = seq__37385_37389;
var G__37395 = chunk__37386_37390;
var G__37396 = count__37387_37391;
var G__37397 = (i__37388_37392 + 1);
seq__37385_37389 = G__37394;
chunk__37386_37390 = G__37395;
count__37387_37391 = G__37396;
i__37388_37392 = G__37397;
continue;
}
} else
{var temp__4092__auto___37398 = cljs.core.seq.call(null,seq__37385_37389);if(temp__4092__auto___37398)
{var seq__37385_37399__$1 = temp__4092__auto___37398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37385_37399__$1))
{var c__4148__auto___37400 = cljs.core.chunk_first.call(null,seq__37385_37399__$1);{
var G__37401 = cljs.core.chunk_rest.call(null,seq__37385_37399__$1);
var G__37402 = c__4148__auto___37400;
var G__37403 = cljs.core.count.call(null,c__4148__auto___37400);
var G__37404 = 0;
seq__37385_37389 = G__37401;
chunk__37386_37390 = G__37402;
count__37387_37391 = G__37403;
i__37388_37392 = G__37404;
continue;
}
} else
{var node_37405 = cljs.core.first.call(null,seq__37385_37399__$1);goog.dom.classes.add(node_37405,class$);
{
var G__37406 = cljs.core.next.call(null,seq__37385_37399__$1);
var G__37407 = null;
var G__37408 = 0;
var G__37409 = 0;
seq__37385_37389 = G__37406;
chunk__37386_37390 = G__37407;
count__37387_37391 = G__37408;
i__37388_37392 = G__37409;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37414_37418 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37415_37419 = null;var count__37416_37420 = 0;var i__37417_37421 = 0;while(true){
if((i__37417_37421 < count__37416_37420))
{var node_37422 = cljs.core._nth.call(null,chunk__37415_37419,i__37417_37421);goog.dom.classes.remove(node_37422,class$);
{
var G__37423 = seq__37414_37418;
var G__37424 = chunk__37415_37419;
var G__37425 = count__37416_37420;
var G__37426 = (i__37417_37421 + 1);
seq__37414_37418 = G__37423;
chunk__37415_37419 = G__37424;
count__37416_37420 = G__37425;
i__37417_37421 = G__37426;
continue;
}
} else
{var temp__4092__auto___37427 = cljs.core.seq.call(null,seq__37414_37418);if(temp__4092__auto___37427)
{var seq__37414_37428__$1 = temp__4092__auto___37427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37414_37428__$1))
{var c__4148__auto___37429 = cljs.core.chunk_first.call(null,seq__37414_37428__$1);{
var G__37430 = cljs.core.chunk_rest.call(null,seq__37414_37428__$1);
var G__37431 = c__4148__auto___37429;
var G__37432 = cljs.core.count.call(null,c__4148__auto___37429);
var G__37433 = 0;
seq__37414_37418 = G__37430;
chunk__37415_37419 = G__37431;
count__37416_37420 = G__37432;
i__37417_37421 = G__37433;
continue;
}
} else
{var node_37434 = cljs.core.first.call(null,seq__37414_37428__$1);goog.dom.classes.remove(node_37434,class$);
{
var G__37435 = cljs.core.next.call(null,seq__37414_37428__$1);
var G__37436 = null;
var G__37437 = 0;
var G__37438 = 0;
seq__37414_37418 = G__37435;
chunk__37415_37419 = G__37436;
count__37416_37420 = G__37437;
i__37417_37421 = G__37438;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37443_37447 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37444_37448 = null;var count__37445_37449 = 0;var i__37446_37450 = 0;while(true){
if((i__37446_37450 < count__37445_37449))
{var node_37451 = cljs.core._nth.call(null,chunk__37444_37448,i__37446_37450);goog.dom.classes.toggle(node_37451,class$);
{
var G__37452 = seq__37443_37447;
var G__37453 = chunk__37444_37448;
var G__37454 = count__37445_37449;
var G__37455 = (i__37446_37450 + 1);
seq__37443_37447 = G__37452;
chunk__37444_37448 = G__37453;
count__37445_37449 = G__37454;
i__37446_37450 = G__37455;
continue;
}
} else
{var temp__4092__auto___37456 = cljs.core.seq.call(null,seq__37443_37447);if(temp__4092__auto___37456)
{var seq__37443_37457__$1 = temp__4092__auto___37456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37443_37457__$1))
{var c__4148__auto___37458 = cljs.core.chunk_first.call(null,seq__37443_37457__$1);{
var G__37459 = cljs.core.chunk_rest.call(null,seq__37443_37457__$1);
var G__37460 = c__4148__auto___37458;
var G__37461 = cljs.core.count.call(null,c__4148__auto___37458);
var G__37462 = 0;
seq__37443_37447 = G__37459;
chunk__37444_37448 = G__37460;
count__37445_37449 = G__37461;
i__37446_37450 = G__37462;
continue;
}
} else
{var node_37463 = cljs.core.first.call(null,seq__37443_37457__$1);goog.dom.classes.toggle(node_37463,class$);
{
var G__37464 = cljs.core.next.call(null,seq__37443_37457__$1);
var G__37465 = null;
var G__37466 = 0;
var G__37467 = 0;
seq__37443_37447 = G__37464;
chunk__37444_37448 = G__37465;
count__37445_37449 = G__37466;
i__37446_37450 = G__37467;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37476__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__37472_37477 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37473_37478 = null;var count__37474_37479 = 0;var i__37475_37480 = 0;while(true){
if((i__37475_37480 < count__37474_37479))
{var node_37481 = cljs.core._nth.call(null,chunk__37473_37478,i__37475_37480);goog.dom.classes.set(node_37481,classes_37476__$1);
{
var G__37482 = seq__37472_37477;
var G__37483 = chunk__37473_37478;
var G__37484 = count__37474_37479;
var G__37485 = (i__37475_37480 + 1);
seq__37472_37477 = G__37482;
chunk__37473_37478 = G__37483;
count__37474_37479 = G__37484;
i__37475_37480 = G__37485;
continue;
}
} else
{var temp__4092__auto___37486 = cljs.core.seq.call(null,seq__37472_37477);if(temp__4092__auto___37486)
{var seq__37472_37487__$1 = temp__4092__auto___37486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37472_37487__$1))
{var c__4148__auto___37488 = cljs.core.chunk_first.call(null,seq__37472_37487__$1);{
var G__37489 = cljs.core.chunk_rest.call(null,seq__37472_37487__$1);
var G__37490 = c__4148__auto___37488;
var G__37491 = cljs.core.count.call(null,c__4148__auto___37488);
var G__37492 = 0;
seq__37472_37477 = G__37489;
chunk__37473_37478 = G__37490;
count__37474_37479 = G__37491;
i__37475_37480 = G__37492;
continue;
}
} else
{var node_37493 = cljs.core.first.call(null,seq__37472_37487__$1);goog.dom.classes.set(node_37493,classes_37476__$1);
{
var G__37494 = cljs.core.next.call(null,seq__37472_37487__$1);
var G__37495 = null;
var G__37496 = 0;
var G__37497 = 0;
seq__37472_37477 = G__37494;
chunk__37473_37478 = G__37495;
count__37474_37479 = G__37496;
i__37475_37480 = G__37497;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37502_37506 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37503_37507 = null;var count__37504_37508 = 0;var i__37505_37509 = 0;while(true){
if((i__37505_37509 < count__37504_37508))
{var node_37510 = cljs.core._nth.call(null,chunk__37503_37507,i__37505_37509);goog.dom.setTextContent(node_37510,value);
{
var G__37511 = seq__37502_37506;
var G__37512 = chunk__37503_37507;
var G__37513 = count__37504_37508;
var G__37514 = (i__37505_37509 + 1);
seq__37502_37506 = G__37511;
chunk__37503_37507 = G__37512;
count__37504_37508 = G__37513;
i__37505_37509 = G__37514;
continue;
}
} else
{var temp__4092__auto___37515 = cljs.core.seq.call(null,seq__37502_37506);if(temp__4092__auto___37515)
{var seq__37502_37516__$1 = temp__4092__auto___37515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37502_37516__$1))
{var c__4148__auto___37517 = cljs.core.chunk_first.call(null,seq__37502_37516__$1);{
var G__37518 = cljs.core.chunk_rest.call(null,seq__37502_37516__$1);
var G__37519 = c__4148__auto___37517;
var G__37520 = cljs.core.count.call(null,c__4148__auto___37517);
var G__37521 = 0;
seq__37502_37506 = G__37518;
chunk__37503_37507 = G__37519;
count__37504_37508 = G__37520;
i__37505_37509 = G__37521;
continue;
}
} else
{var node_37522 = cljs.core.first.call(null,seq__37502_37516__$1);goog.dom.setTextContent(node_37522,value);
{
var G__37523 = cljs.core.next.call(null,seq__37502_37516__$1);
var G__37524 = null;
var G__37525 = 0;
var G__37526 = 0;
seq__37502_37506 = G__37523;
chunk__37503_37507 = G__37524;
count__37504_37508 = G__37525;
i__37505_37509 = G__37526;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37531_37535 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37532_37536 = null;var count__37533_37537 = 0;var i__37534_37538 = 0;while(true){
if((i__37534_37538 < count__37533_37537))
{var node_37539 = cljs.core._nth.call(null,chunk__37532_37536,i__37534_37538);goog.dom.forms.setValue(node_37539,value);
{
var G__37540 = seq__37531_37535;
var G__37541 = chunk__37532_37536;
var G__37542 = count__37533_37537;
var G__37543 = (i__37534_37538 + 1);
seq__37531_37535 = G__37540;
chunk__37532_37536 = G__37541;
count__37533_37537 = G__37542;
i__37534_37538 = G__37543;
continue;
}
} else
{var temp__4092__auto___37544 = cljs.core.seq.call(null,seq__37531_37535);if(temp__4092__auto___37544)
{var seq__37531_37545__$1 = temp__4092__auto___37544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37531_37545__$1))
{var c__4148__auto___37546 = cljs.core.chunk_first.call(null,seq__37531_37545__$1);{
var G__37547 = cljs.core.chunk_rest.call(null,seq__37531_37545__$1);
var G__37548 = c__4148__auto___37546;
var G__37549 = cljs.core.count.call(null,c__4148__auto___37546);
var G__37550 = 0;
seq__37531_37535 = G__37547;
chunk__37532_37536 = G__37548;
count__37533_37537 = G__37549;
i__37534_37538 = G__37550;
continue;
}
} else
{var node_37551 = cljs.core.first.call(null,seq__37531_37545__$1);goog.dom.forms.setValue(node_37551,value);
{
var G__37552 = cljs.core.next.call(null,seq__37531_37545__$1);
var G__37553 = null;
var G__37554 = 0;
var G__37555 = 0;
seq__37531_37535 = G__37552;
chunk__37532_37536 = G__37553;
count__37533_37537 = G__37554;
i__37534_37538 = G__37555;
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
{var value_37566 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37562_37567 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37563_37568 = null;var count__37564_37569 = 0;var i__37565_37570 = 0;while(true){
if((i__37565_37570 < count__37564_37569))
{var node_37571 = cljs.core._nth.call(null,chunk__37563_37568,i__37565_37570);node_37571.innerHTML = value_37566;
{
var G__37572 = seq__37562_37567;
var G__37573 = chunk__37563_37568;
var G__37574 = count__37564_37569;
var G__37575 = (i__37565_37570 + 1);
seq__37562_37567 = G__37572;
chunk__37563_37568 = G__37573;
count__37564_37569 = G__37574;
i__37565_37570 = G__37575;
continue;
}
} else
{var temp__4092__auto___37576 = cljs.core.seq.call(null,seq__37562_37567);if(temp__4092__auto___37576)
{var seq__37562_37577__$1 = temp__4092__auto___37576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37562_37577__$1))
{var c__4148__auto___37578 = cljs.core.chunk_first.call(null,seq__37562_37577__$1);{
var G__37579 = cljs.core.chunk_rest.call(null,seq__37562_37577__$1);
var G__37580 = c__4148__auto___37578;
var G__37581 = cljs.core.count.call(null,c__4148__auto___37578);
var G__37582 = 0;
seq__37562_37567 = G__37579;
chunk__37563_37568 = G__37580;
count__37564_37569 = G__37581;
i__37565_37570 = G__37582;
continue;
}
} else
{var node_37583 = cljs.core.first.call(null,seq__37562_37577__$1);node_37583.innerHTML = value_37566;
{
var G__37584 = cljs.core.next.call(null,seq__37562_37577__$1);
var G__37585 = null;
var G__37586 = 0;
var G__37587 = 0;
seq__37562_37567 = G__37584;
chunk__37563_37568 = G__37585;
count__37564_37569 = G__37586;
i__37565_37570 = G__37587;
continue;
}
}
} else
{}
}
break;
}
}catch (e37561){if((e37561 instanceof Error))
{var e_37588 = e37561;domina.replace_children_BANG_.call(null,content,value_37566);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37561;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37595_37599 = cljs.core.seq.call(null,children);var chunk__37596_37600 = null;var count__37597_37601 = 0;var i__37598_37602 = 0;while(true){
if((i__37598_37602 < count__37597_37601))
{var child_37603 = cljs.core._nth.call(null,chunk__37596_37600,i__37598_37602);frag.appendChild(child_37603);
{
var G__37604 = seq__37595_37599;
var G__37605 = chunk__37596_37600;
var G__37606 = count__37597_37601;
var G__37607 = (i__37598_37602 + 1);
seq__37595_37599 = G__37604;
chunk__37596_37600 = G__37605;
count__37597_37601 = G__37606;
i__37598_37602 = G__37607;
continue;
}
} else
{var temp__4092__auto___37608 = cljs.core.seq.call(null,seq__37595_37599);if(temp__4092__auto___37608)
{var seq__37595_37609__$1 = temp__4092__auto___37608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37595_37609__$1))
{var c__4148__auto___37610 = cljs.core.chunk_first.call(null,seq__37595_37609__$1);{
var G__37611 = cljs.core.chunk_rest.call(null,seq__37595_37609__$1);
var G__37612 = c__4148__auto___37610;
var G__37613 = cljs.core.count.call(null,c__4148__auto___37610);
var G__37614 = 0;
seq__37595_37599 = G__37611;
chunk__37596_37600 = G__37612;
count__37597_37601 = G__37613;
i__37598_37602 = G__37614;
continue;
}
} else
{var child_37615 = cljs.core.first.call(null,seq__37595_37609__$1);frag.appendChild(child_37615);
{
var G__37616 = cljs.core.next.call(null,seq__37595_37609__$1);
var G__37617 = null;
var G__37618 = 0;
var G__37619 = 0;
seq__37595_37599 = G__37616;
chunk__37596_37600 = G__37617;
count__37597_37601 = G__37618;
i__37598_37602 = G__37619;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__37589_SHARP_,p2__37590_SHARP_){return f.call(null,p1__37589_SHARP_,p2__37590_SHARP_);
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
{if((function (){var G__37621 = list_thing;if(G__37621)
{var bit__4050__auto__ = (G__37621.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37621.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37621.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37621);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37621);
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
{if((function (){var G__37622 = content;if(G__37622)
{var bit__4050__auto__ = (G__37622.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37622.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37622.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37622);
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
{if((function (){var G__37623 = content;if(G__37623)
{var bit__4050__auto__ = (G__37623.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37623.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37623);
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
